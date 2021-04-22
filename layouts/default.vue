<template>
  <div class="wrapper">
    <app-header @open-cart="isCartShown = true" />

    <main class="content">
      <div class="container content__inner">
        <app-sidebar :categories="categories" />

        <div class="content__view">
          <nuxt />
        </div>
      </div>
    </main>

    <app-cart
      :class="cartClasses"
      @close-cart="isCartShown = false"
    />

    <AppLoader />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import AppCart from "@/components/AppCart";
import ProductsSort from "@/components/ProductsSort";
import AppLoader from "@/components/AppLoader";

export default {
  components: {
    AppHeader,
    AppSidebar,
    AppCart,
    ProductsSort,
    AppLoader
  },

  data() {
    return {
      isCartShown: false,
      categories: []
    };
  },

  computed: {
    cartClasses() {
      return {
        cart: true,
        cart_show: this.isCartShown
      }
    }
  },

  mounted() {
    this.fetchCategories()
  },

  methods: {
    async fetchCategories() {
      const response = await fetch(
          "https://frontend-test.idaproject.com/api/product-category"
      );
      this.categories = await response.json();
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(.68,.11,.86,.11);

  &_show {
    transform: translateX(-0);
  }
}

.content {
  padding-top: 32px;
  padding-bottom: 32px;

  &__inner {
    display: flex;
  }

  &__view {
    width: calc(100% - 160px);
  }
}
</style>
