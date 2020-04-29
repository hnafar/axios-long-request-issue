let axios = require('axios');

async function run () {
    console.log(`${new Date().toISOString()} - start`);
    const resp = await axios.post(`http://10.0.0.50:5000/weatherforecast`);
    console.log(`${new Date().toISOString()} - end`);
}

// do something when app is closing
process.on('exit', () => { console.log('Process - exit'); });
process.on('SIGINT', () => { console.log('Process - SIGINT'); });
process.on('SIGUSR1', () => { console.log('Process - SIGUSR1'); });
process.on('SIGUSR2', () => { console.log('Process - SIGUSR2'); });
process.on('uncaughtException', () => { console.log('Process - uncaughtException'); });

run()
    .then(() => {  console.error('Succeeded!');  process.exit(0); })
    .catch(err => { console.error('Failed!'); console.error(err); process.exit(-1); });