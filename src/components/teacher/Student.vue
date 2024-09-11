<template>
  <div class="">
    <div class="mb-2">
      <h2 class="text-4xl font-bold">Student</h2>
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
        <li class="px-2 font-bold">Student Sheet</li>
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

      <!-- Filter End  -->
      
      <div class="card-body px-2 py-10">
        <span class="card-title text-xl font-bold">Student Sheet</span>

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
                Teacher
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
                {{ student.teacher }}
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
          name: "John Doe",
          studId: "1234",
          subject: "Physics",
          teacher: "Mr. Smith",
        },
        {
          name: "Sarah Connor",
          studId: "5678",
          subject: "Biology",
          teacher: "Dr. Johnson",
        },
        {
          name: "Michael Scott",
          studId: "9101",
          subject: "History",
          teacher: "Ms. Williams",
        },
        {
          name: "Emily Blunt",
          studId: "2345",
          subject: "Chemistry",
          teacher: "Mr. Anderson",
        },
        {
          name: "James Bond",
          studId: "6789",
          subject: "Mathematics",
          teacher: "Prof. Brown",
        },
      ],
    };
  },
};
</script>
