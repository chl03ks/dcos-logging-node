const DCOS_SYSTEM_VERSION = '/system/v1';
const LOG_VERSION = '/logs/v1';

const rp = require('request-promise');
const request = require('request');

const RANGE = require('./range');
const STREAM = require('./stream');
const FIELDS = require('./fields');

module.exports = (options, config) => {

    let self = this;

    config = config || {};

    self.dcosHost = options.dcosHost || 'master.mesos';
    self.dcosProtocol = options.dcosProtocol || 'http';

    let defaultURI = self.dcosProtocol + '://' + self.dcosHost;

    let defaultConfig = {
        url: defaultURI,
        json: true
    };

    config = Object.assign({}, config, defaultConfig);

    function makeRequest(method, agentId, endPoint, AcceptHeader, rqStream) {
        return (query, body) => {
            let requestObject = JSON.parse(JSON.stringify(config));

            requestObject = Object.assign(requestObject, {
                method: method,
                qs: query,
                body: body
            });

            if (agentId) {
                endPoint = DCOS_SYSTEM_VERSION + '/agent/' + agentId + LOG_VERSION + endPoint;
            } else {
                endPoint = DCOS_SYSTEM_VERSION + LOG_VERSION + endPoint;
            }

            requestObject.url += endPoint;

            if (AcceptHeader) requestObject.headers.Accept = AcceptHeader;

            if (rqStream) return StreamPromise(method.toLowerCase(), requestObject);

            return rp(requestObject);
        }
    }

    function StreamPromise(method, requestObject) {
        return new Promise(function createPromise(resolve, reject) {
            request[method](requestObject)
                .on('error', function onError(err) {
                    return reject(err);
                })
                .on('response', function onResponse(readableStream) {
                    readableStream.on('end', function onEnd() {
                        console.log('end');
                    });
                    return resolve(readableStream);
                });
        });
    }

    return {
        range: RANGE(makeRequest),
        stream: STREAM(makeRequest),
        fields: FIELDS(makeRequest)
    };
};