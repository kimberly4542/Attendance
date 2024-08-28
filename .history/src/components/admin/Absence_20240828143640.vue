<template>
  <div class="">
    <div class="mb-2">
      <h2 class="text-2xl font-semibold">Absence</h2>
    </div>
    <div class="">
      <ol class="flex text-gray-600 text-sm m-0 p-0">
        <li class="">
          <a href="#" class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
            >Admin</a
          >
        </li>
        <li class="text-gray-500 select-none px-2">/</li>
        <li class="px-2 font-semibold">Absence</li>
      </ol>
    </div>
  </div>
  <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
    <div class="d-flex flex-wrap mt-2">
      <div class="card-body p-3">
        <span class="card-title text-lg font-semibold">Absence Records</span>

        <!-- Default Table -->
        <table class="mt-2 table-auto w-full border-collapse border border-gray-200">
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
                Course
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
                Absence Reason
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Absence For
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(student, index) in students" :key="index">
              <td class="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">{{ student.name }}</td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ student.course }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ student.semester }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ student.reason }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ student.days }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                <button
                  class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1"
                >
                  <i class="fa-solid fa-check"></i>
                </button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Default Table Example -->
      </div>
    </div>
  </div>

  <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
    <div class="d-flex flex-wrap mt-2">
      <div class="card-body p-3">
        <span class="card-title text-lg font-semibold">Attendance Sheet</span>

        <!-- Default Table -->
        <table class="mt-2 table-auto w-full border-collapse border border-gray-200">
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
                Course
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
                Absence Reason
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Absence For
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(students2, index) in students" :key="index">
              <td class="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ students2.name }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ students2.course }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ students2.semester }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ students2.reason }}
              </td>
              <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">
                {{ students2.days }}
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
      selectedSubject: '',
      selectedSection: '',
      selectedSubject3: '',
      students: [
        { name: 'Brandon Jacob', course: 'BSIT', semester: 'First', reason: 'Sick', days: '1' },
        { name: 'Bridie Kessler', course: 'BSIT', semester: 'First', reason: 'Sick', days: '1' },
        { name: 'Ashleigh Langosh', course: 'BSIT', semester: 'First', reason: 'Sick', days: '1' }
      ],
      selectedSection2: '',
      students2: [
        { name: 'Brandon Jacob', course: 'BSIT', semester: 'First', reason: 'Sick', days: '1' },
        { name: 'Bridie Kessler', course: 'BSIT', semester: 'First', reason: 'Sick', days: '1' },
        { name: 'Ashleigh Langosh', course: 'BSIT', semester: 'First', reason: 'Sick', days: '1' }
      ]
    }
  }
}
</script>
