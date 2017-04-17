module.exports = function methods(request) {

    return {
        /**
         * @param agent_id String
         * @param field String
         * @param parameters Object
         * /system/v1/agent/{agent_id}/logs/v1/fields/{field}
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#/
         */
        get: (agentId, field, parameters) => {
            return request('GER', agentId, '/fields/' + field + '/')(parameters);
        }
    };
};