const mongoose = require('mongoose')
const _ = require('lodash')

const AttendeesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  email: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  tickets: {
    type: Number,
    trim: true,
    minlength: 1,
    required: true,
    default: 1
  },
  expectations: {
    type: String,
    trim: true,
    minlength: 1
  },
  paid: {
    type: Boolean,
    required: true
  }
})

AttendeesSchema.methods.toJSON = function () {
  let reviewsObject = this.toObject()
  return _.pick(reviewsObject, ['firstName', 'lastName', 'email', 'tickets', 'expectations', 'paid'])
}

const Attendees = mongoose.model('attendees', AttendeesSchema)

module.exports = {
  Attendees
}
