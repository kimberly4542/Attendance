import { useStore } from "vuex";
// import { ref, computed } from 'vue'
import { computed } from "vue";
import { links } from "@/types/navigation";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const router = useRouter();
const logout = () => {
    localStorage.removeItem("authToken"); // Example: clearing auth token from localStorage
    store.dispatch("logout");
    // Redirect to login or home page
    router.push({ path: "/" }); // Assuming you have a route named 'Login'
};
// const userRole = ref<'admin' | 'teacher'>('admin')
const userRole = computed(() => store.getters.userRole);
const filteredLinks = computed(() => {
    return links[userRole.value] || { ungrouped: [], grouped: [] };
});
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar bg-gray-800 text-white mt-14 w-64 min-h-screen fixed flex-col justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("p-6") }, });
    for (const [link] of __VLS_getVForSourceType((__VLS_ctx.filteredLinks.ungrouped))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((link.name)), });
        // @ts-ignore
        const __VLS_0 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ((link.url)), ...{ class: ("flex items-center p-2") }, }));
        const __VLS_2 = __VLS_1({ to: ((link.url)), ...{ class: ("flex items-center p-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: ((link.url)), ...{ class: ("flex items-center p-2") }, }));
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((link.icon)) }, ...{ class: ("mr-2") }, });
        __VLS_styleScopedClasses = (link.icon);
        // @ts-ignore
        [filteredLinks,];
        (link.name);
        __VLS_nonNullable(__VLS_5.slots).default;
    }
    for (const [group] of __VLS_getVForSourceType((__VLS_ctx.filteredLinks.grouped))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((group.groupName)), ...{ class: ("link-group text-gray-400") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-xs ml-3 uppercase") }, });
        (group.groupName);
        // @ts-ignore
        [filteredLinks,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("p-6") }, });
        for (const [link] of __VLS_getVForSourceType((group.links))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((link.name)), });
            // @ts-ignore
            const __VLS_6 = {}
                .RouterLink;
            ({}.RouterLink);
            ({}.RouterLink);
            __VLS_components.RouterLink;
            __VLS_components.routerLink;
            __VLS_components.RouterLink;
            __VLS_components.routerLink;
            // @ts-ignore
            [RouterLink, RouterLink,];
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ((link.url)), ...{ class: ("flex items-center p-2") }, }));
            const __VLS_8 = __VLS_7({ to: ((link.url)), ...{ class: ("flex items-center p-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ to: ((link.url)), ...{ class: ("flex items-center p-2") }, }));
            const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((link.icon)) }, ...{ class: ("mr-2") }, });
            __VLS_styleScopedClasses = (link.icon);
            (link.name);
            __VLS_nonNullable(__VLS_11.slots).default;
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.logout) }, ...{ class: ("flex items-center border-t border-gray-700 cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-6 mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-arrow-right-from-bracket mx-2") }, });
    // @ts-ignore
    [logout,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['sidebar'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['mt-14'];
        __VLS_styleScopedClasses['w-64'];
        __VLS_styleScopedClasses['min-h-screen'];
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['link-group'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['ml-3'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['p-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['border-t'];
        __VLS_styleScopedClasses['border-gray-700'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['fa-solid'];
        __VLS_styleScopedClasses['fa-arrow-right-from-bracket'];
        __VLS_styleScopedClasses['mx-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                logout: logout,
                filteredLinks: filteredLinks,
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
