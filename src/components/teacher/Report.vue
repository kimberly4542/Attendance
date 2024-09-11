<template>
  <div class="">
    <div class="mb-2">
      <h2 class="text-4xl font-bold">Report</h2>
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
        <li class="text-gray-500 selec+t-none px-2">/</li>
        <li class="px-2 font-bold">Report Sheet</li>
      </ol>
    </div>
  </div>

  <!-- Filter  -->

  <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
    <div class="d-flex flex-wrap mt-2">
      <div class="col-md-2 mb-2 px-1">
        <input
          type="text"
          class="form-control h-14 w-full text-lg"
          placeholder="ID Number"
          id="idNumber"
        />
      </div>
      <div class="col-md-3 mb-2 px-1">
        <input
          type="text"
          class="form-control h-14 w-full text-lg"
          placeholder="Name"
          id="idNumber"
        />
      </div>
      <div class="col-md-3 mb-2 px-1">
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
      <div class="col-md-2 mb-2 px-1">
        <div class="">
          <select
            class="form-select text-lg h-14"
            id="floatingSelect3"
            v-model="selectedSection"
            aria-label="Section"
          >
            <option value="" disabled>Course</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSBA">BSBA</option>
          </select>
        </div>
      </div>
      <div class="col-sm-2 mb-3 px-1">
        <div class="">
          <input type="date" class="form-control h-14" />
        </div>
      </div>
      <div class="col-md-2 mb-3 px-1">
        <button
          class="px-3 py-3 bg-black text-yellow-400 rounded text-lg font-semibold"
        >
          Generate Sheet
        </button>
      </div>
    </div>

    <!-- Filter End -->

    <div class="card-body px-2 py-10">
      <div class="relative">
        <button
          class="absolute top-0 right-0 rounded text-blue-500"
          @click="printTable"
        >
          <i class="fa-solid fa-print text-2xl"></i>
        </button>
      </div>
      <span class="card-title text-xl font-bold">Report Sheet</span>

      <!-- Default Table -->
      <div id="printTable1">
        <table
          id="report-table"
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
                ID
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Subject
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Course
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Date
              </th>

              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Total of Absent
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
              >
                Total of Present
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(student, index) in students" :key="index">
              <td
                class="px-6 py-2 whitespace-nowrap text-md font-medium text-gray-900"
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
                {{ student.subject }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.course }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.date }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.present }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.absent }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- End Default Table Example -->
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
};
</script>
<style>
@media print {
  body * {
    visibility: hidden;
  }
  #printTable,
  #printTable * {
    visibility: visible;
  }
  #printTable {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
    white-space: nowrap; /* Prevent wrapping */
  }
  /* Adjust specific columns' width */
  .student-name {
    min-width: 150px; /* Adjust as needed */
  }
}
</style>
