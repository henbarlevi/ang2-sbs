import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./app', true, /\.spec\.ts$/));
