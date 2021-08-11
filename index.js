const core = require('@actions/core');
const github = require('@actions/github');

try {
    // A quien saludar como nombre la entrada 
    const nameToSaludo = core.getInput('quien-saluda');
    console.log(`Hola ${nameToSaludo}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`El evento payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}