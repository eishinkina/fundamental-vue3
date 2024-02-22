<template>
  <div class="app">
    <PostForm />
    <PostList />
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
      title: "",
      body: "",
    };
  },
  methods: {
    createPost(event) {
      event.preventDefault();
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
