const dcosLogging = require('../lib/index')({}, {
    headers: {
        'Authorization': 'token=DCOS_ACCESS_TOKEN'
        /*
         You can get the access Token in the DCOS cli Using
         $ dcos config show core.dcos_acs_token
         */
    }
});

dcosLogging.range.get(null, 'text/plain', false, {skip_prev: 200, limit: 3})
    .then(logs => console.log(logs))
    .catch(err => console.error(err));

dcosLogging.range.get(null, 'text/event-stream', true)
    .then((stream) => {
        // Forces the stream to receive a String instead of a Buffer object
        stream.setEncoding('utf-8');
        // Event that receives data from DCOS
        stream.on('data',(chunk) => {
            // Printing the chunk received from the stream
            console.log(chunk);
        });

        // Last chunk, it runs when the connection is closed
        stream.on('end',() => {
            // Here you do what you need when it ends...
        });

        // If for some reason we receive an error while connected, we can handle it here
        stream.on('errror',(err) => {
            // Error handling...
        })
    }).catch((err) => console.log(err));
// Any problem while trying to connect
