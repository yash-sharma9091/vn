var mongoose      = require('mongoose'),
  Schema          = mongoose.Schema,
  path            = require('path'),
  uniqueValidator = require('mongoose-unique-validator'),
  config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
  crypto          = require('crypto');



var UserSchema  = new Schema({
  
  profile_image:{
    name: {
      type: String,
      default: 'no-image.jpg'
    },
    path: {
      type: String,
      default: 'images/'
    },
    original_name:  {
      type: String,
      default: 'no-image.jpg'
    }
  },

  name: {
    type: String,
    required: 'Name can not be empty.'   
  },
  
  role: {
    type: String,
  },
  
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: 'The Email address you have entered already exists.',
    uniqueCaseInsensitive:true,
    required: 'Email address can not be empty.',
    validate: {
      validator: function(email) {
        return /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
      },
      message: '{VALUE} is not a valid email address'
    }
  },
  passwordReset: {
        type: Object
  },
  password: {
    type: String,
    required: 'Password is required.',
    minlength: [6, 'Password must be atleast 6 characters long.']
  },
  status: {
    type: String,
    enum: ['active','inactive','deleted'],
    default: 'inactive'
  },
  email_verify: {
        type: String,
        enum: ['verified','unverified'],  // not verified to uunverified
        default: 'unverified'
  },
  salt: { type: String }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

/* Mongoose beforeSave Hook : To hash a password */
UserSchema.pre('save', function(next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        user.salt = crypto.randomBytes(16).toString('hex');
        user.password = this.hashPassword(config.salt, user.password);
        next();
    } else {
        return next();
    }
});

/**
 * Create instance method for hashing a password
 */
UserSchema.methods.hashPassword = function(salt, password) {
    if (salt && password) {
        return crypto.createHmac('sha512', salt).update(password).digest('base64');
    } else {
        return password;
    }
};


/* To check a password */
UserSchema.methods.comparePassword = function(salt, password) {
    return this.password === this.hashPassword(salt, password);
};

UserSchema.set('autoIndex', config.db.autoIndex);
UserSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});

var userCollection = mongoose.model('user', UserSchema);
module.exports = userCollection;