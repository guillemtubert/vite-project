<template>
  <PasswordGuard correctPassword="guillemsexy123" title="La disbauxa">
    <div class="conteinerTotal">
      <h1>Us recomano que feu dos grups i que dividiu les tasques.</h1>
      <p>si jo fos vosaltres sumaria números</p>
      <div class="screen">
        <div class="itemsCol">
          <h1>GRUP 1</h1>
          <img
            class="imgdeuna"
            src="../assets/imgs/fletxes.png"
            alt="Imagen de Pantalla 1"
          />
        </div>
        <div class="itemsCol">
          <h1>GRUP 2</h1>
          <img
            class="imgdeuna"
            src="../assets/imgs/puntets.png"
            alt="Imagen de Pantalla 1"
          />
        </div>
      </div>
      <p>Ja sabeu la contrassenya del nivell 2?</p>
      <button class="navigate-btn" @click="navigateToScreen2">
        Anar al següent nivell
      </button>
      <!-- Fixed letter "A" -->
      <div class="fixed-letter">A</div>
    </div>
  </PasswordGuard>
</template>

<script setup>
import PasswordGuard from "../components/PasswordGuard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Function to navigate to Screen2
function navigateToScreen2() {
  router.push("/screen2");
}
</script>

<style scoped>
.screen {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
}

.itemsCol {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.imgdeuna {
  width: 300px;
  height: 300px;
}

.conteinerTotal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Styling for the fixed letter "A" */
.fixed-letter {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: black; /* You can change the color as desired */
}

/* Styling for the navigate button */
.navigate-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #007bff; /* Bootstrap blue */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.navigate-btn:hover {
  background-color: #0056b3; /* Darker blue */
}
</style>
