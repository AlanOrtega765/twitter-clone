export const useDate = () => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const days = Array.from({ length: 31 }, (_, index) => (1 + index).toString());

  const years = computed(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return Array.from({ length: 100 }, (_, index) =>
      (currentYear - index).toString()
    );
  });

  return { months, days, years };
};
