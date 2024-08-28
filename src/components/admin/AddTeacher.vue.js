export default (await import('vue')).defineComponent({
    data() {
        return {
            form: {
                name: "",
                username: "",
                email: "",
                password: "",
                address: "",
            },
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
            console.log("Form submitted", this.form);
        },
        resetForm() {
            this.form = {
                name: "",
                username: "",
                email: "",
                password: "",
                address: "",
            };
        },
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("flex text-gray-600 text-sm m-0 p-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("no-underline hover:no-underline hover:text-gray-600 text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-gray-500 select-none px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-gray-500 select-none px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-gray-500 select-none px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("px-2 font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-lg-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white border-0 shadow-md rounded mt-4 p-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("card-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, ...{ class: ("row p-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("inputName"), ...{ class: ("form-label") }, });
    // @ts-ignore
    [submitForm,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control") }, id: ("inputName"), value: ((__VLS_ctx.form.name)), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-6 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("inputUsername"), ...{ class: ("form-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-6 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("inputPassword"), ...{ class: ("form-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), ...{ class: ("form-control") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("inputEmail"), ...{ class: ("form-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), ...{ class: ("form-control") }, id: ("inputEmail"), });
    (__VLS_ctx.form.email);
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("inputAddress"), ...{ class: ("form-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control") }, id: ("inputAddress"), value: ((__VLS_ctx.form.address)), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("mr-2 bg-yellow-400 py-2 px-3 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.resetForm) }, type: ("reset"), ...{ class: ("mr-2 bg-gray-800 text-white py-2 px-4 rounded") }, });
    // @ts-ignore
    [resetForm,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['m-0'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['no-underline'];
        __VLS_styleScopedClasses['hover:no-underline'];
        __VLS_styleScopedClasses['hover:text-gray-600'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['select-none'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['select-none'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['select-none'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['col-lg-6'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-label'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-label'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-label'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-label'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['form-label'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['bg-yellow-400'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['rounded'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
