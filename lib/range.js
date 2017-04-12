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
        },
        rangeFramework: (agentId, frameworkId, executorId, containerId) => {
            /**
             * @param agent_id String
             * @param framework_id String
             * @param executor_id Stringd
             * @param containe_id Stringd
             * @param parameters Object
             * /system/v1/agent/{agent_id}/logs/v1/range/framework/{framework_id}/executor/{executor_id}/container/{container_id}
             * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range_framework_framework_id_executor_executor_id_container_container_id
             */
            return request('GET', agentId, '/range/framework/' + frameworkId + '/executor/' + executorId + '/container/' + containerId)(parameters);
        },
        rangeFrameworkDownload: (agentId, frameworkId, executorId, containerId) => {
            /**
             * @param agent_id String
             * @param framework_id String
             * @param executor_id Stringd
             * @param containe_id Stringd
             * @param parameters Object
             * /system/v1/agent/{agent_id}/logs/v1/range/framework/{framework_id}/executor/{executor_id}/container/{container_id}/download
             * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range_framework_framework_id_executor_executor_id_container_container_id_download
             */
            return request('GET', agentId, '/range/framework/' + frameworkId + '/executor/' + executorId + '/container/' + containerId + '/download')(parameters);
        }

    };

    return endPoints;
};