const mongoose = require("mongoose");

const UserEndpoint = require("./models/UserEndpoint");

class DBManager {
  /**
   *
   * @param {string} mongoUri
   */
  constructor(mongoUri) {
    console.log(mongoUri);
    try {
      mongoose.connect(mongoUri, {
        useNewUrlParser: true
      });
    } catch (err) {
      console.log("Error connecting to Mongo DB!", err.message);
    }
  }

  /**
   *
   * @param {Object} userEndpoint
   * @param {string} userEndpoint.user
   * @param {string} userEndpoint.endpoint
   */
  addUserEndpoint({ user, endpoint }) {
    let userEndpoint = {};
    try {
      userEndpoint = new UserEndpoint({ user, endpoint });
    } catch (err) {
      console.log("error creating userEndpoint!", err.message);
    }

    userEndpoint
      .save()
      .then(() =>
        console.log(
          `<===saved to DynamoDB user: ${userEndpoint.user} with endpoint: ${userEndpoint.endpoint}===>`
        )
      )
      .catch(err => {
        console.log("Error Saving to DynamoDB!", err.message);
      });
  }
}

module.exports = DBManager;
