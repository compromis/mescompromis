<template>
  <section class="hero" role="banner">
    <div :class="['hero-motto', `is-on-slide-${currentSlide}`]">
      <span class="hero-motto-title">Acordar</span>
      <span class="hero-motto-subtitle">la política útil</span>
      <div class="hero-buttons">
        <b-button variant="dark" size="lg">Programa</b-button>
        <b-button variant="secondary" size="lg">Vídeo</b-button>
      </div>
    </div>
    <div class="hero-slides">
      <b-carousel id="carousel-no-animation" fade @sliding-start="(slide) => { this.currentSlide = slide }">
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
    name: 'hero',

    data() {
      return {
        currentSlide: 0
      }
    }
  }
</script>

<style lang="scss">
@import '../sass/variables';

.hero {
  height: calc(100vh - 3.5rem);
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


    &-background {
      height: calc(100vh - 3.5rem);
      background-repeat: no-repeat;
      background-color: $body-bg;
    }

    &-hands {
      background-image: url('../assets/images/high-five.png');
      background-position: top right;
      background-size: auto 150%;
    }

    &-hug {
      background-image: url('../assets/images/hug.png');
      background-position: right top;
      background-size: auto 100%;
    }
  }

  &-motto {
    display: flex;
    flex-direction: column;
    margin-left: 6vw;

    &-title {
      font-size: calc(4rem + 3vw);
    }

    &-subtitle {
      font-size: calc(2.5rem + 2vw);
      margin-left: calc(2rem + 2.75vw);
    }

    span {
      width: fit-content;
      padding: 0 1.5rem;
      margin-bottom: calc(0.75rem + 0.25vw);
      border-radius: $border-radius-lg;
      font-weight: bold;
      background: $yellow;
      color: $body-color;
      transition: 0.4s ease-in-out;
    }

    &.is-on-slide-1 {
      span {
        background: $teal;
      }
    }
  }

  &-buttons {
    .btn {
      margin-right: .5rem;
    }
  }
}

@include media-breakpoint-down(xs) {
  .hero {
    height: calc(100vh - 3.5rem);
    align-items: flex-end;

    &-motto {
      margin: 1.2rem;
      width: 100%;

      &-title {
        font-size: 3.25rem;
      }

      &-subtitle {
        font-size: 1.9rem;
      }

      span {
        padding: 0 .75rem;
        margin-bottom: 0.4rem;
        border-radius: $border-radius;
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

    &-buttons {
      margin-top: 3rem;
      align-self: flex-end;
    }
  }
}
</style>
