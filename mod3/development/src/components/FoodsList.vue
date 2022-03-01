<template>
  <section class="foods">
    <transition-group tag="ul" class="foods__list" name="fade" mode="out-in">
      <li class="foods__list__item" v-for="item in totalFoods" :key="item.id">
        <div
          class="foods__list__item__cover"
          :style="{ backgroundImage: 'url(' + item.pic + ')' }"
        ></div>
        <h5 class="foods__list__item__title">{{ item.title }}</h5>
        <Modal title="套餐选择" v-if="showConfirm">
          <template #action>
            <button
              type="button"
              class="button button--confirm"
              @click="
                showConfirm = !showConfirm;
                showResult = true;
                totaltao(select.id);
                changenumb(select.id);
                show1=true;show2=false;show3=false;show4=false;
                setini();
              "
            >
              套餐
            </button>
            <button
              type="button"
              class="button button--confirm"
              @click="
                addToCart(select);
                showConfirm = !showConfirm;
              "
            >
              单点
            </button>
          </template>
        </Modal>
        <Modal title="套餐点选" v-if="showResult">
          <template #content>
            <h6 class="modal__title" style="text-align: left">套餐名称</h6>
            <ul class="cart__list modal__list">
              <li class="cart__list__item" v-for="item1 in totaltaocan" :key="item1.id">
                <div
                  class="cart__list__item__cover"
                  :style="{ backgroundImage: 'url(' + item1.pic + ')' }"
                ></div>
                <h6 class="cart__list__item__title">
                  {{ item1.title }} x {{ 1 }}
                </h6>
              </li>
            </ul>
            <h6 class="cart__list__item__title" @click="show1=true;show2=false;show3=false;show4=false;">
                主餐
            </h6>
            <ul class="cart__list modal__list" v-if="show1">
              <li class="cart__list__item">
                <div
                  class="cart__list__item__cover"
                  :style="{ backgroundImage: 'url(' + select.pic + ')' }"
                ></div>
                <h6 class="cart__list__item__title">
                  {{ select.title }} x {{ 1 }}
                </h6>
                <div class="btn-group-toggle" data-toggle="buttons">
                  <ul>
                      <li v-for="i, index in select.ty1" :key="index">
                      <label class="btn btn-secondary active">
                      <input type="checkbox" :value="i" v-model="custom"/>{{ i }}
                      </label>
                      </li>
                  </ul>
                </div>
                <span class="modal__list__price">
                  小計:{{ (1 * select.price).toLocaleString("zh-TW")
                  }}<small> {{setmoney(select.price)}}元</small>
                </span>
              </li>
            </ul>
            <h6 class="cart__list__item__title" @click="show1=false;show2=true;show3=false;show4=false;">
                飲料
            </h6>
            <ul class="cart__list modal__list" v-if="show2" @click="show1=false;show2=true;show3=false;show4=false;">
              <li class="cart__list__item" v-for="item1 in totaltaocan" :key="item1.id">
                <ul>
                <li class="cart__list_item__title" v-for="choice,index in item1.drink" :key="index" @click="changeid(choice)">
                  <button
                  type="button"
                  class="button button--confirm"
                  >
                  飲料{{index+1}}
                  </button>
                </li>
                </ul>
                <ul v-for="j1 in foodintaocan" :key="j1.id">
                  <div
                    class="cart__list__item__cover"
                    :style="{ backgroundImage: 'url(' + j1.pic + ')' }"
                  ></div> 
                </ul>
                <h6 class="cart__list__item__title" v-for="j1 in foodintaocan" :key="j1.id">
                {{ j1.title }} x {{ 1 }}
                </h6>
                
                <div class="btn-group-toggle" data-toggle="buttons" v-for="j1 in foodintaocan" :key="j1.id">
                    <ul>
                      <li v-for="j2, index1 in j1.ty1" :key="index1">
                          <label class="btn btn-secondary active">
                          <input type="checkbox" :value="j2" v-model="custom1"/>{{ j2 }}
                          </label>
                      </li>
                    </ul>
                </div>
                <span class="modal__list__price" v-for="j1 in foodintaocan" :key="j1.id">
                小計:{{ (1 * j1.price).toLocaleString("zh-TW")
                }}<small> {{setmoney1(j1.price)}}元</small>
                </span>
              </li>
            </ul>
            <h6 class="cart__list__item__title" @click="show1=false;show2=false;show3=true;show4=false;">
                配餐
            </h6>
            <ul class="cart__list modal__list" v-if="show3">
              <li class="cart__list__item" v-for="item1 in totaltaocan" :key="item1.id">
                <ul>
                <li class="cart__list_item__title" v-for="choice,index in item1.pei" :key="index" @click="changeid1(choice)">
                  <button
                  type="button"
                  class="button button--confirm"
                  >
                  配餐{{index}}
                  </button>
                </li>
                </ul>
                <ul v-for="j1 in foodintaocan1" :key="j1.id">
                  <div
                    class="cart__list__item__cover"
                    :style="{ backgroundImage: 'url(' + j1.pic + ')' }"
                  ></div> 
                </ul>
                <h6 class="cart__list__item__title" v-for="j1 in foodintaocan1" :key="j1.id">
                {{ j1.title }} x {{ 1 }}
                </h6>
                
                <div class="btn-group-toggle" data-toggle="buttons" v-for="j1 in foodintaocan1" :key="j1.id">
                    <ul>
                      <li v-for="j2, index1 in j1.ty1" :key="index1">
                          <label class="btn btn-secondary active">
                          <input type="checkbox" :value="j2" v-model="custom2"/>{{ j2 }}
                          </label>
                      </li>
                    </ul>
                </div>
                <span class="modal__list__price" v-for="j1 in foodintaocan1" :key="j1.id">
                小計:{{ (1 * j1.price).toLocaleString("zh-TW")
                }}<small> {{setmoney2(j1.price)}}元</small>
                </span>
              </li>
            </ul>
            <h6 class="cart__list__item__title" @click="show1=false;show2=false;show3=false;show4=true;">
                加值
            </h6>
            <ul class="cart__list modal__list" v-if="show4">
              <li class="cart__list__item" v-for="item1 in totaltaocan" :key="item1.id">
                <ul>
                <li class="cart__list_item__title" v-for="choice,index in item1.jia" :key="index" @click="changeid2(choice);">
                  <button
                  type="button"
                  class="button button--confirm"
                  >
                  加值{{index}}
                  </button>
                </li>
                </ul>
                <ul v-for="j1 in foodintaocan2" :key="j1.id">
                  <div
                    class="cart__list__item__cover"
                    :style="{ backgroundImage: 'url(' + j1.pic + ')' }"
                  ></div> 
                </ul>
                <h6 class="cart__list__item__title" v-for="j1 in foodintaocan2" :key="j1.id">
                {{ j1.title }} x {{ 1 }}
                </h6>
                
                <div class="btn-group-toggle" data-toggle="buttons" v-for="j1 in foodintaocan2" :key="j1.id">
                    <ul>
                      <li v-for="j2, index1 in j1.ty1" :key="index1">
                          <label class="btn btn-secondary active">
                          <input type="checkbox" :value="j2" v-model="custom3"/>{{ j2 }}
                          </label>
                      </li>
                    </ul>
                </div>
                <span class="modal__list__price" v-for="j1 in foodintaocan2" :key="j1.id">
                小計:{{ (1 * j1.price).toLocaleString("zh-TW")
                }}<small> {{setmoney3(j1.price)}}元</small>
                </span>
              </li>
            </ul>
            <div class="modal__list__total">
              <span>总价:{{setmoney()}}</span>
              <span>{{taoprice}}<small> 元</small></span>
            </div>
          </template>
          <template #action>
            <button
              type="button"
              class="button button--confirm"
              @click="
                showConfirm = false;
                showResult = false;
                addToCart(select);
                post();
                "
            >
              确认
            </button>
            <button
              type="button"
              class="button button--refuse"
              @click="
                showConfirm = false;
                showResult = false;
              "
            >
              取消
            </button>
          </template>
        </Modal>
        <div class="foods__list__item__action">
          <div class="foods__list__item__action__price">
            <small>NT</small> {{ item.price.toLocaleString("zh-TW") }}
          </div>
          <div v-if="checkT(item.kind)">
          <button
            type="button"
            class="button"
            :disabled="checkExist(item) !== -1"
            @click="
              showConfirm = !showConfirm;
              taocan(item);
            "
          >
            下訂
          </button>
          </div>
          <div v-if="!checkT(item.kind)">
          <button
            type="button"
            class="button"
            :disabled="checkExist(item) !== -1"
            @click="addToCart(item);"
          >
            下訂
          </button>
          </div>
        </div>
      </li>
    
    </transition-group>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../components/Modal.vue";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

