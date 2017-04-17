const dcosLogging = require('../lib/index')({
    headers: {
        'Authorization': 'token=DCOS_ACCESS_TOKEN'
    }
}, {});

dcosLogging.range.get(null, {skip_prev: 200, limit: 3})
    .then(logs => console.log(logs))
    .catch(err => console.error(err));