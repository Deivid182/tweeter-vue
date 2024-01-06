<script setup lang="ts">

const { defaultTransition, twitterBorderColor } = useTailwindConfig();

const wrappedClasses = computed(() => {
  return `${twitterBorderColor} ${defaultTransition}`
})

</script>
<template>
  <div 
    :class="wrappedClasses"
    class="p-3 hover:bg-gray-100 dark:hover:bg-dim-300 border-b border-b-gray-100">
    <slot>
      
    </slot>
  </div>
</template>
