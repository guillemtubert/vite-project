import { ref, computed, onMounted } from "vue";
// No need to import NodeJS, just use the correct type for the interval
import { useRouter, useRoute } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const showNav = ref(false);
const countdown = ref(15 * 60); // 15 minutos en segundos
const countdownInterval = ref(null);
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
        }
        else {
            clearInterval(countdownInterval.value);
        }
    }, 1000);
}
function isActive(path) {
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    if (__VLS_ctx.showNav && !__VLS_ctx.isIntroScreen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'active-tab': __VLS_ctx.isActive('/screen1') })) }, });
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/screen1"), }));
        const __VLS_2 = __VLS_1({ to: ("/screen1"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'active-tab': __VLS_ctx.isActive('/screen2') })) }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/screen2"), }));
        const __VLS_8 = __VLS_7({ to: ("/screen2"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'active-tab': __VLS_ctx.isActive('/screen3') })) }, });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/screen3"), }));
        const __VLS_14 = __VLS_13({ to: ("/screen3"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_nonNullable(__VLS_17.slots).default;
        var __VLS_17;
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: (({ 'active-tab': __VLS_ctx.isActive('/screen4') })) }, });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/screen4"), }));
        const __VLS_20 = __VLS_19({ to: ("/screen4"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_nonNullable(__VLS_23.slots).default;
        var __VLS_23;
        if (__VLS_ctx.countdown > 0) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("countdown-timer blink") }, });
            (__VLS_ctx.formattedCountdown);
        }
    }
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_styleScopedClasses['active-tab'];
    __VLS_styleScopedClasses['active-tab'];
    __VLS_styleScopedClasses['active-tab'];
    __VLS_styleScopedClasses['active-tab'];
    __VLS_styleScopedClasses['countdown-timer'];
    __VLS_styleScopedClasses['blink'];
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
            showNav: showNav,
            countdown: countdown,
            isIntroScreen: isIntroScreen,
            formattedCountdown: formattedCountdown,
            isActive: isActive,
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
