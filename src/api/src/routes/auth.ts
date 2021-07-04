import express from "express";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

const router = express.Router();

router.use(session({
	secret: "secret", //TODO
	store: MongoStore.create({ client: mongoose.connection.getClient() }),
}));

router.use(passport.initialize());
router.use(passport.session());

router.get("/auth/google",
  passport.authenticate("google", { scope:
      [ "email", "profile" ] }
));

router.get("/auth/google/callback", passport.authenticate("google", {
	successRedirect: "/auth/google/success",
	failureRedirect: "/auth/google/failure"
}));

export default router;
