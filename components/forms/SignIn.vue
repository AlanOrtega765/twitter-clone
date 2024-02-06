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

const signInOAuth = async (provider: any) => {
  const {  error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {},
  });

  if (error) return console.log(error);
};
</script>

<template>
  <div>
    <UForm
      class="py-4"
      :schema="loginSchema"
      :state="user"
      @submit="submitHandler"
    >
      <h1 class="text-2xl font-bold">Iniciar Sesión</h1>
      <div class="ustify-between mt-4">
        <div class="flex flex-col gap-y-4">
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
    <div class="flex items-center gap-x-4">
      <div class="h-[0.5px] w-full bg-white/40"></div>
      <span class="text-center text-white/40 text-sm">o</span>
      <div class="h-[0.5px] w-full bg-white/40"></div>
    </div>

    <div class="flex gap-x-4 mt-4">
      <button
        class="flex items-center justify-center gap-x-4 w-[300px] py-3 rounded-full bg-white hover:bg-gray-200 transition-colors text-black"
        @click="signInOAuth('google')"
      >
        <Icon name="logos:google-icon" size="24" />
        <span class="text-sm font-medium">Iniciar Sesión con Google</span>
      </button>
      <button
        class="flex items-center justify-center gap-x-4 w-1/2 py-3 rounded-full bg-white hover:bg-gray-200 transition-colors text-black"
      >
        <Icon name="logos:apple" size="24" />
        <span class="text-sm font-medium">Iniciar Sesión con Apple</span>
      </button>
    </div>
  </div>
</template>
