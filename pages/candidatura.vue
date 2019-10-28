<template>
  <div class="container-fluid">
    <candidate :candidate="candidates.joanBaldovi" />
    <candidate :candidate="candidates.inigoErrejon" />
    <div class="candidates-provincia">
      <candidate is-provincia :candidate="candidates.ignasiCandela" />
      <candidate is-provincia :candidate="candidates.martaSorli" />
    </div>
  </div>
</template>

<script>
  import Candidate from '../components/Candidate'
  import candidates from '@/content/candidates'

  export default {
    data () {
      return {
        candidates
      }
    },

    components: {
      Candidate,
    },

    head () {
      return {
        title: 'Candidatura - Compromís-Más País'
      }
    },

    mounted() {
      const candidate = this.$route.path.replace(/(\/|candidatura)/g, '')

      if (candidate) {
        setTimeout(() => { this.$scrollTo('#' + candidate, 300, { offset: 400 }) }, 550)
      }
    },

    watch: {
      '$route': function (route) {
        const candidate = route.path.replace(/(\/|candidatura)/g, '')
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (candidate && viewportWidth < 640) {
          setTimeout(() => { this.$scrollTo('#' + candidate, 300, { offset: 400 }) }, 550)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.candidates-provincia {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
  max-height: 100%;
  align-items: top;
}

@include media-breakpoint-down(md) {
  .candidates-provincia {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    grid-row-gap: 2.5rem;
  }
}
</style>
