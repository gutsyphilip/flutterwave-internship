const mongoose = require('mongoose')
const _ = require('lodash')

const ReviewsSchema = new mongoose.Schema({
  driver_id: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    minlength: 1,
    required: true
  },
  star_rating: {
    type: Number,
    trim: true,
    default: 0
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    minlength: 1
  },
  comment: {
    type: String,
    trim: true
  }
})

ReviewsSchema.methods.toJSON = function () {
  let reviewsObject = this.toObject()
  return _.pick(reviewsObject, ['driver_id', 'user_id', 'star_rating', 'comment'])
}

const Reviews = mongoose.model('reviews', ReviewsSchema)

module.exports = {
  Reviews
}
