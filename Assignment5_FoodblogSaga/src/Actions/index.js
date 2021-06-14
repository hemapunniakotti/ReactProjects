export const FETCH_FOOD_BEGIN='FETCH_FOOD_BEGIN';
export const FETCH_FOOD_SUCCESS='FETCH_FOOD_SUCCESS';
export const FETCH_FOOD_FAILURE='FETCH_FOOD_FAILURE';

export const fetchFoodBegin=()=>({
        type:FETCH_FOOD_BEGIN,
    })

export const fetchFoodSuccess=(food)=>({
        type:FETCH_FOOD_SUCCESS,
        payload:food
    })

export const fetchFoodFailure=(error)=>({
        type:FETCH_FOOD_FAILURE,
        payload:{error}
    })