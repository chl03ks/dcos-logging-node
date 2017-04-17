module.exports = function methods(request) {

    return {
        /**
         * @param agentId
         * @param field String
         * @param AcceptHeader String
         * @param requestStream Boolean
         * @param parameters Object
         * /system/v1/agent/{agent_id}/logs/v1/fields/{field}
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#/
         */
        get: (agentId, field, AcceptHeader, requestStream, parameters) => {
            return request('GER', agentId, '/fields/' + field + '/', AcceptHeader, requestStream)(parameters);
        }
    };
};