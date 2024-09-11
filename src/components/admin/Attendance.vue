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
            >Admin</a
          >
        </li>
        <li class="text-gray-500 select-none px-2">/</li>
        <li class="px-2 font-bold">Attendance Sheet</li>
      </ol>
    </div>
  </div>

  <!-- Filter Section  -->

  <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
    <div class="d-flex flex-wrap mt-2">
      <div class="col-md-3 mb-2 px-2">
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
      <div class="col-md-3 mb-2 px-2">
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
      <div class="col-md-3 mb-3 px-2">
        <div class="">
          <input type="date" class="form-control text-lg h-14" />
        </div>
      </div>
      <div class="col-md-2 mb-3 px-2">
        <div class="">
          <button
            class="px-3 py-3 bg-black rounded text-yellow-400 font-semibold text-lg"
          >
            Generate Sheet
          </button>
        </div>
      </div>

      <!-- Filter Section End  -->

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
                {{ student.subject }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.course }}
              </td>
              <td class="px-6 py-2 whitespace-nowrap text-base">
                {{ student.date }}
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
          subject: "Mathematics",
          course: "Engineering",
          date: "10/09/24",
        },
        {
          name: "Bridie Kessler",
          studId: "2345",
          subject: "Physics",
          course: "Science",
          date: "12/09/24",
        },
        {
          name: "Ashleigh Langosh",
          studId: "3456",
          subject: "Chemistry",
          course: "Medical",
          date: "13/09/24",
        },
        {
          name: "Carmen Waters",
          studId: "4567",
          subject: "English Literature",
          course: "Arts",
          date: "14/09/24",
        },
        {
          name: "George Fry",
          studId: "5678",
          subject: "Computer Science",
          course: "Information Technology",
          date: "15/09/24",
        },
      ],
    };
  },
};
</script>
