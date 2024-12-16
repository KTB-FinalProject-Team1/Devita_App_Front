import React, { useState } from 'react';
import { AnimatePresence, MotiView } from 'moti';
import * as style from './style/TodoListAddModal';
import ButtonBlue from '../../components/Buttons/ButtonBlue';



const TodoListAddModal = ({
                              isOpen,
                              onClose,
                              onSubmit,
                              inputValue,
                              setInputValue,
                              category,
                              setCategory,
                              setColor,
                              categories = [],
                              selectedDate,
                              onOpenCategoryModal
                          }) => {
    const [selectedCategory, setSelectedCategory] = useState({ id: null, name: '' });
    const filteredCategories = categories.filter(item => item.name !== "일일 미션" &&  item.name !== "자율 미션");
    const handleAdd = () => {
        if (inputValue.trim() && selectedCategory.name.trim()) {
            console.log('전달되는가',selectedCategory.id);
            onSubmit(inputValue, selectedCategory.id);
            setInputValue('');
            setSelectedCategory({id:null, name:''});
        }
    };

    const modalVariants = {
        hidden: { y: '80vh', opacity: 0 }, // 화면 하단에서 시작
        visible: { y: 0, opacity: 1 }, // 화면에 보이는 상태
        exit: { y: '80vh', opacity: 0 }, // 다시 화면 아래로 내려가면서 사라짐
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <style.OverLay>
                    <style.ModalWrapper>
                        <style.TopButtonWrapper>
                            <style.ExitButton onPress={onClose}>
                                <style.ExitButtonText>x</style.ExitButtonText>
                            </style.ExitButton>

                        </style.TopButtonWrapper>
                        <style.InputTodoWrapper>
                            <style.Input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="할 일을 적어주세요"
                            />
                        </style.InputTodoWrapper>


                        <ButtonBlue width="90%" height="40px" onClick={handleAdd}>Add Todo</ButtonBlue>
                    </style.ModalWrapper>
                </style.OverLay>
            )}
        </AnimatePresence>
    );
};

export default TodoListAddModal;
