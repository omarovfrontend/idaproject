<template>
  <aside class="sidebar">
    <h1 class="sidebar__title">Каталог</h1>

    <div class="sidebar__list">
      <nuxt-link
          v-for="category in categories"
          :key="category.id"
          class="sidebar__link"
          :to="`/${category.id}`"
      >
        {{ category.name }}
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 160px;

  &__title {
    font-size: 32px;
    color: var(--color-main);
    line-height: 41px;
    padding-bottom: 24px;
  }

  &__link {
    display: block;
    text-decoration: none;
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: var(--color-grey-light);
    margin-bottom: 15px;
    transition: color 0.3s ease-in-out;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: var(--color-grey);
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>