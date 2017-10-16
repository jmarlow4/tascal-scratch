// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD_mxc0mgT-bk0v1zb1iLTPtlfojRd0FrM',
    authDomain: 'tascal-scratch.firebaseapp.com',
    databaseURL: 'https://tascal-scratch.firebaseio.com',
    projectId: 'tascal-scratch',
    storageBucket: 'tascal-scratch.appspot.com',
    messagingSenderId: '767016306519'
  }
};
