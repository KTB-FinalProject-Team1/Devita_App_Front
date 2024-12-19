import requestHandler from './requestHandler'

export const getTodo = async (viewType) => {
    return requestHandler({
        method: 'GET',
        endpoint: `/api/v1/todo/calendar?viewType=${viewType}`,
        successMessage: 'todolist 불러오기 성공',
        errorMessage: 'todolist 불러오기 실패',
    });
};
