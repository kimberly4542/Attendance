<template>
  <div class="flex justify-between items-center mb-2">
    <h2 class="text-4xl font-bold">Teacher</h2>
    <div>
      <router-link to="/AddTeacher">
        <button
          class="bg-black text-yellow-400 py-2 px-3 rounded text-lg font-semibold"
        >
          Add Teacher
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
      <li class="px-2 font-bold text-lg">Teacher</li>
    </ol>

    <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
      <div class="d-flex justify-between items-center">
        <div class="card-body">
          <span class="card-title text-xl font-semibold">Teacher Sheet</span>
        </div>

         <!-- Search Section -->
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
        <!-- Search Section -->

      </div>

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
              Teacher Name
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
              Email
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
            >
              Username
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
            >
              Password
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
          <tr v-for="(teacher, index) in students" :key="index">
            <td
              class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              {{ index + 1 }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.name }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.id }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.email }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.username }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.password }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              <button
                class="text-black text-xl font-bold py-1 px-2 rounded mr-1"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button class="text-red-500 text-xl font-bold py-1 px-2 rounded">
                <i class="fa-regular fa-trash-can"></i>
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
          name: "Brandon Jacob",
          id: "1234",
          email: "brandonjacob@gmail.com",
          username: "brandon",
          password: "1234brandon",
        },
        {
          name: "Bridie Kessler",
          id: "2345",
          email: "bridiekessler@gmail.com",
          username: "bridie",
          password: "1234bridie",
        },
        {
          name: "Ashleigh Langosh",
          id: "3456",
          email: "ashleighLangosh@gmail.com",
          username: "ashleigh",
          password: "1234ashleigh",
        },
        {
          name: "Carmen Waters",
          id: "5678",
          email: "carmenWaters@example.com",
          username: "carmenw",
          password: "carmenPass5678",
        },
        {
          name: "George Fry",
          id: "6789",
          email: "georgeFry@example.com",
          username: "georgef",
          password: "georgePass6789",
        },
      ],
    };
  },
};
</script>

<style></style>
