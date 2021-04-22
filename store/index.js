export const state = () => ({
    cart: []
});

export const mutations = {
    addProduct(state, product) {
        state.cart.push(product)
    },

    clearCart(state) {
        state.cart = []
    },

    removeProduct(state, productId) {
        state.cart = state.cart.filter(product => product.id !== productId)
    }
};
