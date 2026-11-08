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
  return (arg0.$classData.Z ? arg0.u() : $objectClone(arg0));
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
        return null.gi();
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
        return instance.gf(x0);
      }
    }
  }
}
function $dp_compareTo__T__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__compareTo__T__I(instance, x0);
  } else {
    return instance.gg(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.ay(x0);
  } else {
    return $c_O.prototype.ay.call(instance, x0);
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
        return instance.l();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.l.call(instance);
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
$p.l = (function() {
  return $systemIdentityHashCode(this);
});
$p.ay = (function(that) {
  return (this === that);
});
$p.x = (function() {
  var i = this.l();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.x();
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
$p.q = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.u = (function() {
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
$p.q = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.u = (function() {
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
  $p.q = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.u = (function() {
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
  return $thiz.cB.a[$thiz.c5];
}
function $p_Lcalagem_Interface__criarControles__V($thiz) {
  $thiz.aY.className = "painel-controles";
  $thiz.bw.className = "informacoes";
  $p_Lcalagem_Interface__pHCriarEscala__V($thiz);
  $thiz.c4.textContent = "H\u207a: --";
  $thiz.c9.textContent = "Rea\u00e7\u00f5es: --";
  $thiz.bw.appendChild($thiz.c4);
  $thiz.bw.appendChild($thiz.c9);
  $thiz.aY.appendChild($thiz.bw);
  var botoes = document.createElement("div");
  botoes.className = "botoes";
  var botaoCalcario = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Adicionar calc\u00e1rio", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.aD.f8(5);
  })));
  var botaoPausa = new $c_sr_ObjectRef(null);
  botaoPausa.ad = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Pausar", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.bb = (!$thiz.bb);
    $thiz.aD.bz = (!$thiz.bb);
    if ($thiz.bb) {
      botaoPausa.ad.textContent = "Continuar";
    } else {
      botaoPausa.ad.textContent = "Pausar";
    }
  })));
  var botaoReiniciar = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Reiniciar", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.aD.et();
    $thiz.bb = false;
    $thiz.aD.bz = true;
    botaoPausa.ad.textContent = "Pausar";
    $thiz.bx = 0.0;
    $p_Lcalagem_Interface__atualizarInformacoes__V($thiz);
    $thiz.ca.d9();
  })));
  var botaoVelocidade = new $c_sr_ObjectRef(null);
  botaoVelocidade.ad = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Velocidade: 1x", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.c5 = ((((1 + $thiz.c5) | 0) % $checkIntDivisor($thiz.cB.a.length)) | 0);
    botaoVelocidade.ad.textContent = (("Velocidade: " + $p_Lcalagem_Interface__velocidadeAtual__D($thiz)) + "x");
  })));
  botoes.appendChild(botaoCalcario);
  botoes.appendChild(botaoPausa.ad);
  botoes.appendChild(botaoReiniciar);
  botoes.appendChild(botaoVelocidade.ad);
  $thiz.aY.appendChild(botoes);
  var simulacaoContainer = document.getElementById("simulacao-container");
  simulacaoContainer.appendChild($thiz.aY);
}
function $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, texto, acao) {
  var botao = document.createElement("button");
  botao.textContent = texto;
  botao.className = "botao";
  botao.onclick = ((_$1$2) => {
    acao.a1();
  });
  return botao;
}
function $p_Lcalagem_Interface__pHCriarEscala__V($thiz) {
  $thiz.c6.className = "ph-escala";
  $thiz.c7.className = "ph-marca";
  $thiz.c6.appendChild($thiz.c7);
  $thiz.c8.className = "ph-rotulo";
  var i = 0;
  while (true) {
    var x0 = i;
    var rotulo = document.createElement("span");
    rotulo.textContent = ("" + x0);
    $thiz.c8.appendChild(rotulo);
    if ((i === 14)) {
      break;
    }
    i = ((1 + i) | 0);
  }
  $thiz.aY.appendChild($thiz.c6);
  $thiz.aY.appendChild($thiz.c8);
}
function $p_Lcalagem_Interface__atualizarInformacoes__V($thiz) {
  var pH = $thiz.aD.fQ();
  var y = (+Math.min(14.0, pH));
  var pHLimitado = (+Math.max(0.0, y));
  var posicao = (100.0 * (pHLimitado / 14.0));
  $thiz.c4.textContent = ("H\u207a: " + $thiz.aD.es());
  $thiz.c9.textContent = ("Rea\u00e7\u00f5es: " + $thiz.aD.bA);
  $thiz.c7.style.left = (posicao + "%");
}
function $p_Lcalagem_Interface__animar__D__V($thiz, tempoAtual) {
  var dt = (($thiz.bx === 0.0) ? 0.0 : ((tempoAtual - $thiz.bx) / 1000.0));
  $thiz.bx = tempoAtual;
  $thiz.aD.f9((dt * $p_Lcalagem_Interface__velocidadeAtual__D($thiz)));
  $thiz.ca.d9();
  $p_Lcalagem_Interface__atualizarInformacoes__V($thiz);
  window.requestAnimationFrame(((tempoAtual$3) => {
    $p_Lcalagem_Interface__animar__D__V($thiz, (+tempoAtual$3));
  }));
}
/** @constructor */
function $c_Lcalagem_Interface(simulacao, renderizador) {
  this.aD = null;
  this.ca = null;
  this.bx = 0.0;
  this.aY = null;
  this.bw = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c4 = null;
  this.c9 = null;
  this.cB = null;
  this.c5 = 0;
  this.bb = false;
  this.aD = simulacao;
  this.ca = renderizador;
  this.bx = 0.0;
  this.aY = document.createElement("div");
  this.bw = document.createElement("div");
  this.c6 = document.createElement("div");
  this.c7 = document.createElement("div");
  this.c8 = document.createElement("div");
  this.c4 = document.createElement("span");
  this.c9 = document.createElement("span");
  this.cB = new $ac_D(new Float64Array([1.0, 2.0, 4.0]));
  this.c5 = 0;
  this.bb = false;
}
$p = $c_Lcalagem_Interface.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Interface;
/** @constructor */
function $h_Lcalagem_Interface() {
}
$h_Lcalagem_Interface.prototype = $p;
$p.fF = (function() {
  $p_Lcalagem_Interface__criarControles__V(this);
  $p_Lcalagem_Interface__atualizarInformacoes__V(this);
  this.ca.d9();
  window.requestAnimationFrame(((tempoAtual$3) => {
    $p_Lcalagem_Interface__animar__D__V(this, (+tempoAtual$3));
  }));
});
var $d_Lcalagem_Interface = new $TypeData().i($c_Lcalagem_Interface, "calagem.Interface", ({
  aW: 1
}));
function $s_Lcalagem_Main__main__AT__V(args) {
  $m_Lcalagem_Main$().fK(args);
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
$p.fK = (function(args) {
  var canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  canvas.className = "simulacao";
  var simulacaoContainer = document.getElementById("simulacao-container");
  simulacaoContainer.appendChild(canvas);
  var simulacao = new $c_Lcalagem_Simulacao(400.0, 400.0);
  var renderizador = new $c_Lcalagem_Renderizador(canvas, simulacao);
  simulacao.et();
  new $c_Lcalagem_Interface(simulacao, renderizador).fF();
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
$p.fs = (function(pHInicial, hidrogenioInicial, hidrogenioRestante) {
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
function $p_Lcalagem_Renderizador__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, a, b) {
  var dx = (a.D - b.D);
  var dy = (a.E - b.E);
  var x = ((dx * dx) + (dy * dy));
  return (+Math.sqrt(x));
}
function $p_Lcalagem_Renderizador__desenhaConexao__Lcalagem_Particula__Lcalagem_Particula__D__V($thiz, carbonato, hidrogenio, distancia) {
  var y = (distancia / $thiz.cD);
  (+Math.min(1.0, y));
  $thiz.s.beginPath();
  $thiz.s.moveTo(carbonato.D, carbonato.E);
  $thiz.s.lineTo(hidrogenio.D, hidrogenio.E);
  $thiz.s.strokeStyle = "rgba(255, 100, 100)";
  $thiz.s.lineWidth = 2.0;
  $thiz.s.stroke();
}
function $p_Lcalagem_Renderizador__desenhaProximidades__V($thiz) {
  var this$1 = $thiz.cb.J;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it = this$1.a6().b();
  while (it.f()) {
    var elem = it.e();
    if (elem.V) {
      var x = elem.U;
      var x$2 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      b.b6(elem);
    }
  }
  var carbonatos = b.ac;
  var this$3 = $thiz.cb.J;
  $m_scm_ArrayBuffer$();
  var b$1 = new $c_scm_ArrayBuffer$$anon$1();
  var it$1 = this$3.a6().b();
  while (it$1.f()) {
    var elem$1 = it$1.e();
    if (elem$1.V) {
      var x$1 = elem$1.U;
      var x$2$1 = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
      var $x_2 = ((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      b$1.b6(elem$1);
    }
  }
  var hidrogenios = b$1.ac;
  var it$2 = carbonatos.a6().b();
  while (it$2.f()) {
    var x0 = it$2.e();
    $m_scm_ArrayBuffer$();
    var b$2 = new $c_scm_ArrayBuffer$$anon$1();
    var it$3 = hidrogenios.a6().b();
    while (it$3.f()) {
      var x0$1 = it$3.e();
      b$2.b6(new $c_T2(x0$1, $p_Lcalagem_Renderizador__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, x0, x0$1)));
    }
    var proxs = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(b$2.ac.b8(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => ((+_$1$2.bd) < $thiz.cD)))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => (+_$2$2.bd))), $m_s_math_Ordering$DeprecatedDoubleOrdering$()).ak(2);
    if ((proxs.p === 2)) {
      var it$4 = proxs.a6().b();
      while (it$4.f()) {
        var x0$2 = it$4.e();
        matchResult5: {
          if ((x0$2 !== null)) {
            $p_Lcalagem_Renderizador__desenhaConexao__Lcalagem_Particula__Lcalagem_Particula__D__V($thiz, x0, x0$2.ce, (+x0$2.bd));
            break matchResult5;
          }
          throw new $c_s_MatchError(x0$2);
        }
      }
    }
  }
}
/** @constructor */
function $c_Lcalagem_Renderizador(canvas, simulacao) {
  this.cC = null;
  this.cb = null;
  this.s = null;
  this.cD = 0.0;
  this.cC = canvas;
  this.cb = simulacao;
  this.s = canvas.getContext("2d");
  this.cD = 75.0;
}
$p = $c_Lcalagem_Renderizador.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Renderizador;
/** @constructor */
function $h_Lcalagem_Renderizador() {
}
$h_Lcalagem_Renderizador.prototype = $p;
$p.d9 = (function() {
  this.s.fillStyle = "#FFFFFF";
  this.s.fillRect(0.0, 0.0, (this.cC.width | 0), (this.cC.height | 0));
  $p_Lcalagem_Renderizador__desenhaProximidades__V(this);
  var this$4 = this.cb.J;
  var it = this$4.a6().b();
  while (it.f()) {
    var x0 = it.e();
    var r = $p_Lcalagem_Renderizador__raio__Lcalagem_TipoParticula__D(this, x0.U);
    var base = $p_Lcalagem_Renderizador__cor__Lcalagem_TipoParticula__T(this, x0.U);
    var grad = this.s.createRadialGradient((x0.D - (0.4 * r)), (x0.E - (0.45 * r)), (0.05 * r), x0.D, x0.E, (1.1 * r));
    grad.addColorStop(0.0, "#FFFFFF");
    grad.addColorStop(0.3, base);
    grad.addColorStop(0.5, base);
    grad.addColorStop(1.0, $p_Lcalagem_Renderizador__corEscuro__Lcalagem_TipoParticula__T(this, x0.U));
    this.s.beginPath();
    this.s.arc(x0.D, x0.E, (r - 0.7), 0.0, 6.283185307179586);
    this.s.fillStyle = grad;
    this.s.fill();
    this.s.fillStyle = "#000000";
    this.s.font = "10px Arial";
    this.s.textAlign = "center";
    this.s.textBaseline = "middle";
    this.s.shadowColor = "rgba(0, 0, 0, 0.35)";
    this.s.shadowBlur = 2.0;
    this.s.shadowOffsetX = 0.5;
    this.s.shadowOffsetY = 0.5;
    this.s.fillText($p_Lcalagem_Renderizador__rotulo__Lcalagem_TipoParticula__T(this, x0.U), x0.D, x0.E);
    this.s.shadowColor = "transparent";
    this.s.shadowBlur = 0.0;
    this.s.shadowOffsetX = 0.0;
    this.s.shadowOffsetY = 0.0;
  }
});
var $d_Lcalagem_Renderizador = new $TypeData().i($c_Lcalagem_Renderizador, "calagem.Renderizador", ({
  b1: 1
}));
function $p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, a, b) {
  return $m_jl_Math$().fC((a.D - b.D), (a.E - b.E));
}
function $p_Lcalagem_Simulacao__dissolver__Lcalagem_Particula__V($thiz, calcario) {
  calcario.V = false;
  $thiz.J.aS($m_Lcalagem_Particula$().b7($s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula(), calcario.D, calcario.E));
  $thiz.J.aS($m_Lcalagem_Particula$().b7($s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula(), calcario.D, calcario.E));
}
function $p_Lcalagem_Simulacao__reagir__V($thiz) {
  var this$1 = $thiz.J;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it = this$1.a6().b();
  while (it.f()) {
    var elem = it.e();
    if (elem.V) {
      var x = elem.U;
      var x$2 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      b.b6(elem);
    }
  }
  var carbonatos = b.ac.aC();
  var this$9 = new $c_sc_IterableOps$WithFilter(carbonatos, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$2) => carbonato$2.V)));
  var f = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$3) => {
    if (carbonato$3.V) {
      var this$5 = $thiz.J;
      $m_scm_ArrayBuffer$();
      var b$1 = new $c_scm_ArrayBuffer$$anon$1();
      var it$1 = this$5.a6().b();
      while (it$1.f()) {
        var elem$1 = it$1.e();
        if (elem$1.V) {
          var x$1 = elem$1.U;
          var x$2$1 = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
          var $x_2 = ((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1));
        } else {
          var $x_2 = false;
        }
        if (($x_2 && ($p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, elem$1, carbonato$3) < $thiz.dj))) {
          b$1.b6(elem$1);
        }
      }
      var hidrogenioProximo = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(b$1.ac, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$2$1) => ((p$2) => $p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, p$2, carbonato$2$1)))(carbonato$3)), $m_s_math_Ordering$DeprecatedDoubleOrdering$()).ak(2);
      if ((hidrogenioProximo.p === 2)) {
        carbonato$3.V = false;
        var it$2 = hidrogenioProximo.a6().b();
        while (it$2.f()) {
          var x0 = it$2.e();
          x0.V = false;
        }
        $thiz.J.aS($m_Lcalagem_Particula$().b7($s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula(), carbonato$3.D, carbonato$3.E));
        $thiz.J.aS($m_Lcalagem_Particula$().b7($s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula(), (carbonato$3.D + $thiz.df), carbonato$3.E));
        $thiz.bA = ((1 + $thiz.bA) | 0);
      }
    }
  }));
  this$9.fw().bt(f);
}
function $p_Lcalagem_Simulacao__atualizarPasso__D__V($thiz, passo) {
  var this$1 = $thiz.J;
  var it = this$1.a6().b();
  while (it.f()) {
    var x0 = it.e();
    x0.aZ = (x0.aZ + passo);
    x0.as = (x0.as + ($m_s_util_Random$().ax($thiz.cF, $thiz.cE) * passo));
    x0.at = (x0.at + ($m_s_util_Random$().ax($thiz.cF, $thiz.cE) * passo));
    var self = x0.as;
    var that = $thiz.cK;
    var self$1 = (+Math.max(self, that));
    var that$1 = $thiz.cJ;
    x0.as = (+Math.min(self$1, that$1));
    var self$2 = x0.at;
    var that$2 = $thiz.cK;
    var self$3 = (+Math.max(self$2, that$2));
    var that$3 = $thiz.cJ;
    x0.at = (+Math.min(self$3, that$3));
    x0.D = (x0.D + (x0.as * passo));
    x0.E = (x0.E + (x0.at * passo));
    if (((x0.D < $thiz.aE) || (x0.D > ($thiz.bc - $thiz.aE)))) {
      x0.as = (-x0.as);
      var self$4 = x0.D;
      var that$4 = $thiz.aE;
      var self$5 = (+Math.max(self$4, that$4));
      var that$5 = ($thiz.bc - $thiz.aE);
      x0.D = (+Math.min(self$5, that$5));
    }
    if (((x0.E < $thiz.aE) || (x0.E > ($thiz.by - $thiz.aE)))) {
      x0.at = (-x0.at);
      var self$6 = x0.E;
      var that$6 = $thiz.aE;
      var self$7 = (+Math.max(self$6, that$6));
      var that$7 = ($thiz.by - $thiz.aE);
      x0.E = (+Math.min(self$7, that$7));
    }
  }
  var this$18 = $thiz.J;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it$1 = this$18.a6().b();
  while (it$1.f()) {
    var elem = it$1.e();
    if (elem.V) {
      var x = elem.U;
      var x$2 = $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (elem.aZ > $thiz.dk))) {
      b.b6(elem);
    }
  }
  var this$20 = b.ac.aC();
  var these = this$20;
  while ((!these.j())) {
    $p_Lcalagem_Simulacao__dissolver__Lcalagem_Particula__V($thiz, these.m());
    these = these.C();
  }
  $p_Lcalagem_Simulacao__reagir__V($thiz);
  var this$21 = $thiz.J;
  var i = 0;
  var j = 0;
  while ((i < this$21.p)) {
    var x0$2 = this$21.g(i);
    if (x0$2.V) {
      var x$1 = x0$2.U;
      var x$2$1 = $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
      if ((!((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1)))) {
        var x$3 = x0$2.U;
        var x$4 = $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
        var $x_2 = (!((x$3 === null) ? (x$4 === null) : (x$3 === x$4)));
      } else {
        var $x_2 = false;
      }
    } else {
      var $x_2 = false;
    }
    if (($x_2 || (x0$2.aZ <= $thiz.dl))) {
      if ((i !== j)) {
        this$21.gc(j, this$21.g(i));
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
  this.bc = 0.0;
  this.by = 0.0;
  this.J = null;
  this.dg = 0.0;
  this.cI = 0;
  this.di = 0;
  this.dj = 0.0;
  this.cF = 0.0;
  this.cE = 0.0;
  this.cK = 0.0;
  this.cJ = 0.0;
  this.aE = 0.0;
  this.df = 0.0;
  this.b0 = 0.0;
  this.cH = 0.0;
  this.cG = 0.0;
  this.de = 0.0;
  this.dd = 0.0;
  this.dk = 0.0;
  this.dl = 0.0;
  this.dh = 0.0;
  this.bz = false;
  this.bA = 0;
  this.bc = largura;
  this.by = altura;
  this.J = $m_scm_ArrayBuffer$().em(new $c_sjsr_WrappedVarArgs([]));
  this.dg = 4.0;
  this.cI = 40;
  this.di = 8;
  this.dj = 60.0;
  this.cF = (-15.0);
  this.cE = 15.0;
  this.cK = (-60.0);
  this.cJ = 60.0;
  this.aE = 12.0;
  this.df = 8.0;
  this.b0 = 30.0;
  this.cH = 40.0;
  this.cG = 50.0;
  this.de = 5.0;
  this.dd = 45.0;
  this.dk = 0.05;
  this.dl = 3.0;
  this.dh = 0.05;
  this.bz = true;
  this.bA = 0;
}
$p = $c_Lcalagem_Simulacao.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Simulacao;
/** @constructor */
function $h_Lcalagem_Simulacao() {
}
$h_Lcalagem_Simulacao.prototype = $p;
$p.es = (function() {
  var this$1 = this.J;
  var res = 0;
  var it = this$1.a6().b();
  while (it.f()) {
    var x0 = it.e();
    if (x0.V) {
      var x = x0.U;
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
$p.fQ = (function() {
  return $m_Lcalagem_Quimica$().fs(this.dg, this.cI, this.es());
});
$p.et = (function() {
  $p_scm_ArrayBuffer__reduceToSize__I__V(this.J, 0);
  this.bA = 0;
  this.bz = true;
  var end = this.cI;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      this.J.aS($m_Lcalagem_Particula$().b7($s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula(), $m_s_util_Random$().ax(this.b0, (this.bc - this.b0)), $m_s_util_Random$().ax(this.cG, (this.by - this.b0))));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var end$1 = this.di;
  var isEmpty$1 = (end$1 <= 0);
  var scala$collection$immutable$Range$$lastElement$1 = ((end$1 - 1) | 0);
  if ((!isEmpty$1)) {
    var i$1 = 0;
    while (true) {
      this.J.aS($m_Lcalagem_Particula$().b7($s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula(), $m_s_util_Random$().ax(this.b0, (this.bc - this.b0)), $m_s_util_Random$().ax(this.cG, (this.by - this.b0))));
      if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
});
$p.f8 = (function(qtd) {
  var end = ((qtd < 0) ? 0 : qtd);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      this.J.aS($m_Lcalagem_Particula$().b7($s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula(), $m_s_util_Random$().ax(this.cH, (this.bc - this.cH)), $m_s_util_Random$().ax(this.de, this.dd)));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
});
$p.f9 = (function(dt) {
  if ((!this.bz)) {
    return (void 0);
  }
  var restante = (+Math.max(0.0, dt));
  while ((restante > 1.0E-9)) {
    var x = restante;
    var y = this.dh;
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
$p.fN = (function(a, b) {
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
$p.fC = (function(a, b) {
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
  this.dm = null;
  $n_jl_Thread$ = this;
  this.dm = new $c_jl_Thread((void 0));
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
$p.N = (function(array) {
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
$p.eC = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a3(a, new $ac_I(a.a.length), 0, end, comparator, ops);
  } else {
    this.a9(a, 0, end, comparator, ops);
  }
});
$p.g3 = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a3(a, new $ac_I(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a9(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.eD = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var end = ((a.a.length >>> 1) | 0);
  if ((end > 16)) {
    this.a3(a, new $ac_J(((a.a.length >>> 1) | 0)), 0, end, comparator, ops);
  } else {
    this.a9(a, 0, end, comparator, ops);
  }
});
$p.g4 = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a3(a, new $ac_J(((a.a.length >>> 1) | 0)), fromIndex, toIndex, comparator, ops);
  } else {
    this.a9(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.eE = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a3(a, new $ac_S(a.a.length), 0, end, comparator, ops);
  } else {
    this.a9(a, 0, end, comparator, ops);
  }
});
$p.g5 = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a3(a, new $ac_S(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a9(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.eB = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a3(a, new $ac_C(a.a.length), 0, end, comparator, ops);
  } else {
    this.a9(a, 0, end, comparator, ops);
  }
});
$p.g2 = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a3(a, new $ac_C(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a9(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.eA = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a3(a, new $ac_B(a.a.length), 0, end, comparator, ops);
  } else {
    this.a9(a, 0, end, comparator, ops);
  }
});
$p.g1 = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a3(a, new $ac_B(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.a9(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.bv = (function(array, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  var end = array.a.length;
  if ((end > 16)) {
    this.a3(array, $objectGetClass(array).n.Q().n.U(array.a.length), 0, end, comparator$1, ops);
  } else {
    this.a9(array, 0, end, comparator$1, ops);
  }
});
$p.g6 = (function(array, fromIndex, toIndex, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a3(array, $objectGetClass(array).n.Q().n.U(array.a.length), fromIndex, toIndex, comparator$1, ops);
  } else {
    this.a9(array, fromIndex, toIndex, comparator$1, ops);
  }
});
$p.a3 = (function(a, temp, start, end, comparator, ops) {
  var length = ((end - start) | 0);
  if ((length > 16)) {
    var middle = ((start + (((length + ((length >>> 31) | 0)) | 0) >> 1)) | 0);
    this.a3(a, temp, start, middle, comparator, ops);
    this.a3(a, temp, middle, end, comparator, ops);
    var outIndex = start;
    var leftInIndex = start;
    var rightInIndex = middle;
    while ((outIndex < end)) {
      if (((leftInIndex < middle) && ((rightInIndex >= end) || (comparator.t(ops.Q(a, leftInIndex), ops.Q(a, rightInIndex)) <= 0)))) {
        ops.ar(temp, outIndex, ops.Q(a, leftInIndex));
        leftInIndex = ((1 + leftInIndex) | 0);
      } else {
        ops.ar(temp, outIndex, ops.Q(a, rightInIndex));
        rightInIndex = ((1 + rightInIndex) | 0);
      }
      outIndex = ((1 + outIndex) | 0);
    }
    temp.q(start, a, start, length);
  } else {
    this.a9(a, start, end, comparator, ops);
  }
});
$p.a9 = (function(a, start, end, comparator, ops) {
  var n = ((end - start) | 0);
  if ((n >= 2)) {
    var aStart = ops.Q(a, start);
    var aStartPlusOne = ops.Q(a, ((1 + start) | 0));
    if ((comparator.t(aStart, aStartPlusOne) > 0)) {
      ops.ar(a, start, aStartPlusOne);
      ops.ar(a, ((1 + start) | 0), aStart);
    }
    var m = 2;
    while ((m < n)) {
      var next = ops.Q(a, ((start + m) | 0));
      if ((comparator.t(next, ops.Q(a, ((((start + m) | 0) - 1) | 0))) < 0)) {
        var iA = start;
        var iB = ((((start + m) | 0) - 1) | 0);
        while ((((iB - iA) | 0) > 1)) {
          var ix = ((((iA + iB) | 0) >>> 1) | 0);
          if ((comparator.t(next, ops.Q(a, ix)) < 0)) {
            iB = ix;
          } else {
            iA = ix;
          }
        }
        var ix$2 = ((iA + ((comparator.t(next, ops.Q(a, iA)) >= 0) | 0)) | 0);
        var i = ((start + m) | 0);
        while ((i > ix$2)) {
          ops.ar(a, i, ops.Q(a, ((i - 1) | 0)));
          i = ((i - 1) | 0);
        }
        ops.ar(a, ix$2, next);
      }
      m = ((1 + m) | 0);
    }
  }
});
$p.fu = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.ft = (function(a, fromIndex, toIndex, value) {
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
$p.ef = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).n.Q().n.U(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.d3 = (function(original, newLength, newType) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.n.Q().n.U(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.e9 = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.ed = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.eb = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.ec = (function(original, newLength) {
  var b = ((original.a.length >>> 1) | 0);
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.ea = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.ff = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.fe = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.ee = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.fo = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).n.Q().n.U(retLength);
  original.q(from, ret, 0, copyLength);
  return ret;
});
$p.fg = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_B(retLength);
  original.q(start, ret, 0, copyLength);
  return ret;
});
$p.fm = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_S(retLength);
  original.q(start, ret, 0, copyLength);
  return ret;
});
$p.fk = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_I(retLength);
  original.q(start, ret, 0, copyLength);
  return ret;
});
$p.fl = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = ((original.a.length >>> 1) | 0);
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_J(retLength);
  original.q(start, ret, 0, copyLength);
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
  var ret = new $ac_C(retLength);
  original.q(start, ret, 0, copyLength);
  return ret;
});
$p.fj = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_F(retLength);
  original.q(start, ret, 0, copyLength);
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
  var ret = new $ac_D(retLength);
  original.q(start, ret, 0, copyLength);
  return ret;
});
$p.fn = (function(original, start, end) {
  if ((start > end)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((start + " > ") + end));
  }
  var len = original.a.length;
  var retLength = ((end - start) | 0);
  var b = ((len - start) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = new $ac_Z(retLength);
  original.q(start, ret, 0, copyLength);
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
  return $m_RTLong$().fT(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fS(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fq(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fp(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().eo(value);
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
  return $m_RTLong$().eG(lo, hi);
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
$p.eG = (function(lo, hi) {
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
$p.eo = (function(value) {
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
$p.fp = (function(alo, ahi, blo, bhi) {
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
$p.fq = (function(alo, ahi, blo, bhi) {
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
$p.fS = (function(alo, ahi, blo, bhi) {
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
$p.fT = (function(alo, ahi, blo, bhi) {
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
    $m_sr_ScalaRunTime$().af(dest, j, $m_sr_ScalaRunTime$().A(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().fu(result, (void 0));
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
$p.ei = (function(it, evidence$1) {
  var n = it.h();
  if ((n > (-1))) {
    var elements = evidence$1.K(n);
    var iterator = it.b();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().af(elements, i, iterator.e());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.L();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.b();
    while (iterator$2.f()) {
      var elem = iterator$2.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cy(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().cx(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.aT = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.n.Z && $objectGetClass(dest).n.R(srcClass.n))) {
    src.q(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.fd = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  }
  if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().ef(original, newLength);
  }
  if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().eb(original, newLength);
  }
  if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().fe(original, newLength);
  }
  if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().ec(original, newLength);
  }
  if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().ff(original, newLength);
  }
  if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().ea(original, newLength);
  }
  if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().e9(original, newLength);
  }
  if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().ed(original, newLength);
  }
  if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().ee(original, newLength);
  }
  throw new $c_s_MatchError(original);
});
$p.fc = (function(original, newLength, ct) {
  var runtimeClass = ct.L();
  if (((runtimeClass !== null) && (runtimeClass === $d_V.l()))) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if (runtimeClass.n.R($objectGetClass(original).n.Q().n)) {
    return (runtimeClass.n.X ? this.fd(original, newLength) : $m_ju_Arrays$().d3(original, newLength, $m_sr_ScalaRunTime$().cp(runtimeClass.n.U(0))));
  } else {
    var dest = ct.K(newLength);
    $m_s_Array$().aT(original, 0, dest, 0, $m_jl_reflect_Array$().N(original));
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
    var a = $m_sr_ScalaRunTime$().e7(\u03b4this$2);
    $m_s_util_Sorting$().dc(a, 0, $m_jl_reflect_Array$().N(a), ord$1);
    return a;
  } else {
    if ($d_O.R($objectGetClass(\u03b4this$2).n.Q().n)) {
      var a$2 = $m_ju_Arrays$().d3(\u03b4this$2, len$1, $m_sr_ScalaRunTime$().cp(new $ac_O(0)));
    } else {
      var dest = new $ac_O(len$1);
      $m_s_Array$().aT(\u03b4this$2, 0, dest, 0, $m_jl_reflect_Array$().N(\u03b4this$2));
      var a$2 = dest;
    }
    $m_ju_Arrays$().bv(a$2, ord$1);
    return $m_s_Array$().fc(a$2, len$1, $m_s_reflect_ClassTag$().cq($objectGetClass(\u03b4this$2).n.Q()));
  }
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.dt = null;
  $n_sc_ArrayOps$ = this;
  this.dt = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().dt));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.g0 = (function(this$, from, until) {
  var lo = ((from > 0) ? from : 0);
  var b = $m_jl_reflect_Array$().N(this$);
  var hi = ((until < b) ? until : b);
  if ((hi > lo)) {
    if ((this$ instanceof $ac_O)) {
      return $m_ju_Arrays$().fo(this$, lo, hi);
    } else if ((this$ instanceof $ac_I)) {
      return $m_ju_Arrays$().fk(this$, lo, hi);
    } else if ((this$ instanceof $ac_D)) {
      return $m_ju_Arrays$().fi(this$, lo, hi);
    } else if ((this$ instanceof $ac_J)) {
      return $m_ju_Arrays$().fl(this$, lo, hi);
    } else if ((this$ instanceof $ac_F)) {
      return $m_ju_Arrays$().fj(this$, lo, hi);
    } else if ((this$ instanceof $ac_C)) {
      return $m_ju_Arrays$().fh(this$, lo, hi);
    } else if ((this$ instanceof $ac_B)) {
      return $m_ju_Arrays$().fg(this$, lo, hi);
    } else if ((this$ instanceof $ac_S)) {
      return $m_ju_Arrays$().fm(this$, lo, hi);
    } else if ((this$ instanceof $ac_Z)) {
      return $m_ju_Arrays$().fn(this$, lo, hi);
    } else {
      throw new $c_s_MatchError(this$);
    }
  } else {
    return $m_s_reflect_ClassTag$().cq($objectGetClass(this$).n.Q()).K(0);
  }
});
$p.g8 = (function(this$, ord) {
  var len = $m_jl_reflect_Array$().N(this$);
  if ((len <= 1)) {
    return $m_sr_ScalaRunTime$().e7(this$);
  } else if ((this$ instanceof $ac_O)) {
    var a = $m_ju_Arrays$().ef(this$, len);
    $m_ju_Arrays$().bv(a, ord);
    return a;
  } else if ((this$ instanceof $ac_I)) {
    if ((ord === $m_s_math_Ordering$Int$())) {
      var a$2 = $m_ju_Arrays$().eb(this$, len);
      $m_ju_Arrays$().eC(a$2);
      return a$2;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_J)) {
    if ((ord === $m_s_math_Ordering$Long$())) {
      var a$3 = $m_ju_Arrays$().ec(this$, len);
      $m_ju_Arrays$().eD(a$3);
      return a$3;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_C)) {
    if ((ord === $m_s_math_Ordering$Char$())) {
      var a$4 = $m_ju_Arrays$().ea(this$, len);
      $m_ju_Arrays$().eB(a$4);
      return a$4;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_B)) {
    if ((ord === $m_s_math_Ordering$Byte$())) {
      var a$5 = $m_ju_Arrays$().e9(this$, len);
      $m_ju_Arrays$().eA(a$5);
      return a$5;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_S)) {
    if ((ord === $m_s_math_Ordering$Short$())) {
      var a$6 = $m_ju_Arrays$().ed(this$, len);
      $m_ju_Arrays$().eE(a$6);
      return a$6;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_Z)) {
    if ((ord === $m_s_math_Ordering$Boolean$())) {
      var a$7 = $m_ju_Arrays$().ee(this$, len);
      $m_s_util_Sorting$().dc(a$7, 0, a$7.a.length, $m_s_math_Ordering$Boolean$());
      return a$7;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else {
    return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  bM: 1
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
    f.i(it.e());
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
      var srclen = $m_jl_reflect_Array$().N(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().N(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.f())) {
    $m_sr_ScalaRunTime$().af(dest, i, it.e());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.h() === 0) ? (("" + start) + end) : $thiz.aI($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).I.c);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.I;
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
    var destination = evidence$1.K(length);
    $thiz.ah(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.L();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.b();
    while (it.f()) {
      var elem = it.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cy(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().cx(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
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
  this.dz = null;
  this.bF = null;
  this.dz = head;
  this.bF = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.fB = (function() {
  return this.dz.a1().b();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  bY: 1
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
$p.b9 = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
$p.fD = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (min 0, max unknown)"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  c6: 1
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
  ck: 1
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
  this.cR = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.d5 = (function() {
  var state = this.cR;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.a1();
});
$p.d7 = (function(state) {
  if ((this.cR !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.cR = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  cm: 1
}));
function $isArrayOf_sci_LazyListBase$InRace(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
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
  cr: 1
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
$p.cy = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.cx = (function(runtimeClass, a) {
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
    var result$2 = runtimeClass.n.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().af(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  cz: 1
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
$p.d1 = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  cU: 1
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
  this.eK = null;
  this.eT = null;
  this.eL = null;
  this.eO = null;
  this.eP = null;
  this.eN = null;
  this.eM = null;
  this.eJ = null;
  this.eU = null;
  this.eH = null;
  this.eS = null;
  this.eI = null;
  this.eQ = null;
  this.eR = null;
  $n_s_reflect_ClassTag$ = this;
  this.eK = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.eT = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.eL = $m_s_reflect_ManifestFactory$CharManifest$();
  this.eO = $m_s_reflect_ManifestFactory$IntManifest$();
  this.eP = $m_s_reflect_ManifestFactory$LongManifest$();
  this.eN = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.eM = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.eJ = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.eU = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.eH = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.eS = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.eI = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.eQ = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.eR = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.cq = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  dg: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  dN: 1
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
$p.aJ = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  dP: 1
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
$p.cp = (function(x) {
  return ((x === null) ? $d_sr_Null$.l() : $objectGetClass(x));
});
$p.A = (function(xs, idx) {
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
$p.af = (function(xs, idx, value) {
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
$p.e7 = (function(xs) {
  if ((xs instanceof $ac_O)) {
    return xs.u();
  }
  if ((xs instanceof $ac_I)) {
    return xs.u();
  }
  if ((xs instanceof $ac_D)) {
    return xs.u();
  }
  if ((xs instanceof $ac_J)) {
    return xs.u();
  }
  if ((xs instanceof $ac_F)) {
    return xs.u();
  }
  if ((xs instanceof $ac_C)) {
    return xs.u();
  }
  if ((xs instanceof $ac_B)) {
    return xs.u();
  }
  if ((xs instanceof $ac_S)) {
    return xs.u();
  }
  if ((xs instanceof $ac_Z)) {
    return xs.u();
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.eX = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bu(), (x.aX() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  dQ: 1
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
$p.k = (function(hash, data) {
  var h = this.cu(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cu = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a2 = (function(hash, length) {
  return this.fa((hash ^ length));
});
$p.fa = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.fJ = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.bs = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().eo(dv);
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
$p.F = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.bs((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.fJ($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.fG = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  dS: 1
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
$p.v = (function(a, i0, iN, ord) {
  var n = ((iN - i0) | 0);
  if ((n < 2)) {
    return (void 0);
  }
  if ((ord.t($m_sr_ScalaRunTime$().A(a, i0), $m_sr_ScalaRunTime$().A(a, ((1 + i0) | 0))) > 0)) {
    var temp = $m_sr_ScalaRunTime$().A(a, i0);
    $m_sr_ScalaRunTime$().af(a, i0, $m_sr_ScalaRunTime$().A(a, ((1 + i0) | 0)));
    $m_sr_ScalaRunTime$().af(a, ((1 + i0) | 0), temp);
  }
  var m = 2;
  while ((m < n)) {
    var next = $m_sr_ScalaRunTime$().A(a, ((i0 + m) | 0));
    if ((ord.t(next, $m_sr_ScalaRunTime$().A(a, ((((i0 + m) | 0) - 1) | 0))) < 0)) {
      var iA = i0;
      var iB = ((((i0 + m) | 0) - 1) | 0);
      while ((((iB - iA) | 0) > 1)) {
        var ix = ((((iA + iB) | 0) >>> 1) | 0);
        if ((ord.t(next, $m_sr_ScalaRunTime$().A(a, ix)) < 0)) {
          iB = ix;
        } else {
          iA = ix;
        }
      }
      var ix$2 = ((iA + ((ord.t(next, $m_sr_ScalaRunTime$().A(a, iA)) >= 0) | 0)) | 0);
      var i = ((i0 + m) | 0);
      while ((i > ix$2)) {
        $m_sr_ScalaRunTime$().af(a, i, $m_sr_ScalaRunTime$().A(a, ((i - 1) | 0)));
        i = ((i - 1) | 0);
      }
      $m_sr_ScalaRunTime$().af(a, ix$2, next);
    }
    m = ((1 + m) | 0);
  }
});
$p.o = (function(a, i0, iN, ord, scratch, evidence$2) {
  if ((((iN - i0) | 0) < 32)) {
    this.v(a, i0, iN, ord);
  } else {
    var iK = ((((i0 + iN) | 0) >>> 1) | 0);
    var sc = ((scratch === null) ? evidence$2.K(((iK - i0) | 0)) : scratch);
    this.o(a, i0, iK, ord, sc, evidence$2);
    this.o(a, iK, iN, ord, sc, evidence$2);
    this.w(a, i0, iK, iN, ord, sc);
  }
});
$p.w = (function(a, i0, iK, iN, ord, scratch) {
  if ((ord.t($m_sr_ScalaRunTime$().A(a, ((iK - 1) | 0)), $m_sr_ScalaRunTime$().A(a, iK)) > 0)) {
    var i = i0;
    var jN = ((iK - i0) | 0);
    var j = 0;
    while ((i < iK)) {
      $m_sr_ScalaRunTime$().af(scratch, j, $m_sr_ScalaRunTime$().A(a, i));
      i = ((1 + i) | 0);
      j = ((1 + j) | 0);
    }
    var k = i0;
    j = 0;
    while (((i < iN) && (j < jN))) {
      if ((ord.t($m_sr_ScalaRunTime$().A(a, i), $m_sr_ScalaRunTime$().A(scratch, j)) < 0)) {
        $m_sr_ScalaRunTime$().af(a, k, $m_sr_ScalaRunTime$().A(a, i));
        i = ((1 + i) | 0);
      } else {
        $m_sr_ScalaRunTime$().af(a, k, $m_sr_ScalaRunTime$().A(scratch, j));
        j = ((1 + j) | 0);
      }
      k = ((1 + k) | 0);
    }
    while ((j < jN)) {
      $m_sr_ScalaRunTime$().af(a, k, $m_sr_ScalaRunTime$().A(scratch, j));
      j = ((1 + j) | 0);
      k = ((1 + k) | 0);
    }
  }
});
$p.fY = (function(a, from, until) {
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
$p.dc = (function(a, from, until, evidence$4) {
  $m_s_math_Ordering$();
  if ((a instanceof $ac_O)) {
    if ((($m_jl_reflect_Array$().N(a) > 1) && (evidence$4 === null))) {
      throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "Ordering");
    }
    $m_ju_Arrays$().g6(a, from, until, evidence$4);
  } else if ((a instanceof $ac_I)) {
    if ((evidence$4 === $m_s_math_Ordering$Int$())) {
      $m_ju_Arrays$().g3(a, from, until);
    } else {
      var evidence$2 = $m_s_reflect_ManifestFactory$IntManifest$();
      if ((((until - from) | 0) < 32)) {
        this.v(a, from, until, evidence$4);
      } else {
        var iK = ((((from + until) | 0) >>> 1) | 0);
        var sc = new $ac_I(((iK - from) | 0));
        if ((((iK - from) | 0) < 32)) {
          this.v(a, from, iK, evidence$4);
        } else {
          var iK$1 = ((((from + iK) | 0) >>> 1) | 0);
          this.o(a, from, iK$1, evidence$4, sc, evidence$2);
          this.o(a, iK$1, iK, evidence$4, sc, evidence$2);
          this.w(a, from, iK$1, iK, evidence$4, sc);
        }
        if ((((until - iK) | 0) < 32)) {
          this.v(a, iK, until, evidence$4);
        } else {
          var iK$2 = ((((iK + until) | 0) >>> 1) | 0);
          this.o(a, iK, iK$2, evidence$4, sc, evidence$2);
          this.o(a, iK$2, until, evidence$4, sc, evidence$2);
          this.w(a, iK, iK$2, until, evidence$4, sc);
        }
        this.w(a, from, iK, until, evidence$4, sc);
      }
    }
  } else if ((a instanceof $ac_D)) {
    var evidence$2$1 = $m_s_reflect_ManifestFactory$DoubleManifest$();
    if ((((until - from) | 0) < 32)) {
      this.v(a, from, until, evidence$4);
    } else {
      var iK$3 = ((((from + until) | 0) >>> 1) | 0);
      var sc$1 = new $ac_D(((iK$3 - from) | 0));
      if ((((iK$3 - from) | 0) < 32)) {
        this.v(a, from, iK$3, evidence$4);
      } else {
        var iK$4 = ((((from + iK$3) | 0) >>> 1) | 0);
        this.o(a, from, iK$4, evidence$4, sc$1, evidence$2$1);
        this.o(a, iK$4, iK$3, evidence$4, sc$1, evidence$2$1);
        this.w(a, from, iK$4, iK$3, evidence$4, sc$1);
      }
      if ((((until - iK$3) | 0) < 32)) {
        this.v(a, iK$3, until, evidence$4);
      } else {
        var iK$5 = ((((iK$3 + until) | 0) >>> 1) | 0);
        this.o(a, iK$3, iK$5, evidence$4, sc$1, evidence$2$1);
        this.o(a, iK$5, until, evidence$4, sc$1, evidence$2$1);
        this.w(a, iK$3, iK$5, until, evidence$4, sc$1);
      }
      this.w(a, from, iK$3, until, evidence$4, sc$1);
    }
  } else if ((a instanceof $ac_J)) {
    if ((evidence$4 === $m_s_math_Ordering$Long$())) {
      $m_ju_Arrays$().g4(a, from, until);
    } else {
      var evidence$2$2 = $m_s_reflect_ManifestFactory$LongManifest$();
      if ((((until - from) | 0) < 32)) {
        this.v(a, from, until, evidence$4);
      } else {
        var iK$6 = ((((from + until) | 0) >>> 1) | 0);
        var sc$2 = new $ac_J(((iK$6 - from) | 0));
        if ((((iK$6 - from) | 0) < 32)) {
          this.v(a, from, iK$6, evidence$4);
        } else {
          var iK$7 = ((((from + iK$6) | 0) >>> 1) | 0);
          this.o(a, from, iK$7, evidence$4, sc$2, evidence$2$2);
          this.o(a, iK$7, iK$6, evidence$4, sc$2, evidence$2$2);
          this.w(a, from, iK$7, iK$6, evidence$4, sc$2);
        }
        if ((((until - iK$6) | 0) < 32)) {
          this.v(a, iK$6, until, evidence$4);
        } else {
          var iK$8 = ((((iK$6 + until) | 0) >>> 1) | 0);
          this.o(a, iK$6, iK$8, evidence$4, sc$2, evidence$2$2);
          this.o(a, iK$8, until, evidence$4, sc$2, evidence$2$2);
          this.w(a, iK$6, iK$8, until, evidence$4, sc$2);
        }
        this.w(a, from, iK$6, until, evidence$4, sc$2);
      }
    }
  } else if ((a instanceof $ac_F)) {
    var evidence$2$3 = $m_s_reflect_ManifestFactory$FloatManifest$();
    if ((((until - from) | 0) < 32)) {
      this.v(a, from, until, evidence$4);
    } else {
      var iK$9 = ((((from + until) | 0) >>> 1) | 0);
      var sc$3 = new $ac_F(((iK$9 - from) | 0));
      if ((((iK$9 - from) | 0) < 32)) {
        this.v(a, from, iK$9, evidence$4);
      } else {
        var iK$10 = ((((from + iK$9) | 0) >>> 1) | 0);
        this.o(a, from, iK$10, evidence$4, sc$3, evidence$2$3);
        this.o(a, iK$10, iK$9, evidence$4, sc$3, evidence$2$3);
        this.w(a, from, iK$10, iK$9, evidence$4, sc$3);
      }
      if ((((until - iK$9) | 0) < 32)) {
        this.v(a, iK$9, until, evidence$4);
      } else {
        var iK$11 = ((((iK$9 + until) | 0) >>> 1) | 0);
        this.o(a, iK$9, iK$11, evidence$4, sc$3, evidence$2$3);
        this.o(a, iK$11, until, evidence$4, sc$3, evidence$2$3);
        this.w(a, iK$9, iK$11, until, evidence$4, sc$3);
      }
      this.w(a, from, iK$9, until, evidence$4, sc$3);
    }
  } else if ((a instanceof $ac_C)) {
    if ((evidence$4 === $m_s_math_Ordering$Char$())) {
      $m_ju_Arrays$().g2(a, from, until);
    } else {
      var evidence$2$4 = $m_s_reflect_ManifestFactory$CharManifest$();
      if ((((until - from) | 0) < 32)) {
        this.v(a, from, until, evidence$4);
      } else {
        var iK$12 = ((((from + until) | 0) >>> 1) | 0);
        var sc$4 = new $ac_C(((iK$12 - from) | 0));
        if ((((iK$12 - from) | 0) < 32)) {
          this.v(a, from, iK$12, evidence$4);
        } else {
          var iK$13 = ((((from + iK$12) | 0) >>> 1) | 0);
          this.o(a, from, iK$13, evidence$4, sc$4, evidence$2$4);
          this.o(a, iK$13, iK$12, evidence$4, sc$4, evidence$2$4);
          this.w(a, from, iK$13, iK$12, evidence$4, sc$4);
        }
        if ((((until - iK$12) | 0) < 32)) {
          this.v(a, iK$12, until, evidence$4);
        } else {
          var iK$14 = ((((iK$12 + until) | 0) >>> 1) | 0);
          this.o(a, iK$12, iK$14, evidence$4, sc$4, evidence$2$4);
          this.o(a, iK$14, until, evidence$4, sc$4, evidence$2$4);
          this.w(a, iK$12, iK$14, until, evidence$4, sc$4);
        }
        this.w(a, from, iK$12, until, evidence$4, sc$4);
      }
    }
  } else if ((a instanceof $ac_B)) {
    if ((evidence$4 === $m_s_math_Ordering$Byte$())) {
      $m_ju_Arrays$().g1(a, from, until);
    } else {
      var evidence$2$5 = $m_s_reflect_ManifestFactory$ByteManifest$();
      if ((((until - from) | 0) < 32)) {
        this.v(a, from, until, evidence$4);
      } else {
        var iK$15 = ((((from + until) | 0) >>> 1) | 0);
        var sc$5 = new $ac_B(((iK$15 - from) | 0));
        if ((((iK$15 - from) | 0) < 32)) {
          this.v(a, from, iK$15, evidence$4);
        } else {
          var iK$16 = ((((from + iK$15) | 0) >>> 1) | 0);
          this.o(a, from, iK$16, evidence$4, sc$5, evidence$2$5);
          this.o(a, iK$16, iK$15, evidence$4, sc$5, evidence$2$5);
          this.w(a, from, iK$16, iK$15, evidence$4, sc$5);
        }
        if ((((until - iK$15) | 0) < 32)) {
          this.v(a, iK$15, until, evidence$4);
        } else {
          var iK$17 = ((((iK$15 + until) | 0) >>> 1) | 0);
          this.o(a, iK$15, iK$17, evidence$4, sc$5, evidence$2$5);
          this.o(a, iK$17, until, evidence$4, sc$5, evidence$2$5);
          this.w(a, iK$15, iK$17, until, evidence$4, sc$5);
        }
        this.w(a, from, iK$15, until, evidence$4, sc$5);
      }
    }
  } else if ((a instanceof $ac_S)) {
    if ((evidence$4 === $m_s_math_Ordering$Short$())) {
      $m_ju_Arrays$().g5(a, from, until);
    } else {
      var evidence$2$6 = $m_s_reflect_ManifestFactory$ShortManifest$();
      if ((((until - from) | 0) < 32)) {
        this.v(a, from, until, evidence$4);
      } else {
        var iK$18 = ((((from + until) | 0) >>> 1) | 0);
        var sc$6 = new $ac_S(((iK$18 - from) | 0));
        if ((((iK$18 - from) | 0) < 32)) {
          this.v(a, from, iK$18, evidence$4);
        } else {
          var iK$19 = ((((from + iK$18) | 0) >>> 1) | 0);
          this.o(a, from, iK$19, evidence$4, sc$6, evidence$2$6);
          this.o(a, iK$19, iK$18, evidence$4, sc$6, evidence$2$6);
          this.w(a, from, iK$19, iK$18, evidence$4, sc$6);
        }
        if ((((until - iK$18) | 0) < 32)) {
          this.v(a, iK$18, until, evidence$4);
        } else {
          var iK$20 = ((((iK$18 + until) | 0) >>> 1) | 0);
          this.o(a, iK$18, iK$20, evidence$4, sc$6, evidence$2$6);
          this.o(a, iK$20, until, evidence$4, sc$6, evidence$2$6);
          this.w(a, iK$18, iK$20, until, evidence$4, sc$6);
        }
        this.w(a, from, iK$18, until, evidence$4, sc$6);
      }
    }
  } else if ((a instanceof $ac_Z)) {
    if ((evidence$4 === $m_s_math_Ordering$Boolean$())) {
      this.fY(a, from, until);
    } else {
      var evidence$2$7 = $m_s_reflect_ManifestFactory$BooleanManifest$();
      if ((((until - from) | 0) < 32)) {
        this.v(a, from, until, evidence$4);
      } else {
        var iK$21 = ((((from + until) | 0) >>> 1) | 0);
        var sc$7 = new $ac_Z(((iK$21 - from) | 0));
        if ((((iK$21 - from) | 0) < 32)) {
          this.v(a, from, iK$21, evidence$4);
        } else {
          var iK$22 = ((((from + iK$21) | 0) >>> 1) | 0);
          this.o(a, from, iK$22, evidence$4, sc$7, evidence$2$7);
          this.o(a, iK$22, iK$21, evidence$4, sc$7, evidence$2$7);
          this.w(a, from, iK$22, iK$21, evidence$4, sc$7);
        }
        if ((((until - iK$21) | 0) < 32)) {
          this.v(a, iK$21, until, evidence$4);
        } else {
          var iK$23 = ((((iK$21 + until) | 0) >>> 1) | 0);
          this.o(a, iK$21, iK$23, evidence$4, sc$7, evidence$2$7);
          this.o(a, iK$23, until, evidence$4, sc$7, evidence$2$7);
          this.w(a, iK$21, iK$23, until, evidence$4, sc$7);
        }
        this.w(a, from, iK$21, until, evidence$4, sc$7);
      }
    }
  } else if ((a === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(a);
  }
});
var $d_s_util_Sorting$ = new $TypeData().i($c_s_util_Sorting$, "scala.util.Sorting$", ({
  dZ: 1
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
$p.k = (function(hash, data) {
  var h = this.cu(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cu = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a2 = (function(hash, length) {
  return this.c3((hash ^ length));
});
$p.c3 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.er = (function(x, seed, ignorePrefix) {
  var arr = x.aV();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.aX()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.k(h, $f_T__hashCode__I(x.aX()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.k(h, $m_sr_Statics$().F(x.aW(i)));
      i = ((1 + i) | 0);
    }
    return this.a2(h, arr);
  }
});
$p.gb = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.b();
  while (iterator.f()) {
    var x = iterator.e();
    var h = $m_sr_Statics$().F(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.k(h$2, a);
  h$2 = this.k(h$2, b);
  h$2 = this.cu(h$2, c);
  return this.a2(h$2, n);
});
$p.fP = (function(xs, seed) {
  var it = xs.b();
  var h = seed;
  if ((!it.f())) {
    return this.a2(h, 0);
  }
  var x0 = it.e();
  if ((!it.f())) {
    return this.a2(this.k(h, $m_sr_Statics$().F(x0)), 1);
  }
  var x1 = it.e();
  var initial = $m_sr_Statics$().F(x0);
  h = this.k(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().F(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.f()) {
    h = this.k(h, prev);
    var hash = $m_sr_Statics$().F(it.e());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.k(h, hash);
      i = ((1 + i) | 0);
      while (it.f()) {
        h = this.k(h, $m_sr_Statics$().F(it.e()));
        i = ((1 + i) | 0);
      }
      return this.a2(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.c3(this.k(this.k(h0, rangeDiff), prev));
});
$p.G = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().N(a);
  switch (l) {
    case 0: {
      return this.a2(h, 0);
      break;
    }
    case 1: {
      return this.a2(this.k(h, $m_sr_Statics$().F($m_sr_ScalaRunTime$().A(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().F($m_sr_ScalaRunTime$().A(a, 0));
      h = this.k(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().F($m_sr_ScalaRunTime$().A(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.k(h, prev);
        var hash = $m_sr_Statics$().F($m_sr_ScalaRunTime$().A(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.k(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.k(h, $m_sr_Statics$().F($m_sr_ScalaRunTime$().A(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a2(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.c3(this.k(this.k(h0, rangeDiff), prev));
    }
  }
});
$p.fR = (function(start, step, last, seed) {
  return this.c3(this.k(this.k(this.k(seed, start), step), last));
});
$p.fE = (function(a, seed) {
  var h = seed;
  var l = a.d();
  switch (l) {
    case 0: {
      return this.a2(h, 0);
      break;
    }
    case 1: {
      return this.a2(this.k(h, $m_sr_Statics$().F(a.g(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().F(a.g(0));
      h = this.k(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().F(a.g(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.k(h, prev);
        var hash = $m_sr_Statics$().F(a.g(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.k(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.k(h, $m_sr_Statics$().F(a.g(i)));
            i = ((1 + i) | 0);
          }
          return this.a2(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.c3(this.k(this.k(h0, rangeDiff), prev));
    }
  }
});
$p.fI = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.j())) {
    var head = elems.m();
    var tail = elems.C();
    var hash = $m_sr_Statics$().F(head);
    h = this.k(h, hash);
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
  return ((rangeState === 2) ? this.fR(initial, rangeDiff, prev, seed) : this.a2(h, n));
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
$p.d2 = (function(a, b) {
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
$p.fL = (function(value, offset, count) {
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
  $thiz.dn = s;
  if (writableStackTrace) {
    $thiz.fv();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.dn = null;
  }
  cs() {
    return this.dn;
  }
  fv() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.bR : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  x() {
    var className = $objectClassName(this);
    var message = this.cs();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  l() {
    return $c_O.prototype.l.call(this);
  }
  ay(that) {
    return $c_O.prototype.ay.call(this, that);
  }
  get "message"() {
    var m = this.cs();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.x();
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
$p.t = (function(o1, o2) {
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
$p.fH = (function() {
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
$p.ar = (function(a, i, v) {
  a.a[i] = v;
});
$p.Q = (function(a, i) {
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
  co: 1,
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
    $thiz.ae($m_scm_Buffer$().ej(elems));
  } else {
    var it = elems.b();
    while (it.f()) {
      $thiz.a0(it.e());
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
  cZ: 1,
  cY: 1
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
$p.x = (function() {
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
$p.x = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.co = 0;
  this.co = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.x = (function() {
  return ("" + this.co);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  dL: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.ad = null;
  this.ad = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.x = (function() {
  return ("" + this.ad);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  dO: 1,
  a: 1
}));
function $ct_s_util_Random__ju_Random__($thiz, self) {
  $thiz.cY = self;
  return $thiz;
}
/** @constructor */
function $c_s_util_Random() {
  this.cY = null;
}
$p = $c_s_util_Random.prototype = new $h_O();
$p.constructor = $c_s_util_Random;
/** @constructor */
function $h_s_util_Random() {
}
$h_s_util_Random.prototype = $p;
$p.ax = (function(minInclusive, maxExclusive) {
  if ((!(minInclusive < maxExclusive))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Invalid bounds");
  }
  var next = ((this.cY.fO() * (maxExclusive - minInclusive)) + minInclusive);
  return ((next < maxExclusive) ? next : $m_jl_Math$().fN(maxExclusive, (-Infinity)));
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.z = 0;
  this.e2 = 0;
  this.eV = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.z = $f_T__hashCode__I("Seq");
  this.e2 = $f_T__hashCode__I("Map");
  this.eV = $f_T__hashCode__I("Set");
  this.gb($m_sci_Nil$(), this.e2);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.ez = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.fE(xs, this.z) : ((xs instanceof $c_sci_List) ? this.fI(xs, this.z) : this.fP(xs, this.z)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  e1: 1,
  e0: 1
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
$p.b7 = (function(tipo, x, y) {
  return new $c_Lcalagem_Particula(tipo, x, y, $m_s_util_Random$().ax((-25.0), 25.0), $m_s_util_Random$().ax((-25.0), 25.0), 0.0, true);
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
  cX: 1
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
  this.n = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.x = (function() {
  return ((this.n.Y ? "interface " : (this.n.X ? "" : "class ")) + this.n.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  bb: 1,
  a: 1,
  T: 1
}));
class $c_jl_Exception extends $c_jl_Throwable {
}
function $ct_ju_Random__J__($thiz, seed_in_$_lo, seed_in_$_hi) {
  $thiz.fZ(seed_in_$_lo, seed_in_$_hi);
  return $thiz;
}
function $ct_ju_Random__($thiz) {
  var $x_1 = $m_ju_Random$().fH();
  $ct_ju_Random__J__($thiz, $x_1.l, $x_1.h);
  return $thiz;
}
/** @constructor */
function $c_ju_Random() {
  this.cZ = 0;
  this.d0 = 0;
}
$p = $c_ju_Random.prototype = new $h_O();
$p.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
}
$h_ju_Random.prototype = $p;
$p.fZ = (function(seed_in_$_lo, seed_in_$_hi) {
  var lo = ((-554899859) ^ seed_in_$_lo);
  var hi = (5 ^ seed_in_$_hi);
  var hi$1 = (65535 & hi);
  this.cZ = lo;
  this.d0 = hi$1;
});
$p.eq = (function(bits) {
  var x_$_lo = this.cZ;
  var x_$_hi = this.d0;
  var b0 = (65535 & x_$_lo);
  var b1 = ((x_$_lo >>> 16) | 0);
  var a1b0 = Math.imul(58989, b0);
  var lo = (a1b0 << 16);
  var hi = ((((((Math.imul((-429064192), x_$_hi) + Math.imul(384748, x_$_lo)) | 0) + Math.imul(58989, b1)) | 0) + ((a1b0 >>> 16) | 0)) | 0);
  var lo$1 = ((720896 + lo) | 0);
  var hi$1 = ((hi + (((lo$1 >>> 0) < 720896) | 0)) | 0);
  var lo$2 = (((lo$1 >>> 16) | 0) | (hi$1 << 16));
  var hi$2 = ((hi$1 >>> 16) | 0);
  this.cZ = lo$2;
  this.d0 = hi$2;
  return ((hi$1 >>> ((-bits) | 0)) | 0);
});
$p.fO = (function() {
  return (1.1102230246251565E-16 * ((1.34217728E8 * this.eq(26)) + this.eq(27)));
});
var $d_ju_Random = new $TypeData().i($c_ju_Random, "java.util.Random", ({
  bw: 1,
  bE: 1,
  a: 1
}));
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ce;
      break;
    }
    case 1: {
      return $thiz.bd;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.cg = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.cg = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.aq = (function(it) {
  return this.cg.eh(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.X = (function() {
  return this.cg.cv($m_s_reflect_ManifestFactory$AnyManifest$());
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
  this.dv = null;
  this.du = null;
  this.dv = self;
  this.du = p;
}
$p = $c_sc_IterableOps$WithFilter.prototype = new $h_sc_WithFilter();
$p.constructor = $c_sc_IterableOps$WithFilter;
/** @constructor */
function $h_sc_IterableOps$WithFilter() {
}
$h_sc_IterableOps$WithFilter.prototype = $p;
$p.fw = (function() {
  return new $c_sc_View$Filter(this.dv, this.du, false);
});
var $d_sc_IterableOps$WithFilter = new $TypeData().i($c_sc_IterableOps$WithFilter, "scala.collection.IterableOps$WithFilter", ({
  bS: 1,
  c5: 1,
  a: 1
}));
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).c1(xs);
}
/** @constructor */
function $c_sc_Iterator$() {
  this.Y = null;
  $n_sc_Iterator$ = this;
  this.Y = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.X = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.aq = (function(source) {
  return source.b();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bT: 1,
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
$p.ek = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.b()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().el(it))));
});
$p.X = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.ek(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.aq = (function(source) {
  return this.ek(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  c2: 1,
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
  this.dY = null;
  this.dY = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.a1 = (function() {
  return (0, this.dY)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  dH: 1,
  dG: 1,
  ak: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.dZ = null;
  this.dZ = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.i = (function(x0) {
  return (0, this.dZ)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  dJ: 1,
  dI: 1,
  j: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  dM: 1,
  G: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Random$() {
  this.cY = null;
  $ct_s_util_Random__ju_Random__(this, $ct_ju_Random__(new $c_ju_Random()));
}
$p = $c_s_util_Random$.prototype = new $h_s_util_Random();
$p.constructor = $c_s_util_Random$;
/** @constructor */
function $h_s_util_Random$() {
}
$h_s_util_Random$.prototype = $p;
var $d_s_util_Random$ = new $TypeData().i($c_s_util_Random$, "scala.util.Random$", ({
  dY: 1,
  dX: 1,
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
  this.U = null;
  this.D = 0.0;
  this.E = 0.0;
  this.as = 0.0;
  this.at = 0.0;
  this.aZ = 0.0;
  this.V = false;
  this.U = tipo;
  this.D = x;
  this.E = y;
  this.as = vx;
  this.at = vy;
  this.aZ = idade;
  this.V = vivo;
}
$p = $c_Lcalagem_Particula.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Particula;
/** @constructor */
function $h_Lcalagem_Particula() {
}
$h_Lcalagem_Particula.prototype = $p;
$p.bu = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().k(acc, 203662621);
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().F(this.U));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().bs(this.D));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().bs(this.E));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().bs(this.as));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().bs(this.at));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().bs(this.aZ));
  acc = $m_sr_Statics$().k(acc, (this.V ? 1231 : 1237));
  return $m_sr_Statics$().a2(acc, 7);
});
$p.x = (function() {
  return $m_sr_ScalaRunTime$().eX(this);
});
$p.aV = (function() {
  return 7;
});
$p.aX = (function() {
  return "Particula";
});
$p.aW = (function(n) {
  switch (n) {
    case 0: {
      return this.U;
      break;
    }
    case 1: {
      return this.D;
      break;
    }
    case 2: {
      return this.E;
      break;
    }
    case 3: {
      return this.as;
      break;
    }
    case 4: {
      return this.at;
      break;
    }
    case 5: {
      return this.aZ;
      break;
    }
    case 6: {
      return this.V;
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
  a9: 1,
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
$p.e5 = (function(str) {
  var str$1 = $m_jl_String$().fL(str, 0, str.a.length);
  this.c = (("" + this.c) + str$1);
  return this;
});
$p.x = (function() {
  return this.c;
});
$p.d = (function() {
  return this.c.length;
});
$p.e8 = (function(index) {
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
$p.t = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.ar = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.Q = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ByteArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ByteArrayOps$, "java.util.internal.GenericArrayOps$ByteArrayOps$", ({
  by: 1,
  a8: 1,
  ab: 1,
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
$p.t = (function(o1, o2) {
  return (($uC(o1) - $uC(o2)) | 0);
});
$p.ar = (function(a, i, v) {
  var v$1 = $uC(v);
  a.a[i] = v$1;
});
$p.Q = (function(a, i) {
  return $bC(a.a[i]);
});
var $d_ju_internal_GenericArrayOps$CharArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$CharArrayOps$, "java.util.internal.GenericArrayOps$CharArrayOps$", ({
  bz: 1,
  a8: 1,
  ab: 1,
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
$p.t = (function(o1, o2) {
  var x = (o1 | 0);
  var y = (o2 | 0);
  return ((x === y) ? 0 : ((x < y) ? (-1) : 1));
});
$p.ar = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.Q = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$IntArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$IntArrayOps$, "java.util.internal.GenericArrayOps$IntArrayOps$", ({
  bA: 1,
  a8: 1,
  ab: 1,
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
$p.t = (function(o1, o2) {
  var $x_1 = $uJ(o1);
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var $x_2 = $uJ(o2);
  var y_$_lo = $x_2.l;
  var y_$_hi = $x_2.h;
  return ((x_$_hi === y_$_hi) ? ((x_$_lo === y_$_lo) ? 0 : (((x_$_lo >>> 0) < (y_$_lo >>> 0)) ? (-1) : 1)) : ((x_$_hi < y_$_hi) ? (-1) : 1));
});
$p.ar = (function(a, i, v) {
  var $x_1 = $uJ(v);
  var v$1_$_lo = $x_1.l;
  var v$1_$_hi = $x_1.h;
  var $x_2 = a.a;
  var $x_3 = (i << 1);
  $x_2[$x_3] = v$1_$_lo;
  $x_2[(($x_3 + 1) | 0)] = v$1_$_hi;
});
$p.Q = (function(a, i) {
  var $x_1 = a.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
var $d_ju_internal_GenericArrayOps$LongArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$LongArrayOps$, "java.util.internal.GenericArrayOps$LongArrayOps$", ({
  bB: 1,
  a8: 1,
  ab: 1,
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
$p.t = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.ar = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.Q = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ShortArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ShortArrayOps$, "java.util.internal.GenericArrayOps$ShortArrayOps$", ({
  bD: 1,
  a8: 1,
  ab: 1,
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
$p.ah = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aC = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().ba(this);
});
$p.b = (function() {
  return this;
});
$p.c1 = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.x = (function() {
  return "<iterator>";
});
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.bG = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.bG = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.ej = (function(it) {
  return this.bG.aq(it);
});
$p.X = (function() {
  return this.bG.X();
});
$p.aq = (function(source) {
  return this.ej(source);
});
function $f_sc_SeqOps__sorted__s_math_Ordering__O($thiz, ord) {
  var len = $thiz.d();
  var b = $thiz.aU();
  if ((len === 1)) {
    b.a0($thiz.m());
  } else if ((len > 1)) {
    b.aj(len);
    var arr = new $ac_O(len);
    $thiz.ah(arr, 0, 2147483647);
    $m_ju_Arrays$().bv(arr, ord);
    var i = 0;
    while ((i < len)) {
      b.a0(arr.a[i]);
      i = ((1 + i) | 0);
    }
  }
  return b.ai();
}
function $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($thiz, f, ord) {
  return $thiz.T(new $c_s_math_Ordering$$anon$1(f, ord));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.R(0) === 0);
}
function $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O($thiz, pred, isFlipped) {
  var b = $thiz.aU();
  var it = $thiz.b();
  while (it.f()) {
    var elem = it.e();
    if (((!(!pred.i(elem))) !== isFlipped)) {
      b.a0(elem);
    }
  }
  return b.ai();
}
/** @constructor */
function $c_sci_LazyList$() {
  this.y = null;
  this.dI = null;
  this.dJ = false;
  $n_sci_LazyList$ = this;
  this.y = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.ev = (function() {
  if ((!this.dJ)) {
    this.dI = new $c_sci_LazyListBase$TailUpdater();
    this.dJ = true;
  }
  return this.dI;
});
$p.fX = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.ad;
    var i = iRef.co;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().y)))) {
      rest = rest.O();
      restRef.ad = rest;
      i = ((i - 1) | 0);
      iRef.co = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.el = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.h() === 0) ? this.y : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ew(coll.b()))))));
});
$p.ex = (function(it, suffix) {
  return (it.f() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ex(it, suffix))))) : suffix.a1());
});
$p.ew = (function(it) {
  return (it.f() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ew(it))))) : this.y);
});
$p.X = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.aq = (function(source) {
  return this.el(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  cj: 1,
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
  this.dP = null;
  this.bM = null;
  this.dP = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bM = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.f6 = (function(x) {
  this.bM.a0(x);
  return this;
});
$p.f0 = (function(xs) {
  this.bM.ae(xs);
  return this;
});
$p.aj = (function(size) {
  this.bM.aj(size);
});
$p.ai = (function() {
  return this.dP.i(this.bM.ai());
});
$p.a0 = (function(elem) {
  return this.f6(elem);
});
$p.ae = (function(elems) {
  return this.f0(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  cM: 1,
  W: 1,
  X: 1,
  a2: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.ac = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.ac = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.aj = (function(size) {
});
$p.b6 = (function(elem) {
  this.ac.a0(elem);
  return this;
});
$p.f1 = (function(xs) {
  this.ac.ae(xs);
  return this;
});
$p.ai = (function() {
  return this.ac;
});
$p.a0 = (function(elem) {
  return this.b6(elem);
});
$p.ae = (function(elems) {
  return this.f1(elems);
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
$p.bu = (function() {
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
  if ((!$thiz.dq)) {
    if (($thiz.cd === null)) {
      var $x_1 = "null";
    } else {
      var cls = $m_sr_ScalaRunTime$().cp($thiz.cd);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.n.N));
      try {
        var $x_1 = ((($thiz.cd + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.dp = $x_1;
    $thiz.dq = true;
  }
  return $thiz.dp;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.cd = null;
    this.dp = null;
    this.dq = false;
    this.cd = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  cs() {
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
  this.bB = 0;
  this.ds = 0;
  this.dr = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.dr = outer;
  this.bB = 0;
  this.ds = outer.aV();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.f = (function() {
  return (this.bB < this.ds);
});
$p.e = (function() {
  var result = this.dr.aW(this.bB);
  this.bB = ((1 + this.bB) | 0);
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
function $c_T2(_1, _2) {
  this.ce = null;
  this.bd = null;
  this.ce = _1;
  this.bd = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.aV = (function() {
  return 2;
});
$p.aW = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.x = (function() {
  return (((("(" + this.ce) + ",") + this.bd) + ")");
});
$p.aX = (function() {
  return "Tuple2";
});
$p.bu = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().er(this, (-116390334), true);
});
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bK: 1,
  bJ: 1,
  a9: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.cg = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  bP: 1,
  bO: 1,
  a: 1,
  P: 1,
  a0: 1
}));
function $f_sc_IndexedSeqOps__take__I__O($thiz, n) {
  return $thiz.c2($ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), $thiz, n));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.j())) {
    return $thiz.g(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.ag() : $thiz.x())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.ag() + "("), ", ", ")");
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
$p.fM = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.h = (function() {
  return 0;
});
$p.e = (function() {
  this.fM();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bU: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.dw = null;
  this.ch = false;
  this.dw = a$2;
  this.ch = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.f = (function() {
  return (!this.ch);
});
$p.e = (function() {
  if (this.ch) {
    return $m_sc_Iterator$().Y.e();
  } else {
    this.ch = true;
    return this.dw;
  }
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  bV: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$6(p$5, isFlipped$2, outer) {
  this.dy = null;
  this.dx = false;
  this.ci = null;
  this.cj = false;
  this.bE = null;
  this.dy = p$5;
  this.dx = isFlipped$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bE = outer;
  this.cj = false;
}
$p = $c_sc_Iterator$$anon$6.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$6;
/** @constructor */
function $h_sc_Iterator$$anon$6() {
}
$h_sc_Iterator$$anon$6.prototype = $p;
$p.f = (function() {
  if (this.cj) {
    return true;
  } else {
    if ((!this.bE.f())) {
      return false;
    }
    this.ci = this.bE.e();
    while (((!(!this.dy.i(this.ci))) === this.dx)) {
      if ((!this.bE.f())) {
        return false;
      }
      this.ci = this.bE.e();
    }
    this.cj = true;
    return true;
  }
});
$p.e = (function() {
  if (this.f()) {
    this.cj = false;
    return this.ci;
  } else {
    return $m_sc_Iterator$().Y.e();
  }
});
var $d_sc_Iterator$$anon$6 = new $TypeData().i($c_sc_Iterator$$anon$6, "scala.collection.Iterator$$anon$6", ({
  bX: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.Z instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.Z;
      $thiz.Z = c.Z;
      $thiz.aM = c.aM;
      if ((c.ab !== null)) {
        if (($thiz.aa === null)) {
          $thiz.aa = c.aa;
        }
        var x$proxy10 = c.aa;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().aJ();
        }
        x$proxy10.bF = $thiz.ab;
        $thiz.ab = c.ab;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.ab === null)) {
      $thiz.Z = null;
      $thiz.aa = null;
      return false;
    } else {
      $thiz.Z = $thiz.ab.fB();
      if (($thiz.aa === $thiz.ab)) {
        var x$proxy12 = $thiz.aa;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().aJ();
        }
        $thiz.aa = x$proxy12.bF;
      }
      $thiz.ab = $thiz.ab.bF;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aM) {
        return true;
      } else {
        if ((!(($thiz.Z !== null) && $thiz.Z.f()))) {
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
  this.Z = null;
  this.ab = null;
  this.aa = null;
  this.aM = false;
  this.Z = from;
  this.ab = null;
  this.aa = null;
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
  } else if ((this.Z !== null)) {
    if (this.Z.f()) {
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
    var x$proxy13 = this.Z;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().aJ();
    }
    return x$proxy13.e();
  } else {
    return $m_sc_Iterator$().Y.e();
  }
});
$p.c1 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.ab === null)) {
    this.ab = c;
    this.aa = c;
  } else {
    var x$proxy14 = this.aa;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().aJ();
    }
    x$proxy14.bF = c;
    this.aa = c;
  }
  if ((this.Z === null)) {
    this.Z = $m_sc_Iterator$().Y;
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
  while ((!these.j())) {
    len = ((1 + len) | 0);
    these = these.C();
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
  var skipped = $thiz.eg(n);
  if (skipped.j()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.m();
}
function $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.j()) | 0);
    } else {
      if ((!xs$tailLocal1.j())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.C();
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
  this.bI = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bI = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.f = (function() {
  return (!this.bI.j());
});
$p.e = (function() {
  var r = this.bI.m();
  this.bI = this.bI.C();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  c1: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.bi = null;
  this.dK = null;
  this.fb();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.aj = (function(size) {
});
$p.fb = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.dK = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.d5()))));
  this.bi = deferred;
});
$p.fW = (function() {
  this.bi.d7(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().y)));
  return this.dK;
});
$p.f5 = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.bi.d7(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.d5())))));
  })));
  this.bi = deferred;
  return this;
});
$p.eY = (function(xs) {
  if ((xs.h() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.bi.d7(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().ex(xs.b(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.d5()))))));
    this.bi = deferred;
  }
  return this;
});
$p.ai = (function() {
  return this.fW();
});
$p.a0 = (function(elem) {
  return this.f5(elem);
});
$p.ae = (function(elems) {
  return this.eY(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  cl: 1,
  W: 1,
  X: 1,
  a2: 1,
  af: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.bj = null;
  this.bj = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.f = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.bj) === $m_sci_LazyList$().y));
});
$p.e = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.bj) === $m_sci_LazyList$().y)) {
    return $m_sc_Iterator$().Y.e();
  } else {
    var res = this.bj.m();
    this.bj = this.bj.O();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  cn: 1,
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
$p.X = (function() {
  return new $c_scm_ListBuffer();
});
$p.aq = (function(source) {
  return $m_sci_Nil$().ba(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  cs: 1,
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
  this.dL = null;
  $n_scm_ArrayBuffer$ = this;
  this.dL = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.em = (function(coll) {
  var k = coll.h();
  if ((k >= 0)) {
    var array = this.ey(this.dL, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.ah(array, 0, 2147483647) : coll.b().ah(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).e3(coll);
  }
});
$p.X = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.fV = (function(arrayLen, targetLen) {
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
$p.ey = (function(array, curSize, targetSize) {
  var newLen = this.fV(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.q(0, res, 0, curSize);
    return res;
  }
});
$p.aq = (function(source) {
  return this.em(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  cv: 1,
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
  this.ac = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.aj = (function(size) {
  this.ac.aj(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  cw: 1,
  aP: 1,
  W: 1,
  X: 1,
  a2: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.bG = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  cL: 1,
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
  $thiz.bO = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.bO = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.ae = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aj = (function(size) {
});
$p.ai = (function() {
  return this.bO;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.bG = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  cS: 1,
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
$p.X = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.aq = (function(source) {
  return new $c_scm_ListBuffer().da(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  cT: 1,
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
  this.cV = null;
  this.dV = null;
  this.dU = 0;
  this.cV = underlying;
  this.dV = mutationCount;
  this.dU = (mutationCount.a1() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().d1(this.dU, (this.dV.a1() | 0), "mutation occurred during iteration");
  return this.cV.f();
});
$p.e = (function() {
  return this.cV.e();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  cV: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1
}));
function $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z($thiz, other) {
  if ((other instanceof $c_s_math_Ordering$Reverse)) {
    var x = other.b5;
    return ((x !== null) && x.ay($thiz));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.n.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.n.Q())) + "]") : clazz.n.N);
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.e1 = null;
  this.bQ = 0;
  this.e0 = 0;
  this.e1 = x$1;
  this.bQ = 0;
  this.e0 = x$1.aV();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.f = (function() {
  return (this.bQ < this.e0);
});
$p.e = (function() {
  var result = this.e1.aW(this.bQ);
  this.bQ = ((1 + this.bQ) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  dR: 1,
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
$p.X = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.fz = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).ai();
});
$p.aq = (function(source) {
  return this.fz(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  dU: 1,
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
$p.en = (function(source) {
  return this.X().ae(source).ai();
});
$p.X = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.aw))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.aq = (function(source) {
  return this.en(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  dW: 1,
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
  return $m_jl_Double$().d2($thiz, o);
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
  aa: 1
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
  return $m_jl_Double$().d2($thiz, o);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bd: 1,
  a7: 1,
  a: 1,
  Y: 1,
  T: 1,
  aa: 1
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
  aa: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().eG($thiz, $thizhi);
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
  aa: 1
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
  aa: 1
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
$p.bt = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.j = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.ah = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aC = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().ba(this);
});
$p.aB = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this);
});
$p.m = (function() {
  return this.b().e();
});
$p.cr = (function(coll) {
  return this.aA().aq(coll);
});
$p.aU = (function() {
  return this.aA().X();
});
$p.ag = (function() {
  return this.a4();
});
$p.c2 = (function(coll) {
  return this.cr(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.cf = null;
  this.b1 = 0;
  this.cL = 0;
  this.cf = xs;
  this.b1 = 0;
  this.cL = $m_jl_reflect_Array$().N(this.cf);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.h = (function() {
  return ((this.cL - this.b1) | 0);
});
$p.f = (function() {
  return (this.b1 < this.cL);
});
$p.e = (function() {
  if ((this.b1 >= $m_jl_reflect_Array$().N(this.cf))) {
    $m_sc_Iterator$().Y.e();
  }
  var r = $m_sr_ScalaRunTime$().A(this.cf, this.b1);
  this.b1 = ((1 + this.b1) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bN: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.cM = self;
  $thiz.bC = 0;
  $thiz.aK = self.d();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.cM = null;
  this.bC = 0;
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
    var r = this.cM.g(this.bC);
    this.bC = ((1 + this.bC) | 0);
    this.aK = ((this.aK - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().Y.e();
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
  $thiz.cN = self;
  $thiz.aL = self.d();
  $thiz.bD = (($thiz.aL - 1) | 0);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  this.cN = null;
  this.aL = 0;
  this.bD = 0;
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
    var r = this.cN.g(this.bD);
    this.bD = ((this.bD - 1) | 0);
    this.aL = ((this.aL - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().Y.e();
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
  this.bO = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().Y);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.f4 = (function(elem) {
  this.bO = this.bO.c1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.a0 = (function(elem) {
  return this.f4(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  bW: 1,
  cR: 1,
  W: 1,
  X: 1,
  a2: 1,
  af: 1
}));
/** @constructor */
function $c_sci_ArraySeq$() {
  this.dH = null;
  $n_sci_ArraySeq$ = this;
  this.dH = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.d6 = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.cA($m_s_Array$().ei(it, tag)));
});
$p.cv = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.cA($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.cA = (function(x) {
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
$p.eh = (function(it, evidence$1) {
  return this.d6(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  c8: 1,
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
  $thiz.cT = 0;
  $thiz.dM = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.cT = 0;
  this.dM = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.aj = (function(size) {
  if ((this.cT < size)) {
    this.fU(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.dO = null;
  $n_scm_ArraySeq$ = this;
  this.dO = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.fy = (function(it, evidence$1) {
  return this.ct($m_s_Array$().ei(it, evidence$1));
});
$p.cv = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.ct(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.L()));
});
$p.ct = (function(x) {
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
$p.eh = (function(it, evidence$1) {
  return this.fy(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cB: 1,
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
  this.cW = null;
  this.dW = null;
  this.cW = f$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.dW = outer;
}
$p = $c_s_math_Ordering$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$$anon$1;
/** @constructor */
function $h_s_math_Ordering$$anon$1() {
}
$h_s_math_Ordering$$anon$1.prototype = $p;
$p.az = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  return this.dW.t(this.cW.i(x), this.cW.i(y));
});
var $d_s_math_Ordering$$anon$1 = new $TypeData().i($c_s_math_Ordering$$anon$1, "scala.math.Ordering$$anon$1", ({
  d0: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1
}));
function $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z($thiz, other) {
  return (other === $thiz.dX);
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.b5 = null;
  this.b5 = outer;
}
$p = $c_s_math_Ordering$Reverse.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
}
$h_s_math_Ordering$Reverse.prototype = $p;
$p.az = (function(other) {
  var x$2 = this.b5;
  return ((other === null) ? (x$2 === null) : other.ay(x$2));
});
$p.t = (function(x, y) {
  return this.b5.t(y, x);
});
$p.ay = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true;
    }
  }
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x = this.b5;
    var x$2 = obj.b5;
    return ((x === null) ? (x$2 === null) : x.ay(x$2));
  }
  return false;
});
$p.l = (function() {
  return Math.imul(41, this.b5.l());
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
  this.bP = null;
  this.bP = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.l = (function() {
  return $m_sr_Statics$().F(this.bP);
});
$p.x = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.bP);
});
$p.L = (function() {
  return this.bP;
});
$p.K = (function(len) {
  return this.bP.n.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  dh: 1,
  a: 1,
  F: 1,
  D: 1,
  d: 1,
  E: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.ag() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.H)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.H)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.cT = 0;
  this.dM = 0;
  this.bk = null;
  this.dN = false;
  this.cU = null;
  this.bk = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.dN = (elementClass === $d_C.l());
  this.cU = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.e4 = (function(elem) {
  var unboxedElem = (this.dN ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cy(this.bk) : elem));
  this.cU.push(unboxedElem);
  return this;
});
$p.eZ = (function(xs) {
  var it = xs.b();
  while (it.f()) {
    this.e4(it.e());
  }
  return this;
});
$p.fU = (function(size) {
});
$p.ai = (function() {
  return $m_scm_ArrayBuilder$().cx(((this.bk === $d_V.l()) ? $d_jl_Void.l() : (((this.bk === $d_sr_Null$.l()) || (this.bk === $d_sr_Nothing$.l())) ? $d_O.l() : this.bk)), this.cU);
});
$p.x = (function() {
  return "ArrayBuilder.generic";
});
$p.a0 = (function(elem) {
  return this.e4(elem);
});
$p.ae = (function(elems) {
  return this.eZ(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  cA: 1,
  cy: 1,
  W: 1,
  X: 1,
  a2: 1,
  af: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.cM = null;
  this.bC = 0;
  this.aK = 0;
  this.dR = null;
  this.dQ = 0;
  this.dR = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.dQ = (mutationCount.a1() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().d1(this.dQ, (this.dR.a1() | 0), "mutation occurred during iteration");
  return (this.aK > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  cO: 1,
  aB: 1,
  t: 1,
  b: 1,
  c: 1,
  u: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(self, mutationCount) {
  this.cN = null;
  this.aL = 0;
  this.bD = 0;
  this.dT = null;
  this.dS = 0;
  this.dT = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(this, self);
  this.dS = (mutationCount.a1() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedReverseIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().d1(this.dS, (this.dT.a1() | 0), "mutation occurred during iteration");
  return (this.aL > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedReverseIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedReverseIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedReverseIterator", ({
  cP: 1,
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
$p.az = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  var x$1 = (!(!x));
  return ((x$1 === (!(!y))) ? 0 : (x$1 ? 1 : (-1)));
});
var $d_s_math_Ordering$Boolean$ = new $TypeData().i($c_s_math_Ordering$Boolean$, "scala.math.Ordering$Boolean$", ({
  d1: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d2: 1
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
$p.az = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Byte$ = new $TypeData().i($c_s_math_Ordering$Byte$, "scala.math.Ordering$Byte$", ({
  d3: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d4: 1
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
$p.az = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  return (($uC(x) - $uC(y)) | 0);
});
var $d_s_math_Ordering$Char$ = new $TypeData().i($c_s_math_Ordering$Char$, "scala.math.Ordering$Char$", ({
  d6: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d7: 1
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
$p.az = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  return $m_jl_Double$().d2((+x), (+y));
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().i($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  d8: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  d9: 1
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
$p.az = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  var $x_1 = $uJ(x);
  var x$1_$_lo = $x_1.l;
  var x$1_$_hi = $x_1.h;
  var $x_2 = $uJ(y);
  var y$1_$_lo = $x_2.l;
  var y$1_$_hi = $x_2.h;
  return ((x$1_$_hi === y$1_$_hi) ? ((x$1_$_lo === y$1_$_lo) ? 0 : (((x$1_$_lo >>> 0) < (y$1_$_lo >>> 0)) ? (-1) : 1)) : ((x$1_$_hi < y$1_$_hi) ? (-1) : 1));
});
var $d_s_math_Ordering$Long$ = new $TypeData().i($c_s_math_Ordering$Long$, "scala.math.Ordering$Long$", ({
  dc: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  dd: 1
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
$p.az = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Short$ = new $TypeData().i($c_s_math_Ordering$Short$, "scala.math.Ordering$Short$", ({
  de: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  df: 1
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
$p.x = (function() {
  return this.r;
});
$p.l = (function() {
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
    this.bR = null;
    this.bR = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  cs() {
    return $dp_toString__T(this.bR);
  }
  aX() {
    return "JavaScriptException";
  }
  aV() {
    return 1;
  }
  aW(x$1) {
    return ((x$1 === 0) ? this.bR : $m_sr_Statics$().fG(x$1));
  }
  bu() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  l() {
    return $m_s_util_hashing_MurmurHash3$().er(this, 1744042595, true);
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
  a9: 1,
  d: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.j())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.C();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_math_Ordering$Int$() {
  this.dX = null;
  $n_s_math_Ordering$Int$ = this;
  this.dX = new $c_s_math_Ordering$Reverse(this);
}
$p = $c_s_math_Ordering$Int$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
}
$h_s_math_Ordering$Int$.prototype = $p;
$p.az = (function(other) {
  return $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.t = (function(x, y) {
  var x$1 = (x | 0);
  var y$1 = (y | 0);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1));
});
var $d_s_math_Ordering$Int$ = new $TypeData().i($c_s_math_Ordering$Int$, "scala.math.Ordering$Int$", ({
  da: 1,
  s: 1,
  a: 1,
  a3: 1,
  a5: 1,
  a4: 1,
  db: 1,
  d5: 1
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
$p.L = (function() {
  return $d_Z.l();
});
$p.K = (function(len) {
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
$p.L = (function() {
  return $d_B.l();
});
$p.K = (function(len) {
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
$p.L = (function() {
  return $d_C.l();
});
$p.K = (function(len) {
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
$p.L = (function() {
  return $d_D.l();
});
$p.K = (function(len) {
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
$p.L = (function() {
  return $d_F.l();
});
$p.K = (function(len) {
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
$p.L = (function() {
  return $d_I.l();
});
$p.K = (function(len) {
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
$p.L = (function() {
  return $d_J.l();
});
$p.K = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.aH = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.x = (function() {
  return this.aH;
});
$p.l = (function() {
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
$p.L = (function() {
  return $d_S.l();
});
$p.K = (function(len) {
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
$p.L = (function() {
  return $d_V.l();
});
$p.K = (function(len) {
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
$p.aA = (function() {
  return $m_sc_View$();
});
$p.x = (function() {
  return $f_sc_View__toString__T(this);
});
$p.a4 = (function() {
  return "View";
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.aH = null;
  this.aH = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.L = (function() {
  return $d_O.l();
});
$p.K = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  dj: 1,
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
  dy: 1,
  dx: 1,
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
  this.aH = null;
  this.aH = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.L = (function() {
  return $d_sr_Nothing$.l();
});
$p.K = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
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
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.aH = null;
  this.aH = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.L = (function() {
  return $d_sr_Null$.l();
});
$p.K = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  dA: 1,
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
  this.aH = null;
  this.aH = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.L = (function() {
  return $d_O.l();
});
$p.K = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  dB: 1,
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
  dF: 1,
  dE: 1,
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
  this.cc = null;
  this.cc = \u03b4name$2;
}
$p = $c_Lcalagem_TipoParticula$$anon$1.prototype = new $h_Lcalagem_TipoParticula();
$p.constructor = $c_Lcalagem_TipoParticula$$anon$1;
/** @constructor */
function $h_Lcalagem_TipoParticula$$anon$1() {
}
$h_Lcalagem_TipoParticula$$anon$1.prototype = $p;
$p.aV = (function() {
  return 0;
});
$p.aW = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aX = (function() {
  return this.cc;
});
$p.x = (function() {
  return this.cc;
});
$p.l = (function() {
  return $f_T__hashCode__I(this.cc);
});
var $d_Lcalagem_TipoParticula$$anon$1 = new $TypeData().i($c_Lcalagem_TipoParticula$$anon$1, "calagem.TipoParticula$$anon$1", ({
  b5: 1,
  b3: 1,
  d: 1,
  a9: 1,
  a: 1,
  di: 1,
  dK: 1,
  at: 1,
  aT: 1,
  cW: 1
}));
function $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying_, len, ord) {
  $thiz.au = len;
  $thiz.be = ord;
  $thiz.bH = underlying_;
  $thiz.cO = false;
  return $thiz;
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__($thiz, underlying, ord) {
  $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying, underlying.d(), ord);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Sorted() {
  this.au = 0;
  this.be = null;
  this.bH = null;
  this.cO = false;
  this.dA = null;
  this.dB = false;
}
$p = $c_sc_SeqView$Sorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted;
/** @constructor */
function $h_sc_SeqView$Sorted() {
}
$h_sc_SeqView$Sorted.prototype = $p;
$p.bt = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ah = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aC = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().ba(this);
});
$p.m = (function() {
  return this.b().e();
});
$p.S = (function() {
  return new $c_sc_SeqView$Sorted$ReverseSorted(this).b();
});
$p.R = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.aU = (function() {
  return $m_sc_View$().X();
});
$p.ag = (function() {
  return "SeqView";
});
$p.x = (function() {
  return $f_sc_View__toString__T(this);
});
$p.cw = (function() {
  if ((!this.dB)) {
    var len = this.au;
    if ((len === 0)) {
      var res = $m_sci_Nil$();
    } else if ((len === 1)) {
      $m_sci_List$();
      var elems = new $c_sjsr_WrappedVarArgs([this.bH.m()]);
      var res = $m_sci_Nil$().ba(elems);
    } else {
      var arr = new $ac_O(len);
      this.bH.ah(arr, 0, 2147483647);
      $m_ju_Arrays$().bv(arr, this.be);
      var res = $m_sci_ArraySeq$().cA(arr);
    }
    this.cO = true;
    this.bH = null;
    this.dA = res;
    this.dB = true;
  }
  return this.dA;
});
$p.eu = (function() {
  return (this.cO ? this.cw() : this.bH);
});
$p.g = (function(i) {
  return this.cw().g(i);
});
$p.d = (function() {
  return this.au;
});
$p.b = (function() {
  return $m_sc_Iterator$().Y.c1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.cw().b())));
});
$p.h = (function() {
  return this.au;
});
$p.j = (function() {
  return (this.au === 0);
});
$p.db = (function(ord1) {
  var x$2 = this.be;
  if (((ord1 === null) ? (x$2 === null) : ord1.ay(x$2))) {
    return this;
  } else {
    return (ord1.az(this.be) ? new $c_sc_SeqView$Sorted$ReverseSorted(this) : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.eu(), this.au, ord1));
  }
});
$p.T = (function(ord) {
  return this.db(ord);
});
var $d_sc_SeqView$Sorted = new $TypeData().i($c_sc_SeqView$Sorted, "scala.collection.SeqView$Sorted", ({
  bZ: 1,
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
  if ((!$thiz.dD)) {
    $thiz.dC = $ct_sc_SeqView$Reverse__sc_SeqOps__(new $c_sc_SeqView$Reverse(), $thiz.al.cw());
    $thiz.dD = true;
  }
  return $thiz.dC;
}
/** @constructor */
function $c_sc_SeqView$Sorted$ReverseSorted(outer) {
  this.dC = null;
  this.dD = false;
  this.al = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.al = outer;
}
$p = $c_sc_SeqView$Sorted$ReverseSorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted$ReverseSorted;
/** @constructor */
function $h_sc_SeqView$Sorted$ReverseSorted() {
}
$h_sc_SeqView$Sorted$ReverseSorted.prototype = $p;
$p.bt = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ah = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aC = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().ba(this);
});
$p.m = (function() {
  return this.b().e();
});
$p.S = (function() {
  return this.al.b();
});
$p.R = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.aU = (function() {
  return $m_sc_View$().X();
});
$p.ag = (function() {
  return "SeqView";
});
$p.x = (function() {
  return $f_sc_View__toString__T(this);
});
$p.g = (function(i) {
  return $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).g(i);
});
$p.d = (function() {
  return this.al.au;
});
$p.b = (function() {
  return $m_sc_Iterator$().Y.c1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).b())));
});
$p.h = (function() {
  return this.al.au;
});
$p.j = (function() {
  return (this.al.au === 0);
});
$p.db = (function(ord1) {
  var x$2 = this.al.be;
  if (((ord1 === null) ? (x$2 === null) : ord1.ay(x$2))) {
    return this.al;
  } else {
    return (ord1.az(this.al.be) ? this : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.al.eu(), this.al.au, ord1));
  }
});
$p.T = (function(ord) {
  return this.db(ord);
});
var $d_sc_SeqView$Sorted$ReverseSorted = new $TypeData().i($c_sc_SeqView$Sorted$ReverseSorted, "scala.collection.SeqView$Sorted$ReverseSorted", ({
  c0: 1,
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
  this.dE = null;
  this.dE = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.b = (function() {
  return this.dE.a1();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  c3: 1,
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
  this.cP = null;
  this.dG = null;
  this.dF = false;
  this.cP = underlying;
  this.dG = p;
  this.dF = isFlipped;
}
$p = $c_sc_View$Filter.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Filter;
/** @constructor */
function $h_sc_View$Filter() {
}
$h_sc_View$Filter.prototype = $p;
$p.b = (function() {
  var this$1 = this.cP.b();
  return new $c_sc_Iterator$$anon$6(this.dG, this.dF, this$1);
});
$p.h = (function() {
  return ((this.cP.h() === 0) ? 0 : (-1));
});
$p.j = (function() {
  return (!this.b().f());
});
var $d_sc_View$Filter = new $TypeData().i($c_sc_View$Filter, "scala.collection.View$Filter", ({
  c4: 1,
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
  $thiz.bJ = ((n > 0) ? n : 0);
  return $thiz;
}
/** @constructor */
function $c_sc_View$Take() {
  this.bJ = 0;
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
$p.S = (function() {
  return this.aB().b();
});
$p.T = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.R = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().ez(this);
});
$p.x = (function() {
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
$p.S = (function() {
  return this.aB().b();
});
$p.R = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.a4 = (function() {
  return "SeqView";
});
$p.T = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.bN.a1() | 0))));
}
function $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.bN.a1() | 0))));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.b2 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.b2 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.g = (function(idx) {
  return this.b2.g(idx);
});
$p.d = (function() {
  return this.b2.d();
});
$p.b = (function() {
  return this.b2.b();
});
$p.h = (function() {
  return this.b2.h();
});
$p.j = (function() {
  return this.b2.j();
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
  $thiz.b3 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.b3 = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.g = (function(i) {
  return this.b3.g(((((this.d() - 1) | 0) - i) | 0));
});
$p.d = (function() {
  return this.b3.d();
});
$p.b = (function() {
  return this.b3.S();
});
$p.h = (function() {
  return this.b3.h();
});
$p.j = (function() {
  return this.b3.j();
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
  $thiz.bf = underlying;
  $thiz.ck = n;
  $ct_sc_View$Take__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Take() {
  this.bJ = 0;
  this.bf = null;
  this.ck = 0;
}
$p = $c_sc_SeqView$Take.prototype = new $h_sc_View$Take();
$p.constructor = $c_sc_SeqView$Take;
/** @constructor */
function $h_sc_SeqView$Take() {
}
$h_sc_SeqView$Take.prototype = $p;
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.g = (function(idx) {
  if ((idx < this.ck)) {
    return this.bf.g(idx);
  } else {
    throw ((this.bf.h() >= 0) ? $m_scg_CommonErrors$().b9(idx, ((this.h() - 1) | 0)) : $m_scg_CommonErrors$().fD(idx));
  }
});
$p.d = (function() {
  var self = this.bf.d();
  var that = this.bJ;
  return ((self < that) ? self : that);
});
$p.T = (function(ord) {
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
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.a4 = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.b2 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.a4 = (function() {
  return "IndexedSeqView";
});
$p.ak = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bQ: 1,
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
  this.b3 = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.a4 = (function() {
  return "IndexedSeqView";
});
$p.ak = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  bR: 1,
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
  this.bJ = 0;
  this.bf = null;
  this.ck = 0;
}
$p = $c_sc_IndexedSeqView$Take.prototype = new $h_sc_SeqView$Take();
$p.constructor = $c_sc_IndexedSeqView$Take;
/** @constructor */
function $h_sc_IndexedSeqView$Take() {
}
$h_sc_IndexedSeqView$Take.prototype = $p;
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.cz = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
$p.a4 = (function() {
  return "IndexedSeqView";
});
$p.ak = (function(n) {
  return this.cz(n);
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
  this.cS = null;
  this.cl = null;
  this.cS = underlying;
  this.cl = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.g = (function(n) {
  return this.cS.g(n);
});
$p.d = (function() {
  return this.cS.p;
});
$p.ag = (function() {
  return "ArrayBufferView";
});
$p.b = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.cl);
});
$p.S = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(this, this.cl);
});
$p.cz = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.cl);
});
$p.ak = (function(n) {
  return this.cz(n);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  cx: 1,
  bL: 1,
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
  $thiz.am = initialTail;
  return $thiz;
}
/** @constructor */
function $c_sci_LazyListBase() {
  this.am = null;
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
  this.bJ = 0;
  this.bf = null;
  this.ck = 0;
  this.bN = null;
  this.bN = mutationCount;
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
$p.S = (function() {
  return $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator(this);
});
$p.cz = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.bN);
});
$p.ak = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.bN);
});
var $d_scm_CheckedIndexedSeqView$Take = new $TypeData().i($c_scm_CheckedIndexedSeqView$Take, "scala.collection.mutable.CheckedIndexedSeqView$Take", ({
  cQ: 1,
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
  cN: 1
}));
function $f_scm_Buffer__takeInPlace__I__scm_Buffer($thiz, n) {
  var norm = $p_scm_Buffer__normalized__I__I($thiz, n);
  $thiz.d8(norm, (($thiz.d() - norm) | 0));
  return $thiz;
}
function $p_scm_Buffer__normalized__I__I($thiz, n) {
  var x = ((n > 0) ? n : 0);
  var y = $thiz.d();
  return ((x < y) ? x : y);
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.cX = null;
  this.cX = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.T = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.b8 = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.ak = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.l = (function() {
  return $m_s_util_hashing_MurmurHash3$().ez(this);
});
$p.x = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.j = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.aU = (function() {
  return $m_sjsr_WrappedVarArgs$().X();
});
$p.bt = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ah = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aC = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().ba(this);
});
$p.d = (function() {
  return (this.cX.length | 0);
});
$p.g = (function(idx) {
  return this.cX[idx];
});
$p.ag = (function() {
  return "WrappedVarArgs";
});
$p.c2 = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().en(coll);
});
$p.i = (function(v1) {
  return this.g((v1 | 0));
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  dV: 1,
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
  $thiz.P = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.P = head;
  $thiz.am = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  while (($thiz.P === $m_sci_LazyList$Uninitialized$())) {
    var x3 = $thiz.am;
    if ((x3 instanceof $c_jl_Thread)) {
      $p_sci_LazyList__selfRef$1__E($thiz);
    }
    if (false) {
      if ((x3.gj(), true)) {
        $p_sci_LazyList__selfRef$1__E($thiz);
      }
      x3.ge();
      continue;
    }
    if ($is_F0(x3)) {
      $m_sci_LazyList$().ev();
      var value = $m_jl_Thread$().dm;
      if (($thiz.am === x3)) {
        $thiz.am = value;
        var $x_1 = true;
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var ex = null;
        try {
          var l = $p_sci_LazyList__evaluated__sci_LazyList(x3.a1());
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          ex = e$2;
          var l = null;
        }
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().aJ();
          }
          var newTail = l.am;
        } else {
          var newTail = x3;
        }
        $m_sci_LazyList$().ev();
        var old = $thiz.am;
        $thiz.am = newTail;
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().aJ();
          }
          $thiz.P = l.P;
        }
        if (false) {
          old.gh();
        }
        if ((ex !== null)) {
          var x$proxy1 = ex;
          if ((x$proxy1 === null)) {
            $m_sr_Scala3RunTime$().aJ();
          }
          var $x_2 = x$proxy1;
          throw (($x_2 instanceof $c_sjs_js_JavaScriptException) ? $x_2.bR : $x_2);
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
    if (($thiz.P !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.am === null) ? $m_sci_LazyList$().y : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.c = (("" + b.c) + start);
  if (($thiz.P === $m_sci_LazyList$Uninitialized$())) {
    b.c = (b.c + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().y)) {
    var obj = $thiz.m();
    b.c = (("" + b.c) + obj);
    var cursor = $thiz;
    var scout = $thiz.O();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.P !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().y))) {
        scout = scout.O();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.P !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().y));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.c = (("" + b.c) + sep);
            var obj$1 = c.m();
            b.c = (("" + b.c) + obj$1);
            cursor = cursor.O();
            scout = scout.O();
            var this$3 = scout;
            if (((this$3.P !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().y))) {
              scout = scout.O();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.P !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().y)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.c = (("" + b.c) + sep);
        var obj$2 = c$1.m();
        b.c = (("" + b.c) + obj$2);
        cursor = cursor.O();
      }
      if ((!(cursor.P !== $m_sci_LazyList$Uninitialized$()))) {
        b.c = (("" + b.c) + sep);
        b.c = (b.c + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.O();
          scout = scout.O();
        }
        while (true) {
          var ct = cursor.O();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.c = (("" + b.c) + sep);
            var obj$3 = c$2.m();
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
  this.am = null;
  this.P = null;
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
$p.R = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.g = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.a4 = (function() {
  return "LinearSeq";
});
$p.j = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().y);
});
$p.h = (function() {
  return (((this.P !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().y)) ? 0 : (-1));
});
$p.m = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().y)) {
    throw new $c_ju_NoSuchElementException("head of empty lazy list");
  } else {
    return this.P;
  }
});
$p.O = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().y)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.am;
  }
});
$p.fx = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().y))) {
    these = these.O();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().y)) {
      return this;
    }
    these = these.O();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().y)) {
      return this;
    }
    these = these.O();
    if ((these === those)) {
      return this;
    }
    those = those.O();
  }
  return this;
});
$p.b = (function() {
  return (((this.P !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().y)) ? $m_sc_Iterator$().Y : new $c_sci_LazyList$LazyIterator(this));
});
$p.bt = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().y))) {
      f.i(\u03b4this$tailLocal1.m());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.O();
    } else {
      return (void 0);
    }
  }
});
$p.ag = (function() {
  return "LazyList";
});
$p.fr = (function(n) {
  return ((n <= 0) ? this : (((this.P !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().y)) ? $m_sci_LazyList$().y : $m_sci_LazyList$().fX(this, n)));
});
$p.aI = (function(sb, start, sep, end) {
  this.fx();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.I, start, sep, end);
  return sb;
});
$p.x = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").c;
});
$p.aA = (function() {
  return $m_sci_LazyList$();
});
$p.C = (function() {
  return this.O();
});
$p.eg = (function(n) {
  return this.fr(n);
});
$p.i = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  aM: 1,
  cp: 1,
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
$p.ae = (function(elems) {
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
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.a4 = (function() {
  return "IndexedSeq";
});
$p.b8 = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.cr = (function(coll) {
  return $m_sci_ArraySeq$().d6(coll, this.B());
});
$p.aU = (function() {
  return $m_sci_ArraySeq$().cv(this.B());
});
$p.ga = (function(n) {
  return (($m_jl_reflect_Array$().N(this.a5()) <= n) ? this : $m_sci_ArraySeq$().cA($m_sc_ArrayOps$().g0(this.a5(), 0, n)));
});
$p.ag = (function() {
  return "ArraySeq";
});
$p.ah = (function(xs, start, len) {
  var srcLen = this.d();
  var destLen = $m_jl_reflect_Array$().N(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aT(this.a5(), 0, xs, start, copied);
  }
  return copied;
});
$p.H = (function(ord) {
  if (($m_jl_reflect_Array$().N(this.a5()) <= 1)) {
    return this;
  } else {
    var original = this.a5();
    var newLength = this.d();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    if ($d_O.R($objectGetClass(original).n.Q().n)) {
      var a = $m_ju_Arrays$().d3(original, newLength, $m_sr_ScalaRunTime$().cp(new $ac_O(0)));
    } else {
      var dest = new $ac_O(newLength);
      $m_s_Array$().aT(original, 0, dest, 0, $m_jl_reflect_Array$().N(original));
      var a = dest;
    }
    $m_ju_Arrays$().bv(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.aA = (function() {
  return $m_sci_ArraySeq$().dH;
});
$p.ak = (function(n) {
  return this.ga(n);
});
$p.T = (function(ord) {
  return this.H(ord);
});
$p.c2 = (function(coll) {
  return $m_sci_ArraySeq$().d6(coll, this.B());
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
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ak = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.h = (function() {
  return this.d();
});
$p.a4 = (function() {
  return "IndexedSeq";
});
$p.b8 = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.ep = (function(coll) {
  var evidence$1 = this.B();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.L();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.h();
  var it = coll.b();
  while (it.f()) {
    var elem = it.e();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cy(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().ct($m_scm_ArrayBuilder$().cx(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.aU = (function() {
  return $m_scm_ArraySeq$().cv(this.B());
});
$p.ag = (function() {
  return "ArraySeq";
});
$p.ah = (function(xs, start, len) {
  var srcLen = this.d();
  var destLen = $m_jl_reflect_Array$().N(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aT(this.ap(), 0, xs, start, copied);
  }
  return copied;
});
$p.g7 = (function(ord) {
  return $m_scm_ArraySeq$().ct($m_sc_ArrayOps$().g8(this.ap(), ord));
});
$p.aA = (function() {
  return $m_scm_ArraySeq$().dO;
});
$p.cr = (function(coll) {
  return this.ep(coll);
});
$p.c2 = (function(coll) {
  return this.ep(coll);
});
$p.T = (function(ord) {
  return this.g7(ord);
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
$p.c0 = (function(i) {
  return this.aN.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.aN, this$1.z);
});
$p.H = (function(ord) {
  if ((this.aN.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Boolean$()))) {
    var this$1 = this.aN;
    var a = this$1.u();
    $m_s_util_Sorting$().dc(a, 0, a.a.length, $m_s_math_Ordering$Boolean$());
    return new $c_sci_ArraySeq$ofBoolean(a);
  } else {
    return $c_sci_ArraySeq.prototype.H.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aN);
});
$p.a5 = (function() {
  return this.aN;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.g = (function(i) {
  return this.c0(i);
});
$p.i = (function(v1) {
  return this.c0((v1 | 0));
});
$p.T = (function(ord) {
  return this.H(ord);
});
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
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
$p.bS = (function(i) {
  return this.aO.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.aO, this$1.z);
});
$p.H = (function(ord) {
  if ((this.aO.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Byte$()))) {
    var this$1 = this.aO;
    var a = this$1.u();
    $m_ju_Arrays$().eA(a);
    return new $c_sci_ArraySeq$ofByte(a);
  } else {
    return $c_sci_ArraySeq.prototype.H.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aO);
});
$p.a5 = (function() {
  return this.aO;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.g = (function(i) {
  return this.bS(i);
});
$p.i = (function(v1) {
  return this.bS((v1 | 0));
});
$p.T = (function(ord) {
  return this.H(ord);
});
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
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
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.aF = null;
  this.aF = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.d = (function() {
  return this.aF.a.length;
});
$p.bT = (function(i) {
  return this.aF.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.aF, this$1.z);
});
$p.H = (function(ord) {
  if ((this.aF.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Char$()))) {
    var this$1 = this.aF;
    var a = this$1.u();
    $m_ju_Arrays$().eB(a);
    return new $c_sci_ArraySeq$ofChar(a);
  } else {
    return $c_sci_ArraySeq.prototype.H.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aF);
});
$p.aI = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.aF).aI(sb, start, sep, end);
});
$p.a5 = (function() {
  return this.aF;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.g = (function(i) {
  return $bC(this.bT(i));
});
$p.i = (function(v1) {
  return $bC(this.bT((v1 | 0)));
});
$p.T = (function(ord) {
  return this.H(ord);
});
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
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
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.bg = null;
  this.bg = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.d = (function() {
  return this.bg.a.length;
});
$p.bU = (function(i) {
  return this.bg.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bg, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bg);
});
$p.a5 = (function() {
  return this.bg;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.g = (function(i) {
  return this.bU(i);
});
$p.i = (function(v1) {
  return this.bU((v1 | 0));
});
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
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
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.bh = null;
  this.bh = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.d = (function() {
  return this.bh.a.length;
});
$p.bV = (function(i) {
  return this.bh.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bh, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bh);
});
$p.a5 = (function() {
  return this.bh;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.g = (function(i) {
  return this.bV(i);
});
$p.i = (function(v1) {
  return this.bV((v1 | 0));
});
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
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
$p.bW = (function(i) {
  return this.aP.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.aP, this$1.z);
});
$p.H = (function(ord) {
  if ((this.aP.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Int$()))) {
    var this$1 = this.aP;
    var a = this$1.u();
    $m_ju_Arrays$().eC(a);
    return new $c_sci_ArraySeq$ofInt(a);
  } else {
    return $c_sci_ArraySeq.prototype.H.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aP);
});
$p.a5 = (function() {
  return this.aP;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.g = (function(i) {
  return this.bW(i);
});
$p.i = (function(v1) {
  return this.bW((v1 | 0));
});
$p.T = (function(ord) {
  return this.H(ord);
});
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
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
$p.bX = (function(i) {
  var $x_1 = this.aQ.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.aQ, this$1.z);
});
$p.H = (function(ord) {
  if ((((this.aQ.a.length >>> 1) | 0) <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Long$()))) {
    var this$1 = this.aQ;
    var a = this$1.u();
    $m_ju_Arrays$().eD(a);
    return new $c_sci_ArraySeq$ofLong(a);
  } else {
    return $c_sci_ArraySeq.prototype.H.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aQ);
});
$p.a5 = (function() {
  return this.aQ;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.g = (function(i) {
  return this.bX(i);
});
$p.i = (function(v1) {
  return this.bX((v1 | 0));
});
$p.T = (function(ord) {
  return this.H(ord);
});
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
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
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aG = null;
  this.aG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.B = (function() {
  return $m_s_reflect_ClassTag$().cq($objectGetClass(this.aG).n.Q());
});
$p.d = (function() {
  return this.aG.a.length;
});
$p.g = (function(i) {
  return this.aG.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.aG, this$1.z);
});
$p.eF = (function(ord) {
  if ((this.aG.a.length <= 1)) {
    return this;
  } else {
    var this$1 = this.aG;
    var a = this$1.u();
    $m_ju_Arrays$().bv(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aG);
});
$p.a5 = (function() {
  return this.aG;
});
$p.i = (function(v1) {
  return this.g((v1 | 0));
});
$p.H = (function(ord) {
  return this.eF(ord);
});
$p.T = (function(ord) {
  return this.eF(ord);
});
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
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
$p.bY = (function(i) {
  return this.aR.a[i];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.aR, this$1.z);
});
$p.H = (function(ord) {
  if ((this.aR.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Short$()))) {
    var this$1 = this.aR;
    var a = this$1.u();
    $m_ju_Arrays$().eE(a);
    return new $c_sci_ArraySeq$ofShort(a);
  } else {
    return $c_sci_ArraySeq.prototype.H.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aR);
});
$p.a5 = (function() {
  return this.aR;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.g = (function(i) {
  return this.bY(i);
});
$p.i = (function(v1) {
  return this.bY((v1 | 0));
});
$p.T = (function(ord) {
  return this.H(ord);
});
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  ch: 1,
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
  this.bK = null;
  this.bK = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.d = (function() {
  return this.bK.a.length;
});
$p.bZ = (function(i) {
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bK, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bK);
});
$p.a5 = (function() {
  return this.bK;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.g = (function(i) {
  this.bZ(i);
});
$p.i = (function(v1) {
  this.bZ((v1 | 0));
});
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  ci: 1,
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
function $p_sci_List__filterCommon__F1__Z__sci_List($thiz, p, isFlipped) {
  return $p_sci_List__noneIn$1__F1__Z__sci_List__sci_List($thiz, p, isFlipped, $thiz);
}
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.j()) | 0);
    } else {
      if ((!xs$tailLocal1.j())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.C();
        i$tailLocal1 = i$tailLocal1$tmp1;
        xs$tailLocal1 = xs$tailLocal1$tmp1;
        continue;
      }
      return (-1);
    }
  }
}
function $p_sci_List__noneIn$1__F1__Z__sci_List__sci_List($thiz, p$1, isFlipped$1, l) {
  var l$tailLocal1 = l;
  while (true) {
    if (l$tailLocal1.j()) {
      return $m_sci_Nil$();
    } else {
      var h = l$tailLocal1.m();
      var t = l$tailLocal1.C();
      if (((!(!p$1.i(h))) !== isFlipped$1)) {
        return $p_sci_List__allIn$1__F1__Z__sci_List__sci_List__sci_List($thiz, p$1, isFlipped$1, l$tailLocal1, t);
      } else {
        l$tailLocal1 = t;
      }
    }
  }
}
function $p_sci_List__allIn$1__F1__Z__sci_List__sci_List__sci_List($thiz, p$2, isFlipped$2, start, remaining) {
  var remaining$tailLocal1 = remaining;
  while (true) {
    if (remaining$tailLocal1.j()) {
      return start;
    } else {
      var x = remaining$tailLocal1.m();
      if (((!(!p$2.i(x))) !== isFlipped$2)) {
        remaining$tailLocal1 = remaining$tailLocal1.C();
      } else {
        return $p_sci_List__partialFill$1__F1__Z__sci_List__sci_List__sci_List($thiz, p$2, isFlipped$2, start, remaining$tailLocal1);
      }
    }
  }
}
function $p_sci_List__partialFill$1__F1__Z__sci_List__sci_List__sci_List($thiz, p$3, isFlipped$3, origStart, firstMiss) {
  var newHead = new $c_sci_$colon$colon(origStart.m(), $m_sci_Nil$());
  var toProcess = origStart.C();
  var currentLast = newHead;
  while ((toProcess !== firstMiss)) {
    var newElem = new $c_sci_$colon$colon(toProcess.m(), $m_sci_Nil$());
    currentLast.a7 = newElem;
    currentLast = newElem;
    toProcess = toProcess.C();
  }
  var next = firstMiss.C();
  var nextToCopy = next;
  while ((!next.j())) {
    var head = next.m();
    if (((!(!p$3.i(head))) !== isFlipped$3)) {
      next = next.C();
    } else {
      while ((nextToCopy !== next)) {
        var newElem$2 = new $c_sci_$colon$colon(nextToCopy.m(), $m_sci_Nil$());
        currentLast.a7 = newElem$2;
        currentLast = newElem$2;
        nextToCopy = nextToCopy.C();
      }
      nextToCopy = next.C();
      next = next.C();
    }
  }
  if ((!nextToCopy.j())) {
    currentLast.a7 = nextToCopy;
  }
  return newHead;
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
$p.a4 = (function() {
  return "LinearSeq";
});
$p.b = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.T = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.eW = (function(prefix) {
  if (this.j()) {
    return prefix;
  } else if (prefix.j()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.m(), this);
    var curr = result;
    var that = prefix.C();
    while ((!that.j())) {
      var temp = new $c_sci_$colon$colon(that.m(), this);
      curr.a7 = temp;
      curr = temp;
      that = that.C();
    }
    return result;
  }
});
$p.j = (function() {
  return (this === $m_sci_Nil$());
});
$p.ba = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.eW(prefix);
  }
  if ((prefix.h() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.j()) {
      return prefix.aC();
    }
  }
  var iter = prefix.b();
  if (iter.f()) {
    var result = new $c_sci_$colon$colon(iter.e(), this);
    var curr = result;
    while (iter.f()) {
      var temp = new $c_sci_$colon$colon(iter.e(), this);
      curr.a7 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.bt = (function(f) {
  var these = this;
  while ((!these.j())) {
    f.i(these.m());
    these = these.C();
  }
});
$p.d = (function() {
  var these = this;
  var len = 0;
  while ((!these.j())) {
    len = ((1 + len) | 0);
    these = these.C();
  }
  return len;
});
$p.R = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.ag = (function() {
  return "List";
});
$p.aC = (function() {
  return this;
});
$p.aA = (function() {
  return $m_sci_List$();
});
$p.b8 = (function(pred) {
  return $p_sci_List__filterCommon__F1__Z__sci_List(this, pred, false);
});
$p.eg = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.i = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.bl = null;
  this.bl = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.d = (function() {
  return this.bl.a.length;
});
$p.c0 = (function(index) {
  return this.bl.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bl, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bl);
});
$p.ap = (function() {
  return this.bl;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.g = (function(i) {
  return this.c0(i);
});
$p.i = (function(v1) {
  return this.c0((v1 | 0));
});
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
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
function $c_scm_ArraySeq$ofByte(array) {
  this.bm = null;
  this.bm = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.d = (function() {
  return this.bm.a.length;
});
$p.bS = (function(index) {
  return this.bm.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bm, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bm);
});
$p.ap = (function() {
  return this.bm;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.g = (function(i) {
  return this.bS(i);
});
$p.i = (function(v1) {
  return this.bS((v1 | 0));
});
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
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
function $c_scm_ArraySeq$ofChar(array) {
  this.an = null;
  this.an = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.d = (function() {
  return this.an.a.length;
});
$p.bT = (function(index) {
  return this.an.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.an, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.an);
});
$p.aI = (function(sb, start, sep, end) {
  var jsb = sb.I;
  if ((start.length !== 0)) {
    jsb.c = (("" + jsb.c) + start);
  }
  var len = this.an.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.e5(this.an);
    } else {
      jsb.d();
      var c = this.an.a[0];
      var str = ("" + $cToS(c));
      jsb.c = (jsb.c + str);
      var i = 1;
      while ((i < len)) {
        jsb.c = (("" + jsb.c) + sep);
        var c$1 = this.an.a[i];
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
$p.ap = (function() {
  return this.an;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.g = (function(i) {
  return $bC(this.bT(i));
});
$p.i = (function(v1) {
  return $bC(this.bT((v1 | 0)));
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
  this.bn = null;
  this.bn = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.d = (function() {
  return this.bn.a.length;
});
$p.bU = (function(index) {
  return this.bn.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bn, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bn);
});
$p.ap = (function() {
  return this.bn;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.g = (function(i) {
  return this.bU(i);
});
$p.i = (function(v1) {
  return this.bU((v1 | 0));
});
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
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
function $c_scm_ArraySeq$ofFloat(array) {
  this.bo = null;
  this.bo = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.d = (function() {
  return this.bo.a.length;
});
$p.bV = (function(index) {
  return this.bo.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bo, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bo);
});
$p.ap = (function() {
  return this.bo;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.g = (function(i) {
  return this.bV(i);
});
$p.i = (function(v1) {
  return this.bV((v1 | 0));
});
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
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
function $c_scm_ArraySeq$ofInt(array) {
  this.bp = null;
  this.bp = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.d = (function() {
  return this.bp.a.length;
});
$p.bW = (function(index) {
  return this.bp.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bp, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bp);
});
$p.ap = (function() {
  return this.bp;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.g = (function(i) {
  return this.bW(i);
});
$p.i = (function(v1) {
  return this.bW((v1 | 0));
});
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
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
function $c_scm_ArraySeq$ofLong(array) {
  this.bq = null;
  this.bq = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.d = (function() {
  return ((this.bq.a.length >>> 1) | 0);
});
$p.bX = (function(index) {
  var $x_1 = this.bq.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bq, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bq);
});
$p.ap = (function() {
  return this.bq;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.g = (function(i) {
  return this.bX(i);
});
$p.i = (function(v1) {
  return this.bX((v1 | 0));
});
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
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
function $c_scm_ArraySeq$ofRef(array) {
  this.b4 = null;
  this.b4 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.B = (function() {
  return $m_s_reflect_ClassTag$().cq($objectGetClass(this.b4).n.Q());
});
$p.d = (function() {
  return this.b4.a.length;
});
$p.g = (function(index) {
  return this.b4.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.b4, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b4);
});
$p.ap = (function() {
  return this.b4;
});
$p.i = (function(v1) {
  return this.g((v1 | 0));
});
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
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
function $c_scm_ArraySeq$ofShort(array) {
  this.br = null;
  this.br = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.d = (function() {
  return this.br.a.length;
});
$p.bY = (function(index) {
  return this.br.a[index];
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.br, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.br);
});
$p.ap = (function() {
  return this.br;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.g = (function(i) {
  return this.bY(i);
});
$p.i = (function(v1) {
  return this.bY((v1 | 0));
});
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cJ: 1,
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
  this.bL = null;
  this.bL = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.d = (function() {
  return this.bL.a.length;
});
$p.bZ = (function(index) {
});
$p.l = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.G(this.bL, this$1.z);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bL);
});
$p.ap = (function() {
  return this.bL;
});
$p.B = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.g = (function(i) {
  this.bZ(i);
});
$p.i = (function(v1) {
  this.bZ((v1 | 0));
});
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cK: 1,
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
  this.cQ = null;
  this.a7 = null;
  this.cQ = head;
  this.a7 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.bu = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.aV = (function() {
  return 2;
});
$p.aX = (function() {
  return "::";
});
$p.aW = (function(n) {
  if ((n === 0)) {
    return this.cQ;
  }
  if ((n === 1)) {
    return this.a7;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.m = (function() {
  return this.cQ;
});
$p.C = (function() {
  return this.a7;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  c7: 1,
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
  a9: 1
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
$p.bu = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.aV = (function() {
  return 0;
});
$p.aX = (function() {
  return "Nil";
});
$p.aW = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.fA = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.g9 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.h = (function() {
  return 0;
});
$p.b = (function() {
  return $m_sc_Iterator$().Y;
});
$p.m = (function() {
  this.fA();
});
$p.C = (function() {
  this.g9();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ct: 1,
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
  a9: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.I = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.I = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.ae = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aj = (function(size) {
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ak = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.I.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a4 = (function() {
  return "IndexedSeq";
});
$p.aU = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
$p.d = (function() {
  return this.I.d();
});
$p.h = (function() {
  return this.I.d();
});
$p.f3 = (function(x) {
  var this$1 = this.I;
  var str = ("" + $cToS(x));
  this$1.c = (this$1.c + str);
  return this;
});
$p.x = (function() {
  return this.I.c;
});
$p.e6 = (function(xs) {
  if (false) {
    var this$3 = this.I;
    var str = xs.gd;
    this$3.c = (("" + this$3.c) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.I.e5(xs.an);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.I;
    var s = xs.I;
    this$4.c = (("" + this$4.c) + s);
  } else {
    var ks = xs.h();
    if ((ks !== 0)) {
      var b = this.I;
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
$p.j = (function() {
  return (this.I.d() === 0);
});
$p.g = (function(i) {
  return $bC(this.I.e8(i));
});
$p.i = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.I.e8(i));
});
$p.cr = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).e6(coll);
});
$p.c2 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).e6(coll);
});
$p.a0 = (function(elem) {
  return this.f3($uC(elem));
});
$p.ai = (function() {
  return this.I.c;
});
$p.aA = (function() {
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
  var buf = new $c_scm_ListBuffer().da($thiz);
  $thiz.W = buf.W;
  $thiz.ao = buf.ao;
  $thiz.cm = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.cn = ((1 + $thiz.cn) | 0);
  if ($thiz.cm) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
function $p_scm_ListBuffer__predecessor__I__sci_$colon$colon($thiz, i) {
  if ((i === 0)) {
    return null;
  } else if ((i === $thiz.M)) {
    return $thiz.ao;
  } else {
    var j = ((i - 1) | 0);
    var p = $thiz.W;
    while ((j > 0)) {
      p = p.C();
      j = ((j - 1) | 0);
    }
    return p;
  }
}
function $p_scm_ListBuffer__getNext__sci_$colon$colon__sci_List($thiz, p) {
  return ((p === null) ? $thiz.W : p.a7);
}
function $p_scm_ListBuffer__removeAfter__sci_$colon$colon__I__V($thiz, prev, n) {
  var nx = $p_scm_ListBuffer__ahead$1__sci_List__I__sci_List($thiz, $p_scm_ListBuffer__getNext__sci_$colon$colon__sci_List($thiz, prev), n);
  if ((prev === null)) {
    $thiz.W = nx;
  } else {
    prev.a7 = nx;
  }
  if (nx.j()) {
    $thiz.ao = prev;
  }
  $thiz.M = (($thiz.M - n) | 0);
}
function $p_scm_ListBuffer__ahead$1__sci_List__I__sci_List($thiz, p, n) {
  var n$tailLocal1 = n;
  var p$tailLocal1 = p;
  while (true) {
    if ((n$tailLocal1 === 0)) {
      return p$tailLocal1;
    } else {
      var p$tailLocal1$tmp1 = p$tailLocal1.C();
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      p$tailLocal1 = p$tailLocal1$tmp1;
      n$tailLocal1 = n$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.cn = 0;
  this.W = null;
  this.ao = null;
  this.cm = false;
  this.M = 0;
  this.cn = 0;
  this.W = $m_sci_Nil$();
  this.ao = null;
  this.cm = false;
  this.M = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.b8 = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.aj = (function(size) {
});
$p.b = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.W.b(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.cn)));
});
$p.g = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.W, i);
});
$p.d = (function() {
  return this.M;
});
$p.h = (function() {
  return this.M;
});
$p.j = (function() {
  return (this.M === 0);
});
$p.aC = (function() {
  this.cm = (!this.j());
  return this.W;
});
$p.f7 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.M === 0)) {
    this.W = last1;
  } else {
    var x$proxy2 = this.ao;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().aJ();
    }
    x$proxy2.a7 = last1;
  }
  this.ao = last1;
  this.M = ((1 + this.M) | 0);
  return this;
});
$p.da = (function(xs) {
  var it = xs.b();
  if (it.f()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
    this.W = last0;
    while (it.f()) {
      var last1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      last0.a7 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.M = len;
    this.ao = last0;
  }
  return this;
});
$p.f2 = (function(xs) {
  var it = xs.b();
  if (it.f()) {
    var fresh = new $c_scm_ListBuffer().da(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.M === 0)) {
      this.W = fresh.W;
    } else {
      var x$proxy3 = this.ao;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().aJ();
      }
      x$proxy3.a7 = fresh.W;
    }
    this.ao = fresh.ao;
    this.M = ((this.M + fresh.M) | 0);
  }
  return this;
});
$p.d8 = (function(idx, count) {
  if ((count > 0)) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if (((idx < 0) || (((idx + count) | 0) > this.M))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((((idx + " to ") + ((idx + count) | 0)) + " is out of bounds (min 0, max ") + ((this.M - 1) | 0)) + ")"));
    }
    $p_scm_ListBuffer__removeAfter__sci_$colon$colon__I__V(this, $p_scm_ListBuffer__predecessor__I__sci_$colon$colon(this, idx), count);
  } else if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("removing negative number of elements: " + count));
  }
});
$p.a4 = (function() {
  return "ListBuffer";
});
$p.aA = (function() {
  return $m_scm_ListBuffer$();
});
$p.i = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.W, i);
});
$p.ai = (function() {
  return this.aC();
});
$p.a0 = (function(elem) {
  return this.f7(elem);
});
$p.ae = (function(elems) {
  return this.f2(elems);
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
  $thiz.av = 0;
  $thiz.a8 = initialElements;
  $thiz.p = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
function $p_scm_ArrayBuffer__reduceToSize__I__V($thiz, n) {
  $thiz.av = ((1 + $thiz.av) | 0);
  $m_ju_Arrays$().ft($thiz.a8, n, $thiz.p, null);
  $thiz.p = n;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.av = 0;
  this.a8 = null;
  this.p = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.b = (function() {
  return this.a6().b();
});
$p.S = (function() {
  return this.a6().S();
});
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ak = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = this.p;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.b8 = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.h = (function() {
  return this.p;
});
$p.d4 = (function(n) {
  this.a8 = $m_scm_ArrayBuffer$().ey(this.a8, this.p, n);
});
$p.aj = (function(size) {
  if (((size > this.p) && (size >= 1))) {
    this.d4(size);
  }
});
$p.g = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().b9(n, ((this.p - 1) | 0));
  }
  if ((hi > this.p)) {
    throw $m_scg_CommonErrors$().b9(((hi - 1) | 0), ((this.p - 1) | 0));
  }
  return this.a8.a[n];
});
$p.gc = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().b9(index, ((this.p - 1) | 0));
  }
  if ((hi > this.p)) {
    throw $m_scg_CommonErrors$().b9(((hi - 1) | 0), ((this.p - 1) | 0));
  }
  this.av = ((1 + this.av) | 0);
  this.a8.a[index] = elem;
});
$p.d = (function() {
  return this.p;
});
$p.a6 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.av)));
});
$p.aS = (function(elem) {
  this.av = ((1 + this.av) | 0);
  var newSize = ((1 + this.p) | 0);
  if ((this.a8.a.length <= ((newSize - 1) | 0))) {
    this.d4(newSize);
  }
  this.p = newSize;
  this.a8.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.e3 = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.p;
    if ((elemsLength > 0)) {
      this.av = ((1 + this.av) | 0);
      this.d4(((this.p + elemsLength) | 0));
      $m_s_Array$().aT(elems.a8, 0, this.a8, this.p, elemsLength);
      this.p = ((this.p + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.d8 = (function(index, count) {
  if ((count > 0)) {
    var hi = ((index + count) | 0);
    if ((index < 0)) {
      throw $m_scg_CommonErrors$().b9(index, ((this.p - 1) | 0));
    }
    if ((hi > this.p)) {
      throw $m_scg_CommonErrors$().b9(((hi - 1) | 0), ((this.p - 1) | 0));
    }
    $m_s_Array$().aT(this.a8, ((index + count) | 0), this.a8, index, ((this.p - ((index + count) | 0)) | 0));
    $p_scm_ArrayBuffer__reduceToSize__I__V(this, ((this.p - count) | 0));
  } else if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("removing negative number of elements: " + count));
  }
});
$p.a4 = (function() {
  return "ArrayBuffer";
});
$p.ah = (function(xs, start, len) {
  var srcLen = this.p;
  var destLen = $m_jl_reflect_Array$().N(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aT(this.a8, 0, xs, start, copied);
  }
  return copied;
});
$p.i = (function(v1) {
  return this.g((v1 | 0));
});
$p.aA = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.a0 = (function(elem) {
  return this.aS(elem);
});
$p.ae = (function(elems) {
  return this.e3(elems);
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
  $thiz.aw = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.aw = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.aj = (function(size) {
});
$p.a4 = (function() {
  return "IndexedSeq";
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.S = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aB = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.ak = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.R = (function(len) {
  var x = (this.aw.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.b8 = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.g = (function(index) {
  return this.aw[index];
});
$p.d = (function() {
  return (this.aw.length | 0);
});
$p.h = (function() {
  return (this.aw.length | 0);
});
$p.d8 = (function(n, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  if (((n < 0) || ((count > 0) && (((n + count) | 0) > (this.aw.length | 0))))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  this.aw.splice(n, count);
});
$p.ag = (function() {
  return "WrappedArray";
});
$p.ai = (function() {
  return this;
});
$p.a0 = (function(elem) {
  this.aw.push(elem);
  return this;
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  return this.aw[index];
});
$p.aA = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dT: 1,
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
