<script setup>
const darkMode = ref(true);
</script>
<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-black">
      <div v-if="false" class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto lg:max-w-[2560px] sm:px-6 lg:px-8 lg:gap-8"
        >
          <!-- left sidebar -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!-- Main content -->
          <main class="col-span-12 bg-red-200 md:col-span-8 xl:col-span-6">
            <RouterView />
          </main>

          <!-- Right Sidebar -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
      <div class="v-else">
        <AuthPage />
      </div>
    </div>
  </div>
</template>
