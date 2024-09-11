<template>
  <div class="">
    <div class="mb-2">
      <h2 class="text-4xl font-bold">Attendance</h2>
    </div>
    <div class="">
      <ol class="flex text-gray-600 text-lg m-0 p-0">
        <li class="">
          <a
            href="#"
            class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
            >Teacher</a
          >
        </li>
        <li class="text-gray-500 select-none px-2">/</li>
        <li class="px-2 font-bold">Attendance Sheet</li>
      </ol>
    </div>
  </div>

  <!-- Filter  -->
  <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
    <div class="d-flex flex-wrap mt-2">
      <div class="col-md-3 mb-3 px-2">
        <div class="">
          <select
            class="form-select text-lg h-14"
            id="floatingSelect2"
            v-model="selectedSubject"
            aria-label="Subject"
          >
            <option value="" disabled>Subject</option>
            <option value="Advance Java">Advance Java</option>
            <option value="Oregon">Oregon</option>
            <option value="DC">DC</option>
          </select>
        </div>
      </div>
      <div class="col-md-3 mb-3 px-2">
        <div class="">
          <select
            class="form-select text-lg h-14"
            id="floatingSelect3"
            v-model="selectedSection"
            aria-label="Section"
          >
            <option value="" disabled>Section</option>
            <option value="Newton">Newton</option>
            <option value="Celsius">Celsius</option>
            <option value="Zara">Zara</option>
          </select>
        </div>
      </div>
      <div class="col-md-3 mb-3 px-2">
        <div class="text-lg">
          <input type="date" class="form-control text-lg h-14" />
        </div>
      </div>
      <div class="col-md-2 mb-3 px-2">
        <div class="">
          <button
            class="px-3 py-3 bg-black text-yellow-400 rounded text-lg font-semibold"
          >
            Generate Sheet
          </button>
        </div>
      </div>

      <!-- Filter End  -->

      <div class="card-body p-3">
        <span class="card-title text-xl font-bold">Attendance Sheet</span>

        <!-- Default Table -->
        <table
          class="mt-2 table-auto w-full border-collapse border border-gray-200"
        >
          <thead class="bg-gray-800 text-yellow-400">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Student Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Student ID
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Time-In
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Time-Out
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(student, index) in students" :key="index">
              <td
                class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {{ index + 1 }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.name }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.studId }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.in }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.out }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.status }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Default Table  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSubject: "",
      selectedSection: "",
      selectedSubject3: "",
      students: [
        {
          name: "Brandon Jacob",
          studId: "1234",
          in: "08:00 AM",
          out: "03:00 PM",
          status: "Present",
        },
        {
          name: "Bridie Kessler",
          studId: "2345",
          in: "08:15 AM",
          out: "03:00 PM",
          status: "Present",
        },
        {
          name: "Ashleigh Langosh",
          studId: "3456",
          in: "N/A",
          out: "N/A",
          status: "Absent",
        },
        {
          name: "Darryl Kertzmann",
          studId: "4567",
          in: "08:05 AM",
          out: "02:55 PM",
          status: "Present",
        },
        {
          name: "Adella Zboncak",
          studId: "5678",
          in: "08:30 AM",
          out: "02:45 PM",
          status: "Late",
        },
      ],
    };
  },
};
</script>
