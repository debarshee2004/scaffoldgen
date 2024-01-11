import passport from 'passport';
import { Strategy } from 'passport-google-oauth2'

const authProvider = () => {
  passport.use(new Strategy({
    clientID: process.env.GOOGLE_OAUTH_ID,
    clientSecret: process.env.GOOGLE_OAUTH_SECRET,
    callbackURL: "http://localhost:4000/oauth2/redirect/google",
    passReqToCallback: true
  },
    function (request, accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
      console.log(request)
      done(null, profile)
    }
  ))
  
  passport.serializeUser((user, done) => {
    done(null, user)
  })
  
  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}

export default authProvider