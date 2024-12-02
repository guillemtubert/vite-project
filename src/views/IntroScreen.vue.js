import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const selectedColor = ref(null);
const typewriterText = ref("");
const jaHiSonTots = ref(false);
const correctAnswer = ref(false);
const termsAndCondAccepted = ref(false);
const fullText = "Hola! Fa dos dies va ser el meu aniversari però ningú em va felicitar... :( Si voleu menjar, us ho haureu de guanyar.";
function navigateToScreen1() {
    localStorage.setItem("showNav", "true");
    localStorage.setItem("startCountdown", "true");
    router.push("/screen1");
}
function showColorMessage(color) {
    selectedColor.value = color;
    if (color ===
        "Molt llestos! Agafeu paper i boli i apunteu! Password: guillemsexy123") {
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
function typewriterEffect(text, delay) {
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("intro-screen") }, });
    if (!__VLS_ctx.jaHiSonTots) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("typewriter-text") }, });
        (__VLS_ctx.typewriterText);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("warning-message") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.jahisom) }, });
    }
    if (__VLS_ctx.jaHiSonTots) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (!__VLS_ctx.termsAndCondAccepted) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("paragrafito") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.termsAndCondAcceptedFunction) }, });
        }
        if (__VLS_ctx.termsAndCondAccepted) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("first-step-container") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.jaHiSonTots)))
                            return;
                        if (!((__VLS_ctx.termsAndCondAccepted)))
                            return;
                        __VLS_ctx.showColorMessage('En veritat sí, però és el meu joc, així que...');
                    } }, ...{ class: ("color-box") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgToGuess") }, src: ("../assets/imgs/rubensito.jpg"), alt: ("1"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.jaHiSonTots)))
                            return;
                        if (!((__VLS_ctx.termsAndCondAccepted)))
                            return;
                        __VLS_ctx.showColorMessage('JajajajaJAjajajaajajajajaAJajajaja XD');
                    } }, ...{ class: ("color-box") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgToGuess") }, src: ("../assets/imgs/raulsito.jpg"), alt: ("2"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.jaHiSonTots)))
                            return;
                        if (!((__VLS_ctx.termsAndCondAccepted)))
                            return;
                        __VLS_ctx.showColorMessage('Molt llestos! Agafeu paper i boli i apunteu! Password: guillemsexy123');
                    } }, ...{ class: ("color-box") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgToGuess") }, src: ("../assets/imgs/guillemsito.jpg"), alt: ("3"), });
        }
    }
    if (__VLS_ctx.selectedColor) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("color-message") }, });
        (__VLS_ctx.selectedColor);
    }
    if (__VLS_ctx.correctAnswer) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.navigateToScreen1) }, });
    }
    __VLS_styleScopedClasses['intro-screen'];
    __VLS_styleScopedClasses['typewriter-text'];
    __VLS_styleScopedClasses['warning-message'];
    __VLS_styleScopedClasses['paragrafito'];
    __VLS_styleScopedClasses['first-step-container'];
    __VLS_styleScopedClasses['color-box'];
    __VLS_styleScopedClasses['imgToGuess'];
    __VLS_styleScopedClasses['color-box'];
    __VLS_styleScopedClasses['imgToGuess'];
    __VLS_styleScopedClasses['color-box'];
    __VLS_styleScopedClasses['imgToGuess'];
    __VLS_styleScopedClasses['color-message'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            selectedColor: selectedColor,
            typewriterText: typewriterText,
            jaHiSonTots: jaHiSonTots,
            correctAnswer: correctAnswer,
            termsAndCondAccepted: termsAndCondAccepted,
            navigateToScreen1: navigateToScreen1,
            showColorMessage: showColorMessage,
            jahisom: jahisom,
            termsAndCondAcceptedFunction: termsAndCondAcceptedFunction,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
