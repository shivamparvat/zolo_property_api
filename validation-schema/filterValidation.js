const Joi = require("joi");

exports.filterMapValidation = Joi.object({
  limit: Joi.number().default(5),
  offset: Joi.number().default(0),
  startDate: Joi.date(),
  radius: Joi.number().positive().default(10000),
  coordinates: Joi.array().items(Joi.number()).min(2).max(2),
  endDate: Joi.date(),
  orderBy: Joi.string(),
});

exports.filterValidation = Joi.object({
  limit: Joi.number().default(5),
  offset: Joi.number().default(0),
  startDate: Joi.date(),
  endDate: Joi.date(),
  orderBy: Joi.string(),
});