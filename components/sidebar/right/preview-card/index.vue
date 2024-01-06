<script setup lang="ts">
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    :class="twitterBorderColor"
    class="border rounded-xl bg-gray-500 dark:bg-dim-700"
  >
    <h1
      :class="twitterBorderColor"
      class="p-2 text-lg font-extrabold text-gray-900 border-b dark:text-white"
    >
      {{ title }}
    </h1>
    <slot> </slot>
    <div
      :class="defaultTransition"
      class="p-2 cursor-pointer rounded-b-xl hover:bg-gray-100 text-sm text-blue-400 dark:hover:bg-dim-300"
    >
      Show more
    </div>
  </div>
</template>
