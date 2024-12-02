import PasswordGuard from "../components/PasswordGuard.vue";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
// Function to navigate to Screen2
function navigateToScreen2() {
    router.push("/screen2");
}
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
    __VLS_styleScopedClasses['navigate-btn'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [PasswordGuard, PasswordGuard,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PasswordGuard, new PasswordGuard({ correctPassword: ("guillemsexy123"), title: ("La disbauxa"), }));
    const __VLS_1 = __VLS_0({ correctPassword: ("guillemsexy123"), title: ("La disbauxa"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    var __VLS_5 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("conteinerTotal") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("screen") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("itemsCol") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgdeuna") }, src: ("../assets/imgs/fletxes.png"), alt: ("Imagen de Pantalla 1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("itemsCol") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgdeuna") }, src: ("../assets/imgs/puntets.png"), alt: ("Imagen de Pantalla 1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.navigateToScreen2) }, ...{ class: ("navigate-btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed-letter") }, });
    __VLS_nonNullable(__VLS_4.slots).default;
    var __VLS_4;
    __VLS_styleScopedClasses['conteinerTotal'];
    __VLS_styleScopedClasses['screen'];
    __VLS_styleScopedClasses['itemsCol'];
    __VLS_styleScopedClasses['imgdeuna'];
    __VLS_styleScopedClasses['itemsCol'];
    __VLS_styleScopedClasses['imgdeuna'];
    __VLS_styleScopedClasses['navigate-btn'];
    __VLS_styleScopedClasses['fixed-letter'];
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
            PasswordGuard: PasswordGuard,
            navigateToScreen2: navigateToScreen2,
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
