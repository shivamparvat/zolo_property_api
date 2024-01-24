const { Schema, model } = require("mongoose");

const propertySchema = new Schema(
  {
    state: {
      type: String,
      required: [true, "State is required"],
    },
    address: {
      type: String,
    },
    status: {
      type: Number,
      enum: [1, 2, 3],
    },
    showVerified: {
      type: Boolean,
      default: false,
    },
    added_by: { type: Number, default: null },
    property_for: {
      type: String,
      enum: ["sell", "rent", "sold"],
      default: null,
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    location: { type: String, required: true },
    property_type: {
      type: String,
      enum: [
        "Shop",
        "Plot",
        "Office",
        "Apartments",
        "House",
        "Villa",
        "Hostel",
        "Pg",
        "Farm",
      ],
      default: null,
    },
    saleable_area: { type: String, default: null },
    carpet_area: { type: String, default: null },
    saleable_area_size_in: {
      type: String,
      enum: ["Feet", "Meters", "Yards", "Bigha", "Acres", "Hectares"],
      default: null,
    },
    carpet_area_size_in: {
      type: String,
      enum: ["Feet", "Meters", "Yards"],
      default: null,
    },
    additional_room: { type: String, default: null },
    expected_price: { type: Number, default: null },
    expected_price_in_sqft: { type: String, default: null },
    negotiable: { type: Number, default: null },
    booking_price: { type: Number, default: null },
    monthly_rent: { type: Number, default: null },
    security_deposit: { type: String, default: null },
    maintance_charge: { type: String, default: null },
    available_from: { type: Date, default: null },
    property_description: { type: String, default: null },
    open_side: { type: String, enum: ["1", "2", "3", "4"], default: null },
    facing_side: {
      type: String,
      enum: [
        "North",
        "South",
        "West",
        "East",
        "Northeast",
        "Northwest",
        "Southwest",
        "Southeast",
      ],
      default: null,
    },
    facing_road_width: { type: String, default: null },
    facing_road_width_in: {
      type: String,
      enum: ["Feet", "Meters"],
      default: null,
    },
    images: [{ type: String, default: null }],
    video: { type: String, default: null },
    room_data: { type: String, default: null },
    bedrooms: { type: String, default: null },
    bathrooms: { type: Number, default: null },
    balconies: { type: Number, default: null },
    additional_facility: { type: String, default: null },
    property_status: {
      type: String,
      enum: ["Ready_to_shift", "Underconstruction"],
      default: null,
    },
    property_age: { type: String, default: null },
    possession_date: { type: Date, default: null },
    description: { type: String, default: null },
    furnishing_status: {
      type: String,
      enum: ["Unfurnished", "Semi_furnished", "Fully_furnished"],
      default: null,
    },
    wardrobe: { type: Number, default: null },
    beds: { type: Number, default: null },
    ac: { type: Number, default: null },
    tv: { type: Number, default: null },
    light: { type: String, default: null },
    fan: { type: String, default: null },
    exhaust_fan: { type: String, default: null },
    boundary_wall: { type: String, default: null },
    additional_furnishing: { type: String, default: null },
    other_facility: { type: String, default: null },
    car_parking_open: { type: Number, default: null },
    car_parking_close: { type: Number, default: null },
    floor: { type: Number, default: null },
    total_floor: { type: Number, default: null },
    overlooking: { type: String, default: null },
    ownershiptype: {
      type: String,
      enum: [
        "Freehold",
        "Power_of_attorney",
        "leasehold",
        "Co_Operative_Society",
      ],
      default: null,
    },
    living_room: { type: String, default: null },
    kitchen: { type: String, default: null },
    master_bedroom: { type: String, default: null },
    bathroom: { type: String, default: null },
    balcony: { type: String, default: null },
    other_bedroom: { type: String, default: null },
    preferred_tenants: { type: String, default: null },
    gender_preference: { type: String, default: null },
    maximum_tentants_allowed: { type: String, default: null },
    work_preference: { type: String, default: null },
    food_preference: { type: String, default: null },
    expected_duration_of_stay: { type: String, default: null },
    special_requirement: { type: String, default: null },
    added_by_type: {
      type: String,
      enum: ["Owner", "Broker", "Admin"],
      default: null,
    },
    views: { type: String, required: true },
    admin_status: {
      type: String,
      enum: ["Pending", "Reject", "Approved"],
      required: true,
    },
  },
  { timestamps: true }
);

const Property = model("property", propertySchema);
module.exports = Property;