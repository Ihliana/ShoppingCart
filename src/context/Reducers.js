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

        case "CHANGE_CART_QTY":
            /**
             * Changes item's quantity  in the shopping cart.
             */
            return {...state, cart: state.cart.filter((c) => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty)}


        default: 
            /**
             * Default case: return the current state if the action type is not recognized
             */
            return state;
    }
}


//a reducer function for managing the state of 'Filter products' React component

export const productReducer = (state, action) => {
    switch(action.type){
        case "SORT_BY_PRICE":
            /**
             * Sorts items by PRICE
             * It updates the 'sort' property in the state with the provided payload.
             */
            return {...state, sort: action.payload}

        case "FILTER_BY_STOCK":
             /**
             * Toggles the filter for items that are in stock
             * It updates the 'byStock' property in the state to its opposite value.
             */
            return {...state, byStock: !state.byStock}

        case "FILTER_BY_DELIVERY":
            /**
             * Toggle the filter for items with fast delivery.
             * It updates the 'byFastDelivery' property in the state to its opposite value 
             */
            return {...state, byFastDelivery: !state.byFastDelivery}
            
        case "FILTER_BY_RATING":
            /**
             * Filters items by a specific rating.
             * It updates the "byRating" property in the state with the provided payload
             */
            return {...state, byRating: action.payload}

        case "FILTER_BY_SEARCH":
            /**
             * Filters items based on a search query
             * It updates the 'searchQuery' property in the state with the provided payload
             */
            return {...state, searchQuery: action.payload}

        case "CLEAR_FILTERS":
            /**
             * Clears all filters and resets them to their defaul value
             * 
             */
            return {
                byStock: false, 
                byFastDelivery: false, 
                byRating: 0,
                searchQuery: ""
            }
    
        default:
            /**
             * If the action type is not recognized, returns the current state unchanged.
             */
            return state
    
    }


}