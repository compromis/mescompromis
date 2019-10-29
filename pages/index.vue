<template>
  <hero />
</template>

<script>
import Hero from '../components/Hero'

export default {
  components: {
    Hero
  },

  head () {
    return {
      meta: [
        { property: 'og:image', content: 'https://mes.compromis.net/images/thumbnail_generic.jpg' }
      ]
    }
  }
}
</script>
