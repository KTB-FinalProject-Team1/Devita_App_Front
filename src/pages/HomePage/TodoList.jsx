import React, { useEffect, useState } from 'react';
import * as style from './style/TodoList'
import { Text, View } from "react-native";
import AddCategoryModal from './TodoListAddCategory';
import TodoListAddModal from "./TodoListAddModal";
import ButtonBlue from '../../components/Buttons/ButtonBlue';
import TodoItem from './TodoItem';
import { useRecoilState } from 'recoil';
import { todosState, categoriesState } from '../../recoil/atoms';
import { addTodo } from '../../api/AddTodo';
import { updateTodo } from '../../api/UpdateTodo';
import { getTodo } from '../../api/GetToDo';
import { getCategories } from '../../api/GetCategories';
import ExampleTodos from "../../assets/DummyData/ExampleTodos";


const TodoList = ({ selectedDate }) => {
    const [todos, setTodos] = useRecoilState(todosState);
    const [categories, setCategories] = useRecoilState(categoriesState);
    const [openCategory, setOpenCategory] = useState(null);

    const [inputValue, setInputValue] = useState('');

    const formattedDate = selectedDate.toLocaleDateString('en-CA');
    // 날짜별로 할 일 필터링
    const filteredTodos = ExampleTodos.filter(todo => todo.date === formattedDate);

    // 날짜에서 categoryId 별로 그룹화
    const groupedTodos = filteredTodos.reduce((groups, todo) => {
        if (!groups[todo.categoryId]) {
            groups[todo.categoryId] = {
                categoryName: todo.categoryName,
                color: todo.color,
                todos: [],
            };
        }
        groups[todo.categoryId].todos.push(todo);
        return groups;
    }, {});


    const handleAddTodo = async (todoText, categoryId) => {
        const todoData = {
            categoryId,
            title: todoText,
            date: formattedDate,
            todoId: Math.random().toString(36).substring(7), // 임시 ID
            isChecked: false, // 기본 상태
            isTemp: true, // 임시 데이터 여부
        };

        // 임시로 상태 업데이트
        setTodos((prevTodos) => [...prevTodos, todoData]);

        try {
            // API 호출
            const response = await addTodo(todoData.categoryId, todoData.title, todoData.date);

            // 성공 시, 서버에서 받은 데이터로 상태 업데이트
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.todoId === todoData.todoId ? { ...todo, ...response, isTemp: false } : todo
                )
            );
        } catch (error) {
            console.error("할 일 추가 실패:", error);

            // 실패 처리 (필요에 따라 사용자에게 알림 표시)
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.todoId === todoData.todoId ? { ...todo, isTemp: true } : todo
                )
            );
        }
    };

    const handleToggleClick = async (todoId) => {
        try {
            await updateTodo(todoId);
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.todoId === todoId ? { ...todo, isChecked: !todo.isChecked } : todo
                )
            );
        } catch (error) {

            // 실패해도 상태를 반영
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.todoId === todoId ? { ...todo, isChecked: !todo.isChecked, isTemp: true } : todo
                )
            );
            console.log('상태변경',todos);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesData = await getCategories();
                const todosData = await getTodo('monthly');
                setCategories(categoriesData);
                setTodos(todosData);
            } catch (error) {
                console.error("데이터 로드 실패, ExampleTodos로 대체합니다:",ExampleTodos);
                setCategories([]); // 카테고리 데이터 초기화
                setTodos(ExampleTodos); // ExampleTodos로 대체
            }
        };
        fetchData();
    }, [setCategories, setTodos]);

    return (
        <style.TotalWrapper>
            <style.MissionTotalWrapper>
                {Object.keys(groupedTodos).map(categoryId => {
                    const group = groupedTodos[categoryId];
                    return (
                        <style.CategoryWrapper key={categoryId} color={group.color}>
                            <style.CategoryTitleWrapper>
                                <style.CategoryTitle>{group.categoryName}</style.CategoryTitle>
                                <style.TodoListAddButton
                                    color={group.color}
                                    onPress={() => {
                                        setOpenCategory(categoryId);
                                    }}>
                                    <style.TodoListAddButtonText>+</style.TodoListAddButtonText>
                                </style.TodoListAddButton>
                            </style.CategoryTitleWrapper>
                            <style.MissionFrame>
                                {group.todos.map(todo => (
                                    <TodoItem
                                        key={todo.todoId}
                                        todo={todo}
                                        onCheckClick={() => handleToggleClick(todo.todoId)}
                                        isChecked={todo.isChecked}
                                    />
                                ))}
                            </style.MissionFrame>
                            { openCategory === categoryId ? (
                                    <style.InputWrapper>
                                        <style.InputTodoWrapper
                                            color={group.color}
                                            type="text"
                                            value={inputValue} // 현재 입력값
                                            onChange={(e) => setInputValue(e.target.value)} // 입력값 업데이트
                                            placeholder="할 일을 추가하세요"
                                            placeholderTextColor={group.color || '#aaa'}
                                        />
                                        <style.AddButton
                                            onPress={() => {
                                                if (inputValue) {
                                                    handleAddTodo(inputValue, categoryId); // 카테고리에 따라 추가
                                                    setInputValue(''); // 입력값 초기화
                                                }
                                            }}
                                        >
                                            <style.AddButtonText>추가</style.AddButtonText>
                                        </style.AddButton>
                                    </style.InputWrapper>


                            ) : (
                                <View></View>
                            )};

                        </style.CategoryWrapper>
                    );
                })}
            </style.MissionTotalWrapper>



        </style.TotalWrapper>
    );
};

export default TodoList;
