<template>
  <transition name="fade">
    <div id="loader" v-if="vis">
      <svg
        version="1.1"
        id="load"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 1080"
        style="enable-background: new 0 0 1920 1080"
        xml:space="preserve"
      >
        <path
          class="st0"
          d="M585.47,378.83c0,12.27-2.7,23.1-8.11,32.47c-4.72,8.26-10.9,14.4-18.55,18.41
		c-7.02,3.72-15.39,5.58-25.11,5.58c-12.08,0-23.93-3.57-35.55-10.71l-1.04-2.46c1.61-8.55,2.42-20.72,2.42-36.49l0.86-1.12h5.52
		l0.78,1.12v2.57c0,4.17,0.34,9.67,1.04,16.52c2.07,4.76,5.78,8.85,11.13,12.27c5.58,3.57,11.39,5.36,17.43,5.36
		c11.39,0,19.27-5.13,23.64-15.4c2.24-5.28,3.36-10.75,3.36-16.4c0-9.52-3.08-16.33-9.23-20.42c-3.05-2.01-7.97-3.68-14.75-5.02
		c-15.36-3.05-25.45-6.88-30.28-11.49c-7.31-6.99-10.96-17.82-10.96-32.47c0-15.25,3.97-27.41,11.91-36.49
		c8.4-9.52,20.07-14.28,35.03-14.28c13.46,0,24.33,2.79,32.61,8.37l0.6,2.68c-1.38,8.85-2.22,19.49-2.5,31.91l-0.95,1.12h-5.44
		l-0.86-1.12c-0.17-8.93-0.46-14.73-0.86-17.41c-1.78-3.5-4.89-6.47-9.32-8.93c-4.72-2.53-9.64-3.79-14.75-3.79
		c-7.71,0-13.81,2.64-18.29,7.92c-4.2,4.98-6.3,11.42-6.3,19.3c0,8.56,2.39,14.84,7.16,18.86c3.11,2.6,10.44,5.1,22,7.48
		c1.21,0.22,4.57,0.97,10.1,2.23c3.39,0.74,6.53,1.82,9.4,3.24c5.81,2.83,10.18,7.14,13.11,12.94
		C583.88,361.49,585.47,369.38,585.47,378.83z"
        />
        <path
          class="st0"
          d="M747.85,429.82l-0.86,1.23c-3.34-0.45-9.26-0.67-17.77-0.67c-7.08,0-12.11,0.22-15.1,0.67l-1.21-2.12
		c0.92-18.52,1.38-32.03,1.38-40.51v-10.15c0-10.94-0.26-18.26-0.78-21.98c-0.63-4.46-2.07-8.03-4.31-10.71
		c-2.24-2.68-5.29-4.02-9.15-4.02c-4.31,0-7.91,1.56-10.79,4.69c-2.88,3.12-4.31,7.11-4.31,11.94v33.25l0.35,17.63
		c0.11,4.76,0.43,7.89,0.95,9.37c0.35,0.97,1.12,1.67,2.33,2.12c1.04,0.37,3.82,0.86,8.37,1.45l0.95,1.12v6.7l-1.04,1.23
		c-6.96-0.45-14.01-0.67-21.14-0.67c-8.86,0-16.45,0.22-22.78,0.67l-0.95-1.23v-6.58l0.86-1.34c3.62-0.45,6.13-0.85,7.51-1.23
		c1.04-0.3,1.78-1.41,2.24-3.35c0.35-1.41,0.55-5.54,0.6-12.39l0.17-36.04c0-8.33-0.49-14.28-1.47-17.85
		c-0.81-2.83-2.33-5.17-4.57-7.03c-2.01-1.71-4.66-2.57-7.94-2.57c-5.18,0-9.29,2.23-12.34,6.7c-1.44,2.08-2.29,3.76-2.54,5.02
		c-0.26,1.27-0.39,4.06-0.39,8.37v24.21c0,4.76,0.11,10.94,0.34,18.52c0.23,7.81,0.46,12.35,0.69,13.61
		c0.35,1.56,1.31,2.62,2.89,3.18c1.58,0.56,3.98,0.88,7.2,0.95l0.86,1.12v6.81l-0.86,1.12c-4.89-0.45-12.2-0.67-21.92-0.67
		c-10.3,0-18.15,0.26-23.55,0.78l-0.86-1.12v-6.81l0.86-1.12c5.52-0.22,8.94-0.78,10.27-1.67c1.15-0.67,1.78-2.45,1.9-5.36
		c0.4-9.67,0.6-20.05,0.6-31.13V368c0-14.88-0.43-23.43-1.29-25.67c-0.58-1.49-1.81-2.42-3.71-2.79c-0.69-0.15-3.19-0.33-7.51-0.56
		l-0.86-1.12v-6.25l0.86-1.23c10.35-1.26,21.25-4.35,32.7-9.26l1.9,1.45l-0.17,17.74l15.36-16.07c2.82-1.64,6.15-2.46,10.01-2.46
		c6.61,0,11.76,1.4,15.44,4.18c3.68,2.79,6.64,7.68,8.89,14.67l15.7-16.4c2.82-1.71,6.24-2.57,10.27-2.57
		c11.1,0,18.81,5.21,23.12,15.62c1.9,4.61,2.85,11.68,2.85,21.2c0,3.94-0.03,6.88-0.09,8.82l-0.09,4.24
		c-0.12,3.57-0.17,5.95-0.17,7.14v14.51c0,11.23,0.14,18.4,0.43,21.48c0.29,3.09,0.95,5.04,1.98,5.86c1.04,0.82,3.97,1.3,8.8,1.45
		l0.86,1.23V429.82z"
        />
        <path
          class="st0"
          d="M805.74,430.05l-0.86,1.12c-5.47-0.52-13.35-0.78-23.64-0.78c-10.3,0-18.15,0.26-23.55,0.78l-0.86-1.12v-6.81
		l0.86-1.12c5.52-0.22,8.94-0.78,10.27-1.67c1.15-0.67,1.78-2.45,1.9-5.36c0.4-9.67,0.6-20.05,0.6-31.13V368
		c0-14.43-0.43-22.99-1.29-25.67c-0.46-1.49-1.7-2.42-3.71-2.79c-0.69-0.15-3.19-0.33-7.51-0.56l-0.86-1.12v-6.25l0.86-1.23
		c11.04-1.26,22.17-4.35,33.39-9.26l1.81,1.45c-0.75,13.54-1.12,24.96-1.12,34.26v35.6c0,5.43,0.2,12.98,0.6,22.65
		c0.11,2.9,0.75,4.69,1.9,5.36c1.32,0.89,4.75,1.45,10.27,1.67l0.95,1.12V430.05z M793.84,284.42c0,4.76-1.29,8.83-3.88,12.22
		c-2.59,3.39-5.69,5.08-9.32,5.08c-3.68,0-6.82-1.69-9.4-5.08c-2.59-3.38-3.88-7.46-3.88-12.22c0-4.91,1.31-9.04,3.93-12.39
		c2.62-3.35,5.74-5.02,9.36-5.02c3.57,0,6.66,1.67,9.28,5.02C792.53,275.38,793.84,279.51,793.84,284.42z"
        />
        <path
          class="st0"
          d="M864.59,430.05l-0.86,1.12c-5.47-0.52-13.35-0.78-23.64-0.78c-10.3,0-18.15,0.26-23.55,0.78l-0.86-1.12v-6.81
		l0.86-1.12c5.52-0.22,8.94-0.78,10.27-1.67c1.15-0.67,1.78-2.45,1.9-5.36c0.4-9.67,0.6-26.59,0.6-50.77v-37.38
		c0-15.62-0.2-28.27-0.6-37.94c-0.12-2.75-0.75-4.56-1.9-5.41c-1.15-0.85-4.49-1.4-10.01-1.62l-0.86-1.23v-6.14l0.86-1.23
		c11.1-1.56,22.23-4.65,33.39-9.26l1.81,1.34c0,2.01-0.09,5.69-0.26,11.05c-0.58,17.78-0.86,37.46-0.86,59.03v28.79
		c0,24.18,0.2,41.1,0.6,50.77c0.11,2.9,0.75,4.69,1.9,5.36c1.32,0.89,4.75,1.45,10.27,1.67l0.95,1.12V430.05z"
        />
        <path
          class="st0"
          d="M910.57,322.59c-0.75,4.76-1.12,16.18-1.12,34.26v18.97l0.17,32.81c0.11,24.4-1.5,42.11-4.83,53.12
		c-4.49,14.65-10.96,23.99-19.41,28.01c-3.45,1.64-6.87,2.46-10.27,2.46c-0.98,0-2.07-0.11-3.28-0.33l-1.9-8.03l0.86-1.56
		c1.04,0.15,1.9,0.22,2.59,0.22c6.04,0,10.01-3.94,11.91-11.83c1.73-7.29,2.59-26.26,2.59-56.91V368c0-13.32-0.38-21.61-1.12-24.88
		c-0.4-1.86-1.55-3.01-3.45-3.46c-0.86-0.22-3.54-0.45-8.02-0.67l-0.86-1.12v-6.25l0.86-1.23c10.99-1.26,22.12-4.35,33.39-9.26
		L910.57,322.59z M911.18,284.42c0,4.76-1.29,8.83-3.88,12.22c-2.59,3.39-5.69,5.08-9.32,5.08c-3.68,0-6.82-1.69-9.4-5.08
		c-2.59-3.38-3.88-7.46-3.88-12.22c0-4.76,1.31-8.85,3.93-12.27c2.62-3.42,5.74-5.13,9.36-5.13c3.57,0,6.66,1.67,9.28,5.02
		C909.87,275.38,911.18,279.51,911.18,284.42z"
        />
        <path
          class="st0"
          d="M1010.49,367.78c0,1.27-0.03,3.16-0.09,5.69l-0.95,1.56c-7.59,2.68-17.66,4.02-30.2,4.02
		c-2.24,0-5.64,0.06-10.18,0.17c-4.54,0.11-7.97,0.17-10.27,0.17c0.35,10.94,2.96,19.97,7.85,27.12
		c5.12,7.66,11.79,11.49,20.02,11.49c5.52,0,12.08-2.46,19.67-7.37l2.07,3.24l-3.8,11.05c-8.4,6.92-17.51,10.38-27.35,10.38
		c-12.94,0-22.99-4.72-30.15-14.17s-10.74-22.91-10.74-40.4c0-20.76,3.82-34.96,11.48-42.63c10.58-10.56,20.62-15.85,30.11-15.85
		c10.3,0,18.26,3.83,23.9,11.49C1007.61,341.63,1010.49,352.98,1010.49,367.78z M987.97,364.88c0-20.09-4.83-30.13-14.5-30.13
		c-10.18,0-15.27,9.97-15.27,29.91v2.46c3.34,0.67,9.26,1,17.77,1c4.43,0,8.4-0.33,11.91-1
		C987.94,366.07,987.97,365.33,987.97,364.88z"
        />
        <path
          class="st0"
          d="M1187.71,429.94l-0.78,1.12c-12.77-0.45-20.48-0.67-23.12-0.67c-10.58,0-20.42,0.22-29.51,0.67l-0.78-1.12
		v-7.03l0.86-1.23l7.51-0.56c3.16-0.22,4.75-1.67,4.75-4.35c0-1.56-0.81-5.06-2.42-10.49l-6.99-23.55
		c-7.94-0.15-16.05-0.22-24.33-0.22c-4.49,0-11.16,0.07-20.02,0.22l-3.8,13.61c-2.88,10.34-4.31,16.81-4.31,19.42
		c0,2.83,1.35,4.5,4.06,5.02c1.5,0.3,4.43,0.6,8.8,0.89l0.86,1.12v7.14l-0.86,1.12c-10.64-0.45-17.49-0.67-20.54-0.67
		c-2.36,0-8.2,0.22-17.51,0.67l-0.86-1v-7.25l0.95-1.12c5.92-0.45,9.56-1.97,10.92-4.58c1.35-2.6,6.43-18.11,15.23-46.53
		l22.52-72.87c1.67-5.65,4.2-14.17,7.59-25.55h12.25l45.73,139.15c1.78,5.28,3.39,8.26,4.83,8.93c1.9,0.89,4.63,1.34,8.2,1.34
		l0.78,1.23V429.94z M1133.01,369.9l-18.46-58.47l-17.69,58.47c4.72,0.22,10.84,0.33,18.38,0.33
		C1122.54,370.23,1128.46,370.12,1133.01,369.9z"
        />
        <path
          class="st0"
          d="M1260.53,322.59l-0.6,19.86c-0.06,3.27-0.17,6.99-0.34,11.16l-3.62,1.45c-2.7-5.06-6.44-7.59-11.22-7.59
		c-4.31,0-7.88,2.23-10.7,6.7c-1.73,2.75-2.59,6.81-2.59,12.16v26.11c0,5.43,0.2,12.98,0.6,22.65c0.11,2.75,0.72,4.54,1.81,5.36
		c1.09,0.82,5.09,1.38,11.99,1.67l0.86,1v6.81l-0.86,1.12c-8.46-0.45-16.85-0.67-25.19-0.67c-10.3,0-18.15,0.26-23.55,0.78
		l-0.86-1.12v-6.81l0.86-1.12c5.52-0.22,8.94-0.78,10.27-1.67c1.15-0.67,1.78-2.45,1.9-5.36c0.4-9.67,0.6-20.05,0.6-31.13V368
		c0-14.88-0.43-23.43-1.29-25.67c-0.58-1.49-1.81-2.42-3.71-2.79c-0.69-0.15-3.19-0.33-7.51-0.56l-0.86-1.12v-6.25l0.86-1.23
		c10.35-1.26,21.25-4.35,32.7-9.26l1.9,1.45l-0.17,21.87c3.57-5.36,7.88-11.61,12.94-18.75c2.36-2.97,5.58-4.46,9.66-4.46
		C1256.82,321.25,1258.86,321.69,1260.53,322.59z"
        />
        <path
          class="st0"
          d="M1318.17,415.76c-0.4,0.6-1.64,2.16-3.71,4.69c-3.39,4.17-6.3,7.96-8.71,11.38c-2.82,1.19-5.67,1.79-8.54,1.79
		c-8,0-13.83-3.01-17.52-9.04c-1.55-2.6-2.59-5.62-3.11-9.04c-0.58-4.09-0.83-9.45-0.78-16.07l0.26-26.67v-27.9h-2.33l-4.57,0.22
		h-3.54l-0.95-1v-2.9l0.69-1.67c1.04-0.89,2.65-2.23,4.83-4.02c2.59-2.08,4.54-3.83,5.87-5.24v-15.18c0-6.32-0.23-13.02-0.69-20.09
		c4.31-1.79,7.81-3.36,10.48-4.74c2.67-1.38,6.46-3.63,11.35-6.75l2.24,2.23c-0.69,9.23-1.18,17.48-1.47,24.77l-0.78,19.31h2.85
		c6.27,0,11.68-0.26,16.22-0.78l0.95,1.23l-1.21,13.06l-0.86,1.12h-17.95v37.83c0,12.13,0.11,19.27,0.34,21.42
		c0.29,3.12,1.31,5.65,3.06,7.59c1.75,1.94,4.13,2.9,7.12,2.9c2.36,0,5.21-0.82,8.54-2.46L1318.17,415.76z"
        />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      vis: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.vis = false;
    }, 3000);
  },
};
</script>

