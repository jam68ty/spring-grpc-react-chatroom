/**
 * @fileoverview gRPC-Web generated client stub for com.shoalter.chat
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
proto.com.shoalter.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.shoalter.chat.ChatServiceClient =
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
proto.com.shoalter.chat.ChatServicePromiseClient =
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
 *   !proto.com.shoalter.chat.User,
 *   !proto.com.shoalter.chat.JoinResponse>}
 */
const methodDescriptor_ChatService_join = new grpc.web.MethodDescriptor(
  '/com.shoalter.chat.ChatService/join',
  grpc.web.MethodType.UNARY,
  proto.com.shoalter.chat.User,
  proto.com.shoalter.chat.JoinResponse,
  /**
   * @param {!proto.com.shoalter.chat.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.chat.JoinResponse.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.chat.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.shoalter.chat.JoinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.chat.JoinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.chat.ChatServiceClient.prototype.join =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.shoalter.chat.ChatService/join',
      request,
      metadata || {},
      methodDescriptor_ChatService_join,
      callback);
};


/**
 * @param {!proto.com.shoalter.chat.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.shoalter.chat.JoinResponse>}
 *     Promise that resolves to the response
 */
proto.com.shoalter.chat.ChatServicePromiseClient.prototype.join =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.shoalter.chat.ChatService/join',
      request,
      metadata || {},
      methodDescriptor_ChatService_join);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.shoalter.chat.ChatMessage,
 *   !proto.com.shoalter.chat.Empty>}
 */
const methodDescriptor_ChatService_sendMsg = new grpc.web.MethodDescriptor(
  '/com.shoalter.chat.ChatService/sendMsg',
  grpc.web.MethodType.UNARY,
  proto.com.shoalter.chat.ChatMessage,
  proto.com.shoalter.chat.Empty,
  /**
   * @param {!proto.com.shoalter.chat.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.chat.Empty.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.chat.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.shoalter.chat.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.chat.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.chat.ChatServiceClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.shoalter.chat.ChatService/sendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMsg,
      callback);
};


/**
 * @param {!proto.com.shoalter.chat.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.shoalter.chat.Empty>}
 *     Promise that resolves to the response
 */
proto.com.shoalter.chat.ChatServicePromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.shoalter.chat.ChatService/sendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.shoalter.chat.Empty,
 *   !proto.com.shoalter.chat.ChatMessage>}
 */
const methodDescriptor_ChatService_receiveMsg = new grpc.web.MethodDescriptor(
  '/com.shoalter.chat.ChatService/receiveMsg',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.shoalter.chat.Empty,
  proto.com.shoalter.chat.ChatMessage,
  /**
   * @param {!proto.com.shoalter.chat.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.chat.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.chat.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.chat.ChatServiceClient.prototype.receiveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.shoalter.chat.ChatService/receiveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_receiveMsg);
};


/**
 * @param {!proto.com.shoalter.chat.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.chat.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.chat.ChatServicePromiseClient.prototype.receiveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.shoalter.chat.ChatService/receiveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_receiveMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.shoalter.chat.Empty,
 *   !proto.com.shoalter.chat.UserList>}
 */
const methodDescriptor_ChatService_getAllUsers = new grpc.web.MethodDescriptor(
  '/com.shoalter.chat.ChatService/getAllUsers',
  grpc.web.MethodType.UNARY,
  proto.com.shoalter.chat.Empty,
  proto.com.shoalter.chat.UserList,
  /**
   * @param {!proto.com.shoalter.chat.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.chat.UserList.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.chat.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.shoalter.chat.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.chat.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.chat.ChatServiceClient.prototype.getAllUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.shoalter.chat.ChatService/getAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_getAllUsers,
      callback);
};


/**
 * @param {!proto.com.shoalter.chat.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.shoalter.chat.UserList>}
 *     Promise that resolves to the response
 */
proto.com.shoalter.chat.ChatServicePromiseClient.prototype.getAllUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.shoalter.chat.ChatService/getAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_getAllUsers);
};


module.exports = proto.com.shoalter.chat;

