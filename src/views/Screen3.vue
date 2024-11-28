<template>
  <PasswordGuard correctPassword="TAPTC1PN" title="combatre la Onda trueno">
    <div class="screen">
      <h1>Gotta catch 'em all!</h1>
      <img class="pokemones" src="../assets/imgs/pokemones.png" alt="1" />
      <div class="img-container">
        <img
          class="imgdeuna"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcHb7DIckivDUj9SFFt2g0YyYywpqRiI5Eg&s"
          alt="1"
        />
        <img
          class="imgdeuna"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcHb7DIckivDUj9SFFt2g0YyYywpqRiI5Eg&s"
          alt="2"
        />
        <img
          class="imgdeuna"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcHb7DIckivDUj9SFFt2g0YyYywpqRiI5Eg&s"
          alt="3"
        />
      </div>
      <p>Ja sabeu la contrassenya del nivell 4?</p>
      <button class="navigate-btn" @click="navigateToScreen4">
        Anar a l'últim nivell
      </button>
      <div class="fixed-letter">G</div>
    </div>
  </PasswordGuard>
</template>

<script setup>
import PasswordGuard from "../components/PasswordGuard.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function navigateToScreen4() {
  router.push("/screen4");
}
</script>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  align-items: center;
}

.img-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
}

.imgdeuna {
  width: 300px;
  height: 500px;
  object-fit: cover;
}

.pokemones {
  width: 100%;
  height: 50px;
  object-fit: contain;
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
  width: 200px;
}
</style>
