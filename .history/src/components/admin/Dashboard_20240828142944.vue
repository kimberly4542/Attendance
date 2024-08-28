<template>
  <div class="mb-2">
    <h2 class="text-2xl font-semibold">Dashboard</h2>
  </div>

  <div class="mb-4">
    <ol class="flex text-gray-600 text-sm m-0 p-0">
      <li class="">
        <a
          href="#"
          class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
          >Home</a
        >
      </li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="px-2 font-semibold">Dashboard</li>
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
                <h5 class="text-lg">
                  Present <span class="text-gray-400 text-sm">| Today</span>
                </h5>

                <div class="d-flex align-items-center mt-4 mb-3">
                  <div
                    class="card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-regular fa-user text-2xl text-yellow-400"></i>
                  </div>
                  <div class="ps-3">
                    <h6 class="text-[28px] mb-0">145</h6>
                    <span class="text-success small pt-1 fw-bold">12%</span>
                    <span class="text-muted small pt-2 ps-1">increase</span>
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
                <h5 class="text-lg">
                  Absent <span class="text-gray-400 text-sm">| Today</span>
                </h5>

                <div class="d-flex align-items-center mt-4 mb-3">
                  <div
                    class="card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-regular fa-user text-2xl text-yellow-400"></i>
                  </div>
                  <div class="ps-3">
                    <h6 class="text-[28px] mb-0">15</h6>
                    <span class="text-danger small pt-1 fw-bold">18%</span>
                    <span class="text-muted small pt-2 ps-1">decrease</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Attendance Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card border-0 shadow-md">
              <div class="card-body">
                <h5 class="text-lg">
                  Attendance <span class="text-gray-400 text-sm">| Today</span>
                </h5>

                <div class="d-flex align-items-center mt-4 mb-3">
                  <div
                    class="card rounded-circle px-4 py-3 d-flex align-items-center justify-content-center"
                  >
                    <i class="fa-regular fa-user text-2xl text-yellow-400"></i>
                  </div>
                  <div class="ps-3">
                    <h6 class="text-[28px] mb-0">145</h6>
                    <span class="text-success small pt-1 fw-bold">12%</span>
                    <span class="text-muted small pt-2 ps-1">increase</span>
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
              <h5 class="text-lg">
                Reports <span class="text-gray-400 text-sm">/ Today</span>
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

      <div class="col-lg-4 space-y-4">
        <!-- Recent Activity -->
        <div class="card">
          <div class="filter relative">
            <button class="icon focus:outline-none" @click="toggleDropdown">
              <i class="bi bi-three-dots"></i>
            </button>
            <ul
              v-if="isDropdownOpen"
              class="dropdown-menu dropdown-menu-end dropdown-menu-arrow absolute bg-white shadow-lg right-0 mt-2 z-10"
            >
              <li class="dropdown-header text-start px-4 py-2">
                <h6>Filter</h6>
              </li>
              <li>
                <a class="dropdown-item px-4 py-2 hover:bg-gray-100" href="#"
                  >Today</a
                >
              </li>
              <li>
                <a class="dropdown-item px-4 py-2 hover:bg-gray-100" href="#"
                  >This Month</a
                >
              </li>
              <li>
                <a class="dropdown-item px-4 py-2 hover:bg-gray-100" href="#"
                  >This Year</a
                >
              </li>
            </ul>
          </div>

          <div class="px-2">
            <h5 class="px-2 text-lg">
              Recent Activities
              <span class="text-gray-400 text-sm">| Today</span>
            </h5>

            <div class="activity space-y-4 m-3">
              <div class="activity-item flex items-start">
                <div class="activity-label relative">
                  <span class="text-gray-400">32 min</span>
                  <span
                    class="absolute right-[-11px] top-0 bottom-0 w-[4px] bg-[#eceefe]"
                  ></span>
                </div>
                <i class="mr-6"></i>
                <div class="activity-content">New teacher created</div>
              </div>

              <div class="activity-item flex items-start">
                <div class="activity-label relative">
                  <span class="text-gray-400">56 min</span>
                  <span
                    class="absolute right-[-11px] top-0 bottom-0 w-[4px] bg-[#eceefe]"
                  ></span>
                </div>
                <i class="text-primary mr-6"></i>
                <div class="activity-content">Java attendance taken</div>
              </div>

              <div class="activity-item flex items-start">
                <div class="activity-label relative">
                  <span class="text-gray-400">58 min</span>
                  <span
                    class="absolute right-[-11px] top-0 bottom-0 w-[4px] bg-[#eceefe]"
                  ></span>
                </div>
                <i class="text-info mr-6"></i>
                <div class="activity-content">Absence application</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-md">
          <h5 class="card-title p-3 text-lg">
            Budget Report
            <span class="text-gray-400 text-sm">| This Month</span>
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
    <!-- End Recent Activity -->
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
<!-- <script>
import { defineComponent, ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default defineComponent({
  name: 'ReportsChart',
  components: {
    apexchart: VueApexCharts
  },
  setup() {
    const series = ref([
      {
        name: 'Present',
        data: [31, 40, 28, 51, 42, 82, 56]
      },
      {
        name: 'Absent',
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: 'Attendance',
        data: [15, 11, 32, 18, 9, 24, 11]
      }
    ])

    const chartOptions = ref({
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    })

    return {
      series,
      chartOptions
    }
  }
})
</script> -->

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
</script>

<style>
.dashboard .activity {
  font-size: 14px;
}

.dashboard .activity .activity-item .activity-label {
  color: #888;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 64px;
}

.dashboard .activity .activity-item .activity-label::before {
  content: "";
  position: absolute;
  right: -11px;
  width: 4px;
  top: 0;
  bottom: 0;
  background-color: #eceefe;
}

.dashboard .activity .activity-item .activity-badge {
  z-index: 1;
  font-size: 11px;
  line-height: 0;
  border-radius: 50%;
  flex-shrink: 0;
  border: 3px solid #fff;
  flex-grow: 0;
}

.activity .activity-item .activity-content {
  padding-left: 10px;
  padding-bottom: 20px;
}

.activity .activity-item:first-child .activite-label::before {
}

.activity .activity-item:last-child .activity-content {
  padding-bottom: 0;
}
</style>
