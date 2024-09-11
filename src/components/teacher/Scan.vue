<template>
  <div class="flex justify-center items-center h-full w-full">
    <div class="text-left">
      <h1 class="text-4xl font-bold">Attendance Taking</h1>
      <h3 class="text-xl mt-2">Please scan your card.</h3>
      <div class="flex space-x-10 mt-6">
        <div class="bg-gray-400 max-w-md">
          <img
            :src="profileImg"
            alt="Profile Image"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Details Section  -->

        <div class="bg-white shadow-lg rounded-lg p-6 m-4 max-w-md w-full">
          <h3 class="text-xl font-semibold mb-2 text-left">
            Student Name: Brandon Jacob
          </h3>
          <p class="text-gray-700 mb-1 text-base text-left">ID: 1234</p>
          <p class="text-gray-700 mb-1 text-base text-left">
            Subject ID: Math101
          </p>
          <p class="text-gray-700 mb-4 text-base text-left">Time: 08:00 AM</p>
          <div class="flex justify-start">
            <button
              type="submit"
              class="mr-2 bg-yellow-400 py-2 px-4 text-lg font-semibold rounded"
            >
              Done
            </button>
            <button
              type="reset"
              class="mr-2 bg-gray-800 text-white py-2 px-4 text-lg font-semibold rounded"
              @click="resetForm"
            >
              Exit
            </button>
          </div>
        </div>

        <!-- Details Section End  -->
         
      </div>
    </div>
  </div>
</template>

<script setup>
import profileImg from "@/assets/scan.jpg";
</script>
