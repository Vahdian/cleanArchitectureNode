import convict from 'convict';

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/pandora-amaia_000_admin'
    }
  }
});

config.loadFile([
  __dirname + '/default.json',
  __dirname + '/' + config.get('env') + '.json'
]);

export default config;
