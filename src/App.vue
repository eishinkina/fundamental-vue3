<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <MyButton @click="showDialog" style="margin: 15px 0;">Создать пост</MyButton>
    <MyDialog v-model:show="dialogVisible"
      ><PostForm @create="createPost"
    /></MyDialog>

    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript",
          body: "Описание поста",
        },
        {
          id: 2,
          title: "Vue 3",
          body: "Описание поста",
        },
        {
          id: 3,
          title: "Vuex",
          body: "Описание поста",
        },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id != post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
