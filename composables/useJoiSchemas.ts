import Joi from 'joi';

export const useJoiSchemas = () => {
  const registerSchema = Joi.object({
    email: '',
    password: '',
  });

  return { registerSchema };
};
