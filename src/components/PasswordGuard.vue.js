import { ref, defineProps } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    }
    else {
        error.value = true;
    }
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        correctPassword: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
    },
});
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
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.authenticated) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        var __VLS_0 = {};
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (props.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeyup: (__VLS_ctx.checkPassword) }, type: ("password"), placeholder: ("Contraseña"), });
        (__VLS_ctx.password);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.checkPassword) }, });
        if (__VLS_ctx.error) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
        }
    }
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
            $props: __VLS_makeOptional(props),
            ...props,
            password: password,
            authenticated: authenticated,
            error: error,
            checkPassword: checkPassword,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
