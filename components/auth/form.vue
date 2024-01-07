<script setup lang="ts">
import useAuth from '~/composables/use-auth';
const data = reactive({
  email: '',
  password: '',
  isLoading: false
})

const { login } = useAuth()

const handleSubmit = async () => {
  try {
    data.isLoading = true
    await login({email: data.email, password: data.password})
  } catch (error) {
    console.log(error)
  } finally {
    data.isLoading = false
  }
}

</script>
<template>
  <div>
    <form 
      @submit.prevent="handleSubmit"
      class="pt-5 space-y-6">
      <UiInput
        label="Email"
        placeholder="Email"
        type-input="email"
        v-model="data.email"
      />
      <UiInput
        label="Password"
        placeholder="*********"
        type-input="text"
        v-model="data.password"
      />
      <button 
        class="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit">
        Log in
      </button>
    </form>
  </div>
</template>
