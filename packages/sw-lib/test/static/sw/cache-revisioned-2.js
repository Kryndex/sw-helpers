/* global goog */

importScripts('/packages/sw-lib/build/sw-lib.min.js');
importScripts('/packages/sw-precaching/test/static/skip-and-claim.js');
importScripts('/packages/sw-precaching/test/static/test-data.js');
importScripts('/packages/sw-lib/test/static/test-data.js');

const testSet = self.goog.__TEST_DATA['sw-lib']['revisioned'];
goog.swlib.precache(testSet['set-4']);

goog.swlib.precache(testSet['set-5']);

goog.swlib.precache(testSet['set-6']);

// sw-lib should define a route just for the revisioned assets so this
// fetch should never be called.
self.addEventListener('fetch', (event) => {
  event.respondWith(null);
});
