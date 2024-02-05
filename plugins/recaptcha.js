import VueRecaptchaV3 from 'vue-recaptcha-v3';

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(VueRecaptchaV3, {
    site_key: NuxtApp.$config.public.recaptchaSiteKey,
  });
});
