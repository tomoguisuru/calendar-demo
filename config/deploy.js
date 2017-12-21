module.exports = function(deployTarget) {
  var deploy_config = {};
  var ENV = {
    build: {},
    s3: {
      accessKeyId:      process.env.S3_KEY,
      secretAccessKey:  process.env.S3_SECRET,
      bucket:           process.env.S3_BUCKET,
      region:           'us-west-2',
      cacheControl:     'max-age=315360000, no-transform, public',
    },
    's3-index': {
      accessKeyId:      process.env.S3_KEY,
      secretAccessKey:  process.env.S3_SECRET,
      bucket:           process.env.S3_BUCKET,
      region:           'us-west-2',
      allowOverwrite:   true,
    },
  };

  ENV.pipeline = {
    activateOnDeploy: true,
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
