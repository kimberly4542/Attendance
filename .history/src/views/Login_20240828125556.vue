<template>
  <div
    class="min-h-screen flex items-center justify-center bg-yellow-400 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="flex w-full max-w-6xl mx-auto">
      <!-- Left Side: Headings and Paragraphs -->
      <div class="w-1/2 p-10">
        <h2 class="text-5xl text-customGray">Attendance</h2>
        <h2 class="text-4xl font-semibold text-customGray">
          Management System
        </h2>
        <p class="mt-4 text-customGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>
        <p class="mt-4 text-customGray">
          Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
          venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
        </p>
      </div>

      <!-- Right Side: Login Form -->
      <div class="w-1/2 p-10 bg-white shadow-md rounded-md">
        <form class="space-y-6" @submit.prevent="login">
          <div class="flex">
            <div
              class="flex mr-4 justify-start items-center border rounded-md w-full p-2 bg-black text-yellow-400"
            >
              <label for="teacher" class="text-sm flex items-center">
                <input
                  type="radio"
                  id="teacher"
                  v-model="user"
                  name="user"
                  value="teacher"
                  class="mr-2"
                />
                <span class="text-sm">Teacher</span>
              </label>
            </div>
            <div
              class="flex items-center justify-start border rounded-md w-full p-2 bg-black text-yellow-400"
            >
              <label for="admin" class="text-sm flex items-center">
                <input
                  type="radio"
                  id="admin"
                  v-model="user"
                  name="user"
                  value="admin"
                  class="mr-2"
                />
                <span class="text-sm">Admin</span>
              </label>
            </div>
          </div>

          <div>
            <span>Username</span>
            <div class="mb-2">
              <input
                id="username"
                v-model="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                class="mt-2 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <span>Password</span>
            <div>
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="mt-2 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div class="flex">
            <label for="rememberMe" class="text-sm flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                v-model="rememberMe"
                name="rememberMe"
                class="mr-2"
              />
              <span class="text-sm">Remember me</span>
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-400 bg-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

const username = ref("");
const password = ref("");
// const user = ref('')
// const user = ref<'admin' | 'teacher'>('')
const user = ref<"admin" | "teacher" | null>(null);
const rememberMe = ref(false);
const router = useRouter();
const store = useStore();

// const login = () => {
//   if (validateCredentials()) {
//     if (user.value === 'teacher') {
//       router.push({ name: 'Dashboard' }) // Default layout for teacher
//     } else if (user.value === 'admin') {
//       router.push({ name: 'Dashboard' }) // Redirect to admin layout
//     }
//   } else {
//     alert('Invalid credentials')
//   }
// }

// const login = () => {
//   if (validateCredentials()) {
//     store.dispatch("login", user.value);

//     router.push({ name: "Dashboard" });
//   } else {
//     alert("Invalid credentials");
//   }
// };

const login = () => {
  if (validateCredentials()) {
    store.dispatch('login', user.value);

    // Navigate to the appropriate dashboard based on user role
    if (user.value === 'teacher') {
      router.push({ path: '/teacherDashboard' });
    } else if (user.value === 'admin') {
      router.push({ path: '/adminDashboard' });
    }
  } else {
    alert('Invalid credentials');
  }
};

const validateCredentials = () => {
  const validCredentials = {
    teacher: { username: "teacherUsername", password: "teacherPassword" },
    admin: { username: "adminUsername", password: "adminPassword" },
  };

  return (
    user.value in validCredentials &&
    username.value ===
      validCredentials[user.value as "teacher" | "admin"].username &&
    password.value ===
      validCredentials[user.value as "teacher" | "admin"].password
  );
};

// const validateCredentials = () => {
//   const validCredentials = {
//     teacher: { username: 'teacherUsername', password: 'teacherPassword' },
//     admin: { username: 'adminUsername', password: 'adminPassword' }
//   }

//   return (
//     // validCredentials[user.value] &&
//     // username.value === validCredentials[user.value].username &&
//     // password.value === validCredentials[user.value].password

//     user.value in validCredentials && // Ensure the user value is a valid key
//     username.value === validCredentials[user.value as 'teacher' | 'admin'].username &&
//     password.value === validCredentials[user.value as 'teacher' | 'admin'].password
//   )
// }
</script>

<style scoped>
.text-customGray {
  color: #1e1e1e;
}
</style>
