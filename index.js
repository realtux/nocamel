var define = function(native, name, value, get) {
    var props = {
        configurable: false,
        enumerable: false
    };

    if (value) {
        props.value = value;
    }

    if (get) props.get = get;

    Object.defineProperty(native, name, props);
};

// global fns
decode_uri = decodeURI;
decode_uri_component = decodeURIComponent;
encode_uri = encodeURI;
encode_uri_component = encodeURIComponent;
parse_int = parseInt;
parse_float = parseFloat;
is_finite = isFinite;
is_nan = isNaN;

// obj fns
define(Array, 'is_array', Array.isArray);
define(Object, 'define_property', Object.defineProperty);
define(Object, 'define_properties', Object.defineProperties);
define(Object, 'get_own_property_descriptor', Object.getOwnPropertyDescriptor);
define(Object, 'get_own_property_descriptors', Object.getOwnPropertyDescriptors);
define(Object, 'get_own_property_names', Object.getOwnPropertyNames);
define(Object, 'get_own_property_symbols', Object.getOwnPropertySymbols);
define(Object, 'is_extensible', Object.isExtensible);
define(Object, 'is_frozen', Object.isFrozen);
define(Object, 'is_sealed', Object.isSealed);
define(Object, 'prevent_extensions', Object.preventExtensions);
define(Object, 'set_property_of', Object.setPropertyOf);

// instance fns
define(Array.prototype, 'copy_within', Array.prototype.copyWithin);
define(Array.prototype, 'find_index', Array.prototype.findIndex);
define(Array.prototype, 'for_each', Array.prototype.forEach);
define(Array.prototype, 'index_of', Array.prototype.indexOf);
define(Array.prototype, 'last_index_of', Array.prototype.lastIndexOf);
define(Array.prototype, 'reduce_right', Array.prototype.reduceRight);
define(Array.prototype, 'to_locale_string', Array.prototype.toLocaleString);
define(Array.prototype, 'to_source', Array.prototype.toSource);
define(Array.prototype, 'to_string', Array.prototype.toString);
define(ArrayBuffer.prototype, 'is_view', ArrayBuffer.prototype.isView);
define(DataView.prototype, 'get_float32', DataView.prototype.getFloat32);
define(DataView.prototype, 'get_float64', DataView.prototype.getFloat64);
define(DataView.prototype, 'get_int8', DataView.prototype.getInt8);
define(DataView.prototype, 'get_int16', DataView.prototype.getInt16);
define(DataView.prototype, 'get_int32', DataView.prototype.getInt32);
define(DataView.prototype, 'get_uint8', DataView.prototype.getUint8);
define(DataView.prototype, 'get_uint16', DataView.prototype.getUint16);
define(DataView.prototype, 'get_uint32', DataView.prototype.getUint32);
define(DataView.prototype, 'set_float32', DataView.prototype.setFloat32);
define(DataView.prototype, 'set_float64', DataView.prototype.setFloat64);
define(DataView.prototype, 'set_int8', DataView.prototype.setInt8);
define(DataView.prototype, 'set_int16', DataView.prototype.setInt16);
define(DataView.prototype, 'set_int32', DataView.prototype.setInt32);
define(DataView.prototype, 'set_uint8', DataView.prototype.setUint8);
define(DataView.prototype, 'set_uint16', DataView.prototype.setUint16);
define(DataView.prototype, 'set_uint32', DataView.prototype.setUint32);
define(Boolean.prototype, 'to_source', Boolean.prototype.toSource);
define(Boolean.prototype, 'to_string', Boolean.prototype.toString);
define(Boolean.prototype, 'value_of', Boolean.prototype.valueOf);
define(Function.prototype, 'is_generator', Function.prototype.isGenerator);
define(Function.prototype, 'to_source', Function.prototype.toSource);
define(Function.prototype, 'to_string', Function.prototype.toString);
define(Map.prototype, 'for_each', Map.prototype.forEach);
define(Number.prototype, 'to_exponential', Number.prototype.toExponential);
define(Number.prototype, 'to_fixed', Number.prototype.toFixed);
define(Number.prototype, 'to_locale_string', Number.prototype.toLocaleString);
define(Number.prototype, 'to_precision', Number.prototype.toPrecision);
define(Number.prototype, 'to_source', Number.prototype.toSource);
define(Number.prototype, 'to_string', Number.prototype.toString);
define(Number.prototype, 'value_of', Number.prototype.valueOf);
define(Object.prototype, 'has_own_property', Object.prototype.hasOwnProperty);
define(Object.prototype, 'is_prototype_of', Object.prototype.isPrototypeOf);
define(Object.prototype, 'property_is_enumerable', Object.prototype.propertyIsEnumerable);
define(Object.prototype, 'to_locale_string', Object.prototype.toLocaleString);
define(Object.prototype, 'to_source', Object.prototype.toSource);
define(Object.prototype, 'to_string', Object.prototype.toString);
define(Object.prototype, 'value_of', Object.prototype.valueOf);
define(String.prototype, 'char_at', String.prototype.charAt);
define(String.prototype, 'char_code_at', String.prototype.charCodeAt);
define(String.prototype, 'index_of', String.prototype.indexOf);
define(String.prototype, 'last_index_of', String.prototype.lastIndexOf);
define(String.prototype, 'locale_compare', String.prototype.localeCompare);
define(String.prototype, 'to_lower_case', String.prototype.toLowerCase);
define(String.prototype, 'to_upper_case', String.prototype.toUpperCase);
define(String.prototype, 'to_string', String.prototype.toString);
define(String.prototype, 'starts_with', String.prototype.startsWith);