<style scoped>
#loader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
#load {
  fill: transparent;
  stroke: #f7931e;
  stroke-miterlimit: 10;
  animation: loadFill 1.5s ease forwards 2s;
}
#load path:nth-child(1) {
  stroke-dasharray: 730.5557861328125;
  stroke-dashoffset: 730.5557861328125;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(2) {
  stroke-dasharray: 945.0596313476562;
  stroke-dashoffset: 945.0596313476562;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(3) {
  stroke-dasharray: 420.1471252441406;
  stroke-dashoffset: 420.1471252441406;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(4) {
  stroke-dasharray: 437.36822509765625;
  stroke-dashoffset: 437.36822509765625;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(5) {
  stroke-dasharray: 503.5117492675781;
  stroke-dashoffset: 503.5117492675781;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(6) {
  stroke-dasharray: 507.6002502441406;
  stroke-dashoffset: 507.6002502441406;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(7) {
  stroke-dasharray: 775.3185424804688;
  stroke-dashoffset: 775.3185424804688;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(8) {
  stroke-dasharray: 419.0826110839844;
  stroke-dashoffset: 419.0826110839844;
  animation: loadAnim 2s ease forwards;
}
#load path:nth-child(9) {
  stroke-dasharray: 410.1363830566406;
  stroke-dashoffset: 410.1363830566406;
  animation: loadAnim 2s ease forwards;
}
@keyframes loadAnim {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes loadFill {
  from {
    fill: transparent;
  }
  to {
    fill: #f7931e;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.2s ease;
}
</style>
