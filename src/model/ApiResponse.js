/**
 * Authentication API
 * Authentication API
 *
 * OpenAPI spec version: 9.0.000.22.1446
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/ResponseStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorResponse'), require('./ResponseStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.AuthenticationApi) {
      root.AuthenticationApi = {};
    }
    root.AuthenticationApi.ApiResponse = factory(root.AuthenticationApi.ApiClient, root.AuthenticationApi.ErrorResponse, root.AuthenticationApi.ResponseStatus);
  }
}(this, function(ApiClient, ErrorResponse, ResponseStatus) {
  'use strict';




  /**
   * The ApiResponse model module.
   * @module model/ApiResponse
   * @version 9.0.000.22.1446
   */

  /**
   * Constructs a new <code>ApiResponse</code>.
   * @alias module:model/ApiResponse
   * @class
   * @param status {module:model/ResponseStatus} 
   */
  var exports = function(status) {
    var _this = this;




    _this['status'] = status;
  };

  /**
   * Constructs a <code>ApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponse} obj Optional instance to populate.
   * @return {module:model/ApiResponse} The populated <code>ApiResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ErrorResponse.constructFromObject(data['errors']);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ResponseStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/ErrorResponse} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {module:model/ResponseStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


