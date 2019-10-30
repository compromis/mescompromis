<template>
  <div :class="['counter', number === 0 ? 'counter-hidden' : '', `counter-${color}`]">
    <div class="counter-number">{{ number }} {{ symbol }}</div>
    <div class="counter-description">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    props: {
      isTime: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: 'orange',
      },
      increment: {
        type: Number,
        default: null,
      },
      symbol: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        date: new Date(2019, 3, 28),
        interval: null,
        number: 0
      }
    },
    mounted () {
      this.interval = setInterval(()=>{ this.calculate() }, 1000);
    },
    methods: {
      calculate() {
        const now = new Date()
        const diff = (now - this.date)/1000
        this.number = Math.floor(this.increment * diff)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .counter {
    font-size: 1.5rem;
    font-weight: bold;
    transition: .5s ease-in-out;

    &-number {
      font-size: 3rem;
      background-color: $teal;
      border-radius: $border-radius-lg;
      padding: 0.5rem 1rem;
      width: fit-content;
      font-variant: tabular-nums;
      margin-bottom: .5rem;
    }

    &-hidden {
      opacity: 0;
    }

    &-orange {
      .counter-number {
        background-color: $orange;
      }
    }
  }
</style>
