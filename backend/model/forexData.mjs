import mongoose from "mongoose";

const schema = mongoose.Schema;

const dataSchema = new schema({
  equity: {
    type: String,
    required: true,
  },

  balance: {
    type: Number,
    required: true,
  },

  // marketWatchTime: {
  //   type: String,
  //   required: true,
  // },
});

const Data = mongoose.model("Data", dataSchema);

export default Data;
