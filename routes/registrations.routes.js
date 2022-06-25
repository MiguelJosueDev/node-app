const express = require('express');

//Controllers

const {
    getAllRegistrations,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration,
} = require('../controllers/registrations.controller');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations);

registrationsRouter.get('/:id', getRegistrationById);

registrationsRouter.post('/', createRegistration);

registrationsRouter.patch('/:id', updateRegistration);

registrationsRouter.delete('/:id', deleteRegistration);

module.exports = { registrationsRouter };
