<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';

const emits = defineEmits<{
  (e: 'changeStep'): void;
}>();

const { registerSchema } = useJoiSchemas();
const { months, days, years } = useDate();
const supabase = useSupabaseClient();

const user = ref({
  username: '',
  email: '',
  password: '',
  dateOfBirth: {
    day: '',
    month: '',
    year: '',
  },
});
const loading = ref(false);
const disabled = ref(false);

const isNextButtonDisabled = computed(() => {
  return (
    user.value.username === '' ||
    user.value.email === '' ||
    user.value.dateOfBirth.day === '' ||
    user.value.dateOfBirth.month === '' ||
    user.value.dateOfBirth.year === ''
  );
});

const submitHandler = async (event: FormSubmitEvent<any>) => {
  loading.value = true;
  disabled.value = true;
  const credentials = event.data;

  const { error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        username: credentials.username,
        dateOfBirth: credentials.dateOfBirth,
      },
      emailRedirectTo: 'http://localhost:3000/confirm',
    },
  });

  if (error) {
    loading.value = false;
    disabled.value = false;
    return console.log(error.message);
  }

  emits('changeStep');
};
</script>

<template>
  <UForm
    class="flex flex-col flex-grow px-14 py-4"
    :schema="registerSchema"
    :state="user"
    @submit="submitHandler"
  >
    <h1 class="text-2xl font-bold">Crea tu cuenta</h1>
    <div class="flex flex-col flex-grow justify-between mt-4">
      <div class="flex flex-col gap-y-6">
        <UFormGroup label="Nombre" name="username">
          <UInput v-model="user.username" size="xl" color="gray" />
        </UFormGroup>
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
        <div>
          <h2>Fecha de nacimiento</h2>
          <span class="block text-sm text-zinc-400 leading-[16px]"
            >Esta información no será pública. Confirma tu propia edad, incluso
            si esta cuenta es para una empresa, una mascota u otra cosa.</span
          >
          <div class="grid grid-cols-10 gap-x-4 mt-2">
            <UFormGroup class="col-span-5" label="Mes" name="dateOfBirth.month">
              <USelectMenu
                v-model="user.dateOfBirth.month"
                size="xl"
                :options="months"
                color="gray"
              />
            </UFormGroup>
            <UFormGroup class="col-span-2" label="Día" name="dateOfBirth.day">
              <USelectMenu
                v-model="user.dateOfBirth.day"
                size="xl"
                :options="days"
                color="gray"
              />
            </UFormGroup>
            <UFormGroup class="col-span-3" label="Año" name="dateOfBirth.year">
              <USelectMenu
                v-model="user.dateOfBirth.year"
                size="xl"
                :options="years"
                color="gray"
              />
            </UFormGroup>
          </div>
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
      >Siguiente</UButton
    >
  </UForm>
</template>
