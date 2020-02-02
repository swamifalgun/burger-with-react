import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purcaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
};

const purcaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)});
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const fetchOrderStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false});
};

const fetchOrderFail = (state, action) => {
    return updateObject(state, {loading: false});
}

const reducer = (state=initialState, action) => {
    switch (action.type) {

        case actionTypes.PURCHASE_INIT: return purcaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purcaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state, action);
        case actionTypes.FETCH_ORDER_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrderFail(state, action);
        default:
            return state;
    }
}

export default reducer;