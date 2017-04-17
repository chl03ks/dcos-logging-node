# DCOS Logging API Node.js Client Library

Node.js client library lightweigth for DCOS Logging API. ES6

Install

Install using npm or yarn

```
$ npm install dcos-logging-node
$ yarn add dcos-logging-node
```

# Usage

```javascript

const dcosLogging = require('../lib/index')(
    {
        dcosHost: 'DCOS_HOST',
        dcosProtocol: 'https'
    },{
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
```

## Format


In the methods you will neet to discribe the Accept Header.
The API request header can be any the following:

- `text/plain`, `text/html`, `*/*` request logs in text format, ending with `\n`.
- `application/json` request logs in JSON format.
- `text/event-stream` request logs in Server-Sent-Events format.

# Stream

You can get a readble Stream object from any end point in the Logging API

```javascript

dcosLogging.range.get(null, 'text/event-stream', true)
    .then((stream) => {
        // Forces the stream to receive a String instead of a Buffer object
        stream.setEncoding('utf-8');
        // Event that receives data from DCOS
        stream.on('data', (chunk) => {
            // Printing the chunk received from the stream
            console.log(chunk);
        });

        // Last chunk, it runs when the connection is closed
        stream.on('end', () => {
            // Here you do what you need when it ends...
        });

        // If for some reason we receive an error while connected, we can handle it here
        stream.on('errror', (err) => {
            // Error handling...
        })
    }).catch((err) => console.log(err));

```

## Methods

> Note: If the AcceptHeader is `text/event-stream'` you will need to set the `RequestStream` param to false

### Range


- get(agentId, AcceptHeader, RequestStream, parameters)
- download(agentId, AcceptHeader, requestStream, parameters)
- framework(agentId,frameworkId, executorId, containerId, AcceptHeader, requestStream, parameters)
- frameworkDownload(agentId, frameworkId, executorId, containerId, AcceptHeader, requestStream , parameters)

### Stream

-  get(agentId, AcceptHeader, requestStream, parameters)
-  framework(agentId, frameworkId, executorId, containerId, AcceptHeader, requestStream)

### Fields

- get(agentId, field, AcceptHeader, requestStream, parameters)