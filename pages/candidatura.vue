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
  import candidates from './candidatura/candidates'

  export default {
    data () {
      return {
        candidates
      }
    },

    components: {
      Candidate,
    },

    mounted() {
      console.log(this.candidates)
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
