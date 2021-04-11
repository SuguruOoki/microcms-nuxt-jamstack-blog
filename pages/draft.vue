<template>
  <main v-if="data" class="main">
    <h1 class="title">{{ data.title }}</h1>
    <p class="publishedAt">{{ data.publishedAt }}</p>
    <div class="post" v-html="data.body"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: {}
    };
  },
  // async created({ $config: { apiBaseUrl, xApiKey }}) {
  //   const query = this.$route.query;
  //   if (query.id === undefined || query.draftKey === undefined) {
  //     return;
  //   }
  //   const { data } = await axios.get(
  //     `${apiBaseUrl}/blog/${query.id}?draftKey=${query.draftKey}`,
  //     {
  //       headers: { 'X-API-KEY': xApiKey }
  //     }
  //   )
  //   this.data = data;
  // },
}
</script>
