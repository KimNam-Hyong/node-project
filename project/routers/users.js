const express = require("express");
const router = express.Router();

router.get("/users/register", async (req, res) => {
    res.render("/users/register", { title: "회원가입" });
});

module.exports = router;