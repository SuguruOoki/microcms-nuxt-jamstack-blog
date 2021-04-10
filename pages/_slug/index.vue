<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config: { apiBaseUrl, xApiKey }, params }) {
    const { data } = await axios.get(
      `${apiBaseUrl}/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': xApiKey }
      }
    )
    return data
  }
}
</script>
