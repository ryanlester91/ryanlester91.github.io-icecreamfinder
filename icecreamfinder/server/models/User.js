const mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   bcrypt = require('bcrypt'),
   SALT_WORK_FACTOR = 10;
   let UserSchema = new Schema({
    email: { type: String, required: true, autoIndex: { unique: true } },
    password: { type: String, required: true, autoIndex: {unique: true} }
 });
 UserSchema.pre("save", function(next) {
    let user = this;
 // only hash the password if it has been modified (or is new)
 if (!user.isModified('password')) return next();
 // generate a salt
 bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
 });
 });
 //either finds a password match or a mismatch
 UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
 };
 module.exports = mongoose.model("User", UserSchema);

