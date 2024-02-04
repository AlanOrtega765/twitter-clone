import Joi from 'joi';

export const useJoiSchemas = () => {
  const registerSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Debes ingresar un nombre.',
      'any.required': 'El nombre es obligatorio.',
    }),
    email: Joi.string()
      .email({
        tlds: {
          allow: false,
        },
      })
      .required()
      .messages({
        'string.email': 'Debes ingresar un correo electrónico válido.',
        'string.empty': 'Debes ingresar un correo electrónico.',
        'string.pattern.base':
          'El correo electrónico ingresado debe ser del formato ejemplo@alumnos.uta.cl',
        'any.required': 'El correo electrónico es obligatorio.',
      }),
    dateOfBirth: Joi.object({
      day: Joi.string().messages({
        'string.empty': '',
      }),
      month: Joi.string().messages({
        'string.empty': '',
      }),
      year: Joi.string().messages({
        'string.empty': '',
      }),
    }),
  });

  return { registerSchema };
};
