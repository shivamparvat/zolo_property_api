const Joi = require('joi');

exports.signupValidationSchema = Joi.object({
  user_id: Joi.number().optional(),
  oldImage: Joi.string().allow('',null).optional(),
  phone_number: Joi.string().pattern(new RegExp('^[0-9]{10}$')),
  is_active: Joi.number().optional(), 
  password: Joi.string().when('user_id', {
    is: Joi.exist(),
    then: Joi.string().allow('', null).optional(),
    otherwise: Joi.string().min(8).max(20).required(),
  }),
  email: Joi.string().email().when('user_id', {
    is: Joi.exist(),
    then: Joi.string().allow('').optional(),
    otherwise: Joi.string().email().required(),
  }),
  is_deleted : Joi.boolean().optional()
});

exports.loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required()
});


exports.toogleUserValidation = Joi.object({
  user_id: Joi.number().required(),
  is_active: Joi.number().min(0).max(1).required(),
  created_by: Joi.number().required()
});

exports.deleteUserValidation = Joi.object({
  user_id: Joi.number().required(),
});

exports.userList = Joi.object({
  user_id: Joi.number().required(),
});

exports.emailValidation = Joi.object({
  email: Joi.string().email().required()
})
