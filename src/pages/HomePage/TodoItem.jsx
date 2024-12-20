import React, { useState } from 'react';
import * as style from './style/TodoList'; // 기존 스타일 임포트
import { useRecoilState } from 'recoil';
import { Alert, Modal, View, Text, TouchableOpacity } from 'react-native';
import { todosState } from '../../recoil/atoms';
import deleteTodo from '../../api/DeleteTodo'; // API 호출

const TodoItem = ({ todo, color, onCheckClick }) => {
    const [todos, setTodos] = useRecoilState(todosState);
    const [isModalVisible, setIsModalVisible] = useState(false); // 모달 상태 관리

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
                            Alert.alert('삭제 실패', '삭제 중 오류가 발생했습니다.');
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <>
            <style.MissionWrapper category={todo.categoryId} color={todo.color}>
                <style.MissionCheckWrapper
                    isChecked={todo.status}
                    onPress={() => onCheckClick(todo.todoId)}
                    color={color}
                />
                <style.MissionTextWrapper
                    onPress={() => setIsModalVisible(true)} // 클릭 시 모달 표시
                >
                    <style.MissionText numberOfLines={2} ellipsizeMode="tail" isChecked={todo.status}>
                        {todo.title}
                    </style.MissionText>
                </style.MissionTextWrapper>
                <style.MissionEditButton onPress={handleDelete}>
                    <style.MissionEditButtonText>...</style.MissionEditButtonText>
                </style.MissionEditButton>
            </style.MissionWrapper>

            {/* 모달 구현 */}
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)} // 뒤로가기 등으로 닫을 때
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>{todo.title}</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setIsModalVisible(false)} // 닫기 버튼
                        >
                            <Text style={styles.closeButtonText}>닫기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default TodoItem;

const styles = {
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 투명한 배경
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#7DB1FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
};
