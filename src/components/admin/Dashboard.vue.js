import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
export default defineComponent({
    name: "ReportsChart",
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const series = ref([
            {
                name: "Present",
                data: [31, 40, 28, 51, 42, 82, 56],
            },
            {
                name: "Absent",
                data: [11, 32, 45, 32, 34, 52, 41],
            },
            {
                name: "Attendance",
                data: [15, 11, 32, 18, 9, 24, 11],
            },
        ]);
        const chartOptions = ref({
            chart: {
                height: 350,
                type: "radar",
                toolbar: {
                    show: false,
                },
            },
            legend: {
                show: true,
                labels: {
                    colors: ["#495057"],
                },
            },
            markers: {
                size: 0,
            },
            colors: ["#4154f1", "#2eca6a", "#ff771d"],
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            xaxis: {
                categories: ["Teacher", "Student", "Attendance"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        });
        // return {
        //   series,
        //   chartOptions
        // }
        // Dropdown state for filter options
        const isDropdownOpen = ref(false);
        // Method to toggle the dropdown
        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };
        return {
            series,
            chartOptions,
            isDropdownOpen,
            toggleDropdown,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-2xl font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)({ ...{ class: ("flex text-gray-600 text-sm m-0 p-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("no-underline hover:no-underline hover:text-gray-600 text-gray-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-gray-500 select-none px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("px-2 font-semibold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-lg-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-xxl-4 col-md-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card border-0 shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-items-center mt-4 mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-regular fa-user text-2xl text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("text-[28px] mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-success small pt-1 fw-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-muted small pt-2 ps-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-xxl-4 col-md-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card border-0 shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-items-center mt-4 mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-regular fa-user text-2xl text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("text-[28px] mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-danger small pt-1 fw-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-muted small pt-2 ps-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-xxl-4 col-md-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card border-0 shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-items-center mt-4 mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-regular fa-user text-2xl text-yellow-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ps-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("text-[28px] mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-success small pt-1 fw-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-muted small pt-2 ps-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 mt-4 px-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card border-0 shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filter") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("icon") }, href: ("#"), "data-bs-toggle": ("dropdown"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-three-dots") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown-menu dropdown-menu-end dropdown-menu-arrow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("dropdown-header text-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("dropdown-item") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("dropdown-item") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("dropdown-item") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400 text-sm") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .apexchart;
    ({}.apexchart);
    ({}.apexchart);
    __VLS_components.Apexchart;
    __VLS_components.apexchart;
    __VLS_components.Apexchart;
    __VLS_components.apexchart;
    // @ts-ignore
    [Apexchart, Apexchart,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ type: ("area"), height: ("350"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), }));
    const __VLS_2 = __VLS_1({ type: ("area"), height: ("350"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ type: ("area"), height: ("350"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [chartOptions, series,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-lg-4 space-y-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("filter relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleDropdown) }, ...{ class: ("icon focus:outline-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-three-dots") }, });
    // @ts-ignore
    [toggleDropdown,];
    if (__VLS_ctx.isDropdownOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("dropdown-menu dropdown-menu-end dropdown-menu-arrow absolute bg-white shadow-lg right-0 mt-2 z-10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("dropdown-header text-start px-4 py-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
        // @ts-ignore
        [isDropdownOpen,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("dropdown-item px-4 py-2 hover:bg-gray-100") }, href: ("#"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("dropdown-item px-4 py-2 hover:bg-gray-100") }, href: ("#"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("dropdown-item px-4 py-2 hover:bg-gray-100") }, href: ("#"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("px-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("px-2 text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity space-y-4 m-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-item flex items-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-label relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute right-[-11px] top-0 bottom-0 w-[4px] bg-[#eceefe]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("mr-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-item flex items-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-label relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute right-[-11px] top-0 bottom-0 w-[4px] bg-[#eceefe]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("text-primary mr-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-item flex items-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-label relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute right-[-11px] top-0 bottom-0 w-[4px] bg-[#eceefe]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("text-info mr-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("activity-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card border-0 shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("card-title p-3 text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-400 text-sm") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .apexchart;
    ({}.apexchart);
    ({}.apexchart);
    __VLS_components.Apexchart;
    __VLS_components.apexchart;
    __VLS_components.Apexchart;
    __VLS_components.apexchart;
    // @ts-ignore
    [Apexchart, Apexchart,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("radar"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), height: ("400"), }));
    const __VLS_8 = __VLS_7({ type: ("radar"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), height: ("400"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ type: ("radar"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), height: ("400"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [chartOptions, series,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['mb-4'];
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
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['font-semibold'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-lg-8'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['col-xxl-4'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['rounded-circle'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['fa-regular'];
        __VLS_styleScopedClasses['fa-user'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['ps-3'];
        __VLS_styleScopedClasses['text-[28px]'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['text-success'];
        __VLS_styleScopedClasses['small'];
        __VLS_styleScopedClasses['pt-1'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-muted'];
        __VLS_styleScopedClasses['small'];
        __VLS_styleScopedClasses['pt-2'];
        __VLS_styleScopedClasses['ps-1'];
        __VLS_styleScopedClasses['col-xxl-4'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['rounded-circle'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['fa-regular'];
        __VLS_styleScopedClasses['fa-user'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['ps-3'];
        __VLS_styleScopedClasses['text-[28px]'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['text-danger'];
        __VLS_styleScopedClasses['small'];
        __VLS_styleScopedClasses['pt-1'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-muted'];
        __VLS_styleScopedClasses['small'];
        __VLS_styleScopedClasses['pt-2'];
        __VLS_styleScopedClasses['ps-1'];
        __VLS_styleScopedClasses['col-xxl-4'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['mb-3'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['rounded-circle'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['fa-regular'];
        __VLS_styleScopedClasses['fa-user'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-yellow-400'];
        __VLS_styleScopedClasses['ps-3'];
        __VLS_styleScopedClasses['text-[28px]'];
        __VLS_styleScopedClasses['mb-0'];
        __VLS_styleScopedClasses['text-success'];
        __VLS_styleScopedClasses['small'];
        __VLS_styleScopedClasses['pt-1'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['text-muted'];
        __VLS_styleScopedClasses['small'];
        __VLS_styleScopedClasses['pt-2'];
        __VLS_styleScopedClasses['ps-1'];
        __VLS_styleScopedClasses['col-12'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['px-0'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['filter'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-three-dots'];
        __VLS_styleScopedClasses['dropdown-menu'];
        __VLS_styleScopedClasses['dropdown-menu-end'];
        __VLS_styleScopedClasses['dropdown-menu-arrow'];
        __VLS_styleScopedClasses['dropdown-header'];
        __VLS_styleScopedClasses['text-start'];
        __VLS_styleScopedClasses['dropdown-item'];
        __VLS_styleScopedClasses['dropdown-item'];
        __VLS_styleScopedClasses['dropdown-item'];
        __VLS_styleScopedClasses['card-body'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['col-lg-4'];
        __VLS_styleScopedClasses['space-y-4'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['filter'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['bi'];
        __VLS_styleScopedClasses['bi-three-dots'];
        __VLS_styleScopedClasses['dropdown-menu'];
        __VLS_styleScopedClasses['dropdown-menu-end'];
        __VLS_styleScopedClasses['dropdown-menu-arrow'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['shadow-lg'];
        __VLS_styleScopedClasses['right-0'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['z-10'];
        __VLS_styleScopedClasses['dropdown-header'];
        __VLS_styleScopedClasses['text-start'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['dropdown-item'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['hover:bg-gray-100'];
        __VLS_styleScopedClasses['dropdown-item'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['hover:bg-gray-100'];
        __VLS_styleScopedClasses['dropdown-item'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['hover:bg-gray-100'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['px-2'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['activity'];
        __VLS_styleScopedClasses['space-y-4'];
        __VLS_styleScopedClasses['m-3'];
        __VLS_styleScopedClasses['activity-item'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['activity-label'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['right-[-11px]'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['w-[4px]'];
        __VLS_styleScopedClasses['bg-[#eceefe]'];
        __VLS_styleScopedClasses['mr-6'];
        __VLS_styleScopedClasses['activity-content'];
        __VLS_styleScopedClasses['activity-item'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['activity-label'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['right-[-11px]'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['w-[4px]'];
        __VLS_styleScopedClasses['bg-[#eceefe]'];
        __VLS_styleScopedClasses['text-primary'];
        __VLS_styleScopedClasses['mr-6'];
        __VLS_styleScopedClasses['activity-content'];
        __VLS_styleScopedClasses['activity-item'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-start'];
        __VLS_styleScopedClasses['activity-label'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['right-[-11px]'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['bottom-0'];
        __VLS_styleScopedClasses['w-[4px]'];
        __VLS_styleScopedClasses['bg-[#eceefe]'];
        __VLS_styleScopedClasses['text-info'];
        __VLS_styleScopedClasses['mr-6'];
        __VLS_styleScopedClasses['activity-content'];
        __VLS_styleScopedClasses['card'];
        __VLS_styleScopedClasses['border-0'];
        __VLS_styleScopedClasses['shadow-md'];
        __VLS_styleScopedClasses['card-title'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-400'];
        __VLS_styleScopedClasses['text-sm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        apexchart: VueApexCharts,
    };
    const __VLS_name = "ReportsChart";
    let __VLS_internalComponent;
}
