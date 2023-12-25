<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-gray-900">
      <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto lg:max-w-[1440px] sm:px-6 lg:px-8 lg:gap-5">
  
          <!-- left sidebar -->
          <div class="hidden lg:block sm:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- Main content -->
          
          <!-- right sidebar -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const darkMode = ref(true)

</script>