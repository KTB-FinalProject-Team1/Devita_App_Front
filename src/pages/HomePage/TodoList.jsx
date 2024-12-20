import React, { useEffect, useState } from 'react';
import * as style from './style/TodoList';
import { useRecoilState } from 'recoil';
import { todosState, categoriesState } from '../../recoil/atoms';
import addTodo from '../../api/AddTodo';
import updateTodo from '../../api/UpdateTodo';
import { getTodo } from '../../api/GetToDo';
import getCategories from '../../api/GetCategories';
import TodoItem from './TodoItem';
import ExampleTodos from "../../assets/DummyData/ExampleTodos";

const TodoList = ({ selectedDate }) => {
    const [todos, setTodos] = useRecoilState(todosState);
    const [categories, setCategories] = useRecoilState(categoriesState);
    const [openCategory, setOpenCategory] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const formattedDate = selectedDate.toLocaleDateString('en-CA');

    // 카테고리와 해당 날짜의 할 일 목록 그룹화
    const groupedTodos = categories.map((category) => ({
        ...category,
        todos: todos.filter((todo) => todo.categoryId === category.id && todo.date === formattedDate),
    }));
    console.log('확인용',groupedTodos);

    const [hoveredMission, setHoveredMission] = useState(null); // 현재 hover된 미션 ID

    const handleMissionPressIn = (index) => {
        setHoveredMission(index); // hover 상태 설정
    };

    const handleMissionPressOut = () => {
        setHoveredMission(null); // hover 상태 해제
    };


    const fetchData = async () => {
        try {
            const categoriesData = await getCategories();
            const todosData = await getTodo('monthly');
            setCategories(categoriesData);
            setTodos(todosData);
        } catch (error) {
            console.error("데이터 로드 실패:", error);
            setCategories([]);
            setTodos(ExampleTodos);
        }
    };

    const handleAddTodo = async (todoText, categoryId) => {
        const newTodo = {
            categoryId,
            title: todoText,
            date: formattedDate,
            todoId: Math.random().toString(36).substring(7), // 임시 ID
            isChecked: false,
            isTemp: true,
        };

        // 낙관적 상태 업데이트 (UI에 즉시 반영)
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        try {
            const response = await addTodo(categoryId, todoText, formattedDate);

            // 서버 응답으로 업데이트
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.todoId === newTodo.todoId ? { ...todo, ...response, isTemp: false } : todo
                )
            );
            fetchData();
        } catch (error) {
            console.error("할 일 추가 실패:", error);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoId !== newTodo.todoId));
        }
    };

    const handleToggleClick = async (todoId, currentStatus) => {
        const newStatus = !currentStatus;

        try {
            console.log('토글 상태 변환 시작', todoId);
            await updateTodo(todoId);
            console.log('토글 상태 변환 끝');

            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.todoId === todoId ? { ...todo, status: newStatus } : todo
                )
            );
        } catch (error) {
            console.error('상태 변경 실패:', error);
        }
    };
    const handleRefresh = async () => {
        try {
            const categoriesData = await getCategories();
            const todosData = await getTodo('monthly');
            setCategories(categoriesData);
            setTodos(todosData);
            Alert.alert("새로고침 성공", "데이터가 성공적으로 업데이트되었습니다.");
        } catch (error) {
            console.error("새로고침 실패:", error);
            Alert.alert("새로고침 실패", "데이터를 업데이트하지 못했습니다.");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <style.TotalWrapper>
            <style.MissionTotalWrapper>
                {groupedTodos.map((group) => (
                    <style.CategoryWrapper key={group.id} color={group.color}>
                        <style.CategoryTitleWrapper>
                            <style.CategoryTitle>{group.name}</style.CategoryTitle>
                            if(
                            <style.TodoListAddButton
                                color={
                                group.name === '일일 미션' || group.name ==='자율 미션' ? 'gray' : group.color
                                }
                                onPress={() => {
                                    if (group.name !== '일일 미션' && group.name !== '자율 미션') {
                                        setOpenCategory(group.id);
                                    }
                                }}
                                disabled={group.name === '일일 미션' || group.name === '자율 미션'}
                                style={{opacity: group.name === '일일 미션' || group.name === '자율 미션' ? 0.5 : 1}} // 비활성화 시 투명도 조절
                            >
                                <style.TodoListAddButtonText>+</style.TodoListAddButtonText>
                            </style.TodoListAddButton>
                        </style.CategoryTitleWrapper>

                        {/* 할 일 목록 */}
                        <style.MissionFrame>
                            {group.todos.map((todo) => (
                                <TodoItem
                                    color={group.color}
                                    key={todo.todoId}
                                    todo={todo}
                                    onCheckClick={() => handleToggleClick(todo.todoId, todo.status)}
                                />
                            ))}
                        </style.MissionFrame>

                        {/* 할 일 추가 입력 */}
                        {openCategory === group.id && (
                            <style.InputWrapper>
                                <style.InputTodoWrapper
                                    color={group.color}
                                    value={inputValue}
                                    onChangeText={setInputValue}
                                    placeholder="할 일을 추가하세요"
                                    placeholderTextColor={group.color || '#aaa'}
                                />
                                <style.AddButton
                                    onPress={() => {
                                        if (inputValue) {
                                            handleAddTodo(inputValue, group.id);
                                            setInputValue('');
                                        }
                                    }}
                                >
                                    <style.AddButtonText>추가</style.AddButtonText>
                                </style.AddButton>
                            </style.InputWrapper>
                        )}
                    </style.CategoryWrapper>
                ))}
            </style.MissionTotalWrapper>
        </style.TotalWrapper>
    );
};

export default TodoList;
