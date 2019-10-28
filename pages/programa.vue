<template>
  <div :class="['programa', 'programa-' + sectionName]">
    <programa-header />
    <transition name="fade">
      <div :class="{'programa-container': true, 'container-has-content': $route.name !== 'programa___val' && $route.name !== 'programa___cas' }">
        <div class="container container-inner">
          <nuxt-child />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import ProgramaHeader from '@/components/ProgramaHeader'

  export default {
    components: {
      ProgramaHeader
    },

    data () {
      return {
        sectionName: ''
      }
    },

    head () {
      return {
        title: 'Programa - Compromís-Más País'
      }
    },

    watch: {
      '$route': function () {
        this.sectionName = this.getSection()
      }
    },

    mounted () {
      this.sectionName = this.getSection()
    },

    methods: {
      getSection () {
        const routeParts = this.$route.path.split('/')

        if (routeParts[1] === 'cas') {
          return routeParts[3]
        } else {
          return routeParts[2]
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../sass/variables';

  .programa {
    background-color: $navy;
    padding-bottom: 4rem;
    transition: .5s ease-in-out;

    &-container {
      transition: .5s ease-in-out;
      margin-top: -12vh;

      &.container-has-content {
        opacity: 1;
        margin-top: -30vh;
      }
    }

    &-text {
      max-width: 900px;
      margin: 0 auto;
      padding-right: 10rem;
    }

    .container-inner {
      position: relative;
      background: $white;
      padding: 4rem;
      z-index: 200;
      margin: 0 auto;
      border-radius: $border-radius $border-radius 0 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
      margin-top: 2rem;
    }

    li {
      margin-bottom: .5rem;
    }

    p {
      font-size: 1.15rem;
      line-height: 1.75;
    }

    &-index p {
      font-size: 1.5rem;
    }

    &-section-index {
      display: flex;
      list-style: none;
      margin: -4rem -4rem 4rem -4rem;
      padding: 2rem 2rem 1rem 2rem;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
      flex-wrap: wrap;

      li {
        display: flex;
        align-items: stretch;
        margin-bottom: 0;
      }

      a {
        display: flex;
        border: 2px $red solid;
        padding: .75rem 1.15rem;
        border-radius: $border-radius-lg;
        color: $red;
        margin-right: 1rem;
        white-space: nowrap;
        margin-bottom: 1rem;
        transition: .25s ease-in-out;

        &.nuxt-link-exact-active {
          background: $red;
          color: $white;
          position: relative;

          &:hover {
            background: darken($red, 10%);
            border-color: darken($red, 10%);
          }
        }

        &:hover {
          background: mix($red, $white, 10%);
          text-decoration: none;
        }
      }
    }

    &-protegir-la-terra {
      background-color: $red;
    }

    &-cuidar-de-les-persones {
      background-color: $yellow;
    }

    &-garantir-els-drets {
      background-color: $teal;
    }

    &-financament-just {
      background-color: $orange;
    }
  }

  @include media-breakpoint-down(lg) {
    .programa {
      .container-inner {
        padding: 1rem;
      }

      &-text {
        padding-right: 0;
      }

      &-section-index { 
        margin: -1rem -1rem 1rem -1rem;
        padding: 1rem;
      }
    }
  }
</style>
