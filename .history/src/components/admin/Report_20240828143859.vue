<template>
  <div class="">
    <div class="mb-2">
      <h2 class="text-2xl font-semibold">Report</h2>
    </div>
    <div class="">
      <ol class="flex text-gray-600 text-sm m-0 p-0">
        <li class="">
          <a
            href="#"
            class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
            >Teacher</a
          >
        </li>
        <li class="text-gray-500 selec+t-none px-2">/</li>
        <li class="px-2 font-semibold">Report Sheet</li>
      </ol>
    </div>
  </div>
  <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
    <div class="d-flex flex-wrap mt-2">
      <div class="col-md-3 mb-2 px-2">
        <div class="form-floating">
          <select
            class="form-select"
            id="floatingSelect2"
            v-model="selectedSubject"
            aria-label="Subject"
          >
            <option value="" disabled>Subject</option>
            <option value="Advance Java">Advance Java</option>
            <option value="Oregon">Oregon</option>
            <option value="DC">DC</option>
          </select>
          <label for="floatingSelect2">Subject</label>
        </div>
      </div>
      <div class="col-md-3 mb-2 px-2">
        <div class="form-floating">
          <select
            class="form-select"
            id="floatingSelect3"
            v-model="selectedSection"
            aria-label="Section"
          >
            <option value="" disabled>Section</option>
            <option value="Newton">Newton</option>
            <option value="Celsius">Celsius</option>
            <option value="Zara">Zara</option>
          </select>
          <label for="floatingSelect3">Section</label>
        </div>
      </div>
      <div class="col-md-3 mb-3 px-2">
        <div class="form-floating">
          <input type="date" class="form-control" />
          <label for="floatingSelect3">Date</label>
        </div>
      </div>
      <div class="col-md-2 mb-3 px-2">
        <div class="">
          <button class="px-3 py-3 bg-black text-yellow-400 rounded">
            Generate Report
          </button>
        </div>
      </div>

      <div class="card-body p-3">
        <span class="card-title text-lg font-semibold">Report Sheet</span>

        <!-- Default Table -->
        <table
          class="mt-2 table-auto w-full border-collapse border border-gray-200"
        >
          <thead class="bg-gray-100">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Student Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Semester
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total Present Day
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total Absence Day
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(student, index) in students" :key="index">
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
              >
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ student.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ student.semester }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ student.present }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ student.absent }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Default Table Example -->
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
          semester: "First",
          present: "15",
          absent: "5",
        },
        {
          name: "Bridie Kessler",
          studId: "2345",
          semester: "First",
          present: "9",
          absent: "4",
        },
        {
          name: "Ashleigh Langosh",
          studId: "3456",
          semester: "First",
          present: "16",
          absent: "1",
        },
      ],
    };
  },
};
</script>
