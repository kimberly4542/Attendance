<template>
  <div class="mb-2">
    <h2 class="text-2xl font-semibold">Add Student</h2>
  </div>
  <div class="">
    <ol class="flex text-gray-600 text-sm m-0 p-0">
      <li class="">
        <a
          href="#"
          class="no-underline hover:no-underline hover:text-gray-600 text-gray-600"
          >Admin</a
        >
      </li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="text-gray-500 select-none px-2">Subject</li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="px-2 font-semibold">Add Student</li>
    </ol>
  </div>

  <div class="col-lg-6">
    <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
      <div class="card-body">
        <h5 class="card-title">Add Student</h5>

        <!-- Vertical Form -->
        <form class="row p-2" @submit.prevent="submitForm">
          <div class="col-12 mb-2">
            <label for="inputName" class="form-label">Student Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label for="inputNumber" class="form-label"
              >Parent's Phone Number</label
            >
            <input
              type="text"
              class="form-control"
              id="inputNumber"
              v-model="form.number"
            />
          </div>
          <div class="col-12">
            <label for="inputCourse" class="form-label">Course</label>
            <input
              type="text"
              class="form-control"
              id="inputCourse"
              v-model="form.course"
            />
          </div>
          <div class="col-12">
            <label for="inputTeacher" class="form-label">Teacher</label>
            <input
              type="text"
              class="form-control"
              id="inputTeacher"
              v-model="form.teacher"
            />
          </div>
          <div class="mt-4">
            <button type="submit" class="mr-2 bg-yellow-400 py-2 px-3 rounded">
              Submit
            </button>
            <button
              type="reset"
              class="mr-2 bg-gray-800 text-white py-2 px-4 rounded"
              @click="resetForm"
            >
              Reset
            </button>
          </div>
        </form>
        <!-- End Vertical Form -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        username: "",
        email: "",
        password: "",
        address: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log("Form submitted", this.form);
    },
    resetForm() {
      this.form = {
        name: "",
        username: "",
        email: "",
        password: "",
        address: "",
      };
    },
  },
};
</script>
