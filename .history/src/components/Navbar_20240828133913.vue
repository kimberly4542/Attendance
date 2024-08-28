<template>
  <header class="header fixed top-0 flex items-center w-full bg-black z-10">
    <div class="flex items-center justify-between w-full px-4">
      <a href="/" class="flex items-center no-underline hover:no-underline">
        <span class="flex-shrink-0 text-2xl font-bold text-yellow-400"
          >Attendify</span
        >
      </a>

      <nav class="header-nav">
        <ul class="flex items-center justify-between space-x-6 w-full">
          <!-- Notification Dropdown -->
          <li class="relative mt-3">
            <a
              class="nav-icon relative"
              href="#"
              @click.prevent="toggleDropdown('notifications')"
            >
              <i class="fa-regular fa-bell text-white text-xl"></i>
              <span
                class="absolute left-2 bottom-3 badge bg-primary text-white rounded-md text-xs px-1.0 py-0.75"
                >4</span
              >

              <!-- <span class="absolute top-0 right-1 left-6 translate-y-1/4  badge bg-primary text-white rounded-md text-xs px-1 py-0.5">4</span> -->
            </a>
          </li>

          <!-- Messages Dropdown -->
          <li class="nav-item dropdown relative mt-3">
            <a
              class="nav-link nav-icon relative"
              href="#"
              @click.prevent="toggleDropdown('messages')"
            >
              <i class="fa-regular fa-message text-white text-xl"></i>
              <!-- <span class="badge bg-success text-white rounded-full text-xs">3</span> -->
              <span
                class="absolute left-2 bottom-3.5 badge bg-success text-white rounded-md text-xs px-1.0 py-0.75"
                >3</span
              >
            </a>
          </li>

          <!-- Profile Dropdown -->
          <li class="nav-item dropdown relative top-2">
            <a
              class="nav-profile flex items-center no-underline hover:no-underline"
              href="#"
              @click.prevent="toggleDropdown('profile')"
            >
              <img
                src="../"
                alt="Profile"
                class="w-9 h-9 rounded-full"
              />
              <span class="md:block ml-2 text-yellow-400">K. Anderson</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header-nav {
  height: auto;
}

.nav-heading {
  font-size: 11px;
  text-transform: uppercase;
  color: #899bbd;
  font-weight: 600;
}
</style>