// global node fns
set_timeout = setTimeout;
set_immediate = setImmediate;
set_interval = setInterval;
clear_timeout = clearTimeout;
clear_immediate = clearImmediate;
clear_interval = clearInterval;

var assert = require('assert');
// module fns
define(assert, 'deep_equal', assert.deepEqual);
define(assert, 'deep_strict_equal', assert.deepStrictEqual);
define(assert, 'does_not_throw', assert.doesNotThrow);
define(assert, 'if_error', assert.ifError);
define(assert, 'not_deep_equal', assert.notDeepEqual);
define(assert, 'not_deep_strict_equal', assert.notDeepStrictEqual);
define(assert, 'not_equal', assert.notEqual);
define(assert, 'not_strict_equal', assert.notStrictEqual);
define(assert, 'strict_equal', assert.strictEqual);

var buffer = require('buffer');
// module props
define(buffer, 'k_max_length', null, function() { return this.kMaxLength; });
// obj props
define(Buffer, 'pool_size', null, function() { return this.poolSize; });
// obj fns
define(Buffer, 'alloc_unsafe', Buffer.allocUnsafe);
define(Buffer, 'alloc_unsafe_slow', Buffer.allocUnsafeSlow);
define(Buffer, 'byte_length', Buffer.byteLength);
define(Buffer, 'is_buffer', Buffer.isBuffer);
define(Buffer, 'is_encoding', Buffer.isEncoding);
// instance fns
define(Buffer.prototype, 'index_of', Buffer.prototype.indexOf);
define(Buffer.prototype, 'last_index_of', Buffer.prototype.lastIndexOf);
define(Buffer.prototype, 'read_double_be', Buffer.prototype.readDoubleBE);
define(Buffer.prototype, 'read_double_le', Buffer.prototype.readDoubleLE);
define(Buffer.prototype, 'read_float_be', Buffer.prototype.readFloatBE);
define(Buffer.prototype, 'read_float_le', Buffer.prototype.readFloatLE);
define(Buffer.prototype, 'read_int8', Buffer.prototype.readInt8);
define(Buffer.prototype, 'read_int16_be', Buffer.prototype.readInt16BE);
define(Buffer.prototype, 'read_int16_le', Buffer.prototype.readInt16LE);
define(Buffer.prototype, 'read_int32_be', Buffer.prototype.readInt32BE);
define(Buffer.prototype, 'read_int32_le', Buffer.prototype.readInt32LE);
define(Buffer.prototype, 'read_int_be', Buffer.prototype.readIntBE);
define(Buffer.prototype, 'read_int_le', Buffer.prototype.readIntLE);
define(Buffer.prototype, 'read_uint8', Buffer.prototype.readUInt8);
define(Buffer.prototype, 'read_uint16_be', Buffer.prototype.readUInt16BE);
define(Buffer.prototype, 'read_uint16_le', Buffer.prototype.readUInt16LE);
define(Buffer.prototype, 'read_uint32_be', Buffer.prototype.readUInt32BE);
define(Buffer.prototype, 'read_uint32_le', Buffer.prototype.readUInt32LE);
define(Buffer.prototype, 'read_uint_be', Buffer.prototype.readUIntBE);
define(Buffer.prototype, 'read_uint_le', Buffer.prototype.readUIntLE);
define(Buffer.prototype, 'to_string', Buffer.prototype.toString);
define(Buffer.prototype, 'to_json', Buffer.prototype.toJSON);
define(Buffer.prototype, 'write_double_be', Buffer.prototype.writeDoubleBE);
define(Buffer.prototype, 'write_double_le', Buffer.prototype.writeDoubleLE);
define(Buffer.prototype, 'write_float_be', Buffer.prototype.writeFloatBE);
define(Buffer.prototype, 'write_float_le', Buffer.prototype.writeFloatLE);
define(Buffer.prototype, 'write_int8', Buffer.prototype.writeInt8);
define(Buffer.prototype, 'write_int16_be', Buffer.prototype.writeInt16BE);
define(Buffer.prototype, 'write_int16_le', Buffer.prototype.writeInt16LE);
define(Buffer.prototype, 'write_int32_be', Buffer.prototype.writeInt32BE);
define(Buffer.prototype, 'write_int32_le', Buffer.prototype.writeInt32LE);
define(Buffer.prototype, 'write_int_be', Buffer.prototype.writeIntBE);
define(Buffer.prototype, 'write_int_le', Buffer.prototype.writeIntLE);
define(Buffer.prototype, 'write_uint8', Buffer.prototype.writeUInt8);
define(Buffer.prototype, 'write_uint16_be', Buffer.prototype.writeUInt16BE);
define(Buffer.prototype, 'write_uint16_le', Buffer.prototype.writeUInt16LE);
define(Buffer.prototype, 'write_uint32_be', Buffer.prototype.writeUInt32BE);
define(Buffer.prototype, 'write_uint32_le', Buffer.prototype.writeUInt32LE);
define(Buffer.prototype, 'write_uint_be', Buffer.prototype.writeUIntBE);
define(Buffer.prototype, 'write_uint_le', Buffer.prototype.writeUIntLE);

