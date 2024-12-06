// import { NextFunction, Request, Response } from "express";
import { checkSchema } from "express-validator";
import { validate } from "@/utils/validation";
import userService from "@/services/user.service";

export const loginvalidator = (req: any, res: any, next: any) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      message: 'Missing email or password'
    })
  }

  next()

}

export const registerValidator = validate(checkSchema({
  name: {
    notEmpty: true,
    isLength: {
      options: {
        min: 1,
        max: 100
      }
    }
  },

  email: {
    notEmpty: true,
    isEmail: true,
    trim: true,
    custom: {
      options: async (value) => {
        const result = await userService.checkEmailExist(value)
        if (result) {
          throw new Error('Email is alredy exist')
        }

        return true
      }
    }
  },

  password: {
    notEmpty: true,
    isLength: {
      options: {
        min: 6,
        max: 100
      },
      errorMessage: "taichodien"
    },

  },

  confirm_password: {
    notEmpty: true,
    isLength: {
      options: {
        min: 6,
        max: 100
      }
    },
    isStrongPassword: {
      options: {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1
      }
    }
  },
  date_of_birth: {
    isISO8601: {
      options: {
        strict: true,
        strictSeparator: true
      }
    }
  }
}))