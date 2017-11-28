const test = require('ava');
const decode = require('.');

test('basics', t => {
  const entry = decode('http://p.rfihub.com/cm?in=1&pub=6919');
  t.truthy(entry.name, 'provides a name');
  t.truthy(entry.type, 'provides a type');
  t.is(entry.name, 'Rocket Fuel Inc.');
});

test('3P urls match expected results', t => {
  t.is(decode('http://widgets.outbrain.com/outbrain.js').name, 'Outbrain Inc.');
  t.is(decode('http://cdn.gigya.com/js/gigya.js').name, 'Gigya');
  t.is(decode('http://cdn.krxd.net').name, 'Krux Digital, Inc.');
  t.is(decode('http://b.scorecardresearch.com/beacon.js').name, 'ComScore Campaign Essentials (CE)');
});


test('1P urls provide null results', t => {
  t.is(decode('http://example.com'), null);
  t.is(decode('http://paulirish.com'), null);
});
