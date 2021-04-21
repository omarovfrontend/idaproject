<template>
  <div class="cart">
    <div class="cart__title">
      <h1>Корзина</h1>
      <button
          type="button"
          class="cart__close"
          @click="handleCloseClick"
      />
    </div>

    <div
        v-if="!products.length"
        class="cart__empty"
    >
      <p class="cart__empty-text">Пока что вы ничего не добавили в корзину.</p>
      <button class="btn-close">
        Перейти к выбору
      </button>
    </div>

    <div
        v-else
        class="cart__body"
    >
      <div v-if="isSubmit" class="cart__success">
        <div class="cart__success-content">
          <p class="cart__success-content-title">Заявка успешно отправлена</p>
          <span class="cart__success-content-description">
            Вскоре наш менеджер свяжется с Вами
          </span>
        </div>
      </div>

      <div
        v-else
        class="cart-products"
      >
        <ul class="cart-products__list">
          <li
              v-for="(product, index) in products"
              :key="index"
              class="cart-products__item"
          >
            <img
                class="cart-products__item-img"
                src="/img/cart-louis-vuitton.png"
                alt="Рюкзак"
            />

            <div class="cart-products__item-description">
              <p class="products__item-description">
                {{ product.name }}
              </p>
              <span class="products__item-price"> {{ product.price }} ₽</span>

              <div class="cart-products__item-popular">
                <img src="/img/star.svg" alt="Popular"/>
                <span>{{ product.rating }}</span>
              </div>
            </div>

            <button
              class="cart-products__delete"
              @click="handleRemoveBtnClick(product.id)"
            />
          </li>
        </ul>

        <div class="cart-order">Оформить заказ</div>
        <form class="subscribe-form" @submit.prevent>
          <input
              v-model="formModel.name"
              class="subscribe-form__name"
              placeholder="Ваше имя"
              required
          />
          <input
              v-model="formModel.phone"
              v-mask="PHONE_MASK"
              type="tel"
              class="subscribe-form__tel"
              placeholder="+7 ___ ___-__-__"
              :maxlength="PHONE_MASK.length"
          />
          <input
              v-model="formModel.address"
              type="text"
              class="subscribe-form__address"
              placeholder="Адрес"
              required
          />
          <button class="form-btn" :disabled="isBtnDisabled" @click="handleFormSubmit">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask';

const PHONE_MASK = '+7 ### ###-##-##'


export default {
  name: "AppCart",

  directives: {
    mask
  },

  data() {
    return {
      PHONE_MASK,

      isSubmit: false,
      isBtnDisabled: false,

      formModel: {
        name: '',
        phone: '',
        address: ''
      }
    }
  },

  computed: {
    products() {
      return this.$store.state.cart
    }
  },

  methods: {
    handleCloseClick() {
      this.$emit("close-cart");
    },

    handleRemoveBtnClick(id) {
      this.$store.commit('removeProduct', id)
    },

    handleFormSubmit() {
      if (!this.formModel.name && !this.formModel.phone && !this.formModel.address) return

      this.isBtnDisabled = true;
      this.isSubmit = true;

      setTimeout(() => {
        this.formModel.name = '';
        this.isBtnDisabled = false;
        this.$emit("close-cart");
        this.$store.commit('clearCart');
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 460px;
  padding: 50px 40px;
  background-color: #fff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  overflow-y: auto;

  &__title {
    position: relative;

    & h1 {
      font-size: 32px;
      line-height: 41px;
      margin-bottom: 20px;
    }
  }

  &__close {
    position: absolute;
    content: "";
    width: 14px;
    height: 14px;
    background-image: url(/img/btn-close.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: transparent;
    top: 0;
    right: 0;
    cursor: pointer;
    border: none;
    outline: none;

    &:hover {
      transform: scale(1.5);
      transition: all 0.5s ease-in-out;
    }
  }
}

.cart__empty-text {
  font-size: 22px;
  margin-bottom: 20px;
}

.cart-products__list {
  margin-bottom: 30px;
}

.cart-products__item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 12px;

  &-img {
    margin-right: 35px;
  }
}

.cart-products__item-description .products__item-description {
  margin-bottom: 6px;
}

.cart-products__item-description .products__item-price {
  margin-bottom: 15px;
  display: block;
}

.cart-products__item-popular {
  display: flex;
  align-items: center;
}

.cart-products__delete {
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  opacity: 0.5;
  background-image: url("/img/delete-cart.svg");
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 22px;
  border: none;
  outline: none;

  &:hover {
    opacity: 1;
  }
}

.cart-order {
  font-size: 18px;
  line-height: 23px;
  color: var(--color-grey);
  margin-bottom: 15px;
}

.subscribe-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.subscribe-form__name,
.subscribe-form__tel,
.subscribe-form__address {
  width: 100%;
  border: 2px solid transparent;
  outline: none;
  font-size: 16px;
  line-height: 21px;
  background-color: #f8f8f8;
  color: var(--color-main);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.subscribe-form__name::placeholder,
.subscribe-form__tel::placeholder,
.subscribe-form__address::placeholder {
  color: var(--color-grey-light);
}

.btn-close,
.form-btn {
  width: 100%;
  background-color: var(--color-main);
  color: #fff;
  padding: 15px 0;
  border-radius: 8px;
  border: 1px solid transparent;
  outline: none;
  font-size: 16px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.btn-close:hover {
  background-color: #fff;
  color: var(--color-main);
  border: 1px solid var(--color-main);
}

.form-btn:hover {
  background-color: var(--color-grey);
  color: #fff;
}

.form-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.cart__success-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: hidden;

  &-title {
    position: relative;
    font-size: 24px;
    line-height: 31px;
    font-weight: 700;

    &::before {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translate(-50%);
      content: url(/img/cart-ok.svg);
    }
  }

  &-description {
    font-size: 16px;
    line-height: 20px;
    color: var(--color-grey);
  }
}
</style>
