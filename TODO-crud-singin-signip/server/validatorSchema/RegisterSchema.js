import { check } from "express-validator";

export const RegisterSchema = [
  check("name").trim().isAlpha().withMessage("Name Should be Alphabets Only"),

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

  check("email", "email is required").exists().isEmail(),
];
