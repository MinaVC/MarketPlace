<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="header-wrapper">
          <router-link to="/" class=" logo">
            <img src="./assets/logo.png" alt="STC Logo" />
          </router-link>
          <div class="right-side">
            <div class="input-wrapper">
              <input type="text" class="form-control" v-if="CheckInput" />
              <i
                class="icon-Icons---Star"
                @click="CheckInput = !CheckInput"
                v-if="!CheckInput"
              >
              </i>
            </div>
            <a class="burger-menu" href="javascript-void(0)">
              <i class="icon-Shape"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
    <!-- <MyComponent /> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      CheckInput: false,
    };
  },
  components: {},
};
</script>

<style lang="scss">
body {
  background-color: #eee !important;
}
header {
  background: #fff;
}
header {
  .input-wrapper i {
    font-size: 24px;
  }
  .header-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .right-side {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    a {
      margin-left: 15px;
    }
  }
}
</style>
