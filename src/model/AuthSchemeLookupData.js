/**
 * Authentication API
 * Authentication API
 *
 * OpenAPI spec version: 9.0.000.00.872
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AuthenticationApi) {
      root.AuthenticationApi = {};
    }
    root.AuthenticationApi.AuthSchemeLookupData = factory(root.AuthenticationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthSchemeLookupData model module.
   * @module model/AuthSchemeLookupData
   * @version 9.0.000.00.872
   */

  /**
   * Constructs a new <code>AuthSchemeLookupData</code>.
   * @alias module:model/AuthSchemeLookupData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AuthSchemeLookupData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthSchemeLookupData} obj Optional instance to populate.
   * @return {module:model/AuthSchemeLookupData} The populated <code>AuthSchemeLookupData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = ApiClient.convertToType(data['tenant'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} tenant
   */
  exports.prototype['tenant'] = undefined;
  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


