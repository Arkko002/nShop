import passport from "passport";
import strategy from "passport-google-oauth20";
import config from "../../config.json";
import Users from "../models/user";


passport.use(new strategy.Strategy({
		clientID: config.oauthId,
		clientSecret: config.oauthSecret,
		callbackURL: "TODO", //TODO
		passReqToCallback: true
	},
		function (request, accessToken, refreshToken, profile, cb) {
			Users.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user);
	});
}));
