//DASHBOARD LAYOUT I THINK

<script setup lang="ts">
import Navbar from '@/components/teacher/TheNavbar.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<!-- <template>
  <div class="flex">
    <Navbar />
    <Sidebar />
    <main class="flex-1 ml-64 p-20">
      <router-view />
    </main>
  </div>
</template> -->

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar at the top -->
    <Navbar />

    <div class="flex flex-1">
      <!-- Sidebar on the left -->
      <Sidebar />

      <!-- Main content area -->
      <main class="flex-1 ml-64 p-20 bg-yellow-400">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.header-nav {
  @apply flex items-center ml-auto;
}
.sidebar {
  width: 16rem; /* Tailwind1's width for w-64 */
  background-color: black; /* Tailwind's bg-gray-800 */
  /* Tailwind's text-white */
}
.nav-heading {
  font-size: 11px;
  text-transform: uppercase;
  color: #899bbd;
  font-weight: 600;
}
.nav-link:hover {
  color: #1f2937; /* Tailwind's text-gray-900 */
  background-color: #facc15; /* Tailwind's bg-yellow-400 */
}
</style>
