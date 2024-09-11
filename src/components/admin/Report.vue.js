export default (await import('vue')).defineComponent({
    data() {
        return {
            idNumber: "",
            name: "",
            selectedSubject: "",
            selectedSection: "",
            date: "",
            students: [
                {
                    name: "John Doe",
                    usn: "20210001",
                    year: "3rd Year",
                    course: "Computer Science",
                    semester: "1st Semester",
                    present: "85",
                    absent: "5",
                },
                {
                    name: "Jane Smith",
                    usn: "20210002",
                    year: "2nd Year",
                    course: "Information Technology",
                    semester: "2nd Semester",
                    present: "80",
                    absent: "10",
                },
                {
                    name: "Michael Johnson",
                    usn: "20210003",
                    year: "4th Year",
                    course: "Electrical Engineering",
                    semester: "1st Semester",
                    present: "90",
                    absent: "4",
                },
                {
                    name: "Emily Davis",
                    usn: "20210004",
                    year: "1st Year",
                    course: "Mechanical Engineering",
                    semester: "2nd Semester",
                    present: "75",
                    absent: "12",
                },
                {
                    name: "Daniel White",
                    usn: "20210005",
                    year: "3rd Year",
                    course: "Civil Engineering",
                    semester: "1st Semester",
                    present: "88",
                    absent: "7",
                },
                {
                    name: "Sophia Martinez",
                    usn: "20210006",
                    year: "2nd Year",
                    course: "Business Administration",
                    semester: "2nd Semester",
                    present: "82",
                    absent: "9",
                },
                {
                    name: "Liam Brown",
                    usn: "20210007",
                    year: "4th Year",
                    course: "Architecture",
                    semester: "1st Semester",
                    present: "92",
                    absent: "3",
                },
                {
                    name: "Olivia Wilson",
                    usn: "20210008",
                    year: "1st Year",
                    course: "Nursing",
                    semester: "2nd Semester",
                    present: "78",
                    absent: "11",
                },
                {
                    name: "Aiden Taylor",
                    usn: "20210009",
                    year: "3rd Year",
                    course: "Psychology",
                    semester: "1st Semester",
                    present: "87",
                    absent: "6",
                },
                {
                    name: "Isabella Gonzalez",
                    usn: "20210010",
                    year: "2nd Year",
                    course: "Marketing",
                    semester: "2nd Semester",
                    present: "81",
                    absent: "8",
                },
            ],
        };
    },
    methods: {
        //   printTable() {
        //     const printContents = document.getElementById("printTable").innerHTML;
        //     const originalContents = document.body.innerHTML;
        //     document.body.innerHTML = printContents;
        //     window.print();
        //     document.body.innerHTML = originalContents;
        //     window.location.reload(); // Optional: Reload to restore the original state
        //   },
        // },
        printTable1() {
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
        printTable2() {
            const printContents = document.getElementById("printTable2").innerHTML;
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
    // methods: {
    //   exportToExcel() {
    //     const table = document.getElementById("report-table");
    //     if (table) {
    //       const ws = utils.table_to_sheet(table);
    //       const wb = utils.book_new();
    //       utils.book_append_sheet(wb, ws, "Report Sheet");
    //       writeFile(wb, "report_sheet.xlsx");
    //     } else {
    //       console.error("Table element not found");
    //     }
    //   },
    // },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("flex text-gray-600 text-lg m-0 p-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("no-underline hover:no-underline hover:text-gray-600 text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-gray-500 selec+t-none px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("px-2 font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-6xl w-full mx-auto border-0 shadow-md rounded mt-4 p-3 bg-slate-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-1/3 p-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-lg font-bold mb-2 block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control h-12 w-full text-lg") }, placeholder: ("ID Number"), id: ("idNumber"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control h-12 w-full text-lg") }, placeholder: ("Name"), id: ("name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select w-full text-lg text-muted") }, id: ("section"), value: ((__VLS_ctx.selectedSection)), "aria-label": ("Section"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    // @ts-ignore
    [selectedSection,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Newton"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Celsius"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Zara"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select w-full text-lg text-muted") }, id: ("course"), value: ((__VLS_ctx.selectedSubject)), "aria-label": ("Subject"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    // @ts-ignore
    [selectedSubject,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Advance Java"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Oregon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("DC"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("date"), ...{ class: ("form-control w-full text-lg text-muted") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("w-full h-14 bg-black text-yellow-400 rounded text-base font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-2/3 p-2 overflow-auto max-h-96") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.printTable1) }, ...{ class: ("absolute top-0 right-0 rounded text-blue-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-file-arrow-down text-2xl") }, });
    // @ts-ignore
    [printTable1,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xl font-bold mb-2 block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-x-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("printTable1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ id: ("report-table"), ...{ class: ("mt-2 border border-gray-200 w-full border-collapse") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({ ...{ class: ("bg-gray-800 text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-3 py-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-2 py-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-2 py-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("px-2 py-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ ...{ class: ("divide-y divide-gray-200 bg-white") }, });
    for (const [student, index] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-500") }, });
        (index + 1);
        // @ts-ignore
        [students,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.usn);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.year);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.course);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.semester);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.present);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.absent);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-slate-50 border-0 shadow-md rounded mt-4 p-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-2 overflow-auto max-h-96") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.printTable2) }, ...{ class: ("absolute top-0 right-0 rounded text-blue-500") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-file-arrow-down text-2xl") }, });
    // @ts-ignore
    [printTable2,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xl font-bold mb-2 block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overflow-x-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("printTable2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ id: ("report-table"), ...{ class: ("mt-2 border bg-white border-gray-200 w-full border-collapse") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({ ...{ class: ("bg-gray-800 text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-3 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ scope: ("col"), ...{ class: ("p-2 text-center text-base font-bold uppercase tracking-wider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ ...{ class: ("divide-y divide-gray-200") }, });
    for (const [student, index] of __VLS_getVForSourceType((__VLS_ctx.students))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base font-medium text-gray-900 border border-gray-500") }, });
        (index + 1);
        // @ts-ignore
        [students,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.usn);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.year);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.course);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.semester);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.absent);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-1 whitespace-nowrap text-base border border-gray-500") }, });
        (student.present);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['font-semibold'];
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
        __VLS_styleScopedClasses['max-w-6xl'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['bg-slate-50'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['w-1/3'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['h-12'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['h-12'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-select'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-muted'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['form-select'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-muted'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mb-6'];
        __VLS_styleScopedClasses['form-control'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-muted'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['bg-black'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['w-2/3'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['overflow-auto'];
        __VLS_styleScopedClasses['max-h-96'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['right-0'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['fa-solid'];
        __VLS_styleScopedClasses['fa-file-arrow-down'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['overflow-x-auto'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-200'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['border-collapse'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['px-3'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['divide-y'];
        __VLS_styleScopedClasses['divide-gray-200'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['bg-slate-50'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['overflow-auto'];
        __VLS_styleScopedClasses['max-h-96'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['right-0'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['fa-solid'];
        __VLS_styleScopedClasses['fa-file-arrow-down'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['overflow-x-auto'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['border-gray-200'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['border-collapse'];
        __VLS_styleScopedClasses['bg-gray-800'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['divide-y'];
        __VLS_styleScopedClasses['divide-gray-200'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-gray-900'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-500'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