export default defineComponent({
  name: "FoodsList",
  components: { Modal },
  data() {
    return {
      custom:[],
      custom1:[],
      custom2:[],
      custom3:[],
      drinkprice: 0,
      peiprice: 0,
      jiaprice: 0,
      taoprice: 0,
      showConfirm: false,
      showResult: false,
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      select: {
      id: "",
      kind: "",
      title: "",
      pic: "",
      price: 0,
      ty1: [],
      qty: 0,
      },
      ta: {
      id: "",
      kind: "",
      zhu:  "",
      pei:  [],
      drink:  [],
      jia:  [],
      title: "",
      pic: "",
      price: 0,
      qty: 0,
      },
    };
  },
  computed: {
    active(): string {
      return this.$store.state.active;
    },
    totalFoods(): {
      id: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: [];
      qty: number;
    }[] {
      return this.$store.state.foods.filter(
        (item: { kind: string }) => item.kind === this.active
      );
    },
    numb(): string {
      return this.$store.state.numb;
    },
    selid(): string {
      return this.$store.state.selid;
    },
    selid1(): string {
      return this.$store.state.selid1;
    },
    selid2(): string {
      return this.$store.state.selid2;
    },
    totaltaocan(): {
      id: string;
      kind: string;
      zhu:  string;
      pei:  [];
      drink:  [];
      jia:  [];
      title: string;
      pic: string;
      price: number;
      qty: number;
    }[] {
      return this.$store.state.taoc.filter(
        (item: { zhu: string }) => item.zhu === this.numb
      );
    },
    foodintaocan(): {
      id: string;
      ta: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: [];
      qty: number;
    }[] {
      return this.$store.state.foods.filter(
        (item: { id: string }) => item.id === this.selid
      );
    },
    foodintaocan1(): {
      id: string;
      ta: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: [];
      qty: number;
    }[] {
      return this.$store.state.foods.filter(
        (item: { id: string }) => item.id === this.selid1
      );
    },
    foodintaocan2(): {
      id: string;
      ta: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: [];
      qty: number;
    }[] {
      return this.$store.state.foods.filter(
        (item: { id: string }) => item.id === this.selid2
      );
    },
  },
  methods: {
    async post(){
      const db = firebase.firestore()
      db.collection("cart")
        .doc()
        .set({
        id: this.select.id,
        kind: this.select.kind,
        title: this.select.title,
        pic: this.select.pic,
        price: this.select.price,
        ty1: this.select.ty1,
        qty: this.select.qty,
      })
      .then(() => console.log('Document successfully updated!'));
    },
    changeid(keyword: string) {
      return this.$store.dispatch("changeid", keyword);
    },
    changeid1(keyword: string) {
      return this.$store.dispatch("changeid1", keyword);
    },
    changeid2(keyword: string) {
      return this.$store.dispatch("changeid2", keyword);
    },
    changenumb(keyword: string) {
      return this.$store.dispatch("changenumb", keyword);
    },
    checkT(kind: string): boolean{
      if(kind === 'ma'){
        return true;
      }
      else
        return false;
    },
    totaltao(id: string){
      this.ta = this.$store.state.taoc.filter(
        (item: { zhu: string }) => item.zhu === id
      );
    },
    taocan(item: {
      id: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: [];
      qty: number;
    }) {
      this.select = item;
      this.select.price = item.price;
      this.select.qty = 1;
    },
    taocan1(item: {
      id: string;
      kind: string;
      zhu:  string;
      pei:  [];
      drink:  [];
      jia:  [];
      title: string;
      pic: string;
      price: number;
      qty: number
    }) {
      this.ta = item;
      this.ta.qty = 1;
    },
    addToCart(item: {
      id: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: [];
      qty: number;
    }) {
      item.qty = 1;
      this.$store.dispatch("addToCart", item);
    },
    addToCarttao(item: {
      id: string;
      kind: string;
      zhu:  string;
      pei:  [];
      drink:  [];
      jia:  [];
      title: string;
      pic: string;
      price: number;
      qty: number
    }) {
      item.qty = 1;
      this.$store.dispatch("addToCarttao", item);
    },
    setini()
    {
      this.drinkprice=0;
      this.peiprice = 0;
      this.jiaprice = 0;
    },
    setmoney0(price: number)
    {
      this.taoprice = price;
    },
    setmoney()
    {
      this.taoprice = this.drinkprice+this.peiprice+this.jiaprice+this.select.price;
    },
    setmoney1(price: number)
    {
      this.drinkprice = price;
    },
    setmoney2(price: number)
    {
      this.peiprice = price;
    },
    setmoney3(price: number)
    {
      this.jiaprice = price;
    },
    checkExist(searchTarget: { id: string }): number {
      return this.$store.state.cart.findIndex(
        (item: { id: string }) => item.id === searchTarget.id
      );
    },
  },
});
</script>

