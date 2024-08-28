<template>
  <div
    class="sidebar bg-gray-800 text-white mt-14 w-64 min-h-screen fixed flex-col justify-between"
  >
    <!-- <ul class="mt-6">
      <li v-for="link in filteredLinks.ungrouped" :key="link.name">
        <a :href="link.url">
          <i :class="link.icon" class="mr-2"></i>
          {{ link.name }}</a
        >
      </li>
    </ul> -->

    <ul class="p-6">
      <li v-for="link in filteredLinks.ungrouped" :key="link.name">
        <router-link :to="link.url" class="flex items-center p-2">
          <i :class="link.icon" class="mr-2"></i>
          {{ link.name }}
        </router-link>
      </li>
    </ul>

    <div
      v-for="group in filteredLinks.grouped"
      :key="group.groupName"
      class="link-group text-gray-400"
    >
      <h1 class="text-xs ml-3 uppercase">{{ group.groupName }}</h1>
      <!-- <ul>
        <li v-for="link in group.links" :key="link.name">
          <a :href="link.url">
            <i :class="link.icon" class="mr-2"></i>
            {{ link.name }}
          </a>
        </li>
      </ul> -->

      <ul class="p-6">
        <li v-for="link in group.links" :key="link.name">
          <router-link :to="link.url" class="flex items-center p-2">
            <i :class="link.icon" class="mr-2"></i>
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <div
      class="flex items-center border-t border-gray-700 cursor-pointer"
      @click="logout"
    >
      <div class="px-6 mt-4">
        <i class="fa-solid fa-arrow-right-from-bracket mx-2"></i>
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed } from 'vue'
// import { links, RoleLinks } from '@/types/navigation'

import { useStore } from "vuex";
// import { ref, computed } from 'vue'
import { computed } from "vue";
import type { RoleLinks } from "@/types/navigation";
import { links } from "@/types/navigation";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const logout = () => {
  localStorage.removeItem("authToken"); // Example: clearing auth token from localStorage
  store.dispatch("logout");

  // Redirect to login or home page
  router.push({ path: "/" }); // Assuming you have a route named 'Login'
};

// const userRole = ref<'admin' | 'teacher'>('admin')
const userRole = computed(() => store.getters.userRole);

const filteredLinks = computed((): RoleLinks => {
  return links[userRole.value] || { ungrouped: [], grouped: [] };
});
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>
