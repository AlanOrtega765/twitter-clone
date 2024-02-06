<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';

const emits = defineEmits<{
  (e: 'changeStep'): void;
}>();

const { loginSchema } = useJoiSchemas();
const supabase = useSupabaseClient();

const user = ref({
  email: '',
  password: '',
});
const loading = ref(false);
const disabled = ref(false);

const isNextButtonDisabled = computed(
  () => user.value.email === '' || user.value.password === ''
);

const submitHandler = async (event: FormSubmitEvent<any>) => {
  loading.value = true;
  disabled.value = true;

  const credentials = event.data;

  const { error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    loading.value = false;
    disabled.value = false;
    return console.log(error);
  }

  loading.value = false;
  navigateTo('/');
};
</script>

<template>
  <UForm
    class="flex flex-col flex-grow px-14 py-4"
    :schema="loginSchema"
    :state="user"
    @submit="submitHandler"
  >
    <h1 class="text-2xl font-bold">Iniciar Sesión</h1>
    <div class="flex flex-col flex-grow mt-4">
      <div class="gap-y-4">
        <div class="flex flex-col gap-y-6">
          <UFormGroup label="Correo Electrónico" name="email">
            <UInput v-model="user.email" size="xl" color="gray" />
          </UFormGroup>
          <UFormGroup label="Contraseña" name="password">
            <UInput
              v-model="user.password"
              size="xl"
              color="gray"
              type="password"
            />
          </UFormGroup>
        </div>
      </div>
    </div>
    <UButton
      class="transition-colors mt-10"
      size="xl"
      block
      color="gray"
      type="submit"
      :loading="loading"
      :disabled="isNextButtonDisabled ? isNextButtonDisabled : disabled"
      >Ingresar</UButton
    >
  </UForm>
</template>
