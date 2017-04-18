module.exports = function methods(request) {

    return {
        /**
         * Stream the log entries back to client with Server-Sent-Events.
         * @param agent_id String
         * @param parameters Object
         * @param AcceptHeader String
         * @param requestStream Boolean
         * /system/v1/agent/{agent_id}/logs/v1/stream/
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_stream
         */
        get: (agentId, AcceptHeader, requestStream, parameters) => {
            return request('GET', agentId, '/stream/', AcceptHeader, requestStream)(parameters);
        },
        /**
         * Stream the log entries back to client with Server-Sent-Events.
         * @param agentId String
         * @param frameworkId String
         * @param executorId String
         * @param containerId String
         * @param AcceptHeader String
         * @param requestStream Boolean
         * /system/v1/agent/{agent_id}/logs/v1/stream/framework/{framework_id}/executor/{executor_id}/container/{container_id}
         * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_stream_framework_framework_id_executor_executor_id_container_container_id
         */
        framework: (agentId, frameworkId, executorId, containerId, AcceptHeader, requestStream) => {
            return request('GET', agentId, '/stream/framework/' + frameworkId + '/executor/' + executorId + '/container/' + containerId + '/', AcceptHeader, requestStream)(parameters);
        },

    };
}
