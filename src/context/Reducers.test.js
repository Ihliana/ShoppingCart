import { productReducer, cartReducer } from "./Reducers"

//a sample initial state for testing cartReducer
const initialCartState = {
    cart: []
}

describe('cartReducer', () => {
    test('should handle ADD_TO_CART action', () => {
        const action = {type: "ADD_TO_CART", payload: {id: 1, name: "Product1", qty: 1}}
        const newState = cartReducer(initialCartState, action)

        expect(newState.cart).toHaveLength(1)  //cart should contain one item
        expect(newState.cart[0]).toEqual({id: 1, name: "Product1", qty: 1})
    })

    test('should handle REMOVE_FROM_CART action', () => {

        //set up an initial state with items in the cart
        const initialStateWithItems = {
            cart: [
                {id: 1, name: "Product1", qty: 1},
                {id: 2, name: "Product2", qty: 1}
            ]
        }
        const action = {type: "REMOVE_FROM_CART", payload: {id:1} }
        const newState = cartReducer(initialStateWithItems, action)
        expect(newState.cart).toHaveLength(1) //Cart should have one item left
        expect(newState.cart[0]).toEqual({id: 2, name: "Product2", qty: 1})
    })

    test('should handle CHANGE_CART_QTY action', () => {
        //set up an initial state with items in the cart
        const initialStateWithItems = {
            cart: [
                {id: 1, name: "Product1", qty: 2},
                {id: 2, name: "Product2", qty: 1}
            ]
        }

        
        const action = {type: 'CHANGE_CART_QTY', payload: {id: 1, qty: 3} }
        const newState = cartReducer(initialStateWithItems, action)

        expect(newState.cart).toHaveLength(2)
        expect(newState.cart[0]).toEqual({id: 1,name:"Product1", qty: 3})
        expect(newState.cart[1]).toEqual({id: 2, name: "Product2", qty: 1})
    })

    test('should return the current state for an unknown action type', () => {
        const action = {type: "UNKNOWN_ACTION"}
        const newState = cartReducer(initialCartState, action)
        expect(newState).toEqual(initialCartState)
    })
})









//sample initial state for testing productReducer
const initialProductState = {
    sort: "", 
    byStock: false,
    byFastDelivery: false, 
    byRating: 0,
    searchQuery: ""
}

describe('productReducer', () => {
    test('should handle SORT_BY_PRICE action', () => {
        const action = {type: "SORT_BY_PRICE", payload: 'asc'}
        const newState = productReducer(initialProductState, action)
        expect(newState.sort).toBe('asc')
    })

    test('should handle FILTER_BY_STOCK action', () => {
        const action = {type: "FILTER_BY_STOCK"}
        const newState = productReducer(initialProductState, action)
        expect(newState.byStock).toBe(!initialProductState.byStock)
    })

    test("should handle FILTER_BY_DELIVERY action", () => {
        const action = {type: "FILTER_BY_DELIVERY"}
        const newState = productReducer(initialProductState, action)
        expect(newState.byFastDelivery).toBe(!initialProductState.byFastDelivery)
    })

    test('should handle FILTER_BY_RATING action', () => {
        const action = {type: "FILTER_BY_RATING", payload: 4}
        const newState = productReducer(initialProductState, action)
        expect(newState.byRating).toBe(4)
    })

    test('should handle FILTER_BY_SEARCH action', () => {
        const action = {type:"FILTER_BY_SEARCH", payload: "test"}
        const newState = productReducer(initialProductState, action)
        expect(newState.searchQuery).toBe('test')
    })

    test('should handle CLEAR_FILTERS action', () => {
        const action = {type: 'CLEAR_FILTERS'}
        const newState = productReducer(initialProductState, action)

        expect(newState.byStock).toBe(false)
        expect(newState.byFastDelivery).toBe(false)
        expect(newState.byRating).toBe(0)
        expect(newState.searchQuery).toBe("")
    })
})