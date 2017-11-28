'use strict';

const util = require('util');

global.Common = {};
global.ProductRegistryImpl = {};

require('chrome-devtools-frontend/front_end/common/ParsedURL.js');
require('chrome-devtools-frontend/front_end/product_registry_impl/ProductRegistryImpl.js');
require('chrome-devtools-frontend/front_end/product_registry_impl/ProductRegistryData.js');
require('chrome-devtools-frontend/front_end/product_registry_impl/sha1/sha1.js');

const registry = new ProductRegistryImpl.Registry();

// from https://github.com/ChromeDevTools/devtools-frontend/blob/master/scripts/convert-3pas-product-registry.js#L25
// const typeClassifications = new Map([
//   ['cdn_provider', 0], ['cdn_commercial_owner', 2], ['cdn_creative_agency', 2], ['ad_blocking', 0], ['ad_exchange', 0],
//   ['ad_server_ad_network', 0], ['ad_server_advertiser', 0], ['demand_side_platform', 0], ['vast_provider', 0],
//   ['data_management_platform', 1], ['research_analytics', 1], ['research_verification', 1],
//   ['research_brand_lift', 1]
// ]);
const basicTypes = new Map([[0, 'ads'], [1, 'analytics'], [3, 'cdn']]);

/**
 *
 * @param {?string} url
 * @return {!{name: string, type: string}}
 */
function decode(url) {
  const parsed = new Common.ParsedURL(url);
  const entry = registry.entryForUrl(parsed);
  if (!entry) return null;
  return {
    name: entry.name,
    type: basicTypes.get(entry.type)
  };
}

function decodeFromCLI() {
  if (!process.argv[2]) throw new Error('URL not provided');
  const result = decode(process.argv[2]);
  console.log(JSON.stringify(result, null, 2));
}

if (require.main === module) {
  decodeFromCLI();
} else {
  module.exports = decode;
}
