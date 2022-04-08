/**
 * @fileoverview gRPC-Web generated client stub for com.shoalter.push
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
proto.com.shoalter.push = require('./push_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.shoalter.push.PushServiceClient =
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
proto.com.shoalter.push.PushServicePromiseClient =
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
 *   !proto.com.shoalter.push.ChatRoomStreamRequest,
 *   !proto.com.shoalter.push.ChatRoomStreamReply>}
 */
const methodDescriptor_PushService_chatRoomStream = new grpc.web.MethodDescriptor(
  '/com.shoalter.push.PushService/chatRoomStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.shoalter.push.ChatRoomStreamRequest,
  proto.com.shoalter.push.ChatRoomStreamReply,
  /**
   * @param {!proto.com.shoalter.push.ChatRoomStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.push.ChatRoomStreamReply.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.push.ChatRoomStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.push.ChatRoomStreamReply>}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.push.PushServiceClient.prototype.chatRoomStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.shoalter.push.PushService/chatRoomStream',
      request,
      metadata || {},
      methodDescriptor_PushService_chatRoomStream);
};


/**
 * @param {!proto.com.shoalter.push.ChatRoomStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.push.ChatRoomStreamReply>}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.push.PushServicePromiseClient.prototype.chatRoomStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.shoalter.push.PushService/chatRoomStream',
      request,
      metadata || {},
      methodDescriptor_PushService_chatRoomStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.shoalter.push.CloseChatRoomRequest,
 *   !proto.com.shoalter.push.CloseChatRoomReply>}
 */
const methodDescriptor_PushService_closeChatRoom = new grpc.web.MethodDescriptor(
  '/com.shoalter.push.PushService/closeChatRoom',
  grpc.web.MethodType.UNARY,
  proto.com.shoalter.push.CloseChatRoomRequest,
  proto.com.shoalter.push.CloseChatRoomReply,
  /**
   * @param {!proto.com.shoalter.push.CloseChatRoomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.push.CloseChatRoomReply.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.push.CloseChatRoomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.shoalter.push.CloseChatRoomReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.push.CloseChatRoomReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.push.PushServiceClient.prototype.closeChatRoom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.shoalter.push.PushService/closeChatRoom',
      request,
      metadata || {},
      methodDescriptor_PushService_closeChatRoom,
      callback);
};


/**
 * @param {!proto.com.shoalter.push.CloseChatRoomRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.shoalter.push.CloseChatRoomReply>}
 *     Promise that resolves to the response
 */
proto.com.shoalter.push.PushServicePromiseClient.prototype.closeChatRoom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.shoalter.push.PushService/closeChatRoom',
      request,
      metadata || {},
      methodDescriptor_PushService_closeChatRoom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.shoalter.push.UnsubscribeStreamRequest,
 *   !proto.com.shoalter.push.UnsubscribeStreamReply>}
 */
const methodDescriptor_PushService_unsubscribeStream = new grpc.web.MethodDescriptor(
  '/com.shoalter.push.PushService/unsubscribeStream',
  grpc.web.MethodType.UNARY,
  proto.com.shoalter.push.UnsubscribeStreamRequest,
  proto.com.shoalter.push.UnsubscribeStreamReply,
  /**
   * @param {!proto.com.shoalter.push.UnsubscribeStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.shoalter.push.UnsubscribeStreamReply.deserializeBinary
);


/**
 * @param {!proto.com.shoalter.push.UnsubscribeStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.shoalter.push.UnsubscribeStreamReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.shoalter.push.UnsubscribeStreamReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.shoalter.push.PushServiceClient.prototype.unsubscribeStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.shoalter.push.PushService/unsubscribeStream',
      request,
      metadata || {},
      methodDescriptor_PushService_unsubscribeStream,
      callback);
};


/**
 * @param {!proto.com.shoalter.push.UnsubscribeStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.shoalter.push.UnsubscribeStreamReply>}
 *     Promise that resolves to the response
 */
proto.com.shoalter.push.PushServicePromiseClient.prototype.unsubscribeStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.shoalter.push.PushService/unsubscribeStream',
      request,
      metadata || {},
      methodDescriptor_PushService_unsubscribeStream);
};


module.exports = proto.com.shoalter.push;

