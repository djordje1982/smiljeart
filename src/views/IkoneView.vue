<template>
  <div class="slike">
    <transition name="back" appear>
      <div class="backdrop" v-if="aktivanId" @click.self="close">
        <div class="back-levo back">
          <img
            v-if="aktivanId > 1"
            :src="require(`@/assets/images/prev.png`)"
            class="nav"
            @click="prev"
          />
        </div>
        <div class="back-centar back" @click.self="close">
          <img
            :src="require(`@/assets/images/${aktivna.imgUrl}`)"
            class="prikaz"
          />
          <div class="opis">
            <div class="levo">
              <p>{{ aktivna.title }}</p>
              <p>slika {{ aktivanId }} od {{ imgs.length }}</p>
            </div>
            <img
              :src="require(`@/assets/images/close.png`)"
              class="nav"
              @click="close"
            />
          </div>
        </div>
        <div class="back-desno back">
          <img
            v-if="aktivanId < imgs.length"
            :src="require(`@/assets/images/next.png`)"
            class="nav"
            @click="next"
          />
        </div>
      </div>
    </transition>

    <div class="gallery">
      <img
        v-for="img in imgs"
        :key="img.id"
        :src="require(`@/assets/images/${img.imgUrl}`)"
        :alt="img.alt"
        @click="aktiviraj(img.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          id: 1,
          imgUrl: "Ikona 1 Mironosnice.jpg",
          title: '"Mironosnice" - jajčana emulzija, dimenzije: 30x40cm',
          alt: "Ikona-Mironosnice",
        },
        {
          id: 2,
          imgUrl: "Ikona 2. Sv. Vasilije Ostroski.jpg",
          title: '"Sv.Vasilije Ostrški" - jajčana emulzija, dimenzije: 25x35cm',
          alt: "Ikona-Sv.Vasilije Ostrški",
        },
        {
          id: 3,
          imgUrl: "Ikona 3. Sv. Jovan.jpg",
          title: '"Sv.Jovan Krstitelj" - 24 karat.zlato',
          alt: "Ikona-Sv.Jovan Krstitelj",
        },
        {
          id: 4,
          imgUrl: "Ikona 4. Sv. Nikola.jpg",
          title: '"Sv.Nikola" - jajčana emulzija(daska) 24 karat.zlato',
          alt: "Ikona-Sv.Nikola",
        },
        {
          id: 5,
          imgUrl: "Ikona 5. Sv. Luka.jpg",
          title:
            '"Sv.Luka" - jajčana emulzija, dimenzije: 20x30cm i zlato dimenzije: 25x35cm',
          alt: "Ikona-Sv.Luka",
        },
        {
          id: 6,
          imgUrl: "Ikona 6. Sv. Georgije Bogoslov i Sv. Jovan.jpg",
          title:
            '"Sv.Georgije Bogoslov i Sv.Jovan Zlatousti" - na mediapanu, jajčana emulzija, dimenzije: 30x40cm',
          alt: "Ikona-Sv.Georgije i Sv.Jovan",
        },
        {
          id: 7,
          imgUrl: "Ikona 7. Sv. Luka.jpg",
          title: '"Sv.Luka" - jajčana emulzija, dimenzije: 30x40cm',
          alt: "Ikona-Sv.Luka",
        },
        {
          id: 8,
          imgUrl: "Ikona 8. Sv. Djordje.jpg",
          title: '"Sv.Đorđe" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Ikona-Sv.Đorđe",
        },
        {
          id: 9,
          imgUrl: "Ikona 9. Arh. Mihailo.jpg",
          title: '"Sv.Arhangel Mihailo" - akril/platno, dimenzije: 40x50cm',
          alt: "Ikona-Sv.Arhangel Mihailo",
        },
      ],
      aktivanId: null,
    };
  },
  methods: {
    aktiviraj(id) {
      this.aktivanId = id;
    },
    close() {
      this.aktivanId = null;
    },
    prev() {
      this.aktivanId--;
    },
    next() {
      this.aktivanId++;
    },
  },
  computed: {
    aktivna() {
      const akt = this.imgs.filter((img) => {
        return img.id === this.aktivanId;
      });
      let aktivna = akt[0];
      return aktivna;
    },
  },
  created() {
    document.title = "Smilja - Ikone";
  },
};
</script>

<style scoped>
.backdrop {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.back {
  height: 100%;
}

.back-levo,
.back-desno {
  width: 10%;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-centar {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav {
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.nav:hover {
  opacity: 1;
  transform: scale(1.07);
}

.prikaz {
  max-height: calc(100% - 60px);
  max-width: 100%;
}

.opis {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  height: 50px;
  padding-top: 10px;
}

.levo {
  width: 90%;
  align-self: flex-start;
}

.levo p {
  text-align: left;
  font-size: 12px;
  color: white;
}

.slike {
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
}

.gallery {
  column-count: 4;
  column-gap: 20px;
  min-height: 50vh;
  max-width: 1000px;
  margin: 0 auto;
  background: #0f0f0f;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(228, 183, 183, 0.25);
  margin-bottom: 50px;
}
.gallery img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  cursor: pointer;
}
.gallery img:hover {
  transform: scale(1.1);
}

.back-enter-from,
.back-leave-to {
  opacity: 0;
}

.back-enter-active,
.back-leave-active {
  transition: all 0.67s ease;
}

@media screen and (max-width: 840px) {
  .gallery {
    column-count: 3;
    column-gap: 15px;
  }
}
@media screen and (max-width: 500px) {
  .gallery {
    column-count: 2;
    column-gap: 10px;
  }
}
</style>
