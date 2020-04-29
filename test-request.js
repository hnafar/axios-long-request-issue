let request = require('request');

// do something when app is closing
process.on('exit', () => { console.log('Process - exit'); });
process.on('SIGINT', () => { console.log('Process - SIGINT'); });
process.on('SIGUSR1', () => { console.log('Process - SIGUSR1'); });
process.on('SIGUSR2', () => { console.log('Process - SIGUSR2'); });
process.on('uncaughtException', () => { console.log('Process - uncaughtException'); });
process.on('ESOCKETTIMEDOUT', () => { console.log('Process - ESOCKETTIMEDOUT'); });

request.post('http://10.0.0.50:5000/weatherforecast', {
  json: {
    foo: 'bar'
  }
}, (error, res, body) => {
  if (error) {
    onsole.error('Failed!');
    console.error(err);
    process.exit(-1);
  }

  console.log(`statusCode: ${res.statusCode}`)
  console.error('Succeeded!'); 
  process.exit(0);
});
