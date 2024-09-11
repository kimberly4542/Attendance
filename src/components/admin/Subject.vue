<template>
  <div class="flex justify-between items-center mb-2">
    <h2 class="text-4xl font-bold">Subject</h2>
    <div>
      <router-link to="/AddSubject">
        <button
          class="bg-black text-yellow-400 py-2 px-3 rounded text-lg font-semibold"
        >
          Add Subject
        </button>
      </router-link>
    </div>
  </div>
  <div class="mb-2">
    <ol class="flex text-gray-600 text-lg m-0 p-0">
      <li class="">
        <a
          href="#"
          class="no-underline hover:no-underline hover:text-gray-600 text-gray-500"
          >Admin</a
        >
      </li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="px-2 font-bold">Subject</li>
    </ol>

     <!-- Filter Section -->
    <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
      <div class="d-flex justify-between items-center">
        <div class="card-body">
          <span class="card-title text-xl font-semibold">Current Subjects</span>
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
       <!--End Filter Section -->

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
              Subject Code
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
            >
              Subject Name
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
              Teacher Name
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
          <tr v-for="(teacher, index) in teachers" :key="index">
            <td
              class="px-6 py-2 whitespace-nowrap text-base font-medium text-gray-900"
            >
              {{ index + 1 }}
            </td>

            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.subName }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.course }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.sem }}
            </td>
            <td class="px-6 py-2 whitespace-nowrap text-base">
              {{ teacher.teacher }}
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
      teachers: [
        {
          subName: "C Programming",
          course: "BSIT",
          sem: "1st",
          teacher: "Daryll",
        },
        {
          subName: "Digital Logic",
          course: "BSIT",
          sem: "1st",
          teacher: "Jhonel",
        },
        { subName: "OOP", course: "BSCS", sem: "1st", teacher: "Abalorio" },
      ],
    };
  },
};
</script>

<style></style>
