<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';

const emits = defineEmits<{
  (e: 'changeStep'): void;
}>();

const { registerSchema } = useJoiSchemas();
const { months, days, years } = useDate();

const user = ref({
  name: '',
  email: '',
  dateOfBirth: {
    day: '',
    month: '',
    year: '',
  },
});

const submitHandler = (event: FormSubmitEvent<any>) => {
  console.log(event.data);
  emits('changeStep');
};

const isNextButtonDisabled = computed(() => {
  return (
    user.value.name === '' ||
    user.value.email === '' ||
    user.value.dateOfBirth.day === '' ||
    user.value.dateOfBirth.month === '' ||
    user.value.dateOfBirth.year === ''
  );
});
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
        <UFormGroup label="Nombre" name="name">
          <UInput v-model="user.name" size="xl" color="gray" />
        </UFormGroup>
        <UFormGroup label="Correo Electrónico" name="email">
          <UInput v-model="user.email" size="xl" color="gray" />
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
      class="transition-colors"
      size="xl"
      block
      color="gray"
      type="submit"
      :disabled="isNextButtonDisabled"
      >Siguiente</UButton
    >
  </UForm>
</template>
