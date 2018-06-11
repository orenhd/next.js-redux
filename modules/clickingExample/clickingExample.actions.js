export const SET_USER_NAME = 'SET_USER_NAME';
export const setUserName = (userName) => {
    return {
        type: SET_USER_NAME,
        userName
    }
}

export const UPDATE_CLICKING_DATA = 'UPDATE_CLICKING_DATA';
export const updateClickingData = (clickCountType) => (dispatch, getState) => {
    const { clickingData } = getState().clickingExample;
    const updateClickingData = { ...clickingData };

    const currentTypeCount = updateClickingData[clickCountType] || 0;

    updateClickingData[clickCountType] = currentTypeCount + 1;

    dispatch({
        type: UPDATE_CLICKING_DATA,
        clickingData: updateClickingData
    })
}