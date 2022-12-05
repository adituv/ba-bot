const privateConfig = require("./config_private.json");

module.exports = {
    "botToken": privateConfig.botToken,
    "database": {
        "login": privateConfig.databaseLogin,
        "tables": {
            "config": "Config",
            "runs": "Runs",
            "bans": "Bans"
        }
    }
};