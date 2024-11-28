<template>
  <div id="app">
    <nav v-if="showNav && !isIntroScreen">
  <ul>
    <li :class="{ 'active-tab': isActive('/screen1') }">
      <router-link to="/screen1">1: Disbauxa</router-link>
    </li>
    <li :class="{ 'active-tab': isActive('/screen2') }">
      <router-link to="/screen2">2: Haiku</router-link>
    </li>
    <li :class="{ 'active-tab': isActive('/screen3') }">
      <router-link to="/screen3">3: Onda trueno</router-link>
    </li>
    <li :class="{ 'active-tab': isActive('/screen4') }">
      <router-link to="/screen4">4: Final boss</router-link>
    </li>
  </ul>
  <div v-if="countdown > 0" class="countdown-timer blink">Cuenta atrás: {{ formattedCountdown }}</div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
// No need to import NodeJS, just use the correct type for the interval
import { useRouter, useRoute } from "vue-router";

const showNav = ref(false);
const countdown = ref(15 * 60); // 15 minutos en segundos
const countdownInterval = ref<ReturnType<typeof setInterval> | null>(null);
const router = useRouter();
const route = useRoute();

// Verificar si estamos en la ruta de la pantalla de introducción
const isIntroScreen = computed(() => route.path === "/");

// Formatear el tiempo restante en mm:ss
const formattedCountdown = computed(() => {
  const minutes = Math.floor(countdown.value / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (countdown.value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
});

// Función para verificar si el nav debe mostrarse
function updateShowNav() {
  showNav.value = localStorage.getItem("showNav") === "true";

  // Iniciar cuenta atrás si 'startCountdown' está presente
  if (localStorage.getItem("startCountdown") === "true") {
    startCountdown();
    localStorage.removeItem("startCountdown"); // Eliminamos la clave para evitar que se reinicie
  }
}

// Iniciar cuenta atrás
function startCountdown() {
  countdown.value = 15 * 60; // Reiniciar la cuenta a 15 minutos
  countdownInterval.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
    } else {
      clearInterval(countdownInterval.value!);
    }
  }, 1000);
}

function isActive(path: string): boolean {
  return route.path === path;
}

// Verificar cuando el componente se monta
onMounted(() => {
  updateShowNav();
});

// Escuchar los cambios de ruta
router.afterEach(() => {
  updateShowNav();
});
</script>

<style>
/* Estilos opcionales para el nav y cuenta atrás */
nav {
  background-color: #f4f4f4;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
  margin: 0;
}
nav ul li {
  display: inline;
}
nav ul li a {
  text-decoration: none;
  padding: 5px 10px;
  color: #333;
}
nav ul li a:hover {
  background-color: #ddd;
}
.countdown-timer {
  margin-left: auto;
  font-weight: bold;
  padding-right: 10px;
}
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  color: red; /* Aplica el color rojo al texto */
}

.active-tab {
  font-weight: bold;
  background-color: #e6c969; /* Optional: Highlight background */
  border-radius: 5px;
  padding: 5px;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
