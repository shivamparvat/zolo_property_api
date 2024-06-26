const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    contact_number: {
      type: String,
      required: [true, "number is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    zip_code: {
      type: String,
      required: [true, "Zip code is required"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Phone = model("phone", phoneSchema);
module.exports = Phone;
