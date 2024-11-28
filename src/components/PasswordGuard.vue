<template>
    <div v-if="authenticated">
      <slot></slot>
    </div>
    <div v-else>
      <h3>Introduce la contraseña para acceder a {{ props.title }}</h3>
      <input
        type="password"
        v-model="password"
        @keyup.enter="checkPassword"
        placeholder="Contraseña"
      />
      <button @click="checkPassword">Acceder</button>
      <p v-if="error" style="color: red;">Contraseña incorrecta</p>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    correctPassword: {
      type: String,
      required: true,
      },
      title: {
        type: String,
        default: '',
      },
  });
  
  const password = ref('');
  const authenticated = ref(false);
  const error = ref(false);
  
  function checkPassword() {
    if (password.value === props.correctPassword) {
      authenticated.value = true;
      error.value = false;
    } else {
      error.value = true;
    }
  }
  </script>
  