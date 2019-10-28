<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logos">
        <compromis-logo version="mono" />
        <maspais-logo version="mono" />
      </div>
      <div class="row">
        <div class="col-lg-5">
          <div class="footer-social">
            <iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=compromis&amp;show_screen_name=true&amp;show_count=true&amp;size=l&amp;lang=es" class="twitter" frameborder="0" title="Twitter"></iframe>
            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fcoaliciocompromis&amp;width=450&amp;layout=standard&amp;action=like&amp;size=large&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=252515324782640&amp;locale=ca_ES&amp;colorscheme=dark" class="facebook" frameborder="0" title="Facebook"></iframe>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="footer-social">
            <iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=MasPais_Es&amp;show_screen_name=true&amp;show_count=true&amp;size=l&amp;lang=es" class="twitter" frameborder="0" title="Twitter"></iframe>
            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2FMasPaisEs&amp;width=450&amp;layout=standard&amp;action=like&amp;size=large&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=252515324782640&amp;locale=ca_ES&amp;colorscheme=dark" class="facebook" frameborder="0" title="Facebook"></iframe>
          </div>
        </div>
        <div class="col-lg-2 text-right footer-websites">
          <ul>
            <li><a href="https://compromis.net/?skip=1" class="btn btn-outline-light">compromis.net <fa :icon="['fas', 'arrow-right']" /></a></li>
            <li><a href="https://maspais.es" class="btn btn-outline-light">maspais.es <fa :icon="['fas', 'arrow-right']" /></a></li>
          </ul>
        </div>
      </div>
      <p class="footer-details">
        <a href="mailto:info@compromis.net">info@compromis.net</a> | 96 382 66 06 | Plaça del Pilar, 1 - 46001 València
      </p>
    </div>
  </footer>
</template>

<script>
  import CompromisLogo from './CompromisLogo'
  import MaspaisLogo from './MaspaisLogo'

  export default {
    name: 'mes-footer',

    components: {
      CompromisLogo,
      MaspaisLogo
    },
  }
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .footer {
    position: relative;
    z-index: 20;
    padding: 2rem 0;
    color: $white;
    background: $navy;

    &-logos {
      svg {
        width: 10rem;
        height: 2rem;
      }

      #MespaisLogo {
        position: relative;
        top: -3px;
      }
    }

    &-social {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;

      .twitter {
        height: 30px;
        margin-bottom: .5rem;
      }

      .facebook {
        height: 80px;
      }
    }

    &-websites {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .btn {
        white-space: nowrap;
      }
    }
  }
</style>