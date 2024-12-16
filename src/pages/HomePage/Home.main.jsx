import React, { useState } from 'react';
import * as style from "./style/Home.main";
import Calendar from "./Calendar";
import TodoList from "./TodoList";
import TodayMission from "./TodayMission";
import AddCategoryModal from "./TodoListAddCategory";

function HomePage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todos, setTodos] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 추가

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const addTodo = (date, todo) => {
        setTodos((prevTodos) => ({
            ...prevTodos,
            [date]: [...(prevTodos[date] || []), todo],
        }));
    };

    const toggleModal = () => {
        console.log('눌러짐');
        setIsModalOpen((prev) => !prev); // 모달 열림 상태 토글
    };

    return (
        <style.Wrapper>
            <style.CalendarWrapper>
                <Calendar
                    selectDate={selectedDate}
                    onSelectDate={handleDateSelect}
                />
            </style.CalendarWrapper>
            <style.ScrollableWrapper>
                <TodayMission initialOpen={true} />
                <TodoList
                    selectedDate={selectedDate}
                    todos={todos[selectedDate.toISOString().split('T')[0]] || []}
                    setTodos={setTodos}
                    onAddTodo={addTodo}
                />
            </style.ScrollableWrapper>
            <style.TodoCategoryAddButton onPress={toggleModal}>
                <style.TodoCategoryAddButtonText>+</style.TodoCategoryAddButtonText>
            </style.TodoCategoryAddButton>
            <AddCategoryModal isOpen={isModalOpen} onClose={toggleModal} />
        </style.Wrapper>
    );
}

export default HomePage;
