import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const username = ref("");
const password = ref("");
// const user = ref('')
// const user = ref<'admin' | 'teacher'>('')
const user = ref(null);
const rememberMe = ref(false);
const router = useRouter();
const store = useStore();
// const login = () => {
//   if (validateCredentials()) {
//     if (user.value === 'teacher') {
//       router.push({ name: 'Dashboard' }) // Default layout for teacher
//     } else if (user.value === 'admin') {
//       router.push({ name: 'Dashboard' }) // Redirect to admin layout
//     }
//   } else {
//     alert('Invalid credentials')
//   }
// }
// const login = () => {
//   if (validateCredentials()) {
//     store.dispatch("login", user.value);
//     router.push({ name: "Dashboard" });
//   } else {
//     alert("Invalid credentials");
//   }
// };
const login = () => {
    if (validateCredentials()) {
        store.dispatch("login", user.value);
        // Navigate to the appropriate dashboard based on user role
        if (user.value === "teacher") {
            router.push({ path: "/teacherDashboard" });
        }
        else if (user.value === "admin") {
            router.push({ path: "/adminDashboard" });
        }
    }
    else {
        alert("Invalid credentials");
    }
};
const validateCredentials = () => {
    const validCredentials = {
        teacher: { username: "teacherUsername", password: "teacherPassword" },
        admin: { username: "adminUsername", password: "adminPassword" },
    };
    return (user.value in validCredentials &&
        username.value ===
            validCredentials[user.value].username &&
        password.value ===
            validCredentials[user.value].password);
};
// const validateCredentials = () => {
//   const validCredentials = {
//     teacher: { username: 'teacherUsername', password: 'teacherPassword' },
//     admin: { username: 'adminUsername', password: 'adminPassword' }
//   }
//   return (
//     // validCredentials[user.value] &&
//     // username.value === validCredentials[user.value].username &&
//     // password.value === validCredentials[user.value].password
//     user.value in validCredentials && // Ensure the user value is a valid key
//     username.value === validCredentials[user.value as 'teacher' | 'admin'].username &&
//     password.value === validCredentials[user.value as 'teacher' | 'admin'].password
//   )
// }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen flex items-center justify-center bg-yellow-400 py-12 px-4 sm:px-6 lg:px-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex w-full max-w-6xl mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-1/2 p-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-5xl text-customGray") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-semibold text-customGray") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4 text-customGray") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-4 text-customGray") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-1/2 p-10 bg-white shadow-md rounded-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.login) }, ...{ class: ("space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex mr-4 justify-start items-center border rounded-md w-full p-2 bg-black text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("teacher"), ...{ class: ("text-sm flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("radio"), id: ("teacher"), name: ("user"), value: ("teacher"), ...{ class: ("mr-2") }, });
    (__VLS_ctx.user);
    // @ts-ignore
    [login, user,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-start border rounded-md w-full p-2 bg-black text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("admin"), ...{ class: ("text-sm flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("radio"), id: ("admin"), name: ("user"), value: ("admin"), ...{ class: ("mr-2") }, });
    (__VLS_ctx.user);
    // @ts-ignore
    [user,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("username"), value: ((__VLS_ctx.username)), name: ("username"), type: ("text"), autocomplete: ("username"), required: (true), ...{ class: ("mt-2 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm") }, });
    // @ts-ignore
    [username,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("password"), name: ("password"), type: ("password"), autocomplete: ("current-password"), required: (true), ...{ class: ("mt-2 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm") }, });
    (__VLS_ctx.password);
    // @ts-ignore
    [password,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("rememberMe"), ...{ class: ("text-sm flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), id: ("rememberMe"), name: ("rememberMe"), ...{ class: ("mr-2") }, });
    (__VLS_ctx.rememberMe);
    // @ts-ignore
    [rememberMe,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-400 bg-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['min-h-screen'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['bg-yellow-400'];
        __VLS_styleScopedClasses['py-12'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['sm:px-6'];
        __VLS_styleScopedClasses['lg:px-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['max-w-6xl'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['w-1/2'];
        __VLS_styleScopedClasses['p-10'];
        __VLS_styleScopedClasses['text-5xl'];
        __VLS_styleScopedClasses['text-customGray'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['text-customGray'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['text-customGray'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['text-customGray'];
        __VLS_styleScopedClasses['w-1/2'];
        __VLS_styleScopedClasses['p-10'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['space-y-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['mr-4'];
        __VLS_styleScopedClasses['justify-start'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-start'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['appearance-none'];
        __VLS_styleScopedClasses['rounded-sm'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['placeholder-gray-500'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus:ring-indigo-500'];
        __VLS_styleScopedClasses['focus:border-indigo-500'];
        __VLS_styleScopedClasses['focus:z-10'];
        __VLS_styleScopedClasses['sm:text-sm'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['appearance-none'];
        __VLS_styleScopedClasses['rounded-sm'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['placeholder-gray-500'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus:ring-indigo-500'];
        __VLS_styleScopedClasses['focus:border-indigo-500'];
        __VLS_styleScopedClasses['focus:z-10'];
        __VLS_styleScopedClasses['sm:text-sm'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['group'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-transparent'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['hover:bg-yellow-500'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus:ring-2'];
        __VLS_styleScopedClasses['focus:ring-offset-2'];
        __VLS_styleScopedClasses['focus:ring-indigo-500'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                username: username,
                password: password,
                user: user,
                rememberMe: rememberMe,
                login: login,
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
