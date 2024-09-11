export default (await import('vue')).defineComponent({
    data() {
        return {
            selectedSubject: "",
            selectedSection: "",
            selectedSubject3: "",
            students: [
                {
                    name: "Ashleigh Langosh",
                    studId: "3456",
                    subject: "Mathematics",
                    course: "BSBA",
                    date: "2024-09-10",
                    present: "16",
                    absent: "1",
                },
                {
                    name: "Bridie Kessler",
                    studId: "2345",
                    subject: "English",
                    course: "BSIT",
                    date: "2024-09-10",
                    present: "15",
                    absent: "2",
                },
                {
                    name: "Darryl Kertzmann",
                    studId: "4567",
                    subject: "Science",
                    course: "BSCS",
                    date: "2024-09-10",
                    present: "14",
                    absent: "3",
                },
                {
                    name: "Adella Zboncak",
                    studId: "5678",
                    subject: "History",
                    course: "BSIT",
                    date: "2024-09-10",
                    present: "17",
                    absent: "0",
                },
                {
                    name: "Brandon Jacob",
                    studId: "1234",
                    subject: "Art",
                    course: "BSBA",
                    date: "2024-09-10",
                    present: "16",
                    absent: "1",
                },
            ],
        };
    },
    methods: {
        printTable() {
            const printContents = document.getElementById("printTable1").innerHTML;
            const originalContents = document.body.innerHTML;
            const printWindow = window.open("", "", "height=600,width=800");
            printWindow.document.write(`
        <html>
        <head>
          <title>Print Report</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 2px 2px; border: 1px solid #ccc; }
            th { background-color: #f8f8f8; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
        </html>
      `);
            printWindow.document.close();
            printWindow.print();
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("flex text-gray-600 text-lg m-0 p-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("no-underline hover:no-underline hover:text-gray-600 text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-gray-500 selec+t-none px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("px-2 font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white border-0 shadow-md rounded mt-4 p-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-wrap mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-2 mb-2 px-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control h-14 w-full text-lg") }, placeholder: ("ID Number"), id: ("idNumber"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-3 mb-2 px-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control h-14 w-full text-lg") }, placeholder: ("Name"), id: ("idNumber"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-3 mb-2 px-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select text-lg h-14") }, id: ("floatingSelect2"), value: ((__VLS_ctx.selectedSubject)), "aria-label": ("Subject"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    // @ts-ignore
    [selectedSubject,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Advance Java"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Oregon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("DC"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-2 mb-2 px-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select text-lg h-14") }, id: ("floatingSelect3"), value: ((__VLS_ctx.selectedSection)), "aria-label": ("Section"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    // @ts-ignore
    [selectedSection,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("BSIT"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("BSCS"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("BSBA"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-sm-2 mb-3 px-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("date"), ...{ class: ("form-control h-14") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-md-2 mb-3 px-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("px-3 py-3 bg-black text-yellow-400 rounded text-lg font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body px-2 py-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.printTable) }, ...{ class: ("absolute top-0 right-0 rounded text-blue-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-print text-2xl") }, });
    // @ts-ignore
    [printTable,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("card-title text-xl font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("printTable1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ id: ("report-table"), ...{ class: ("mt-2 table-auto w-full border-collapse border border-gray-200") }, });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-md font-medium text-gray-900") }, });
        (index + 1);
        // @ts-ignore
        [students,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.studId);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.subject);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.course);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.present);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-2 whitespace-nowrap text-base") }, });
        (student.absent);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['font-bold'];
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
        __VLS_styleScopedClasses['selec+t-none'];
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
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['col-md-2'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['px-1'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['px-1'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['px-1'];
        __VLS_styleScopedClasses['form-select'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['col-md-2'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['px-1'];
        __VLS_styleScopedClasses['form-select'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['col-sm-2'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['px-1'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['col-md-2'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['px-1'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['py-10'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['right-0'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['fa-solid'];
        __VLS_styleScopedClasses['fa-print'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
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
        __VLS_styleScopedClasses['text-md'];
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
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
