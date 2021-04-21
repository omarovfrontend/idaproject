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

    <app-cart v-if="isCartShown" @close-cart="isCartShown = false" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import AppCart from "@/components/AppCart";
import ProductsSort from "@/components/ProductsSort";

export default {
  components: {
    AppHeader,
    AppSidebar,
    AppCart,
    ProductsSort
  },

  data() {
    return {
      isCartShown: false,
      categories: []
    };
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
