<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <MyButton class="nav__btn" @click="$router.push('/post')">Посты</MyButton>
      <MyButton
        class="nav__btn"
        style="margin-left: 20px"
        @click="$router.push('/about')"
        >О сайте</MyButton
      >
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";

export default { components: { MyButton } };
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
.nav__btn {
  margin: 0;
}
</style>
