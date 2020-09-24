const requiredEnvVariables = [
  'REACT_APP_APP_NAME'
];

const missingEnvs = requiredEnvVariables.filter(env => !process.env[env]);

if (missingEnvs.length) {
  throw Error(`Please set up necessary env variables: ${missingEnvs.join(', ')}`);
}


const development = process.env.NODE_ENV !== 'production';

const settings = {
  appName: process.env.REACT_APP_APP_NAME,
  development,
};

export default settings;
