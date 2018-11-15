/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Externs for big-integer.js library.
 * @externs
 */

/**
 * @constructor
 * @struct
 * @param {Object=} options
 */
var BigInteger = function(options) {};

/**
 * @param {number|BigInteger|string} v
 * @return {BigInteger}
 */
BigInteger.prototype.minus = function(v) {};

/**
 * @param {number|BigInteger|string} v
 * @return {BigInteger}
 */
BigInteger.prototype.plus = function(v) {};

/**
 * @param {number|BigInteger|string} v
 * @return {BigInteger}
 */
BigInteger.prototype.divide = function(v) {};

/**
 * @param {number|BigInteger|string} v
 * @return {BigInteger}
 */
BigInteger.prototype.multiply = function(v) {};

/**
 * @param {number|BigInteger|string} v
 * @return {boolean}
 */
BigInteger.prototype.greater = function(v) {};

/**
 * @param {number|BigInteger|string} v
 * @return {boolean}
 */
BigInteger.prototype.neq = function(v) {};

/**
 * @return {number}
 */
BigInteger.prototype.toJSNumber = function() {};

/**
 * @param  {number|string|BigInteger} options
 * @return {BigInteger}
 */
var bigInt = function(options) {};


