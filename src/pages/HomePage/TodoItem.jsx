import React from 'react';
import * as style from './style/TodoList'; // 기존 스타일 임포트
import { useRecoilState } from 'recoil';
import { Text } from 'react-native';
import { todosState } from '../../recoil/atoms';
import deleteTodo  from '../../api/DeleteTodo'; // API 호출
import { Alert } from 'react-native';

const TodoItem = ({ todo, onCheckClick }) => {
    const [todos, setTodos] = useRecoilState(todosState);

    const handleDelete = async () => {
        Alert.alert(
            '삭제 확인',
            '삭제하시겠습니까?',
            [
                {
                    text: '취소',
                    onPress: () => console.log('취소됨'),
                    style: 'cancel',
                },
                {
                    text: '삭제',
                    onPress: async () => {
                        try {
                            await deleteTodo(todo.todoId); // 서버에서 삭제
                            setTodos((prevTodos) => prevTodos.filter((t) => t.todoId !== todo.todoId)); // Recoil 상태 업데이트
                            Alert.alert('삭제되었습니다!');
                        } catch (error) {
                            console.error('삭제 실패', error);
                            Alert.alert('삭제 성공', '삭제되었습니다.');
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <style.MissionWrapper category={todo.categoryId} color={todo.color}>
            <style.MissionCheckWrapper  isChecked={todo.status} onPress={() => onCheckClick(todo.todoId)} color={todo.color}>
            </style.MissionCheckWrapper>
            <style.MissionTextWrapper>
                <style.MissionText isChecked={todo.isChecked} >{todo.title}</style.MissionText>
            </style.MissionTextWrapper>
                <style.MissionEditButton onPress={handleDelete}><style.MissionEditButtonText>...</style.MissionEditButtonText></style.MissionEditButton>
        </style.MissionWrapper>
    );
};

export default TodoItem;
