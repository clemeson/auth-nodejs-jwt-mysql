const userModel = require('../models/userSettingsModel');

async function getUserSettings(email) {
    const userSettings = await userModel.findOne({
        where: { email },
    });
    return userSettings;
}

module.exports = {
    getUserSettings,
};
