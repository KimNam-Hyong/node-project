const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("/", { title: "홈페이지" });
});

module.exports = router;