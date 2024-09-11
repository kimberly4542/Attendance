<template>
  <div class="mb-2">
    <h2 class="text-4xl font-semibold">Add Teacher</h2>
  </div>
  <div class="">
    <ol class="flex text-gray-600 text-lg m-0 p-0">
      <li class="">
        <a
          href="#"
          class="no-underline hover:no-underline hover:text-gray-600 text-gray-500"
          >Admin</a
        >
      </li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="text-gray-500 select-none px-2">Teacher</li>
      <li class="text-gray-500 select-none px-2">/</li>
      <li class="px-2 font-bold">Add Teacher</li>
    </ol>
  </div>

  <div class="col-lg-6">
    <div class="bg-white border-0 shadow-md rounded mt-4 p-3">
      <div class="card-body">


        <!-- Form -->

        <form class="row p-2" @submit.prevent="submitForm">
          <div class="col-12 mb-2">
            <label for="inputName" class="form-label text-lg">First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              v-model="form.name"
            />
          </div>
          <div class="col-12 mb-2">
            <label for="inputName" class="form-label text-lg"
              >Middle Name</label
            >
            <input
              type="text"
              class="form-control"
              id="inputName"
              v-model="form.name"
            />
          </div>
          <div class="col-12 mb-2">
            <label for="inputName" class="form-label text-lg">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              v-model="form.name"
            />
          </div>
          <div class="col-md-6 mb-2">
            <label for="inputUsername" class="form-label text-lg"
              >Username</label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="col-md-6 mb-2">
            <label for="inputPassword" class="form-label text-lg"
              >Password</label
            >
            <input type="password" class="form-control" />
          </div>
          <div class="col-12 mb-2">
            <label for="inputEmail" class="form-label text-lg">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              v-model="form.email"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label text-lg">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              v-model="form.address"
            />
          </div>
          <div class="mt-4 text-base font-semibold">
            <button
              type="submit"
              class="mr-2 bg-yellow-400 py-2 px-3 text-lg rounded"
            >
              Submit
            </button>
            <button
              type="reset"
              class="mr-2 bg-gray-800 text-white py-2 px-4 text-lg rounded"
              @click="resetForm"
            >
              Reset
            </button>
          </div>
        </form>

        <!-- End Form -->

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
