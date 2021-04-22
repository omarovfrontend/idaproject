<template>
  <header class="header">
    <div class="container header__inner">
      <h1 class="header__title">
        <nuxt-link to="/">TestList</nuxt-link>
      </h1>

      <button
          type="button"
          class="header__cart"
          @click="handleOpenCartClick"
      >
        <span v-if="productCount" class="header__cart-total">{{ productCount }}</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  computed: {
    productCount() {
      return this.$store.state.cart.length;
    }
  },

  methods: {
    handleOpenCartClick() {
      this.$emit('open-cart');
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 22px;
    color: var(--color-grey);

    & a {
      color: var(--color-grey);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__cart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url('/img/main-cart.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    outline: none;

    &-total {
      position: absolute;
      top: -4px;
      right: -6px;
      z-index: 1;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #959DAD;
      color: #fff;
      font-weight: 700;
      font-size: 8px;
      line-height: 12px;
    }
  }

  @media (max-width: 480px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    background-color: #fff;
  }
}
</style>