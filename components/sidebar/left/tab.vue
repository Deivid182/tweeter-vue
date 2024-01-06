<script setup lang="ts">
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})

const textClasses = computed(() => {
  return props.active ? 'font-semibold' : 'font-normal'
})

</script>
<template>
  <NuxtLink to="#" class="flex text-black items-center gap-2 p-2 rounded-full hover:bg-gray-200 w-min dark:hover:bg-dim-200 dark:text-white">
    <div class="w-6 h-6 text-dark" :class="defaultTransition">
      <slot name="icon"></slot>
    </div>
    <div class="text-lg hidden xl:flex" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </NuxtLink>
</template>
