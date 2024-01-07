<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: ''
  },
  typeInput: {
    type: String,
    default: 'text'
  }
});

defineEmits(['update:modelValue'])
</script>
<template>
  <div>
    <label
      for=""
      v-if="label"
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <input
      @input="event => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
      :type="typeInput"
      :value="modelValue"
      :placeholder="placeholder"
      class="bloxk px-4 w-full bg-white border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
</template>
