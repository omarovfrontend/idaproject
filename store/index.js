export const state = () => ({
    cart: []
});

export const mutations = {
    addProduct(state, product) {
        const filteredProductsLength = state.cart.filter(item => item.id === product.id).length
        if (filteredProductsLength === 1) return
        state.cart.push(product)
    },

    clearCart(state) {
        state.cart = []
    },

    removeProduct(state, productId) {
        state.cart = state.cart.filter(product => product.id !== productId)
    }
};
