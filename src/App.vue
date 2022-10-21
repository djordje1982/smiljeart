<template>
  <div>
    <TheNavBar />
    <TheLoader />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in" appear>
        <component :is="Component"></component>
      </transition>
    </router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheLoader from "./components/TheLoader.vue";
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheLoader,
    TheNavBar,
    TheFooter,
  },
  setup() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Noto Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  width: 100%;
  min-height: 100vh;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(200px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
