import { z } from 'zod'

export const Username = z
  .string()
  .min(2, 'Слишком короткое имя, минимум 2 символа')
  .max(20, 'Слишком длинное имя, максимум 20 символов')
  .regex(
    /^[\wа-яё]+$/gi,
    'Имя может содержать только кириллицу, латиницу, цифры и _',
  )