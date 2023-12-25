<template>
  <div class="h-screen flex flex-col">
    <NuxtLink
      :class="defaultTransition"
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      to="/"
    >
      <div class="w-8 h-8">
        <LogoTweeter />
      </div>
    </NuxtLink>

    <NuxtLink
      :class="defaultTransition"
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      to="/"
    >
      <HomeIcon class="w-5 h-5" />
    </NuxtLink>
  </div>
</template>
<script setup>
import { HomeIcon } from '@heroicons/vue/24/solid';
const { defaultTransition } = useTailwindConfig();
</script>
