const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        repleNum: Number,
        reple: String,
        nickName: String,
        password: String,
    },
    { collection: "reples", timestamps: true }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };