const Response = require("../helper/static/Response");
const {
  model_list,
  model_update,
  model_delete,
  model_add,
  model_one,
  user_property,
} = require("../models/propertyModal");

const { extractRequestData } = require("../helper/static/request-response");

exports.list = async (req, res) => {
  try {
    const postData = extractRequestData(req);
    const response = await model_list(postData);
    return res.status(response.status).json(response);
  } catch (error) {
    return res.json(new Response(500, "F").custom(error.message));
  }
};
exports.one = async (req, res) => {
  try {
    const postData = extractRequestData(req);
    const response = await model_one(postData);
    return res.status(response.status).json(response);
  } catch (error) {
    return res.json(new Response(500, "F").custom(error.message));
  }
};

exports.add = async (req, res) => {
  try {
    const postData = extractRequestData(req);
    const response = await model_add(postData);
    return res.status(response.status).json(response);
  } catch (error) {
    return res.json(new Response(500, "F").custom(error.message));
  }
};

exports.update = async (req, res) => {
  try {
    const postData = extractRequestData(req);
    const response = await model_update(postData);
    return res.status(response.status).json(response);
  } catch (error) {
    return res.json(new Response(500, "F").custom(error.message));
  }
};

exports.delete = async (req, res) => {
  try {
    const postData = extractRequestData(req);
    const response = await model_delete(postData);
    return res.status(response.status).json(response);
  } catch (error) {
    return res.json(new Response(500, "F").custom(error.message));
  }
};
exports.user_property = async (req, res) => {
  try {
    const postData = extractRequestData(req);
    const response = await user_property(postData);
    return res.status(response.status).json(response);
  } catch (error) {
    return res.json(new Response(500, "F").custom(error.message));
  }
};
