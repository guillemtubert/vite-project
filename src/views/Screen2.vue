<template>
  <PasswordGuard correctPassword="295" title="El Haiku">
    <div class="conteinerTotal">
      <h1>Ara toca buscar i pensar una mica...</h1>
      <p>T _ _ _ _ _ _ N</p>
      <div class="screen">
        <div class="itemsCol">
          <h1>GRUP 1</h1>
          <p>
            En el marco de la ventana se oculta el misterio,<br />
            que desde enfrente observa el vecino serio. <br />Solo lo ve cuando
            a Rubén ve trabajar, <br />y el código aparece, listo para revelar.
          </p>
        </div>
        <div class="itemsCol">
          <h1>GRUP 2</h1>
          <p>
            Donde un SDR las líneas cruzaba, <br />bajo su mesa el misterio
            aguardaba. <br />
            Entre llamadas su marca dejó, <br />y un codigo olvidado allí
            reposó.
          </p>
        </div>
      </div>
      <p>Ja sabeu la contrassenya del nivell 3?</p>
      <button class="navigate-btn" @click="navigateToScreen3">
        Anar al següent nivell
      </button>
      <div class="fixed-letter">X</div>
    </div>
  </PasswordGuard>
</template>

<script setup>
import PasswordGuard from "../components/PasswordGuard.vue";
import { useRouter } from "vue-router";
const router = useRouter();

function navigateToScreen3() {
  router.push("/screen3");
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
  border: 1px solid black;
  padding: 30px;
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
  padding: 0px 40px 0px 40px;
}

.fixed-letter {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: black; /* You can change the color as desired */
}

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
</style>
