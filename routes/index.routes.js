const { Router } = require("express");

const categoryRouter = require("./category.routes");
const descriptionRouter = require("./description.routes");
const dictionaryRouter = require("./dictionary.routes");
const author_socialRouter = require("./Author_Social.routes");
const authorRouter = require("./author.routes");
const desc_qaRouter = require("./desc_QA.routes");
const desc_topicRouter = require("./desc_topic.routes");
const mediaRouter = require("./media.routes");
const question_answerRouter = require("./question_answer.routes");
const socialRouter = require("./social.routes");
const synonymRouter = require("./synonym.routes");
const tagRouter = require("./tag.routes");
const topicRouter = require("./topic.routes");
const adminRouter = require("./admin.routes");
const userRouter = require("./user.routes");
const responseRouter = require("./responses.routes");
const router = Router();

router.use(responseRouter);
router.use("/category", categoryRouter);
router.use("/description", descriptionRouter);
router.use("/dictionary", dictionaryRouter);
router.use("/author_social", author_socialRouter);
router.use("/author", authorRouter);
router.use("/desc_qa", desc_qaRouter);
router.use("/desc_topic", desc_topicRouter);
router.use("/media", mediaRouter);
router.use("/question_answer", question_answerRouter);
router.use("/social", socialRouter);
router.use("/synonym", synonymRouter);
router.use("/tag", tagRouter);
router.use("/topic", topicRouter);
router.use("/admin", adminRouter);
router.use("/user", userRouter);
module.exports = router;
