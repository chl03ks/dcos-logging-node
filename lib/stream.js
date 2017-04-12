module.exports = function methods(request) {

    let endPoints = {
        stream: (agentId, parameters) => {
            /**
             * Stream the log entries back to client with Server-Sent-Events.
             * @param agent_id String
             * @param parameters Object
             * /system/v1/agent/{agent_id}/logs/v1/stream/
             * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_stream
             */
            return request('GET', agentId, '/range')(parameters);
        },
        streamFramework: (agentId, frameworkId, executorId, containerId) => {
            /**
             * Stream the log entries back to client with Server-Sent-Events.
             * @param agent_id String
             * @param framework_id String
             * @param executor_id Stringd
             * @param containe_id Stringd
             * @param parameters Object
             * /system/v1/agent/{agent_id}/logs/v1/stream/framework/{framework_id}/executor/{executor_id}/container/{container_id}
             * https://dcos.io/docs/1.9/administration/logging/logging-api/#!/default/get_stream_framework_framework_id_executor_executor_id_container_container_id
             */
            return request('GET', agentId, '/stream/framework/' + frameworkId + '/executor/' + executorId + '/container/' + containerId)(parameters);
        },

    };

    return endPoints;
}