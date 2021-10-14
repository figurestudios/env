const fs = require('fs')
const dotenv = require('dotenv')
const { SkynetClient } = require('@nebulous/skynet');

downloadENV();
async function downloadENV() {

	var skyLink = process.env.SKYLINK;
	const client = new SkynetClient();
	
	// logs ENV "OURCUSTOMENV" loaded from .yaml file or CLI
	console.log("Pre-defined ENV:", process.env.OURCUSTOMENV);

	console.log('Downloading ENV ...');

    await client.downloadFile('./.env', skyLink);

    console.log('Download Complete');

    overrideENV()
}

function overrideENV() {
	const envConfig = dotenv.parse(fs.readFileSync('.env'))

	for (const k in envConfig) {
  		process.env[k] = envConfig[k]
	}

	dotenv.config();

	// logs ENV "OURCUSTOMENV" loaded from .env file
	console.log("Downloaded ENV:", process.env.OURCUSTOMENV)
}