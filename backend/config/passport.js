const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


const users = new Map();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.get(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const existingUser = users.get(profile.id);

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails?.[0]?.value || null,
        photo: profile.photos?.[0]?.value || null,
      };

      users.set(profile.id, newUser);
      done(null, newUser);
    }
  )
);
