const Emi = require("../Schema/emiSchema");
const Response = require("../helper/static/Response");
const { authHandler } = require("../helper/static/messages");
const {
  handleError,
  buildDynamicQuery,
  DeleteRecordById,
  UpdateRecordById,
  AddRecord,
} = require("../utils/utils");
const {
  updateValidation,
  addValidation,
} = require("../validation-schema/emiValidation");
const { filterValidation } = require("../validation-schema/filterValidation");

// ################################################
// #               Emi list                       #
// ################################################

exports.model_list = async (postData) => {
  const query = {};
  const sortOptions = { limit: 1 };
  const searchFields = ["emi", "limit"];
  const removeKey = ["host"];
  removeKey.map((key) => delete postData[key]);
  try {
    const { error, value } = filterValidation.validate(postData);
    if (error) {
      return handleError(400, error.details[0].message);
    }
    const { limit, offset, startDate, endDate, search, orderBy } = value;
    Object.assign(
      query,
      buildDynamicQuery(searchFields, search, startDate, endDate)
    );
    if (orderBy) sortOptions["limit"] = orderBy; // 1 for ascending, -1 for descending

    const total = await Emi.countDocuments(query);
    const list =
      (await Emi.find(query)
        .limit(limit)
        .skip(offset)
        .sort(sortOptions)
        .exec()) || [];

    const pegination = {
      limit,
      offset,
      total,
    };
    return new Response(200, "T", { list, pegination }).custom("Tax list");
  } catch (error) {
    return new Response(400, "F").custom(error.message);
  }
};

// ################################################
// #               Emi Add                        #
// ################################################

exports.model_add = async (postData) => {
  try {
    const query = {
      $or: [
        { limit: postData.limit },
        // , { emi: value.emi }
      ],
    };
    return AddRecord(Emi, postData, query, addValidation, "EMI");
  } catch (error) {
    return new Response(400, "F").custom(error.message);
  }
};

// ################################################
// #               Emi Update                     #
// ################################################

exports.model_update = async (postData) => {
  try {
    const removeKey = ["host"];
    removeKey.map((key) => delete postData[key]);
    return UpdateRecordById(Emi, postData, updateValidation, "EMI");
  } catch (error) {
    return new Response(400, "F").custom(error.message);
  }
};

// ################################################
// #               Emi delete                     #
// ################################################

exports.model_delete = async (postData) => {
  try {
    return DeleteRecordById(Emi, postData.id, "EMI");
  } catch (error) {
    return new Response(400, "F").custom(error.message);
  }
};