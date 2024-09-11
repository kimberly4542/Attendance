import { mapGetters } from "vuex";
export default (await import('vue')).defineComponent({
    computed: {
        ...mapGetters(["username"]), // Get the username from Vuex
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("header fixed top-0 flex items-center w-full bg-black z-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between w-full px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/"), ...{ class: ("flex items-center no-underline hover:no-underline") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("flex-shrink-0 text-2xl font-bold text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("header-nav") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex items-center justify-between space-x-6 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("relative mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('notifications');
                // @ts-ignore
                [toggleDropdown,];
            } }, ...{ class: ("nav-icon relative") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-regular fa-bell text-white text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute left-2 bottom-3 badge bg-primary text-white rounded-md text-xs px-1.0 py-0.75") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item dropdown relative mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('messages');
                // @ts-ignore
                [toggleDropdown,];
            } }, ...{ class: ("nav-link nav-icon relative") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-regular fa-message text-white text-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute left-2 bottom-3.5 badge bg-success text-white rounded-md text-xs px-1.0 py-0.75") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item dropdown relative top-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('profile');
                // @ts-ignore
                [toggleDropdown,];
            } }, ...{ class: ("nav-profile flex items-center no-underline hover:no-underline") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/profile-img.jpg"), alt: ("Profile"), ...{ class: ("w-9 h-9 rounded-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("md:block ml-2 text-yellow-400") }, });
    (__VLS_ctx.username);
    // @ts-ignore
    [username,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['no-underline'];
        __VLS_styleScopedClasses['hover:no-underline'];
        __VLS_styleScopedClasses['flex-shrink-0'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['header-nav'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['space-x-6'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['nav-icon'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['fa-regular'];
        __VLS_styleScopedClasses['fa-bell'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['left-2'];
        __VLS_styleScopedClasses['bottom-3'];
        __VLS_styleScopedClasses['badge'];
        __VLS_styleScopedClasses['bg-primary'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['px-1.0'];
        __VLS_styleScopedClasses['py-0.75'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['dropdown'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['nav-link'];
        __VLS_styleScopedClasses['nav-icon'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['fa-regular'];
        __VLS_styleScopedClasses['fa-message'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['left-2'];
        __VLS_styleScopedClasses['bottom-3.5'];
        __VLS_styleScopedClasses['badge'];
        __VLS_styleScopedClasses['bg-success'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['px-1.0'];
        __VLS_styleScopedClasses['py-0.75'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['dropdown'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['top-2'];
        __VLS_styleScopedClasses['nav-profile'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['no-underline'];
        __VLS_styleScopedClasses['hover:no-underline'];
        __VLS_styleScopedClasses['w-9'];
        __VLS_styleScopedClasses['h-9'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['md:block'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['text-yellow-400'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
