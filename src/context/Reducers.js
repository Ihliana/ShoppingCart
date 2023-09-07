/**
 * Reducer function for managing a shopping cart state.
 * @param {object} state  - The currenct state of the shopping card
 * @param {Object} action  - The action object describing the update to the 
 * @param {string} action.type = The type of action to perform (ADD_TO_CART)
 * @param {object} action.payload - The payload containing data necessary for the action 
 * @param {Object} action.payload.id - The unique identifier of the item being added or removed from the cart.
 * @returns {Object} The new state after applying the specified action
 */


export const cartReducer = (state, action) => {
    switch(action.type){

        case 'ADD_TO_CART':
            /**
             * Add an item to the shopping cart.
             */
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}

        case 'REMOVE_FROM_CART':
            /**
             * Remove an item from the shopping cart.
             */
            return {...state, cart: state.cart.filter((c) => c.id !== action.payload.id)}


        default: 
            /**
             * Default case: return the current state if the action type is not recognized
             */
            return state;
    }
}