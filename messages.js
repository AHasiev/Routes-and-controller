const { Router } = require("express");

const router = Router();

router.get("/messages", (req, res) => {
  // код вывода сообщений
});

router.post("/messages", (req, res) => {
  // код добавления сообщений
})

module.exports = router;