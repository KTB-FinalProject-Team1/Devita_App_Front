import React, { useState } from 'react';
import * as style from './style/TodoListAddModal';
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import  addCategory  from "../../api/AddCategory";
import { useRecoilState } from 'recoil';
import { categoriesState } from '../../recoil/atoms';
import getCategories from "../../api/GetCategories";
import ColorPicker from './ColorPicker';


const AddCategoryModal = ({ isOpen, onClose }) => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryColor, setNewCategoryColor] = useState('#CCCCCC');
    const [categories, setCategories] = useRecoilState(categoriesState);
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleAddCategory = async () => {
        if (newCategoryName.trim()) {
            const newCategory = {
                name: newCategoryName,
                color: newCategoryColor,
            };
            console.log(newCategory);
            try {
                const response = await addCategory(newCategoryName, newCategoryColor);
                console.log('카테고리 추가 성공', response);
                const updatedCategories = await fetchCategories();
                setCategories(updatedCategories);
                setNewCategoryName('');
                setNewCategoryColor('#CCCCCC');
                onClose();
            } catch (error) {
                console.log("카테고리 추가 실패:", error.message);
            }
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories(); // 서버에서 카테고리 목록 재조회
            return response; // 업데이트된 카테고리 반환
        } catch (error) {
            console.error("카테고리 로드 실패:", error.message);
            return categories; // 실패 시 기존 상태 반환
        }
    };


    return (
        <style.CategoryOverLay>
            <style.ModalCategoryWrapper>
                <style.TopButtonWrapper>
                    <style.ExitButton onPress={onClose}>
                        <style.ExitButtonText>x</style.ExitButtonText>
                    </style.ExitButton>
                </style.TopButtonWrapper>
                <style.InputWrapper>
                    <style.Input
                        value={newCategoryName}
                        onChangeText={(text) => setNewCategoryName(text)}
                        placeholder="Category Name"
                        placeholderTextColor="#B0C4FF"
                    />
                </style.InputWrapper>
                <ColorPicker onColorSelected={(color) => setNewCategoryColor(color)} />


                <ButtonBlue onPress={handleAddCategory} width="90%">
                    Add Category
                </ButtonBlue>
            </style.ModalCategoryWrapper>
        </style.CategoryOverLay>
    );
};

export default AddCategoryModal;
