export default defineAppConfig({
  ui: {
    formGroup: {
      label: {
        base: 'text-white text-base',
      },
    },
    input: {
      color: {
        gray: {
          outline:
            'shadow-sm bg-[#1a1a1a] text-white ring-[0.5px] ring-inset ring-gray-300 focus:ring-2 focus:ring-white',
        },
      },
      variant: {
        outline: 'text-white bg-[#1a1a1a]',
      },
    },
    button: {
      rounded: 'rounded-full',
      color: {
        gray: {
          solid:
            'bg-blue-600 hover:bg-blue-700 ring-transparent text-white disabled:bg-gray-400',
        },
      },
    },
    select: {
      color: {
        gray: {
          outline:
            'shadow-sm bg-[#1a1a1a] text-white ring-[0.5px] ring-inset ring-gray-300 focus:ring-2 focus:ring-white',
        },
      },
      variant: {
        outline: 'bg-[#1a1a1a]',
      },
    },
    selectMenu: {
      option: {
        color: 'text-white',
        active: 'bg-black',
        selectedIcon: {
          base: 'text-white',
        },
      },
      background: 'bg-[#1a1a1a]',
      ring: 'ring-[0.5px]',
    },
  },
});
