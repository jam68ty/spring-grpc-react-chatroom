/**
 * @fileoverview gRPC-Web generated client stub for com.shoalter.message
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.shoalter = {};
proto.com.shoalter.message = require('./message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.shoalter.message.MessageServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.shoalter.message.MessageServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.shoalter.message.SendMessageRequest,
 *   !proto.com.shoalter.message.SendMessageReply>}
 */
const methodDescriptor_MessageService_sendMessage = new grpc.web.MethodDescriptor(
  '/com.shoalter.message.MessageService/sendMessage',
  grpc.web.MethodType.UNARY,
  proto.com.shoalter.message.SendMessageRequest,
  proto.com.shoalter.message.SendMessageReply,
  /**
   * @param {!proto.com.shoalter.message.SendMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.message.SendMessageReply.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.message.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.shoalter.message.SendMessageReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.message.SendMessageReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.message.MessageServiceClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.shoalter.message.MessageService/sendMessage',
      request,
      metadata || {},
      methodDescriptor_MessageService_sendMessage,
      callback);
};


/**
 * @param {!proto.com.shoalter.message.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.shoalter.message.SendMessageReply>}
 *     Promise that resolves to the response
 */
proto.com.shoalter.message.MessageServicePromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.shoalter.message.MessageService/sendMessage',
      request,
      metadata || {},
      methodDescriptor_MessageService_sendMessage);
};


module.exports = proto.com.shoalter.message;

