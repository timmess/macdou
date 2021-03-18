const initialState = {
    panier: [],
    lastId: 0,
    totalPrice: 0,
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'BUY':
            let newPanier = state.panier.concat(action.data);
            return{
                ...state,
                panier: newPanier,
                totalPrice: state.totalPrice + action.data.price,
                lastId: state.lastId + 1,
            }

        case 'REMOVE_ITEM':
            let reducedPanier = state.panier.filter(achat => achat !== action.data && achat.lastId !== state.lastId );
            return{
                ...state,
                panier: reducedPanier,
                totalPrice: state.totalPrice - action.data.price
            };

        case 'RESET':
            return initialState;

        default:
            return state
    }
}