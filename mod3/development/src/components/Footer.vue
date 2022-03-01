<template>
  <footer class="footer">
    <div class="footer__about">
      <button
        type="button"
        class="button button--about"
        @click="
              showPopover = !showPopover;
            "
      >
        登入
      </button>
      <transition name="slideDown" mode="out-in" appear>
        <div class="footer__about__popover" v-if="showPopover">
          <div class="container m-5">
           <form @submit.prevent="userLogin">
              <h3>登入</h3>
              <label>郵件地址</label>
              <input type="email" class="form-control form-control-lg" v-model="user.email">
              <label>密碼</label>
              <input type="password" class="form-control form-control-lg" v-model="user.password">
              <button type="submit" value="userLogin" class="button" 
              >登入</button>
              <button class="button" 
                @click="
                        showResult = !showResult;
                        showPopover = !showPopover;
                      ">註冊
              </button>  
            </form>
          </div>
        </div>
      </transition>
      <transition name="slideDown" mode="out-in" appear>
        <div class="footer__about__popover" v-if="showResult">
          <div class="container m-5">
           <form @submit.prevent="userRegistration">
              <h3>註冊</h3>

              <div class="form-group">
                <label>名字</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  v-model="user.name"
                />
              </div>

              <div class="form-group">
                <label>信箱</label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  v-model="user.email"
                />
              </div>

              <div class="form-group">
                <label>密碼</label>
                <input
                  type="password"
                  class="form-control form-control-lg"
                  v-model="user.password"
                />
              </div>
              <div class="form-group">
              <button type="submit" class="button" @click="
                        alert('你好，我是一个警告框')"
                      >
                註冊
              </button>
              <button class='btn' @click="myFunction">click me</button>
              </div>
              <p class="forgot-password text-right" @click="
                        showResult = !showResult;
                        showPopover = !showPopover;"
                        >
                已經註冊過了?
                登入
              </p>
            </form>
          </div>
        </div>
      </transition>
      
    </div>
    
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

export default defineComponent({
  name: "Footer",
  data() {
    return {
      showPopover: false,
      showResult: false,
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          console.log("登录成功");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    myFunction(){
	    alert("你好，我是一个警告框");
    },
    userRegistration() {
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(this.user.email, this.user.password)
      //   .then(() => {
      //     console.log("注册成功");
      //   })
      //   .catch((error) => {
      //     alert(error.message);
      //   });
    },
  },
});
</script>

<style lang="scss">
.footer {
  flex-basis: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% - #{$grid-gap}* 2);
  height: $footer-height;
  margin: 0 auto;

  @include breakpoint-esm {
    height: auto;
    padding-bottom: $grid-gap;
  }

  &__about {
    position: relative;

    &__popover {
      position: absolute;
      left: 0;
      bottom: 120%;
      min-width: 200px;
      padding: 0.75em;
      font-size: $font-size-light;
      background-color: $color-white;
      border-radius: $border-radius;
    }
  }

  &__copyright {
    margin-left: auto;
    padding: 0 $grid-gap;
    line-height: $footer-height;
    color: $color-black;
    font-size: $font-size-thin;
    background-color: $color-white;
    border-radius: $border-radius-round;

    @include breakpoint-esm {
      margin: 0.5rem auto 0;
      line-height: 1.75;
      border-radius: $border-radius;
    }
  }

  a {
    margin: 0 0.25em;
  }
  .button {
          margin-top: 20px;
          margin-left: auto;
          margin: 0 0.5em;
          font-size: $font-size-light;
          font-weight: $font-weight-regular;
        }
}
</style>