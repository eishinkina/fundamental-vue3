<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
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
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
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
