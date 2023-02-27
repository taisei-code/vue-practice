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
    this.keyword = 'JS'
    this.getAnswer()
  },

  methods: {
    /* APIからデータを取得するメソット */
    getAnswer: function() {
      if(this.keyword === '') {
        console.log('karamoji')
        this.items = null
        return
      }

      this.message = 'Loading'
      const vm     = this
      const params = { page: 1, per_page: 20, query: this.keyword }

      /* axiosのgetメソットで使ってAPIを叩く */
      axios.get('https://qiita.com/api/v2/items', { params })
        .then(function(response) {
          console.log(response)
          vm.items = response.data
        })
        .catch(function(error) {
          vm.message = 'Error' + error
        })
        .finally(function() {
          vm.message = ''
        })
    }
  }

})
app.mount('#app')