import { validationResult } from "express-validator";
import User from "../models/User.js";
import { jsonGenerate } from "../utils/helpers.js";
import { JWT_TOKEN_SECRET, statusCode } from "../utils/constants.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const Login = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Username or Password is Incurrect"
        )
      );
    }
    const verified = bcrypt.compareSync(password, user.password);

    if (!verified) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Username or Password is Incurrect"
        )
      );
    }
    const token = Jwt.sign({ userId: user._id }, JWT_TOKEN_SECRET);
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Login Successful", {
        userId: user._id,
        token: token,
      })
    );
  }
  res.json(
    jsonGenerate(
      statusCode.VALIDATION_ERROR,
      "Validation error",
      errors.mapped()
    )
  );
};
export default Login;
