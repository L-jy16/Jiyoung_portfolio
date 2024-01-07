const express = require("express");
const router = express.Router();

const { Reple } = require("../model/Reple.js");

router.post("/submit", async (req, res) => {
    let temp = {
        reple: req.body.reple,  // 댓글 내용
        nickName: req.body.nickName,    // 댓글 이름
        password: req.body.password,    // 댓글 비번
    }

    try {
        const newReple = new Reple(temp);
        await newReple.save();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});

router.post("/getReple", async (req, res) => {
    try {
        const repleInfo = await Reple.find().exec()
        return res.status(200).json({ success: true, repleList: repleInfo })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ success: false })
    }
})

router.post("/edit", (req, res) => {
    let temp = {
        reple: req.body.reple,
    }
    Reple.findOneAndUpdate({ _id: req.body.repleId }, { $set: temp })
        .exec()
        .then(() => {
            return res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ success: false })
        })
})

router.post("/delete", (req, res) => {
    Reple.deleteOne({ _id: req.body.repleId })
        .exec()
        .then(() => {
            return res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ success: false })
        })
})
module.exports = router;