module.exports = function methods(request) {

    return {
        /**
         * @param agentId String
         * @param AcceptHeader String
         * @param requestStream Boolean
         * @param parameters Object
         * /system/v1/agent/{agent_id}/logs/v1/range/
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range
         */
        get: (agentId, AcceptHeader, requestStream, parameters) => {
            return request('GET', agentId, '/range/', AcceptHeader, requestStream)(parameters);
        },
        /**
         * @param agentId String
         * @param AcceptHeader String
         * @param requestStream Boolean
         * @param parameters Object
         * /system/v1/agent/{agent_id}/logs/v1/range/download
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range_download
         */
        download: (agentId, AcceptHeader, requestStream, parameters) => {
            return request('GET', agentId, '/range/download/', AcceptHeader, requestStream)(parameters);
        },
        /**
         * @param agentId String
         * @param frameworkId String
         * @param executorId String
         * @param containerId String
         * @param AcceptHeader String
         * @param requestStream Boolean
         * @param parameters Object
         * /system/v1/agent/{agent_id}/logs/v1/range/framework/{framework_id}/executor/{executor_id}/container/{container_id}
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range_framework_framework_id_executor_executor_id_container_container_id
         */
        framework: (agentId, frameworkId, executorId, containerId, AcceptHeader, requestStream, parameters) => {
            return request('GET', agentId, '/range/framework/' + frameworkId + '/executor/' + executorId + '/container/' + containerId + '/', AcceptHeader, requestStream)(parameters);
        },
        /**
         * @param agentId String
         * @param frameworkId String
         * @param executorId String
         * @param containerId String
         * @param AcceptHeader String
         * @param requestStream Boolean
         * @param parameters Object
         * /system/v1/agent/{agent_id}/logs/v1/range/framework/{framework_id}/executor/{executor_id}/container/{container_id}/download
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_range_framework_framework_id_executor_executor_id_container_container_id_download
         */
        frameworkDownload: (agentId, frameworkId, executorId, containerId, AcceptHeader, requestStream , parameters) => {
            return request('GET', agentId, '/range/framework/' + frameworkId + '/executor/' + executorId + '/container/' + containerId + '/download/', AcceptHeader, requestStream)(parameters);
        }

    };
};