/**
 * Authentication API
 * Authentication API
 *
 * OpenAPI spec version: 9.0.000.44.1856
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserRole'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserRole'));
  } else {
    // Browser globals (root is window)
    if (!root.AuthenticationApi) {
      root.AuthenticationApi = {};
    }
    root.AuthenticationApi.CloudUserDetails = factory(root.AuthenticationApi.ApiClient, root.AuthenticationApi.UserRole);
  }
}(this, function(ApiClient, UserRole) {
  'use strict';




  /**
   * The CloudUserDetails model module.
   * @module model/CloudUserDetails
   * @version 9.0.000.44.1856
   */

  /**
   * Constructs a new <code>CloudUserDetails</code>.
   * This class describes the user in the system. Applicable to different entities (contact-center level user, application/service, cloud system admin)
   * @alias module:model/CloudUserDetails
   * @class
   * @param authorities {Array.<module:model/UserRole>} Authorities assigned to the user.
   * @param username {String} The system-wide unique name of the user. For contact center users, this includes the userName in Configuration Server, the DBID in Configuration Server and the contact center ID. For non-Configuration Server users the username can have other formats.
   */
  var exports = function(authorities, username) {
    var _this = this;

    _this['authorities'] = authorities;






    _this['username'] = username;
  };

  /**
   * Constructs a <code>CloudUserDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudUserDetails} obj Optional instance to populate.
   * @return {module:model/CloudUserDetails} The populated <code>CloudUserDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorities')) {
        obj['authorities'] = ApiClient.convertToType(data['authorities'], [UserRole]);
      }
      if (data.hasOwnProperty('cmeUserName')) {
        obj['cmeUserName'] = ApiClient.convertToType(data['cmeUserName'], 'String');
      }
      if (data.hasOwnProperty('contactCenterId')) {
        obj['contactCenterId'] = ApiClient.convertToType(data['contactCenterId'], 'String');
      }
      if (data.hasOwnProperty('dbid')) {
        obj['dbid'] = ApiClient.convertToType(data['dbid'], 'Number');
      }
      if (data.hasOwnProperty('environmentId')) {
        obj['environmentId'] = ApiClient.convertToType(data['environmentId'], 'String');
      }
      if (data.hasOwnProperty('loginName')) {
        obj['loginName'] = ApiClient.convertToType(data['loginName'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * Authorities assigned to the user.
   * @member {Array.<module:model/UserRole>} authorities
   */
  exports.prototype['authorities'] = undefined;
  /**
   * The username in Configuration Server. This property is not set for users who aren't in Configuration Server (for example, applications/services, cloud system admin and so on.)
   * @member {String} cmeUserName
   */
  exports.prototype['cmeUserName'] = undefined;
  /**
   * The ID of the contact center the user belongs to (if any).
   * @member {String} contactCenterId
   */
  exports.prototype['contactCenterId'] = undefined;
  /**
   * The DBID of the corresponding user record in Configuration Server. This is present if the user belongs to a contact center.
   * @member {Number} dbid
   */
  exports.prototype['dbid'] = undefined;
  /**
   * The ID of the Genesys environment the user belongs to (if any).
   * @member {String} environmentId
   */
  exports.prototype['environmentId'] = undefined;
  /**
   * The username in Configuration Server. This property is not set for users who aren't in Configuration Server (for example, applications/services, cloud system admin and so on.)
   * @member {String} loginName
   */
  exports.prototype['loginName'] = undefined;
  /**
   * The user's properties
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * The system-wide unique name of the user. For contact center users, this includes the userName in Configuration Server, the DBID in Configuration Server and the contact center ID. For non-Configuration Server users the username can have other formats.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


