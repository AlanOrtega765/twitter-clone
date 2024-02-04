export default defineAppConfig({
  ui: {
    formGroup: {
      label: {
        base: 'text-white text-lg',
      },
    },
    input: {
      color: {
        gray: {
          outline:
            'shadow-sm bg-white/10 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-white',
        },
      },
    },
  },
});
