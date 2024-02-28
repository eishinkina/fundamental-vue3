import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      {
        value: "title",
        name: "По названию",
      },
      {
        value: "body",
        name: "По содержимому",
      },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    sortedAndSearchPosts(state, getters) {
      return getters.sortedPosts.filter((post) => {
        return post.title
          ?.toLowerCase()
          .includes(state.searchQuery.toLowerCase());
      });
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, value) {
      state.searchQuery = value;
    },
    setSelectedSort(state, value) {
      state.selectedSort = value;
    },
  },

  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);

        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", res.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        const nextPage = state.page + 1;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: nextPage,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(res.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", [...state.posts, ...res.data]);
        commit("setPage", nextPage);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: "post",
};
