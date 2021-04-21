<template>
    <div class="products-sort">
      <p class="products-sort__open">
        Сортировать по: <span>{{ currentSort === 'price' ? 'цене' : 'популярности' }}</span>
      </p>

      <ul class="products-sort__list">
        <li>
          <button type='button' @click="handleSortClick('price')">По цене</button>
        </li>
        <li>
          <button type='button' @click="handleSortClick('rating')">По популярности</button>
        </li>
      </ul>
    </div>
</template>

<script>
import ProductsSort from "@/components/ProductsSort"
export default {
  name: 'ProductsSort',

  components: {
    ProductsSort
  },

  data() {
    return {
      currentSort: 'price'
    }
  },

  methods: {
    handleSortClick(field) {
      this.currentSort = field;
      this.$emit('change-sort', field)
    }
  }
}
</script>

<style lang="scss" scoped>
.products-sort {
  position: relative;
  display: inline-block;
  background-image: url(/img/arrow-custom.svg);
  background-repeat: no-repeat;
  background-position: 100% 10px;

  &__open {
    padding-right: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    line-height: 21px;

    & span {
      font-size: 16px;
      color: var(--color-grey);
    }
  }

  &__list {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    padding: 8px 0;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    z-index: 10;
    display: none;

    & li:first-child {
      margin-bottom: 5px;
    }

    & li:hover {
      background-color: #f8f8f8;
      transition: .5s linear;
    }

    & li button:hover {
      color: var(--color-main);
      transition: .5s ease-in-out;
    }

    & li button {
      border: none;
      outline: none;
      background-color: transparent;
      padding: 5px 10px;
      font-size: 14px;
      line-height: 18px;
      color: var(--color-grey-light);
    }
  }

  &:hover > .products-sort__list {
    display: block;
  }
}

.catalog__sort {
  margin-bottom: 45px;
  text-align: right;

  &-by {
    font-size: 16px;
    line-height: 21px;
    color: var(--color-main);
    margin-right: 6px;
  }

  &-block {
    display: block;
  }
}
</style>