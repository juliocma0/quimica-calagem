(function(){
'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.t() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.ge();
      }
    }
  }
}
function $dp_compareTo__O__I(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, x0);
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, x0);
    }
    default: {
      if ((instance instanceof $Long)) {
        return $f_jl_Long__compareTo__O__I(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance.c, x0);
      } else {
        return instance.gb(x0);
      }
    }
  }
}
function $dp_compareTo__T__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__compareTo__T__I(instance, x0);
  } else {
    return instance.gc(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.aw(x0);
  } else {
    return $c_O.prototype.aw.call(instance, x0);
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.j();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.j.call(instance);
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
$p.aw = (function(that) {
  return (this === that);
});
$p.A = (function() {
  var i = this.j();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.A();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.o = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.t = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.o = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.t = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.o = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.t = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.o = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.t = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.o = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.t = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.o = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.t = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.o = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.t = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.o = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.t = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.o = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.t = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    r: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.a;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.o = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.t = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    r: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $typedArraysAreBigEndian = (new Int8Array(new Int32Array([1]).buffer)[0] === 0);
function $constArrayBuffer_B(len, encoded) {
  var buf = new ArrayBuffer(len);
  var view = new DataView(buf);
  var regularChunksEnd = ((encoded.length - 4) | 0);
  var i = 0;
  var j = 0;
  var chunk = 0;
  while (true) {
    chunk = (((encoded.charCodeAt(i) | (encoded.charCodeAt(((i + 1) | 0)) << 8)) | (encoded.charCodeAt(((i + 2) | 0)) << 16)) | (encoded.charCodeAt(((i + 3) | 0)) << 24));
    chunk = ((((chunk - 808464432) | 0) - ((chunk & 1616928864) >>> 3)) | 0);
    chunk = (((chunk & 1056980736) >>> 2) | (chunk & 4128831));
    chunk = (((chunk & 268369920) >>> 4) | (chunk & 4095));
    if ((i === regularChunksEnd)) {
      break;
    }
    view.setUint32(j, chunk, true);
    i = ((i + 4) | 0);
    j = ((j + 3) | 0);
  }
  var trailing = ((len - j) | 0);
  view.setUint8(j, chunk);
  if ((trailing !== 1)) {
    view.setUint8(((j + 1) | 0), (chunk >>> 8));
    if ((trailing === 3)) {
      view.setUint8(((j + 2) | 0), (chunk >>> 16));
    }
  }
  return buf;
}
function $constArrayBuffer_S(len, encoded) {
  var buf = $constArrayBuffer_B((len << 1), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt16(i, view.getInt16(i, true), false);
      i = ((i + 2) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_I(len, encoded) {
  var buf = $constArrayBuffer_B((len << 2), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt32(i, view.getInt32(i, true), false);
      i = ((i + 4) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_J(len, encoded) {
  return $constArrayBuffer_I((len << 1), encoded);
}
function $constTypedArrayU_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      v = ((v | (c - 48)) << 5);
    } else {
      v = (v | (c - 93));
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
      v = 0;
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constTypedArrayS_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  var first = true;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      if (first) {
        v = (((c - 48) << 27) >> 22);
        first = false;
      } else {
        v = ((v | (c - 48)) << 5);
      }
    } else {
      if (first) {
        v = (((c - 93) << 27) >> 27);
      } else {
        v = (v | (c - 93));
        first = true;
      }
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constArrRaw_B(len, encoded) {
  return new $ac_B(new Int8Array($constArrayBuffer_B(len, encoded)));
}
function $constArrRaw_S(len, encoded) {
  return new $ac_S(new Int16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_C(len, encoded) {
  return new $ac_C(new Uint16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_I(len, encoded) {
  return new $ac_I(new Int32Array($constArrayBuffer_I(len, encoded)));
}
function $constArrRaw_J(len, encoded) {
  return new $ac_J(new Int32Array($constArrayBuffer_J(len, encoded)));
}
function $constArrUVals_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, 0));
}
function $constArrUDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, (-1)));
}
function $constArrSVals_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, 0));
}
function $constArrSDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, (-1)));
}
function $constArrUVals_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, 0));
}
function $constArrUDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, (-1)));
}
function $constArrSVals_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, 0));
}
function $constArrSDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, (-1)));
}
function $p_Lcalagem_Interface__velocidadeAtual__D($thiz) {
  return $thiz.cx.a[$thiz.c2];
}
function $p_Lcalagem_Interface__criarControles__V($thiz) {
  $thiz.aU.className = "painel-controles";
  $thiz.bs.className = "informacoes";
  $p_Lcalagem_Interface__pHCriarEscala__V($thiz);
  $thiz.c1.textContent = "H\u207a: --";
  $thiz.c6.textContent = "Rea\u00e7\u00f5es: --";
  $thiz.bs.appendChild($thiz.c1);
  $thiz.bs.appendChild($thiz.c6);
  $thiz.aU.appendChild($thiz.bs);
  var botoes = document.createElement("div");
  botoes.className = "botoes";
  var botaoCalcario = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Adicionar calc\u00e1rio", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.aB.f3(5);
  })));
  var botaoPausa = new $c_sr_ObjectRef(null);
  botaoPausa.aa = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Pausar", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.b9 = (!$thiz.b9);
    $thiz.aB.bv = (!$thiz.b9);
    if ($thiz.b9) {
      botaoPausa.aa.textContent = "Continuar";
    } else {
      botaoPausa.aa.textContent = "Pausar";
    }
  })));
  var botaoReiniciar = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Reiniciar", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.aB.eo();
    $thiz.b9 = false;
    $thiz.aB.bv = true;
    botaoPausa.aa.textContent = "Pausar";
    $thiz.bt = 0.0;
    $p_Lcalagem_Interface__atualizarInformacoes__V($thiz);
    $thiz.c7.d4();
  })));
  var botaoVelocidade = new $c_sr_ObjectRef(null);
  botaoVelocidade.aa = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Velocidade: 1x", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.c2 = ((((1 + $thiz.c2) | 0) % $checkIntDivisor($thiz.cx.a.length)) | 0);
    botaoVelocidade.aa.textContent = (("Velocidade: " + $p_Lcalagem_Interface__velocidadeAtual__D($thiz)) + "x");
  })));
  botoes.appendChild(botaoCalcario);
  botoes.appendChild(botaoPausa.aa);
  botoes.appendChild(botaoReiniciar);
  botoes.appendChild(botaoVelocidade.aa);
  $thiz.aU.appendChild(botoes);
  document.body.appendChild($thiz.aU);
}
function $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, texto, acao) {
  var botao = document.createElement("button");
  botao.textContent = texto;
  botao.className = "botao";
  botao.onclick = ((_$1$2) => {
    acao.Y();
  });
  return botao;
}
function $p_Lcalagem_Interface__pHCriarEscala__V($thiz) {
  $thiz.c3.className = "ph-escala";
  $thiz.c4.className = "ph-marca";
  $thiz.c3.appendChild($thiz.c4);
  $thiz.c5.className = "ph-rotulo";
  var i = 0;
  while (true) {
    var x0 = i;
    var rotulo = document.createElement("span");
    rotulo.textContent = ("" + x0);
    $thiz.c5.appendChild(rotulo);
    if ((i === 14)) {
      break;
    }
    i = ((1 + i) | 0);
  }
  $thiz.aU.appendChild($thiz.c3);
  $thiz.aU.appendChild($thiz.c5);
}
function $p_Lcalagem_Interface__atualizarInformacoes__V($thiz) {
  var pH = $thiz.aB.fL();
  var y = (+Math.min(14.0, pH));
  var pHLimitado = (+Math.max(0.0, y));
  var posicao = (100.0 * (pHLimitado / 14.0));
  $thiz.c1.textContent = ("H\u207a: " + $thiz.aB.en());
  $thiz.c6.textContent = ("Rea\u00e7\u00f5es: " + $thiz.aB.bw);
  $thiz.c4.style.left = (posicao + "%");
}
function $p_Lcalagem_Interface__animar__D__V($thiz, tempoAtual) {
  var dt = (($thiz.bt === 0.0) ? 0.0 : ((tempoAtual - $thiz.bt) / 1000.0));
  $thiz.bt = tempoAtual;
  $thiz.aB.f4((dt * $p_Lcalagem_Interface__velocidadeAtual__D($thiz)));
  $thiz.c7.d4();
  $p_Lcalagem_Interface__atualizarInformacoes__V($thiz);
  window.requestAnimationFrame(((tempoAtual$3) => {
    $p_Lcalagem_Interface__animar__D__V($thiz, (+tempoAtual$3));
  }));
}
/** @constructor */
function $c_Lcalagem_Interface(simulacao, renderizador) {
  this.aB = null;
  this.c7 = null;
  this.bt = 0.0;
  this.aU = null;
  this.bs = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c1 = null;
  this.c6 = null;
  this.cx = null;
  this.c2 = 0;
  this.b9 = false;
  this.aB = simulacao;
  this.c7 = renderizador;
  this.bt = 0.0;
  this.aU = document.createElement("div");
  this.bs = document.createElement("div");
  this.c3 = document.createElement("div");
  this.c4 = document.createElement("div");
  this.c5 = document.createElement("div");
  this.c1 = document.createElement("span");
  this.c6 = document.createElement("span");
  this.cx = new $ac_D(new Float64Array([1.0, 2.0, 4.0]));
  this.c2 = 0;
  this.b9 = false;
}
$p = $c_Lcalagem_Interface.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Interface;
/** @constructor */
function $h_Lcalagem_Interface() {
}
$h_Lcalagem_Interface.prototype = $p;
$p.fA = (function() {
  $p_Lcalagem_Interface__criarControles__V(this);
  $p_Lcalagem_Interface__atualizarInformacoes__V(this);
  this.c7.d4();
  window.requestAnimationFrame(((tempoAtual$3) => {
    $p_Lcalagem_Interface__animar__D__V(this, (+tempoAtual$3));
  }));
});
var $d_Lcalagem_Interface = new $TypeData().i($c_Lcalagem_Interface, "calagem.Interface", ({
  aW: 1
}));
function $s_Lcalagem_Main__main__AT__V(args) {
  $m_Lcalagem_Main$().fF(args);
}
/** @constructor */
function $c_Lcalagem_Main$() {
}
$p = $c_Lcalagem_Main$.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Main$;
/** @constructor */
function $h_Lcalagem_Main$() {
}
$h_Lcalagem_Main$.prototype = $p;
$p.fF = (function(args) {
  var canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  canvas.className = "simulacao";
  document.body.appendChild(canvas);
  var simulacao = new $c_Lcalagem_Simulacao(400.0, 400.0);
  var renderizador = new $c_Lcalagem_Renderizador(canvas, simulacao);
  simulacao.eo();
  new $c_Lcalagem_Interface(simulacao, renderizador).fA();
});
var $d_Lcalagem_Main$ = new $TypeData().i($c_Lcalagem_Main$, "calagem.Main$", ({
  aX: 1
}));
var $n_Lcalagem_Main$;
function $m_Lcalagem_Main$() {
  if ((!$n_Lcalagem_Main$)) {
    $n_Lcalagem_Main$ = new $c_Lcalagem_Main$();
  }
  return $n_Lcalagem_Main$;
}
/** @constructor */
function $c_Lcalagem_Quimica$() {
}
$p = $c_Lcalagem_Quimica$.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Quimica$;
/** @constructor */
function $h_Lcalagem_Quimica$() {
}
$h_Lcalagem_Quimica$.prototype = $p;
$p.fn = (function(pHInicial, hidrogenioInicial, hidrogenioRestante) {
  if ((hidrogenioRestante <= 0)) {
    return 7.0;
  } else {
    var fracao = (hidrogenioRestante / hidrogenioInicial);
    var y = (pHInicial - (+Math.log10(fracao)));
    return (+Math.min(7.0, y));
  }
});
var $d_Lcalagem_Quimica$ = new $TypeData().i($c_Lcalagem_Quimica$, "calagem.Quimica$", ({
  b0: 1
}));
var $n_Lcalagem_Quimica$;
function $m_Lcalagem_Quimica$() {
  if ((!$n_Lcalagem_Quimica$)) {
    $n_Lcalagem_Quimica$ = new $c_Lcalagem_Quimica$();
  }
  return $n_Lcalagem_Quimica$;
}
function $p_Lcalagem_Renderizador__cor__Lcalagem_TipoParticula__T($thiz, tipo) {
  var x = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
  if (((x === null) ? (tipo === null) : (x === tipo))) {
    return "#F05D63";
  }
  var x$3 = $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula();
  if (((x$3 === null) ? (tipo === null) : (x$3 === tipo))) {
    return "#A78BFA";
  }
  var x$5 = $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
  if (((x$5 === null) ? (tipo === null) : (x$5 === tipo))) {
    return "#E5E0D5";
  }
  var x$7 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
  if (((x$7 === null) ? (tipo === null) : (x$7 === tipo))) {
    return "#F5A623";
  }
  var x$9 = $s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula();
  if (((x$9 === null) ? (tipo === null) : (x$9 === tipo))) {
    return "#50BDE5";
  }
  var x$11 = $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
  if (((x$11 === null) ? (tipo === null) : (x$11 === tipo))) {
    return "#B7B7B7";
  }
  var x$13 = $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
  if (((x$13 === null) ? (tipo === null) : (x$13 === tipo))) {
    return "#8DD9ED";
  }
  throw new $c_s_MatchError(tipo);
}
function $p_Lcalagem_Renderizador__corEscuro__Lcalagem_TipoParticula__T($thiz, tipo) {
  var x = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
  if (((x === null) ? (tipo === null) : (x === tipo))) {
    return "#661013";
  }
  var x$3 = $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula();
  if (((x$3 === null) ? (tipo === null) : (x$3 === tipo))) {
    return "#242583";
  }
  var x$5 = $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
  if (((x$5 === null) ? (tipo === null) : (x$5 === tipo))) {
    return "#705441";
  }
  var x$7 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
  if (((x$7 === null) ? (tipo === null) : (x$7 === tipo))) {
    return "#724108";
  }
  var x$9 = $s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula();
  if (((x$9 === null) ? (tipo === null) : (x$9 === tipo))) {
    return "#114169";
  }
  var x$11 = $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
  if (((x$11 === null) ? (tipo === null) : (x$11 === tipo))) {
    return "#3f3434";
  }
  var x$13 = $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
  if (((x$13 === null) ? (tipo === null) : (x$13 === tipo))) {
    return "#1f4e7a";
  }
  throw new $c_s_MatchError(tipo);
}
function $p_Lcalagem_Renderizador__rotulo__Lcalagem_TipoParticula__T($thiz, tipo) {
  var x = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
  if (((x === null) ? (tipo === null) : (x === tipo))) {
    return "H+";
  }
  var x$3 = $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula();
  if (((x$3 === null) ? (tipo === null) : (x$3 === tipo))) {
    return "Al3+";
  }
  var x$5 = $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
  if (((x$5 === null) ? (tipo === null) : (x$5 === tipo))) {
    return "CaCO3";
  }
  var x$7 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
  if (((x$7 === null) ? (tipo === null) : (x$7 === tipo))) {
    return "CO3";
  }
  var x$9 = $s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula();
  if (((x$9 === null) ? (tipo === null) : (x$9 === tipo))) {
    return "Ca2+";
  }
  var x$11 = $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
  if (((x$11 === null) ? (tipo === null) : (x$11 === tipo))) {
    return "CO2";
  }
  var x$13 = $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
  if (((x$13 === null) ? (tipo === null) : (x$13 === tipo))) {
    return "H2O";
  }
  throw new $c_s_MatchError(tipo);
}
function $p_Lcalagem_Renderizador__raio__Lcalagem_TipoParticula__D($thiz, tipo) {
  var x = $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
  if (((x === null) ? (tipo === null) : (x === tipo))) {
    return 16.0;
  } else {
    var x$3 = $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula();
    if (((x$3 === null) ? (tipo === null) : (x$3 === tipo))) {
      return 14.0;
    } else {
      return 12.0;
    }
  }
}
/** @constructor */
function $c_Lcalagem_Renderizador(canvas, simulacao) {
  this.cy = null;
  this.d8 = null;
  this.B = null;
  this.cy = canvas;
  this.d8 = simulacao;
  this.B = canvas.getContext("2d");
}
$p = $c_Lcalagem_Renderizador.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Renderizador;
/** @constructor */
function $h_Lcalagem_Renderizador() {
}
$h_Lcalagem_Renderizador.prototype = $p;
$p.d4 = (function() {
  this.B.fillStyle = "#FFFFFF";
  this.B.fillRect(0.0, 0.0, (this.cy.width | 0), (this.cy.height | 0));
  var this$4 = this.d8.N;
  var it = this$4.aJ().b();
  while (it.f()) {
    var x0 = it.e();
    var r = $p_Lcalagem_Renderizador__raio__Lcalagem_TipoParticula__D(this, x0.a3);
    var base = $p_Lcalagem_Renderizador__cor__Lcalagem_TipoParticula__T(this, x0.a3);
    var grad = this.B.createRadialGradient((x0.F - (0.4 * r)), (x0.G - (0.45 * r)), (0.05 * r), x0.F, x0.G, (1.1 * r));
    grad.addColorStop(0.0, "#FFFFFF");
    grad.addColorStop(0.3, base);
    grad.addColorStop(0.5, base);
    grad.addColorStop(1.0, $p_Lcalagem_Renderizador__corEscuro__Lcalagem_TipoParticula__T(this, x0.a3));
    this.B.beginPath();
    this.B.arc(x0.F, x0.G, (r - 0.7), 0.0, 6.283185307179586);
    this.B.fillStyle = grad;
    this.B.fill();
    this.B.fillStyle = "#000000";
    this.B.font = "10px Arial";
    this.B.textAlign = "center";
    this.B.textBaseline = "middle";
    this.B.shadowColor = "rgba(0, 0, 0, 0.35)";
    this.B.shadowBlur = 2.0;
    this.B.shadowOffsetX = 0.5;
    this.B.shadowOffsetY = 0.5;
    this.B.fillText($p_Lcalagem_Renderizador__rotulo__Lcalagem_TipoParticula__T(this, x0.a3), x0.F, x0.G);
    this.B.shadowColor = "transparent";
    this.B.shadowBlur = 0.0;
    this.B.shadowOffsetX = 0.0;
    this.B.shadowOffsetY = 0.0;
  }
});
var $d_Lcalagem_Renderizador = new $TypeData().i($c_Lcalagem_Renderizador, "calagem.Renderizador", ({
  b1: 1
}));
function $p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, a, b) {
  return $m_jl_Math$().fx((a.F - b.F), (a.G - b.G));
}
function $p_Lcalagem_Simulacao__dissolver__Lcalagem_Particula__V($thiz, calcario) {
  calcario.a4 = false;
  $thiz.N.aS($m_Lcalagem_Particula$().b2($s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula(), calcario.F, calcario.G));
  $thiz.N.aS($m_Lcalagem_Particula$().b2($s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula(), calcario.F, calcario.G));
}
function $p_Lcalagem_Simulacao__reagir__V($thiz) {
  var this$1 = $thiz.N;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it = this$1.aJ().b();
  while (it.f()) {
    var elem = it.e();
    if (elem.a4) {
      var x = elem.a3;
      var x$2 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      b.ck(elem);
    }
  }
  var carbonatos = b.aF.aA();
  var this$9 = new $c_sc_IterableOps$WithFilter(carbonatos, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$2) => carbonato$2.a4)));
  var f = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$3) => {
    if (carbonato$3.a4) {
      var this$5 = $thiz.N;
      $m_scm_ArrayBuffer$();
      var b$1 = new $c_scm_ArrayBuffer$$anon$1();
      var it$1 = this$5.aJ().b();
      while (it$1.f()) {
        var elem$1 = it$1.e();
        if (elem$1.a4) {
          var x$1 = elem$1.a3;
          var x$2$1 = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
          var $x_2 = ((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1));
        } else {
          var $x_2 = false;
        }
        if (($x_2 && ($p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, elem$1, carbonato$3) < $thiz.df))) {
          b$1.ck(elem$1);
        }
      }
      var hidrogenioProximo = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(b$1.aF, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$2$1) => ((p$2) => $p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, p$2, carbonato$2$1)))(carbonato$3)), $m_s_math_Ordering$DeprecatedDoubleOrdering$()).ao(2);
      if ((hidrogenioProximo.p === 2)) {
        carbonato$3.a4 = false;
        var it$2 = hidrogenioProximo.aJ().b();
        while (it$2.f()) {
          var x0 = it$2.e();
          x0.a4 = false;
        }
        $thiz.N.aS($m_Lcalagem_Particula$().b2($s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula(), carbonato$3.F, carbonato$3.G));
        $thiz.N.aS($m_Lcalagem_Particula$().b2($s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula(), (carbonato$3.F + $thiz.db), carbonato$3.G));
        $thiz.bw = ((1 + $thiz.bw) | 0);
      }
    }
  }));
  this$9.fr().bq(f);
}
function $p_Lcalagem_Simulacao__atualizarPasso__D__V($thiz, passo) {
  var this$1 = $thiz.N;
  var it = this$1.aJ().b();
  while (it.f()) {
    var x0 = it.e();
    x0.aV = (x0.aV + passo);
    x0.ap = (x0.ap + ($m_s_util_Random$().av($thiz.cA, $thiz.cz) * passo));
    x0.aq = (x0.aq + ($m_s_util_Random$().av($thiz.cA, $thiz.cz) * passo));
    var self = x0.ap;
    var that = $thiz.cF;
    var self$1 = (+Math.max(self, that));
    var that$1 = $thiz.cE;
    x0.ap = (+Math.min(self$1, that$1));
    var self$2 = x0.aq;
    var that$2 = $thiz.cF;
    var self$3 = (+Math.max(self$2, that$2));
    var that$3 = $thiz.cE;
    x0.aq = (+Math.min(self$3, that$3));
    x0.F = (x0.F + (x0.ap * passo));
    x0.G = (x0.G + (x0.aq * passo));
    if (((x0.F < $thiz.aC) || (x0.F > ($thiz.ba - $thiz.aC)))) {
      x0.ap = (-x0.ap);
      var self$4 = x0.F;
      var that$4 = $thiz.aC;
      var self$5 = (+Math.max(self$4, that$4));
      var that$5 = ($thiz.ba - $thiz.aC);
      x0.F = (+Math.min(self$5, that$5));
    }
    if (((x0.G < $thiz.aC) || (x0.G > ($thiz.bu - $thiz.aC)))) {
      x0.aq = (-x0.aq);
      var self$6 = x0.G;
      var that$6 = $thiz.aC;
      var self$7 = (+Math.max(self$6, that$6));
      var that$7 = ($thiz.bu - $thiz.aC);
      x0.G = (+Math.min(self$7, that$7));
    }
  }
  var this$18 = $thiz.N;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it$1 = this$18.aJ().b();
  while (it$1.f()) {
    var elem = it$1.e();
    if (elem.a4) {
      var x = elem.a3;
      var x$2 = $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (elem.aV > $thiz.dg))) {
      b.ck(elem);
    }
  }
  var this$20 = b.aF.aA();
  var these = this$20;
  while ((!these.m())) {
    $p_Lcalagem_Simulacao__dissolver__Lcalagem_Particula__V($thiz, these.q());
    these = these.V();
  }
  $p_Lcalagem_Simulacao__reagir__V($thiz);
  var this$21 = $thiz.N;
  var i = 0;
  var j = 0;
  while ((i < this$21.p)) {
    var x0$2 = this$21.g(i);
    if (x0$2.a4) {
      var x$1 = x0$2.a3;
      var x$2$1 = $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
      if ((!((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1)))) {
        var x$3 = x0$2.a3;
        var x$4 = $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
        var $x_2 = (!((x$3 === null) ? (x$4 === null) : (x$3 === x$4)));
      } else {
        var $x_2 = false;
      }
    } else {
      var $x_2 = false;
    }
    if (($x_2 || (x0$2.aV <= $thiz.dh))) {
      if ((i !== j)) {
        this$21.g8(j, this$21.g(i));
      }
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  if ((i !== j)) {
    $f_scm_Buffer__takeInPlace__I__scm_Buffer(this$21, j);
  }
}
/** @constructor */
function $c_Lcalagem_Simulacao(largura, altura) {
  this.ba = 0.0;
  this.bu = 0.0;
  this.N = null;
  this.dc = 0.0;
  this.cD = 0;
  this.de = 0;
  this.df = 0.0;
  this.cA = 0.0;
  this.cz = 0.0;
  this.cF = 0.0;
  this.cE = 0.0;
  this.aC = 0.0;
  this.db = 0.0;
  this.aW = 0.0;
  this.cC = 0.0;
  this.cB = 0.0;
  this.da = 0.0;
  this.d9 = 0.0;
  this.dg = 0.0;
  this.dh = 0.0;
  this.dd = 0.0;
  this.bv = false;
  this.bw = 0;
  this.ba = largura;
  this.bu = altura;
  this.N = $m_scm_ArrayBuffer$().ei(new $c_sjsr_WrappedVarArgs([]));
  this.dc = 4.0;
  this.cD = 40;
  this.de = 8;
  this.df = 38.0;
  this.cA = (-15.0);
  this.cz = 15.0;
  this.cF = (-60.0);
  this.cE = 60.0;
  this.aC = 12.0;
  this.db = 8.0;
  this.aW = 30.0;
  this.cC = 40.0;
  this.cB = 50.0;
  this.da = 5.0;
  this.d9 = 45.0;
  this.dg = 1.0;
  this.dh = 3.0;
  this.dd = 0.05;
  this.bv = true;
  this.bw = 0;
}
$p = $c_Lcalagem_Simulacao.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Simulacao;
/** @constructor */
function $h_Lcalagem_Simulacao() {
}
$h_Lcalagem_Simulacao.prototype = $p;
$p.en = (function() {
  var this$1 = this.N;
  var res = 0;
  var it = this$1.aJ().b();
  while (it.f()) {
    var x0 = it.e();
    if (x0.a4) {
      var x = x0.a3;
      var x$2 = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      res = ((1 + res) | 0);
    }
  }
  return res;
});
$p.fL = (function() {
  return $m_Lcalagem_Quimica$().fn(this.dc, this.cD, this.en());
});
$p.eo = (function() {
  $p_scm_ArrayBuffer__reduceToSize__I__V(this.N, 0);
  this.bw = 0;
  this.bv = true;
  var end = this.cD;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      this.N.aS($m_Lcalagem_Particula$().b2($s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula(), $m_s_util_Random$().av(this.aW, (this.ba - this.aW)), $m_s_util_Random$().av(this.cB, (this.bu - this.aW))));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var end$1 = this.de;
  var isEmpty$1 = (end$1 <= 0);
  var scala$collection$immutable$Range$$lastElement$1 = ((end$1 - 1) | 0);
  if ((!isEmpty$1)) {
    var i$1 = 0;
    while (true) {
      this.N.aS($m_Lcalagem_Particula$().b2($s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula(), $m_s_util_Random$().av(this.aW, (this.ba - this.aW)), $m_s_util_Random$().av(this.cB, (this.bu - this.aW))));
      if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
});
$p.f3 = (function(qtd) {
  var end = ((qtd < 0) ? 0 : qtd);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      this.N.aS($m_Lcalagem_Particula$().b2($s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula(), $m_s_util_Random$().av(this.cC, (this.ba - this.cC)), $m_s_util_Random$().av(this.da, this.d9)));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
});
$p.f4 = (function(dt) {
  if ((!this.bv)) {
    return (void 0);
  }
  var restante = (+Math.max(0.0, dt));
  while ((restante > 1.0E-9)) {
    var x = restante;
    var y = this.dd;
    var passo = (+Math.min(x, y));
    $p_Lcalagem_Simulacao__atualizarPasso__D__V(this, passo);
    restante = (restante - passo);
  }
});
var $d_Lcalagem_Simulacao = new $TypeData().i($c_Lcalagem_Simulacao, "calagem.Simulacao", ({
  b2: 1
}));
/** @constructor */
function $c_jl_Math$() {
}
$p = $c_jl_Math$.prototype = new $h_O();
$p.constructor = $c_jl_Math$;
/** @constructor */
function $h_jl_Math$() {
}
$h_jl_Math$.prototype = $p;
$p.fI = (function(a, b) {
  if ((b > a)) {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, a, true);
    var lo = (fpBitsDataView.getInt32(0, true) | 0);
    var hi = (fpBitsDataView.getInt32(4, true) | 0);
    var lo$1 = (hi >> 31);
    var hi$1 = (hi >> 31);
    var lo$2 = (1 | lo$1);
    var lo$3 = ((lo + lo$2) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + (((lo$3 >>> 0) < (lo >>> 0)) | 0)) | 0);
    if (((2146435072 & (hi$2 | ((hi ^ hi$2) >> 11))) !== 2146435072)) {
      var fpBitsDataView$1 = $fpBitsDataView;
      fpBitsDataView$1.setInt32(0, lo$3, true);
      fpBitsDataView$1.setInt32(4, hi$2, true);
      return (+fpBitsDataView$1.getFloat64(0, true));
    } else {
      return ((a + a) + 4.9E-324);
    }
  } else if ((b < a)) {
    var fpBitsDataView$2 = $fpBitsDataView;
    fpBitsDataView$2.setFloat64(0, a, true);
    var lo$7 = (fpBitsDataView$2.getInt32(0, true) | 0);
    var hi$7 = (fpBitsDataView$2.getInt32(4, true) | 0);
    var lo$8 = (hi$7 >> 31);
    var hi$8 = (hi$7 >> 31);
    var lo$9 = (1 | lo$8);
    var lo$10 = ((lo$7 - lo$9) | 0);
    var hi$9 = ((((hi$7 - hi$8) | 0) - (((lo$10 >>> 0) > (lo$7 >>> 0)) | 0)) | 0);
    if (((2146435072 & (hi$9 | ((hi$7 ^ hi$9) >> 11))) !== 2146435072)) {
      var fpBitsDataView$3 = $fpBitsDataView;
      fpBitsDataView$3.setInt32(0, lo$10, true);
      fpBitsDataView$3.setInt32(4, hi$9, true);
      return (+fpBitsDataView$3.getFloat64(0, true));
    } else {
      return ((a + a) - 4.9E-324);
    }
  } else {
    return ((a !== a) ? (NaN) : b);
  }
});
$p.fx = (function(a, b) {
  return (+Math.hypot(a, b));
});
var $d_jl_Math$ = new $TypeData().i($c_jl_Math$, "java.lang.Math$", ({
  bi: 1
}));
var $n_jl_Math$;
function $m_jl_Math$() {
  if ((!$n_jl_Math$)) {
    $n_jl_Math$ = new $c_jl_Math$();
  }
  return $n_jl_Math$;
}
/** @constructor */
function $c_jl_Thread$() {
  this.di = null;
  $n_jl_Thread$ = this;
  this.di = new $c_jl_Thread((void 0));
}
$p = $c_jl_Thread$.prototype = new $h_O();
$p.constructor = $c_jl_Thread$;
/** @constructor */
function $h_jl_Thread$() {
}
$h_jl_Thread$.prototype = $p;
var $d_jl_Thread$ = new $TypeData().i($c_jl_Thread$, "java.lang.Thread$", ({
  bp: 1
}));
var $n_jl_Thread$;
function $m_jl_Thread$() {
  if ((!$n_jl_Thread$)) {
    $n_jl_Thread$ = new $c_jl_Thread$();
  }
  return $n_jl_Thread$;
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  ax: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.L = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.a.length;
  } else if ((array instanceof $ac_Z)) {
    return array.a.length;
  } else if ((array instanceof $ac_C)) {
    return array.a.length;
  } else if ((array instanceof $ac_B)) {
    return array.a.length;
  } else if ((array instanceof $ac_S)) {
    return array.a.length;
  } else if ((array instanceof $ac_I)) {
    return array.a.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.a.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.a.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.a.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  br: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.ex = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a0(a, new $ac_I(a.a.length), 0, end, comparator, ops);
  } else {
    this.a7(a, 0, end, comparator, ops);
  }
});
$p.fZ = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a0(a, new $ac_I(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a7(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ey = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var end = ((a.a.length >>> 1) | 0);
  if ((end > 16)) {
    this.a0(a, new $ac_J(((a.a.length >>> 1) | 0)), 0, end, comparator, ops);
  } else {
    this.a7(a, 0, end, comparator, ops);
  }
});
$p.g0 = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a0(a, new $ac_J(((a.a.length >>> 1) | 0)), fromIndex, toIndex, comparator, ops);
  } else {
    this.a7(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ez = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a0(a, new $ac_S(a.a.length), 0, end, comparator, ops);
  } else {
    this.a7(a, 0, end, comparator, ops);
  }
});
$p.g1 = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a0(a, new $ac_S(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a7(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ew = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a0(a, new $ac_C(a.a.length), 0, end, comparator, ops);
  } else {
    this.a7(a, 0, end, comparator, ops);
  }
});
$p.fY = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a0(a, new $ac_C(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a7(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ev = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a0(a, new $ac_B(a.a.length), 0, end, comparator, ops);
  } else {
    this.a7(a, 0, end, comparator, ops);
  }
});
$p.fX = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a0(a, new $ac_B(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a7(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.br = (function(array, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  var end = array.a.length;
  if ((end > 16)) {
    this.a0(array, $objectGetClass(array).k.Q().k.U(array.a.length), 0, end, comparator$1, ops);
  } else {
    this.a7(array, 0, end, comparator$1, ops);
  }
});
$p.g2 = (function(array, fromIndex, toIndex, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a0(array, $objectGetClass(array).k.Q().k.U(array.a.length), fromIndex, toIndex, comparator$1, ops);
  } else {
    this.a7(array, fromIndex, toIndex, comparator$1, ops);
  }
});
$p.a0 = (function(a, temp, start, end, comparator, ops) {
  var length = ((end - start) | 0);
  if ((length > 16)) {
    var middle = ((start + (((length + ((length >>> 31) | 0)) | 0) >> 1)) | 0);
    this.a0(a, temp, start, middle, comparator, ops);
    this.a0(a, temp, middle, end, comparator, ops);
    var outIndex = start;
    var leftInIndex = start;
    var rightInIndex = middle;
    while ((outIndex < end)) {
      if (((leftInIndex < middle) && ((rightInIndex >= end) || (comparator.s(ops.P(a, leftInIndex), ops.P(a, rightInIndex)) <= 0)))) {
        ops.an(temp, outIndex, ops.P(a, leftInIndex));
        leftInIndex = ((1 + leftInIndex) | 0);
      } else {
        ops.an(temp, outIndex, ops.P(a, rightInIndex));
        rightInIndex = ((1 + rightInIndex) | 0);
      }
      outIndex = ((1 + outIndex) | 0);
    }
    temp.o(start, a, start, length);
  } else {
    this.a7(a, start, end, comparator, ops);
  }
});
$p.a7 = (function(a, start, end, comparator, ops) {
  var n = ((end - start) | 0);
  if ((n >= 2)) {
    var aStart = ops.P(a, start);
    var aStartPlusOne = ops.P(a, ((1 + start) | 0));
    if ((comparator.s(aStart, aStartPlusOne) > 0)) {
      ops.an(a, start, aStartPlusOne);
      ops.an(a, ((1 + start) | 0), aStart);
    }
    var m = 2;
    while ((m < n)) {
      var next = ops.P(a, ((start + m) | 0));
      if ((comparator.s(next, ops.P(a, ((((start + m) | 0) - 1) | 0))) < 0)) {
        var iA = start;
        var iB = ((((start + m) | 0) - 1) | 0);
        while ((((iB - iA) | 0) > 1)) {
          var ix = ((((iA + iB) | 0) >>> 1) | 0);
          if ((comparator.s(next, ops.P(a, ix)) < 0)) {
            iB = ix;
          } else {
            iA = ix;
          }
        }
        var ix$2 = ((iA + ((comparator.s(next, ops.P(a, iA)) >= 0) | 0)) | 0);
        var i = ((start + m) | 0);
        while ((i > ix$2)) {
          ops.an(a, i, ops.P(a, ((i - 1) | 0)));
          i = ((i - 1) | 0);
        }
        ops.an(a, ix$2, next);
      }
      m = ((1 + m) | 0);
    }
  }
});
$p.fp = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.fo = (function(a, fromIndex, toIndex, value) {
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  var i$1 = fromIndex;
  while ((i$1 !== toIndex)) {
    var i$2 = i$1;
    a.a[i$2] = value;
    i$1 = ((1 + i$1) | 0);
  }
});
$p.eb = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).k.Q().k.U(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.cY = (function(original, newLength, newType) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.k.Q().k.U(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.e5 = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.e9 = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.e7 = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.e8 = (function(original, newLength) {
  var b = ((original.a.length >>> 1) | 0);
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.e6 = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.fa = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.f9 = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.ea = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.o(0, ret, 0, copyLength);
  return ret;
});
$p.fj = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).k.Q().k.U(retLength);
  original.o(from, ret, 0, copyLength);
  return ret;
});
$p.fb = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_B(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
$p.fh = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_S(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
$p.ff = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_I(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
$p.fg = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = ((original.a.length >>> 1) | 0);
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_J(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
$p.fc = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_C(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
$p.fe = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_F(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
$p.fd = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_D(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
$p.fi = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_Z(retLength);
  original.o(start, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bs: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fP(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fO(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fl(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fk(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().ek(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().eB(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) - (((lo >>> 0) > (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + (((lo >>> 0) < (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.eB = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var qHat = (+Math.floor((1.0000000000000265E-9 * aHat)));
    var rHat = ((rlo - Math.imul(1000000000, (qHat | 0.0))) | 0);
    if ((rHat < 0)) {
      qHat = (qHat - 1.0);
      rHat = ((1000000000 + rHat) | 0);
    }
    var this$7 = rHat;
    var remStr = ("" + this$7);
    var $x_1 = qHat;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.ek = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.fk = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((rhi - ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((rlo - lo$1) | 0) >>> 0) > (rlo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
$p.fl = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((ahi - ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((alo - lo$1) | 0) >>> 0) > (alo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo, hi);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(0, 0);
  } else {
    return $bL(1, 0);
  }
});
$p.fO = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) - (((lo$2 >>> 0) > (rlo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  }
  if ((ahi < 0)) {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.fP = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) - (((lo$2 >>> 0) > (alo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(alo, ahi);
  } else {
    var lo$4 = ((alo - blo) | 0);
    var hi$4 = ((((ahi - bhi) | 0) - (((lo$4 >>> 0) > (alo >>> 0)) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  bF: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().ac(dest, j, $m_sr_ScalaRunTime$().y(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().fp(result, (void 0));
  return result;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.ee = (function(it, evidence$1) {
  var n = it.h();
  if ((n > (-1))) {
    var elements = evidence$1.I(n);
    var iterator = it.b();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().ac(elements, i, iterator.e());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.J();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.b();
    while (iterator$2.f()) {
      var elem = iterator$2.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cu(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().ct(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.aT = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.k.Z && $objectGetClass(dest).k.R(srcClass.k))) {
    src.o(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.f8 = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  }
  if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().eb(original, newLength);
  }
  if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().e7(original, newLength);
  }
  if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().f9(original, newLength);
  }
  if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().e8(original, newLength);
  }
  if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().fa(original, newLength);
  }
  if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().e6(original, newLength);
  }
  if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().e5(original, newLength);
  }
  if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().e9(original, newLength);
  }
  if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().ea(original, newLength);
  }
  throw new $c_s_MatchError(original);
});
$p.f7 = (function(original, newLength, ct) {
  var runtimeClass = ct.J();
  if (((runtimeClass !== null) && (runtimeClass === $d_V.l()))) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if (runtimeClass.k.R($objectGetClass(original).k.Q().k)) {
    return (runtimeClass.k.X ? this.f8(original, newLength) : $m_ju_Arrays$().cY(original, newLength, $m_sr_ScalaRunTime$().cl(runtimeClass.k.U(0))));
  } else {
    var dest = ct.I(newLength);
    $m_s_Array$().aT(original, 0, dest, 0, $m_jl_reflect_Array$().L(original));
    return dest;
  }
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bG: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ak)));
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
function $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len$1, \u03b4this$2, ord$1) {
  if ((len$1 < 300)) {
    var a = $m_sr_ScalaRunTime$().e3(\u03b4this$2);
    $m_s_util_Sorting$().d7(a, 0, $m_jl_reflect_Array$().L(a), ord$1);
    return a;
  } else {
    if ($d_O.R($objectGetClass(\u03b4this$2).k.Q().k)) {
      var a$2 = $m_ju_Arrays$().cY(\u03b4this$2, len$1, $m_sr_ScalaRunTime$().cl(new $ac_O(0)));
    } else {
      var dest = new $ac_O(len$1);
      $m_s_Array$().aT(\u03b4this$2, 0, dest, 0, $m_jl_reflect_Array$().L(\u03b4this$2));
      var a$2 = dest;
    }
    $m_ju_Arrays$().br(a$2, ord$1);
    return $m_s_Array$().f7(a$2, len$1, $m_s_reflect_ClassTag$().cm($objectGetClass(\u03b4this$2).k.Q()));
  }
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.dp = null;
  $n_sc_ArrayOps$ = this;
  this.dp = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().dp));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.fW = (function(this$, from, until) {
  var lo = ((from > 0) ? from : 0);
  var b = $m_jl_reflect_Array$().L(this$);
  var hi = ((until < b) ? until : b);
  if ((hi > lo)) {
    if ((this$ instanceof $ac_O)) {
      return $m_ju_Arrays$().fj(this$, lo, hi);
    } else if ((this$ instanceof $ac_I)) {
      return $m_ju_Arrays$().ff(this$, lo, hi);
    } else if ((this$ instanceof $ac_D)) {
      return $m_ju_Arrays$().fd(this$, lo, hi);
    } else if ((this$ instanceof $ac_J)) {
      return $m_ju_Arrays$().fg(this$, lo, hi);
    } else if ((this$ instanceof $ac_F)) {
      return $m_ju_Arrays$().fe(this$, lo, hi);
    } else if ((this$ instanceof $ac_C)) {
      return $m_ju_Arrays$().fc(this$, lo, hi);
    } else if ((this$ instanceof $ac_B)) {
      return $m_ju_Arrays$().fb(this$, lo, hi);
    } else if ((this$ instanceof $ac_S)) {
      return $m_ju_Arrays$().fh(this$, lo, hi);
    } else if ((this$ instanceof $ac_Z)) {
      return $m_ju_Arrays$().fi(this$, lo, hi);
    } else {
      throw new $c_s_MatchError(this$);
    }
  } else {
    return $m_s_reflect_ClassTag$().cm($objectGetClass(this$).k.Q()).I(0);
  }
});
$p.g4 = (function(this$, ord) {
  var len = $m_jl_reflect_Array$().L(this$);
  if ((len <= 1)) {
    return $m_sr_ScalaRunTime$().e3(this$);
  } else if ((this$ instanceof $ac_O)) {
    var a = $m_ju_Arrays$().eb(this$, len);
    $m_ju_Arrays$().br(a, ord);
    return a;
  } else if ((this$ instanceof $ac_I)) {
    if ((ord === $m_s_math_Ordering$Int$())) {
      var a$2 = $m_ju_Arrays$().e7(this$, len);
      $m_ju_Arrays$().ex(a$2);
      return a$2;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_J)) {
    if ((ord === $m_s_math_Ordering$Long$())) {
      var a$3 = $m_ju_Arrays$().e8(this$, len);
      $m_ju_Arrays$().ey(a$3);
      return a$3;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_C)) {
    if ((ord === $m_s_math_Ordering$Char$())) {
      var a$4 = $m_ju_Arrays$().e6(this$, len);
      $m_ju_Arrays$().ew(a$4);
      return a$4;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_B)) {
    if ((ord === $m_s_math_Ordering$Byte$())) {
      var a$5 = $m_ju_Arrays$().e5(this$, len);
      $m_ju_Arrays$().ev(a$5);
      return a$5;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_S)) {
    if ((ord === $m_s_math_Ordering$Short$())) {
      var a$6 = $m_ju_Arrays$().e9(this$, len);
      $m_ju_Arrays$().ez(a$6);
      return a$6;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_Z)) {
    if ((ord === $m_s_math_Ordering$Boolean$())) {
      var a$7 = $m_ju_Arrays$().ea(this$, len);
      $m_s_util_Sorting$().d7(a$7, 0, a$7.a.length, $m_s_math_Ordering$Boolean$());
      return a$7;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else {
    return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  bK: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.b();
  while (it.f()) {
    f.l(it.e());
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x30 = $thiz.h();
  if ((x30 === (-1))) {
    return (!$thiz.b().f());
  }
  if ((x30 === 0)) {
    return true;
  }
  return false;
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.b();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.h();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().L(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().L(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.f())) {
    $m_sr_ScalaRunTime$().ac(dest, i, it.e());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.h() === 0) ? (("" + start) + end) : $thiz.aH($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).H.c);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.H;
  if ((start.length !== 0)) {
    jsb.c = (("" + jsb.c) + start);
  }
  var it = $thiz.b();
  if (it.f()) {
    var obj = it.e();
    jsb.c = (("" + jsb.c) + obj);
    while (it.f()) {
      if ((sep.length !== 0)) {
        jsb.c = (("" + jsb.c) + sep);
      }
      var obj$1 = it.e();
      jsb.c = (("" + jsb.c) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.c = (("" + jsb.c) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$1) {
  if (($thiz.h() >= 0)) {
    var length = $thiz.h();
    var destination = evidence$1.I(length);
    $thiz.ae(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.J();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.b();
    while (it.f()) {
      var elem = it.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cu(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().ct(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
}
function $f_sc_IterableOnceOps__reversed__sc_Iterable($thiz) {
  var xs = $m_sci_Nil$();
  var it = $thiz.b();
  while (it.f()) {
    xs = new $c_sci_$colon$colon(it.e(), xs);
  }
  return xs;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.dv = null;
  this.bB = null;
  this.dv = head;
  this.bB = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.fw = (function() {
  return this.dv.Y().b();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  bW: 1
}));
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.b3 = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
$p.fy = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (min 0, max unknown)"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  c4: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_LazyList$EmptyMarker$() {
}
$p = $c_sci_LazyList$EmptyMarker$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$EmptyMarker$;
/** @constructor */
function $h_sci_LazyList$EmptyMarker$() {
}
$h_sci_LazyList$EmptyMarker$.prototype = $p;
var $d_sci_LazyList$EmptyMarker$ = new $TypeData().i($c_sci_LazyList$EmptyMarker$, "scala.collection.immutable.LazyList$EmptyMarker$", ({
  ci: 1
}));
var $n_sci_LazyList$EmptyMarker$;
function $m_sci_LazyList$EmptyMarker$() {
  if ((!$n_sci_LazyList$EmptyMarker$)) {
    $n_sci_LazyList$EmptyMarker$ = new $c_sci_LazyList$EmptyMarker$();
  }
  return $n_sci_LazyList$EmptyMarker$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.cM = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.d0 = (function() {
  var state = this.cM;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.Y();
});
$p.d2 = (function(state) {
  if ((this.cM !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.cM = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  ck: 1
}));
function $isArrayOf_sci_LazyListBase$InRace(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
/** @constructor */
function $c_sci_LazyListBase$TailUpdater() {
}
$p = $c_sci_LazyListBase$TailUpdater.prototype = new $h_O();
$p.constructor = $c_sci_LazyListBase$TailUpdater;
/** @constructor */
function $h_sci_LazyListBase$TailUpdater() {
}
$h_sci_LazyListBase$TailUpdater.prototype = $p;
var $d_sci_LazyListBase$TailUpdater = new $TypeData().i($c_sci_LazyListBase$TailUpdater, "scala.collection.immutable.LazyListBase$TailUpdater", ({
  cp: 1
}));
/** @constructor */
function $c_scm_ArrayBuilder$() {
}
$p = $c_scm_ArrayBuilder$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder$;
/** @constructor */
function $h_scm_ArrayBuilder$() {
}
$h_scm_ArrayBuilder$.prototype = $p;
$p.cu = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.ct = (function(runtimeClass, a) {
  var len = (a.length | 0);
  if ((runtimeClass === $d_C.l())) {
    var result = new $ac_C(len);
    var i = 0;
    while ((i !== len)) {
      result.a[i] = (65535 & (a[i] | 0));
      i = ((1 + i) | 0);
    }
    return result;
  } else {
    var result$2 = runtimeClass.k.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().ac(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  cx: 1
}));
var $n_scm_ArrayBuilder$;
function $m_scm_ArrayBuilder$() {
  if ((!$n_scm_ArrayBuilder$)) {
    $n_scm_ArrayBuilder$ = new $c_scm_ArrayBuilder$();
  }
  return $n_scm_ArrayBuilder$;
}
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.cW = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  cS: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.eF = null;
  this.eO = null;
  this.eG = null;
  this.eJ = null;
  this.eK = null;
  this.eI = null;
  this.eH = null;
  this.eE = null;
  this.eP = null;
  this.eC = null;
  this.eN = null;
  this.eD = null;
  this.eL = null;
  this.eM = null;
  $n_s_reflect_ClassTag$ = this;
  this.eF = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.eO = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.eG = $m_s_reflect_ManifestFactory$CharManifest$();
  this.eJ = $m_s_reflect_ManifestFactory$IntManifest$();
  this.eK = $m_s_reflect_ManifestFactory$LongManifest$();
  this.eI = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.eH = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.eE = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.eP = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.eC = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.eN = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.eD = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.eL = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.eM = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.cm = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  de: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  dL: 1
}));
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.aI = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  dN: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.cl = (function(x) {
  return ((x === null) ? $d_sr_Null$.l() : $objectGetClass(x));
});
$p.y = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.ac = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.e3 = (function(xs) {
  if ((xs instanceof $ac_O)) {
    return xs.t();
  }
  if ((xs instanceof $ac_I)) {
    return xs.t();
  }
  if ((xs instanceof $ac_D)) {
    return xs.t();
  }
  if ((xs instanceof $ac_J)) {
    return xs.t();
  }
  if ((xs instanceof $ac_F)) {
    return xs.t();
  }
  if ((xs instanceof $ac_C)) {
    return xs.t();
  }
  if ((xs instanceof $ac_B)) {
    return xs.t();
  }
  if ((xs instanceof $ac_S)) {
    return xs.t();
  }
  if ((xs instanceof $ac_Z)) {
    return xs.t();
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.eS = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bZ(), (x.b8() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  dO: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.i = (function(hash, data) {
  var h = this.cq(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.Z = (function(hash, length) {
  return this.f5((hash ^ length));
});
$p.f5 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.fE = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.bp = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().ek(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.C = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.bp((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.fE($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.fB = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  dQ: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_Sorting$() {
}
$p = $c_s_util_Sorting$.prototype = new $h_O();
$p.constructor = $c_s_util_Sorting$;
/** @constructor */
function $h_s_util_Sorting$() {
}
$h_s_util_Sorting$.prototype = $p;
$p.u = (function(a, i0, iN, ord) {
  var n = ((iN - i0) | 0);
  if ((n < 2)) {
    return (void 0);
  }
  if ((ord.s($m_sr_ScalaRunTime$().y(a, i0), $m_sr_ScalaRunTime$().y(a, ((1 + i0) | 0))) > 0)) {
    var temp = $m_sr_ScalaRunTime$().y(a, i0);
    $m_sr_ScalaRunTime$().ac(a, i0, $m_sr_ScalaRunTime$().y(a, ((1 + i0) | 0)));
    $m_sr_ScalaRunTime$().ac(a, ((1 + i0) | 0), temp);
  }
  var m = 2;
  while ((m < n)) {
    var next = $m_sr_ScalaRunTime$().y(a, ((i0 + m) | 0));
    if ((ord.s(next, $m_sr_ScalaRunTime$().y(a, ((((i0 + m) | 0) - 1) | 0))) < 0)) {
      var iA = i0;
      var iB = ((((i0 + m) | 0) - 1) | 0);
      while ((((iB - iA) | 0) > 1)) {
        var ix = ((((iA + iB) | 0) >>> 1) | 0);
        if ((ord.s(next, $m_sr_ScalaRunTime$().y(a, ix)) < 0)) {
          iB = ix;
        } else {
          iA = ix;
        }
      }
      var ix$2 = ((iA + ((ord.s(next, $m_sr_ScalaRunTime$().y(a, iA)) >= 0) | 0)) | 0);
      var i = ((i0 + m) | 0);
      while ((i > ix$2)) {
        $m_sr_ScalaRunTime$().ac(a, i, $m_sr_ScalaRunTime$().y(a, ((i - 1) | 0)));
        i = ((i - 1) | 0);
      }
      $m_sr_ScalaRunTime$().ac(a, ix$2, next);
    }
    m = ((1 + m) | 0);
  }
});
$p.n = (function(a, i0, iN, ord, scratch, evidence$2) {
  if ((((iN - i0) | 0) < 32)) {
    this.u(a, i0, iN, ord);
  } else {
    var iK = ((((i0 + iN) | 0) >>> 1) | 0);
    var sc = ((scratch === null) ? evidence$2.I(((iK - i0) | 0)) : scratch);
    this.n(a, i0, iK, ord, sc, evidence$2);
    this.n(a, iK, iN, ord, sc, evidence$2);
    this.v(a, i0, iK, iN, ord, sc);
  }
});
$p.v = (function(a, i0, iK, iN, ord, scratch) {
  if ((ord.s($m_sr_ScalaRunTime$().y(a, ((iK - 1) | 0)), $m_sr_ScalaRunTime$().y(a, iK)) > 0)) {
    var i = i0;
    var jN = ((iK - i0) | 0);
    var j = 0;
    while ((i < iK)) {
      $m_sr_ScalaRunTime$().ac(scratch, j, $m_sr_ScalaRunTime$().y(a, i));
      i = ((1 + i) | 0);
      j = ((1 + j) | 0);
    }
    var k = i0;
    j = 0;
    while (((i < iN) && (j < jN))) {
      if ((ord.s($m_sr_ScalaRunTime$().y(a, i), $m_sr_ScalaRunTime$().y(scratch, j)) < 0)) {
        $m_sr_ScalaRunTime$().ac(a, k, $m_sr_ScalaRunTime$().y(a, i));
        i = ((1 + i) | 0);
      } else {
        $m_sr_ScalaRunTime$().ac(a, k, $m_sr_ScalaRunTime$().y(scratch, j));
        j = ((1 + j) | 0);
      }
      k = ((1 + k) | 0);
    }
    while ((j < jN)) {
      $m_sr_ScalaRunTime$().ac(a, k, $m_sr_ScalaRunTime$().y(scratch, j));
      j = ((1 + j) | 0);
      k = ((1 + k) | 0);
    }
  }
});
$p.fU = (function(a, from, until) {
  var i = from;
  var n = 0;
  while ((i < until)) {
    if ((!a.a[i])) {
      n = ((1 + n) | 0);
    }
    i = ((1 + i) | 0);
  }
  i = 0;
  while ((i < n)) {
    a.a[((from + i) | 0)] = false;
    i = ((1 + i) | 0);
  }
  while ((((from + i) | 0) < until)) {
    a.a[((from + i) | 0)] = true;
    i = ((1 + i) | 0);
  }
});
$p.d7 = (function(a, from, until, evidence$4) {
  $m_s_math_Ordering$();
  if ((a instanceof $ac_O)) {
    if ((($m_jl_reflect_Array$().L(a) > 1) && (evidence$4 === null))) {
      throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "Ordering");
    }
    $m_ju_Arrays$().g2(a, from, until, evidence$4);
  } else if ((a instanceof $ac_I)) {
    if ((evidence$4 === $m_s_math_Ordering$Int$())) {
      $m_ju_Arrays$().fZ(a, from, until);
    } else {
      var evidence$2 = $m_s_reflect_ManifestFactory$IntManifest$();
      if ((((until - from) | 0) < 32)) {
        this.u(a, from, until, evidence$4);
      } else {
        var iK = ((((from + until) | 0) >>> 1) | 0);
        var sc = new $ac_I(((iK - from) | 0));
        if ((((iK - from) | 0) < 32)) {
          this.u(a, from, iK, evidence$4);
        } else {
          var iK$1 = ((((from + iK) | 0) >>> 1) | 0);
          this.n(a, from, iK$1, evidence$4, sc, evidence$2);
          this.n(a, iK$1, iK, evidence$4, sc, evidence$2);
          this.v(a, from, iK$1, iK, evidence$4, sc);
        }
        if ((((until - iK) | 0) < 32)) {
          this.u(a, iK, until, evidence$4);
        } else {
          var iK$2 = ((((iK + until) | 0) >>> 1) | 0);
          this.n(a, iK, iK$2, evidence$4, sc, evidence$2);
          this.n(a, iK$2, until, evidence$4, sc, evidence$2);
          this.v(a, iK, iK$2, until, evidence$4, sc);
        }
        this.v(a, from, iK, until, evidence$4, sc);
      }
    }
  } else if ((a instanceof $ac_D)) {
    var evidence$2$1 = $m_s_reflect_ManifestFactory$DoubleManifest$();
    if ((((until - from) | 0) < 32)) {
      this.u(a, from, until, evidence$4);
    } else {
      var iK$3 = ((((from + until) | 0) >>> 1) | 0);
      var sc$1 = new $ac_D(((iK$3 - from) | 0));
      if ((((iK$3 - from) | 0) < 32)) {
        this.u(a, from, iK$3, evidence$4);
      } else {
        var iK$4 = ((((from + iK$3) | 0) >>> 1) | 0);
        this.n(a, from, iK$4, evidence$4, sc$1, evidence$2$1);
        this.n(a, iK$4, iK$3, evidence$4, sc$1, evidence$2$1);
        this.v(a, from, iK$4, iK$3, evidence$4, sc$1);
      }
      if ((((until - iK$3) | 0) < 32)) {
        this.u(a, iK$3, until, evidence$4);
      } else {
        var iK$5 = ((((iK$3 + until) | 0) >>> 1) | 0);
        this.n(a, iK$3, iK$5, evidence$4, sc$1, evidence$2$1);
        this.n(a, iK$5, until, evidence$4, sc$1, evidence$2$1);
        this.v(a, iK$3, iK$5, until, evidence$4, sc$1);
      }
      this.v(a, from, iK$3, until, evidence$4, sc$1);
    }
  } else if ((a instanceof $ac_J)) {
    if ((evidence$4 === $m_s_math_Ordering$Long$())) {
      $m_ju_Arrays$().g0(a, from, until);
    } else {
      var evidence$2$2 = $m_s_reflect_ManifestFactory$LongManifest$();
      if ((((until - from) | 0) < 32)) {
        this.u(a, from, until, evidence$4);
      } else {
        var iK$6 = ((((from + until) | 0) >>> 1) | 0);
        var sc$2 = new $ac_J(((iK$6 - from) | 0));
        if ((((iK$6 - from) | 0) < 32)) {
          this.u(a, from, iK$6, evidence$4);
        } else {
          var iK$7 = ((((from + iK$6) | 0) >>> 1) | 0);
          this.n(a, from, iK$7, evidence$4, sc$2, evidence$2$2);
          this.n(a, iK$7, iK$6, evidence$4, sc$2, evidence$2$2);
          this.v(a, from, iK$7, iK$6, evidence$4, sc$2);
        }
        if ((((until - iK$6) | 0) < 32)) {
          this.u(a, iK$6, until, evidence$4);
        } else {
          var iK$8 = ((((iK$6 + until) | 0) >>> 1) | 0);
          this.n(a, iK$6, iK$8, evidence$4, sc$2, evidence$2$2);
          this.n(a, iK$8, until, evidence$4, sc$2, evidence$2$2);
          this.v(a, iK$6, iK$8, until, evidence$4, sc$2);
        }
        this.v(a, from, iK$6, until, evidence$4, sc$2);
      }
    }
  } else if ((a instanceof $ac_F)) {
    var evidence$2$3 = $m_s_reflect_ManifestFactory$FloatManifest$();
    if ((((until - from) | 0) < 32)) {
      this.u(a, from, until, evidence$4);
    } else {
      var iK$9 = ((((from + until) | 0) >>> 1) | 0);
      var sc$3 = new $ac_F(((iK$9 - from) | 0));
      if ((((iK$9 - from) | 0) < 32)) {
        this.u(a, from, iK$9, evidence$4);
      } else {
        var iK$10 = ((((from + iK$9) | 0) >>> 1) | 0);
        this.n(a, from, iK$10, evidence$4, sc$3, evidence$2$3);
        this.n(a, iK$10, iK$9, evidence$4, sc$3, evidence$2$3);
        this.v(a, from, iK$10, iK$9, evidence$4, sc$3);
      }
      if ((((until - iK$9) | 0) < 32)) {
        this.u(a, iK$9, until, evidence$4);
      } else {
        var iK$11 = ((((iK$9 + until) | 0) >>> 1) | 0);
        this.n(a, iK$9, iK$11, evidence$4, sc$3, evidence$2$3);
        this.n(a, iK$11, until, evidence$4, sc$3, evidence$2$3);
        this.v(a, iK$9, iK$11, until, evidence$4, sc$3);
      }
      this.v(a, from, iK$9, until, evidence$4, sc$3);
    }
  } else if ((a instanceof $ac_C)) {
    if ((evidence$4 === $m_s_math_Ordering$Char$())) {
      $m_ju_Arrays$().fY(a, from, until);
    } else {
      var evidence$2$4 = $m_s_reflect_ManifestFactory$CharManifest$();
      if ((((until - from) | 0) < 32)) {
        this.u(a, from, until, evidence$4);
      } else {
        var iK$12 = ((((from + until) | 0) >>> 1) | 0);
        var sc$4 = new $ac_C(((iK$12 - from) | 0));
        if ((((iK$12 - from) | 0) < 32)) {
          this.u(a, from, iK$12, evidence$4);
        } else {
          var iK$13 = ((((from + iK$12) | 0) >>> 1) | 0);
          this.n(a, from, iK$13, evidence$4, sc$4, evidence$2$4);
          this.n(a, iK$13, iK$12, evidence$4, sc$4, evidence$2$4);
          this.v(a, from, iK$13, iK$12, evidence$4, sc$4);
        }
        if ((((until - iK$12) | 0) < 32)) {
          this.u(a, iK$12, until, evidence$4);
        } else {
          var iK$14 = ((((iK$12 + until) | 0) >>> 1) | 0);
          this.n(a, iK$12, iK$14, evidence$4, sc$4, evidence$2$4);
          this.n(a, iK$14, until, evidence$4, sc$4, evidence$2$4);
          this.v(a, iK$12, iK$14, until, evidence$4, sc$4);
        }
        this.v(a, from, iK$12, until, evidence$4, sc$4);
      }
    }
  } else if ((a instanceof $ac_B)) {
    if ((evidence$4 === $m_s_math_Ordering$Byte$())) {
      $m_ju_Arrays$().fX(a, from, until);
    } else {
      var evidence$2$5 = $m_s_reflect_ManifestFactory$ByteManifest$();
      if ((((until - from) | 0) < 32)) {
        this.u(a, from, until, evidence$4);
      } else {
        var iK$15 = ((((from + until) | 0) >>> 1) | 0);
        var sc$5 = new $ac_B(((iK$15 - from) | 0));
        if ((((iK$15 - from) | 0) < 32)) {
          this.u(a, from, iK$15, evidence$4);
        } else {
          var iK$16 = ((((from + iK$15) | 0) >>> 1) | 0);
          this.n(a, from, iK$16, evidence$4, sc$5, evidence$2$5);
          this.n(a, iK$16, iK$15, evidence$4, sc$5, evidence$2$5);
          this.v(a, from, iK$16, iK$15, evidence$4, sc$5);
        }
        if ((((until - iK$15) | 0) < 32)) {
          this.u(a, iK$15, until, evidence$4);
        } else {
          var iK$17 = ((((iK$15 + until) | 0) >>> 1) | 0);
          this.n(a, iK$15, iK$17, evidence$4, sc$5, evidence$2$5);
          this.n(a, iK$17, until, evidence$4, sc$5, evidence$2$5);
          this.v(a, iK$15, iK$17, until, evidence$4, sc$5);
        }
        this.v(a, from, iK$15, until, evidence$4, sc$5);
      }
    }
  } else if ((a instanceof $ac_S)) {
    if ((evidence$4 === $m_s_math_Ordering$Short$())) {
      $m_ju_Arrays$().g1(a, from, until);
    } else {
      var evidence$2$6 = $m_s_reflect_ManifestFactory$ShortManifest$();
      if ((((until - from) | 0) < 32)) {
        this.u(a, from, until, evidence$4);
      } else {
        var iK$18 = ((((from + until) | 0) >>> 1) | 0);
        var sc$6 = new $ac_S(((iK$18 - from) | 0));
        if ((((iK$18 - from) | 0) < 32)) {
          this.u(a, from, iK$18, evidence$4);
        } else {
          var iK$19 = ((((from + iK$18) | 0) >>> 1) | 0);
          this.n(a, from, iK$19, evidence$4, sc$6, evidence$2$6);
          this.n(a, iK$19, iK$18, evidence$4, sc$6, evidence$2$6);
          this.v(a, from, iK$19, iK$18, evidence$4, sc$6);
        }
        if ((((until - iK$18) | 0) < 32)) {
          this.u(a, iK$18, until, evidence$4);
        } else {
          var iK$20 = ((((iK$18 + until) | 0) >>> 1) | 0);
          this.n(a, iK$18, iK$20, evidence$4, sc$6, evidence$2$6);
          this.n(a, iK$20, until, evidence$4, sc$6, evidence$2$6);
          this.v(a, iK$18, iK$20, until, evidence$4, sc$6);
        }
        this.v(a, from, iK$18, until, evidence$4, sc$6);
      }
    }
  } else if ((a instanceof $ac_Z)) {
    if ((evidence$4 === $m_s_math_Ordering$Boolean$())) {
      this.fU(a, from, until);
    } else {
      var evidence$2$7 = $m_s_reflect_ManifestFactory$BooleanManifest$();
      if ((((until - from) | 0) < 32)) {
        this.u(a, from, until, evidence$4);
      } else {
        var iK$21 = ((((from + until) | 0) >>> 1) | 0);
        var sc$7 = new $ac_Z(((iK$21 - from) | 0));
        if ((((iK$21 - from) | 0) < 32)) {
          this.u(a, from, iK$21, evidence$4);
        } else {
          var iK$22 = ((((from + iK$21) | 0) >>> 1) | 0);
          this.n(a, from, iK$22, evidence$4, sc$7, evidence$2$7);
          this.n(a, iK$22, iK$21, evidence$4, sc$7, evidence$2$7);
          this.v(a, from, iK$22, iK$21, evidence$4, sc$7);
        }
        if ((((until - iK$21) | 0) < 32)) {
          this.u(a, iK$21, until, evidence$4);
        } else {
          var iK$23 = ((((iK$21 + until) | 0) >>> 1) | 0);
          this.n(a, iK$21, iK$23, evidence$4, sc$7, evidence$2$7);
          this.n(a, iK$23, until, evidence$4, sc$7, evidence$2$7);
          this.v(a, iK$21, iK$23, until, evidence$4, sc$7);
        }
        this.v(a, from, iK$21, until, evidence$4, sc$7);
      }
    }
  } else if ((a === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(a);
  }
});
var $d_s_util_Sorting$ = new $TypeData().i($c_s_util_Sorting$, "scala.util.Sorting$", ({
  dX: 1
}));
var $n_s_util_Sorting$;
function $m_s_util_Sorting$() {
  if ((!$n_s_util_Sorting$)) {
    $n_s_util_Sorting$ = new $c_s_util_Sorting$();
  }
  return $n_s_util_Sorting$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.i = (function(hash, data) {
  var h = this.cq(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cq = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.Z = (function(hash, length) {
  return this.c0((hash ^ length));
});
$p.c0 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.fM = (function(x, seed, ignorePrefix) {
  var arr = x.b6();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.b8()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.i(h, $f_T__hashCode__I(x.b8()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.i(h, $m_sr_Statics$().C(x.b7(i)));
      i = ((1 + i) | 0);
    }
    return this.Z(h, arr);
  }
});
$p.g7 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.b();
  while (iterator.f()) {
    var x = iterator.e();
    var h = $m_sr_Statics$().C(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.i(h$2, a);
  h$2 = this.i(h$2, b);
  h$2 = this.cq(h$2, c);
  return this.Z(h$2, n);
});
$p.fK = (function(xs, seed) {
  var it = xs.b();
  var h = seed;
  if ((!it.f())) {
    return this.Z(h, 0);
  }
  var x0 = it.e();
  if ((!it.f())) {
    return this.Z(this.i(h, $m_sr_Statics$().C(x0)), 1);
  }
  var x1 = it.e();
  var initial = $m_sr_Statics$().C(x0);
  h = this.i(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().C(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.f()) {
    h = this.i(h, prev);
    var hash = $m_sr_Statics$().C(it.e());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.i(h, hash);
      i = ((1 + i) | 0);
      while (it.f()) {
        h = this.i(h, $m_sr_Statics$().C(it.e()));
        i = ((1 + i) | 0);
      }
      return this.Z(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.c0(this.i(this.i(h0, rangeDiff), prev));
});
$p.D = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().L(a);
  switch (l) {
    case 0: {
      return this.Z(h, 0);
      break;
    }
    case 1: {
      return this.Z(this.i(h, $m_sr_Statics$().C($m_sr_ScalaRunTime$().y(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().C($m_sr_ScalaRunTime$().y(a, 0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().C($m_sr_ScalaRunTime$().y(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().C($m_sr_ScalaRunTime$().y(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().C($m_sr_ScalaRunTime$().y(a, i)));
            i = ((1 + i) | 0);
          }
          return this.Z(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.c0(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.fN = (function(start, step, last, seed) {
  return this.c0(this.i(this.i(this.i(seed, start), step), last));
});
$p.fz = (function(a, seed) {
  var h = seed;
  var l = a.d();
  switch (l) {
    case 0: {
      return this.Z(h, 0);
      break;
    }
    case 1: {
      return this.Z(this.i(h, $m_sr_Statics$().C(a.g(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().C(a.g(0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().C(a.g(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().C(a.g(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().C(a.g(i)));
            i = ((1 + i) | 0);
          }
          return this.Z(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.c0(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.fD = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.m())) {
    var head = elems.q();
    var tail = elems.V();
    var hash = $m_sr_Statics$().C(head);
    h = this.i(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.fN(initial, rangeDiff, prev, seed) : this.Z(h, n));
});
/** @constructor */
function $c_jl_Double$() {
}
$p = $c_jl_Double$.prototype = new $h_O();
$p.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
}
$h_jl_Double$.prototype = $p;
$p.cX = (function(a, b) {
  if ((a !== a)) {
    return ((b === b) | 0);
  } else if ((b !== b)) {
    return (-1);
  } else if ((a === b)) {
    if ((a === 0.0)) {
      var ainf = (1.0 / a);
      return ((ainf === (1.0 / b)) ? 0 : ((ainf < 0.0) ? (-1) : 1));
    } else {
      return 0;
    }
  } else {
    return ((a < b) ? (-1) : 1);
  }
});
var $d_jl_Double$ = new $TypeData().i($c_jl_Double$, "java.lang.Double$", ({
  bc: 1,
  a: 1
}));
var $n_jl_Double$;
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$();
  }
  return $n_jl_Double$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.fG = (function(value, offset, count) {
  var endOffset = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== endOffset)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  bn: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
/** @constructor */
function $c_jl_Thread(dummy) {
}
$p = $c_jl_Thread.prototype = new $h_O();
$p.constructor = $c_jl_Thread;
/** @constructor */
function $h_jl_Thread() {
}
$h_jl_Thread.prototype = $p;
function $isArrayOf_jl_Thread(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_jl_Thread = new $TypeData().i($c_jl_Thread, "java.lang.Thread", ({
  aw: 1,
  bk: 1
}));
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.dj = s;
  if (writableStackTrace) {
    $thiz.fq();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.dj = null;
  }
  co() {
    return this.dj;
  }
  fq() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.bN : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  A() {
    var className = $objectClassName(this);
    var message = this.co();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  j() {
    return $c_O.prototype.j.call(this);
  }
  aw(that) {
    return $c_O.prototype.aw.call(this, that);
  }
  get "message"() {
    var m = this.co();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.A();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.G)));
}
/** @constructor */
function $c_ju_Arrays$NaturalComparator$() {
}
$p = $c_ju_Arrays$NaturalComparator$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$NaturalComparator$;
/** @constructor */
function $h_ju_Arrays$NaturalComparator$() {
}
$h_ju_Arrays$NaturalComparator$.prototype = $p;
$p.s = (function(o1, o2) {
  return $dp_compareTo__O__I(o1, o2);
});
var $d_ju_Arrays$NaturalComparator$ = new $TypeData().i($c_ju_Arrays$NaturalComparator$, "java.util.Arrays$NaturalComparator$", ({
  bt: 1,
  s: 1
}));
var $n_ju_Arrays$NaturalComparator$;
function $m_ju_Arrays$NaturalComparator$() {
  if ((!$n_ju_Arrays$NaturalComparator$)) {
    $n_ju_Arrays$NaturalComparator$ = new $c_ju_Arrays$NaturalComparator$();
  }
  return $n_ju_Arrays$NaturalComparator$;
}
function $p_ju_Random$__randomInt__I($thiz) {
  var a = (4.294967296E9 * (+Math.random()));
  return $doubleToInt(((+Math.floor(a)) - 2.147483648E9));
}
/** @constructor */
function $c_ju_Random$() {
}
$p = $c_ju_Random$.prototype = new $h_O();
$p.constructor = $c_ju_Random$;
/** @constructor */
function $h_ju_Random$() {
}
$h_ju_Random$.prototype = $p;
$p.fC = (function() {
  var value = $p_ju_Random$__randomInt__I(this);
  var value$1 = $p_ju_Random$__randomInt__I(this);
  return $bL(value$1, value);
});
var $d_ju_Random$ = new $TypeData().i($c_ju_Random$, "java.util.Random$", ({
  bx: 1,
  a: 1
}));
var $n_ju_Random$;
function $m_ju_Random$() {
  if ((!$n_ju_Random$)) {
    $n_ju_Random$ = new $c_ju_Random$();
  }
  return $n_ju_Random$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$.prototype = $p;
$p.an = (function(a, i, v) {
  a.a[i] = v;
});
$p.P = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$, "java.util.internal.GenericArrayOps$ReusableAnyRefArrayOps$", ({
  bC: 1,
  a8: 1
}));
var $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
function $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
}
/** @constructor */
function $c_sc_WithFilter() {
}
$p = $c_sc_WithFilter.prototype = new $h_O();
$p.constructor = $c_sc_WithFilter;
/** @constructor */
function $h_sc_WithFilter() {
}
$h_sc_WithFilter.prototype = $p;
/** @constructor */
function $c_sci_LazyList$Uninitialized$() {
}
$p = $c_sci_LazyList$Uninitialized$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$Uninitialized$;
/** @constructor */
function $h_sci_LazyList$Uninitialized$() {
}
$h_sci_LazyList$Uninitialized$.prototype = $p;
var $d_sci_LazyList$Uninitialized$ = new $TypeData().i($c_sci_LazyList$Uninitialized$, "scala.collection.immutable.LazyList$Uninitialized$", ({
  cm: 1,
  a: 1
}));
var $n_sci_LazyList$Uninitialized$;
function $m_sci_LazyList$Uninitialized$() {
  if ((!$n_sci_LazyList$Uninitialized$)) {
    $n_sci_LazyList$Uninitialized$ = new $c_sci_LazyList$Uninitialized$();
  }
  return $n_sci_LazyList$Uninitialized$;
}
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.ab($m_scm_Buffer$().ef(elems));
  } else {
    var it = elems.b();
    while (it.f()) {
      $thiz.a6(it.e());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_math_Ordering$() {
}
$p = $c_s_math_Ordering$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$;
/** @constructor */
function $h_s_math_Ordering$() {
}
$h_s_math_Ordering$.prototype = $p;
var $d_s_math_Ordering$ = new $TypeData().i($c_s_math_Ordering$, "scala.math.Ordering$", ({
  cX: 1,
  cW: 1
}));
var $n_s_math_Ordering$;
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$();
  }
  return $n_s_math_Ordering$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.A = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.A = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.cj = 0;
  this.cj = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.A = (function() {
  return ("" + this.cj);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  dJ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.aa = null;
  this.aa = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.A = (function() {
  return ("" + this.aa);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  dM: 1,
  a: 1
}));
function $ct_s_util_Random__ju_Random__($thiz, self) {
  $thiz.cT = self;
  return $thiz;
}
/** @constructor */
function $c_s_util_Random() {
  this.cT = null;
}
$p = $c_s_util_Random.prototype = new $h_O();
$p.constructor = $c_s_util_Random;
/** @constructor */
function $h_s_util_Random() {
}
$h_s_util_Random.prototype = $p;
$p.av = (function(minInclusive, maxExclusive) {
  if ((!(minInclusive < maxExclusive))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Invalid bounds");
  }
  var next = ((this.cT.fJ() * (maxExclusive - minInclusive)) + minInclusive);
  return ((next < maxExclusive) ? next : $m_jl_Math$().fI(maxExclusive, (-Infinity)));
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.x = 0;
  this.dY = 0;
  this.eQ = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.x = $f_T__hashCode__I("Seq");
  this.dY = $f_T__hashCode__I("Map");
  this.eQ = $f_T__hashCode__I("Set");
  this.g7($m_sci_Nil$(), this.dY);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.eu = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.fz(xs, this.x) : ((xs instanceof $c_sci_List) ? this.fD(xs, this.x) : this.fK(xs, this.x)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dZ: 1,
  dY: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Lcalagem_Particula$() {
}
$p = $c_Lcalagem_Particula$.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Particula$;
/** @constructor */
function $h_Lcalagem_Particula$() {
}
$h_Lcalagem_Particula$.prototype = $p;
$p.b2 = (function(tipo, x, y) {
  return new $c_Lcalagem_Particula(tipo, x, y, $m_s_util_Random$().av((-25.0), 25.0), $m_s_util_Random$().av((-25.0), 25.0), 0.0, true);
});
var $d_Lcalagem_Particula$ = new $TypeData().i($c_Lcalagem_Particula$, "calagem.Particula$", ({
  aZ: 1,
  at: 1,
  aT: 1
}));
var $n_Lcalagem_Particula$;
function $m_Lcalagem_Particula$() {
  if ((!$n_Lcalagem_Particula$)) {
    $n_Lcalagem_Particula$ = new $c_Lcalagem_Particula$();
  }
  return $n_Lcalagem_Particula$;
}
function $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__Hidrogenio;
}
function $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__Aluminio;
}
function $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__Calcario;
}
function $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__Carbonato;
}
function $s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__Calcio;
}
function $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__DioxidoCarbono;
}
function $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__Agua;
}
/** @constructor */
function $c_Lcalagem_TipoParticula$() {
  $n_Lcalagem_TipoParticula$ = this;
  $t_Lcalagem_TipoParticula$__Hidrogenio = new $c_Lcalagem_TipoParticula$$anon$1("Hidrogenio", 0);
  $t_Lcalagem_TipoParticula$__Aluminio = new $c_Lcalagem_TipoParticula$$anon$1("Aluminio", 1);
  $t_Lcalagem_TipoParticula$__Calcario = new $c_Lcalagem_TipoParticula$$anon$1("Calcario", 2);
  $t_Lcalagem_TipoParticula$__Carbonato = new $c_Lcalagem_TipoParticula$$anon$1("Carbonato", 3);
  $t_Lcalagem_TipoParticula$__Calcio = new $c_Lcalagem_TipoParticula$$anon$1("Calcio", 4);
  $t_Lcalagem_TipoParticula$__DioxidoCarbono = new $c_Lcalagem_TipoParticula$$anon$1("DioxidoCarbono", 5);
  $t_Lcalagem_TipoParticula$__Agua = new $c_Lcalagem_TipoParticula$$anon$1("Agua", 6);
  $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
}
$p = $c_Lcalagem_TipoParticula$.prototype = new $h_O();
$p.constructor = $c_Lcalagem_TipoParticula$;
/** @constructor */
function $h_Lcalagem_TipoParticula$() {
}
$h_Lcalagem_TipoParticula$.prototype = $p;
var $d_Lcalagem_TipoParticula$ = new $TypeData().i($c_Lcalagem_TipoParticula$, "calagem.TipoParticula$", ({
  b4: 1,
  at: 1,
  cV: 1
}));
var $n_Lcalagem_TipoParticula$;
function $m_Lcalagem_TipoParticula$() {
  if ((!$n_Lcalagem_TipoParticula$)) {
    $n_Lcalagem_TipoParticula$ = new $c_Lcalagem_TipoParticula$();
  }
  return $n_Lcalagem_TipoParticula$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.k = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.A = (function() {
  return ((this.k.Y ? "interface " : (this.k.X ? "" : "class ")) + this.k.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  bb: 1,
  a: 1,
  T: 1
}));
class $c_jl_Exception extends $c_jl_Throwable {
}
function $ct_ju_Random__J__($thiz, seed_in_$_lo, seed_in_$_hi) {
  $thiz.fV(seed_in_$_lo, seed_in_$_hi);
  return $thiz;
}
function $ct_ju_Random__($thiz) {
  var $x_1 = $m_ju_Random$().fC();
  $ct_ju_Random__J__($thiz, $x_1.l, $x_1.h);
  return $thiz;
}
/** @constructor */
function $c_ju_Random() {
  this.cU = 0;
  this.cV = 0;
}
$p = $c_ju_Random.prototype = new $h_O();
$p.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
}
$h_ju_Random.prototype = $p;
$p.fV = (function(seed_in_$_lo, seed_in_$_hi) {
  var lo = ((-554899859) ^ seed_in_$_lo);
  var hi = (5 ^ seed_in_$_hi);
  var hi$1 = (65535 & hi);
  this.cU = lo;
  this.cV = hi$1;
});
$p.em = (function(bits) {
  var x_$_lo = this.cU;
  var x_$_hi = this.cV;
  var b0 = (65535 & x_$_lo);
  var b1 = ((x_$_lo >>> 16) | 0);
  var a1b0 = Math.imul(58989, b0);
  var lo = (a1b0 << 16);
  var hi = ((((((Math.imul((-429064192), x_$_hi) + Math.imul(384748, x_$_lo)) | 0) + Math.imul(58989, b1)) | 0) + ((a1b0 >>> 16) | 0)) | 0);
  var lo$1 = ((720896 + lo) | 0);
  var hi$1 = ((hi + (((lo$1 >>> 0) < 720896) | 0)) | 0);
  var lo$2 = (((lo$1 >>> 16) | 0) | (hi$1 << 16));
  var hi$2 = ((hi$1 >>> 16) | 0);
  this.cU = lo$2;
  this.cV = hi$2;
  return ((hi$1 >>> ((-bits) | 0)) | 0);
});
$p.fJ = (function() {
  return (1.1102230246251565E-16 * ((1.34217728E8 * this.em(26)) + this.em(27)));
});
var $d_ju_Random = new $TypeData().i($c_ju_Random, "java.util.Random", ({
  bw: 1,
  bE: 1,
  a: 1
}));
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.cb = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.cb = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.al = (function(it) {
  return this.cb.ed(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.U = (function() {
  return this.cb.cr($m_s_reflect_ManifestFactory$AnyManifest$());
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.h();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.b();
      while (it.f()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.e();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
/** @constructor */
function $c_sc_IterableOps$WithFilter(self, p) {
  this.dr = null;
  this.dq = null;
  this.dr = self;
  this.dq = p;
}
$p = $c_sc_IterableOps$WithFilter.prototype = new $h_sc_WithFilter();
$p.constructor = $c_sc_IterableOps$WithFilter;
/** @constructor */
function $h_sc_IterableOps$WithFilter() {
}
$h_sc_IterableOps$WithFilter.prototype = $p;
$p.fr = (function() {
  return new $c_sc_View$Filter(this.dr, this.dq, false);
});
var $d_sc_IterableOps$WithFilter = new $TypeData().i($c_sc_IterableOps$WithFilter, "scala.collection.IterableOps$WithFilter", ({
  bQ: 1,
  c3: 1,
  a: 1
}));
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).bX(xs);
}
/** @constructor */
function $c_sc_Iterator$() {
  this.W = null;
  $n_sc_Iterator$ = this;
  this.W = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.U = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.al = (function(source) {
  return source.b();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bR: 1,
  a: 1,
  P: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.eg = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.b()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().eh(it))));
});
$p.U = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.eg(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.al = (function(source) {
  return this.eg(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  c0: 1,
  a: 1,
  P: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.dU = null;
  this.dU = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.Y = (function() {
  return (0, this.dU)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  dF: 1,
  dE: 1,
  ak: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.dV = null;
  this.dV = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.l = (function(x0) {
  return (0, this.dV)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  dH: 1,
  dG: 1,
  j: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  dK: 1,
  G: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Random$() {
  this.cT = null;
  $ct_s_util_Random__ju_Random__(this, $ct_ju_Random__(new $c_ju_Random()));
}
$p = $c_s_util_Random$.prototype = new $h_s_util_Random();
$p.constructor = $c_s_util_Random$;
/** @constructor */
function $h_s_util_Random$() {
}
$h_s_util_Random$.prototype = $p;
var $d_s_util_Random$ = new $TypeData().i($c_s_util_Random$, "scala.util.Random$", ({
  dW: 1,
  dV: 1,
  a: 1
}));
var $n_s_util_Random$;
function $m_s_util_Random$() {
  if ((!$n_s_util_Random$)) {
    $n_s_util_Random$ = new $c_s_util_Random$();
  }
  return $n_s_util_Random$;
}
/** @constructor */
function $c_Lcalagem_Particula(tipo, x, y, vx, vy, idade, vivo) {
  this.a3 = null;
  this.F = 0.0;
  this.G = 0.0;
  this.ap = 0.0;
  this.aq = 0.0;
  this.aV = 0.0;
  this.a4 = false;
  this.a3 = tipo;
  this.F = x;
  this.G = y;
  this.ap = vx;
  this.aq = vy;
  this.aV = idade;
  this.a4 = vivo;
}
$p = $c_Lcalagem_Particula.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Particula;
/** @constructor */
function $h_Lcalagem_Particula() {
}
$h_Lcalagem_Particula.prototype = $p;
$p.bZ = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().i(acc, 203662621);
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().C(this.a3));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().bp(this.F));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().bp(this.G));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().bp(this.ap));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().bp(this.aq));
  acc = $m_sr_Statics$().i(acc, $m_sr_Statics$().bp(this.aV));
  acc = $m_sr_Statics$().i(acc, (this.a4 ? 1231 : 1237));
  return $m_sr_Statics$().Z(acc, 7);
});
$p.A = (function() {
  return $m_sr_ScalaRunTime$().eS(this);
});
$p.b6 = (function() {
  return 7;
});
$p.b8 = (function() {
  return "Particula";
});
$p.b7 = (function(n) {
  switch (n) {
    case 0: {
      return this.a3;
      break;
    }
    case 1: {
      return this.F;
      break;
    }
    case 2: {
      return this.G;
      break;
    }
    case 3: {
      return this.ap;
      break;
    }
    case 4: {
      return this.aq;
      break;
    }
    case 5: {
      return this.aV;
      break;
    }
    case 6: {
      return this.a4;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
var $d_Lcalagem_Particula = new $TypeData().i($c_Lcalagem_Particula, "calagem.Particula", ({
  aY: 1,
  d: 1,
  ab: 1,
  a: 1
}));
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Boolean__compareTo__O__I($thiz, o) {
  return (($thiz === o) ? 0 : ($thiz ? 1 : (-1)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  b8: 1,
  a: 1,
  Y: 1,
  T: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $f_jl_Character__compareTo__O__I($thiz, o) {
  return (($thiz - o.c) | 0);
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  ba: 1,
  a: 1,
  Y: 1,
  T: 1
}), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.c = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  $thiz.c = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.c = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.e1 = (function(str) {
  var str$1 = $m_jl_String$().fG(str, 0, str.a.length);
  this.c = (("" + this.c) + str$1);
  return this;
});
$p.A = (function() {
  return this.c;
});
$p.d = (function() {
  return this.c.length;
});
$p.e4 = (function(index) {
  return this.c.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bo: 1,
  aj: 1,
  b6: 1,
  a: 1
}));
/** @constructor */
function $c_ju_internal_GenericArrayOps$ByteArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ByteArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ByteArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ByteArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ByteArrayOps$.prototype = $p;
$p.s = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.an = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.P = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ByteArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ByteArrayOps$, "java.util.internal.GenericArrayOps$ByteArrayOps$", ({
  by: 1,
  a8: 1,
  aa: 1,
  s: 1
}));
var $n_ju_internal_GenericArrayOps$ByteArrayOps$;
function $m_ju_internal_GenericArrayOps$ByteArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ByteArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ByteArrayOps$ = new $c_ju_internal_GenericArrayOps$ByteArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ByteArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$CharArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$CharArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$CharArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$CharArrayOps$() {
}
$h_ju_internal_GenericArrayOps$CharArrayOps$.prototype = $p;
$p.s = (function(o1, o2) {
  return (($uC(o1) - $uC(o2)) | 0);
});
$p.an = (function(a, i, v) {
  var v$1 = $uC(v);
  a.a[i] = v$1;
});
$p.P = (function(a, i) {
  return $bC(a.a[i]);
});
var $d_ju_internal_GenericArrayOps$CharArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$CharArrayOps$, "java.util.internal.GenericArrayOps$CharArrayOps$", ({
  bz: 1,
  a8: 1,
  aa: 1,
  s: 1
}));
var $n_ju_internal_GenericArrayOps$CharArrayOps$;
function $m_ju_internal_GenericArrayOps$CharArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$CharArrayOps$)) {
    $n_ju_internal_GenericArrayOps$CharArrayOps$ = new $c_ju_internal_GenericArrayOps$CharArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$CharArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$IntArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$IntArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$IntArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$IntArrayOps$() {
}
$h_ju_internal_GenericArrayOps$IntArrayOps$.prototype = $p;
$p.s = (function(o1, o2) {
  var x = (o1 | 0);
  var y = (o2 | 0);
  return ((x === y) ? 0 : ((x < y) ? (-1) : 1));
});
$p.an = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.P = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$IntArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$IntArrayOps$, "java.util.internal.GenericArrayOps$IntArrayOps$", ({
  bA: 1,
  a8: 1,
  aa: 1,
  s: 1
}));
var $n_ju_internal_GenericArrayOps$IntArrayOps$;
function $m_ju_internal_GenericArrayOps$IntArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$IntArrayOps$)) {
    $n_ju_internal_GenericArrayOps$IntArrayOps$ = new $c_ju_internal_GenericArrayOps$IntArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$IntArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$LongArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$LongArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$LongArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$LongArrayOps$() {
}
$h_ju_internal_GenericArrayOps$LongArrayOps$.prototype = $p;
$p.s = (function(o1, o2) {
  var $x_1 = $uJ(o1);
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var $x_2 = $uJ(o2);
  var y_$_lo = $x_2.l;
  var y_$_hi = $x_2.h;
  return ((x_$_hi === y_$_hi) ? ((x_$_lo === y_$_lo) ? 0 : (((x_$_lo >>> 0) < (y_$_lo >>> 0)) ? (-1) : 1)) : ((x_$_hi < y_$_hi) ? (-1) : 1));
});
$p.an = (function(a, i, v) {
  var $x_1 = $uJ(v);
  var v$1_$_lo = $x_1.l;
  var v$1_$_hi = $x_1.h;
  var $x_2 = a.a;
  var $x_3 = (i << 1);
  $x_2[$x_3] = v$1_$_lo;
  $x_2[(($x_3 + 1) | 0)] = v$1_$_hi;
});
$p.P = (function(a, i) {
  var $x_1 = a.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
var $d_ju_internal_GenericArrayOps$LongArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$LongArrayOps$, "java.util.internal.GenericArrayOps$LongArrayOps$", ({
  bB: 1,
  a8: 1,
  aa: 1,
  s: 1
}));
var $n_ju_internal_GenericArrayOps$LongArrayOps$;
function $m_ju_internal_GenericArrayOps$LongArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$LongArrayOps$)) {
    $n_ju_internal_GenericArrayOps$LongArrayOps$ = new $c_ju_internal_GenericArrayOps$LongArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$LongArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$ShortArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ShortArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ShortArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ShortArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ShortArrayOps$.prototype = $p;
$p.s = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.an = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.P = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ShortArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ShortArrayOps$, "java.util.internal.GenericArrayOps$ShortArrayOps$", ({
  bD: 1,
  a8: 1,
  aa: 1,
  s: 1
}));
var $n_ju_internal_GenericArrayOps$ShortArrayOps$;
function $m_ju_internal_GenericArrayOps$ShortArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ShortArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ShortArrayOps$ = new $c_ju_internal_GenericArrayOps$ShortArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ShortArrayOps$;
}
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.h = (function() {
  return (-1);
});
$p.ae = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aA = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().b5(this);
});
$p.b = (function() {
  return this;
});
$p.bX = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.A = (function() {
  return "<iterator>";
});
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.bC = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.bC = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.ef = (function(it) {
  return this.bC.al(it);
});
$p.U = (function() {
  return this.bC.U();
});
$p.al = (function(source) {
  return this.ef(source);
});
function $f_sc_SeqOps__sorted__s_math_Ordering__O($thiz, ord) {
  var len = $thiz.d();
  var b = $thiz.b4();
  if ((len === 1)) {
    b.a6($thiz.q());
  } else if ((len > 1)) {
    b.af(len);
    var arr = new $ac_O(len);
    $thiz.ae(arr, 0, 2147483647);
    $m_ju_Arrays$().br(arr, ord);
    var i = 0;
    while ((i < len)) {
      b.a6(arr.a[i]);
      i = ((1 + i) | 0);
    }
  }
  return b.am();
}
function $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($thiz, f, ord) {
  return $thiz.S(new $c_s_math_Ordering$$anon$1(f, ord));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.Q(0) === 0);
}
/** @constructor */
function $c_sci_LazyList$() {
  this.w = null;
  this.dE = null;
  this.dF = false;
  $n_sci_LazyList$ = this;
  this.w = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.eq = (function() {
  if ((!this.dF)) {
    this.dE = new $c_sci_LazyListBase$TailUpdater();
    this.dF = true;
  }
  return this.dE;
});
$p.fT = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.aa;
    var i = iRef.cj;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().w)))) {
      rest = rest.M();
      restRef.aa = rest;
      i = ((i - 1) | 0);
      iRef.cj = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.eh = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.h() === 0) ? this.w : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.er(coll.b()))))));
});
$p.es = (function(it, suffix) {
  return (it.f() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.es(it, suffix))))) : suffix.Y());
});
$p.er = (function(it) {
  return (it.f() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.er(it))))) : this.w);
});
$p.U = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.al = (function(source) {
  return this.eh(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  ch: 1,
  a: 1,
  P: 1,
  a0: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(f$2, outer) {
  this.dL = null;
  this.bI = null;
  this.dL = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bI = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.f1 = (function(x) {
  this.bI.a6(x);
  return this;
});
$p.eV = (function(xs) {
  this.bI.ab(xs);
  return this;
});
$p.af = (function(size) {
  this.bI.af(size);
});
$p.am = (function() {
  return this.dL.l(this.bI.am());
});
$p.a6 = (function(elem) {
  return this.f1(elem);
});
$p.ab = (function(elems) {
  return this.eV(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  cK: 1,
  W: 1,
  X: 1,
  a2: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.aF = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.aF = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.af = (function(size) {
});
$p.ck = (function(elem) {
  this.aF.a6(elem);
  return this;
});
$p.eW = (function(xs) {
  this.aF.ab(xs);
  return this;
});
$p.am = (function() {
  return this.aF;
});
$p.a6 = (function(elem) {
  return this.ck(elem);
});
$p.ab = (function(elems) {
  return this.eW(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  aP: 1,
  W: 1,
  X: 1,
  a2: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_Lcalagem_TipoParticula() {
}
$p = $c_Lcalagem_TipoParticula.prototype = new $h_O();
$p.constructor = $c_Lcalagem_TipoParticula;
/** @constructor */
function $h_Lcalagem_TipoParticula() {
}
$h_Lcalagem_TipoParticula.prototype = $p;
$p.bZ = (function() {
  return new $c_s_Product$$anon$1(this);
});
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  b7: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Byte__compareTo__O__I($thiz, o) {
  return (($thiz - o) | 0);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  b9: 1,
  a7: 1,
  a: 1,
  Y: 1,
  T: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  be: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  bf: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IndexOutOfBoundsException__I__($thiz, index) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, ("Index out of range: " + index), null, true, true);
  return $thiz;
}
function $ct_jl_IndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  bg: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  bj: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Short__compareTo__O__I($thiz, o) {
  return (($thiz - o) | 0);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bl: 1,
  a7: 1,
  a: 1,
  Y: 1,
  T: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bq: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  bu: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  bv: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.dl)) {
    if (($thiz.c9 === null)) {
      var $x_1 = "null";
    } else {
      var cls = $m_sr_ScalaRunTime$().cl($thiz.c9);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.k.N));
      try {
        var $x_1 = ((($thiz.c9 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.dk = $x_1;
    $thiz.dl = true;
  }
  return $thiz.dk;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.c9 = null;
    this.dk = null;
    this.dl = false;
    this.c9 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  co() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bH: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.bx = 0;
  this.dn = 0;
  this.dm = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.dm = outer;
  this.bx = 0;
  this.dn = outer.b6();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.f = (function() {
  return (this.bx < this.dn);
});
$p.e = (function() {
  var result = this.dm.b7(this.bx);
  this.bx = ((1 + this.bx) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bI: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.cb = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  bN: 1,
  bM: 1,
  a: 1,
  P: 1,
  a0: 1
}));
function $f_sc_IndexedSeqOps__take__I__O($thiz, n) {
  return $thiz.bY($ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), $thiz, n));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.m())) {
    return $thiz.g(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.ad() : $thiz.A())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.ad() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.f = (function() {
  return false;
});
$p.fH = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.h = (function() {
  return 0;
});
$p.e = (function() {
  this.fH();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bS: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.ds = null;
  this.cc = false;
  this.ds = a$2;
  this.cc = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.f = (function() {
  return (!this.cc);
});
$p.e = (function() {
  if (this.cc) {
    return $m_sc_Iterator$().W.e();
  } else {
    this.cc = true;
    return this.ds;
  }
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  bT: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$6(p$5, isFlipped$2, outer) {
  this.du = null;
  this.dt = false;
  this.cd = null;
  this.ce = false;
  this.bA = null;
  this.du = p$5;
  this.dt = isFlipped$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bA = outer;
  this.ce = false;
}
$p = $c_sc_Iterator$$anon$6.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$6;
/** @constructor */
function $h_sc_Iterator$$anon$6() {
}
$h_sc_Iterator$$anon$6.prototype = $p;
$p.f = (function() {
  if (this.ce) {
    return true;
  } else {
    if ((!this.bA.f())) {
      return false;
    }
    this.cd = this.bA.e();
    while (((!(!this.du.l(this.cd))) === this.dt)) {
      if ((!this.bA.f())) {
        return false;
      }
      this.cd = this.bA.e();
    }
    this.ce = true;
    return true;
  }
});
$p.e = (function() {
  if (this.f()) {
    this.ce = false;
    return this.cd;
  } else {
    return $m_sc_Iterator$().W.e();
  }
});
var $d_sc_Iterator$$anon$6 = new $TypeData().i($c_sc_Iterator$$anon$6, "scala.collection.Iterator$$anon$6", ({
  bV: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.X instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.X;
      $thiz.X = c.X;
      $thiz.aM = c.aM;
      if ((c.a9 !== null)) {
        if (($thiz.a8 === null)) {
          $thiz.a8 = c.a8;
        }
        var x$proxy10 = c.a8;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().aI();
        }
        x$proxy10.bB = $thiz.a9;
        $thiz.a9 = c.a9;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.a9 === null)) {
      $thiz.X = null;
      $thiz.a8 = null;
      return false;
    } else {
      $thiz.X = $thiz.a9.fw();
      if (($thiz.a8 === $thiz.a9)) {
        var x$proxy12 = $thiz.a8;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().aI();
        }
        $thiz.a8 = x$proxy12.bB;
      }
      $thiz.a9 = $thiz.a9.bB;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aM) {
        return true;
      } else {
        if ((!(($thiz.X !== null) && $thiz.X.f()))) {
          continue;
        }
        $thiz.aM = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.X = null;
  this.a9 = null;
  this.a8 = null;
  this.aM = false;
  this.X = from;
  this.a9 = null;
  this.a8 = null;
  this.aM = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.f = (function() {
  if (this.aM) {
    return true;
  } else if ((this.X !== null)) {
    if (this.X.f()) {
      this.aM = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.e = (function() {
  if (this.f()) {
    this.aM = false;
    var x$proxy13 = this.X;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().aI();
    }
    return x$proxy13.e();
  } else {
    return $m_sc_Iterator$().W.e();
  }
});
$p.bX = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.a9 === null)) {
    this.a9 = c;
    this.a8 = c;
  } else {
    var x$proxy14 = this.a8;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().aI();
    }
    x$proxy14.bB = c;
    this.a8 = c;
  }
  if ((this.X === null)) {
    this.X = $m_sc_Iterator$().W;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  aE: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.m())) {
    len = ((1 + len) | 0);
    these = these.V();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len, 0, $thiz));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.ec(n);
  if (skipped.m()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.q();
}
function $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.m()) | 0);
    } else {
      if ((!xs$tailLocal1.m())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.V();
        i$tailLocal1 = i$tailLocal1$tmp1;
        xs$tailLocal1 = xs$tailLocal1$tmp1;
        continue;
      }
      return (-1);
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.bE = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bE = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.f = (function() {
  return (!this.bE.m());
});
$p.e = (function() {
  var r = this.bE.q();
  this.bE = this.bE.V();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  bZ: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.bf = null;
  this.dG = null;
  this.f6();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.af = (function(size) {
});
$p.f6 = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.dG = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.d0()))));
  this.bf = deferred;
});
$p.fS = (function() {
  this.bf.d2(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().w)));
  return this.dG;
});
$p.f0 = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.bf.d2(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.d0())))));
  })));
  this.bf = deferred;
  return this;
});
$p.eT = (function(xs) {
  if ((xs.h() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.bf.d2(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().es(xs.b(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.d0()))))));
    this.bf = deferred;
  }
  return this;
});
$p.am = (function() {
  return this.fS();
});
$p.a6 = (function(elem) {
  return this.f0(elem);
});
$p.ab = (function(elems) {
  return this.eT(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  cj: 1,
  W: 1,
  X: 1,
  a2: 1,
  af: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.bg = null;
  this.bg = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.f = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.bg) === $m_sci_LazyList$().w));
});
$p.e = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.bg) === $m_sci_LazyList$().w)) {
    return $m_sc_Iterator$().W.e();
  } else {
    var res = this.bg.q();
    this.bg = this.bg.M();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  cl: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.U = (function() {
  return new $c_scm_ListBuffer();
});
$p.al = (function(source) {
  return $m_sci_Nil$().b5(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  cq: 1,
  a: 1,
  P: 1,
  a0: 1,
  ae: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.dH = null;
  $n_scm_ArrayBuffer$ = this;
  this.dH = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.ei = (function(coll) {
  var k = coll.h();
  if ((k >= 0)) {
    var array = this.et(this.dH, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.ae(array, 0, 2147483647) : coll.b().ae(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).dZ(coll);
  }
});
$p.U = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.fR = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else {
    if ((targetLen > 2147483639)) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
    }
    if ((arrayLen > 1073741819)) {
      return 2147483639;
    } else {
      var x = (arrayLen << 1);
      var y = ((x > 16) ? x : 16);
      return ((targetLen > y) ? targetLen : y);
    }
  }
});
$p.et = (function(array, curSize, targetSize) {
  var newLen = this.fR(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.o(0, res, 0, curSize);
    return res;
  }
});
$p.al = (function(source) {
  return this.ei(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  ct: 1,
  a: 1,
  P: 1,
  a0: 1,
  ae: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.aF = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.af = (function(size) {
  this.aF.af(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  cu: 1,
  aP: 1,
  W: 1,
  X: 1,
  a2: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.bC = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  cJ: 1,
  aF: 1,
  a: 1,
  P: 1,
  a0: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.bK = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.bK = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.ab = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.af = (function(size) {
});
$p.am = (function() {
  return this.bK;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.bC = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  cQ: 1,
  aF: 1,
  a: 1,
  P: 1,
  a0: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.U = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.al = (function(source) {
  return new $c_scm_ListBuffer().d5(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  cR: 1,
  a: 1,
  P: 1,
  a0: 1,
  ae: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.cQ = null;
  this.dR = null;
  this.dQ = 0;
  this.cQ = underlying;
  this.dR = mutationCount;
  this.dQ = (mutationCount.Y() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().cW(this.dQ, (this.dR.Y() | 0), "mutation occurred during iteration");
  return this.cQ.f();
});
$p.e = (function() {
  return this.cQ.e();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  cT: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
function $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z($thiz, other) {
  if ((other instanceof $c_s_math_Ordering$Reverse)) {
    var x = other.b1;
    return ((x !== null) && x.aw($thiz));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.k.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.k.Q())) + "]") : clazz.k.N);
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.dX = null;
  this.bM = 0;
  this.dW = 0;
  this.dX = x$1;
  this.bM = 0;
  this.dW = x$1.b6();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.f = (function() {
  return (this.bM < this.dW);
});
$p.e = (function() {
  var result = this.dX.b7(this.bM);
  this.bM = ((1 + this.bM) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  dP: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.U = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.fu = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).am();
});
$p.al = (function(source) {
  return this.fu(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  dS: 1,
  ae: 1,
  a: 1,
  P: 1,
  a0: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$p = $c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $p;
$p.ej = (function(source) {
  return this.U().ab(source).am();
});
$p.U = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.au))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.al = (function(source) {
  return this.ej(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  dU: 1,
  ae: 1,
  a: 1,
  P: 1,
  a0: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Double__compareTo__O__I($thiz, o) {
  return $m_jl_Double$().cX($thiz, o);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  au: 1,
  a7: 1,
  a: 1,
  Y: 1,
  T: 1,
  a9: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Float__compareTo__O__I($thiz, o) {
  return $m_jl_Double$().cX($thiz, o);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bd: 1,
  a7: 1,
  a: 1,
  Y: 1,
  T: 1,
  a9: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Integer__compareTo__O__I($thiz, o) {
  return (($thiz === o) ? 0 : (($thiz < o) ? (-1) : 1));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bh: 1,
  a7: 1,
  a: 1,
  Y: 1,
  T: 1,
  a9: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().eB($thiz, $thizhi);
}
function $f_jl_Long__compareTo__O__I($thiz, $thizhi, o) {
  var $x_1 = o;
  var this$1_$_lo = $x_1.l;
  var this$1_$_hi = $x_1.h;
  return (($thizhi === this$1_$_hi) ? (($thiz === this$1_$_lo) ? 0 : ((($thiz >>> 0) < (this$1_$_lo >>> 0)) ? (-1) : 1)) : (($thizhi < this$1_$_hi) ? (-1) : 1));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  av: 1,
  a7: 1,
  a: 1,
  Y: 1,
  T: 1,
  a9: 1
}), ((x) => (x instanceof $Long)));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__compareTo__T__I($thiz, anotherString) {
  var thisLength = $thiz.length;
  var strLength = anotherString.length;
  var minLength = ((thisLength < strLength) ? thisLength : strLength);
  var i = 0;
  while ((i !== minLength)) {
    var cmp = (($thiz.charCodeAt(i) - anotherString.charCodeAt(i)) | 0);
    if ((cmp !== 0)) {
      return cmp;
    }
    i = ((1 + i) | 0);
  }
  return ((thisLength - strLength) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $f_T__compareTo__O__I($thiz, o) {
  return $f_T__compareTo__T__I($thiz, o);
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bm: 1,
  a: 1,
  Y: 1,
  aj: 1,
  T: 1,
  a9: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.h = (function() {
  return (-1);
});
$p.bq = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.m = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.ae = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aA = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().b5(this);
});
$p.az = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this);
});
$p.q = (function() {
  return this.b().e();
});
$p.cn = (function(coll) {
  return this.ay().al(coll);
});
$p.b4 = (function() {
  return this.ay().U();
});
$p.ad = (function() {
  return this.a1();
});
$p.bY = (function(coll) {
  return this.cn(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.ca = null;
  this.aX = 0;
  this.cG = 0;
  this.ca = xs;
  this.aX = 0;
  this.cG = $m_jl_reflect_Array$().L(this.ca);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.h = (function() {
  return ((this.cG - this.aX) | 0);
});
$p.f = (function() {
  return (this.aX < this.cG);
});
$p.e = (function() {
  if ((this.aX >= $m_jl_reflect_Array$().L(this.ca))) {
    $m_sc_Iterator$().W.e();
  }
  var r = $m_sr_ScalaRunTime$().y(this.ca, this.aX);
  this.aX = ((1 + this.aX) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bL: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.cH = self;
  $thiz.by = 0;
  $thiz.aK = self.d();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.cH = null;
  this.by = 0;
  this.aK = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.h = (function() {
  return this.aK;
});
$p.f = (function() {
  return (this.aK > 0);
});
$p.e = (function() {
  if ((this.aK > 0)) {
    var r = this.cH.g(this.by);
    this.by = ((1 + this.by) | 0);
    this.aK = ((this.aK - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().W.e();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  aB: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.cI = self;
  $thiz.aL = self.d();
  $thiz.bz = (($thiz.aL - 1) | 0);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  this.cI = null;
  this.aL = 0;
  this.bz = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.f = (function() {
  return (this.aL > 0);
});
$p.e = (function() {
  if ((this.aL > 0)) {
    var r = this.cI.g(this.bz);
    this.bz = ((this.bz - 1) | 0);
    this.aL = ((this.aL - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().W.e();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  aC: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.bK = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().W);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.eZ = (function(elem) {
  this.bK = this.bK.bX(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.a6 = (function(elem) {
  return this.eZ(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  bU: 1,
  cP: 1,
  W: 1,
  X: 1,
  a2: 1,
  af: 1
}));
/** @constructor */
function $c_sci_ArraySeq$() {
  this.dD = null;
  $n_sci_ArraySeq$ = this;
  this.dD = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.d1 = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.cw($m_s_Array$().ee(it, tag)));
});
$p.cr = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.cw($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.cw = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.ed = (function(it, evidence$1) {
  return this.d1(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  c6: 1,
  a: 1,
  aA: 1,
  ay: 1,
  az: 1,
  aJ: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.cO = 0;
  $thiz.dI = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.cO = 0;
  this.dI = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.af = (function(size) {
  if ((this.cO < size)) {
    this.fQ(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.dK = null;
  $n_scm_ArraySeq$ = this;
  this.dK = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.ft = (function(it, evidence$1) {
  return this.cp($m_s_Array$().ee(it, evidence$1));
});
$p.cr = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.cp(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.J()));
});
$p.cp = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.ed = (function(it, evidence$1) {
  return this.ft(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cz: 1,
  a: 1,
  aA: 1,
  ay: 1,
  az: 1,
  aJ: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_s_math_Ordering$$anon$1(f$4, outer) {
  this.cR = null;
  this.dS = null;
  this.cR = f$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.dS = outer;
}
$p = $c_s_math_Ordering$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$$anon$1;
/** @constructor */
function $h_s_math_Ordering$$anon$1() {
}
$h_s_math_Ordering$$anon$1.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  return this.dS.s(this.cR.l(x), this.cR.l(y));
});
var $d_s_math_Ordering$$anon$1 = new $TypeData().i($c_s_math_Ordering$$anon$1, "scala.math.Ordering$$anon$1", ({
  cY: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1
}));
function $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z($thiz, other) {
  return (other === $thiz.dT);
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.b1 = null;
  this.b1 = outer;
}
$p = $c_s_math_Ordering$Reverse.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
}
$h_s_math_Ordering$Reverse.prototype = $p;
$p.ax = (function(other) {
  var x$2 = this.b1;
  return ((other === null) ? (x$2 === null) : other.aw(x$2));
});
$p.s = (function(x, y) {
  return this.b1.s(y, x);
});
$p.aw = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true;
    }
  }
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x = this.b1;
    var x$2 = obj.b1;
    return ((x === null) ? (x$2 === null) : x.aw(x$2));
  }
  return false;
});
$p.j = (function() {
  return Math.imul(41, this.b1.j());
});
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aU)));
}
var $d_s_math_Ordering$Reverse = new $TypeData().i($c_s_math_Ordering$Reverse, "scala.math.Ordering$Reverse", ({
  aU: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.bL = null;
  this.bL = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.j = (function() {
  return $m_sr_Statics$().C(this.bL);
});
$p.A = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.bL);
});
$p.J = (function() {
  return this.bL;
});
$p.I = (function(len) {
  return this.bL.k.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  df: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.ad() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.H)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.H)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.cO = 0;
  this.dI = 0;
  this.bh = null;
  this.dJ = false;
  this.cP = null;
  this.bh = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.dJ = (elementClass === $d_C.l());
  this.cP = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.e0 = (function(elem) {
  var unboxedElem = (this.dJ ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cu(this.bh) : elem));
  this.cP.push(unboxedElem);
  return this;
});
$p.eU = (function(xs) {
  var it = xs.b();
  while (it.f()) {
    this.e0(it.e());
  }
  return this;
});
$p.fQ = (function(size) {
});
$p.am = (function() {
  return $m_scm_ArrayBuilder$().ct(((this.bh === $d_V.l()) ? $d_jl_Void.l() : (((this.bh === $d_sr_Null$.l()) || (this.bh === $d_sr_Nothing$.l())) ? $d_O.l() : this.bh)), this.cP);
});
$p.A = (function() {
  return "ArrayBuilder.generic";
});
$p.a6 = (function(elem) {
  return this.e0(elem);
});
$p.ab = (function(elems) {
  return this.eU(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  cy: 1,
  cw: 1,
  W: 1,
  X: 1,
  a2: 1,
  af: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.cH = null;
  this.by = 0;
  this.aK = 0;
  this.dN = null;
  this.dM = 0;
  this.dN = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.dM = (mutationCount.Y() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().cW(this.dM, (this.dN.Y() | 0), "mutation occurred during iteration");
  return (this.aK > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  cM: 1,
  aB: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(self, mutationCount) {
  this.cI = null;
  this.aL = 0;
  this.bz = 0;
  this.dP = null;
  this.dO = 0;
  this.dP = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(this, self);
  this.dO = (mutationCount.Y() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedReverseIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().cW(this.dO, (this.dP.Y() | 0), "mutation occurred during iteration");
  return (this.aL > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedReverseIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedReverseIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedReverseIterator", ({
  cN: 1,
  aC: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1,
  a: 1
}));
/** @constructor */
function $c_s_math_Ordering$Boolean$() {
}
$p = $c_s_math_Ordering$Boolean$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Boolean$;
/** @constructor */
function $h_s_math_Ordering$Boolean$() {
}
$h_s_math_Ordering$Boolean$.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  var x$1 = (!(!x));
  return ((x$1 === (!(!y))) ? 0 : (x$1 ? 1 : (-1)));
});
var $d_s_math_Ordering$Boolean$ = new $TypeData().i($c_s_math_Ordering$Boolean$, "scala.math.Ordering$Boolean$", ({
  cZ: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d0: 1
}));
var $n_s_math_Ordering$Boolean$;
function $m_s_math_Ordering$Boolean$() {
  if ((!$n_s_math_Ordering$Boolean$)) {
    $n_s_math_Ordering$Boolean$ = new $c_s_math_Ordering$Boolean$();
  }
  return $n_s_math_Ordering$Boolean$;
}
/** @constructor */
function $c_s_math_Ordering$Byte$() {
}
$p = $c_s_math_Ordering$Byte$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Byte$;
/** @constructor */
function $h_s_math_Ordering$Byte$() {
}
$h_s_math_Ordering$Byte$.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Byte$ = new $TypeData().i($c_s_math_Ordering$Byte$, "scala.math.Ordering$Byte$", ({
  d1: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d2: 1
}));
var $n_s_math_Ordering$Byte$;
function $m_s_math_Ordering$Byte$() {
  if ((!$n_s_math_Ordering$Byte$)) {
    $n_s_math_Ordering$Byte$ = new $c_s_math_Ordering$Byte$();
  }
  return $n_s_math_Ordering$Byte$;
}
/** @constructor */
function $c_s_math_Ordering$Char$() {
}
$p = $c_s_math_Ordering$Char$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Char$;
/** @constructor */
function $h_s_math_Ordering$Char$() {
}
$h_s_math_Ordering$Char$.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  return (($uC(x) - $uC(y)) | 0);
});
var $d_s_math_Ordering$Char$ = new $TypeData().i($c_s_math_Ordering$Char$, "scala.math.Ordering$Char$", ({
  d4: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d5: 1
}));
var $n_s_math_Ordering$Char$;
function $m_s_math_Ordering$Char$() {
  if ((!$n_s_math_Ordering$Char$)) {
    $n_s_math_Ordering$Char$ = new $c_s_math_Ordering$Char$();
  }
  return $n_s_math_Ordering$Char$;
}
/** @constructor */
function $c_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$p = $c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$DeprecatedDoubleOrdering$;
/** @constructor */
function $h_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$h_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  return $m_jl_Double$().cX((+x), (+y));
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().i($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  d6: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d7: 1
}));
var $n_s_math_Ordering$DeprecatedDoubleOrdering$;
function $m_s_math_Ordering$DeprecatedDoubleOrdering$() {
  if ((!$n_s_math_Ordering$DeprecatedDoubleOrdering$)) {
    $n_s_math_Ordering$DeprecatedDoubleOrdering$ = new $c_s_math_Ordering$DeprecatedDoubleOrdering$();
  }
  return $n_s_math_Ordering$DeprecatedDoubleOrdering$;
}
/** @constructor */
function $c_s_math_Ordering$Long$() {
}
$p = $c_s_math_Ordering$Long$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Long$;
/** @constructor */
function $h_s_math_Ordering$Long$() {
}
$h_s_math_Ordering$Long$.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  var $x_1 = $uJ(x);
  var x$1_$_lo = $x_1.l;
  var x$1_$_hi = $x_1.h;
  var $x_2 = $uJ(y);
  var y$1_$_lo = $x_2.l;
  var y$1_$_hi = $x_2.h;
  return ((x$1_$_hi === y$1_$_hi) ? ((x$1_$_lo === y$1_$_lo) ? 0 : (((x$1_$_lo >>> 0) < (y$1_$_lo >>> 0)) ? (-1) : 1)) : ((x$1_$_hi < y$1_$_hi) ? (-1) : 1));
});
var $d_s_math_Ordering$Long$ = new $TypeData().i($c_s_math_Ordering$Long$, "scala.math.Ordering$Long$", ({
  da: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  db: 1
}));
var $n_s_math_Ordering$Long$;
function $m_s_math_Ordering$Long$() {
  if ((!$n_s_math_Ordering$Long$)) {
    $n_s_math_Ordering$Long$ = new $c_s_math_Ordering$Long$();
  }
  return $n_s_math_Ordering$Long$;
}
/** @constructor */
function $c_s_math_Ordering$Short$() {
}
$p = $c_s_math_Ordering$Short$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Short$;
/** @constructor */
function $h_s_math_Ordering$Short$() {
}
$h_s_math_Ordering$Short$.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Short$ = new $TypeData().i($c_s_math_Ordering$Short$, "scala.math.Ordering$Short$", ({
  dc: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  dd: 1
}));
var $n_s_math_Ordering$Short$;
function $m_s_math_Ordering$Short$() {
  if ((!$n_s_math_Ordering$Short$)) {
    $n_s_math_Ordering$Short$ = new $c_s_math_Ordering$Short$();
  }
  return $n_s_math_Ordering$Short$;
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.r = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.A = (function() {
  return this.r;
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.bN = null;
    this.bN = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  co() {
    return $dp_toString__T(this.bN);
  }
  b8() {
    return "JavaScriptException";
  }
  b6() {
    return 1;
  }
  b7(x$1) {
    return ((x$1 === 0) ? this.bN : $m_sr_Statics$().fB(x$1));
  }
  bZ() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  j() {
    return $m_s_util_hashing_MurmurHash3$().fM(this, 1744042595, true);
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aV)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aV: 1,
  O: 1,
  N: 1,
  G: 1,
  a: 1,
  ab: 1,
  d: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.m())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.V();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_math_Ordering$Int$() {
  this.dT = null;
  $n_s_math_Ordering$Int$ = this;
  this.dT = new $c_s_math_Ordering$Reverse(this);
}
$p = $c_s_math_Ordering$Int$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
}
$h_s_math_Ordering$Int$.prototype = $p;
$p.ax = (function(other) {
  return $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.s = (function(x, y) {
  var x$1 = (x | 0);
  var y$1 = (y | 0);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1));
});
var $d_s_math_Ordering$Int$ = new $TypeData().i($c_s_math_Ordering$Int$, "scala.math.Ordering$Int$", ({
  d8: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d9: 1,
  d3: 1
}));
var $n_s_math_Ordering$Int$;
function $m_s_math_Ordering$Int$() {
  if ((!$n_s_math_Ordering$Int$)) {
    $n_s_math_Ordering$Int$ = new $c_s_math_Ordering$Int$();
  }
  return $n_s_math_Ordering$Int$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.J = (function() {
  return $d_Z.l();
});
$p.I = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.J = (function() {
  return $d_B.l();
});
$p.I = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.J = (function() {
  return $d_C.l();
});
$p.I = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.J = (function() {
  return $d_D.l();
});
$p.I = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.J = (function() {
  return $d_F.l();
});
$p.I = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.J = (function() {
  return $d_I.l();
});
$p.I = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.J = (function() {
  return $d_J.l();
});
$p.I = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.aG = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.A = (function() {
  return this.aG;
});
$p.j = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.J = (function() {
  return $d_S.l();
});
$p.I = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.r = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.J = (function() {
  return $d_V.l();
});
$p.I = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.ay = (function() {
  return $m_sc_View$();
});
$p.A = (function() {
  return $f_sc_View__toString__T(this);
});
$p.a1 = (function() {
  return "View";
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.aG = null;
  this.aG = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.J = (function() {
  return $d_O.l();
});
$p.I = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  dh: 1,
  ai: 1,
  ah: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.r = null;
  this.r = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  dj: 1,
  di: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.r = null;
  this.r = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  dl: 1,
  dk: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.r = null;
  this.r = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  dn: 1,
  dm: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.r = null;
  this.r = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  dq: 1,
  dp: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.r = null;
  this.r = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  ds: 1,
  dr: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.r = null;
  this.r = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  du: 1,
  dt: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.r = null;
  this.r = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  dw: 1,
  dv: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.aG = null;
  this.aG = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.J = (function() {
  return $d_sr_Nothing$.l();
});
$p.I = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  dx: 1,
  ai: 1,
  ah: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.aG = null;
  this.aG = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.J = (function() {
  return $d_sr_Null$.l();
});
$p.I = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  dy: 1,
  ai: 1,
  ah: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.aG = null;
  this.aG = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.J = (function() {
  return $d_O.l();
});
$p.I = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  dz: 1,
  ai: 1,
  ah: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.r = null;
  this.r = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  dB: 1,
  dA: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.r = null;
  this.r = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  dD: 1,
  dC: 1,
  a6: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1,
  M: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
/** @constructor */
function $c_Lcalagem_TipoParticula$$anon$1(\u03b4name$2, _$ordinal$2) {
  this.c8 = null;
  this.c8 = \u03b4name$2;
}
$p = $c_Lcalagem_TipoParticula$$anon$1.prototype = new $h_Lcalagem_TipoParticula();
$p.constructor = $c_Lcalagem_TipoParticula$$anon$1;
/** @constructor */
function $h_Lcalagem_TipoParticula$$anon$1() {
}
$h_Lcalagem_TipoParticula$$anon$1.prototype = $p;
$p.b6 = (function() {
  return 0;
});
$p.b7 = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.b8 = (function() {
  return this.c8;
});
$p.A = (function() {
  return this.c8;
});
$p.j = (function() {
  return $f_T__hashCode__I(this.c8);
});
var $d_Lcalagem_TipoParticula$$anon$1 = new $TypeData().i($c_Lcalagem_TipoParticula$$anon$1, "calagem.TipoParticula$$anon$1", ({
  b5: 1,
  b3: 1,
  d: 1,
  ab: 1,
  a: 1,
  dg: 1,
  dI: 1,
  at: 1,
  aT: 1,
  cU: 1
}));
function $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying_, len, ord) {
  $thiz.ar = len;
  $thiz.bb = ord;
  $thiz.bD = underlying_;
  $thiz.cJ = false;
  return $thiz;
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__($thiz, underlying, ord) {
  $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying, underlying.d(), ord);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Sorted() {
  this.ar = 0;
  this.bb = null;
  this.bD = null;
  this.cJ = false;
  this.dw = null;
  this.dx = false;
}
$p = $c_sc_SeqView$Sorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted;
/** @constructor */
function $h_sc_SeqView$Sorted() {
}
$h_sc_SeqView$Sorted.prototype = $p;
$p.bq = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ae = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aA = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().b5(this);
});
$p.q = (function() {
  return this.b().e();
});
$p.R = (function() {
  return new $c_sc_SeqView$Sorted$ReverseSorted(this).b();
});
$p.Q = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b4 = (function() {
  return $m_sc_View$().U();
});
$p.ad = (function() {
  return "SeqView";
});
$p.A = (function() {
  return $f_sc_View__toString__T(this);
});
$p.cs = (function() {
  if ((!this.dx)) {
    var len = this.ar;
    if ((len === 0)) {
      var res = $m_sci_Nil$();
    } else if ((len === 1)) {
      $m_sci_List$();
      var elems = new $c_sjsr_WrappedVarArgs([this.bD.q()]);
      var res = $m_sci_Nil$().b5(elems);
    } else {
      var arr = new $ac_O(len);
      this.bD.ae(arr, 0, 2147483647);
      $m_ju_Arrays$().br(arr, this.bb);
      var res = $m_sci_ArraySeq$().cw(arr);
    }
    this.cJ = true;
    this.bD = null;
    this.dw = res;
    this.dx = true;
  }
  return this.dw;
});
$p.ep = (function() {
  return (this.cJ ? this.cs() : this.bD);
});
$p.g = (function(i) {
  return this.cs().g(i);
});
$p.d = (function() {
  return this.ar;
});
$p.b = (function() {
  return $m_sc_Iterator$().W.bX(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.cs().b())));
});
$p.h = (function() {
  return this.ar;
});
$p.m = (function() {
  return (this.ar === 0);
});
$p.d6 = (function(ord1) {
  var x$2 = this.bb;
  if (((ord1 === null) ? (x$2 === null) : ord1.aw(x$2))) {
    return this;
  } else {
    return (ord1.ax(this.bb) ? new $c_sc_SeqView$Sorted$ReverseSorted(this) : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.ep(), this.ar, ord1));
  }
});
$p.S = (function(ord) {
  return this.d6(ord);
});
var $d_sc_SeqView$Sorted = new $TypeData().i($c_sc_SeqView$Sorted, "scala.collection.SeqView$Sorted", ({
  bX: 1,
  b: 1,
  c: 1,
  g: 1,
  h: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  a1: 1
}));
function $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse($thiz) {
  if ((!$thiz.dz)) {
    $thiz.dy = $ct_sc_SeqView$Reverse__sc_SeqOps__(new $c_sc_SeqView$Reverse(), $thiz.ag.cs());
    $thiz.dz = true;
  }
  return $thiz.dy;
}
/** @constructor */
function $c_sc_SeqView$Sorted$ReverseSorted(outer) {
  this.dy = null;
  this.dz = false;
  this.ag = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ag = outer;
}
$p = $c_sc_SeqView$Sorted$ReverseSorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted$ReverseSorted;
/** @constructor */
function $h_sc_SeqView$Sorted$ReverseSorted() {
}
$h_sc_SeqView$Sorted$ReverseSorted.prototype = $p;
$p.bq = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ae = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aA = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().b5(this);
});
$p.q = (function() {
  return this.b().e();
});
$p.R = (function() {
  return this.ag.b();
});
$p.Q = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b4 = (function() {
  return $m_sc_View$().U();
});
$p.ad = (function() {
  return "SeqView";
});
$p.A = (function() {
  return $f_sc_View__toString__T(this);
});
$p.g = (function(i) {
  return $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).g(i);
});
$p.d = (function() {
  return this.ag.ar;
});
$p.b = (function() {
  return $m_sc_Iterator$().W.bX(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).b())));
});
$p.h = (function() {
  return this.ag.ar;
});
$p.m = (function() {
  return (this.ag.ar === 0);
});
$p.d6 = (function(ord1) {
  var x$2 = this.ag.bb;
  if (((ord1 === null) ? (x$2 === null) : ord1.aw(x$2))) {
    return this.ag;
  } else {
    return (ord1.ax(this.ag.bb) ? this : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.ag.ep(), this.ag.ar, ord1));
  }
});
$p.S = (function(ord) {
  return this.d6(ord);
});
var $d_sc_SeqView$Sorted$ReverseSorted = new $TypeData().i($c_sc_SeqView$Sorted$ReverseSorted, "scala.collection.SeqView$Sorted$ReverseSorted", ({
  bY: 1,
  b: 1,
  c: 1,
  g: 1,
  h: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  a1: 1
}));
/** @constructor */
function $c_sc_View$$anon$1(it$3) {
  this.dA = null;
  this.dA = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.b = (function() {
  return this.dA.Y();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  c1: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1
}));
/** @constructor */
function $c_sc_View$Filter(underlying, p, isFlipped) {
  this.cK = null;
  this.dC = null;
  this.dB = false;
  this.cK = underlying;
  this.dC = p;
  this.dB = isFlipped;
}
$p = $c_sc_View$Filter.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Filter;
/** @constructor */
function $h_sc_View$Filter() {
}
$h_sc_View$Filter.prototype = $p;
$p.b = (function() {
  var this$1 = this.cK.b();
  return new $c_sc_Iterator$$anon$6(this.dC, this.dB, this$1);
});
$p.h = (function() {
  return ((this.cK.h() === 0) ? 0 : (-1));
});
$p.m = (function() {
  return (!this.b().f());
});
var $d_sc_View$Filter = new $TypeData().i($c_sc_View$Filter, "scala.collection.View$Filter", ({
  c2: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1
}));
function $ct_sc_View$Take__sc_IterableOps__I__($thiz, underlying, n) {
  $thiz.bF = ((n > 0) ? n : 0);
  return $thiz;
}
/** @constructor */
function $c_sc_View$Take() {
  this.bF = 0;
}
$p = $c_sc_View$Take.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Take;
/** @constructor */
function $h_sc_View$Take() {
}
$h_sc_View$Take.prototype = $p;
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.R = (function() {
  return this.az().b();
});
$p.S = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.Q = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.m = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().eu(this);
});
$p.A = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
$p.R = (function() {
  return this.az().b();
});
$p.Q = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.m = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.a1 = (function() {
  return "SeqView";
});
$p.S = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.bJ.Y() | 0))));
}
function $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.bJ.Y() | 0))));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.aY = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.aY = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.g = (function(idx) {
  return this.aY.g(idx);
});
$p.d = (function() {
  return this.aY.d();
});
$p.b = (function() {
  return this.aY.b();
});
$p.h = (function() {
  return this.aY.h();
});
$p.m = (function() {
  return this.aY.m();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  aG: 1,
  ac: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  h: 1,
  a1: 1
}));
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.aZ = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.aZ = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.g = (function(i) {
  return this.aZ.g(((((this.d() - 1) | 0) - i) | 0));
});
$p.d = (function() {
  return this.aZ.d();
});
$p.b = (function() {
  return this.aZ.R();
});
$p.h = (function() {
  return this.aZ.h();
});
$p.m = (function() {
  return this.aZ.m();
});
var $d_sc_SeqView$Reverse = new $TypeData().i($c_sc_SeqView$Reverse, "scala.collection.SeqView$Reverse", ({
  aH: 1,
  ac: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  h: 1,
  a1: 1
}));
function $ct_sc_SeqView$Take__sc_SeqOps__I__($thiz, underlying, n) {
  $thiz.bc = underlying;
  $thiz.cf = n;
  $ct_sc_View$Take__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Take() {
  this.bF = 0;
  this.bc = null;
  this.cf = 0;
}
$p = $c_sc_SeqView$Take.prototype = new $h_sc_View$Take();
$p.constructor = $c_sc_SeqView$Take;
/** @constructor */
function $h_sc_SeqView$Take() {
}
$h_sc_SeqView$Take.prototype = $p;
$p.m = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.g = (function(idx) {
  if ((idx < this.cf)) {
    return this.bc.g(idx);
  } else {
    throw ((this.bc.h() >= 0) ? $m_scg_CommonErrors$().b3(idx, ((this.h() - 1) | 0)) : $m_scg_CommonErrors$().fy(idx));
  }
});
$p.d = (function() {
  var self = this.bc.d();
  var that = this.bF;
  return ((self < that) ? self : that);
});
$p.S = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.a1 = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.aY = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.a1 = (function() {
  return "IndexedSeqView";
});
$p.ao = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bO: 1,
  aG: 1,
  ac: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  h: 1,
  a1: 1,
  k: 1,
  ad: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.aZ = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.a1 = (function() {
  return "IndexedSeqView";
});
$p.ao = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  bP: 1,
  aH: 1,
  ac: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  h: 1,
  a1: 1,
  k: 1,
  ad: 1
}));
function $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__($thiz, underlying, n) {
  $ct_sc_SeqView$Take__sc_SeqOps__I__($thiz, underlying, n);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Take() {
  this.bF = 0;
  this.bc = null;
  this.cf = 0;
}
$p = $c_sc_IndexedSeqView$Take.prototype = new $h_sc_SeqView$Take();
$p.constructor = $c_sc_IndexedSeqView$Take;
/** @constructor */
function $h_sc_IndexedSeqView$Take() {
}
$h_sc_IndexedSeqView$Take.prototype = $p;
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.cv = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
$p.a1 = (function() {
  return "IndexedSeqView";
});
$p.ao = (function(n) {
  return this.cv(n);
});
var $d_sc_IndexedSeqView$Take = new $TypeData().i($c_sc_IndexedSeqView$Take, "scala.collection.IndexedSeqView$Take", ({
  aD: 1,
  aI: 1,
  aL: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  h: 1,
  a1: 1,
  k: 1,
  ad: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.cN = null;
  this.cg = null;
  this.cN = underlying;
  this.cg = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.g = (function(n) {
  return this.cN.g(n);
});
$p.d = (function() {
  return this.cN.p;
});
$p.ad = (function() {
  return "ArrayBufferView";
});
$p.b = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.cg);
});
$p.R = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(this, this.cg);
});
$p.cv = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.cg);
});
$p.ao = (function(n) {
  return this.cv(n);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  cv: 1,
  bJ: 1,
  ac: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  h: 1,
  a1: 1,
  k: 1,
  ad: 1
}));
function $ct_sci_LazyListBase__O__($thiz, initialTail) {
  $thiz.ah = initialTail;
  return $thiz;
}
/** @constructor */
function $c_sci_LazyListBase() {
  this.ah = null;
}
$p = $c_sci_LazyListBase.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyListBase;
/** @constructor */
function $h_sci_LazyListBase() {
}
$h_sci_LazyListBase.prototype = $p;
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Take(underlying, n, mutationCount) {
  this.bF = 0;
  this.bc = null;
  this.cf = 0;
  this.bJ = null;
  this.bJ = mutationCount;
  $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(this, underlying, n);
}
$p = $c_scm_CheckedIndexedSeqView$Take.prototype = new $h_sc_IndexedSeqView$Take();
$p.constructor = $c_scm_CheckedIndexedSeqView$Take;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Take() {
}
$h_scm_CheckedIndexedSeqView$Take.prototype = $p;
$p.b = (function() {
  return $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator(this);
});
$p.R = (function() {
  return $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator(this);
});
$p.cv = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.bJ);
});
$p.ao = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.bJ);
});
var $d_scm_CheckedIndexedSeqView$Take = new $TypeData().i($c_scm_CheckedIndexedSeqView$Take, "scala.collection.mutable.CheckedIndexedSeqView$Take", ({
  cO: 1,
  aD: 1,
  aI: 1,
  aL: 1,
  Z: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  H: 1,
  h: 1,
  a1: 1,
  k: 1,
  ad: 1,
  cL: 1
}));
function $f_scm_Buffer__takeInPlace__I__scm_Buffer($thiz, n) {
  var norm = $p_scm_Buffer__normalized__I__I($thiz, n);
  $thiz.d3(norm, (($thiz.d() - norm) | 0));
  return $thiz;
}
function $p_scm_Buffer__normalized__I__I($thiz, n) {
  var x = ((n > 0) ? n : 0);
  var y = $thiz.d();
  return ((x < y) ? x : y);
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.cS = null;
  this.cS = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.S = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.ao = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.j = (function() {
  return $m_s_util_hashing_MurmurHash3$().eu(this);
});
$p.A = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.m = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.b4 = (function() {
  return $m_sjsr_WrappedVarArgs$().U();
});
$p.bq = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ae = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aH = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aA = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().b5(this);
});
$p.d = (function() {
  return (this.cS.length | 0);
});
$p.g = (function(idx) {
  return this.cS[idx];
});
$p.ad = (function() {
  return "WrappedVarArgs";
});
$p.bY = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().ej(coll);
});
$p.l = (function(v1) {
  return this.g((v1 | 0));
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  dT: 1,
  R: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  v: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  J: 1,
  p: 1,
  q: 1,
  a: 1
}));
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $ct_sci_LazyListBase__O__($thiz, ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState));
  $thiz.O = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.O = head;
  $thiz.ah = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  while (($thiz.O === $m_sci_LazyList$Uninitialized$())) {
    var x3 = $thiz.ah;
    if ((x3 instanceof $c_jl_Thread)) {
      $p_sci_LazyList__selfRef$1__E($thiz);
    }
    if (false) {
      if ((x3.gf(), true)) {
        $p_sci_LazyList__selfRef$1__E($thiz);
      }
      x3.ga();
      continue;
    }
    if ($is_F0(x3)) {
      $m_sci_LazyList$().eq();
      var value = $m_jl_Thread$().di;
      if (($thiz.ah === x3)) {
        $thiz.ah = value;
        var $x_1 = true;
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var ex = null;
        try {
          var l = $p_sci_LazyList__evaluated__sci_LazyList(x3.Y());
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          ex = e$2;
          var l = null;
        }
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().aI();
          }
          var newTail = l.ah;
        } else {
          var newTail = x3;
        }
        $m_sci_LazyList$().eq();
        var old = $thiz.ah;
        $thiz.ah = newTail;
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().aI();
          }
          $thiz.O = l.O;
        }
        if (false) {
          old.gd();
        }
        if ((ex !== null)) {
          var x$proxy1 = ex;
          if ((x$proxy1 === null)) {
            $m_sr_Scala3RunTime$().aI();
          }
          var $x_2 = x$proxy1;
          throw (($x_2 instanceof $c_sjs_js_JavaScriptException) ? $x_2.bN : $x_2);
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.O !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.ah === null) ? $m_sci_LazyList$().w : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.c = (("" + b.c) + start);
  if (($thiz.O === $m_sci_LazyList$Uninitialized$())) {
    b.c = (b.c + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().w)) {
    var obj = $thiz.q();
    b.c = (("" + b.c) + obj);
    var cursor = $thiz;
    var scout = $thiz.M();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().w))) {
        scout = scout.M();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().w));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.c = (("" + b.c) + sep);
            var obj$1 = c.q();
            b.c = (("" + b.c) + obj$1);
            cursor = cursor.M();
            scout = scout.M();
            var this$3 = scout;
            if (((this$3.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().w))) {
              scout = scout.M();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().w)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.c = (("" + b.c) + sep);
        var obj$2 = c$1.q();
        b.c = (("" + b.c) + obj$2);
        cursor = cursor.M();
      }
      if ((!(cursor.O !== $m_sci_LazyList$Uninitialized$()))) {
        b.c = (("" + b.c) + sep);
        b.c = (b.c + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.M();
          scout = scout.M();
        }
        while (true) {
          var ct = cursor.M();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.c = (("" + b.c) + sep);
            var obj$3 = c$2.q();
            b.c = (("" + b.c) + obj$3);
          }
          cursor = ct;
          if ((cursor !== scout)) {
          } else {
            break;
          }
        }
      }
      b.c = (("" + b.c) + sep);
      b.c = (b.c + "<cycle>");
    }
  }
  b.c = (("" + b.c) + end);
  return b;
}
function $p_sci_LazyList__selfRef$1__E($thiz) {
  throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
}
/** @constructor */
function $c_sci_LazyList() {
  this.ah = null;
  this.O = null;
}
$p = $c_sci_LazyList.prototype = new $h_sci_LazyListBase();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.d = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.Q = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.g = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.a1 = (function() {
  return "LinearSeq";
});
$p.m = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().w);
});
$p.h = (function() {
  return (((this.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().w)) ? 0 : (-1));
});
$p.q = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().w)) {
    throw new $c_ju_NoSuchElementException("head of empty lazy list");
  } else {
    return this.O;
  }
});
$p.M = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().w)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.ah;
  }
});
$p.fs = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().w))) {
    these = these.M();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().w)) {
      return this;
    }
    these = these.M();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().w)) {
      return this;
    }
    these = these.M();
    if ((these === those)) {
      return this;
    }
    those = those.M();
  }
  return this;
});
$p.b = (function() {
  return (((this.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().w)) ? $m_sc_Iterator$().W : new $c_sci_LazyList$LazyIterator(this));
});
$p.bq = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().w))) {
      f.l(\u03b4this$tailLocal1.q());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.M();
    } else {
      return (void 0);
    }
  }
});
$p.ad = (function() {
  return "LazyList";
});
$p.fm = (function(n) {
  return ((n <= 0) ? this : (((this.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().w)) ? $m_sci_LazyList$().w : $m_sci_LazyList$().fT(this, n)));
});
$p.aH = (function(sb, start, sep, end) {
  this.fs();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.H, start, sep, end);
  return sb;
});
$p.A = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").c;
});
$p.ay = (function() {
  return $m_sci_LazyList$();
});
$p.V = (function() {
  return this.M();
});
$p.ec = (function(n) {
  return this.fm(n);
});
$p.l = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  aM: 1,
  cn: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  a: 1,
  am: 1,
  al: 1,
  ao: 1,
  an: 1
}));
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.ab = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.a1 = (function() {
  return "IndexedSeq";
});
$p.cn = (function(coll) {
  return $m_sci_ArraySeq$().d1(coll, this.z());
});
$p.b4 = (function() {
  return $m_sci_ArraySeq$().cr(this.z());
});
$p.g6 = (function(n) {
  return (($m_jl_reflect_Array$().L(this.a2()) <= n) ? this : $m_sci_ArraySeq$().cw($m_sc_ArrayOps$().fW(this.a2(), 0, n)));
});
$p.ad = (function() {
  return "ArraySeq";
});
$p.ae = (function(xs, start, len) {
  var srcLen = this.d();
  var destLen = $m_jl_reflect_Array$().L(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aT(this.a2(), 0, xs, start, copied);
  }
  return copied;
});
$p.E = (function(ord) {
  if (($m_jl_reflect_Array$().L(this.a2()) <= 1)) {
    return this;
  } else {
    var original = this.a2();
    var newLength = this.d();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    if ($d_O.R($objectGetClass(original).k.Q().k)) {
      var a = $m_ju_Arrays$().cY(original, newLength, $m_sr_ScalaRunTime$().cl(new $ac_O(0)));
    } else {
      var dest = new $ac_O(newLength);
      $m_s_Array$().aT(original, 0, dest, 0, $m_jl_reflect_Array$().L(original));
      var a = dest;
    }
    $m_ju_Arrays$().br(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.ay = (function() {
  return $m_sci_ArraySeq$().dD;
});
$p.ao = (function(n) {
  return this.g6(n);
});
$p.S = (function(ord) {
  return this.E(ord);
});
$p.bY = (function(coll) {
  return $m_sci_ArraySeq$().d1(coll, this.z());
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Q)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ao = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.a1 = (function() {
  return "IndexedSeq";
});
$p.el = (function(coll) {
  var evidence$1 = this.z();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.J();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.h();
  var it = coll.b();
  while (it.f()) {
    var elem = it.e();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cu(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().cp($m_scm_ArrayBuilder$().ct(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.b4 = (function() {
  return $m_scm_ArraySeq$().cr(this.z());
});
$p.ad = (function() {
  return "ArraySeq";
});
$p.ae = (function(xs, start, len) {
  var srcLen = this.d();
  var destLen = $m_jl_reflect_Array$().L(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aT(this.ak(), 0, xs, start, copied);
  }
  return copied;
});
$p.g3 = (function(ord) {
  return $m_scm_ArraySeq$().cp($m_sc_ArrayOps$().g4(this.ak(), ord));
});
$p.ay = (function() {
  return $m_scm_ArraySeq$().dK;
});
$p.cn = (function(coll) {
  return this.el(coll);
});
$p.bY = (function(coll) {
  return this.el(coll);
});
$p.S = (function(ord) {
  return this.g3(ord);
});
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.aN = null;
  this.aN = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.d = (function() {
  return this.aN.a.length;
});
$p.bW = (function(i) {
  return this.aN.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.aN, this$1.x);
});
$p.E = (function(ord) {
  if ((this.aN.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Boolean$()))) {
    var this$1 = this.aN;
    var a = this$1.t();
    $m_s_util_Sorting$().d7(a, 0, a.a.length, $m_s_math_Ordering$Boolean$());
    return new $c_sci_ArraySeq$ofBoolean(a);
  } else {
    return $c_sci_ArraySeq.prototype.E.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aN);
});
$p.a2 = (function() {
  return this.aN;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.g = (function(i) {
  return this.bW(i);
});
$p.l = (function(v1) {
  return this.bW((v1 | 0));
});
$p.S = (function(ord) {
  return this.E(ord);
});
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  c7: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.aO = null;
  this.aO = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.d = (function() {
  return this.aO.a.length;
});
$p.bO = (function(i) {
  return this.aO.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.aO, this$1.x);
});
$p.E = (function(ord) {
  if ((this.aO.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Byte$()))) {
    var this$1 = this.aO;
    var a = this$1.t();
    $m_ju_Arrays$().ev(a);
    return new $c_sci_ArraySeq$ofByte(a);
  } else {
    return $c_sci_ArraySeq.prototype.E.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aO);
});
$p.a2 = (function() {
  return this.aO;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.g = (function(i) {
  return this.bO(i);
});
$p.l = (function(v1) {
  return this.bO((v1 | 0));
});
$p.S = (function(ord) {
  return this.E(ord);
});
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  c8: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.aD = null;
  this.aD = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.d = (function() {
  return this.aD.a.length;
});
$p.bP = (function(i) {
  return this.aD.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.aD, this$1.x);
});
$p.E = (function(ord) {
  if ((this.aD.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Char$()))) {
    var this$1 = this.aD;
    var a = this$1.t();
    $m_ju_Arrays$().ew(a);
    return new $c_sci_ArraySeq$ofChar(a);
  } else {
    return $c_sci_ArraySeq.prototype.E.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aD);
});
$p.aH = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.aD).aH(sb, start, sep, end);
});
$p.a2 = (function() {
  return this.aD;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.g = (function(i) {
  return $bC(this.bP(i));
});
$p.l = (function(v1) {
  return $bC(this.bP((v1 | 0)));
});
$p.S = (function(ord) {
  return this.E(ord);
});
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  c9: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.bd = null;
  this.bd = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.d = (function() {
  return this.bd.a.length;
});
$p.bQ = (function(i) {
  return this.bd.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bd, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bd);
});
$p.a2 = (function() {
  return this.bd;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.g = (function(i) {
  return this.bQ(i);
});
$p.l = (function(v1) {
  return this.bQ((v1 | 0));
});
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  ca: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.be = null;
  this.be = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.d = (function() {
  return this.be.a.length;
});
$p.bR = (function(i) {
  return this.be.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.be, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.be);
});
$p.a2 = (function() {
  return this.be;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.g = (function(i) {
  return this.bR(i);
});
$p.l = (function(v1) {
  return this.bR((v1 | 0));
});
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  cb: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.aP = null;
  this.aP = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.d = (function() {
  return this.aP.a.length;
});
$p.bS = (function(i) {
  return this.aP.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.aP, this$1.x);
});
$p.E = (function(ord) {
  if ((this.aP.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Int$()))) {
    var this$1 = this.aP;
    var a = this$1.t();
    $m_ju_Arrays$().ex(a);
    return new $c_sci_ArraySeq$ofInt(a);
  } else {
    return $c_sci_ArraySeq.prototype.E.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aP);
});
$p.a2 = (function() {
  return this.aP;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.g = (function(i) {
  return this.bS(i);
});
$p.l = (function(v1) {
  return this.bS((v1 | 0));
});
$p.S = (function(ord) {
  return this.E(ord);
});
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  cc: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.aQ = null;
  this.aQ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.d = (function() {
  return ((this.aQ.a.length >>> 1) | 0);
});
$p.bT = (function(i) {
  var $x_1 = this.aQ.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.aQ, this$1.x);
});
$p.E = (function(ord) {
  if ((((this.aQ.a.length >>> 1) | 0) <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Long$()))) {
    var this$1 = this.aQ;
    var a = this$1.t();
    $m_ju_Arrays$().ey(a);
    return new $c_sci_ArraySeq$ofLong(a);
  } else {
    return $c_sci_ArraySeq.prototype.E.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aQ);
});
$p.a2 = (function() {
  return this.aQ;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.g = (function(i) {
  return this.bT(i);
});
$p.l = (function(v1) {
  return this.bT((v1 | 0));
});
$p.S = (function(ord) {
  return this.E(ord);
});
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cd: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aE = null;
  this.aE = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.z = (function() {
  return $m_s_reflect_ClassTag$().cm($objectGetClass(this.aE).k.Q());
});
$p.d = (function() {
  return this.aE.a.length;
});
$p.g = (function(i) {
  return this.aE.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.aE, this$1.x);
});
$p.eA = (function(ord) {
  if ((this.aE.a.length <= 1)) {
    return this;
  } else {
    var this$1 = this.aE;
    var a = this$1.t();
    $m_ju_Arrays$().br(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aE);
});
$p.a2 = (function() {
  return this.aE;
});
$p.l = (function(v1) {
  return this.g((v1 | 0));
});
$p.E = (function(ord) {
  return this.eA(ord);
});
$p.S = (function(ord) {
  return this.eA(ord);
});
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  ce: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.aR = null;
  this.aR = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.d = (function() {
  return this.aR.a.length;
});
$p.bU = (function(i) {
  return this.aR.a[i];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.aR, this$1.x);
});
$p.E = (function(ord) {
  if ((this.aR.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Short$()))) {
    var this$1 = this.aR;
    var a = this$1.t();
    $m_ju_Arrays$().ez(a);
    return new $c_sci_ArraySeq$ofShort(a);
  } else {
    return $c_sci_ArraySeq.prototype.E.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aR);
});
$p.a2 = (function() {
  return this.aR;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.g = (function(i) {
  return this.bU(i);
});
$p.l = (function(v1) {
  return this.bU((v1 | 0));
});
$p.S = (function(ord) {
  return this.E(ord);
});
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cf: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.bG = null;
  this.bG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.d = (function() {
  return this.bG.a.length;
});
$p.bV = (function(i) {
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bG, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bG);
});
$p.a2 = (function() {
  return this.bG;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.g = (function(i) {
  this.bV(i);
});
$p.l = (function(v1) {
  this.bV((v1 | 0));
});
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cg: 1,
  Q: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  k: 1,
  o: 1,
  S: 1,
  R: 1,
  p: 1,
  q: 1,
  J: 1,
  U: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.m()) | 0);
    } else {
      if ((!xs$tailLocal1.m())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.V();
        i$tailLocal1 = i$tailLocal1$tmp1;
        xs$tailLocal1 = xs$tailLocal1$tmp1;
        continue;
      }
      return (-1);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.g = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.a1 = (function() {
  return "LinearSeq";
});
$p.b = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.S = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.eR = (function(prefix) {
  if (this.m()) {
    return prefix;
  } else if (prefix.m()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.q(), this);
    var curr = result;
    var that = prefix.V();
    while ((!that.m())) {
      var temp = new $c_sci_$colon$colon(that.q(), this);
      curr.as = temp;
      curr = temp;
      that = that.V();
    }
    return result;
  }
});
$p.m = (function() {
  return (this === $m_sci_Nil$());
});
$p.b5 = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.eR(prefix);
  }
  if ((prefix.h() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.m()) {
      return prefix.aA();
    }
  }
  var iter = prefix.b();
  if (iter.f()) {
    var result = new $c_sci_$colon$colon(iter.e(), this);
    var curr = result;
    while (iter.f()) {
      var temp = new $c_sci_$colon$colon(iter.e(), this);
      curr.as = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.bq = (function(f) {
  var these = this;
  while ((!these.m())) {
    f.l(these.q());
    these = these.V();
  }
});
$p.d = (function() {
  var these = this;
  var len = 0;
  while ((!these.m())) {
    len = ((1 + len) | 0);
    these = these.V();
  }
  return len;
});
$p.Q = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.ad = (function() {
  return "List";
});
$p.aA = (function() {
  return this;
});
$p.ay = (function() {
  return $m_sci_List$();
});
$p.ec = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.l = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.bi = null;
  this.bi = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.d = (function() {
  return this.bi.a.length;
});
$p.bW = (function(index) {
  return this.bi.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bi, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bi);
});
$p.ak = (function() {
  return this.bi;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.g = (function(i) {
  return this.bW(i);
});
$p.l = (function(v1) {
  return this.bW((v1 | 0));
});
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cA: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.bj = null;
  this.bj = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.d = (function() {
  return this.bj.a.length;
});
$p.bO = (function(index) {
  return this.bj.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bj, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bj);
});
$p.ak = (function() {
  return this.bj;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.g = (function(i) {
  return this.bO(i);
});
$p.l = (function(v1) {
  return this.bO((v1 | 0));
});
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cB: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.ai = null;
  this.ai = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.d = (function() {
  return this.ai.a.length;
});
$p.bP = (function(index) {
  return this.ai.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.ai, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ai);
});
$p.aH = (function(sb, start, sep, end) {
  var jsb = sb.H;
  if ((start.length !== 0)) {
    jsb.c = (("" + jsb.c) + start);
  }
  var len = this.ai.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.e1(this.ai);
    } else {
      jsb.d();
      var c = this.ai.a[0];
      var str = ("" + $cToS(c));
      jsb.c = (jsb.c + str);
      var i = 1;
      while ((i < len)) {
        jsb.c = (("" + jsb.c) + sep);
        var c$1 = this.ai.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.c = (jsb.c + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.c = (("" + jsb.c) + end);
  }
  return sb;
});
$p.ak = (function() {
  return this.ai;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.g = (function(i) {
  return $bC(this.bP(i));
});
$p.l = (function(v1) {
  return $bC(this.bP((v1 | 0)));
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  aO: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.bk = null;
  this.bk = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.d = (function() {
  return this.bk.a.length;
});
$p.bQ = (function(index) {
  return this.bk.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bk, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bk);
});
$p.ak = (function() {
  return this.bk;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.g = (function(i) {
  return this.bQ(i);
});
$p.l = (function(v1) {
  return this.bQ((v1 | 0));
});
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cC: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.bl = null;
  this.bl = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.d = (function() {
  return this.bl.a.length;
});
$p.bR = (function(index) {
  return this.bl.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bl, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bl);
});
$p.ak = (function() {
  return this.bl;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.g = (function(i) {
  return this.bR(i);
});
$p.l = (function(v1) {
  return this.bR((v1 | 0));
});
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cD: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.bm = null;
  this.bm = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.d = (function() {
  return this.bm.a.length;
});
$p.bS = (function(index) {
  return this.bm.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bm, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bm);
});
$p.ak = (function() {
  return this.bm;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.g = (function(i) {
  return this.bS(i);
});
$p.l = (function(v1) {
  return this.bS((v1 | 0));
});
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cE: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.bn = null;
  this.bn = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.d = (function() {
  return ((this.bn.a.length >>> 1) | 0);
});
$p.bT = (function(index) {
  var $x_1 = this.bn.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bn, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bn);
});
$p.ak = (function() {
  return this.bn;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.g = (function(i) {
  return this.bT(i);
});
$p.l = (function(v1) {
  return this.bT((v1 | 0));
});
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cF: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.b0 = null;
  this.b0 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.z = (function() {
  return $m_s_reflect_ClassTag$().cm($objectGetClass(this.b0).k.Q());
});
$p.d = (function() {
  return this.b0.a.length;
});
$p.g = (function(index) {
  return this.b0.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.b0, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b0);
});
$p.ak = (function() {
  return this.b0;
});
$p.l = (function(v1) {
  return this.g((v1 | 0));
});
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cG: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.bo = null;
  this.bo = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.d = (function() {
  return this.bo.a.length;
});
$p.bU = (function(index) {
  return this.bo.a[index];
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bo, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bo);
});
$p.ak = (function() {
  return this.bo;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.g = (function(i) {
  return this.bU(i);
});
$p.l = (function(v1) {
  return this.bU((v1 | 0));
});
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cH: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.bH = null;
  this.bH = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.d = (function() {
  return this.bH.a.length;
});
$p.bV = (function(index) {
});
$p.j = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.D(this.bH, this$1.x);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bH);
});
$p.ak = (function() {
  return this.bH;
});
$p.z = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.g = (function(i) {
  this.bV(i);
});
$p.l = (function(v1) {
  this.bV((v1 | 0));
});
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cI: 1,
  V: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  p: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.cL = null;
  this.as = null;
  this.cL = head;
  this.as = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.bZ = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.b6 = (function() {
  return 2;
});
$p.b8 = (function() {
  return "::";
});
$p.b7 = (function(n) {
  if ((n === 0)) {
    return this.cL;
  }
  if ((n === 1)) {
    return this.as;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.q = (function() {
  return this.cL;
});
$p.V = (function() {
  return this.as;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  c5: 1,
  ap: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  am: 1,
  al: 1,
  ao: 1,
  an: 1,
  p: 1,
  q: 1,
  aK: 1,
  J: 1,
  a: 1,
  ag: 1,
  ab: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.bZ = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.b6 = (function() {
  return 0;
});
$p.b8 = (function() {
  return "Nil";
});
$p.b7 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.fv = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.g5 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.h = (function() {
  return 0;
});
$p.b = (function() {
  return $m_sc_Iterator$().W;
});
$p.q = (function() {
  this.fv();
});
$p.V = (function() {
  this.g5();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cr: 1,
  ap: 1,
  I: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  v: 1,
  x: 1,
  w: 1,
  am: 1,
  al: 1,
  ao: 1,
  an: 1,
  p: 1,
  q: 1,
  aK: 1,
  J: 1,
  a: 1,
  ag: 1,
  ab: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.H = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.H = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.ab = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.af = (function(size) {
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ao = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.H.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a1 = (function() {
  return "IndexedSeq";
});
$p.b4 = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
$p.d = (function() {
  return this.H.d();
});
$p.h = (function() {
  return this.H.d();
});
$p.eY = (function(x) {
  var this$1 = this.H;
  var str = ("" + $cToS(x));
  this$1.c = (this$1.c + str);
  return this;
});
$p.A = (function() {
  return this.H.c;
});
$p.e2 = (function(xs) {
  if (false) {
    var this$3 = this.H;
    var str = xs.g9;
    this$3.c = (("" + this$3.c) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.H.e1(xs.ai);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.H;
    var s = xs.H;
    this$4.c = (("" + this$4.c) + s);
  } else {
    var ks = xs.h();
    if ((ks !== 0)) {
      var b = this.H;
      if ((ks > 0)) {
        b.d();
      }
      var it = xs.b();
      while (it.f()) {
        var c = $uC(it.e());
        var str$1 = ("" + $cToS(c));
        b.c = (b.c + str$1);
      }
    }
  }
  return this;
});
$p.m = (function() {
  return (this.H.d() === 0);
});
$p.g = (function(i) {
  return $bC(this.H.e4(i));
});
$p.l = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.H.e4(i));
});
$p.cn = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).e2(coll);
});
$p.bY = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).e2(coll);
});
$p.a6 = (function(elem) {
  return this.eY($uC(elem));
});
$p.am = (function() {
  return this.H.c;
});
$p.ay = (function() {
  return $m_scm_IndexedSeq$();
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  aS: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  W: 1,
  X: 1,
  a2: 1,
  af: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  aj: 1,
  a: 1
}));
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().d5($thiz);
  $thiz.T = buf.T;
  $thiz.aj = buf.aj;
  $thiz.ch = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.ci = ((1 + $thiz.ci) | 0);
  if ($thiz.ch) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
function $p_scm_ListBuffer__predecessor__I__sci_$colon$colon($thiz, i) {
  if ((i === 0)) {
    return null;
  } else if ((i === $thiz.K)) {
    return $thiz.aj;
  } else {
    var j = ((i - 1) | 0);
    var p = $thiz.T;
    while ((j > 0)) {
      p = p.V();
      j = ((j - 1) | 0);
    }
    return p;
  }
}
function $p_scm_ListBuffer__getNext__sci_$colon$colon__sci_List($thiz, p) {
  return ((p === null) ? $thiz.T : p.as);
}
function $p_scm_ListBuffer__removeAfter__sci_$colon$colon__I__V($thiz, prev, n) {
  var nx = $p_scm_ListBuffer__ahead$1__sci_List__I__sci_List($thiz, $p_scm_ListBuffer__getNext__sci_$colon$colon__sci_List($thiz, prev), n);
  if ((prev === null)) {
    $thiz.T = nx;
  } else {
    prev.as = nx;
  }
  if (nx.m()) {
    $thiz.aj = prev;
  }
  $thiz.K = (($thiz.K - n) | 0);
}
function $p_scm_ListBuffer__ahead$1__sci_List__I__sci_List($thiz, p, n) {
  var n$tailLocal1 = n;
  var p$tailLocal1 = p;
  while (true) {
    if ((n$tailLocal1 === 0)) {
      return p$tailLocal1;
    } else {
      var p$tailLocal1$tmp1 = p$tailLocal1.V();
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      p$tailLocal1 = p$tailLocal1$tmp1;
      n$tailLocal1 = n$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.ci = 0;
  this.T = null;
  this.aj = null;
  this.ch = false;
  this.K = 0;
  this.ci = 0;
  this.T = $m_sci_Nil$();
  this.aj = null;
  this.ch = false;
  this.K = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.af = (function(size) {
});
$p.b = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.T.b(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ci)));
});
$p.g = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.T, i);
});
$p.d = (function() {
  return this.K;
});
$p.h = (function() {
  return this.K;
});
$p.m = (function() {
  return (this.K === 0);
});
$p.aA = (function() {
  this.ch = (!this.m());
  return this.T;
});
$p.f2 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.K === 0)) {
    this.T = last1;
  } else {
    var x$proxy2 = this.aj;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().aI();
    }
    x$proxy2.as = last1;
  }
  this.aj = last1;
  this.K = ((1 + this.K) | 0);
  return this;
});
$p.d5 = (function(xs) {
  var it = xs.b();
  if (it.f()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
    this.T = last0;
    while (it.f()) {
      var last1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      last0.as = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.K = len;
    this.aj = last0;
  }
  return this;
});
$p.eX = (function(xs) {
  var it = xs.b();
  if (it.f()) {
    var fresh = new $c_scm_ListBuffer().d5(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.K === 0)) {
      this.T = fresh.T;
    } else {
      var x$proxy3 = this.aj;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().aI();
      }
      x$proxy3.as = fresh.T;
    }
    this.aj = fresh.aj;
    this.K = ((this.K + fresh.K) | 0);
  }
  return this;
});
$p.d3 = (function(idx, count) {
  if ((count > 0)) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if (((idx < 0) || (((idx + count) | 0) > this.K))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((((idx + " to ") + ((idx + count) | 0)) + " is out of bounds (min 0, max ") + ((this.K - 1) | 0)) + ")"));
    }
    $p_scm_ListBuffer__removeAfter__sci_$colon$colon__I__V(this, $p_scm_ListBuffer__predecessor__I__sci_$colon$colon(this, idx), count);
  } else if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("removing negative number of elements: " + count));
  }
});
$p.a1 = (function() {
  return "ListBuffer";
});
$p.ay = (function() {
  return $m_scm_ListBuffer$();
});
$p.l = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.T, i);
});
$p.am = (function() {
  return this.aA();
});
$p.a6 = (function(elem) {
  return this.f2(elem);
});
$p.ab = (function(elems) {
  return this.eX(elems);
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  aR: 1,
  aq: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  W: 1,
  X: 1,
  as: 1,
  ar: 1,
  p: 1,
  q: 1,
  a2: 1,
  af: 1,
  a: 1,
  ag: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.at = 0;
  $thiz.a5 = initialElements;
  $thiz.p = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
function $p_scm_ArrayBuffer__reduceToSize__I__V($thiz, n) {
  $thiz.at = ((1 + $thiz.at) | 0);
  $m_ju_Arrays$().fo($thiz.a5, n, $thiz.p, null);
  $thiz.p = n;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.at = 0;
  this.a5 = null;
  this.p = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.b = (function() {
  return this.aJ().b();
});
$p.R = (function() {
  return this.aJ().R();
});
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ao = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = this.p;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.p;
});
$p.cZ = (function(n) {
  this.a5 = $m_scm_ArrayBuffer$().et(this.a5, this.p, n);
});
$p.af = (function(size) {
  if (((size > this.p) && (size >= 1))) {
    this.cZ(size);
  }
});
$p.g = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().b3(n, ((this.p - 1) | 0));
  }
  if ((hi > this.p)) {
    throw $m_scg_CommonErrors$().b3(((hi - 1) | 0), ((this.p - 1) | 0));
  }
  return this.a5.a[n];
});
$p.g8 = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().b3(index, ((this.p - 1) | 0));
  }
  if ((hi > this.p)) {
    throw $m_scg_CommonErrors$().b3(((hi - 1) | 0), ((this.p - 1) | 0));
  }
  this.at = ((1 + this.at) | 0);
  this.a5.a[index] = elem;
});
$p.d = (function() {
  return this.p;
});
$p.aJ = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.at)));
});
$p.aS = (function(elem) {
  this.at = ((1 + this.at) | 0);
  var newSize = ((1 + this.p) | 0);
  if ((this.a5.a.length <= ((newSize - 1) | 0))) {
    this.cZ(newSize);
  }
  this.p = newSize;
  this.a5.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.dZ = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.p;
    if ((elemsLength > 0)) {
      this.at = ((1 + this.at) | 0);
      this.cZ(((this.p + elemsLength) | 0));
      $m_s_Array$().aT(elems.a5, 0, this.a5, this.p, elemsLength);
      this.p = ((this.p + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.d3 = (function(index, count) {
  if ((count > 0)) {
    var hi = ((index + count) | 0);
    if ((index < 0)) {
      throw $m_scg_CommonErrors$().b3(index, ((this.p - 1) | 0));
    }
    if ((hi > this.p)) {
      throw $m_scg_CommonErrors$().b3(((hi - 1) | 0), ((this.p - 1) | 0));
    }
    $m_s_Array$().aT(this.a5, ((index + count) | 0), this.a5, index, ((this.p - ((index + count) | 0)) | 0));
    $p_scm_ArrayBuffer__reduceToSize__I__V(this, ((this.p - count) | 0));
  } else if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("removing negative number of elements: " + count));
  }
});
$p.a1 = (function() {
  return "ArrayBuffer";
});
$p.ae = (function(xs, start, len) {
  var srcLen = this.p;
  var destLen = $m_jl_reflect_Array$().L(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aT(this.a5, 0, xs, start, copied);
  }
  return copied;
});
$p.l = (function(v1) {
  return this.g((v1 | 0));
});
$p.ay = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.a6 = (function(elem) {
  return this.aS(elem);
});
$p.ab = (function(elems) {
  return this.dZ(elems);
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  aN: 1,
  aq: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  W: 1,
  X: 1,
  as: 1,
  ar: 1,
  k: 1,
  o: 1,
  L: 1,
  K: 1,
  aQ: 1,
  p: 1,
  q: 1,
  a: 1,
  ag: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.au = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.au = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.af = (function(size) {
});
$p.a1 = (function() {
  return "IndexedSeq";
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.R = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.az = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ao = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.Q = (function(len) {
  var x = (this.au.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.g = (function(index) {
  return this.au[index];
});
$p.d = (function() {
  return (this.au.length | 0);
});
$p.h = (function() {
  return (this.au.length | 0);
});
$p.d3 = (function(n, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  if (((n < 0) || ((count > 0) && (((n + count) | 0) > (this.au.length | 0))))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  this.au.splice(n, count);
});
$p.ad = (function() {
  return "WrappedArray";
});
$p.am = (function() {
  return this;
});
$p.a6 = (function(elem) {
  this.au.push(elem);
  return this;
});
$p.l = (function(v1) {
  var index = (v1 | 0);
  return this.au[index];
});
$p.ay = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dR: 1,
  aq: 1,
  y: 1,
  n: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  r: 1,
  z: 1,
  C: 1,
  B: 1,
  W: 1,
  X: 1,
  as: 1,
  ar: 1,
  q: 1,
  p: 1,
  K: 1,
  k: 1,
  o: 1,
  L: 1,
  aQ: 1,
  a2: 1,
  a: 1
}));
var $t_Lcalagem_TipoParticula$__Hidrogenio = null;
var $t_Lcalagem_TipoParticula$__Aluminio = null;
var $t_Lcalagem_TipoParticula$__Calcario = null;
var $t_Lcalagem_TipoParticula$__Carbonato = null;
var $t_Lcalagem_TipoParticula$__Calcio = null;
var $t_Lcalagem_TipoParticula$__DioxidoCarbono = null;
var $t_Lcalagem_TipoParticula$__Agua = null;
$s_Lcalagem_Main__main__AT__V(new ($d_T.r().C)([]));
}).call(this);
//# sourceMappingURL=main.js.map
