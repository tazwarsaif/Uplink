environments = {};

environments.staging = {
    port: 3000,
    envName: "staging",
    secretKey: "hklgkdsngksdg",
    maxChecks : 5
};

environments.production = {
    port: 5000,
    envName: "production",
    secretKey: "jfhajfkhajkf",
    maxChecks : 5
}

const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';
const EnvtoExport = typeof(environments[currentEnv]) === 'object' ? environments[currentEnv] : environments.staging;

module.exports = EnvtoExport;