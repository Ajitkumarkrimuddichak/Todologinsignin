import { check } from "express-validator";

export const LoginSchema = [
  check("username", "username is Required")
    .exists()
    .isAlphanumeric()
    .withMessage("Username should be Alphanumeric character only")
    .trim()
    .isLength({ min: 6, max: 32 }),

  check("password", "Password is required")
    .exists()
    .isLength({ min: 6, max: 20 })
    .trim(),
];
