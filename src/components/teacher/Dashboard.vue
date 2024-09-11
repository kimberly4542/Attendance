<template>
  <div class="mb-2">
    <h2 class="text-4xl font-bold">Dashboard</h2>
  </div>

  <div class="mb-4">
    <ol class="flex text-gray-600 text-lg m-0 p-0">
      <li class="">
        <a
          href="#"
          class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
          >Home</a
        >
      </li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="px-2 font-bold">Dashboard</li>
    </ol>
  </div>

  <section>
    <div class="row">
      <!-- Left side columns -->
      <div class="col-lg-8">
        <div class="row">
          <!-- Present Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card border-0 shadow-md">
              <div class="card-body">
                <h5 class="text-xl font-semibold">
                  Present <span class="text-gray-400 text-lg">| Today</span>
                </h5>

                <div class="d-flex align-items-center mt-4 mb-3">
                  <div
                    class="card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-regular fa-user text-2xl text-yellow-400"></i>
                  </div>
                  <div class="ps-3">
                    <h6 class="text-[40px] mb-0">145</h6>
                    <span class="text-success text-base pt-1 fw-bold">12%</span>
                    <span class="text-muted text-base pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Present Card -->

          <!-- Absent Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card border-0 shadow-md">
              <div class="card-body">
                <h5 class="text-xl font-semibold">
                  Absent <span class="text-gray-400 text-lg">| Today</span>
                </h5>

                <div class="d-flex align-items-center mt-4 mb-3">
                  <div
                    class="card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-regular fa-user text-2xl text-yellow-400"></i>
                  </div>
                  <div class="ps-3">
                    <h6 class="text-[40px] mb-0">15</h6>
                    <span class="text-danger pt-1 fw-bold text-base">18%</span>
                    <span class="text-muted text-base pt-2 ps-1">decrease</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Attendance Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card border-0 shadow-md">
              <div class="card-body">
                <h5 class="text-xl font-semibold">
                  Attendance
                  <span class="text-gray-400 text-lg">| Today</span>
                </h5>

                <div class="d-flex align-items-center mt-4 mb-3">
                  <div
                    class="card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-regular fa-user text-2xl text-yellow-400"></i>
                  </div>
                  <div class="ps-3">
                    <h6 class="text-[40px] mb-0">145</h6>
                    <span class="text-success pt-1 fw-bold text-base">12%</span>
                    <span class="text-muted text-base pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Attendance Card -->
        </div>

        <!-- Reports -->
        <div class="col-12 mt-4 px-0">
          <div class="card border-0 shadow-md">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"
                ><i class="bi bi-three-dots"></i
              ></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">This Month</a></li>
                <li><a class="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="text-xl font-semibold">
                Reports <span class="text-gray-400 text-lg">/ Today</span>
              </h5>

              <!-- Line Chart -->

              <apexchart
                type="area"
                height="350"
                :options="chartOptions"
                :series="series"
              ></apexchart>
              <!-- End Line Chart -->
            </div>
          </div>
        </div>
        <!-- End Reports -->
      </div>
      <div class="col-lg-4">
        <div class="card border-0 shadow-md">
          <h5 class="card-title p-3 text-xl font-semibold">
            Attendance Report
            <span class="text-gray-400 text-lg">| This Month</span>
          </h5>

          <apexchart
            type="radar"
            :options="chartOptions"
            :series="series"
            height="400"
          ></apexchart>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
body {
  background-color: #f6f9ff;
}
.rounded-circle {
  background-color: #1f2937;
}
</style>

<script>
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

    return {
      series,
      chartOptions,
    };
  },
});
</script>
