export default defineNuxtRouteMiddleware((to, from) => {
  const verificationCode = to.query.code;

  if (!verificationCode) return navigateTo('/login');
});
