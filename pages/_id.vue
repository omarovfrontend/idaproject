<template>
  <div class="products-page">
    <div class="products-page__sort">
      <products-sort @change-sort="handleSortChange" />
    </div>

    <div class="products-page__list">
      <app-product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { sortBy } from 'lodash'

import ProductsSort from "@/components/ProductsSort";
import AppProduct from "@/components/AppProduct";

export default {
  name: 'ProductsByIDPage',

  components: {
    ProductsSort,
    AppProduct
  },

  async asyncData({ $axios, params: { id } }) {
    const currentId = Number(id)

    const products = await $axios.$get("https://frontend-test.idaproject.com/api/product");

    return {
      products: sortBy(products.filter((product) => product.category === currentId), ['price']).reverse()
    };
  },

  methods: {
    handleSortChange(value) {
      this.products = sortBy(this.products, [value]).reverse()
    }
  }
}
</script>