<style lang="scss">
.foods {
  width: calc(80% - #{$grid-gap});
  height: 100%;
  overflow-y: auto;

  @include breakpoint-xl {
    width: calc(60% - #{$grid-gap});
  }

  @include breakpoint-md {
    width: calc(50% - #{$grid-gap});
  }

  &__list {
    @include list-style;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    &__item {
      @include flex-arrangement(4);

      @include breakpoint-lg {
        &:nth-of-type(4n) {
          margin-right: $grid-gap;
        }
        @include flex-arrangement(3);
      }

      @include breakpoint-md {
        &:nth-of-type(3n) {
          margin-right: $grid-gap;
        }
        @include flex-arrangement(2);
      }

      @include breakpoint-sm {
        width: 100%;
        margin-right: 0 !important;

        &:nth-of-type(n + 2) {
          margin-top: $grid-gap;
        }
      }
        &:first-child {
        margin-top: 0;
        }
      &__cover {
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        border-radius: $border-radius $border-radius 0 0;
        background-size: cover;
        background-position: center;
        overflow: hidden;
      }

      &__title,
      &__action {
        margin: 0;
        padding: 0.75rem 0.75rem 0;
        background-color: $color-white;
      }

      &__action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-bottom: 0.75rem;
        font-size: $font-size-medium;
        font-weight: $font-weight-medium;
        border-radius: 0 0 $border-radius $border-radius;

        .button {
          margin-left: auto;
          font-size: $font-size-light;
          font-weight: $font-weight-regular;
        }
      }
    }
  }
}
</style>