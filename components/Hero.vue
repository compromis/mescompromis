<template>
  <section class="hero" role="banner">
    <div class="container">
      <div class="hero-motto">
        <span class="hero-motto-title">Acordar</span>
        <span class="hero-motto-subtitle">la política útil</span>
              <div class="hero-buttons">
        <b-button>Programa</b-button>
        <b-button>Vídeo</b-button>
      </div>
      </div>

    </div>
    <div class="hero-slides">
      <b-carousel id="carousel-no-animation" fade >
        <b-carousel-slide>
          <template v-slot:img>
            <div class="hero-slides-background hero-slides-hands"></div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <div class="hero-slides-background hero-slides-hug"></div>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'hero'
  }
</script>

<style lang="scss">
@import '../sass/variables';

.hero {
  height: 70vh;
  display: flex;
  align-items: center;
  position: relative;

  &-slides {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -10;
    mix-blend-mode: multiply;

    &-background {
      height: 70vh;
      max-height: 750px;
      background-repeat: no-repeat;
      background-color: $body-bg;
    }

    &-hands {
      background-image: url('../assets/images/high-five.png');
      background-position: top right;
      background-size: 1030px;
    }

    &-hug {
      background-image: url('../assets/images/hug.png');
      background-position: right top;
      background-size: 600px;
    }
  }

  &-motto {
    display: flex;
    flex-direction: column;
    max-width: 600px;

  &-title {
    font-size: 4.5rem;
  }

  &-subtitle {
    font-size: 3rem;
    margin-left: 3rem;
  }

    span {
      width: fit-content;
      padding: 0.25rem 1rem;
      margin-bottom: 1rem;
      border-radius: $border-radius-lg;
      font-weight: bold;
      background: $yellow;
      color: $body-color;
    }
  }
}

@include media-breakpoint-down(xs) {
  .hero {
    height: calc(100vh - 3.5rem);
    align-items: flex-end;

    &-motto {
      margin-bottom: 2rem;

      &-title {
        font-size: 3.25rem;
      }

      &-subtitle {
        font-size: 1.9rem;
      }

      span {
        padding: 0 .75rem;
        margin-bottom: 0.5rem;
      }

    }

    &-slides {
      &-background {
        height: calc(100vh - 3.5rem);
      }

      &-hands {
        background-size: 140%;
        background-position: right center;
      }
      &-hug {
        background-size: 125%;
        background-position: bottom center;
      }
    }
  }
}
</style>
