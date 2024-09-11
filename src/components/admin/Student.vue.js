export default (await import('vue')).defineComponent({
    data() {
        return {
            selectedSubject: "",
            selectedSection: "",
            selectedSubject3: "",
            students: [
                {
                    name: "Emma Watson",
                    id: 1234,
                    course: "Biology",
                    subject: "Genetics",
                    contact: "09123456789",
                    teacher: "Mr. Allen",
                },
                {
                    name: "Lucas Miller",
                    id: 2345,
                    course: "Computer Science",
                    subject: "Data Structures",
                    contact: "09987654321",
                    teacher: "Ms. Johnson",
                },
                {
                    name: "Sophia Turner",
                    id: 3456,
                    course: "Physics",
                    subject: "Quantum Mechanics",
                    contact: "09781234567",
                    teacher: "Dr. Parker",
                },
                {
                    name: "James Harris",
                    id: 4567,
                    course: "Mathematics",
                    subject: "Calculus",
                    contact: "09562347891",
                    teacher: "Prof. Smith",
                },
                {
                    name: "Olivia Martinez",
                    id: 5678,
                    course: "Psychology",
                    subject: "Cognitive Psychology",
                    contact: "09123456987",
                    teacher: "Dr. Williams",
                },
            ],
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-between items-center mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/AddStudent"), }));
    const __VLS_2 = __VLS_1({ to: ("/AddStudent"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/AddStudent"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-black text-yellow-400 text-lg font-semibold py-2 px-3 rounded") }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("flex text-gray-600 text-lg m-0 p-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("no-underline hover:no-underline hover:text-gray-600 text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-gray-500 select-none px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("px-2 font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white border-0 shadow-md rounded mt-4 p-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-between items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("card-title text-xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-bar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ class: ("search-form d-flex align-items-center") }, method: ("POST"), action: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), name: ("query"), placeholder: ("Search"), title: ("Enter search keyword"), ...{ class: ("border rounded py-2 px-3 text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("mt-2 table-auto w-full border-collapse border border-gray-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({ ...{ class: ("bg-gray-800 text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-6 py-3 text-left text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ ...{ class: ("divide-y divide-gray-200") }, });
    for (const [student, index] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base font-medium text-gray-900") }, });
        (index + 1);
        // @ts-ignore
        [students,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.id);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.course);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.subject);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.contact);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.teacher);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-check") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-xmark") }, });
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['m-0'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['no-underline'];
        __VLS_styleScopedClasses['hover:no-underline'];
        __VLS_styleScopedClasses['hover:text-gray-600'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['select-none'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['search-bar'];
        __VLS_styleScopedClasses['search-form'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['table-auto'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['border-collapse'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-200'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['divide-y'];
        __VLS_styleScopedClasses['divide-gray-200'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['bg-green-500'];
        __VLS_styleScopedClasses['hover:bg-green-700'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mr-1'];
        __VLS_styleScopedClasses['fa-solid'];
        __VLS_styleScopedClasses['fa-check'];
        __VLS_styleScopedClasses['bg-red-500'];
        __VLS_styleScopedClasses['hover:bg-red-700'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['fa-solid'];
        __VLS_styleScopedClasses['fa-xmark'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
