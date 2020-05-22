#!/usr/bin/env node
const yargs = require("yargs");

const DBManager = require("../DBManager");

const { user, endpoint, mongoUri } = yargs
  .usage("Usage: -u <user> -e <endpoint> -m <mongoUri>")
  .option("u", {
    alias: "user",
    describe: "User for this endpoint",
    type: "string",
    demandOption: true
  })
  .option("e", {
    alias: "endpoint",
    describe: "Endpoint for this user",
    type: "string",
    demandOption: true
  })
  .option("m", {
    alias: "mongoUri",
    describe:
      "MongoDB Uri where the UserEndpoints are stored with the user credentials",
    type: "string",
    demandOption: true
  }).argv;

const manager = new DBManager(mongoUri);
manager.addUserEndpoint({ user, endpoint });
