import profileImg from "@/assets/scan.jpg";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center items-center h-full w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-xl mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-10 mt-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-gray-400 max-w-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.profileImg)), alt: ("Profile Image"), ...{ class: ("w-full h-full object-cover") }, });
    // @ts-ignore
    [profileImg,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white shadow-lg rounded-lg p-6 m-4 max-w-md w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-xl font-semibold mb-2 text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-700 mb-1 text-base text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-700 mb-1 text-base text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-700 mb-4 text-base text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("mr-2 bg-yellow-400 py-2 px-4 text-lg font-semibold rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.resetForm) }, type: ("reset"), ...{ class: ("mr-2 bg-gray-800 text-white py-2 px-4 text-lg font-semibold rounded") }, });
    // @ts-ignore
    [resetForm,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['space-x-10'];
        __VLS_styleScopedClasses['mt-6'];
        __VLS_styleScopedClasses['bg-gray-400'];
        __VLS_styleScopedClasses['max-w-md'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['object-cover'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-lg'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['m-4'];
        __VLS_styleScopedClasses['max-w-md'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['mb-1'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['mb-1'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-start'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['bg-yellow-400'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['rounded'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                profileImg: profileImg,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
