<template>
  <div class="product">
    <span class="product__rating">{{ product.rating }}</span>

    <button class="product__add-to-cart" type="button" @click="HandleAddToCartClick" />

    <img
      class="product__image"
      src="/img/louis-vuitton.png"
      :alt="product.name"
    />

    <h3 class="product__name">
      {{ product.name }}
    </h3>
    <span class="product__price">
      {{ formatPrice(product.price) }} ₽
    </span>
  </div>
</template>

<script>
export default {
  name: "AppProduct",

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    formatPrice(price) {
      return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    HandleAddToCartClick() {
      this.$store.commit('addProduct', this.product)
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 250px;
  padding: 18px;
  position: relative;
  margin-bottom: 15px;

  &__rating {
    position: absolute;
    top: 20px;
    left: 20px;
    font-weight: 700;
    font-size: 10px;
    color: #F2C94C;
    padding-left: 20px;
    line-height: 20px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 20px;
      height: 20px;
      background-image: url('/img/star.svg');
      background-repeat: no-repeat;
      transform: translateY(-50%);
    }
  }

  &__add-to-cart {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    opacity: 0.4;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    background-image: url('/img/products-cart.svg');
    background-repeat: no-repeat;

    &:hover {
      opacity: 1;
    }
  }

  &__image {
    display: block;
    width: 213px;
    height: 180px;
    margin: 0 auto 15px;
    padding-right: 35px;
    padding-left: 35px;
  }

  &__name {
    font-size: 14px;
    line-height: 18px;
    color: var(--color-grey);
  }

  &__price {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-main);
  }
}
</style>
