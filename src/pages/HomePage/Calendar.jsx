import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addWeeks, addDays, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import * as style from '../HomePage/style/Calendar';
import { Text } from "react-native";

const HomeCalendar = ({ selectDate, onSelectDate }) => {
    const [currentWeekStart, setCurrentWeekStart] = useState(
        startOfWeek(new Date(), { weekStartsOn: 1 })
    );

    // 주간 날짜 배열 생성 함수
    const generateCurrentWeek = (startDate) => {
        return Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));
    };

    const [currentWeek, setCurrentWeek] = useState(generateCurrentWeek(currentWeekStart));

    // currentWeekStart가 변경될 때마다 주간 날짜 배열 업데이트
    useEffect(() => {
        setCurrentWeek(generateCurrentWeek(currentWeekStart));
    }, [currentWeekStart]);

    // 이전 주로 이동
    const handlePreviousWeek = () => {
        setCurrentWeekStart((prev) => addWeeks(prev, -1));
    };

    // 다음 주로 이동
    const handleNextWeek = () => {
        setCurrentWeekStart((prev) => addWeeks(prev, 1));
    };

    return (
        <style.TotalWrapper>
            <style.DateMoveWrapper>
                <style.NavigationButton onPress={handlePreviousWeek}>
                    <style.DateMoveText>{"<"}</style.DateMoveText>
                </style.NavigationButton>
                <style.MonthYearText>
                    {format(currentWeekStart, 'yyyy MM')}
                </style.MonthYearText>
                <style.NavigationButton onPress={handleNextWeek}>
                    <style.DateMoveText>{">"}</style.DateMoveText>
                </style.NavigationButton>
            </style.DateMoveWrapper>
            <style.WeekWrapper>
                {currentWeek.map((day, index) => (
                    <style.EachDateWrapper
                        key={index}
                        isToday={isSameDay(day, new Date())}
                        isSelected={isSameDay(day, selectDate)}
                        onPress={() => onSelectDate(day)}
                    >
                        <style.EachDayofWeek
                            isToday={isSameDay(day, new Date())}
                            isSelected={isSameDay(day, selectDate)}
                        >
                            {format(day, 'EEE', { locale: ko })}
                        </style.EachDayofWeek> {/* 요일 */}
                        <style.EachDayText
                            isToday={isSameDay(day, new Date())}
                            isSelected={isSameDay(day, selectDate)}

                        >{format(day, 'd')}</style.EachDayText> {/* 날짜 */}
                    </style.EachDateWrapper>
                ))}
            </style.WeekWrapper>
        </style.TotalWrapper>
    );
};

export default HomeCalendar;
