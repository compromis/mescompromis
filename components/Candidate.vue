<template>
  <div :id="candidate.id">
    <nuxt-link :to="isOpen ? '/candidatura' : `/candidatura/${candidate.id}`" :class="['candidate', `candidate-${candidate.id}`, isOpen ? 'candidate-is-open' : '', isProvincia ? 'candidate-is-provincia' : '']">
      <div class="candidate-image">
        <img :src="candidate.image" :alt="candidate.name">
      </div>
      <div class="candidate-info">
        <h2 class="candidate-name">{{ candidate.name }}</h2>
        <div class="candidate-subtitle">{{ candidate[`subtitle_${$i18n.locale}`] }}</div>
      </div>
      <div class="candidate-background"></div>
    </nuxt-link >
    <transition name="candidate">
      <div :class="['candidate-description', isProvincia ? 'candidate-is-provincia' : '']" v-if="isOpen">
        <div v-html="candidate[`bio_${$i18n.locale}`]"></div>
        <ul class="candidate-social">
          <li><a :href="candidate.facebook"><fa :icon="['fab', 'facebook-square']" /><span class="sr-only">Facebook</span></a></li>
          <li><a :href="candidate.twitter"><fa :icon="['fab', 'twitter']" /> <span class="sr-only">Twitter</span></a></li>
          <li><a :href="candidate.instagram"><fa :icon="['fab', 'instagram']" /> <span class="sr-only">Instagram</span></a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'candidate',

    props: {
      candidate: {
        type: Object,
        default: () => {}
      },
      isProvincia: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      isOpen: function () {
        const path = this.$route.path.replace(/(\/candidatura\/|\/cas\/candidatura\/)/g, '')
        return path === this.candidate.id
      }
    }
  }

</script>

<style lang="scss" scoped>
@import '../sass/variables';

.candidate {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.6fr 1fr 1fr;
  padding: 2rem;
  position: relative;
  z-index: 10;
  transition: 0.3s ease-in-out;
  color: $navy;

  &:hover {
    text-decoration: none;
    transform: scale(1.02);
    color: $orange;
    padding: 2rem 0;

    .candidate-background {
      background-color: darken($beige, 5%);
    }

  }

  &-is-open {
    &:hover {
      transform: scale(.98);
      padding: 2rem;
    }
  }

  &-background {
    background-color: $beige;
    border-radius: $border-radius-xl;
    grid-column: 1/-1;
    grid-row: 2/-1;
    z-index: -10;
    transition: 0.3s ease-in-out;
  }

  &-image {
    justify-self: center;
    grid-column: 1;
    grid-row: 1 / span 3;
    img {
      width: 100%;
    }
  }

  &-info {
    align-self: center;
    grid-column: 2;
    grid-row: 2 / span 2;
  }

  &-name {
    font-size: 8rem;
    font-weight: bold;
    line-height: 1;
  }

  &-subtitle {
    font-size: 2rem;
    font-weight: bold;
  }

  &-description {
    font-size: 1.5rem;
    padding: 8rem 12rem 2rem 5rem;
    font-weight: bold;
    color: $white;
    background-color: $navy;
    border-radius: $border-radius-xl;
    margin-top: -8rem;
    z-index: -10;
  }

  &-social {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-top: 2rem;

    li {
      display: flex;
      align-self: center;
      justify-self: center;

      a {
        display: block;
        color: $navy;
        text-align: center;
        transition: 0.3s ease-in-out;
        background: $beige;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        padding: .75rem;
        font-size: 1.5rem;
        margin-right: 1rem;
        line-height: 1;
        transition: 0.3s ease-in-out;

        &:hover {
          text-decoration: none;
          background: $yellow;
          transform: scale(1.08);
        }
      }
    }
  }

  &-inigo-errejon {
    &:hover {
      color: $teal;
    }
  }

  &-marta-sorli {
    &:hover {
      color: $teal;
    }
  }
}

@include media-breakpoint-up(lg) {
  .candidate {
    &-is-provincia {
      &.candidate {
        &:hover {
          transform: scale(1.03);
          padding: 2rem;
        }
        &-is-open {
          &:hover {
            transform: scale(.99);
            padding: 2rem;
          }
        }
      }

      .candidate-name {
        font-size: 3.1rem;
        line-height: 1.1;
        padding-right: 2rem;
      }
      .candidate-subtitle {
        font-size: 1.1rem;
        padding-right: 1rem;
      }
      &.candidate-description {
        font-size: 1.25rem;
        padding-right: 5rem;
      }
      .candidate-image {
        img {
          width: 90%;
        }
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .candidate {
    &-name {
      font-size: 6rem;
    }
  }
}

@include media-breakpoint-down(md) {
  .candidate {
    padding: 0;
    grid-template-columns: .75rem .75fr 1fr .75rem;
    grid-template-rows: 0.3fr 1fr 2.25rem;

    &:active {
      transform: scale(1.02);
      color: $navy;
    }

    &:hover {
      transform: scale(1.02);
      color: $navy;
    }

    &-is-open {
      &:hover {
        transform: scale(1);
        padding: 0;
        color: $white;
      }

      color: $white;
    }

    &-name {
      font-size: calc(1.5rem + 1vw);
      line-height: 1;
    }

    &-subtitle {
      font-size: calc(.85rem + 1vw);
      line-height: 1;
    }

    &-background {
      border-radius: $border-radius-xl;
      grid-column: 1/-1;
      grid-row: 2;
    }

    &-image {
      justify-self: center;
      grid-column: 2 / span 2;
      grid-row: 1 / span 2;
    }

    &-info {
      align-self: end;
      justify-self: right;
      grid-column: 3;
      grid-row: 2 / span 2;
      background-color: $teal;
      border-radius: $border-radius-lg;
      padding: 1rem;
    }

    &-description {
      font-size: 1.2rem;
      padding: 7.5rem 2rem 2rem 2.25rem;
      font-weight: bold;
      color: $white;
      line-height: 1.8;
      background-color: $navy;
      border-radius: 0;
      margin: -6rem -1rem 0;
      z-index: -10;
    }
  }
}
</style>
