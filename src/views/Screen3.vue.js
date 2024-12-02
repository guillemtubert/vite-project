import PasswordGuard from "../components/PasswordGuard.vue";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
function navigateToScreen4() {
    router.push("/screen4");
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [PasswordGuard, PasswordGuard,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PasswordGuard, new PasswordGuard({ correctPassword: ("TAPTC1PN"), title: ("combatre la Onda trueno"), }));
    const __VLS_1 = __VLS_0({ correctPassword: ("TAPTC1PN"), title: ("combatre la Onda trueno"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    var __VLS_5 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("screen") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("pokemones") }, src: ("../assets/imgs/pokemones.png"), alt: ("1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgdeuna") }, src: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcHb7DIckivDUj9SFFt2g0YyYywpqRiI5Eg&s"), alt: ("1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgdeuna") }, src: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcHb7DIckivDUj9SFFt2g0YyYywpqRiI5Eg&s"), alt: ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("imgdeuna") }, src: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcHb7DIckivDUj9SFFt2g0YyYywpqRiI5Eg&s"), alt: ("3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.navigateToScreen4) }, ...{ class: ("navigate-btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed-letter") }, });
    __VLS_nonNullable(__VLS_4.slots).default;
    var __VLS_4;
    __VLS_styleScopedClasses['screen'];
    __VLS_styleScopedClasses['pokemones'];
    __VLS_styleScopedClasses['img-container'];
    __VLS_styleScopedClasses['imgdeuna'];
    __VLS_styleScopedClasses['imgdeuna'];
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
            navigateToScreen4: navigateToScreen4,
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
