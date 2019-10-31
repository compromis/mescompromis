<template>
  <div class="sense-govern">
    <div class="sense-govern-header">
      <div class="container">
        <div class="hashtag"><span>{{ $t('sense_govern.hashtag') }}</span></div>
        <timer />
        <div class="lawless"><span>{{ $t('sense_govern.lawless') }}</span></div>
      </div>
    </div>
    <div class="sense-govern-content">
      <div class="container sense-govern-intro">Des d'aleshores...</div>
      <div class="container sense-govern-counters">
        <counter :increment="2.51458" symbol="€" color="orange" is-big>Hem deixat de rebre els valencians i les valencianes mentre no es reforma la Llei de Finançament</counter>
        <counter :increment="0.23" symbol="t" color="yellow" is-time>Són les hores que ha fet una treballdora a jornada completa mentre no teníem govern</counter>
        <counter :increment="0.04" symbol="t" color="teal" is-time>Són les hores que s'hauria estalviat amb la nostra proposta de setmana laboral de 4 dies</counter>
        <counter :increment="1.0327" symbol="t" color="red" is-big>Les tones de CO2 emeses a l'estat, mentre seguim sense un acord verd.</counter>
        <counter :increment="0.00001651445" symbol="€" color="teal" decimals>Ha perdut un pensionista mínim mentre el govern no revaloritza la seua pensió.</counter>
      </div>
    </div>
  </div>
</template>

<script>
  import Timer from '@/components/Timer'
  import Counter from '@/components/Counter'

  export default {
    components: {
      Timer,
      Counter
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .sense-govern {
    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(../assets/images/lawless.jpg);
      background-size: cover;
      background-position: center;
      padding: 15vh 0;
    }

    &-content {
      background-color: $navy;
      color: $white;
      padding-top: 4rem;
    }

    &-counters {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &-intro {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;;
    }
  }

  .lawless {
    text-align: center;

    span {
      font-size: 4rem;
      background: $red;
      font-weight: bold;
      border-radius: $border-radius-lg;
      padding: .5rem 1.5rem;
    }
  }

  .hashtag {
    text-align: center;

    span {
      display: inline-block;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      background: $white;
      color: $navy;
      padding: .5rem 1rem;
      border-radius: $border-radius;
    }
  }

  @include media-breakpoint-down(lg) {
    .lawless span {
      font-size: 3.5rem;
    }

    .hashtag span {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      padding: .25rem .75rem;
    }
  }

  @include media-breakpoint-down(md) {
    .lawless span {
      font-size: 2.5rem;
    }

    .hashtag span {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      padding: .15rem .5rem;
    }
  }

  @include media-breakpoint-down(sm) {
    .lawless span {
      font-size: 1.5rem;
      padding: .5rem 1rem;
      border-radius: $border-radius;
    }

    .hashtag span {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      padding: 0.25rem .5rem;
    }
  }
</style>
