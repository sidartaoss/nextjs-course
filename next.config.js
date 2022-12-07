const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sidartaoss",
        mongodb_password: "NWg8WUh0w0WS2Zts1TnkQwqRCwnyR18n",
        mongodb_clustername: "cluster0",
        mongodb_database: "my_site_dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "sidartaoss",
      mongodb_password: "NWg8WUh0w0WS2Zts1TnkQwqRCwnyR18n",
      mongodb_clustername: "cluster0",
      mongodb_database: "my_site",
    },
  };
};
