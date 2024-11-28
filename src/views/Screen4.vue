<template>
  <PasswordGuard correctPassword="pitakarp" title="Final Boss">
    <div class="screen">
      <h1>Ja quasi ho teniu :D</h1>
      <p>Heu vist aquestes lletres per algun lloc? Potser en les etapes anteriors...</p>
      <p>al meu quart calaix potser hi ha algo...</p>
      <img src="../assets/imgs/selda.png" alt="columns" />
      <div class="fixed-letter">S</div>
    </div>
  </PasswordGuard>
</template>

<script setup>
import PasswordGuard from "../components/PasswordGuard.vue";
</script>

<style scoped>
.screen {
  text-align: center;
  padding: 20px;
}

.fixed-letter {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: black; /* You can change the color as desired */
  border-bottom: 2px solid red; /* Optional: Add a border */
}
</style>
