const app = Vue.createApp({
  data: () => ({
    items: null,
    /* items → APIから取得した検索結果を格納します */
    keyword: '',
    /* keyword → ユーザーが入力した検索キーワードを入れる */
    message: ''
    /* message → ユーザーに表示するmessageを格納する */
  }),

  watch: {

  },

  mounted: function() {
  
  },

  methods: {
    
  }

})
app.mount('#app')