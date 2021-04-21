<template>
  <div class="products-page">
    <div class="products-page__sort">
      <products-sort @change-sort="handleSortChange"/>
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
  name: "IndexPage",

  components: {
    ProductsSort,
    AppProduct
  },

  async asyncData({params: { id }} ) {
    const response = await fetch(
        "https://frontend-test.idaproject.com/api/product"
    );
    const products = await response.json();

    return {
      products: sortBy(products, ['price']).reverse()
    };
  },

  methods: {
    handleSortChange(value) {
      this.products = sortBy(this.products, [value]).reverse()
    }
  }
};
</script>
