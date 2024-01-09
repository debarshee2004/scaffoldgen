var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require("passport")
const users = require('./model')


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/oauth/google/redirect",
    scope : ["profile","email"],
    passReqToCallback   : true
  },
  async (request, accessToken, refreshToken, profile, done) => {
    // Finfing for any existing record
    const data = await users.findOne({email:profile.email})
    // If not record find then register the user
    if (!data) {
      await users.create({name:profile.displayName,email:profile.email,picture:profile.picture})
    }
    done(null,profile)
  }
));

// Serialize user data
passport.serializeUser((user,done)=>{
    done(null,user)
})
// Deserialize user data
passport.deserializeUser((user,done) => {
    done(null,user)
})