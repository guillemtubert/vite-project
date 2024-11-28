<template>
  <div class="intro-screen">
    <div v-if="!jaHiSonTots">
      <h1>Benvolguts roicos,</h1>
      <p class="typewriter-text">{{ typewriterText }}</p>
      <p class="warning-message">
        NO LI DONEU AL BOTO FINS QUE NO HI SIGUEU TOTS/ES
      </p>
      <p>Per una millor experiència us recomano posar pantalla completa (F11)</p>
      <button @click="jahisom">ja hi som tots!</button>
    </div>

    <!-- Colored divs -->
    <div v-if="jaHiSonTots">
      <div v-if="!termsAndCondAccepted">
        <h1>Normes i legislacions.</h1>
        <h2>Us recomano llegir amb calma el següent apartat:</h2>
        <p class="paragrafito">
          Aquest viatge extra-sensorial constarà de <strong>quatre etapes.</strong> <br> Per avançar a
          la següent etapa, haureu de sapiguer la contrassenya. <br> Hi haurà una
          <strong>barra de navegació a dalt a la esquerra</strong> on podreu accedir directament
          a les diferents etapes.<br> Estan fetes en ordre i necessiteu solucionar
          la 1 per poguer accedir a la 2 i així successivament.<br> Si canvieu de
          pantalla i voleu tornar a l'etapa anterior, haureu de tornar a
          introduir la contrassenya per accedir-hi, així que és recomanable que us
          enrecordeu o les apunteu.<br> Només tindreu una oprtunitat per resoldre-ho
          tot.<br> Si tanqueu el navegador, PERDEU.<br> Si li doneu a F5, PERDEU.<br> Si feu
          trampes, ho sabré. I per tant, també PERDEU.<br> Espero haver estat clar i
          que us ho passeu bé! <strong>Molta sort.</strong>
        </p>
        <p>Per cert, només teniu 15 minuts (Com així ho indica l'estatut dels treballadors a l'article 14.1 :D)</p>
        <p>(Sota de cada titol tindreu una mini pisteta)</p>
        <p>
          Accepteu entrar dins d'aquest viatge sensorial en quatre dimensions?
        </p>
        <button @click="termsAndCondAcceptedFunction">Sí, acceptem!</button>
      </div>
      <div v-if="termsAndCondAccepted">
        <h1>La primera pregunta és molt simple...</h1>
        <p>Qui és el més sexy de la ofi?</p>
        <div class="first-step-container">
          <div
            class="color-box"
            @click="
              showColorMessage('En veritat sí, però és el meu joc, així que...')
            "
          >
            <p>Ruben</p>
            <img
              class="imgToGuess"
              src="../assets/imgs/rubensito.jpg"
              alt="1"
            />
          </div>
          <div
            class="color-box"
            @click="showColorMessage('JajajajaJAjajajaajajajajaAJajajaja XD')"
          >
            <p>Raul</p>
            <img
              class="imgToGuess"
              src="../assets/imgs/raulsito.jpg"
              alt="2"
            />
          </div>
          <div
            class="color-box"
            @click="
              showColorMessage(
                'Molt llestos! Agafeu paper i boli i apunteu! Password: guillemsexy123'
              )
            "
          >
            <p>Guillem</p>
            <img
              class="imgToGuess"
              src="../assets/imgs/guillemsito.jpg"
              alt="3"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Display the selected color message -->
    <p v-if="selectedColor" class="color-message">
      {{ selectedColor }}
    </p>
    <div v-if="correctAnswer">
      <button @click="navigateToScreen1">Som-hi!</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedColor = ref<string | null>(null);
const typewriterText = ref("");
const jaHiSonTots = ref(false);
const correctAnswer = ref(false);
const termsAndCondAccepted = ref(false);
const fullText =
  "Hola! Fa dos dies va ser el meu aniversari però ningú em va felicitar... :( Si voleu menjar, us ho haureu de guanyar.";

function navigateToScreen1() {
  localStorage.setItem("showNav", "true");
  localStorage.setItem("startCountdown", "true");
  router.push("/screen1");
}

function showColorMessage(color: string) {
  selectedColor.value = color;
  if (
    color ===
    "Molt llestos! Agafeu paper i boli i apunteu! Password: guillemsexy123"
  ) {
    correctAnswer.value = true;
  }
}

function jahisom() {
  jaHiSonTots.value = true;
}

function termsAndCondAcceptedFunction() {
  termsAndCondAccepted.value = true;
}

// Typewriter effect function
function typewriterEffect(text: string, delay: number) {
  let index = 0;
  function type() {
    if (index < text.length) {
      typewriterText.value += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }
  type();
}

onMounted(() => {
  typewriterEffect(fullText, 100); // 100ms delay between each character
});
</script>

<style scoped>
.intro-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.color-box {
  width: 200px;
  height: 300px;
  max-width: 200px;
  max-height: 300px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: rgb(255, 153, 0);
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10%;
}

.imgToGuess {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.paragrafito {
  font-size: 24px;
  margin-bottom: 20px;
  padding: 10px 200px 10px 200px;
}

.warning-message {
  color: red;
  font-weight: bold;
}

.color-message {
  margin-top: 20px;
  font-size: 16px;
  color: #333;
}

.typewriter-text {
  font-size: 18px;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid; /* Simulates a cursor */
  width: fit-content;
  animation: blink-caret 0.75s step-end infinite;
}

.first-step-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 50px;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
</style>
