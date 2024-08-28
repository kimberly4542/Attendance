<template>
  <div class="flex justify-center items-center h-full w-full">
    <div class="text-center">
      <h1 class="text-3xl font-bold">Attendance Taking</h1>
      <h3 class="text-xl mt-2">Scan your Card</h3>
      <div class="flex space-x-10 mt-6">
        <div class="w-64 h-64 bg-gray-400">
          <img
            :src="profileImg"
            alt="Profile Image"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-64 h-64 bg-white"></div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImg from "../components/teacher/scan.jpg"
</script>
