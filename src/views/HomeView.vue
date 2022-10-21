<template>
  <div class="home">
    <div class="slider">
      <transition name="switch">
        <div class="slide1 slide" v-if="order == 1"></div>
        <div class="slide2 slide" v-else></div>
      </transition>
      <div id="dole-str" ref="strelica" @click="scrollStrelica">
        <svg
          version="1.1"
          id="svg1878"
          xmlns:cc="http://web.resource.org/cc/"
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 36.7 23.8"
          style="enable-background: new 0 0 36.7 23.8"
          xml:space="preserve"
        >
          <g id="layer1" transform="translate(-261.21 -313.62)">
            <linearGradient
              id="path9695_1_"
              gradientUnits="userSpaceOnUse"
              x1="367.6579"
              y1="1926.6851"
              x2="388.1879"
              y2="1905.4351"
              gradientTransform="matrix(0 0.8014 1.2478 0 -2114.3494 20.6098)"
            >
              <stop offset="0" style="stop-color: #f5ebdc" />
              <stop offset="1" style="stop-color: #b17d31" />
            </linearGradient>
            <path
              id="path9695"
              class="st10"
              d="M297,319.1l-4.6-4.6l-12.9,12.9l-12.8-12.8l-4.6,4.6l17.4,17.4L297,319.1z"
            />
          </g>
        </svg>
      </div>
    </div>
    <button @click="goToPage">
      <transition name="switch1" mode="out-in">
        <span v-if="order == 1">Galerija slika</span>
        <span v-else>Galerija ikona</span>
      </transition>
    </button>
    <div class="tekst">
      <p>
        Smilja Jovanović rođena je jednog vrelog leta pedesetih godina u
        Prištini. Živela je i školovala se u Norveškoj, gde se upoznala sa
        radovima norveških ekspresionista i impresionista, koji su na nju
        ostavili snažan utisak svojim jarkim tonovima i emotivno obojenim
        interpretacijama stvarnosti. Živi i radi u Beogradu od sredine 70-tih
        godina, baveći se medicinom, politikom, jogom i lepotom duha i tela.
        Slikarstvom se bavi od 2007.godine.
      </p>
      <p>
        Njene teme kreću se u rasponu od osunčanih pejzaža i unutarnjih svetova
        iskazanih kroz vrlo realistične motive, do tradicionalnog ikonopisanja,
        arhitekture i mrtve prirode sa primesama apstrakcije. Bez obzira na temu
        kojom se bavi, sva njena dela sadrže aspekte duhovnosti, patriotizma i
        emocionalnosti, izraženih kroz jarke, čiste boje, kontraste i gotovo
        dečiji prkos i optimizam. Ima ćerku i unuku sa kojima često sarađuje u
        svom kreativnom stvaralaštvu. Imala je samostalnu izložbu 2011.godine i
        2014. dve kolektivne u crkvi Sv.Varnave i Vartolomeja - Rakovica. Član
        je udruženja "Art Centra" u Skadarskoj ulici u Beogradu.
      </p>
    </div>
    <div class="donja-slika"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  created() {
    document.title = "Smilja";
  },
  components: {},
  data() {
    return {
      order: 1,
    };
  },
  methods: {
    slide() {
      setInterval(() => {
        if (this.order == 1) {
          this.order = 2;
        } else {
          this.order = 1;
        }
      }, 6500);
    },
    goToPage() {
      if (this.order == 1) {
        this.$router.push("/slike/");
      } else {
        this.$router.push("/ikone/");
      }
    },
    scrollStrelica() {
      this.$refs.strelica.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    this.slide();
  },
};
</script>

<style scoped>
.slider {
  height: 100vh;
  width: 100%;
  position: relative;
}

.slide {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.slide1 {
  width: 100%;
  background-image: url("../assets/images/00-slide-slike.jpg");
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
.slide2 {
  width: 100%;
  background-image: url("../assets/images/00-slide-ikone.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
}

.switch-enter-active,
.switch-leave-active {
  transition: all 3s ease;
}
.switch1-enter-from,
.switch1-leave-to {
  opacity: 0;
}

.switch1-enter-active,
.switch1-leave-active {
  transition: all 1.5s ease;
}

button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f7931e;
  letter-spacing: 1px;
  font-size: 22px;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  line-height: 1.6;
  transition: all 0.3s ease;
}

button:hover {
  background-color: rgba(0, 0, 0, 1);
  border-radius: 15px;
}

.tekst {
  position: relative;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  color: #cb9b51;
  padding: 15px 20%;
}
.tekst p {
  text-align: justify;
  font-style: italic;
  font-size: 15px;
  text-indent: 30px;
}
.tekst p:last-of-type {
  margin-top: 15px;
}

.donja-slika {
  width: 100%;
  position: relative;
  height: 600px;
  background-image: url("../assets/images/img-main.jpg");
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.st10 {
  fill: url(#path9695_1_);
  stroke: #000;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
}

#dole-str {
  position: absolute;
  top: 90vh;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 4;
  animation: strelicaAnim 2s ease alternate infinite;
}
@keyframes strelicaAnim {
  from {
    opacity: 0.35;
  }
  to {
    opacity: 1;
  }
}
#dole-str:hover {
  opacity: 1;
}

@media screen and (max-width: 680px) {
  .tekst {
    padding: 15px 25px;
  }
}
</style>
