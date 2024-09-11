<template>
  <div class="flex justify-between items-center mb-2">
    <h2 class="text-4xl font-bold">Student</h2>
    <div>
      <router-link to="/AddStudent">
        <button
          class="bg-black text-yellow-400 text-lg font-semibold py-2 px-3 rounded"
        >
          Add Student
        </button>
      </router-link>
    </div>
  </div>
  <div class="mb-2">
    <ol class="flex text-gray-600 text-lg m-0 p-0">
      <li class="">
        <a
          href="#"
          class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
          >Admin</a
        >
      </li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="px-2 font-bold">Student</li>
    </ol>


     <!-- Filter Section -->
    <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
      <div class="d-flex justify-between items-center">
        <div class="card-body">
          <span class="card-title text-xl font-bold">Student Sheet</span>
        </div>
        <div class="search-bar">
          <form
            class="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
              class="border rounded py-2 px-3 text-lg"
            />
          </form>
        </div>
      </div>
       <!-- End Filter Section -->

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
              Course
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
              Contact No.
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
            >
              Teacher
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="(student, index) in students" :key="index">
            <td
              class="px-6 py-2 whitespace-nowrap text-base font-medium text-gray-900"
            >
              {{ index + 1 }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ student.name }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ student.id }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ student.course }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ student.subject }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ student.contact }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ student.teacher }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              <button
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1"
              >
                <i class="fa-solid fa-check"></i>
              </button>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
          name: "Emma Watson",
          id: 1234,
          course: "Biology",
          subject: "Genetics",
          contact: "09123456789",
          teacher: "Mr. Allen",
        },
        {
          name: "Lucas Miller",
          id: 2345,
          course: "Computer Science",
          subject: "Data Structures",
          contact: "09987654321",
          teacher: "Ms. Johnson",
        },
        {
          name: "Sophia Turner",
          id: 3456,
          course: "Physics",
          subject: "Quantum Mechanics",
          contact: "09781234567",
          teacher: "Dr. Parker",
        },
        {
          name: "James Harris",
          id: 4567,
          course: "Mathematics",
          subject: "Calculus",
          contact: "09562347891",
          teacher: "Prof. Smith",
        },
        {
          name: "Olivia Martinez",
          id: 5678,
          course: "Psychology",
          subject: "Cognitive Psychology",
          contact: "09123456987",
          teacher: "Dr. Williams",
        },
      ],
    };
  },
};
</script>