var child_process = require('child_process');
// module fns
define(child_process, 'exec_file', child_process.execFile);
define(child_process, 'exec_file_sync', child_process.execFileSync);
define(child_process, 'spawn_sync', child_process.spawnSync);

var cluster = require('cluster');
define(cluster, 'is_master', null, function() { return this.isMaster; });
define(cluster, 'is_worker', null, function() { return this.isWorker; });
define(cluster, 'scheduling_policy', null, function() { return this.schedulingPolicy; });
define(cluster, 'setup_master', cluster.setupMaster);

define(console, 'time_end', console.timeEnd);

var fs = require('fs');
// module fns
define(fs, 'access_sync', fs.accessSync);
define(fs, 'append_file', fs.appendFile);
define(fs, 'append_file_sync', fs.appendFileSync);
define(fs, 'chmod_sync', fs.chmodSync);
define(fs, 'chown_sync', fs.chownSync);
define(fs, 'close_sync', fs.closeSync);
define(fs, 'create_read_stream', fs.createReadStream);
define(fs, 'create_write_stream', fs.createWriteStream);
define(fs, 'exists_sync', fs.existsSync);
define(fs, 'fchmod_sync', fs.fchmodSync);
define(fs, 'fchown_sync', fs.fchownSync);
define(fs, 'fdatasync_sync', fs.fdatasyncSync);
define(fs, 'fstat_sync', fs.fstatSync);
define(fs, 'fsync_sync', fs.fsyncSync);
define(fs, 'ftruncate_sync', fs.ftruncateSync);
define(fs, 'futimes_sync', fs.futimesSync);
define(fs, 'lchmod_sync', fs.lchmodSync);
define(fs, 'lchown_sync', fs.lchownSync);
define(fs, 'link_sync', fs.linkSync);
define(fs, 'lstat_sync', fs.lstatSync);
define(fs, 'mkdir_sync', fs.mkdirSync);
define(fs, 'mkdtemp_sync', fs.mkdtempSync);
define(fs, 'open_sync', fs.openSync);
define(fs, 'readdir_sync', fs.readdirSync);
define(fs, 'read_file', fs.readFile);
define(fs, 'read_file_sync', fs.readFileSync);
define(fs, 'readlink_sync', fs.readlinkSync);
define(fs, 'read_sync', fs.readSync);
define(fs, 'realpath_sync', fs.realpathSync);
define(fs, 'rename_sync', fs.renameSync);
define(fs, 'rmdir_sync', fs.rmdirSync);
define(fs, 'stat_sync', fs.statSync);
define(fs, 'symlink_sync', fs.symlinkSync);
define(fs, 'truncate_sync', fs.truncateSync);
define(fs, 'unlink_sync', fs.unlinkSync);
define(fs, 'unwatch_file', fs.unwatchFile);
define(fs, 'utimes_sync', fs.utimesSync);
define(fs, 'watch_file', fs.watchFile);
define(fs, 'write_file', fs.writeFile);
define(fs, 'write_file_sync', fs.writeFileSync);
define(fs, 'write_sync', fs.writeSync);

var os = require('os');
define(os, 'network_interfaces', fs.networkInterfaces);
define(os, 'user_info', fs.userInfo);

var path = require('path');
define(path, 'is_absolute', fs.isAbsolute);

define(process, 'cpu_usage', null, function() { return this.cpuUsage; });
define(process, 'exec_argv', null, function() { return this.execArgv; });
define(process, 'exec_path', null, function() { return this.execPath; });
define(process, 'exit_code', null, function() { return this.exitCode; });
define(process, 'main_module', null, function() { return this.mainModule; });
define(process, 'next_tick', process.nextTick);