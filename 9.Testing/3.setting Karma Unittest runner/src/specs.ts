import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

//import all .spec files automatically
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./app', true, /\.spec\.ts$/));

//require.context('./app', true, /\.spec\.ts$/) - find all the spec files
//requireAll- iterate through each one of them and import them using requireContext



//if there is a typing error-its because the ts compiler doesnt know how to compile it - look in the typings.d.ts and see what fix it