module.exports = function methods(request) {
    let endPoints = {
        range: (agentId, parameters) => {
            /**
             * @param agent_id String
             * @param parameters Object
             * /system/v1/agent/{agent_id}/logs/v1/range/
             * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range
             */
            return request('GET', agentId, '/range')(parameters);
        },
        rangeDownload: (agentId, parameters) => {
            /**
             * @param agent_id String
             * @param parameters Object
             * /system/v1/agent/{agent_id}/logs/v1/range/download
             * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range_download
             */
            return request('GET', agentId, '/range/download')(parameters);
        }
    }
}