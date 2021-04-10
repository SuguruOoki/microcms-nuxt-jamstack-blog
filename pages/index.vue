<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config: { apiBaseUrl, xApiKey } }) {
    const { data } = await axios.get(
      `${apiBaseUrl}/blog`,
      {
        headers: { 'X-API-KEY': xApiKey }
      }
    )
    return data
  }
}
</script>
