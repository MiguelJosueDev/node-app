const { Registration } = require('../models/registration.model');

const getAllRegistrations = async (req, res, next) => {
    try {
        const registrations = await Registration.findAll();

        res.status(200).json(registrations);

    }catch (err) {
        console.log(err);
    }
}

// we validate if the registration exists

const getRegistrationById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const registration = await Registration.findOne({ where: { id } });

        if(!registration) {
            return res.status(404).json({
                message: 'Registration not found'
            });
        }
        res.status(200).json({registration});
    }catch (err) {
        console.log(err)
    }
}

const createRegistration = async (req, res, next) => {
    try {
        const { entrance } = req.body;

        const newRegistration = await Registration.create({ entrance });

        res.status(201).json({ newRegistration });
        
    }catch (err) {
        console.log(err);
    }
}

const updateRegistration = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { exitTime, status } = req.body;
        const registration = await Registration.findOne({ where: { id } });

        if(!registration) {
            return res.status(404).json({
                status: 'error',
                message: 'Registration not found'
            });
        }
        await registration.update({ exitTime, status: 'out of office' });

        res.status(204).json({ status: 'success' });

    } catch (err) {}
}


const deleteRegistration = async (req, res, next) => {
    try {
        const { id } = req.params;
        const registration = await Registration.findOne({ where: { id } });

        if(!registration) {
            return res.status(404).json({
                message: 'Registration not found'
            });
        }
        await registration.update( { status: 'registration deleted' });

        res.status(204).json({ status: 'success' });

    }catch (err) {}
}

module.exports = {
    getAllRegistrations,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
}