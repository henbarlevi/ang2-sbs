import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
//required by the angular testing functionality:
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test'; //for running tests sync
import 'zone.js/dist/jasmine-patch';//so our test integrate well with jasmine

import { TestBed } from '@angular/core/testing';//in order to test templates
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';//for the TestBed.initTestEnvironment

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

requireAll(require.context('./app', true, /\.spec\.ts$/));
