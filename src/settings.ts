// Hard bind to any type to avoid declaration env variables globally
const windowWithEnvs: any = window;

const requiredEnvVariables = ['REACT_APP_APP_NAME'];
const development = process.env.NODE_ENV !== 'production';
const missingEnvs = requiredEnvVariables.filter(env => {
  if (development) {
    return !process.env[env];
  }

  // Check envs in production and if they were initialized properly
  return !windowWithEnvs[env] || (windowWithEnvs[env] && windowWithEnvs[env].startsWith('RUNTIME_ENV'));
});

if (missingEnvs.length) {
  throw Error(`Please set up necessary env variables: ${missingEnvs.join(', ')}`);
}

const settings = {
  appName: development ? process.env.REACT_APP_APP_NAME : windowWithEnvs.REACT_APP_APP_NAME,
  development,
};

export default settings;
