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
          imgUrl: "01. Crveni Sesir.jpg",
          title: '"Crveni Šešir" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Slika-Crveni šešir",
        },
        {
          id: 2,
          imgUrl: "02. Hrabra.jpg",
          title: '"Hrabra" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Slika-Hrabra",
        },
        {
          id: 3,
          imgUrl: "03. Plave Bulke.jpg",
          title: '"Plave Bulke" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Slika-Plave Bulke",
        },
        {
          id: 4,
          imgUrl: "04. Dvoje.jpg",
          title: '"Dvoje" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Slika-Dvoje",
        },
        {
          id: 5,
          imgUrl: "05. Zlatni Krugovi.jpg",
          title: '"Zlatni krugovi" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Zlatni krugovi",
        },
        {
          id: 6,
          imgUrl: "06. Frida Kalo.jpg",
          title: '"Frida Kalo" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Frida Kalo",
        },
        {
          id: 7,
          imgUrl: "07. Zamisao.jpg",
          title: '"Zamisao" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Zamisao",
        },
        {
          id: 8,
          imgUrl: "08. Japanka.jpg",
          title: '"Japanka" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Japanka",
        },
        {
          id: 9,
          imgUrl: "09. San.jpg",
          title: '"San" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-San",
        },
        {
          id: 10,
          imgUrl: "10. Zdralovi.jpg",
          title: '"Ždralovi" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Ždralovi",
        },
        {
          id: 11,
          imgUrl: "11. Par.jpg",
          title: '"Par" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Par",
        },
        {
          id: 12,
          imgUrl: "12. S.jpg",
          title: '"S" - kombinovana tehnika mediapan, dimenzije: 40x40cm',
          alt: "Slika-S",
        },
        {
          id: 13,
          imgUrl: "13. Stari Grad.jpg",
          title: '"Stari grad" - ulje na platnu, dimenzije: 35x45cm',
          alt: "Slika-Stari Grad",
        },
        {
          id: 14,
          imgUrl: "14. Zuti Splav.jpg",
          title: '"Žuti splav" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Slika-Žuti splav",
        },
        {
          id: 15,
          imgUrl: "15. Konji.jpg",
          title: '"Konji" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Slika-Konji",
        },
        {
          id: 16,
          imgUrl: "16. Andjeli.jpg",
          title: '"Anđeli" - kombinovana tehnika mediapan, dimenzije: 25x35cm',
          alt: "Slika-Anđeli",
        },
        {
          id: 17,
          imgUrl: "17. Biciklisti.jpg",
          title:
            '"Biciklisti" - kombinovana tehnika mediapan, dimenzije: 25x35cm',
          alt: "Slika-Biciklisti",
        },
        {
          id: 18,
          imgUrl: "18. Perunika.jpg",
          title:
            '"Perunika" - kombinovana tehnika mediapan, dimenzije: 25x35cm',
          alt: "Slika-Perunika",
        },
        {
          id: 19,
          imgUrl: "19. Petao.jpg",
          title: '"Petao" - kombinovana tehnika mediapan, dimenzije: 25x35cm',
          alt: "Slika-Petao",
        },
        {
          id: 20,
          imgUrl: "20. Kosa.jpg",
          title: '"Kosa" - kombinovana tehnika mediapan, dimenzije: 40cm',
          alt: "Slika-Kosa",
        },
        {
          id: 21,
          imgUrl: "21. Kimono.jpg",
          title: '"Kimono" - kombinovana tehnika mediapan, dimenzije: 30x40cm',
          alt: "Slika-Kimono",
        },
        {
          id: 22,
          imgUrl: "22. Gospodja.jpg",
          title:
            '"Gospođa" - kombinovana tehnika 24 karat. zlato, dimenzije: 25x35cm',
          alt: "Slika-Gospođa",
        },
        {
          id: 23,
          imgUrl: "23. Gospodin.jpg",
          title:
            '"Gospodin" - kombinovana tehnika 24 karat. zlato, dimenzije: 25x35cm',
          alt: "Slika-Gospodin",
        },
        {
          id: 24,
          imgUrl: "24. Decak.jpg",
          title: '"Dečak" - jajčana emulzija mediapan, dimenzije: 25x35cm',
          alt: "Slika-Kosa",
        },
        {
          id: 25,
          imgUrl: "25. Zeleno.jpg",
          title: '"Zeleno" - akril, dimenzije: 35x35cm',
          alt: "Slika-Kosa",
        },
        {
          id: 26,
          imgUrl: "26. Akt.jpg",
          title: '"Akt" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Akt",
        },
        {
          id: 27,
          imgUrl: "27. Rob.jpg",
          title: '"Rob" - jajčana emulzija, dimenzije: 30x40cm',
          alt: "Slika-Rob",
        },
        {
          id: 28,
          imgUrl: "28. Crvene Bulke.jpg",
          title: '"Crvene Bulke" - akril na platnu, dimenzije: 25x35cm',
          alt: "Slika-Crvene Bulke",
        },
        {
          id: 29,
          imgUrl: "29. Put.jpg",
          title: '"Put" - kombinovana tehnika mediapan, dimenzije: 25x35cm',
          alt: "Slika-Put",
        },
        {
          id: 30,
          imgUrl: "30. Mladenci.jpg",
          title: '"Mladenci" - kombinovana tehnika platno, dimenzije: 30x40cm',
          alt: "Slika-Mladenci",
        },
        {
          id: 31,
          imgUrl: "31. Pozornica.jpg",
          title: '"Pozornica" - akril na platnu, dimenzije: 50x60cm',
          alt: "Slika-Pozornica",
        },
        {
          id: 32,
          imgUrl: "32. Odmor Na Plazi.jpg",
          title: '"Odmor na plaži" - akril/daska, dimenzije: 25x35cm',
          alt: "Slika-Odmor na plaži",
        },
        {
          id: 33,
          imgUrl: "33. Paun.jpg",
          title: '"Paun" - jajčana emulzija mediapan, dimenzije: 25x35cm',
          alt: "Slika-Paun",
        },
        {
          id: 34,
          imgUrl: "34. Devojka sa minđušom.jpg",
          title: '"Devojka sa minđušom" - ulje na platnu, dimenzije: 30x40cm',
          alt: "Slika-Devojka sa minđušom",
        },
        {
          id: 35,
          imgUrl: "35. Sviračica.jpg",
          title: '"Sviračica" - akril na platnu, dimenzije: 30x40cm',
          alt: "Slika-Sviračica",
        },
        {
          id: 36,
          imgUrl: "36. Cvetni raskos.jpg",
          title: '"Cvetni raskoš" - ulje na platnu, dimenzije: 70x50cm',
          alt: "Slika-Cvetni raskoš",
        },
        {
          id: 37,
          imgUrl: "37. Voce.jpg",
          title: '"Voće" - ulje na platnu, dimenzije: 40x50cm',
          alt: "Slika-Voće",
        },
        {
          id: 38,
          imgUrl: "38. Madmazel.jpg",
          title: '"Madmazel" - akril na platnu, dimenzije: 30x40cm',
          alt: "Slika-Madmazel",
        },
        {
          id: 39,
          imgUrl: "39. Beli kisobran.jpg",
          title: '"Beli kišobran" - akril na platnu, dimenzije: 20x40cm',
          alt: "Slika-Beli kišobran",
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
    document.title = "Smilja - Slike";
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
    padding: 20px;
  }
}
@media screen and (max-width: 500px) {
  .gallery {
    column-count: 2;
    column-gap: 10px;
    padding: 10px;
  }
}
</style>
