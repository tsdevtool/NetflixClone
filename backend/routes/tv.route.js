import express from "express";
import {
  getSimilarTvs,
  getTrendingTv,
  getTvsByCategory,
  getTvsDetails,
  getTvsTrailers,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvsTrailers);
router.get("/:id/details", getTvsDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

export default router;
