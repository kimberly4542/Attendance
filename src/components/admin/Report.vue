<template>
  <div class="">
    <div class="mb-2">
      <h2 class="text-4xl font-semibold">Report</h2>
    </div>
    <div class="">
      <ol class="flex text-gray-600 text-lg m-0 p-0">
        <li class="">
          <a
            href="#"
            class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
            >Admin</a
          >
        </li>
        <li class="text-gray-500 selec+t-none px-2">/</li>
        <li class="px-2 font-bold">Report Sheet</li>
      </ol>
    </div>
  </div>

  <div
    class="max-w-6xl w-full mx-auto border-0 shadow-md rounded mt-4 p-3 bg-slate-50"
  >
    <div class="flex mt-2">
      <!-- Filter Section -->
      <div class="w-1/3 p-2">
        <span class="text-lg font-bold mb-2 block">Filter by:</span>
        <div class="col-12 mb-2">
          <input
            type="text"
            class="form-control h-12 w-full text-lg"
            placeholder="ID Number"
            id="idNumber"
          />
        </div>
        <div class="col-12 mb-2">
          <input
            type="text"
            class="form-control h-12 w-full text-lg"
            placeholder="Name"
            id="name"
          />
        </div>
        <div class="col-12 mb-2">
          <select
            class="form-select w-full text-lg text-muted"
            id="section"
            v-model="selectedSection"
            aria-label="Section"
          >
            <option value="" disabled>Section</option>
            <option value="Newton">Newton</option>
            <option value="Celsius">Celsius</option>
            <option value="Zara">Zara</option>
          </select>
        </div>
        <div class="col-12 mb-2">
          <select
            class="form-select w-full text-lg text-muted"
            id="course"
            v-model="selectedSubject"
            aria-label="Subject"
          >
            <option value="" disabled>Subject</option>
            <option value="Advance Java">Advance Java</option>
            <option value="Oregon">Oregon</option>
            <option value="DC">DC</option>
          </select>
        </div>
        <div class="col-12 mb-6">
          <input type="date" class="form-control w-full text-lg text-muted" />
        </div>
        <div class="col-12">
          <button
            class="w-full h-14 bg-black text-yellow-400 rounded text-base font-semibold"
          >
            Generate Record
          </button>
        </div>
      </div>
      <!-- End Filter Section -->

      <!-- Right Column: Table with Scrollbar -->
      <div class="w-2/3 p-2 overflow-auto max-h-96">
        <div class="relative">
          <button
            class="absolute top-0 right-0 rounded text-blue-500"
            @click="printTable1"
          >
            <i class="fa-solid fa-file-arrow-down text-2xl"></i>
          </button>
          <span class="text-xl font-bold mb-2 block">Report Sheet</span>
        </div>

        <div class="overflow-x-auto">
          <div id="printTable1">
            <table
              id="report-table"
              class="mt-2 border border-gray-200 w-full border-collapse"
            >
              <thead class="bg-gray-800 text-yellow-400">
                <tr>
                  <th
                    scope="col"
                    class="px-3 py-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="px-2 py-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    Student Name
                  </th>
                  <th
                    scope="col"
                    class="p-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    USN #
                  </th>
                  <th
                    scope="col"
                    class="px-2 py-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    Year Level
                  </th>
                  <th
                    scope="col"
                    class="p-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    Course
                  </th>
                  <th
                    scope="col"
                    class="p-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    Semester
                  </th>
                  <th
                    scope="col"
                    class="p-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    Total of Absent
                  </th>
                  <th
                    scope="col"
                    class="px-2 py-2 text-center text-base font-bold uppercase tracking-wider"
                  >
                    Total of Present
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(student, index) in students" :key="index">
                  <td
                    class="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-500"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                  >
                    {{ student.name }}
                  </td>
                  <td
                    class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                  >
                    {{ student.usn }}
                  </td>
                  <td
                    class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                  >
                    {{ student.year }}
                  </td>
                  <td
                    class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                  >
                    {{ student.course }}
                  </td>
                  <td
                    class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                  >
                    {{ student.semester }}
                  </td>
                  <td
                    class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                  >
                    {{ student.present }}
                  </td>
                  <td
                    class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                  >
                    {{ student.absent }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- End Table Section With ScrollBar-->
      </div>
    </div>
  </div>

  <div class="bg-slate-50 border-0 shadow-md rounded mt-4 p-3">
    <div class="p-2 overflow-auto max-h-96">
      <div class="relative">
        <button
          class="absolute top-0 right-0 rounded text-blue-500"
          @click="printTable2"
        >
          <i class="fa-solid fa-file-arrow-down text-2xl"></i>
        </button>
        <span class="text-xl font-bold mb-2 block">Whole Record</span>
      </div>

      <!-- Big Table or General Table -->
      <div class="overflow-x-auto">
        <div id="printTable2">
          <table
            id="report-table"
            class="mt-2 border bg-white border-gray-200 w-full border-collapse"
          >
            <thead class="bg-gray-800 text-yellow-400">
              <tr>
                <th
                  scope="col"
                  class="p-3 text-center text-base font-bold uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  class="p-2 text-center text-base font-bold uppercase tracking-wider"
                >
                  Student Name
                </th>
                <th
                  scope="col"
                  class="p-2 text-center text-base font-bold uppercase tracking-wider"
                >
                  USN #
                </th>
                <th
                  scope="col"
                  class="p-2 text-center text-base font-bold uppercase tracking-wider"
                >
                  Year Level
                </th>
                <th
                  scope="col"
                  class="p-2 text-center text-base font-bold uppercase tracking-wider"
                >
                  Course
                </th>
                <th
                  scope="col"
                  class="p-2 text-center text-base font-bold uppercase tracking-wider"
                >
                  Semester
                </th>
                <th
                  scope="col"
                  class="p-2 text-center text-base font-bold uppercase tracking-wider"
                >
                  Total of Absent
                </th>
                <th
                  scope="col"
                  class="p-2 text-center text-base font-bold uppercase tracking-wider"
                >
                  Total of Present
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(student, index) in students" :key="index">
                <td
                  class="px-6 py-1 whitespace-nowrap text-base font-medium text-gray-900 border border-gray-500"
                >
                  {{ index + 1 }}
                </td>
                <td
                  class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                >
                  {{ student.name }}
                </td>
                <td
                  class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                >
                  {{ student.usn }}
                </td>
                <td
                  class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                >
                  {{ student.year }}
                </td>
                <td
                  class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                >
                  {{ student.course }}
                </td>
                <td
                  class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                >
                  {{ student.semester }}
                </td>
                <td
                  class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                >
                  {{ student.absent }}
                </td>
                <td
                  class="px-6 py-1 whitespace-nowrap text-base border border-gray-500"
                >
                  {{ student.present }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--End Big Table or General Table -->
    </div>
  </div>
</template>

<script>
export default {
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
