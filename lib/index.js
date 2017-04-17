const DCOS_SYSTEM_VERSION = '/system/v1';
const LOG_VERSION = '/logs/v1';

const rp = require('request-promise');
const request = require('request');

const RANGE = require('./range');
const STREAM = require('./stream');
const FIELDS = require('./fields');

function DCOSLogging(config, options) {

    let self = this;

    config = config || {};

    self.dcosHost = options.dcosHost || "master.mesos";
    self.dcosPort = parseInt(options.dcosPort) || 8080;
    self.dcosProtocol = options.dcosProtocol || "http";

    let defaultURI = self.dcosProtocol + '://' + self.dcosHost + ':' + self.dcosPort;

    let defaultConfig = {
        url: defaultURI,
        json: true
    };

    config = Object.assign({}, requestConfig, defaultConfig);

    function request(method, agentId, endPoint, extraConfig, rqStream) {
        return (query, body) => {
            let requestObject = JSON.parse(JSON.stringify(config));

            requestObject = Object.assign(requestObject, {
                method: method,
                qs: query,
                body: body
            });

            endPoint = DCOS_SYSTEM_VERSION + LOG_VERSION + endPoint;

            if (agent) {
                endPoint = DCOS_SYSTEM_VERSION + '/agent/' + agentId + LOG_VERSION + endPoint;
            } else {
                endPoint = DCOS_SYSTEM_VERSION + LOG_VERSION + endPoint;
            }

            requestObject.url += endPoint;

            if (extraConfig) requestObject = Object.assign(requestObject, extraConfig);

            if (rqStream) return StreamPromise(requestObject);

            return rp(requestObject);
        }
    }

    function StreamPromise(requestObject) {
        return request[method.toLowerCase()](requestObject)
            .on('error', (err) => {
                return Promise.reject(err);
            })
            .on('response', (stream) => {
                stream.on('end', () => {
                    console.log('Steam ended');
                });
                return Promise.resolve(stream);
            });
    }

    let loggingAPI = {
        range: RANGE(request),
        stream: STREAM(request),
        fields: FIELDS(request)
    };

    return loggingAPI;
}