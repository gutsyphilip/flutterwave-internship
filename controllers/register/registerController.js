const _ = require('lodash')

const {
  Attendees
} = require('../../models')

exports.registerAttendee = (req, res) => {
  const body = _.pick(req.body, ['firstName', 'lastName','email', 'tickets', 'expectations'])
  var attendee = {}

  attendee = new Attendees({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    tickets: body.tickets,
    expectations: body.expectations,
    paid: false
  })

  attendee.save()
    .then(() => {
      res.status(200).send({
        message: 'Successfully added attendee'
      })
    })
    .catch((e) => {
      res.status(400).send({
        message: 'Oops!!! Failed to register new attendee',
        error: e.message
      })
    })
}
