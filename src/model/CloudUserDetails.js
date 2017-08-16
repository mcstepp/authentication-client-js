/**
 * Authorization API
 * Authorization API
 *
 * OpenAPI spec version: 9.0.000.00.681
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    if (!root.AuthorizationApi) {
      root.AuthorizationApi = {};
    }
    root.AuthorizationApi.CloudUserDetails = factory(root.AuthorizationApi.ApiClient, root.AuthorizationApi.UserRole);
  }
}(this, function(ApiClient, UserRole) {
  'use strict';




  /**
   * The CloudUserDetails model module.
   * @module model/CloudUserDetails
   * @version 9.0.000.00.681
   */

  /**
   * Constructs a new <code>CloudUserDetails</code>.
   * This class describes the user in the system. Applicable to different entities (contact-center level user, application/service, cloud system admin)
   * @alias module:model/CloudUserDetails
   * @class
   * @param username {String} System-wide-unique name of user in the system. For contact-center user it includes CME userName , dbid in CME and cc id. For Non-cme users, this can have other formats
   * @param authorities {module:model/UserRole} Authorities assigned to user
   */
  var exports = function(username, authorities) {
    var _this = this;

    _this['username'] = username;





    _this['authorities'] = authorities;
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

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('environmentId')) {
        obj['environmentId'] = ApiClient.convertToType(data['environmentId'], 'String');
      }
      if (data.hasOwnProperty('loginName')) {
        obj['loginName'] = ApiClient.convertToType(data['loginName'], 'String');
      }
      if (data.hasOwnProperty('dbid')) {
        obj['dbid'] = ApiClient.convertToType(data['dbid'], 'Number');
      }
      if (data.hasOwnProperty('contactCenterId')) {
        obj['contactCenterId'] = ApiClient.convertToType(data['contactCenterId'], 'String');
      }
      if (data.hasOwnProperty('cmeUserName')) {
        obj['cmeUserName'] = ApiClient.convertToType(data['cmeUserName'], 'String');
      }
      if (data.hasOwnProperty('authorities')) {
        obj['authorities'] = UserRole.constructFromObject(data['authorities']);
      }
    }
    return obj;
  }

  /**
   * System-wide-unique name of user in the system. For contact-center user it includes CME userName , dbid in CME and cc id. For Non-cme users, this can have other formats
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * Id of genesys environment user belongs to (if any)
   * @member {String} environmentId
   */
  exports.prototype['environmentId'] = undefined;
  /**
   * The user name in CME. Not set for users which are not in CME (applications, cloud system admin,...)
   * @member {String} loginName
   */
  exports.prototype['loginName'] = undefined;
  /**
   * DBID of user record in corresponding CME (present iff user belongs to contact center)
   * @member {Number} dbid
   */
  exports.prototype['dbid'] = undefined;
  /**
   * Id of contact center user belongs to (if any)
   * @member {String} contactCenterId
   */
  exports.prototype['contactCenterId'] = undefined;
  /**
   * The user name in CME. Not set for users which are not in CME (applications, cloud system admin,...)
   * @member {String} cmeUserName
   */
  exports.prototype['cmeUserName'] = undefined;
  /**
   * Authorities assigned to user
   * @member {module:model/UserRole} authorities
   */
  exports.prototype['authorities'] = undefined;



  return exports;
}));


