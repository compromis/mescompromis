<template>
  <div class="take-action">
    <div class="container">
      <div class="take-action-content">
        <h2>{{ $t('nav.takeaction') }}</h2>
        <div class="block block-1">
          <h3>{{ $t('takeaction.donations.header') }}</h3>
          <p>{{ $t('takeaction.donations.description') }}</p>
          <ul>
            <li><a href="https://compromis.net/espai/donacions/campanya2019?preselect=5" target="_blank" rel="noopener">5€</a></li>
            <li><a href="https://compromis.net/espai/donacions/campanya2019?preselect=10" target="_blank" rel="noopener">10€</a></li>
            <li><a href="https://compromis.net/espai/donacions/campanya2019?preselect=20" target="_blank" rel="noopener">20€</a></li>
            <li><a href="https://compromis.net/espai/donacions/campanya2019?preselect=50" target="_blank" rel="noopener">50€</a></li>
            <li><a href="https://compromis.net/espai/donacions/campanya2019" target="_blank" rel="noopener">{{ $t('takeaction.donations.other') }}</a></li>
          </ul>
        </div>
        <div class="block block-2">
          <h3>{{ $t('takeaction.social.header') }}</h3>
          <p>{{ $t('takeaction.social.description') }}</p>
          <ul>
            <li><a href="https://www.facebook.com/coaliciocompromis" target="_blank" rel="noopener"><fa :icon="['fab', 'facebook-square']" /> Facebook</a></li>
            <li><a href="https://twitter.com/compromis" target="_blank" rel="noopener"><fa :icon="['fab', 'twitter']" /> Twitter</a></li>
            <li><a href="https://www.instagram.com/compromis_net/" target="_blank" rel="noopener"><fa :icon="['fab', 'instagram']" /> Instagram</a></li>
            <li><a href="https://compromis.net/whatsapp" target="_blank" rel="noopener"><fa :icon="['fab', 'whatsapp']" /> WhatsApp</a></li>
            <li><a href="https://t.me/compromis" target="_blank" rel="noopener"><fa :icon="['fab', 'telegram']" /> Telegram</a></li>
          </ul>
        </div>
        <div class="block block-3">
          <h3>{{ $t('takeaction.events.header') }}</h3>
          <p>{{ $t('takeaction.events.description') }}</p>
          <ul>
            <li><a href="">{{ $t('takeaction.events.button') }}</a></li>
          </ul>
        </div>
        <div class="block block-4">
          <h3>{{ $t('takeaction.observers.header') }}</h3>
          <p>{{ $t('takeaction.observers.description') }}</p>
          <ul>
            <li><a href="https://garantiademocratica.compromis.net" target="_blank" rel="noopener">{{ $t('takeaction.observers.button') }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'actua',

    head () {
      return {
        title: 'Actua! | Compromís - Más País',
        meta: [
          { property: 'og:image', content: 'https://mes.compromis.net/images/thumbnail_generic.jpg' }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';
 
  .take-action {
    background: $navy;
    color: $white;
    padding: 2rem;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &-content {
      display: grid;
      grid-template-columns: 1fr 1fr .5fr .5fr;
      grid-template-rows: .5fr 1fr 1fr .5fr 2rem;
      grid-gap: 2rem;
    }

    .block {
      display: flex;
      border-radius: $border-radius;
      padding: 1.5rem;
      flex-direction: column;

      &-1 {
        background: $teal;
        grid-area: 2 / 1 / span 2;

        a {
          color: $teal;

          &:hover {
            background: $yellow;
            color: $navy;
          }
        }
      }

      &-2 {
        background: $yellow;
        grid-area: 1 / 2 / span 2 / span 2;

        a {
          color: $yellow;

          &:hover {
            background: $red;
            color: $white;
          }
        }
      }

      &-3 {
        background: $orange;
        grid-area: 3 / 2 / span 3;

        a {
          color: $orange;

          &:hover {
            background: $navy;
            color: $yellow;
          }
        }
      }

      &-4 {
        background: $red;
        grid-area: 3 / 3 / span 2 / span 2;

        a {
          color: $red;

          &:hover {
            background: $yellow;
            color: $navy;
          }
        }
      }

      h3 {
        font-weight: bold;
        font-size: 2rem;
      }

      ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        margin-top: auto;
        flex-wrap: wrap;
        margin-bottom: -.5rem;
        max-width: 500px;

        a {
          display: block;
          background: $white;
          font-size: 1.25rem;
          padding: .25rem .75rem;
          margin-right: .5rem;
          border-radius: $border-radius;
          transition: .25s ease-in-out;
          margin-bottom: .5rem;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    h2 {
      font-size: 5rem;
      font-weight: bold;
      grid-area: 1 / 1;
      margin-top: 3rem;
      margin-bottom: 0;
    }
  }

  @include media-breakpoint-down(lg) {
    .take-action {
      padding: 0;

      h2 {
        font-size: 3rem;
        margin-top: 2rem;
      }

      &-content {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 1rem;
      }

      .block {
        padding: 1rem;

        &-1, &-2, &-3, &-4 {
          grid-area: auto;
        }

        h3 {
          font-size: 1.75rem;
        }
      }
    }
  }
</style>