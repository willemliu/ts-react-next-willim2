const withTypescript = require('@zeit/next-typescript')
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = withTypescript((phase, {defaultConfig}) => {
    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return {
          /* development only config options here */
        }
    }
    
    return {
        pageExtensions: ['jsx', 'js', 'ts', 'tsx']
    }    
});
