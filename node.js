let {PythonShell} = require('python-shell');
PythonShell.run('python.py', null).then(messages=>{
    console.log('finished',messages);
  });