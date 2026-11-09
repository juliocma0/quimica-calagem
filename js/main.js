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
  return (arg0.$classData.Z ? arg0.x() : $objectClone(arg0));
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
        return null.h8();
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
        return instance.h4(x0);
      }
    }
  }
}
function $dp_compareTo__T__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__compareTo__T__I(instance, x0);
  } else {
    return instance.h5(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.aC(x0);
  } else {
    return $c_O.prototype.aC.call(instance, x0);
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
        return instance.n();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.n.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.h9(x0);
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
$p.n = (function() {
  return $systemIdentityHashCode(this);
});
$p.aC = (function(that) {
  return (this === that);
});
$p.r = (function() {
  var i = this.n();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.r();
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
$p.x = (function() {
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
    u: 1,
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
  $p.x = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    u: 1,
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
  return $thiz.cL.a[$thiz.cd];
}
function $p_Lcalagem_Interface__criarControles__V($thiz) {
  $thiz.b5.className = "painel-controles";
  $thiz.bj.className = "informacoes";
  $p_Lcalagem_Interface__pHCriarEscala__V($thiz);
  $thiz.cc.textContent = "H\u207a: --";
  $thiz.ci.textContent = "Rea\u00e7\u00f5es: --";
  $thiz.bj.appendChild($thiz.cc);
  $thiz.bj.appendChild($thiz.ci);
  $thiz.b5.appendChild($thiz.bj);
  var botoes = document.createElement("div");
  botoes.className = "botoes";
  var botaoCalcario = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Adicionar calc\u00e1rio", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.aF.fO(5);
  })));
  var botaoPausa = new $c_sr_ObjectRef(null);
  botaoPausa.ag = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Pausar", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.bk = (!$thiz.bk);
    $thiz.aF.bH = (!$thiz.bk);
    if ($thiz.bk) {
      botaoPausa.ag.textContent = "Continuar";
    } else {
      botaoPausa.ag.textContent = "Pausar";
    }
  })));
  var botaoReiniciar = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Reiniciar", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.aF.f6();
    $thiz.bk = false;
    $thiz.aF.bH = true;
    botaoPausa.ag.textContent = "Pausar";
    $thiz.bF = 0.0;
    $p_Lcalagem_Interface__atualizarInformacoes__V($thiz);
    $thiz.cj.dm();
  })));
  var botaoVelocidade = new $c_sr_ObjectRef(null);
  botaoVelocidade.ag = $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, "Velocidade: 1x", new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $thiz.cd = ((((1 + $thiz.cd) | 0) % $checkIntDivisor($thiz.cL.a.length)) | 0);
    botaoVelocidade.ag.textContent = (("Velocidade: " + $p_Lcalagem_Interface__velocidadeAtual__D($thiz)) + "x");
  })));
  botoes.appendChild(botaoCalcario);
  botoes.appendChild(botaoPausa.ag);
  botoes.appendChild(botaoReiniciar);
  botoes.appendChild(botaoVelocidade.ag);
  $thiz.b5.appendChild(botoes);
  var simulacaoContainer = document.getElementById("simulacao-container");
  simulacaoContainer.appendChild($thiz.b5);
}
function $p_Lcalagem_Interface__criarBotao__T__F0__Lorg_scalajs_dom_HTMLButtonElement($thiz, texto, acao) {
  var botao = document.createElement("button");
  botao.textContent = texto;
  botao.className = "botao";
  botao.onclick = ((_$1$2) => {
    acao.a4();
  });
  return botao;
}
function $p_Lcalagem_Interface__pHCriarEscala__V($thiz) {
  $thiz.ce.className = "ph-escala";
  $thiz.cf.className = "ph-marca";
  $thiz.ce.appendChild($thiz.cf);
  $thiz.cg.className = "ph-rotulo";
  var i = 0;
  while (true) {
    var x0 = i;
    var rotulo = document.createElement("span");
    rotulo.textContent = ("" + x0);
    $thiz.cg.appendChild(rotulo);
    if ((i === 14)) {
      break;
    }
    i = ((1 + i) | 0);
  }
  $thiz.ch.textContent = "pH: --";
  $thiz.bj.appendChild($thiz.ch);
  $thiz.b5.appendChild($thiz.ce);
  $thiz.b5.appendChild($thiz.cg);
}
function $p_Lcalagem_Interface__atualizarInformacoes__V($thiz) {
  var pH = $thiz.aF.f3();
  var y = (+Math.min(14.0, pH));
  var pHLimitado = (+Math.max(0.0, y));
  var posicao = (100.0 * (pHLimitado / 14.0));
  $thiz.ch.textContent = $m_sc_StringOps$().gf("pH: %.2f", $m_sr_ScalaRunTime$().gi(new $ac_O([pH])));
  $thiz.cc.textContent = ("H\u207a: " + $thiz.aF.f5());
  $thiz.ci.textContent = ("Rea\u00e7\u00f5es: " + $thiz.aF.b8);
  $thiz.cf.style.left = (posicao + "%");
}
function $p_Lcalagem_Interface__animar__D__V($thiz, tempoAtual) {
  var dt = (($thiz.bF === 0.0) ? 0.0 : ((tempoAtual - $thiz.bF) / 1000.0));
  $thiz.bF = tempoAtual;
  $thiz.aF.fP((dt * $p_Lcalagem_Interface__velocidadeAtual__D($thiz)));
  $thiz.cj.dm();
  $p_Lcalagem_Interface__atualizarInformacoes__V($thiz);
  window.requestAnimationFrame(((tempoAtual$3) => {
    $p_Lcalagem_Interface__animar__D__V($thiz, (+tempoAtual$3));
  }));
}
/** @constructor */
function $c_Lcalagem_Interface(simulacao, renderizador) {
  this.aF = null;
  this.cj = null;
  this.bF = 0.0;
  this.b5 = null;
  this.bj = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.cc = null;
  this.ci = null;
  this.cL = null;
  this.cd = 0;
  this.bk = false;
  this.aF = simulacao;
  this.cj = renderizador;
  this.bF = 0.0;
  this.b5 = document.createElement("div");
  this.bj = document.createElement("div");
  this.ce = document.createElement("div");
  this.cf = document.createElement("div");
  this.cg = document.createElement("div");
  this.ch = document.createElement("span");
  this.cc = document.createElement("span");
  this.ci = document.createElement("span");
  this.cL = new $ac_D(new Float64Array([1.0, 2.0, 4.0]));
  this.cd = 0;
  this.bk = false;
}
$p = $c_Lcalagem_Interface.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Interface;
/** @constructor */
function $h_Lcalagem_Interface() {
}
$h_Lcalagem_Interface.prototype = $p;
$p.go = (function() {
  $p_Lcalagem_Interface__criarControles__V(this);
  $p_Lcalagem_Interface__atualizarInformacoes__V(this);
  this.cj.dm();
  window.requestAnimationFrame(((tempoAtual$3) => {
    $p_Lcalagem_Interface__animar__D__V(this, (+tempoAtual$3));
  }));
});
var $d_Lcalagem_Interface = new $TypeData().i($c_Lcalagem_Interface, "calagem.Interface", ({
  b2: 1
}));
function $s_Lcalagem_Main__main__AT__V(args) {
  $m_Lcalagem_Main$().gw(args);
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
$p.gw = (function(args) {
  var canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  canvas.className = "simulacao";
  var simulacaoContainer = document.getElementById("simulacao-container");
  simulacaoContainer.appendChild(canvas);
  var simulacao = new $c_Lcalagem_Simulacao(400.0, 400.0);
  var renderizador = new $c_Lcalagem_Renderizador(canvas, simulacao);
  simulacao.f6();
  new $c_Lcalagem_Interface(simulacao, renderizador).go();
});
var $d_Lcalagem_Main$ = new $TypeData().i($c_Lcalagem_Main$, "calagem.Main$", ({
  b3: 1
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
$p.g8 = (function(pHInicial, hidrogenioInicial, hidrogenioRestante) {
  if ((hidrogenioRestante <= 0)) {
    return 7.0;
  } else {
    var fracao = (hidrogenioRestante / hidrogenioInicial);
    var y = (pHInicial - (+Math.log10(fracao)));
    return (+Math.min(7.0, y));
  }
});
var $d_Lcalagem_Quimica$ = new $TypeData().i($c_Lcalagem_Quimica$, "calagem.Quimica$", ({
  b6: 1
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
  var x$15 = $s_Lcalagem_TipoParticula$__HidroxidoAluminio__Lcalagem_TipoParticula();
  if (((x$15 === null) ? (tipo === null) : (x$15 === tipo))) {
    return "#aedb5b";
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
  var x$15 = $s_Lcalagem_TipoParticula$__HidroxidoAluminio__Lcalagem_TipoParticula();
  if (((x$15 === null) ? (tipo === null) : (x$15 === tipo))) {
    return "#124e17";
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
  var x$15 = $s_Lcalagem_TipoParticula$__HidroxidoAluminio__Lcalagem_TipoParticula();
  if (((x$15 === null) ? (tipo === null) : (x$15 === tipo))) {
    return "Al(OH)3";
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
      var x$5 = $s_Lcalagem_TipoParticula$__HidroxidoAluminio__Lcalagem_TipoParticula();
      if (((x$5 === null) ? (tipo === null) : (x$5 === tipo))) {
        return 18.0;
      } else {
        var x$7 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
        if (((x$7 === null) ? (tipo === null) : (x$7 === tipo))) {
          return 14.0;
        } else {
          return 12.0;
        }
      }
    }
  }
}
function $p_Lcalagem_Renderizador__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, a, b) {
  var dx = (a.A - b.A);
  var dy = (a.B - b.B);
  var x = ((dx * dx) + (dy * dy));
  return (+Math.sqrt(x));
}
function $p_Lcalagem_Renderizador__desenhaConexao__Lcalagem_Particula__Lcalagem_Particula__D__V($thiz, carbonato, hidrogenio, distancia) {
  var y = (distancia / $thiz.cN);
  (+Math.min(1.0, y));
  $thiz.u.beginPath();
  $thiz.u.moveTo(carbonato.A, carbonato.B);
  $thiz.u.lineTo(hidrogenio.A, hidrogenio.B);
  $thiz.u.strokeStyle = "rgba(255, 100, 100)";
  $thiz.u.lineWidth = 2.0;
  $thiz.u.stroke();
}
function $p_Lcalagem_Renderizador__desenhaProximidades__V($thiz) {
  var this$1 = $thiz.ck.F;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it = this$1.a0().b();
  while (it.f()) {
    var elem = it.e();
    if (elem.K) {
      var x = elem.R;
      var x$2 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      b.aY(elem);
    }
  }
  var carbonatos = b.aa;
  var this$3 = $thiz.ck.F;
  $m_scm_ArrayBuffer$();
  var b$1 = new $c_scm_ArrayBuffer$$anon$1();
  var it$1 = this$3.a0().b();
  while (it$1.f()) {
    var elem$1 = it$1.e();
    if (elem$1.K) {
      var x$1 = elem$1.R;
      var x$2$1 = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
      var $x_2 = ((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      b$1.aY(elem$1);
    }
  }
  var hidrogenios = b$1.aa;
  var it$2 = carbonatos.a0().b();
  while (it$2.f()) {
    var x0 = it$2.e();
    $m_scm_ArrayBuffer$();
    var b$2 = new $c_scm_ArrayBuffer$$anon$1();
    var it$3 = hidrogenios.a0().b();
    while (it$3.f()) {
      var x0$1 = it$3.e();
      b$2.aY(new $c_T2(x0$1, $p_Lcalagem_Renderizador__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, x0, x0$1)));
    }
    var proxs = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(b$2.aa.bf(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => ((+_$1$2.bm) < $thiz.cN)))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => (+_$2$2.bm))), $m_s_math_Ordering$DeprecatedDoubleOrdering$()).am(2);
    if ((proxs.p === 2)) {
      var it$4 = proxs.a0().b();
      while (it$4.f()) {
        var x0$2 = it$4.e();
        matchResult5: {
          if ((x0$2 !== null)) {
            $p_Lcalagem_Renderizador__desenhaConexao__Lcalagem_Particula__Lcalagem_Particula__D__V($thiz, x0, x0$2.cn, (+x0$2.bm));
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
  this.cM = null;
  this.ck = null;
  this.u = null;
  this.cN = 0.0;
  this.cM = canvas;
  this.ck = simulacao;
  this.u = canvas.getContext("2d");
  this.cN = 75.0;
}
$p = $c_Lcalagem_Renderizador.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Renderizador;
/** @constructor */
function $h_Lcalagem_Renderizador() {
}
$h_Lcalagem_Renderizador.prototype = $p;
$p.dm = (function() {
  this.u.fillStyle = "#FFFFFF";
  this.u.fillRect(0.0, 0.0, (this.cM.width | 0), (this.cM.height | 0));
  $p_Lcalagem_Renderizador__desenhaProximidades__V(this);
  var this$4 = this.ck.F;
  var it = this$4.a0().b();
  while (it.f()) {
    var x0 = it.e();
    var r = $p_Lcalagem_Renderizador__raio__Lcalagem_TipoParticula__D(this, x0.R);
    var base = $p_Lcalagem_Renderizador__cor__Lcalagem_TipoParticula__T(this, x0.R);
    var grad = this.u.createRadialGradient((x0.A - (0.4 * r)), (x0.B - (0.45 * r)), (0.05 * r), x0.A, x0.B, (1.1 * r));
    grad.addColorStop(0.0, "#FFFFFF");
    grad.addColorStop(0.3, base);
    grad.addColorStop(0.5, base);
    grad.addColorStop(1.0, $p_Lcalagem_Renderizador__corEscuro__Lcalagem_TipoParticula__T(this, x0.R));
    this.u.beginPath();
    this.u.arc(x0.A, x0.B, (r - 0.7), 0.0, 6.283185307179586);
    this.u.fillStyle = grad;
    this.u.fill();
    this.u.fillStyle = "#000000";
    this.u.font = "10px Arial";
    this.u.textAlign = "center";
    this.u.textBaseline = "middle";
    this.u.shadowColor = "rgba(0, 0, 0, 0.35)";
    this.u.shadowBlur = 2.0;
    this.u.shadowOffsetX = 0.5;
    this.u.shadowOffsetY = 0.5;
    this.u.fillText($p_Lcalagem_Renderizador__rotulo__Lcalagem_TipoParticula__T(this, x0.R), x0.A, x0.B);
    this.u.shadowColor = "transparent";
    this.u.shadowBlur = 0.0;
    this.u.shadowOffsetX = 0.0;
    this.u.shadowOffsetY = 0.0;
  }
});
var $d_Lcalagem_Renderizador = new $TypeData().i($c_Lcalagem_Renderizador, "calagem.Renderizador", ({
  b7: 1
}));
function $p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, a, b) {
  return $m_jl_Math$().gl((a.A - b.A), (a.B - b.B));
}
function $p_Lcalagem_Simulacao__criarProdutosCalcario__Lcalagem_Particula__V($thiz, calcario) {
  $thiz.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula(), calcario.A, calcario.B));
  $thiz.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula(), calcario.A, calcario.B));
}
function $p_Lcalagem_Simulacao__reagir__V($thiz) {
  var this$1 = $thiz.F;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it = this$1.a0().b();
  while (it.f()) {
    var elem = it.e();
    if (elem.K) {
      var x = elem.R;
      var x$2 = $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      b.aY(elem);
    }
  }
  var carbonatos = b.aa.au();
  var this$9 = new $c_sc_IterableOps$WithFilter(carbonatos, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$2) => carbonato$2.K)));
  var f = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$3) => {
    var this$5 = $thiz.F;
    $m_scm_ArrayBuffer$();
    var b$1 = new $c_scm_ArrayBuffer$$anon$1();
    var it$1 = this$5.a0().b();
    while (it$1.f()) {
      var elem$1 = it$1.e();
      if (elem$1.K) {
        var x$1 = elem$1.R;
        var x$2$1 = $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
        var $x_2 = ((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1));
      } else {
        var $x_2 = false;
      }
      if (($x_2 && ($p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, elem$1, carbonato$3) < $thiz.dB))) {
        b$1.aY(elem$1);
      }
    }
    var hidrogenioProximo = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(b$1.aa, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((carbonato$2$1) => ((p$2) => $p_Lcalagem_Simulacao__distancia__Lcalagem_Particula__Lcalagem_Particula__D($thiz, p$2, carbonato$2$1)))(carbonato$3)), $m_s_math_Ordering$DeprecatedDoubleOrdering$()).am(2);
    if ((hidrogenioProximo.p === 2)) {
      carbonato$3.K = false;
      var it$2 = hidrogenioProximo.a0().b();
      while (it$2.f()) {
        var x0 = it$2.e();
        x0.K = false;
      }
      $thiz.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula(), carbonato$3.A, carbonato$3.B));
      $thiz.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula(), (carbonato$3.A + $thiz.dw), carbonato$3.B));
      $thiz.b8 = ((1 + $thiz.b8) | 0);
    }
  }));
  this$9.eP().bg(f);
}
function $p_Lcalagem_Simulacao__reagirAluminio__D__V($thiz, passo) {
  var self = (($thiz.f3() - $thiz.cS) / ($thiz.dy - $thiz.cS));
  var self$1 = (+Math.max(self, 0.0));
  var pHFator = (+Math.min(self$1, 1.0));
  var taxa = ($thiz.dv * pHFator);
  var x = ((-taxa) * passo);
  var probabilidade = (1.0 - (+Math.exp(x)));
  var this$7 = $thiz.F;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it = this$7.a0().b();
  while (it.f()) {
    var elem = it.e();
    if (elem.K) {
      var x$1 = elem.R;
      var x$2 = $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula();
      var $x_1 = ((x$1 === null) ? (x$2 === null) : (x$1 === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      b.aY(elem);
    }
  }
  var aluminios = b.aa.au();
  var this$13 = new $c_sc_IterableOps$WithFilter(aluminios, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((aluminio$2) => (aluminio$2.K && ($m_s_util_Random$().cy.f2() < probabilidade)))));
  var f = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((aluminio$3) => {
    aluminio$3.K = false;
    $thiz.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__HidroxidoAluminio__Lcalagem_TipoParticula(), aluminio$3.A, aluminio$3.B));
    $thiz.b8 = ((1 + $thiz.b8) | 0);
  }));
  this$13.eP().bg(f);
}
function $p_Lcalagem_Simulacao__atualizarPasso__D__V($thiz, passo) {
  var this$1 = $thiz.F;
  var it = this$1.a0().b();
  while (it.f()) {
    var x0 = it.e();
    x0.b6 = (x0.b6 + passo);
    x0.av = (x0.av + ($m_s_util_Random$().aB($thiz.cP, $thiz.cO) * passo));
    x0.aw = (x0.aw + ($m_s_util_Random$().aB($thiz.cP, $thiz.cO) * passo));
    var self = x0.av;
    var that = $thiz.cV;
    var self$1 = (+Math.max(self, that));
    var that$1 = $thiz.cU;
    x0.av = (+Math.min(self$1, that$1));
    var self$2 = x0.aw;
    var that$2 = $thiz.cV;
    var self$3 = (+Math.max(self$2, that$2));
    var that$3 = $thiz.cU;
    x0.aw = (+Math.min(self$3, that$3));
    x0.A = (x0.A + (x0.av * passo));
    x0.B = (x0.B + (x0.aw * passo));
    if (((x0.A < $thiz.aG) || (x0.A > ($thiz.bl - $thiz.aG)))) {
      x0.av = (-x0.av);
      var self$4 = x0.A;
      var that$4 = $thiz.aG;
      var self$5 = (+Math.max(self$4, that$4));
      var that$5 = ($thiz.bl - $thiz.aG);
      x0.A = (+Math.min(self$5, that$5));
    }
    if (((x0.B < $thiz.aG) || (x0.B > ($thiz.bG - $thiz.aG)))) {
      x0.aw = (-x0.aw);
      var self$6 = x0.B;
      var that$6 = $thiz.aG;
      var self$7 = (+Math.max(self$6, that$6));
      var that$7 = ($thiz.bG - $thiz.aG);
      x0.B = (+Math.min(self$7, that$7));
    }
  }
  var this$18 = $thiz.F;
  $m_scm_ArrayBuffer$();
  var b = new $c_scm_ArrayBuffer$$anon$1();
  var it$1 = this$18.a0().b();
  while (it$1.f()) {
    var elem = it$1.e();
    if (elem.K) {
      var x = elem.R;
      var x$2 = $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (elem.b6 > $thiz.dC))) {
      b.aY(elem);
    }
  }
  var calcariosDissolvidos = b.aa.au();
  var these = calcariosDissolvidos;
  while ((!these.k())) {
    var x0$1 = these.i();
    x0$1.K = false;
    these = these.w();
  }
  var this$20 = $thiz.F;
  var i = 0;
  var j = 0;
  while ((i < this$20.p)) {
    if (this$20.g(i).K) {
      if ((i !== j)) {
        this$20.fk(j, this$20.g(i));
      }
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  if ((i !== j)) {
    $f_scm_Buffer__takeInPlace__I__scm_Buffer(this$20, j);
  }
  var these$1 = calcariosDissolvidos;
  while ((!these$1.k())) {
    $p_Lcalagem_Simulacao__criarProdutosCalcario__Lcalagem_Particula__V($thiz, these$1.i());
    these$1 = these$1.w();
  }
  $p_Lcalagem_Simulacao__reagir__V($thiz);
  $p_Lcalagem_Simulacao__reagirAluminio__D__V($thiz, passo);
  var this$21 = $thiz.F;
  var i$1 = 0;
  var j$1 = 0;
  while ((i$1 < this$21.p)) {
    var x0$4 = this$21.g(i$1);
    if (x0$4.K) {
      var x$1 = x0$4.R;
      var x$2$1 = $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
      if ((!((x$1 === null) ? (x$2$1 === null) : (x$1 === x$2$1)))) {
        var x$3 = x0$4.R;
        var x$4 = $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
        var $x_2 = (!((x$3 === null) ? (x$4 === null) : (x$3 === x$4)));
      } else {
        var $x_2 = false;
      }
    } else {
      var $x_2 = false;
    }
    if (($x_2 || (x0$4.b6 <= $thiz.dD))) {
      if ((i$1 !== j$1)) {
        this$21.fk(j$1, this$21.g(i$1));
      }
      j$1 = ((1 + j$1) | 0);
    }
    i$1 = ((1 + i$1) | 0);
  }
  if ((i$1 !== j$1)) {
    $f_scm_Buffer__takeInPlace__I__scm_Buffer(this$21, j$1);
  }
}
/** @constructor */
function $c_Lcalagem_Simulacao(largura, altura) {
  this.bl = 0.0;
  this.bG = 0.0;
  this.F = null;
  this.dx = 0.0;
  this.cT = 0;
  this.dA = 0;
  this.dB = 0.0;
  this.cP = 0.0;
  this.cO = 0.0;
  this.cV = 0.0;
  this.cU = 0.0;
  this.aG = 0.0;
  this.dw = 0.0;
  this.b7 = 0.0;
  this.cR = 0.0;
  this.cQ = 0.0;
  this.du = 0.0;
  this.dt = 0.0;
  this.dC = 0;
  this.dD = 0.0;
  this.dz = 0.0;
  this.dy = 0.0;
  this.dv = 0.0;
  this.cS = 0.0;
  this.bH = false;
  this.b8 = 0;
  this.bl = largura;
  this.bG = altura;
  this.F = $m_scm_ArrayBuffer$().eV(new $c_sjsr_WrappedVarArgs([]));
  this.dx = 4.0;
  this.cT = 40;
  this.dA = 8;
  this.dB = 60.0;
  this.cP = (-15.0);
  this.cO = 15.0;
  this.cV = (-60.0);
  this.cU = 60.0;
  this.aG = 12.0;
  this.dw = 8.0;
  this.b7 = 30.0;
  this.cR = 40.0;
  this.cQ = 50.0;
  this.du = 5.0;
  this.dt = 45.0;
  this.dC = 1;
  this.dD = 3.0;
  this.dz = 0.05;
  this.dy = 7.0;
  this.dv = 0.8;
  this.cS = 5.0;
  this.bH = true;
  this.b8 = 0;
}
$p = $c_Lcalagem_Simulacao.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Simulacao;
/** @constructor */
function $h_Lcalagem_Simulacao() {
}
$h_Lcalagem_Simulacao.prototype = $p;
$p.f5 = (function() {
  var this$1 = this.F;
  var res = 0;
  var it = this$1.a0().b();
  while (it.f()) {
    var x0 = it.e();
    if (x0.K) {
      var x = x0.R;
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
$p.f3 = (function() {
  return $m_Lcalagem_Quimica$().g8(this.dx, this.cT, this.f5());
});
$p.f6 = (function() {
  $p_scm_ArrayBuffer__reduceToSize__I__V(this.F, 0);
  this.b8 = 0;
  this.bH = true;
  var end = this.cT;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      this.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula(), $m_s_util_Random$().aB(this.b7, (this.bl - this.b7)), $m_s_util_Random$().aB(this.cQ, (this.bG - this.b7))));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var end$1 = this.dA;
  var isEmpty$1 = (end$1 <= 0);
  var scala$collection$immutable$Range$$lastElement$1 = ((end$1 - 1) | 0);
  if ((!isEmpty$1)) {
    var i$1 = 0;
    while (true) {
      this.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula(), $m_s_util_Random$().aB(this.b7, (this.bl - this.b7)), $m_s_util_Random$().aB(this.cQ, (this.bG - this.b7))));
      if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
});
$p.fO = (function(qtd) {
  var end = ((qtd < 0) ? 0 : qtd);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      this.F.aM($m_Lcalagem_Particula$().b0($s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula(), $m_s_util_Random$().aB(this.cR, (this.bl - this.cR)), $m_s_util_Random$().aB(this.du, this.dt)));
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
});
$p.fP = (function(dt) {
  if ((!this.bH)) {
    return (void 0);
  }
  var restante = (+Math.max(0.0, dt));
  while ((restante > 1.0E-9)) {
    var x = restante;
    var y = this.dz;
    var passo = (+Math.min(x, y));
    $p_Lcalagem_Simulacao__atualizarPasso__D__V(this, passo);
    restante = (restante - passo);
  }
});
var $d_Lcalagem_Simulacao = new $TypeData().i($c_Lcalagem_Simulacao, "calagem.Simulacao", ({
  b8: 1
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
$p.gC = (function(a, b) {
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
$p.gl = (function(a, b) {
  return (+Math.hypot(a, b));
});
var $d_jl_Math$ = new $TypeData().i($c_jl_Math$, "java.lang.Math$", ({
  bs: 1
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
  this.dE = null;
  $n_jl_Thread$ = this;
  this.dE = new $c_jl_Thread((void 0));
}
$p = $c_jl_Thread$.prototype = new $h_O();
$p.constructor = $c_jl_Thread$;
/** @constructor */
function $h_jl_Thread$() {
}
$h_jl_Thread$.prototype = $p;
var $d_jl_Thread$ = new $TypeData().i($c_jl_Thread$, "java.lang.Thread$", ({
  bz: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  aC: 1
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
$p.Q = (function(array) {
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
  bB: 1
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
$p.fg = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a6(a, new $ac_I(a.a.length), 0, end, comparator, ops);
  } else {
    this.ac(a, 0, end, comparator, ops);
  }
});
$p.gT = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a6(a, new $ac_I(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.ac(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.fh = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var end = ((a.a.length >>> 1) | 0);
  if ((end > 16)) {
    this.a6(a, new $ac_J(((a.a.length >>> 1) | 0)), 0, end, comparator, ops);
  } else {
    this.ac(a, 0, end, comparator, ops);
  }
});
$p.gU = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a6(a, new $ac_J(((a.a.length >>> 1) | 0)), fromIndex, toIndex, comparator, ops);
  } else {
    this.ac(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.fi = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a6(a, new $ac_S(a.a.length), 0, end, comparator, ops);
  } else {
    this.ac(a, 0, end, comparator, ops);
  }
});
$p.gV = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a6(a, new $ac_S(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.ac(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ff = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a6(a, new $ac_C(a.a.length), 0, end, comparator, ops);
  } else {
    this.ac(a, 0, end, comparator, ops);
  }
});
$p.gS = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a6(a, new $ac_C(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.ac(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.fe = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.a6(a, new $ac_B(a.a.length), 0, end, comparator, ops);
  } else {
    this.ac(a, 0, end, comparator, ops);
  }
});
$p.gR = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a6(a, new $ac_B(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.ac(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.bD = (function(array, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  var end = array.a.length;
  if ((end > 16)) {
    this.a6(array, $objectGetClass(array).m.Q().m.U(array.a.length), 0, end, comparator$1, ops);
  } else {
    this.ac(array, 0, end, comparator$1, ops);
  }
});
$p.gW = (function(array, fromIndex, toIndex, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.a6(array, $objectGetClass(array).m.Q().m.U(array.a.length), fromIndex, toIndex, comparator$1, ops);
  } else {
    this.ac(array, fromIndex, toIndex, comparator$1, ops);
  }
});
$p.a6 = (function(a, temp, start, end, comparator, ops) {
  var length = ((end - start) | 0);
  if ((length > 16)) {
    var middle = ((start + (((length + ((length >>> 31) | 0)) | 0) >> 1)) | 0);
    this.a6(a, temp, start, middle, comparator, ops);
    this.a6(a, temp, middle, end, comparator, ops);
    var outIndex = start;
    var leftInIndex = start;
    var rightInIndex = middle;
    while ((outIndex < end)) {
      if (((leftInIndex < middle) && ((rightInIndex >= end) || (comparator.v(ops.S(a, leftInIndex), ops.S(a, rightInIndex)) <= 0)))) {
        ops.at(temp, outIndex, ops.S(a, leftInIndex));
        leftInIndex = ((1 + leftInIndex) | 0);
      } else {
        ops.at(temp, outIndex, ops.S(a, rightInIndex));
        rightInIndex = ((1 + rightInIndex) | 0);
      }
      outIndex = ((1 + outIndex) | 0);
    }
    temp.q(start, a, start, length);
  } else {
    this.ac(a, start, end, comparator, ops);
  }
});
$p.ac = (function(a, start, end, comparator, ops) {
  var n = ((end - start) | 0);
  if ((n >= 2)) {
    var aStart = ops.S(a, start);
    var aStartPlusOne = ops.S(a, ((1 + start) | 0));
    if ((comparator.v(aStart, aStartPlusOne) > 0)) {
      ops.at(a, start, aStartPlusOne);
      ops.at(a, ((1 + start) | 0), aStart);
    }
    var m = 2;
    while ((m < n)) {
      var next = ops.S(a, ((start + m) | 0));
      if ((comparator.v(next, ops.S(a, ((((start + m) | 0) - 1) | 0))) < 0)) {
        var iA = start;
        var iB = ((((start + m) | 0) - 1) | 0);
        while ((((iB - iA) | 0) > 1)) {
          var ix = ((((iA + iB) | 0) >>> 1) | 0);
          if ((comparator.v(next, ops.S(a, ix)) < 0)) {
            iB = ix;
          } else {
            iA = ix;
          }
        }
        var ix$2 = ((iA + ((comparator.v(next, ops.S(a, iA)) >= 0) | 0)) | 0);
        var i = ((start + m) | 0);
        while ((i > ix$2)) {
          ops.at(a, i, ops.S(a, ((i - 1) | 0)));
          i = ((i - 1) | 0);
        }
        ops.at(a, ix$2, next);
      }
      m = ((1 + m) | 0);
    }
  }
});
$p.ga = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.g9 = (function(a, fromIndex, toIndex, value) {
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
$p.eN = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).m.Q().m.U(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.de = (function(original, newLength, newType) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.m.Q().m.U(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.eH = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.eL = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.eJ = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.eK = (function(original, newLength) {
  var b = ((original.a.length >>> 1) | 0);
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.eI = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.fV = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.fU = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.eM = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.q(0, ret, 0, copyLength);
  return ret;
});
$p.g4 = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).m.Q().m.U(retLength);
  original.q(from, ret, 0, copyLength);
  return ret;
});
$p.fW = (function(original, start, end) {
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
$p.g2 = (function(original, start, end) {
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
$p.g0 = (function(original, start, end) {
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
$p.g1 = (function(original, start, end) {
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
$p.fX = (function(original, start, end) {
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
$p.fZ = (function(original, start, end) {
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
$p.fY = (function(original, start, end) {
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
$p.g3 = (function(original, start, end) {
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
  bE: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aD)));
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
/** @constructor */
function $c_ju_Formatter$() {
  this.dL = null;
  this.dK = null;
  $n_ju_Formatter$ = this;
  this.dL = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.dK = $constArrSVals_I(26, "3]3{0C{0H_1]8]_3{||||||0I]|||3y||||0A]||");
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.dj = (function(count) {
  if ((count <= 20)) {
    return "00000000000000000000".substring(0, count);
  } else {
    var result = "";
    var remaining = count;
    while ((remaining > 20)) {
      result = (result + "00000000000000000000");
      remaining = ((remaining - 20) | 0);
    }
    var $x_1 = result;
    var endIndex = remaining;
    return (("" + $x_1) + "00000000000000000000".substring(0, endIndex));
  }
});
$p.gs = (function(x) {
  if ((x === 0.0)) {
    return new $c_ju_Formatter$Decimal(((1.0 / x) < 0.0), "0", 0);
  } else {
    var negative$2 = (x < 0.0);
    var d = (negative$2 ? (-x) : x);
    var s = ("" + d);
    var ePos = $f_T__indexOf__I__I(s, 101);
    if ((ePos < 0)) {
      var e = 0;
    } else {
      var $x_2 = parseInt;
      var beginIndex = ((1 + ePos) | 0);
      var $x_1 = $x_2(s.substring(beginIndex));
      var e = ($x_1 | 0);
    }
    var significandEnd = ((ePos < 0) ? s.length : ePos);
    var dotPos = $f_T__indexOf__I__I(s, 46);
    if ((dotPos < 0)) {
      return new $c_ju_Formatter$Decimal(negative$2, s.substring(0, significandEnd), ((-e) | 0));
    } else {
      var $x_3 = s.substring(0, dotPos);
      var beginIndex$1 = ((1 + dotPos) | 0);
      var digits = (("" + $x_3) + s.substring(beginIndex$1, significandEnd));
      var digitsLen = digits.length;
      var i = 0;
      while (((i < digitsLen) && (digits.charCodeAt(i) === 48))) {
        i = ((1 + i) | 0);
      }
      var beginIndex$2 = i;
      return new $c_ju_Formatter$Decimal(negative$2, digits.substring(beginIndex$2), ((((-e) | 0) + ((significandEnd - ((1 + dotPos) | 0)) | 0)) | 0));
    }
  }
});
$p.gr = (function(x) {
  var unscaledValueWithSign = x.hd().r();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.hb());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  bK: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.aI;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.aH, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.aH, "0", 0) : new $c_ju_Formatter$Decimal($thiz.aH, digits.substring(0, roundingPos), (($thiz.ax - ((digitsLen - roundingPos) | 0)) | 0)));
  } else {
    var lastNonNinePos = ((roundingPos - 1) | 0);
    while (((lastNonNinePos >= 0) && (digits.charCodeAt(lastNonNinePos) === 57))) {
      lastNonNinePos = ((lastNonNinePos - 1) | 0);
    }
    if ((lastNonNinePos < 0)) {
      var newUnscaledValue = "1";
    } else {
      var endIndex = lastNonNinePos;
      var newUnscaledValue = (digits.substring(0, endIndex) + $cToS((65535 & ((1 + digits.charCodeAt(lastNonNinePos)) | 0))));
    }
    var pos = ((1 + lastNonNinePos) | 0);
    var newScale = (($thiz.ax - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.aH, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.aH = false;
  this.aI = null;
  this.ax = 0;
  this.aH = negative;
  this.aI = unscaledValue;
  this.ax = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.eZ = (function() {
  return (this.aI === "0");
});
$p.f7 = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.gO = (function(newScale) {
  var roundingPos = ((((this.aI.length + newScale) | 0) - this.ax) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.eZ() || (rounded.ax <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.eZ() || (rounded.ax === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.aH, (("" + rounded.aI) + $m_ju_Formatter$().dj(((newScale - rounded.ax) | 0))), newScale));
});
$p.r = (function() {
  return (((((("Decimal(" + this.aH) + ", ") + this.aI) + ", ") + this.ax) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  bL: 1
}));
/** @constructor */
function $c_ju_Formatter$LocaleInfo() {
}
$p = $c_ju_Formatter$LocaleInfo.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$LocaleInfo;
/** @constructor */
function $h_ju_Formatter$LocaleInfo() {
}
$h_ju_Formatter$LocaleInfo.prototype = $p;
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().gG(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().gF(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().g6(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().g5(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().eX(value);
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
  return $m_RTLong$().dr(lo, hi);
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
$p.dr = (function(lo, hi) {
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
$p.eX = (function(value) {
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
$p.g5 = (function(alo, ahi, blo, bhi) {
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
$p.g6 = (function(alo, ahi, blo, bhi) {
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
$p.gF = (function(alo, ahi, blo, bhi) {
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
$p.gG = (function(alo, ahi, blo, bhi) {
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
  c8: 1
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
    $m_sr_ScalaRunTime$().ai(dest, j, $m_sr_ScalaRunTime$().D(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().ga(result, (void 0));
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
$p.eR = (function(it, evidence$1) {
  var n = it.j();
  if ((n > (-1))) {
    var elements = evidence$1.L(n);
    var iterator = it.b();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().ai(elements, i, iterator.e());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.M();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.b();
    while (iterator$2.f()) {
      var elem = iterator$2.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cJ(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().cI(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.aZ = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.m.Z && $objectGetClass(dest).m.R(srcClass.m))) {
    src.q(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.fT = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  }
  if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().eN(original, newLength);
  }
  if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().eJ(original, newLength);
  }
  if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().fU(original, newLength);
  }
  if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().eK(original, newLength);
  }
  if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().fV(original, newLength);
  }
  if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().eI(original, newLength);
  }
  if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().eH(original, newLength);
  }
  if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().eL(original, newLength);
  }
  if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().eM(original, newLength);
  }
  throw new $c_s_MatchError(original);
});
$p.fS = (function(original, newLength, ct) {
  var runtimeClass = ct.M();
  if (((runtimeClass !== null) && (runtimeClass === $d_V.l()))) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if (runtimeClass.m.R($objectGetClass(original).m.Q().m)) {
    return (runtimeClass.m.X ? this.fT(original, newLength) : $m_ju_Arrays$().de(original, newLength, $m_sr_ScalaRunTime$().cz(runtimeClass.m.U(0))));
  } else {
    var dest = ct.L(newLength);
    $m_s_Array$().aZ(original, 0, dest, 0, $m_jl_reflect_Array$().Q(original));
    return dest;
  }
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  c9: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.am)));
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
function $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len$1, \u03b4this$2, ord$1) {
  if ((len$1 < 300)) {
    var a = $m_sr_ScalaRunTime$().eF(\u03b4this$2);
    $m_s_util_Sorting$().dq(a, 0, $m_jl_reflect_Array$().Q(a), ord$1);
    return a;
  } else {
    if ($d_O.R($objectGetClass(\u03b4this$2).m.Q().m)) {
      var a$2 = $m_ju_Arrays$().de(\u03b4this$2, len$1, $m_sr_ScalaRunTime$().cz(new $ac_O(0)));
    } else {
      var dest = new $ac_O(len$1);
      $m_s_Array$().aZ(\u03b4this$2, 0, dest, 0, $m_jl_reflect_Array$().Q(\u03b4this$2));
      var a$2 = dest;
    }
    $m_ju_Arrays$().bD(a$2, ord$1);
    return $m_s_Array$().fS(a$2, len$1, $m_s_reflect_ClassTag$().cA($objectGetClass(\u03b4this$2).m.Q()));
  }
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.e0 = null;
  $n_sc_ArrayOps$ = this;
  this.e0 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().e0));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.gQ = (function(this$, from, until) {
  var lo = ((from > 0) ? from : 0);
  var b = $m_jl_reflect_Array$().Q(this$);
  var hi = ((until < b) ? until : b);
  if ((hi > lo)) {
    if ((this$ instanceof $ac_O)) {
      return $m_ju_Arrays$().g4(this$, lo, hi);
    } else if ((this$ instanceof $ac_I)) {
      return $m_ju_Arrays$().g0(this$, lo, hi);
    } else if ((this$ instanceof $ac_D)) {
      return $m_ju_Arrays$().fY(this$, lo, hi);
    } else if ((this$ instanceof $ac_J)) {
      return $m_ju_Arrays$().g1(this$, lo, hi);
    } else if ((this$ instanceof $ac_F)) {
      return $m_ju_Arrays$().fZ(this$, lo, hi);
    } else if ((this$ instanceof $ac_C)) {
      return $m_ju_Arrays$().fX(this$, lo, hi);
    } else if ((this$ instanceof $ac_B)) {
      return $m_ju_Arrays$().fW(this$, lo, hi);
    } else if ((this$ instanceof $ac_S)) {
      return $m_ju_Arrays$().g2(this$, lo, hi);
    } else if ((this$ instanceof $ac_Z)) {
      return $m_ju_Arrays$().g3(this$, lo, hi);
    } else {
      throw new $c_s_MatchError(this$);
    }
  } else {
    return $m_s_reflect_ClassTag$().cA($objectGetClass(this$).m.Q()).L(0);
  }
});
$p.gY = (function(this$, ord) {
  var len = $m_jl_reflect_Array$().Q(this$);
  if ((len <= 1)) {
    return $m_sr_ScalaRunTime$().eF(this$);
  } else if ((this$ instanceof $ac_O)) {
    var a = $m_ju_Arrays$().eN(this$, len);
    $m_ju_Arrays$().bD(a, ord);
    return a;
  } else if ((this$ instanceof $ac_I)) {
    if ((ord === $m_s_math_Ordering$Int$())) {
      var a$2 = $m_ju_Arrays$().eJ(this$, len);
      $m_ju_Arrays$().fg(a$2);
      return a$2;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_J)) {
    if ((ord === $m_s_math_Ordering$Long$())) {
      var a$3 = $m_ju_Arrays$().eK(this$, len);
      $m_ju_Arrays$().fh(a$3);
      return a$3;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_C)) {
    if ((ord === $m_s_math_Ordering$Char$())) {
      var a$4 = $m_ju_Arrays$().eI(this$, len);
      $m_ju_Arrays$().ff(a$4);
      return a$4;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_B)) {
    if ((ord === $m_s_math_Ordering$Byte$())) {
      var a$5 = $m_ju_Arrays$().eH(this$, len);
      $m_ju_Arrays$().fe(a$5);
      return a$5;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_S)) {
    if ((ord === $m_s_math_Ordering$Short$())) {
      var a$6 = $m_ju_Arrays$().eL(this$, len);
      $m_ju_Arrays$().fi(a$6);
      return a$6;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_Z)) {
    if ((ord === $m_s_math_Ordering$Boolean$())) {
      var a$7 = $m_ju_Arrays$().eM(this$, len);
      $m_s_util_Sorting$().dq(a$7, 0, a$7.a.length, $m_s_math_Ordering$Boolean$());
      return a$7;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else {
    return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  cf: 1
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
    f.h(it.e());
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x30 = $thiz.j();
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
    var x31 = $thiz.j();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().Q(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().Q(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.f())) {
    $m_sr_ScalaRunTime$().ai(dest, i, it.e());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.j() === 0) ? (("" + start) + end) : $thiz.aN($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).J.c);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.J;
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
  if (($thiz.j() >= 0)) {
    var length = $thiz.j();
    var destination = evidence$1.L(length);
    $thiz.ab(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.M();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.b();
    while (it.f()) {
      var elem = it.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cJ(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().cI(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
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
  this.e6 = null;
  this.bM = null;
  this.e6 = head;
  this.bM = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.gk = (function() {
  return this.e6.a4().b();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  cr: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.eb = null;
  $n_sc_StringOps$ = this;
  this.eb = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.eb));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.gK = (function(this$, arg) {
  return (false ? arg.hc() : arg);
});
$p.gf = (function(this$, args) {
  return $m_jl_String$().gd(this$, $m_sr_Arrays$().gN(args.cE(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((arg$2) => this.gK(this$, arg$2)))), $d_O.l()));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cv: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.bh = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
$p.gm = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (min 0, max unknown)"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  cA: 1
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
  cO: 1
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
  this.d3 = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.dg = (function() {
  var state = this.d3;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.a4();
});
$p.di = (function(state) {
  if ((this.d3 !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.d3 = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  cQ: 1
}));
function $isArrayOf_sci_LazyListBase$InRace(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cU)));
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
  cV: 1
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
$p.cJ = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.cI = (function(runtimeClass, a) {
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
    var result$2 = runtimeClass.m.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().ai(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  d3: 1
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
$p.dc = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  dp: 1
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
  this.fq = null;
  this.fz = null;
  this.fr = null;
  this.fu = null;
  this.fv = null;
  this.ft = null;
  this.fs = null;
  this.fp = null;
  this.fA = null;
  this.fn = null;
  this.fy = null;
  this.fo = null;
  this.fw = null;
  this.fx = null;
  $n_s_reflect_ClassTag$ = this;
  this.fq = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.fz = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.fr = $m_s_reflect_ManifestFactory$CharManifest$();
  this.fu = $m_s_reflect_ManifestFactory$IntManifest$();
  this.fv = $m_s_reflect_ManifestFactory$LongManifest$();
  this.ft = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.fs = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.fp = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.fA = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.fn = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.fy = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.fo = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.fw = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.fx = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.cA = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  dM: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_Arrays$() {
}
$p = $c_sr_Arrays$.prototype = new $h_O();
$p.constructor = $c_sr_Arrays$;
/** @constructor */
function $h_sr_Arrays$() {
}
$h_sr_Arrays$.prototype = $p;
$p.gN = (function(xs, clazz) {
  var length = xs.d();
  var arr = clazz.m.U(length);
  xs.ab(arr, 0, 2147483647);
  return arr;
});
var $d_sr_Arrays$ = new $TypeData().i($c_sr_Arrays$, "scala.runtime.Arrays$", ({
  ef: 1
}));
var $n_sr_Arrays$;
function $m_sr_Arrays$() {
  if ((!$n_sr_Arrays$)) {
    $n_sr_Arrays$ = new $c_sr_Arrays$();
  }
  return $n_sr_Arrays$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  ej: 1
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
$p.aO = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  el: 1
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
$p.cz = (function(x) {
  return ((x === null) ? $d_sr_Null$.l() : $objectGetClass(x));
});
$p.D = (function(xs, idx) {
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
$p.ai = (function(xs, idx, value) {
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
$p.eF = (function(xs) {
  if ((xs instanceof $ac_O)) {
    return xs.x();
  }
  if ((xs instanceof $ac_I)) {
    return xs.x();
  }
  if ((xs instanceof $ac_D)) {
    return xs.x();
  }
  if ((xs instanceof $ac_J)) {
    return xs.x();
  }
  if ((xs instanceof $ac_F)) {
    return xs.x();
  }
  if ((xs instanceof $ac_C)) {
    return xs.x();
  }
  if ((xs instanceof $ac_B)) {
    return xs.x();
  }
  if ((xs instanceof $ac_S)) {
    return xs.x();
  }
  if ((xs instanceof $ac_Z)) {
    return xs.x();
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.fD = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.bC(), (x.b4() + "("), ",", ")");
});
$p.gi = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().bE(xs));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  em: 1
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
$p.l = (function(hash, data) {
  var h = this.cF(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cF = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a5 = (function(hash, length) {
  return this.fQ((hash ^ length));
});
$p.fQ = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.gv = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.bB = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().eX(dv);
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
$p.G = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.bB((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.gv($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.gp = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  eo: 1
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
$p.y = (function(a, i0, iN, ord) {
  var n = ((iN - i0) | 0);
  if ((n < 2)) {
    return (void 0);
  }
  if ((ord.v($m_sr_ScalaRunTime$().D(a, i0), $m_sr_ScalaRunTime$().D(a, ((1 + i0) | 0))) > 0)) {
    var temp = $m_sr_ScalaRunTime$().D(a, i0);
    $m_sr_ScalaRunTime$().ai(a, i0, $m_sr_ScalaRunTime$().D(a, ((1 + i0) | 0)));
    $m_sr_ScalaRunTime$().ai(a, ((1 + i0) | 0), temp);
  }
  var m = 2;
  while ((m < n)) {
    var next = $m_sr_ScalaRunTime$().D(a, ((i0 + m) | 0));
    if ((ord.v(next, $m_sr_ScalaRunTime$().D(a, ((((i0 + m) | 0) - 1) | 0))) < 0)) {
      var iA = i0;
      var iB = ((((i0 + m) | 0) - 1) | 0);
      while ((((iB - iA) | 0) > 1)) {
        var ix = ((((iA + iB) | 0) >>> 1) | 0);
        if ((ord.v(next, $m_sr_ScalaRunTime$().D(a, ix)) < 0)) {
          iB = ix;
        } else {
          iA = ix;
        }
      }
      var ix$2 = ((iA + ((ord.v(next, $m_sr_ScalaRunTime$().D(a, iA)) >= 0) | 0)) | 0);
      var i = ((i0 + m) | 0);
      while ((i > ix$2)) {
        $m_sr_ScalaRunTime$().ai(a, i, $m_sr_ScalaRunTime$().D(a, ((i - 1) | 0)));
        i = ((i - 1) | 0);
      }
      $m_sr_ScalaRunTime$().ai(a, ix$2, next);
    }
    m = ((1 + m) | 0);
  }
});
$p.o = (function(a, i0, iN, ord, scratch, evidence$2) {
  if ((((iN - i0) | 0) < 32)) {
    this.y(a, i0, iN, ord);
  } else {
    var iK = ((((i0 + iN) | 0) >>> 1) | 0);
    var sc = ((scratch === null) ? evidence$2.L(((iK - i0) | 0)) : scratch);
    this.o(a, i0, iK, ord, sc, evidence$2);
    this.o(a, iK, iN, ord, sc, evidence$2);
    this.z(a, i0, iK, iN, ord, sc);
  }
});
$p.z = (function(a, i0, iK, iN, ord, scratch) {
  if ((ord.v($m_sr_ScalaRunTime$().D(a, ((iK - 1) | 0)), $m_sr_ScalaRunTime$().D(a, iK)) > 0)) {
    var i = i0;
    var jN = ((iK - i0) | 0);
    var j = 0;
    while ((i < iK)) {
      $m_sr_ScalaRunTime$().ai(scratch, j, $m_sr_ScalaRunTime$().D(a, i));
      i = ((1 + i) | 0);
      j = ((1 + j) | 0);
    }
    var k = i0;
    j = 0;
    while (((i < iN) && (j < jN))) {
      if ((ord.v($m_sr_ScalaRunTime$().D(a, i), $m_sr_ScalaRunTime$().D(scratch, j)) < 0)) {
        $m_sr_ScalaRunTime$().ai(a, k, $m_sr_ScalaRunTime$().D(a, i));
        i = ((1 + i) | 0);
      } else {
        $m_sr_ScalaRunTime$().ai(a, k, $m_sr_ScalaRunTime$().D(scratch, j));
        j = ((1 + j) | 0);
      }
      k = ((1 + k) | 0);
    }
    while ((j < jN)) {
      $m_sr_ScalaRunTime$().ai(a, k, $m_sr_ScalaRunTime$().D(scratch, j));
      j = ((1 + j) | 0);
      k = ((1 + k) | 0);
    }
  }
});
$p.gM = (function(a, from, until) {
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
$p.dq = (function(a, from, until, evidence$4) {
  $m_s_math_Ordering$();
  if ((a instanceof $ac_O)) {
    if ((($m_jl_reflect_Array$().Q(a) > 1) && (evidence$4 === null))) {
      throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "Ordering");
    }
    $m_ju_Arrays$().gW(a, from, until, evidence$4);
  } else if ((a instanceof $ac_I)) {
    if ((evidence$4 === $m_s_math_Ordering$Int$())) {
      $m_ju_Arrays$().gT(a, from, until);
    } else {
      var evidence$2 = $m_s_reflect_ManifestFactory$IntManifest$();
      if ((((until - from) | 0) < 32)) {
        this.y(a, from, until, evidence$4);
      } else {
        var iK = ((((from + until) | 0) >>> 1) | 0);
        var sc = new $ac_I(((iK - from) | 0));
        if ((((iK - from) | 0) < 32)) {
          this.y(a, from, iK, evidence$4);
        } else {
          var iK$1 = ((((from + iK) | 0) >>> 1) | 0);
          this.o(a, from, iK$1, evidence$4, sc, evidence$2);
          this.o(a, iK$1, iK, evidence$4, sc, evidence$2);
          this.z(a, from, iK$1, iK, evidence$4, sc);
        }
        if ((((until - iK) | 0) < 32)) {
          this.y(a, iK, until, evidence$4);
        } else {
          var iK$2 = ((((iK + until) | 0) >>> 1) | 0);
          this.o(a, iK, iK$2, evidence$4, sc, evidence$2);
          this.o(a, iK$2, until, evidence$4, sc, evidence$2);
          this.z(a, iK, iK$2, until, evidence$4, sc);
        }
        this.z(a, from, iK, until, evidence$4, sc);
      }
    }
  } else if ((a instanceof $ac_D)) {
    var evidence$2$1 = $m_s_reflect_ManifestFactory$DoubleManifest$();
    if ((((until - from) | 0) < 32)) {
      this.y(a, from, until, evidence$4);
    } else {
      var iK$3 = ((((from + until) | 0) >>> 1) | 0);
      var sc$1 = new $ac_D(((iK$3 - from) | 0));
      if ((((iK$3 - from) | 0) < 32)) {
        this.y(a, from, iK$3, evidence$4);
      } else {
        var iK$4 = ((((from + iK$3) | 0) >>> 1) | 0);
        this.o(a, from, iK$4, evidence$4, sc$1, evidence$2$1);
        this.o(a, iK$4, iK$3, evidence$4, sc$1, evidence$2$1);
        this.z(a, from, iK$4, iK$3, evidence$4, sc$1);
      }
      if ((((until - iK$3) | 0) < 32)) {
        this.y(a, iK$3, until, evidence$4);
      } else {
        var iK$5 = ((((iK$3 + until) | 0) >>> 1) | 0);
        this.o(a, iK$3, iK$5, evidence$4, sc$1, evidence$2$1);
        this.o(a, iK$5, until, evidence$4, sc$1, evidence$2$1);
        this.z(a, iK$3, iK$5, until, evidence$4, sc$1);
      }
      this.z(a, from, iK$3, until, evidence$4, sc$1);
    }
  } else if ((a instanceof $ac_J)) {
    if ((evidence$4 === $m_s_math_Ordering$Long$())) {
      $m_ju_Arrays$().gU(a, from, until);
    } else {
      var evidence$2$2 = $m_s_reflect_ManifestFactory$LongManifest$();
      if ((((until - from) | 0) < 32)) {
        this.y(a, from, until, evidence$4);
      } else {
        var iK$6 = ((((from + until) | 0) >>> 1) | 0);
        var sc$2 = new $ac_J(((iK$6 - from) | 0));
        if ((((iK$6 - from) | 0) < 32)) {
          this.y(a, from, iK$6, evidence$4);
        } else {
          var iK$7 = ((((from + iK$6) | 0) >>> 1) | 0);
          this.o(a, from, iK$7, evidence$4, sc$2, evidence$2$2);
          this.o(a, iK$7, iK$6, evidence$4, sc$2, evidence$2$2);
          this.z(a, from, iK$7, iK$6, evidence$4, sc$2);
        }
        if ((((until - iK$6) | 0) < 32)) {
          this.y(a, iK$6, until, evidence$4);
        } else {
          var iK$8 = ((((iK$6 + until) | 0) >>> 1) | 0);
          this.o(a, iK$6, iK$8, evidence$4, sc$2, evidence$2$2);
          this.o(a, iK$8, until, evidence$4, sc$2, evidence$2$2);
          this.z(a, iK$6, iK$8, until, evidence$4, sc$2);
        }
        this.z(a, from, iK$6, until, evidence$4, sc$2);
      }
    }
  } else if ((a instanceof $ac_F)) {
    var evidence$2$3 = $m_s_reflect_ManifestFactory$FloatManifest$();
    if ((((until - from) | 0) < 32)) {
      this.y(a, from, until, evidence$4);
    } else {
      var iK$9 = ((((from + until) | 0) >>> 1) | 0);
      var sc$3 = new $ac_F(((iK$9 - from) | 0));
      if ((((iK$9 - from) | 0) < 32)) {
        this.y(a, from, iK$9, evidence$4);
      } else {
        var iK$10 = ((((from + iK$9) | 0) >>> 1) | 0);
        this.o(a, from, iK$10, evidence$4, sc$3, evidence$2$3);
        this.o(a, iK$10, iK$9, evidence$4, sc$3, evidence$2$3);
        this.z(a, from, iK$10, iK$9, evidence$4, sc$3);
      }
      if ((((until - iK$9) | 0) < 32)) {
        this.y(a, iK$9, until, evidence$4);
      } else {
        var iK$11 = ((((iK$9 + until) | 0) >>> 1) | 0);
        this.o(a, iK$9, iK$11, evidence$4, sc$3, evidence$2$3);
        this.o(a, iK$11, until, evidence$4, sc$3, evidence$2$3);
        this.z(a, iK$9, iK$11, until, evidence$4, sc$3);
      }
      this.z(a, from, iK$9, until, evidence$4, sc$3);
    }
  } else if ((a instanceof $ac_C)) {
    if ((evidence$4 === $m_s_math_Ordering$Char$())) {
      $m_ju_Arrays$().gS(a, from, until);
    } else {
      var evidence$2$4 = $m_s_reflect_ManifestFactory$CharManifest$();
      if ((((until - from) | 0) < 32)) {
        this.y(a, from, until, evidence$4);
      } else {
        var iK$12 = ((((from + until) | 0) >>> 1) | 0);
        var sc$4 = new $ac_C(((iK$12 - from) | 0));
        if ((((iK$12 - from) | 0) < 32)) {
          this.y(a, from, iK$12, evidence$4);
        } else {
          var iK$13 = ((((from + iK$12) | 0) >>> 1) | 0);
          this.o(a, from, iK$13, evidence$4, sc$4, evidence$2$4);
          this.o(a, iK$13, iK$12, evidence$4, sc$4, evidence$2$4);
          this.z(a, from, iK$13, iK$12, evidence$4, sc$4);
        }
        if ((((until - iK$12) | 0) < 32)) {
          this.y(a, iK$12, until, evidence$4);
        } else {
          var iK$14 = ((((iK$12 + until) | 0) >>> 1) | 0);
          this.o(a, iK$12, iK$14, evidence$4, sc$4, evidence$2$4);
          this.o(a, iK$14, until, evidence$4, sc$4, evidence$2$4);
          this.z(a, iK$12, iK$14, until, evidence$4, sc$4);
        }
        this.z(a, from, iK$12, until, evidence$4, sc$4);
      }
    }
  } else if ((a instanceof $ac_B)) {
    if ((evidence$4 === $m_s_math_Ordering$Byte$())) {
      $m_ju_Arrays$().gR(a, from, until);
    } else {
      var evidence$2$5 = $m_s_reflect_ManifestFactory$ByteManifest$();
      if ((((until - from) | 0) < 32)) {
        this.y(a, from, until, evidence$4);
      } else {
        var iK$15 = ((((from + until) | 0) >>> 1) | 0);
        var sc$5 = new $ac_B(((iK$15 - from) | 0));
        if ((((iK$15 - from) | 0) < 32)) {
          this.y(a, from, iK$15, evidence$4);
        } else {
          var iK$16 = ((((from + iK$15) | 0) >>> 1) | 0);
          this.o(a, from, iK$16, evidence$4, sc$5, evidence$2$5);
          this.o(a, iK$16, iK$15, evidence$4, sc$5, evidence$2$5);
          this.z(a, from, iK$16, iK$15, evidence$4, sc$5);
        }
        if ((((until - iK$15) | 0) < 32)) {
          this.y(a, iK$15, until, evidence$4);
        } else {
          var iK$17 = ((((iK$15 + until) | 0) >>> 1) | 0);
          this.o(a, iK$15, iK$17, evidence$4, sc$5, evidence$2$5);
          this.o(a, iK$17, until, evidence$4, sc$5, evidence$2$5);
          this.z(a, iK$15, iK$17, until, evidence$4, sc$5);
        }
        this.z(a, from, iK$15, until, evidence$4, sc$5);
      }
    }
  } else if ((a instanceof $ac_S)) {
    if ((evidence$4 === $m_s_math_Ordering$Short$())) {
      $m_ju_Arrays$().gV(a, from, until);
    } else {
      var evidence$2$6 = $m_s_reflect_ManifestFactory$ShortManifest$();
      if ((((until - from) | 0) < 32)) {
        this.y(a, from, until, evidence$4);
      } else {
        var iK$18 = ((((from + until) | 0) >>> 1) | 0);
        var sc$6 = new $ac_S(((iK$18 - from) | 0));
        if ((((iK$18 - from) | 0) < 32)) {
          this.y(a, from, iK$18, evidence$4);
        } else {
          var iK$19 = ((((from + iK$18) | 0) >>> 1) | 0);
          this.o(a, from, iK$19, evidence$4, sc$6, evidence$2$6);
          this.o(a, iK$19, iK$18, evidence$4, sc$6, evidence$2$6);
          this.z(a, from, iK$19, iK$18, evidence$4, sc$6);
        }
        if ((((until - iK$18) | 0) < 32)) {
          this.y(a, iK$18, until, evidence$4);
        } else {
          var iK$20 = ((((iK$18 + until) | 0) >>> 1) | 0);
          this.o(a, iK$18, iK$20, evidence$4, sc$6, evidence$2$6);
          this.o(a, iK$20, until, evidence$4, sc$6, evidence$2$6);
          this.z(a, iK$18, iK$20, until, evidence$4, sc$6);
        }
        this.z(a, from, iK$18, until, evidence$4, sc$6);
      }
    }
  } else if ((a instanceof $ac_Z)) {
    if ((evidence$4 === $m_s_math_Ordering$Boolean$())) {
      this.gM(a, from, until);
    } else {
      var evidence$2$7 = $m_s_reflect_ManifestFactory$BooleanManifest$();
      if ((((until - from) | 0) < 32)) {
        this.y(a, from, until, evidence$4);
      } else {
        var iK$21 = ((((from + until) | 0) >>> 1) | 0);
        var sc$7 = new $ac_Z(((iK$21 - from) | 0));
        if ((((iK$21 - from) | 0) < 32)) {
          this.y(a, from, iK$21, evidence$4);
        } else {
          var iK$22 = ((((from + iK$21) | 0) >>> 1) | 0);
          this.o(a, from, iK$22, evidence$4, sc$7, evidence$2$7);
          this.o(a, iK$22, iK$21, evidence$4, sc$7, evidence$2$7);
          this.z(a, from, iK$22, iK$21, evidence$4, sc$7);
        }
        if ((((until - iK$21) | 0) < 32)) {
          this.y(a, iK$21, until, evidence$4);
        } else {
          var iK$23 = ((((iK$21 + until) | 0) >>> 1) | 0);
          this.o(a, iK$21, iK$23, evidence$4, sc$7, evidence$2$7);
          this.o(a, iK$23, until, evidence$4, sc$7, evidence$2$7);
          this.z(a, iK$21, iK$23, until, evidence$4, sc$7);
        }
        this.z(a, from, iK$21, until, evidence$4, sc$7);
      }
    }
  } else if ((a === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(a);
  }
});
var $d_s_util_Sorting$ = new $TypeData().i($c_s_util_Sorting$, "scala.util.Sorting$", ({
  ev: 1
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
$p.l = (function(hash, data) {
  var h = this.cF(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.cF = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a5 = (function(hash, length) {
  return this.cb((hash ^ length));
});
$p.cb = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.f4 = (function(x, seed, ignorePrefix) {
  var arr = x.b2();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.b4()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.l(h, $f_T__hashCode__I(x.b4()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.l(h, $m_sr_Statics$().G(x.b3(i)));
      i = ((1 + i) | 0);
    }
    return this.a5(h, arr);
  }
});
$p.h1 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.b();
  while (iterator.f()) {
    var x = iterator.e();
    var h = $m_sr_Statics$().G(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.l(h$2, a);
  h$2 = this.l(h$2, b);
  h$2 = this.cF(h$2, c);
  return this.a5(h$2, n);
});
$p.gD = (function(xs, seed) {
  var it = xs.b();
  var h = seed;
  if ((!it.f())) {
    return this.a5(h, 0);
  }
  var x0 = it.e();
  if ((!it.f())) {
    return this.a5(this.l(h, $m_sr_Statics$().G(x0)), 1);
  }
  var x1 = it.e();
  var initial = $m_sr_Statics$().G(x0);
  h = this.l(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().G(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.f()) {
    h = this.l(h, prev);
    var hash = $m_sr_Statics$().G(it.e());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.l(h, hash);
      i = ((1 + i) | 0);
      while (it.f()) {
        h = this.l(h, $m_sr_Statics$().G(it.e()));
        i = ((1 + i) | 0);
      }
      return this.a5(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.cb(this.l(this.l(h0, rangeDiff), prev));
});
$p.H = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().Q(a);
  switch (l) {
    case 0: {
      return this.a5(h, 0);
      break;
    }
    case 1: {
      return this.a5(this.l(h, $m_sr_Statics$().G($m_sr_ScalaRunTime$().D(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().G($m_sr_ScalaRunTime$().D(a, 0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().G($m_sr_ScalaRunTime$().D(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().G($m_sr_ScalaRunTime$().D(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().G($m_sr_ScalaRunTime$().D(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a5(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cb(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.gE = (function(start, step, last, seed) {
  return this.cb(this.l(this.l(this.l(seed, start), step), last));
});
$p.gn = (function(a, seed) {
  var h = seed;
  var l = a.d();
  switch (l) {
    case 0: {
      return this.a5(h, 0);
      break;
    }
    case 1: {
      return this.a5(this.l(h, $m_sr_Statics$().G(a.g(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().G(a.g(0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().G(a.g(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().G(a.g(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().G(a.g(i)));
            i = ((1 + i) | 0);
          }
          return this.a5(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cb(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.gu = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.k())) {
    var head = elems.i();
    var tail = elems.w();
    var hash = $m_sr_Statics$().G(head);
    h = this.l(h, hash);
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
  return ((rangeState === 2) ? this.gE(initial, rangeDiff, prev, seed) : this.a5(h, n));
});
/** @constructor */
function $c_jl_Character$() {
  this.fl = null;
  $n_jl_Character$ = this;
  this.fl = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.ds = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  bl: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Double$() {
}
$p = $c_jl_Double$.prototype = new $h_O();
$p.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
}
$h_jl_Double$.prototype = $p;
$p.dd = (function(a, b) {
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
  bn: 1,
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
function $c_jl_Long$() {
}
$p = $c_jl_Long$.prototype = new $h_O();
$p.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
}
$h_jl_Long$.prototype = $p;
$p.f0 = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (hi >>> 0.0).toString(16);
    var s = (lo >>> 0.0).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (lo >>> 0.0).toString(16);
  }
});
$p.gq = (function(lo, hi) {
  var lp = (1073741823 & lo);
  var mp = (1073741823 & ((((lo >>> 30) | 0) + (hi << 2)) | 0));
  var hp = ((hi >>> 28) | 0);
  if ((hp !== 0)) {
    var $x_2 = (hp >>> 0.0).toString(8);
    var s = (mp >>> 0.0).toString(8);
    var beginIndex = s.length;
    var $x_1 = "0000000000".substring(beginIndex);
    var s$1 = (lp >>> 0.0).toString(8);
    var beginIndex$1 = s$1.length;
    return (($x_2 + (("" + $x_1) + s)) + (("" + "0000000000".substring(beginIndex$1)) + s$1));
  } else if ((mp !== 0)) {
    var $x_3 = (mp >>> 0.0).toString(8);
    var s$2 = (lp >>> 0.0).toString(8);
    var beginIndex$2 = s$2.length;
    return ($x_3 + (("" + "0000000000".substring(beginIndex$2)) + s$2));
  } else {
    return (lp >>> 0.0).toString(8);
  }
});
var $d_jl_Long$ = new $TypeData().i($c_jl_Long$, "java.lang.Long$", ({
  br: 1,
  a: 1
}));
var $n_jl_Long$;
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$();
  }
  return $n_jl_Long$;
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
$p.gA = (function(value, offset, count) {
  var endOffset = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== endOffset)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
$p.gd = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).ge(format, args).r();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  bx: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_jl_Thread = new $TypeData().i($c_jl_Thread, "java.lang.Thread", ({
  aB: 1,
  bu: 1
}));
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.dF = s;
  if (writableStackTrace) {
    $thiz.gb();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.dF = null;
  }
  Z() {
    return this.dF;
  }
  gb() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.bY : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  r() {
    var className = $objectClassName(this);
    var message = this.Z();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  n() {
    return $c_O.prototype.n.call(this);
  }
  aC(that) {
    return $c_O.prototype.aC.call(this, that);
  }
  get "message"() {
    var m = this.Z();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.r();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
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
$p.v = (function(o1, o2) {
  return $dp_compareTo__O__I(o1, o2);
});
var $d_ju_Arrays$NaturalComparator$ = new $TypeData().i($c_ju_Arrays$NaturalComparator$, "java.util.Arrays$NaturalComparator$", ({
  bF: 1,
  v: 1
}));
var $n_ju_Arrays$NaturalComparator$;
function $m_ju_Arrays$NaturalComparator$() {
  if ((!$n_ju_Arrays$NaturalComparator$)) {
    $n_ju_Arrays$NaturalComparator$ = new $c_ju_Arrays$NaturalComparator$();
  }
  return $n_ju_Arrays$NaturalComparator$;
}
/** @constructor */
function $c_ju_Formatter$RootLocaleInfo$() {
}
$p = $c_ju_Formatter$RootLocaleInfo$.prototype = new $h_ju_Formatter$LocaleInfo();
$p.constructor = $c_ju_Formatter$RootLocaleInfo$;
/** @constructor */
function $h_ju_Formatter$RootLocaleInfo$() {
}
$h_ju_Formatter$RootLocaleInfo$.prototype = $p;
var $d_ju_Formatter$RootLocaleInfo$ = new $TypeData().i($c_ju_Formatter$RootLocaleInfo$, "java.util.Formatter$RootLocaleInfo$", ({
  bN: 1,
  bM: 1
}));
var $n_ju_Formatter$RootLocaleInfo$;
function $m_ju_Formatter$RootLocaleInfo$() {
  if ((!$n_ju_Formatter$RootLocaleInfo$)) {
    $n_ju_Formatter$RootLocaleInfo$ = new $c_ju_Formatter$RootLocaleInfo$();
  }
  return $n_ju_Formatter$RootLocaleInfo$;
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
$p.gt = (function() {
  var value = $p_ju_Random$__randomInt__I(this);
  var value$1 = $p_ju_Random$__randomInt__I(this);
  return $bL(value$1, value);
});
var $d_ju_Random$ = new $TypeData().i($c_ju_Random$, "java.util.Random$", ({
  bZ: 1,
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
$p.at = (function(a, i, v) {
  a.a[i] = v;
});
$p.S = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$, "java.util.internal.GenericArrayOps$ReusableAnyRefArrayOps$", ({
  c5: 1,
  aa: 1
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
  cS: 1,
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
    $thiz.ah($m_scm_Buffer$().eS(elems));
  } else {
    var it = elems.b();
    while (it.f()) {
      $thiz.Y(it.e());
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
  du: 1,
  dt: 1
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
$p.r = (function() {
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
$p.r = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.cx = 0;
  this.cx = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.r = (function() {
  return ("" + this.cx);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  eh: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.ag = null;
  this.ag = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.r = (function() {
  return ("" + this.ag);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  ek: 1,
  a: 1
}));
function $ct_s_util_Random__ju_Random__($thiz, self) {
  $thiz.cy = self;
  return $thiz;
}
/** @constructor */
function $c_s_util_Random() {
  this.cy = null;
}
$p = $c_s_util_Random.prototype = new $h_O();
$p.constructor = $c_s_util_Random;
/** @constructor */
function $h_s_util_Random() {
}
$h_s_util_Random.prototype = $p;
$p.aB = (function(minInclusive, maxExclusive) {
  if ((!(minInclusive < maxExclusive))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Invalid bounds");
  }
  var next = ((this.cy.f2() * (maxExclusive - minInclusive)) + minInclusive);
  return ((next < maxExclusive) ? next : $m_jl_Math$().gC(maxExclusive, (-Infinity)));
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.C = 0;
  this.eA = 0;
  this.fB = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.C = $f_T__hashCode__I("Seq");
  this.eA = $f_T__hashCode__I("Map");
  this.fB = $f_T__hashCode__I("Set");
  this.h1($m_sci_Nil$(), this.eA);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.fd = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.gn(xs, this.C) : ((xs instanceof $c_sci_List) ? this.gu(xs, this.C) : this.gD(xs, this.C)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  ex: 1,
  ew: 1
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
$p.b0 = (function(tipo, x, y) {
  return new $c_Lcalagem_Particula(tipo, x, y, $m_s_util_Random$().aB((-25.0), 25.0), $m_s_util_Random$().aB((-25.0), 25.0), 0.0, true);
});
var $d_Lcalagem_Particula$ = new $TypeData().i($c_Lcalagem_Particula$, "calagem.Particula$", ({
  b5: 1,
  av: 1,
  aZ: 1
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
function $s_Lcalagem_TipoParticula$__HidroxidoAluminio__Lcalagem_TipoParticula() {
  $m_Lcalagem_TipoParticula$();
  return $t_Lcalagem_TipoParticula$__HidroxidoAluminio;
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
  $t_Lcalagem_TipoParticula$__HidroxidoAluminio = new $c_Lcalagem_TipoParticula$$anon$1("HidroxidoAluminio", 7);
  $s_Lcalagem_TipoParticula$__Hidrogenio__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Aluminio__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Calcario__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Carbonato__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Calcio__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__DioxidoCarbono__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__Agua__Lcalagem_TipoParticula();
  $s_Lcalagem_TipoParticula$__HidroxidoAluminio__Lcalagem_TipoParticula();
}
$p = $c_Lcalagem_TipoParticula$.prototype = new $h_O();
$p.constructor = $c_Lcalagem_TipoParticula$;
/** @constructor */
function $h_Lcalagem_TipoParticula$() {
}
$h_Lcalagem_TipoParticula$.prototype = $p;
var $d_Lcalagem_TipoParticula$ = new $TypeData().i($c_Lcalagem_TipoParticula$, "calagem.TipoParticula$", ({
  ba: 1,
  av: 1,
  ds: 1
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
  this.m = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.r = (function() {
  return ((this.m.Y ? "interface " : (this.m.X ? "" : "class ")) + this.m.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  bm: 1,
  a: 1,
  V: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $ct_ju_Random__J__($thiz, seed_in_$_lo, seed_in_$_hi) {
  $thiz.gP(seed_in_$_lo, seed_in_$_hi);
  return $thiz;
}
function $ct_ju_Random__($thiz) {
  var $x_1 = $m_ju_Random$().gt();
  $ct_ju_Random__J__($thiz, $x_1.l, $x_1.h);
  return $thiz;
}
/** @constructor */
function $c_ju_Random() {
  this.da = 0;
  this.db = 0;
}
$p = $c_ju_Random.prototype = new $h_O();
$p.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
}
$h_ju_Random.prototype = $p;
$p.gP = (function(seed_in_$_lo, seed_in_$_hi) {
  var lo = ((-554899859) ^ seed_in_$_lo);
  var hi = (5 ^ seed_in_$_hi);
  var hi$1 = (65535 & hi);
  this.da = lo;
  this.db = hi$1;
});
$p.f1 = (function(bits) {
  var x_$_lo = this.da;
  var x_$_hi = this.db;
  var b0 = (65535 & x_$_lo);
  var b1 = ((x_$_lo >>> 16) | 0);
  var a1b0 = Math.imul(58989, b0);
  var lo = (a1b0 << 16);
  var hi = ((((((Math.imul((-429064192), x_$_hi) + Math.imul(384748, x_$_lo)) | 0) + Math.imul(58989, b1)) | 0) + ((a1b0 >>> 16) | 0)) | 0);
  var lo$1 = ((720896 + lo) | 0);
  var hi$1 = ((hi + (((lo$1 >>> 0) < 720896) | 0)) | 0);
  var lo$2 = (((lo$1 >>> 16) | 0) | (hi$1 << 16));
  var hi$2 = ((hi$1 >>> 16) | 0);
  this.da = lo$2;
  this.db = hi$2;
  return ((hi$1 >>> ((-bits) | 0)) | 0);
});
$p.f2 = (function() {
  return (1.1102230246251565E-16 * ((1.34217728E8 * this.f1(26)) + this.f1(27)));
});
var $d_ju_Random = new $TypeData().i($c_ju_Random, "java.util.Random", ({
  bY: 1,
  c7: 1,
  a: 1
}));
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.cn;
      break;
    }
    case 1: {
      return $thiz.bm;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.cp = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.cp = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.as = (function(it) {
  return this.cp.eQ(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.U = (function() {
  return this.cp.cG($m_s_reflect_ManifestFactory$AnyManifest$());
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.j();
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
  this.e2 = null;
  this.e1 = null;
  this.e2 = self;
  this.e1 = p;
}
$p = $c_sc_IterableOps$WithFilter.prototype = new $h_sc_WithFilter();
$p.constructor = $c_sc_IterableOps$WithFilter;
/** @constructor */
function $h_sc_IterableOps$WithFilter() {
}
$h_sc_IterableOps$WithFilter.prototype = $p;
$p.eP = (function() {
  return new $c_sc_View$Filter(this.e2, this.e1, false);
});
var $d_sc_IterableOps$WithFilter = new $TypeData().i($c_sc_IterableOps$WithFilter, "scala.collection.IterableOps$WithFilter", ({
  cl: 1,
  cz: 1,
  a: 1
}));
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).c8(xs);
}
/** @constructor */
function $c_sc_Iterator$() {
  this.a1 = null;
  $n_sc_Iterator$ = this;
  this.a1 = new $c_sc_Iterator$$anon$19();
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
$p.as = (function(source) {
  return source.b();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  cm: 1,
  a: 1,
  R: 1
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
$p.eT = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.b()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().eU(it))));
});
$p.U = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.eT(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.as = (function(source) {
  return this.eT(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  cw: 1,
  a: 1,
  R: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dL)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.ew = null;
  this.ew = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.a4 = (function() {
  return (0, this.ew)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  ec: 1,
  eb: 1,
  am: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.ex = null;
  this.ex = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.ex)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  ee: 1,
  ed: 1,
  j: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  ei: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Random$() {
  this.cy = null;
  $ct_s_util_Random__ju_Random__(this, $ct_ju_Random__(new $c_ju_Random()));
}
$p = $c_s_util_Random$.prototype = new $h_s_util_Random();
$p.constructor = $c_s_util_Random$;
/** @constructor */
function $h_s_util_Random$() {
}
$h_s_util_Random$.prototype = $p;
var $d_s_util_Random$ = new $TypeData().i($c_s_util_Random$, "scala.util.Random$", ({
  eu: 1,
  et: 1,
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
  this.R = null;
  this.A = 0.0;
  this.B = 0.0;
  this.av = 0.0;
  this.aw = 0.0;
  this.b6 = 0.0;
  this.K = false;
  this.R = tipo;
  this.A = x;
  this.B = y;
  this.av = vx;
  this.aw = vy;
  this.b6 = idade;
  this.K = vivo;
}
$p = $c_Lcalagem_Particula.prototype = new $h_O();
$p.constructor = $c_Lcalagem_Particula;
/** @constructor */
function $h_Lcalagem_Particula() {
}
$h_Lcalagem_Particula.prototype = $p;
$p.bC = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.n = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().l(acc, 203662621);
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().G(this.R));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bB(this.A));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bB(this.B));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bB(this.av));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bB(this.aw));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bB(this.b6));
  acc = $m_sr_Statics$().l(acc, (this.K ? 1231 : 1237));
  return $m_sr_Statics$().a5(acc, 7);
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().fD(this);
});
$p.b2 = (function() {
  return 7;
});
$p.b4 = (function() {
  return "Particula";
});
$p.b3 = (function(n) {
  switch (n) {
    case 0: {
      return this.R;
      break;
    }
    case 1: {
      return this.A;
      break;
    }
    case 2: {
      return this.B;
      break;
    }
    case 3: {
      return this.av;
      break;
    }
    case 4: {
      return this.aw;
      break;
    }
    case 5: {
      return this.b6;
      break;
    }
    case 6: {
      return this.K;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
var $d_Lcalagem_Particula = new $TypeData().i($c_Lcalagem_Particula, "calagem.Particula", ({
  b4: 1,
  d: 1,
  ab: 1,
  a: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  bh: 1,
  bo: 1,
  o: 1,
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
  bj: 1,
  a: 1,
  a0: 1,
  V: 1
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
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  aw: 1,
  a: 1,
  a0: 1,
  V: 1
}), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  t: 1,
  s: 1,
  o: 1,
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
$p.eD = (function(str) {
  var str$1 = $m_jl_String$().gA(str, 0, str.a.length);
  this.c = (("" + this.c) + str$1);
  return this;
});
$p.r = (function() {
  return this.c;
});
$p.d = (function() {
  return this.c.length;
});
$p.eG = (function(index) {
  return this.c.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  by: 1,
  al: 1,
  bf: 1,
  a: 1
}));
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.b9 === null)) {
    $thiz.aP = (("" + $thiz.aP) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.b9 === null)) {
    $thiz.aP = ((("" + $thiz.aP) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.b9 === null)) {
    $thiz.aP = (($thiz.aP + (("" + s1) + s2)) + s3);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2, s3]);
  }
}
function $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, ss) {
  try {
    var len = (ss.length | 0);
    var i = 0;
    while ((i !== len)) {
      var t = ss[i];
      var this$2 = $thiz.b9;
      this$2.c = (("" + this$2.c) + t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.cW) {
    throw new $c_ju_FormatterClosedException();
  }
  var lastImplicitArgIndex = 0;
  var lastArgIndex = 0;
  var fmtLength = format.length;
  var fmtIndex = 0;
  while ((fmtIndex !== fmtLength)) {
    var fromIndex = fmtIndex;
    var nextPercentIndex = (format.indexOf("%", fromIndex) | 0);
    if ((nextPercentIndex < 0)) {
      var beginIndex = fmtIndex;
      $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex));
      return $thiz;
    }
    var beginIndex$1 = fmtIndex;
    $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex$1, nextPercentIndex));
    var formatSpecifierIndex = ((1 + nextPercentIndex) | 0);
    var re = $m_ju_Formatter$().dL;
    re.lastIndex = formatSpecifierIndex;
    var execResult = re.exec(format);
    if (((execResult === null) || ((execResult.index | 0) !== formatSpecifierIndex))) {
      $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, ((formatSpecifierIndex === fmtLength) ? 37 : format.charCodeAt(formatSpecifierIndex)));
    }
    fmtIndex = (re.lastIndex | 0);
    var index = ((fmtIndex - 1) | 0);
    var conversion$2 = format.charCodeAt(index);
    var flags = $p_ju_Formatter__parseFlags__T__C__I($thiz, execResult[2], conversion$2);
    var width = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[3]);
    var precision = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[4]);
    if ((width === (-2))) {
      $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, (-2147483648));
    }
    if ((precision === (-2))) {
      $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, (-2147483648));
    }
    if ((conversion$2 === 110)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((width !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width);
      }
      if ((flags !== 0)) {
        $thiz.dk(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.dk(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.cC(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().dK.a[((conversionLower - 97) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.dk(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.cC(conversionLower, flags, illegalFlags);
      }
      if (((128 & flags) !== 0)) {
        var argIndex = lastArgIndex;
      } else {
        var i = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[1]);
        if ((i === (-1))) {
          lastImplicitArgIndex = ((1 + lastImplicitArgIndex) | 0);
          var argIndex = lastImplicitArgIndex;
        } else {
          if ((i <= 0)) {
            $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, i);
          }
          var argIndex = i;
        }
      }
      if (((argIndex <= 0) || (argIndex > args.a.length))) {
        $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      lastArgIndex = argIndex;
      var arg = args.a[((argIndex - 1) | 0)];
      if ((((arg === null) && (conversionLower !== 98)) && (conversionLower !== 115))) {
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, "null");
      } else {
        $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision);
      }
    }
  }
  return $thiz;
}
function $p_ju_Formatter__parseFlags__T__C__I($thiz, flags, conversion) {
  var bits = (((((conversion - 65) | 0) >>> 0) <= 25) ? 256 : 0);
  var len = flags.length;
  var i = 0;
  while ((i !== len)) {
    var index = i;
    var f = flags.charCodeAt(index);
    switch (f) {
      case 45: {
        var bit = 1;
        break;
      }
      case 35: {
        var bit = 2;
        break;
      }
      case 43: {
        var bit = 4;
        break;
      }
      case 32: {
        var bit = 8;
        break;
      }
      case 48: {
        var bit = 16;
        break;
      }
      case 44: {
        var bit = 32;
        break;
      }
      case 40: {
        var bit = 64;
        break;
      }
      case 60: {
        var bit = 128;
        break;
      }
      default: {
        var bit;
        throw new $c_jl_AssertionError($bC(f));
      }
    }
    if (((bits & bit) !== 0)) {
      $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, f);
    }
    bits = (bits | bit);
    i = ((1 + i) | 0);
  }
  return bits;
}
function $p_ju_Formatter__parsePositiveInt__O__I($thiz, capture) {
  if ((capture !== (void 0))) {
    var x = (+parseInt(capture, 10));
    return ((x <= 2.147483647E9) ? $doubleToInt(x) : (-2));
  } else {
    return (-1);
  }
}
function $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision) {
  switch (conversionLower) {
    case 98: {
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, (((arg === false) || (arg === null)) ? "false" : "true"));
      break;
    }
    case 104: {
      var $x_1 = $m_ju_Formatter$RootLocaleInfo$();
      var i = $dp_hashCode__I(arg);
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $x_1, flags, width, precision, (i >>> 0.0).toString(16));
      break;
    }
    case 115: {
      if ($is_ju_Formattable(arg)) {
        var formattableFlags = (((((1 & flags) !== 0) | 0) | (((2 & flags) !== 0) ? 4 : 0)) | (((256 & flags) !== 0) ? 2 : 0));
        arg.h7($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.cC(conversionLower, flags, 2);
        }
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, ("" + arg));
      }
      break;
    }
    case 99: {
      if ((arg instanceof $Char)) {
        var $x_2 = ("" + $cToS($uC(arg)));
      } else {
        if ((!$isInt(arg))) {
          $thiz.ca(conversionLower, arg);
        }
        var x3 = (arg | 0);
        if (((x3 >>> 0) > 1114111)) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3);
        }
        var $x_2 = $m_jl_Character$().ds(x3);
      }
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, (-1), $x_2);
      break;
    }
    case 100: {
      if ($isInt(arg)) {
        var $x_3 = ("" + (arg | 0));
      } else if ((arg instanceof $Long)) {
        var $x_4 = $uJ(arg);
        var x3$2_$_lo = $x_4.l;
        var x3$2_$_hi = $x_4.h;
        var $x_3 = $m_RTLong$().dr(x3$2_$_lo, x3$2_$_hi);
      } else {
        if ((!false)) {
          $thiz.ca(conversionLower, arg);
        }
        var $x_3 = arg.r();
      }
      $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, $x_3, "");
      break;
    }
    case 111:
    case 120: {
      var isOctal = (conversionLower === 111);
      var prefix = (((2 & flags) === 0) ? "" : (isOctal ? "0" : (((256 & flags) !== 0) ? "0X" : "0x")));
      if (false) {
        var radix = (isOctal ? 8 : 16);
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.ds(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (x2$5 >>> 0.0).toString(8) : (x2$5 >>> 0.0).toString(16));
        } else {
          if ((!(arg instanceof $Long))) {
            $thiz.ca(conversionLower, arg);
          }
          var $x_5 = $uJ(arg);
          var x3$3_$_lo = $x_5.l;
          var x3$3_$_hi = $x_5.h;
          var str$6 = (isOctal ? $m_jl_Long$().gq(x3$3_$_lo, x3$3_$_hi) : $m_jl_Long$().f0(x3$3_$_lo, x3$3_$_hi));
        }
        if (((76 & flags) !== 0)) {
          $thiz.cC(conversionLower, flags, 76);
        }
        $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str$6));
      }
      break;
    }
    case 101:
    case 102:
    case 103: {
      if (((typeof arg) === "number")) {
        var x2$6 = (+arg);
        if (((x2$6 !== x2$6) || ((x2$6 === Infinity) || (x2$6 === (-Infinity))))) {
          $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x2$6);
        } else {
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().gs(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().gr(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.ca(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.ca(conversionLower, arg);
      }
      break;
    }
    default: {
      throw new $c_jl_AssertionError((("Unknown conversion '" + $cToS(conversionLower)) + "' was not rejected earlier"));
    }
  }
}
function $p_ju_Formatter__flagsToString__I__T($thiz, flags) {
  return ((((((((((1 & flags) !== 0) ? "-" : "") + (((2 & flags) !== 0) ? "#" : "")) + (((4 & flags) !== 0) ? "+" : "")) + (((8 & flags) !== 0) ? " " : "")) + (((16 & flags) !== 0) ? "0" : "")) + (((32 & flags) !== 0) ? "," : "")) + (((64 & flags) !== 0) ? "(" : "")) + (((128 & flags) !== 0) ? "<" : ""));
}
function $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, digitsAfterDot, forceDecimalSep) {
  var rounded = x.f7(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.aH ? "-" : "");
  var intStr = rounded.aI;
  var fractionalDigitCount = ((intStr.length - 1) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().dj(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.ax) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var sign = (exponent >> 31);
  var this$5 = (((exponent ^ sign) - sign) | 0);
  var exponentAbsStr0 = ("" + this$5);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.gO(scale);
  var signStr = (rounded.aH ? "-" : "");
  var intStr = rounded.aI;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().dj(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.f7(p);
  var orderOfMagnitude = ((((rounded.aI.length - 1) | 0) - rounded.ax) | 0);
  if (((orderOfMagnitude >= (-4)) && (orderOfMagnitude < p))) {
    var b = ((((p - orderOfMagnitude) | 0) - 1) | 0);
    return $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((b < 0) ? 0 : b), forceDecimalSep);
  } else {
    return $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((p - 1) | 0), forceDecimalSep);
  }
}
function $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, arg) {
  if (((arg !== arg) || ((arg === Infinity) || (arg === (-Infinity))))) {
    $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, arg);
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, arg, true);
    var lo = (fpBitsDataView.getInt32(0, true) | 0);
    var hi = (fpBitsDataView.getInt32(4, true) | 0);
    var negative = (hi < 0);
    var hi$1 = (1048575 & hi);
    var biasedExponent = (2047 & ((hi >>> 20) | 0));
    var actualPrecision = ((precision === 0) ? 1 : ((precision > 12) ? (-1) : precision));
    var signStr = (negative ? "-" : (((4 & flags) !== 0) ? "+" : (((8 & flags) !== 0) ? " " : "")));
    if ((biasedExponent === 0)) {
      if (((lo | hi$1) === 0)) {
        var x1___1 = "0";
        var x1___2 = $bL(0, 0);
        var x1___3 = 0;
      } else if ((actualPrecision === (-1))) {
        var x1___1 = "0";
        var x1___2 = $bL(lo, hi$1);
        var x1___3 = (-1022);
      } else {
        var leadingZeros = ((hi$1 !== 0) ? Math.clz32(hi$1) : ((32 + Math.clz32(lo)) | 0));
        var shift = ((leadingZeros - 11) | 0);
        var lo$2 = (((32 & shift) === 0) ? (lo << shift) : 0);
        var hi$2 = (((32 & shift) === 0) ? (((((lo >>> 1) | 0) >>> (~shift)) | 0) | (hi$1 << shift)) : (lo << shift));
        var hi$3 = (1048575 & hi$2);
        var normalizedExponent = (((-1022) - shift) | 0);
        var x1___1 = "1";
        var x1___2 = $bL(lo$2, hi$3);
        var x1___3 = normalizedExponent;
      }
    } else {
      var _3 = ((biasedExponent - 1023) | 0);
      var x1___1 = "1";
      var x1___2 = $bL(lo, hi$1);
      var x1___3 = _3;
    }
    var implicitBitStr = x1___1;
    var $x_1 = $uJ(x1___2);
    var mantissa_$_lo = $x_1.l;
    var mantissa_$_hi = $x_1.h;
    var exponent = (x1___3 | 0);
    if ((actualPrecision === (-1))) {
      var roundedMantissa_$_lo = mantissa_$_lo;
      var roundedMantissa_$_hi = mantissa_$_hi;
    } else {
      var n = ((52 - (actualPrecision << 2)) | 0);
      var lo$3 = (((32 & n) === 0) ? (1 << n) : 0);
      var hi$4 = (((32 & n) === 0) ? 0 : (1 << n));
      var lo$4 = ((lo$3 - 1) | 0);
      var hi$5 = ((((hi$4 - 1) | 0) + ((lo$4 !== (-1)) | 0)) | 0);
      var lo$5 = (((lo$3 >>> 1) | 0) | (hi$4 << 31));
      var hi$6 = (hi$4 >> 1);
      var lo$6 = (~lo$4);
      var hi$7 = (~hi$5);
      var lo$7 = (mantissa_$_lo & lo$6);
      var hi$8 = (mantissa_$_hi & hi$7);
      var lo$8 = (mantissa_$_lo & lo$4);
      var hi$9 = (mantissa_$_hi & hi$5);
      if (((hi$9 === hi$6) ? ((lo$8 >>> 0) < (lo$5 >>> 0)) : (hi$9 < hi$6))) {
        var roundedMantissa_$_lo = lo$7;
        var roundedMantissa_$_hi = hi$8;
      } else if (((hi$9 === hi$6) ? ((lo$8 >>> 0) > (lo$5 >>> 0)) : (hi$9 > hi$6))) {
        var lo$9 = ((lo$7 + lo$3) | 0);
        var hi$10 = ((((hi$8 + hi$4) | 0) + (((lo$9 >>> 0) < (lo$7 >>> 0)) | 0)) | 0);
        var roundedMantissa_$_lo = lo$9;
        var roundedMantissa_$_hi = hi$10;
      } else if ((((lo$7 & lo$3) | (hi$8 & hi$4)) === 0)) {
        var roundedMantissa_$_lo = lo$7;
        var roundedMantissa_$_hi = hi$8;
      } else {
        var lo$11 = ((lo$7 + lo$3) | 0);
        var hi$12 = ((((hi$8 + hi$4) | 0) + (((lo$11 >>> 0) < (lo$7 >>> 0)) | 0)) | 0);
        var roundedMantissa_$_lo = lo$11;
        var roundedMantissa_$_hi = hi$12;
      }
    }
    var baseStr = $m_jl_Long$().f0(roundedMantissa_$_lo, roundedMantissa_$_hi);
    var beginIndex = baseStr.length;
    var padded = (("" + "0000000000000".substring(beginIndex)) + baseStr);
    $m_ju_Formatter$();
    if ((!(padded.length === 13))) {
      throw new $c_jl_AssertionError("padded mantissa does not have the right number of bits");
    }
    var minLength = ((actualPrecision < 1) ? 1 : actualPrecision);
    var len = padded.length;
    while (((len > minLength) && (padded.charCodeAt(((len - 1) | 0)) === 48))) {
      len = ((len - 1) | 0);
    }
    var endIndex = len;
    var mantissaStr = padded.substring(0, endIndex);
    var exponentStr = ("" + exponent);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, (signStr + (((256 & flags) !== 0) ? "0X" : "0x")), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((((implicitBitStr + ".") + mantissaStr) + "p") + exponentStr)));
  }
}
function $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, (((precision >>> 0) >= (str.length >>> 0)) ? str : str.substring(0, precision))));
}
function $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((x !== x) ? "NaN" : ((x > 0.0) ? (((4 & flags) !== 0) ? "+Infinity" : (((8 & flags) !== 0) ? " Infinity" : "Infinity")) : (((64 & flags) !== 0) ? "(Infinity)" : "-Infinity")))));
}
function $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str, basePrefix) {
  if (((str.length >= width) && ((110 & flags) === 0))) {
    $p_ju_Formatter__sendToDest__T__V($thiz, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else if (((126 & flags) === 0)) {
    $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else {
    if ((str.charCodeAt(0) !== 45)) {
      if (((4 & flags) !== 0)) {
        var x1___1 = "+";
        var x1___2 = str;
      } else if (((8 & flags) !== 0)) {
        var x1___1 = " ";
        var x1___2 = str;
      } else {
        var x1___1 = "";
        var x1___2 = str;
      }
    } else if (((64 & flags) !== 0)) {
      var x1___1 = "(";
      var x1___2 = (str.substring(1) + ")");
    } else {
      var x1___1 = "-";
      var x1___2 = str.substring(1);
    }
    var numberPrefix = x1___1;
    var rest0 = x1___2;
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, (("" + numberPrefix) + basePrefix), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, (((32 & flags) !== 0) ? $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, rest0) : rest0)));
  }
}
function $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, s) {
  var len = s.length;
  var index = 0;
  while (((index !== len) && ((((s.charCodeAt(index) - 48) | 0) >>> 0) <= 9))) {
    index = ((1 + index) | 0);
  }
  index = ((index - 3) | 0);
  if ((index <= 0)) {
    return s;
  } else {
    var beginIndex = index;
    var result = s.substring(beginIndex);
    while ((index > 3)) {
      var next = ((index - 3) | 0);
      var endIndex = index;
      result = ((s.substring(next, endIndex) + ",") + result);
      index = next;
    }
    var endIndex$1 = index;
    return ((s.substring(0, endIndex$1) + ",") + result);
  }
}
function $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, str) {
  var len = str.length;
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__V($thiz, str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), str);
  }
}
function $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str) {
  var len = ((prefix.length + str.length) | 0);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, prefix, str);
  } else if (((16 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, $p_ju_Formatter__strRepeat__T__I__T($thiz, "0", ((width - len) | 0)), str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), prefix, str);
  }
}
function $p_ju_Formatter__strRepeat__T__I__T($thiz, s, times) {
  var result = "";
  var i = 0;
  while ((i !== times)) {
    result = (("" + result) + s);
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, flag) {
  throw new $c_ju_DuplicateFormatFlagsException(("" + $cToS(flag)));
}
function $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion) {
  throw new $c_ju_UnknownFormatConversionException(("" + $cToS(conversion)));
}
function $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision) {
  throw new $c_ju_IllegalFormatPrecisionException(precision);
}
function $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width) {
  throw new $c_ju_IllegalFormatWidthException(width);
}
function $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, index) {
  throw new $c_ju_IllegalFormatArgumentIndexException(((index === 0) ? "Illegal format argument index = 0" : "Format argument index: (not representable as int)"));
}
function $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatWidthException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatArgumentException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, arg) {
  throw new $c_ju_IllegalFormatCodePointException(arg);
}
function $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult$1) {
  return ("%" + execResult$1[0]);
}
function $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, x, flags$1, precision$1, conversionLower$1, localeInfo$1, width$1) {
  var forceDecimalSep = ((2 & flags$1) !== 0);
  var actualPrecision = ((precision$1 >= 0) ? precision$1 : 6);
  switch (conversionLower$1) {
    case 101: {
      var $x_1 = $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    case 102: {
      var $x_1 = $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    default: {
      var $x_1 = $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
    }
  }
  $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo$1, flags$1, width$1, $x_1, "");
}
function $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, dest, formatterLocaleInfo) {
  $thiz.b9 = dest;
  $thiz.dJ = formatterLocaleInfo;
  $thiz.aP = "";
  $thiz.cW = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.b9 = null;
  this.dJ = null;
  this.aP = null;
  this.cW = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.ge = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.dJ, format, args);
});
$p.r = (function() {
  if (this.cW) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.b9 === null) ? this.aP : this.b9.c);
});
$p.dk = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.cC = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.ca = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  bJ: 1,
  bc: 1,
  bi: 1,
  bd: 1
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
$p.v = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.at = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.S = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ByteArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ByteArrayOps$, "java.util.internal.GenericArrayOps$ByteArrayOps$", ({
  c1: 1,
  aa: 1,
  ad: 1,
  v: 1
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
$p.v = (function(o1, o2) {
  return (($uC(o1) - $uC(o2)) | 0);
});
$p.at = (function(a, i, v) {
  var v$1 = $uC(v);
  a.a[i] = v$1;
});
$p.S = (function(a, i) {
  return $bC(a.a[i]);
});
var $d_ju_internal_GenericArrayOps$CharArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$CharArrayOps$, "java.util.internal.GenericArrayOps$CharArrayOps$", ({
  c2: 1,
  aa: 1,
  ad: 1,
  v: 1
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
$p.v = (function(o1, o2) {
  var x = (o1 | 0);
  var y = (o2 | 0);
  return ((x === y) ? 0 : ((x < y) ? (-1) : 1));
});
$p.at = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.S = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$IntArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$IntArrayOps$, "java.util.internal.GenericArrayOps$IntArrayOps$", ({
  c3: 1,
  aa: 1,
  ad: 1,
  v: 1
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
$p.v = (function(o1, o2) {
  var $x_1 = $uJ(o1);
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var $x_2 = $uJ(o2);
  var y_$_lo = $x_2.l;
  var y_$_hi = $x_2.h;
  return ((x_$_hi === y_$_hi) ? ((x_$_lo === y_$_lo) ? 0 : (((x_$_lo >>> 0) < (y_$_lo >>> 0)) ? (-1) : 1)) : ((x_$_hi < y_$_hi) ? (-1) : 1));
});
$p.at = (function(a, i, v) {
  var $x_1 = $uJ(v);
  var v$1_$_lo = $x_1.l;
  var v$1_$_hi = $x_1.h;
  var $x_2 = a.a;
  var $x_3 = (i << 1);
  $x_2[$x_3] = v$1_$_lo;
  $x_2[(($x_3 + 1) | 0)] = v$1_$_hi;
});
$p.S = (function(a, i) {
  var $x_1 = a.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
var $d_ju_internal_GenericArrayOps$LongArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$LongArrayOps$, "java.util.internal.GenericArrayOps$LongArrayOps$", ({
  c4: 1,
  aa: 1,
  ad: 1,
  v: 1
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
$p.v = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.at = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.S = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ShortArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ShortArrayOps$, "java.util.internal.GenericArrayOps$ShortArrayOps$", ({
  c6: 1,
  aa: 1,
  ad: 1,
  v: 1
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
$p.j = (function() {
  return (-1);
});
$p.ab = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.au = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().bi(this);
});
$p.b = (function() {
  return this;
});
$p.c8 = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.r = (function() {
  return "<iterator>";
});
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.bN = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.bN = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.eS = (function(it) {
  return this.bN.as(it);
});
$p.U = (function() {
  return this.bN.U();
});
$p.as = (function(source) {
  return this.eS(source);
});
function $f_sc_SeqOps__sorted__s_math_Ordering__O($thiz, ord) {
  var len = $thiz.d();
  var b = $thiz.b1();
  if ((len === 1)) {
    b.Y($thiz.i());
  } else if ((len > 1)) {
    b.al(len);
    var arr = new $ac_O(len);
    $thiz.ab(arr, 0, 2147483647);
    $m_ju_Arrays$().bD(arr, ord);
    var i = 0;
    while ((i < len)) {
      b.Y(arr.a[i]);
      i = ((1 + i) | 0);
    }
  }
  return b.ad();
}
function $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($thiz, f, ord) {
  return $thiz.W(new $c_s_math_Ordering$$anon$1(f, ord));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.T(0) === 0);
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.ak().U();
  var it = $thiz.b();
  while (it.f()) {
    b.Y(f.h(it.e()));
  }
  return b.ad();
}
function $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O($thiz, pred, isFlipped) {
  var b = $thiz.b1();
  var it = $thiz.b();
  while (it.f()) {
    var elem = it.e();
    if (((!(!pred.h(elem))) !== isFlipped)) {
      b.Y(elem);
    }
  }
  return b.ad();
}
/** @constructor */
function $c_sci_LazyList$() {
  this.s = null;
  this.eg = null;
  this.eh = false;
  $n_sci_LazyList$ = this;
  this.s = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.f9 = (function() {
  if ((!this.eh)) {
    this.eg = new $c_sci_LazyListBase$TailUpdater();
    this.eh = true;
  }
  return this.eg;
});
$p.gL = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.ag;
    var i = iRef.cx;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().s)))) {
      rest = rest.N();
      restRef.ag = rest;
      i = ((i - 1) | 0);
      iRef.cx = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.eU = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.j() === 0) ? this.s : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fa(coll.b()))))));
});
$p.fb = (function(it, suffix) {
  return (it.f() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fb(it, suffix))))) : suffix.a4());
});
$p.fa = (function(it) {
  return (it.f() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fa(it))))) : this.s);
});
$p.U = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.as = (function(source) {
  return this.eU(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  cN: 1,
  a: 1,
  R: 1,
  a2: 1
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
  this.en = null;
  this.bT = null;
  this.en = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bT = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.fM = (function(x) {
  this.bT.Y(x);
  return this;
});
$p.fG = (function(xs) {
  this.bT.ah(xs);
  return this;
});
$p.al = (function(size) {
  this.bT.al(size);
});
$p.ad = (function() {
  return this.en.h(this.bT.ad());
});
$p.Y = (function(elem) {
  return this.fM(elem);
});
$p.ah = (function(elems) {
  return this.fG(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  dg: 1,
  Y: 1,
  Z: 1,
  a4: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.aa = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.aa = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.al = (function(size) {
});
$p.aY = (function(elem) {
  this.aa.Y(elem);
  return this;
});
$p.fH = (function(xs) {
  this.aa.ah(xs);
  return this;
});
$p.ad = (function() {
  return this.aa;
});
$p.Y = (function(elem) {
  return this.aY(elem);
});
$p.ah = (function(elems) {
  return this.fH(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  aV: 1,
  Y: 1,
  Z: 1,
  a4: 1
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
$p.bC = (function() {
  return new $c_s_Product$$anon$1(this);
});
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  bg: 1,
  t: 1,
  s: 1,
  o: 1,
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
  bk: 1,
  a9: 1,
  a: 1,
  a0: 1,
  V: 1
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
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  ay: 1,
  t: 1,
  s: 1,
  o: 1,
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
  bq: 1,
  t: 1,
  s: 1,
  o: 1,
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
  bt: 1,
  t: 1,
  s: 1,
  o: 1,
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
  bv: 1,
  a9: 1,
  a: 1,
  a0: 1,
  V: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bA: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  bG: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  bX: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.dX)) {
    if (($thiz.cm === null)) {
      var $x_1 = "null";
    } else {
      var cls = $m_sr_ScalaRunTime$().cz($thiz.cm);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.m.N));
      try {
        var $x_1 = ((($thiz.cm + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.dW = $x_1;
    $thiz.dX = true;
  }
  return $thiz.dW;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.cm = null;
    this.dW = null;
    this.dX = false;
    this.cm = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  ca: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.bI = 0;
  this.dZ = 0;
  this.dY = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.dY = outer;
  this.bI = 0;
  this.dZ = outer.b2();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.f = (function() {
  return (this.bI < this.dZ);
});
$p.e = (function() {
  var result = this.dY.b3(this.bI);
  this.bI = ((1 + this.bI) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  cb: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.cn = null;
  this.bm = null;
  this.cn = _1;
  this.bm = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.b2 = (function() {
  return 2;
});
$p.b3 = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.r = (function() {
  return (((("(" + this.cn) + ",") + this.bm) + ")");
});
$p.b4 = (function() {
  return "Tuple2";
});
$p.bC = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.n = (function() {
  return $m_s_util_hashing_MurmurHash3$().f4(this, (-116390334), true);
});
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  cd: 1,
  cc: 1,
  ab: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.cp = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  ci: 1,
  ch: 1,
  a: 1,
  R: 1,
  a2: 1
}));
function $f_sc_IndexedSeqOps__take__I__O($thiz, n) {
  return $thiz.c9($ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), $thiz, n));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.k())) {
    return $thiz.g(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.aj() : $thiz.r())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.aj() + "("), ", ", ")");
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
$p.gB = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.j = (function() {
  return 0;
});
$p.e = (function() {
  this.gB();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  cn: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.e3 = null;
  this.cq = false;
  this.e3 = a$2;
  this.cq = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.f = (function() {
  return (!this.cq);
});
$p.e = (function() {
  if (this.cq) {
    return $m_sc_Iterator$().a1.e();
  } else {
    this.cq = true;
    return this.e3;
  }
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  co: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$6(p$5, isFlipped$2, outer) {
  this.e5 = null;
  this.e4 = false;
  this.cr = null;
  this.cs = false;
  this.bL = null;
  this.e5 = p$5;
  this.e4 = isFlipped$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bL = outer;
  this.cs = false;
}
$p = $c_sc_Iterator$$anon$6.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$6;
/** @constructor */
function $h_sc_Iterator$$anon$6() {
}
$h_sc_Iterator$$anon$6.prototype = $p;
$p.f = (function() {
  if (this.cs) {
    return true;
  } else {
    if ((!this.bL.f())) {
      return false;
    }
    this.cr = this.bL.e();
    while (((!(!this.e5.h(this.cr))) === this.e4)) {
      if ((!this.bL.f())) {
        return false;
      }
      this.cr = this.bL.e();
    }
    this.cs = true;
    return true;
  }
});
$p.e = (function() {
  if (this.f()) {
    this.cs = false;
    return this.cr;
  } else {
    return $m_sc_Iterator$().a1.e();
  }
});
var $d_sc_Iterator$$anon$6 = new $TypeData().i($c_sc_Iterator$$anon$6, "scala.collection.Iterator$$anon$6", ({
  cq: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.a2 instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.a2;
      $thiz.a2 = c.a2;
      $thiz.aS = c.aS;
      if ((c.af !== null)) {
        if (($thiz.ae === null)) {
          $thiz.ae = c.ae;
        }
        var x$proxy10 = c.ae;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().aO();
        }
        x$proxy10.bM = $thiz.af;
        $thiz.af = c.af;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.af === null)) {
      $thiz.a2 = null;
      $thiz.ae = null;
      return false;
    } else {
      $thiz.a2 = $thiz.af.gk();
      if (($thiz.ae === $thiz.af)) {
        var x$proxy12 = $thiz.ae;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().aO();
        }
        $thiz.ae = x$proxy12.bM;
      }
      $thiz.af = $thiz.af.bM;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aS) {
        return true;
      } else {
        if ((!(($thiz.a2 !== null) && $thiz.a2.f()))) {
          continue;
        }
        $thiz.aS = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.a2 = null;
  this.af = null;
  this.ae = null;
  this.aS = false;
  this.a2 = from;
  this.af = null;
  this.ae = null;
  this.aS = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.f = (function() {
  if (this.aS) {
    return true;
  } else if ((this.a2 !== null)) {
    if (this.a2.f()) {
      this.aS = true;
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
    this.aS = false;
    var x$proxy13 = this.a2;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().aO();
    }
    return x$proxy13.e();
  } else {
    return $m_sc_Iterator$().a1.e();
  }
});
$p.c8 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.af === null)) {
    this.af = c;
    this.ae = c;
  } else {
    var x$proxy14 = this.ae;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().aO();
    }
    x$proxy14.bM = c;
    this.ae = c;
  }
  if ((this.a2 === null)) {
    this.a2 = $m_sc_Iterator$().a1;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  aK: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.k())) {
    len = ((1 + len) | 0);
    these = these.w();
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
  var skipped = $thiz.eO(n);
  if (skipped.k()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.i();
}
function $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.k()) | 0);
    } else {
      if ((!xs$tailLocal1.k())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.w();
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
  this.bP = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.bP = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.f = (function() {
  return (!this.bP.k());
});
$p.e = (function() {
  var r = this.bP.i();
  this.bP = this.bP.w();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  cu: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.br = null;
  this.ei = null;
  this.fR();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.al = (function(size) {
});
$p.fR = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.ei = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.dg()))));
  this.br = deferred;
});
$p.gJ = (function() {
  this.br.di(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().s)));
  return this.ei;
});
$p.fL = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.br.di(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.dg())))));
  })));
  this.br = deferred;
  return this;
});
$p.fE = (function(xs) {
  if ((xs.j() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.br.di(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().fb(xs.b(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.dg()))))));
    this.br = deferred;
  }
  return this;
});
$p.ad = (function() {
  return this.gJ();
});
$p.Y = (function(elem) {
  return this.fL(elem);
});
$p.ah = (function(elems) {
  return this.fE(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  cP: 1,
  Y: 1,
  Z: 1,
  a4: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.bs = null;
  this.bs = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.f = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.bs) === $m_sci_LazyList$().s));
});
$p.e = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.bs) === $m_sci_LazyList$().s)) {
    return $m_sc_Iterator$().a1.e();
  } else {
    var res = this.bs.i();
    this.bs = this.bs.N();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  cR: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
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
$p.as = (function(source) {
  return $m_sci_Nil$().bi(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  cW: 1,
  a: 1,
  R: 1,
  a2: 1,
  ag: 1
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
  this.ej = null;
  $n_scm_ArrayBuffer$ = this;
  this.ej = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.eV = (function(coll) {
  var k = coll.j();
  if ((k >= 0)) {
    var array = this.fc(this.ej, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.ab(array, 0, 2147483647) : coll.b().ab(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).eB(coll);
  }
});
$p.U = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.gI = (function(arrayLen, targetLen) {
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
$p.fc = (function(array, curSize, targetSize) {
  var newLen = this.gI(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.q(0, res, 0, curSize);
    return res;
  }
});
$p.as = (function(source) {
  return this.eV(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  cZ: 1,
  a: 1,
  R: 1,
  a2: 1,
  ag: 1
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
  this.aa = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.al = (function(size) {
  this.aa.al(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  d0: 1,
  aV: 1,
  Y: 1,
  Z: 1,
  a4: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.bN = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  df: 1,
  aL: 1,
  a: 1,
  R: 1,
  a2: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.bV = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.bV = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.ah = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.al = (function(size) {
});
$p.ad = (function() {
  return this.bV;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.bN = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  dm: 1,
  aL: 1,
  a: 1,
  R: 1,
  a2: 1
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
$p.as = (function(source) {
  return new $c_scm_ListBuffer().dn(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  dn: 1,
  a: 1,
  R: 1,
  a2: 1,
  ag: 1
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
  this.d7 = null;
  this.et = null;
  this.es = 0;
  this.d7 = underlying;
  this.et = mutationCount;
  this.es = (mutationCount.a4() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().dc(this.es, (this.et.a4() | 0), "mutation occurred during iteration");
  return this.d7.f();
});
$p.e = (function() {
  return this.d7.e();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  dq: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
}));
function $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z($thiz, other) {
  if ((other instanceof $c_s_math_Ordering$Reverse)) {
    var x = other.be;
    return ((x !== null) && x.aC($thiz));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.m.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.m.Q())) + "]") : clazz.m.N);
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.ez = null;
  this.bX = 0;
  this.ey = 0;
  this.ez = x$1;
  this.bX = 0;
  this.ey = x$1.b2();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.f = (function() {
  return (this.bX < this.ey);
});
$p.e = (function() {
  var result = this.ez.b3(this.bX);
  this.bX = ((1 + this.bX) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  en: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1
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
$p.gh = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).ad();
});
$p.as = (function(source) {
  return this.gh(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  eq: 1,
  ag: 1,
  a: 1,
  R: 1,
  a2: 1
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
$p.eW = (function(source) {
  return this.U().ah(source).ad();
});
$p.U = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.aA))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.as = (function(source) {
  return this.eW(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  es: 1,
  ag: 1,
  a: 1,
  R: 1,
  a2: 1
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
  return $m_jl_Double$().dd($thiz, o);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  ax: 1,
  a9: 1,
  a: 1,
  a0: 1,
  V: 1,
  ac: 1
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
  return $m_jl_Double$().dd($thiz, o);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bp: 1,
  a9: 1,
  a: 1,
  a0: 1,
  V: 1,
  ac: 1
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
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  az: 1,
  a9: 1,
  a: 1,
  a0: 1,
  V: 1,
  ac: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().dr($thiz, $thizhi);
}
function $f_jl_Long__compareTo__O__I($thiz, $thizhi, o) {
  var $x_1 = o;
  var this$1_$_lo = $x_1.l;
  var this$1_$_hi = $x_1.h;
  return (($thizhi === this$1_$_hi) ? (($thiz === this$1_$_lo) ? 0 : ((($thiz >>> 0) < (this$1_$_lo >>> 0)) ? (-1) : 1)) : (($thizhi < this$1_$_hi) ? (-1) : 1));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  aA: 1,
  a9: 1,
  a: 1,
  a0: 1,
  V: 1,
  ac: 1
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
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().ds(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $f_T__compareTo__O__I($thiz, o) {
  return $f_T__compareTo__T__I($thiz, o);
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bw: 1,
  a: 1,
  a0: 1,
  al: 1,
  V: 1,
  ac: 1
}), ((x) => ((typeof x) === "string")));
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_ju_FormatterClosedException = new $TypeData().i($c_ju_FormatterClosedException, "java.util.FormatterClosedException", ({
  bO: 1,
  ay: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatException extends $c_jl_IllegalArgumentException {
}
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.j = (function() {
  return (-1);
});
$p.bg = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.k = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.ab = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.au = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().bi(this);
});
$p.aE = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this);
});
$p.i = (function() {
  return this.b().e();
});
$p.cB = (function(coll) {
  return this.ak().as(coll);
});
$p.b1 = (function() {
  return this.ak().U();
});
$p.aj = (function() {
  return this.a7();
});
$p.c9 = (function(coll) {
  return this.cB(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.co = null;
  this.ba = 0;
  this.cX = 0;
  this.co = xs;
  this.ba = 0;
  this.cX = $m_jl_reflect_Array$().Q(this.co);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.j = (function() {
  return ((this.cX - this.ba) | 0);
});
$p.f = (function() {
  return (this.ba < this.cX);
});
$p.e = (function() {
  if ((this.ba >= $m_jl_reflect_Array$().Q(this.co))) {
    $m_sc_Iterator$().a1.e();
  }
  var r = $m_sr_ScalaRunTime$().D(this.co, this.ba);
  this.ba = ((1 + this.ba) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  cg: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.cY = self;
  $thiz.bJ = 0;
  $thiz.aQ = self.d();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.cY = null;
  this.bJ = 0;
  this.aQ = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.j = (function() {
  return this.aQ;
});
$p.f = (function() {
  return (this.aQ > 0);
});
$p.e = (function() {
  if ((this.aQ > 0)) {
    var r = this.cY.g(this.bJ);
    this.bJ = ((1 + this.bJ) | 0);
    this.aQ = ((this.aQ - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().a1.e();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  aH: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.cZ = self;
  $thiz.aR = self.d();
  $thiz.bK = (($thiz.aR - 1) | 0);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  this.cZ = null;
  this.aR = 0;
  this.bK = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.f = (function() {
  return (this.aR > 0);
});
$p.e = (function() {
  if ((this.aR > 0)) {
    var r = this.cZ.g(this.bK);
    this.bK = ((this.bK - 1) | 0);
    this.aR = ((this.aR - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().a1.e();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  aI: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.bV = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().a1);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.fK = (function(elem) {
  this.bV = this.bV.c8(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.Y = (function(elem) {
  return this.fK(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  cp: 1,
  dl: 1,
  Y: 1,
  Z: 1,
  a4: 1,
  ah: 1
}));
/** @constructor */
function $c_sci_ArraySeq$() {
  this.ef = null;
  $n_sci_ArraySeq$ = this;
  this.ef = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.dh = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.bE($m_s_Array$().eR(it, tag)));
});
$p.cG = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.bE($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.bE = (function(x) {
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
$p.eQ = (function(it, evidence$1) {
  return this.dh(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cC: 1,
  a: 1,
  aG: 1,
  aE: 1,
  aF: 1,
  aP: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.d5 = 0;
  $thiz.ek = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.d5 = 0;
  this.ek = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.al = (function(size) {
  if ((this.d5 < size)) {
    this.gH(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.em = null;
  this.fm = null;
  $n_scm_ArraySeq$ = this;
  this.em = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.fm = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.gg = (function(it, evidence$1) {
  return this.cD($m_s_Array$().eR(it, evidence$1));
});
$p.cG = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.cD(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.M()));
});
$p.cD = (function(x) {
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
$p.eQ = (function(it, evidence$1) {
  return this.gg(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  d5: 1,
  a: 1,
  aG: 1,
  aE: 1,
  aF: 1,
  aP: 1
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
  this.d8 = null;
  this.eu = null;
  this.d8 = f$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.eu = outer;
}
$p = $c_s_math_Ordering$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$$anon$1;
/** @constructor */
function $h_s_math_Ordering$$anon$1() {
}
$h_s_math_Ordering$$anon$1.prototype = $p;
$p.aD = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  return this.eu.v(this.d8.h(x), this.d8.h(y));
});
var $d_s_math_Ordering$$anon$1 = new $TypeData().i($c_s_math_Ordering$$anon$1, "scala.math.Ordering$$anon$1", ({
  dv: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1
}));
function $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z($thiz, other) {
  return (other === $thiz.ev);
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.be = null;
  this.be = outer;
}
$p = $c_s_math_Ordering$Reverse.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
}
$h_s_math_Ordering$Reverse.prototype = $p;
$p.aD = (function(other) {
  var x$2 = this.be;
  return ((other === null) ? (x$2 === null) : other.aC(x$2));
});
$p.v = (function(x, y) {
  return this.be.v(y, x);
});
$p.aC = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true;
    }
  }
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x = this.be;
    var x$2 = obj.be;
    return ((x === null) ? (x$2 === null) : x.aC(x$2));
  }
  return false;
});
$p.n = (function() {
  return Math.imul(41, this.be.n());
});
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
var $d_s_math_Ordering$Reverse = new $TypeData().i($c_s_math_Ordering$Reverse, "scala.math.Ordering$Reverse", ({
  b0: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.bW = null;
  this.bW = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.n = (function() {
  return $m_sr_Statics$().G(this.bW);
});
$p.r = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.bW);
});
$p.M = (function() {
  return this.bW;
});
$p.L = (function(len) {
  return this.bW.m.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  dN: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1
}));
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.dG = null;
    this.dG = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return (("Flags = '" + this.dG) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  bH: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.dI = null;
    this.dH = 0;
    this.dI = f;
    this.dH = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return ((("Conversion = " + $cToS(this.dH)) + ", Flags = ") + this.dI);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  bI: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.dM = null;
    this.dM = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return this.dM;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  bP: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.dN = 0;
    this.dN = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    var i = this.dN;
    return ("Code point = 0x" + (i >>> 0.0).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  bQ: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.dP = 0;
    this.dO = null;
    this.dP = c;
    this.dO = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return ((("" + $cToS(this.dP)) + " != ") + this.dO.m.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  bR: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.dQ = null;
    this.dQ = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return (("Flags = '" + this.dQ) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  bS: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.dR = 0;
    this.dR = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return ("" + this.dR);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  bT: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.dS = 0;
    this.dS = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return ("" + this.dS);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  bU: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.dT = null;
    this.dT = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return (("Format specifier '" + this.dT) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  bV: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.dU = null;
    this.dU = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return this.dU;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  bW: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.dV = null;
    this.dV = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return (("Conversion = '" + this.dV) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  c0: 1,
  Q: 1,
  P: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.aj() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.J)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.d5 = 0;
  this.ek = 0;
  this.bt = null;
  this.el = false;
  this.d6 = null;
  this.bt = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.el = (elementClass === $d_C.l());
  this.d6 = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.eC = (function(elem) {
  var unboxedElem = (this.el ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cJ(this.bt) : elem));
  this.d6.push(unboxedElem);
  return this;
});
$p.fF = (function(xs) {
  var it = xs.b();
  while (it.f()) {
    this.eC(it.e());
  }
  return this;
});
$p.gH = (function(size) {
});
$p.ad = (function() {
  return $m_scm_ArrayBuilder$().cI(((this.bt === $d_V.l()) ? $d_jl_Void.l() : (((this.bt === $d_sr_Null$.l()) || (this.bt === $d_sr_Nothing$.l())) ? $d_O.l() : this.bt)), this.d6);
});
$p.r = (function() {
  return "ArrayBuilder.generic";
});
$p.Y = (function(elem) {
  return this.eC(elem);
});
$p.ah = (function(elems) {
  return this.fF(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  d4: 1,
  d2: 1,
  Y: 1,
  Z: 1,
  a4: 1,
  ah: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.cY = null;
  this.bJ = 0;
  this.aQ = 0;
  this.ep = null;
  this.eo = 0;
  this.ep = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.eo = (mutationCount.a4() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().dc(this.eo, (this.ep.a4() | 0), "mutation occurred during iteration");
  return (this.aQ > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  di: 1,
  aH: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(self, mutationCount) {
  this.cZ = null;
  this.aR = 0;
  this.bK = 0;
  this.er = null;
  this.eq = 0;
  this.er = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(this, self);
  this.eq = (mutationCount.a4() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedReverseIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = $p;
$p.f = (function() {
  $m_scm_MutationTracker$().dc(this.eq, (this.er.a4() | 0), "mutation occurred during iteration");
  return (this.aR > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedReverseIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedReverseIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedReverseIterator", ({
  dj: 1,
  aI: 1,
  w: 1,
  b: 1,
  c: 1,
  x: 1,
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
$p.aD = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  var x$1 = (!(!x));
  return ((x$1 === (!(!y))) ? 0 : (x$1 ? 1 : (-1)));
});
var $d_s_math_Ordering$Boolean$ = new $TypeData().i($c_s_math_Ordering$Boolean$, "scala.math.Ordering$Boolean$", ({
  dw: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  dx: 1
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
$p.aD = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Byte$ = new $TypeData().i($c_s_math_Ordering$Byte$, "scala.math.Ordering$Byte$", ({
  dy: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  dz: 1
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
$p.aD = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  return (($uC(x) - $uC(y)) | 0);
});
var $d_s_math_Ordering$Char$ = new $TypeData().i($c_s_math_Ordering$Char$, "scala.math.Ordering$Char$", ({
  dB: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  dC: 1
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
$p.aD = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  return $m_jl_Double$().dd((+x), (+y));
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().i($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  dD: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  dE: 1
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
$p.aD = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  var $x_1 = $uJ(x);
  var x$1_$_lo = $x_1.l;
  var x$1_$_hi = $x_1.h;
  var $x_2 = $uJ(y);
  var y$1_$_lo = $x_2.l;
  var y$1_$_hi = $x_2.h;
  return ((x$1_$_hi === y$1_$_hi) ? ((x$1_$_lo === y$1_$_lo) ? 0 : (((x$1_$_lo >>> 0) < (y$1_$_lo >>> 0)) ? (-1) : 1)) : ((x$1_$_hi < y$1_$_hi) ? (-1) : 1));
});
var $d_s_math_Ordering$Long$ = new $TypeData().i($c_s_math_Ordering$Long$, "scala.math.Ordering$Long$", ({
  dH: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  dI: 1
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
$p.aD = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Short$ = new $TypeData().i($c_s_math_Ordering$Short$, "scala.math.Ordering$Short$", ({
  dJ: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  dK: 1
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
  this.t = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.r = (function() {
  return this.t;
});
$p.n = (function() {
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
    this.bY = null;
    this.bY = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  Z() {
    return $dp_toString__T(this.bY);
  }
  b4() {
    return "JavaScriptException";
  }
  b2() {
    return 1;
  }
  b3(x$1) {
    return ((x$1 === 0) ? this.bY : $m_sr_Statics$().gp(x$1));
  }
  bC() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  n() {
    return $m_s_util_hashing_MurmurHash3$().f4(this, 1744042595, true);
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b1)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  b1: 1,
  t: 1,
  s: 1,
  o: 1,
  a: 1,
  ab: 1,
  d: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.k())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.w();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_math_Ordering$Int$() {
  this.ev = null;
  $n_s_math_Ordering$Int$ = this;
  this.ev = new $c_s_math_Ordering$Reverse(this);
}
$p = $c_s_math_Ordering$Int$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
}
$h_s_math_Ordering$Int$.prototype = $p;
$p.aD = (function(other) {
  return $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.v = (function(x, y) {
  var x$1 = (x | 0);
  var y$1 = (y | 0);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1));
});
var $d_s_math_Ordering$Int$ = new $TypeData().i($c_s_math_Ordering$Int$, "scala.math.Ordering$Int$", ({
  dF: 1,
  v: 1,
  a: 1,
  a5: 1,
  a7: 1,
  a6: 1,
  dG: 1,
  dA: 1
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
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.M = (function() {
  return $d_Z.l();
});
$p.L = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.M = (function() {
  return $d_B.l();
});
$p.L = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.M = (function() {
  return $d_C.l();
});
$p.L = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.M = (function() {
  return $d_D.l();
});
$p.L = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.M = (function() {
  return $d_F.l();
});
$p.L = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.M = (function() {
  return $d_I.l();
});
$p.L = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.M = (function() {
  return $d_J.l();
});
$p.L = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.aL = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.r = (function() {
  return this.aL;
});
$p.n = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.M = (function() {
  return $d_S.l();
});
$p.L = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.t = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.M = (function() {
  return $d_V.l();
});
$p.L = (function(len) {
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
$p.ak = (function() {
  return $m_sc_View$();
});
$p.r = (function() {
  return $f_sc_View__toString__T(this);
});
$p.a7 = (function() {
  return "View";
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.aL = null;
  this.aL = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.M = (function() {
  return $d_O.l();
});
$p.L = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  dP: 1,
  ak: 1,
  aj: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  dR: 1,
  dQ: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  dT: 1,
  dS: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  dV: 1,
  dU: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  dX: 1,
  dW: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  dZ: 1,
  dY: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  e1: 1,
  e0: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  e3: 1,
  e2: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.aL = null;
  this.aL = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.M = (function() {
  return $d_sr_Nothing$.l();
});
$p.L = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  e4: 1,
  ak: 1,
  aj: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.aL = null;
  this.aL = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.M = (function() {
  return $d_sr_Null$.l();
});
$p.L = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  e5: 1,
  ak: 1,
  aj: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.aL = null;
  this.aL = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.M = (function() {
  return $d_O.l();
});
$p.L = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  e6: 1,
  ak: 1,
  aj: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  e8: 1,
  e7: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.t = null;
  this.t = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  ea: 1,
  e9: 1,
  a8: 1,
  a: 1,
  I: 1,
  G: 1,
  d: 1,
  H: 1,
  O: 1
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
  this.cl = null;
  this.cl = \u03b4name$2;
}
$p = $c_Lcalagem_TipoParticula$$anon$1.prototype = new $h_Lcalagem_TipoParticula();
$p.constructor = $c_Lcalagem_TipoParticula$$anon$1;
/** @constructor */
function $h_Lcalagem_TipoParticula$$anon$1() {
}
$h_Lcalagem_TipoParticula$$anon$1.prototype = $p;
$p.b2 = (function() {
  return 0;
});
$p.b3 = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.b4 = (function() {
  return this.cl;
});
$p.r = (function() {
  return this.cl;
});
$p.n = (function() {
  return $f_T__hashCode__I(this.cl);
});
var $d_Lcalagem_TipoParticula$$anon$1 = new $TypeData().i($c_Lcalagem_TipoParticula$$anon$1, "calagem.TipoParticula$$anon$1", ({
  bb: 1,
  b9: 1,
  d: 1,
  ab: 1,
  a: 1,
  dO: 1,
  eg: 1,
  av: 1,
  aZ: 1,
  dr: 1
}));
function $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying_, len, ord) {
  $thiz.ay = len;
  $thiz.bn = ord;
  $thiz.bO = underlying_;
  $thiz.d0 = false;
  return $thiz;
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__($thiz, underlying, ord) {
  $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying, underlying.d(), ord);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Sorted() {
  this.ay = 0;
  this.bn = null;
  this.bO = null;
  this.d0 = false;
  this.e7 = null;
  this.e8 = false;
}
$p = $c_sc_SeqView$Sorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted;
/** @constructor */
function $h_sc_SeqView$Sorted() {
}
$h_sc_SeqView$Sorted.prototype = $p;
$p.bg = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ab = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.au = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().bi(this);
});
$p.i = (function() {
  return this.b().e();
});
$p.V = (function() {
  return new $c_sc_SeqView$Sorted$ReverseSorted(this).b();
});
$p.T = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b1 = (function() {
  return $m_sc_View$().U();
});
$p.aj = (function() {
  return "SeqView";
});
$p.r = (function() {
  return $f_sc_View__toString__T(this);
});
$p.cH = (function() {
  if ((!this.e8)) {
    var len = this.ay;
    if ((len === 0)) {
      var res = $m_sci_Nil$();
    } else if ((len === 1)) {
      $m_sci_List$();
      var elems = new $c_sjsr_WrappedVarArgs([this.bO.i()]);
      var res = $m_sci_Nil$().bi(elems);
    } else {
      var arr = new $ac_O(len);
      this.bO.ab(arr, 0, 2147483647);
      $m_ju_Arrays$().bD(arr, this.bn);
      var res = $m_sci_ArraySeq$().bE(arr);
    }
    this.d0 = true;
    this.bO = null;
    this.e7 = res;
    this.e8 = true;
  }
  return this.e7;
});
$p.f8 = (function() {
  return (this.d0 ? this.cH() : this.bO);
});
$p.g = (function(i) {
  return this.cH().g(i);
});
$p.d = (function() {
  return this.ay;
});
$p.b = (function() {
  return $m_sc_Iterator$().a1.c8(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.cH().b())));
});
$p.j = (function() {
  return this.ay;
});
$p.k = (function() {
  return (this.ay === 0);
});
$p.dp = (function(ord1) {
  var x$2 = this.bn;
  if (((ord1 === null) ? (x$2 === null) : ord1.aC(x$2))) {
    return this;
  } else {
    return (ord1.aD(this.bn) ? new $c_sc_SeqView$Sorted$ReverseSorted(this) : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.f8(), this.ay, ord1));
  }
});
$p.W = (function(ord) {
  return this.dp(ord);
});
var $d_sc_SeqView$Sorted = new $TypeData().i($c_sc_SeqView$Sorted, "scala.collection.SeqView$Sorted", ({
  cs: 1,
  b: 1,
  c: 1,
  g: 1,
  h: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  a3: 1
}));
function $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse($thiz) {
  if ((!$thiz.ea)) {
    $thiz.e9 = $ct_sc_SeqView$Reverse__sc_SeqOps__(new $c_sc_SeqView$Reverse(), $thiz.an.cH());
    $thiz.ea = true;
  }
  return $thiz.e9;
}
/** @constructor */
function $c_sc_SeqView$Sorted$ReverseSorted(outer) {
  this.e9 = null;
  this.ea = false;
  this.an = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.an = outer;
}
$p = $c_sc_SeqView$Sorted$ReverseSorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted$ReverseSorted;
/** @constructor */
function $h_sc_SeqView$Sorted$ReverseSorted() {
}
$h_sc_SeqView$Sorted$ReverseSorted.prototype = $p;
$p.bg = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ab = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.au = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().bi(this);
});
$p.i = (function() {
  return this.b().e();
});
$p.V = (function() {
  return this.an.b();
});
$p.T = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.b1 = (function() {
  return $m_sc_View$().U();
});
$p.aj = (function() {
  return "SeqView";
});
$p.r = (function() {
  return $f_sc_View__toString__T(this);
});
$p.g = (function(i) {
  return $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).g(i);
});
$p.d = (function() {
  return this.an.ay;
});
$p.b = (function() {
  return $m_sc_Iterator$().a1.c8(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).b())));
});
$p.j = (function() {
  return this.an.ay;
});
$p.k = (function() {
  return (this.an.ay === 0);
});
$p.dp = (function(ord1) {
  var x$2 = this.an.bn;
  if (((ord1 === null) ? (x$2 === null) : ord1.aC(x$2))) {
    return this.an;
  } else {
    return (ord1.aD(this.an.bn) ? this : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.an.f8(), this.an.ay, ord1));
  }
});
$p.W = (function(ord) {
  return this.dp(ord);
});
var $d_sc_SeqView$Sorted$ReverseSorted = new $TypeData().i($c_sc_SeqView$Sorted$ReverseSorted, "scala.collection.SeqView$Sorted$ReverseSorted", ({
  ct: 1,
  b: 1,
  c: 1,
  g: 1,
  h: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  a3: 1
}));
/** @constructor */
function $c_sc_View$$anon$1(it$3) {
  this.ec = null;
  this.ec = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.b = (function() {
  return this.ec.a4();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  cx: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1
}));
/** @constructor */
function $c_sc_View$Filter(underlying, p, isFlipped) {
  this.d1 = null;
  this.ee = null;
  this.ed = false;
  this.d1 = underlying;
  this.ee = p;
  this.ed = isFlipped;
}
$p = $c_sc_View$Filter.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Filter;
/** @constructor */
function $h_sc_View$Filter() {
}
$h_sc_View$Filter.prototype = $p;
$p.b = (function() {
  var this$1 = this.d1.b();
  return new $c_sc_Iterator$$anon$6(this.ee, this.ed, this$1);
});
$p.j = (function() {
  return ((this.d1.j() === 0) ? 0 : (-1));
});
$p.k = (function() {
  return (!this.b().f());
});
var $d_sc_View$Filter = new $TypeData().i($c_sc_View$Filter, "scala.collection.View$Filter", ({
  cy: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1
}));
function $ct_sc_View$Take__sc_IterableOps__I__($thiz, underlying, n) {
  $thiz.bQ = ((n > 0) ? n : 0);
  return $thiz;
}
/** @constructor */
function $c_sc_View$Take() {
  this.bQ = 0;
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
$p.V = (function() {
  return this.aE().b();
});
$p.W = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.T = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.k = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.n = (function() {
  return $m_s_util_hashing_MurmurHash3$().fd(this);
});
$p.r = (function() {
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
$p.V = (function() {
  return this.aE().b();
});
$p.T = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.k = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.a7 = (function() {
  return "SeqView";
});
$p.W = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
function $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.bU.a4() | 0))));
}
function $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.bU.a4() | 0))));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.bb = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.bb = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.g = (function(idx) {
  return this.bb.g(idx);
});
$p.d = (function() {
  return this.bb.d();
});
$p.b = (function() {
  return this.bb.b();
});
$p.j = (function() {
  return this.bb.j();
});
$p.k = (function() {
  return this.bb.k();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  aM: 1,
  ae: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  h: 1,
  a3: 1
}));
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.bc = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.bc = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.g = (function(i) {
  return this.bc.g(((((this.d() - 1) | 0) - i) | 0));
});
$p.d = (function() {
  return this.bc.d();
});
$p.b = (function() {
  return this.bc.V();
});
$p.j = (function() {
  return this.bc.j();
});
$p.k = (function() {
  return this.bc.k();
});
var $d_sc_SeqView$Reverse = new $TypeData().i($c_sc_SeqView$Reverse, "scala.collection.SeqView$Reverse", ({
  aN: 1,
  ae: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  h: 1,
  a3: 1
}));
function $ct_sc_SeqView$Take__sc_SeqOps__I__($thiz, underlying, n) {
  $thiz.bo = underlying;
  $thiz.ct = n;
  $ct_sc_View$Take__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Take() {
  this.bQ = 0;
  this.bo = null;
  this.ct = 0;
}
$p = $c_sc_SeqView$Take.prototype = new $h_sc_View$Take();
$p.constructor = $c_sc_SeqView$Take;
/** @constructor */
function $h_sc_SeqView$Take() {
}
$h_sc_SeqView$Take.prototype = $p;
$p.k = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.g = (function(idx) {
  if ((idx < this.ct)) {
    return this.bo.g(idx);
  } else {
    throw ((this.bo.j() >= 0) ? $m_scg_CommonErrors$().bh(idx, ((this.j() - 1) | 0)) : $m_scg_CommonErrors$().gm(idx));
  }
});
$p.d = (function() {
  var self = this.bo.d();
  var that = this.bQ;
  return ((self < that) ? self : that);
});
$p.W = (function(ord) {
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
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.j = (function() {
  return this.d();
});
$p.a7 = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.bb = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.j = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.a7 = (function() {
  return "IndexedSeqView";
});
$p.am = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  cj: 1,
  aM: 1,
  ae: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  h: 1,
  a3: 1,
  k: 1,
  af: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.bc = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.j = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.a7 = (function() {
  return "IndexedSeqView";
});
$p.am = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  ck: 1,
  aN: 1,
  ae: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  h: 1,
  a3: 1,
  k: 1,
  af: 1
}));
function $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__($thiz, underlying, n) {
  $ct_sc_SeqView$Take__sc_SeqOps__I__($thiz, underlying, n);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Take() {
  this.bQ = 0;
  this.bo = null;
  this.ct = 0;
}
$p = $c_sc_IndexedSeqView$Take.prototype = new $h_sc_SeqView$Take();
$p.constructor = $c_sc_IndexedSeqView$Take;
/** @constructor */
function $h_sc_IndexedSeqView$Take() {
}
$h_sc_IndexedSeqView$Take.prototype = $p;
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.j = (function() {
  return this.d();
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.cK = (function(n) {
  return $ct_sc_IndexedSeqView$Take__sc_IndexedSeqOps__I__(new $c_sc_IndexedSeqView$Take(), this, n);
});
$p.a7 = (function() {
  return "IndexedSeqView";
});
$p.am = (function(n) {
  return this.cK(n);
});
var $d_sc_IndexedSeqView$Take = new $TypeData().i($c_sc_IndexedSeqView$Take, "scala.collection.IndexedSeqView$Take", ({
  aJ: 1,
  aO: 1,
  aR: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  h: 1,
  a3: 1,
  k: 1,
  af: 1
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
  this.d4 = null;
  this.cu = null;
  this.d4 = underlying;
  this.cu = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.g = (function(n) {
  return this.d4.g(n);
});
$p.d = (function() {
  return this.d4.p;
});
$p.aj = (function() {
  return "ArrayBufferView";
});
$p.b = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.cu);
});
$p.V = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(this, this.cu);
});
$p.cK = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.cu);
});
$p.am = (function(n) {
  return this.cK(n);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  d1: 1,
  ce: 1,
  ae: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  h: 1,
  a3: 1,
  k: 1,
  af: 1
}));
function $ct_sci_LazyListBase__O__($thiz, initialTail) {
  $thiz.ao = initialTail;
  return $thiz;
}
/** @constructor */
function $c_sci_LazyListBase() {
  this.ao = null;
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
  this.bQ = 0;
  this.bo = null;
  this.ct = 0;
  this.bU = null;
  this.bU = mutationCount;
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
$p.V = (function() {
  return $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator(this);
});
$p.cK = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.bU);
});
$p.am = (function(n) {
  return new $c_scm_CheckedIndexedSeqView$Take(this, n, this.bU);
});
var $d_scm_CheckedIndexedSeqView$Take = new $TypeData().i($c_scm_CheckedIndexedSeqView$Take, "scala.collection.mutable.CheckedIndexedSeqView$Take", ({
  dk: 1,
  aJ: 1,
  aO: 1,
  aR: 1,
  a1: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  J: 1,
  h: 1,
  a3: 1,
  k: 1,
  af: 1,
  dh: 1
}));
function $f_scm_Buffer__takeInPlace__I__scm_Buffer($thiz, n) {
  var norm = $p_scm_Buffer__normalized__I__I($thiz, n);
  $thiz.dl(norm, (($thiz.d() - norm) | 0));
  return $thiz;
}
function $p_scm_Buffer__normalized__I__I($thiz, n) {
  var x = ((n > 0) ? n : 0);
  var y = $thiz.d();
  return ((x < y) ? x : y);
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cY)));
}
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.d9 = null;
  this.d9 = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.W = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.cE = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.bf = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.am = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.j = (function() {
  return this.d();
});
$p.n = (function() {
  return $m_s_util_hashing_MurmurHash3$().fd(this);
});
$p.r = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.k = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.b1 = (function() {
  return $m_sjsr_WrappedVarArgs$().U();
});
$p.bg = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ab = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.aN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.au = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().bi(this);
});
$p.d = (function() {
  return (this.d9.length | 0);
});
$p.g = (function(idx) {
  return this.d9[idx];
});
$p.aj = (function() {
  return "WrappedVarArgs";
});
$p.c9 = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().eW(coll);
});
$p.h = (function(v1) {
  return this.g((v1 | 0));
});
$p.ak = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  er: 1,
  T: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  y: 1,
  j: 1,
  l: 1,
  h: 1,
  d: 1,
  m: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  L: 1,
  q: 1,
  r: 1,
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
  $thiz.ao = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  while (($thiz.O === $m_sci_LazyList$Uninitialized$())) {
    var x3 = $thiz.ao;
    if ((x3 instanceof $c_jl_Thread)) {
      $p_sci_LazyList__selfRef$1__E($thiz);
    }
    if (false) {
      if ((x3.ha(), true)) {
        $p_sci_LazyList__selfRef$1__E($thiz);
      }
      x3.h3();
      continue;
    }
    if ($is_F0(x3)) {
      $m_sci_LazyList$().f9();
      var value = $m_jl_Thread$().dE;
      if (($thiz.ao === x3)) {
        $thiz.ao = value;
        var $x_1 = true;
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var ex = null;
        try {
          var l = $p_sci_LazyList__evaluated__sci_LazyList(x3.a4());
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          ex = e$2;
          var l = null;
        }
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().aO();
          }
          var newTail = l.ao;
        } else {
          var newTail = x3;
        }
        $m_sci_LazyList$().f9();
        var old = $thiz.ao;
        $thiz.ao = newTail;
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().aO();
          }
          $thiz.O = l.O;
        }
        if (false) {
          old.h6();
        }
        if ((ex !== null)) {
          var x$proxy1 = ex;
          if ((x$proxy1 === null)) {
            $m_sr_Scala3RunTime$().aO();
          }
          var $x_2 = x$proxy1;
          throw (($x_2 instanceof $c_sjs_js_JavaScriptException) ? $x_2.bY : $x_2);
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
      return (($thiz.ao === null) ? $m_sci_LazyList$().s : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().s) ? $m_sci_LazyList$().s : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), f.h($thiz.i()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.N(), f)))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.c = (("" + b.c) + start);
  if (($thiz.O === $m_sci_LazyList$Uninitialized$())) {
    b.c = (b.c + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().s)) {
    var obj = $thiz.i();
    b.c = (("" + b.c) + obj);
    var cursor = $thiz;
    var scout = $thiz.N();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().s))) {
        scout = scout.N();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().s));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.c = (("" + b.c) + sep);
            var obj$1 = c.i();
            b.c = (("" + b.c) + obj$1);
            cursor = cursor.N();
            scout = scout.N();
            var this$3 = scout;
            if (((this$3.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().s))) {
              scout = scout.N();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().s)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.c = (("" + b.c) + sep);
        var obj$2 = c$1.i();
        b.c = (("" + b.c) + obj$2);
        cursor = cursor.N();
      }
      if ((!(cursor.O !== $m_sci_LazyList$Uninitialized$()))) {
        b.c = (("" + b.c) + sep);
        b.c = (b.c + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.N();
          scout = scout.N();
        }
        while (true) {
          var ct = cursor.N();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.c = (("" + b.c) + sep);
            var obj$3 = c$2.i();
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
  this.ao = null;
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
$p.T = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.g = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.a7 = (function() {
  return "LinearSeq";
});
$p.k = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().s);
});
$p.j = (function() {
  return (((this.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().s)) ? 0 : (-1));
});
$p.i = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().s)) {
    throw new $c_ju_NoSuchElementException("head of empty lazy list");
  } else {
    return this.O;
  }
});
$p.N = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().s)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.ao;
  }
});
$p.gc = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().s))) {
    these = these.N();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().s)) {
      return this;
    }
    these = these.N();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().s)) {
      return this;
    }
    these = these.N();
    if ((these === those)) {
      return this;
    }
    those = those.N();
  }
  return this;
});
$p.b = (function() {
  return (((this.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().s)) ? $m_sc_Iterator$().a1 : new $c_sci_LazyList$LazyIterator(this));
});
$p.bg = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().s))) {
      f.h(\u03b4this$tailLocal1.i());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.N();
    } else {
      return (void 0);
    }
  }
});
$p.aj = (function() {
  return "LazyList";
});
$p.gy = (function(f) {
  return (((this.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().s)) ? $m_sci_LazyList$().s : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f));
});
$p.g7 = (function(n) {
  return ((n <= 0) ? this : (((this.O !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().s)) ? $m_sci_LazyList$().s : $m_sci_LazyList$().gL(this, n)));
});
$p.aN = (function(sb, start, sep, end) {
  this.gc();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.J, start, sep, end);
  return sb;
});
$p.r = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").c;
});
$p.ak = (function() {
  return $m_sci_LazyList$();
});
$p.w = (function() {
  return this.N();
});
$p.cE = (function(f) {
  return this.gy(f);
});
$p.eO = (function(n) {
  return this.g7(n);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  aS: 1,
  cT: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  a: 1,
  ao: 1,
  an: 1,
  aq: 1,
  ap: 1
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
$p.ah = (function(elems) {
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
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.j = (function() {
  return this.d();
});
$p.a7 = (function() {
  return "IndexedSeq";
});
$p.bf = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.cB = (function(coll) {
  return $m_sci_ArraySeq$().dh(coll, this.E());
});
$p.b1 = (function() {
  return $m_sci_ArraySeq$().cG(this.E());
});
$p.gx = (function(f) {
  var a = new $ac_O(this.d());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.h(this.g(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().bE(a);
});
$p.h0 = (function(n) {
  return (($m_jl_reflect_Array$().Q(this.a8()) <= n) ? this : $m_sci_ArraySeq$().bE($m_sc_ArrayOps$().gQ(this.a8(), 0, n)));
});
$p.aj = (function() {
  return "ArraySeq";
});
$p.ab = (function(xs, start, len) {
  var srcLen = this.d();
  var destLen = $m_jl_reflect_Array$().Q(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aZ(this.a8(), 0, xs, start, copied);
  }
  return copied;
});
$p.I = (function(ord) {
  if (($m_jl_reflect_Array$().Q(this.a8()) <= 1)) {
    return this;
  } else {
    var original = this.a8();
    var newLength = this.d();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    if ($d_O.R($objectGetClass(original).m.Q().m)) {
      var a = $m_ju_Arrays$().de(original, newLength, $m_sr_ScalaRunTime$().cz(new $ac_O(0)));
    } else {
      var dest = new $ac_O(newLength);
      $m_s_Array$().aZ(original, 0, dest, 0, $m_jl_reflect_Array$().Q(original));
      var a = dest;
    }
    $m_ju_Arrays$().bD(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.ak = (function() {
  return $m_sci_ArraySeq$().ef;
});
$p.cE = (function(f) {
  return this.gx(f);
});
$p.am = (function(n) {
  return this.h0(n);
});
$p.W = (function(ord) {
  return this.I(ord);
});
$p.c9 = (function(coll) {
  return $m_sci_ArraySeq$().dh(coll, this.E());
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.S)));
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
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.am = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.j = (function() {
  return this.d();
});
$p.a7 = (function() {
  return "IndexedSeq";
});
$p.bf = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.eY = (function(coll) {
  var evidence$1 = this.E();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.M();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.j();
  var it = coll.b();
  while (it.f()) {
    var elem = it.e();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().cJ(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().cD($m_scm_ArrayBuilder$().cI(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.b1 = (function() {
  return $m_scm_ArraySeq$().cG(this.E());
});
$p.aj = (function() {
  return "ArraySeq";
});
$p.ab = (function(xs, start, len) {
  var srcLen = this.d();
  var destLen = $m_jl_reflect_Array$().Q(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aZ(this.ar(), 0, xs, start, copied);
  }
  return copied;
});
$p.gX = (function(ord) {
  return $m_scm_ArraySeq$().cD($m_sc_ArrayOps$().gY(this.ar(), ord));
});
$p.ak = (function() {
  return $m_scm_ArraySeq$().em;
});
$p.cB = (function(coll) {
  return this.eY(coll);
});
$p.c9 = (function(coll) {
  return this.eY(coll);
});
$p.W = (function(ord) {
  return this.gX(ord);
});
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.aT = null;
  this.aT = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.d = (function() {
  return this.aT.a.length;
});
$p.c7 = (function(i) {
  return this.aT.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.aT, this$1.C);
});
$p.I = (function(ord) {
  if ((this.aT.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Boolean$()))) {
    var this$1 = this.aT;
    var a = this$1.x();
    $m_s_util_Sorting$().dq(a, 0, a.a.length, $m_s_math_Ordering$Boolean$());
    return new $c_sci_ArraySeq$ofBoolean(a);
  } else {
    return $c_sci_ArraySeq.prototype.I.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aT);
});
$p.a8 = (function() {
  return this.aT;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.g = (function(i) {
  return this.c7(i);
});
$p.h = (function(v1) {
  return this.c7((v1 | 0));
});
$p.W = (function(ord) {
  return this.I(ord);
});
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  cD: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.aU = null;
  this.aU = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.d = (function() {
  return this.aU.a.length;
});
$p.bZ = (function(i) {
  return this.aU.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.aU, this$1.C);
});
$p.I = (function(ord) {
  if ((this.aU.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Byte$()))) {
    var this$1 = this.aU;
    var a = this$1.x();
    $m_ju_Arrays$().fe(a);
    return new $c_sci_ArraySeq$ofByte(a);
  } else {
    return $c_sci_ArraySeq.prototype.I.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aU);
});
$p.a8 = (function() {
  return this.aU;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.g = (function(i) {
  return this.bZ(i);
});
$p.h = (function(v1) {
  return this.bZ((v1 | 0));
});
$p.W = (function(ord) {
  return this.I(ord);
});
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  cE: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.aJ = null;
  this.aJ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.d = (function() {
  return this.aJ.a.length;
});
$p.c0 = (function(i) {
  return this.aJ.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.aJ, this$1.C);
});
$p.I = (function(ord) {
  if ((this.aJ.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Char$()))) {
    var this$1 = this.aJ;
    var a = this$1.x();
    $m_ju_Arrays$().ff(a);
    return new $c_sci_ArraySeq$ofChar(a);
  } else {
    return $c_sci_ArraySeq.prototype.I.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aJ);
});
$p.aN = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.aJ).aN(sb, start, sep, end);
});
$p.a8 = (function() {
  return this.aJ;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.g = (function(i) {
  return $bC(this.c0(i));
});
$p.h = (function(v1) {
  return $bC(this.c0((v1 | 0)));
});
$p.W = (function(ord) {
  return this.I(ord);
});
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  cF: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.bp = null;
  this.bp = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.d = (function() {
  return this.bp.a.length;
});
$p.c1 = (function(i) {
  return this.bp.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bp, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bp);
});
$p.a8 = (function() {
  return this.bp;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.g = (function(i) {
  return this.c1(i);
});
$p.h = (function(v1) {
  return this.c1((v1 | 0));
});
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  cG: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.bq = null;
  this.bq = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.d = (function() {
  return this.bq.a.length;
});
$p.c2 = (function(i) {
  return this.bq.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bq, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bq);
});
$p.a8 = (function() {
  return this.bq;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.g = (function(i) {
  return this.c2(i);
});
$p.h = (function(v1) {
  return this.c2((v1 | 0));
});
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  cH: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.aV = null;
  this.aV = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.d = (function() {
  return this.aV.a.length;
});
$p.c3 = (function(i) {
  return this.aV.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.aV, this$1.C);
});
$p.I = (function(ord) {
  if ((this.aV.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Int$()))) {
    var this$1 = this.aV;
    var a = this$1.x();
    $m_ju_Arrays$().fg(a);
    return new $c_sci_ArraySeq$ofInt(a);
  } else {
    return $c_sci_ArraySeq.prototype.I.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aV);
});
$p.a8 = (function() {
  return this.aV;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.g = (function(i) {
  return this.c3(i);
});
$p.h = (function(v1) {
  return this.c3((v1 | 0));
});
$p.W = (function(ord) {
  return this.I(ord);
});
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  cI: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.aW = null;
  this.aW = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.d = (function() {
  return ((this.aW.a.length >>> 1) | 0);
});
$p.c4 = (function(i) {
  var $x_1 = this.aW.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.aW, this$1.C);
});
$p.I = (function(ord) {
  if ((((this.aW.a.length >>> 1) | 0) <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Long$()))) {
    var this$1 = this.aW;
    var a = this$1.x();
    $m_ju_Arrays$().fh(a);
    return new $c_sci_ArraySeq$ofLong(a);
  } else {
    return $c_sci_ArraySeq.prototype.I.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aW);
});
$p.a8 = (function() {
  return this.aW;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.g = (function(i) {
  return this.c4(i);
});
$p.h = (function(v1) {
  return this.c4((v1 | 0));
});
$p.W = (function(ord) {
  return this.I(ord);
});
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cJ: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aK = null;
  this.aK = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.E = (function() {
  return $m_s_reflect_ClassTag$().cA($objectGetClass(this.aK).m.Q());
});
$p.d = (function() {
  return this.aK.a.length;
});
$p.g = (function(i) {
  return this.aK.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.aK, this$1.C);
});
$p.fj = (function(ord) {
  if ((this.aK.a.length <= 1)) {
    return this;
  } else {
    var this$1 = this.aK;
    var a = this$1.x();
    $m_ju_Arrays$().bD(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aK);
});
$p.a8 = (function() {
  return this.aK;
});
$p.h = (function(v1) {
  return this.g((v1 | 0));
});
$p.I = (function(ord) {
  return this.fj(ord);
});
$p.W = (function(ord) {
  return this.fj(ord);
});
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  cK: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.aX = null;
  this.aX = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.d = (function() {
  return this.aX.a.length;
});
$p.c5 = (function(i) {
  return this.aX.a[i];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.aX, this$1.C);
});
$p.I = (function(ord) {
  if ((this.aX.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Short$()))) {
    var this$1 = this.aX;
    var a = this$1.x();
    $m_ju_Arrays$().fi(a);
    return new $c_sci_ArraySeq$ofShort(a);
  } else {
    return $c_sci_ArraySeq.prototype.I.call(this, ord);
  }
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aX);
});
$p.a8 = (function() {
  return this.aX;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.g = (function(i) {
  return this.c5(i);
});
$p.h = (function(v1) {
  return this.c5((v1 | 0));
});
$p.W = (function(ord) {
  return this.I(ord);
});
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cL: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.bR = null;
  this.bR = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.d = (function() {
  return this.bR.a.length;
});
$p.c6 = (function(i) {
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bR, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bR);
});
$p.a8 = (function() {
  return this.bR;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.g = (function(i) {
  this.c6(i);
});
$p.h = (function(v1) {
  this.c6((v1 | 0));
});
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  cM: 1,
  S: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  k: 1,
  p: 1,
  U: 1,
  T: 1,
  q: 1,
  r: 1,
  L: 1,
  W: 1,
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
      return ((!xs$tailLocal1.k()) | 0);
    } else {
      if ((!xs$tailLocal1.k())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.w();
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
    if (l$tailLocal1.k()) {
      return $m_sci_Nil$();
    } else {
      var h = l$tailLocal1.i();
      var t = l$tailLocal1.w();
      if (((!(!p$1.h(h))) !== isFlipped$1)) {
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
    if (remaining$tailLocal1.k()) {
      return start;
    } else {
      var x = remaining$tailLocal1.i();
      if (((!(!p$2.h(x))) !== isFlipped$2)) {
        remaining$tailLocal1 = remaining$tailLocal1.w();
      } else {
        return $p_sci_List__partialFill$1__F1__Z__sci_List__sci_List__sci_List($thiz, p$2, isFlipped$2, start, remaining$tailLocal1);
      }
    }
  }
}
function $p_sci_List__partialFill$1__F1__Z__sci_List__sci_List__sci_List($thiz, p$3, isFlipped$3, origStart, firstMiss) {
  var newHead = new $c_sci_$colon$colon(origStart.i(), $m_sci_Nil$());
  var toProcess = origStart.w();
  var currentLast = newHead;
  while ((toProcess !== firstMiss)) {
    var newElem = new $c_sci_$colon$colon(toProcess.i(), $m_sci_Nil$());
    currentLast.a3 = newElem;
    currentLast = newElem;
    toProcess = toProcess.w();
  }
  var next = firstMiss.w();
  var nextToCopy = next;
  while ((!next.k())) {
    var head = next.i();
    if (((!(!p$3.h(head))) !== isFlipped$3)) {
      next = next.w();
    } else {
      while ((nextToCopy !== next)) {
        var newElem$2 = new $c_sci_$colon$colon(nextToCopy.i(), $m_sci_Nil$());
        currentLast.a3 = newElem$2;
        currentLast = newElem$2;
        nextToCopy = nextToCopy.w();
      }
      nextToCopy = next.w();
      next = next.w();
    }
  }
  if ((!nextToCopy.k())) {
    currentLast.a3 = nextToCopy;
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
$p.a7 = (function() {
  return "LinearSeq";
});
$p.b = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.W = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.fC = (function(prefix) {
  if (this.k()) {
    return prefix;
  } else if (prefix.k()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.i(), this);
    var curr = result;
    var that = prefix.w();
    while ((!that.k())) {
      var temp = new $c_sci_$colon$colon(that.i(), this);
      curr.a3 = temp;
      curr = temp;
      that = that.w();
    }
    return result;
  }
});
$p.k = (function() {
  return (this === $m_sci_Nil$());
});
$p.bi = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.fC(prefix);
  }
  if ((prefix.j() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.k()) {
      return prefix.au();
    }
  }
  var iter = prefix.b();
  if (iter.f()) {
    var result = new $c_sci_$colon$colon(iter.e(), this);
    var curr = result;
    while (iter.f()) {
      var temp = new $c_sci_$colon$colon(iter.e(), this);
      curr.a3 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.gz = (function(f) {
  if ((this === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.h(this.i()), $m_sci_Nil$());
    var t = h;
    var rest = this.w();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.h(rest.i()), $m_sci_Nil$());
      t.a3 = nx;
      t = nx;
      rest = rest.w();
    }
    var $x_1 = h;
  }
  return $x_1;
});
$p.bg = (function(f) {
  var these = this;
  while ((!these.k())) {
    f.h(these.i());
    these = these.w();
  }
});
$p.d = (function() {
  var these = this;
  var len = 0;
  while ((!these.k())) {
    len = ((1 + len) | 0);
    these = these.w();
  }
  return len;
});
$p.T = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.aj = (function() {
  return "List";
});
$p.au = (function() {
  return this;
});
$p.ak = (function() {
  return $m_sci_List$();
});
$p.cE = (function(f) {
  return this.gz(f);
});
$p.bf = (function(pred) {
  return $p_sci_List__filterCommon__F1__Z__sci_List(this, pred, false);
});
$p.eO = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.bu = null;
  this.bu = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.d = (function() {
  return this.bu.a.length;
});
$p.c7 = (function(index) {
  return this.bu.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bu, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bu);
});
$p.ar = (function() {
  return this.bu;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.g = (function(i) {
  return this.c7(i);
});
$p.h = (function(v1) {
  return this.c7((v1 | 0));
});
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  d6: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.bv = null;
  this.bv = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.d = (function() {
  return this.bv.a.length;
});
$p.bZ = (function(index) {
  return this.bv.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bv, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bv);
});
$p.ar = (function() {
  return this.bv;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.g = (function(i) {
  return this.bZ(i);
});
$p.h = (function(v1) {
  return this.bZ((v1 | 0));
});
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  d7: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.ap = null;
  this.ap = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.d = (function() {
  return this.ap.a.length;
});
$p.c0 = (function(index) {
  return this.ap.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.ap, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ap);
});
$p.aN = (function(sb, start, sep, end) {
  var jsb = sb.J;
  if ((start.length !== 0)) {
    jsb.c = (("" + jsb.c) + start);
  }
  var len = this.ap.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.eD(this.ap);
    } else {
      jsb.d();
      var c = this.ap.a[0];
      var str = ("" + $cToS(c));
      jsb.c = (jsb.c + str);
      var i = 1;
      while ((i < len)) {
        jsb.c = (("" + jsb.c) + sep);
        var c$1 = this.ap.a[i];
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
$p.ar = (function() {
  return this.ap;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.g = (function(i) {
  return $bC(this.c0(i));
});
$p.h = (function(v1) {
  return $bC(this.c0((v1 | 0)));
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aU)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  aU: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.bw = null;
  this.bw = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.d = (function() {
  return this.bw.a.length;
});
$p.c1 = (function(index) {
  return this.bw.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bw, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bw);
});
$p.ar = (function() {
  return this.bw;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.g = (function(i) {
  return this.c1(i);
});
$p.h = (function(v1) {
  return this.c1((v1 | 0));
});
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  d8: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.bx = null;
  this.bx = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.d = (function() {
  return this.bx.a.length;
});
$p.c2 = (function(index) {
  return this.bx.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bx, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bx);
});
$p.ar = (function() {
  return this.bx;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.g = (function(i) {
  return this.c2(i);
});
$p.h = (function(v1) {
  return this.c2((v1 | 0));
});
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  d9: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.by = null;
  this.by = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.d = (function() {
  return this.by.a.length;
});
$p.c3 = (function(index) {
  return this.by.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.by, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.by);
});
$p.ar = (function() {
  return this.by;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.g = (function(i) {
  return this.c3(i);
});
$p.h = (function(v1) {
  return this.c3((v1 | 0));
});
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  da: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.bz = null;
  this.bz = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.d = (function() {
  return ((this.bz.a.length >>> 1) | 0);
});
$p.c4 = (function(index) {
  var $x_1 = this.bz.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bz, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bz);
});
$p.ar = (function() {
  return this.bz;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.g = (function(i) {
  return this.c4(i);
});
$p.h = (function(v1) {
  return this.c4((v1 | 0));
});
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  db: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.bd = null;
  this.bd = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.E = (function() {
  return $m_s_reflect_ClassTag$().cA($objectGetClass(this.bd).m.Q());
});
$p.d = (function() {
  return this.bd.a.length;
});
$p.g = (function(index) {
  return this.bd.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bd, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bd);
});
$p.ar = (function() {
  return this.bd;
});
$p.h = (function(v1) {
  return this.g((v1 | 0));
});
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  dc: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.bA = null;
  this.bA = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.d = (function() {
  return this.bA.a.length;
});
$p.c5 = (function(index) {
  return this.bA.a[index];
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bA, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bA);
});
$p.ar = (function() {
  return this.bA;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.g = (function(i) {
  return this.c5(i);
});
$p.h = (function(v1) {
  return this.c5((v1 | 0));
});
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  dd: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.bS = null;
  this.bS = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.d = (function() {
  return this.bS.a.length;
});
$p.c6 = (function(index) {
});
$p.n = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.H(this.bS, this$1.C);
});
$p.b = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bS);
});
$p.ar = (function() {
  return this.bS;
});
$p.E = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.g = (function(i) {
  this.c6(i);
});
$p.h = (function(v1) {
  this.c6((v1 | 0));
});
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  de: 1,
  X: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  q: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.d2 = null;
  this.a3 = null;
  this.d2 = head;
  this.a3 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.bC = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.b2 = (function() {
  return 2;
});
$p.b4 = (function() {
  return "::";
});
$p.b3 = (function(n) {
  if ((n === 0)) {
    return this.d2;
  }
  if ((n === 1)) {
    return this.a3;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.i = (function() {
  return this.d2;
});
$p.w = (function() {
  return this.a3;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  cB: 1,
  ar: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  ao: 1,
  an: 1,
  aq: 1,
  ap: 1,
  q: 1,
  r: 1,
  aQ: 1,
  L: 1,
  a: 1,
  ai: 1,
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
$p.bC = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.b2 = (function() {
  return 0;
});
$p.b4 = (function() {
  return "Nil";
});
$p.b3 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.gj = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gZ = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.j = (function() {
  return 0;
});
$p.b = (function() {
  return $m_sc_Iterator$().a1;
});
$p.i = (function() {
  this.gj();
});
$p.w = (function() {
  this.gZ();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cX: 1,
  ar: 1,
  K: 1,
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
  y: 1,
  A: 1,
  z: 1,
  ao: 1,
  an: 1,
  aq: 1,
  ap: 1,
  q: 1,
  r: 1,
  aQ: 1,
  L: 1,
  a: 1,
  ai: 1,
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
  $thiz.J = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.J = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.ah = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.al = (function(size) {
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.am = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.J.d();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a7 = (function() {
  return "IndexedSeq";
});
$p.b1 = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
$p.d = (function() {
  return this.J.d();
});
$p.j = (function() {
  return this.J.d();
});
$p.fJ = (function(x) {
  var this$1 = this.J;
  var str = ("" + $cToS(x));
  this$1.c = (this$1.c + str);
  return this;
});
$p.r = (function() {
  return this.J.c;
});
$p.eE = (function(xs) {
  if (false) {
    var this$3 = this.J;
    var str = xs.h2;
    this$3.c = (("" + this$3.c) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.J.eD(xs.ap);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.J;
    var s = xs.J;
    this$4.c = (("" + this$4.c) + s);
  } else {
    var ks = xs.j();
    if ((ks !== 0)) {
      var b = this.J;
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
$p.k = (function() {
  return (this.J.d() === 0);
});
$p.g = (function(i) {
  return $bC(this.J.eG(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.J.eG(i));
});
$p.cB = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).eE(coll);
});
$p.c9 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).eE(coll);
});
$p.Y = (function(elem) {
  return this.fJ($uC(elem));
});
$p.ad = (function() {
  return this.J.c;
});
$p.ak = (function() {
  return $m_scm_IndexedSeq$();
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aY)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  aY: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  Y: 1,
  Z: 1,
  a4: 1,
  ah: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  al: 1,
  a: 1
}));
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().dn($thiz);
  $thiz.X = buf.X;
  $thiz.aq = buf.aq;
  $thiz.cv = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.cw = ((1 + $thiz.cw) | 0);
  if ($thiz.cv) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
function $p_scm_ListBuffer__predecessor__I__sci_$colon$colon($thiz, i) {
  if ((i === 0)) {
    return null;
  } else if ((i === $thiz.P)) {
    return $thiz.aq;
  } else {
    var j = ((i - 1) | 0);
    var p = $thiz.X;
    while ((j > 0)) {
      p = p.w();
      j = ((j - 1) | 0);
    }
    return p;
  }
}
function $p_scm_ListBuffer__getNext__sci_$colon$colon__sci_List($thiz, p) {
  return ((p === null) ? $thiz.X : p.a3);
}
function $p_scm_ListBuffer__removeAfter__sci_$colon$colon__I__V($thiz, prev, n) {
  var nx = $p_scm_ListBuffer__ahead$1__sci_List__I__sci_List($thiz, $p_scm_ListBuffer__getNext__sci_$colon$colon__sci_List($thiz, prev), n);
  if ((prev === null)) {
    $thiz.X = nx;
  } else {
    prev.a3 = nx;
  }
  if (nx.k()) {
    $thiz.aq = prev;
  }
  $thiz.P = (($thiz.P - n) | 0);
}
function $p_scm_ListBuffer__ahead$1__sci_List__I__sci_List($thiz, p, n) {
  var n$tailLocal1 = n;
  var p$tailLocal1 = p;
  while (true) {
    if ((n$tailLocal1 === 0)) {
      return p$tailLocal1;
    } else {
      var p$tailLocal1$tmp1 = p$tailLocal1.w();
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      p$tailLocal1 = p$tailLocal1$tmp1;
      n$tailLocal1 = n$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.cw = 0;
  this.X = null;
  this.aq = null;
  this.cv = false;
  this.P = 0;
  this.cw = 0;
  this.X = $m_sci_Nil$();
  this.aq = null;
  this.cv = false;
  this.P = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bf = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.al = (function(size) {
});
$p.b = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.X.b(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.cw)));
});
$p.g = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.X, i);
});
$p.d = (function() {
  return this.P;
});
$p.j = (function() {
  return this.P;
});
$p.k = (function() {
  return (this.P === 0);
});
$p.au = (function() {
  this.cv = (!this.k());
  return this.X;
});
$p.fN = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.P === 0)) {
    this.X = last1;
  } else {
    var x$proxy2 = this.aq;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().aO();
    }
    x$proxy2.a3 = last1;
  }
  this.aq = last1;
  this.P = ((1 + this.P) | 0);
  return this;
});
$p.dn = (function(xs) {
  var it = xs.b();
  if (it.f()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
    this.X = last0;
    while (it.f()) {
      var last1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      last0.a3 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.P = len;
    this.aq = last0;
  }
  return this;
});
$p.fI = (function(xs) {
  var it = xs.b();
  if (it.f()) {
    var fresh = new $c_scm_ListBuffer().dn(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.P === 0)) {
      this.X = fresh.X;
    } else {
      var x$proxy3 = this.aq;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().aO();
      }
      x$proxy3.a3 = fresh.X;
    }
    this.aq = fresh.aq;
    this.P = ((this.P + fresh.P) | 0);
  }
  return this;
});
$p.dl = (function(idx, count) {
  if ((count > 0)) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if (((idx < 0) || (((idx + count) | 0) > this.P))) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((((idx + " to ") + ((idx + count) | 0)) + " is out of bounds (min 0, max ") + ((this.P - 1) | 0)) + ")"));
    }
    $p_scm_ListBuffer__removeAfter__sci_$colon$colon__I__V(this, $p_scm_ListBuffer__predecessor__I__sci_$colon$colon(this, idx), count);
  } else if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("removing negative number of elements: " + count));
  }
});
$p.a7 = (function() {
  return "ListBuffer";
});
$p.ak = (function() {
  return $m_scm_ListBuffer$();
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.X, i);
});
$p.ad = (function() {
  return this.au();
});
$p.Y = (function(elem) {
  return this.fN(elem);
});
$p.ah = (function(elems) {
  return this.fI(elems);
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aX)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  aX: 1,
  as: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  Y: 1,
  Z: 1,
  au: 1,
  at: 1,
  q: 1,
  r: 1,
  a4: 1,
  ah: 1,
  a: 1,
  ai: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.az = 0;
  $thiz.a9 = initialElements;
  $thiz.p = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
function $p_scm_ArrayBuffer__reduceToSize__I__V($thiz, n) {
  $thiz.az = ((1 + $thiz.az) | 0);
  $m_ju_Arrays$().g9($thiz.a9, n, $thiz.p, null);
  $thiz.p = n;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.az = 0;
  this.a9 = null;
  this.p = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.b = (function() {
  return this.a0().b();
});
$p.V = (function() {
  return this.a0().V();
});
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.am = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = this.p;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bf = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.j = (function() {
  return this.p;
});
$p.df = (function(n) {
  this.a9 = $m_scm_ArrayBuffer$().fc(this.a9, this.p, n);
});
$p.al = (function(size) {
  if (((size > this.p) && (size >= 1))) {
    this.df(size);
  }
});
$p.g = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().bh(n, ((this.p - 1) | 0));
  }
  if ((hi > this.p)) {
    throw $m_scg_CommonErrors$().bh(((hi - 1) | 0), ((this.p - 1) | 0));
  }
  return this.a9.a[n];
});
$p.fk = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().bh(index, ((this.p - 1) | 0));
  }
  if ((hi > this.p)) {
    throw $m_scg_CommonErrors$().bh(((hi - 1) | 0), ((this.p - 1) | 0));
  }
  this.az = ((1 + this.az) | 0);
  this.a9.a[index] = elem;
});
$p.d = (function() {
  return this.p;
});
$p.a0 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.az)));
});
$p.aM = (function(elem) {
  this.az = ((1 + this.az) | 0);
  var newSize = ((1 + this.p) | 0);
  if ((this.a9.a.length <= ((newSize - 1) | 0))) {
    this.df(newSize);
  }
  this.p = newSize;
  this.a9.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.eB = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.p;
    if ((elemsLength > 0)) {
      this.az = ((1 + this.az) | 0);
      this.df(((this.p + elemsLength) | 0));
      $m_s_Array$().aZ(elems.a9, 0, this.a9, this.p, elemsLength);
      this.p = ((this.p + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.dl = (function(index, count) {
  if ((count > 0)) {
    var hi = ((index + count) | 0);
    if ((index < 0)) {
      throw $m_scg_CommonErrors$().bh(index, ((this.p - 1) | 0));
    }
    if ((hi > this.p)) {
      throw $m_scg_CommonErrors$().bh(((hi - 1) | 0), ((this.p - 1) | 0));
    }
    $m_s_Array$().aZ(this.a9, ((index + count) | 0), this.a9, index, ((this.p - ((index + count) | 0)) | 0));
    $p_scm_ArrayBuffer__reduceToSize__I__V(this, ((this.p - count) | 0));
  } else if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ("removing negative number of elements: " + count));
  }
});
$p.a7 = (function() {
  return "ArrayBuffer";
});
$p.ab = (function(xs, start, len) {
  var srcLen = this.p;
  var destLen = $m_jl_reflect_Array$().Q(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().aZ(this.a9, 0, xs, start, copied);
  }
  return copied;
});
$p.h = (function(v1) {
  return this.g((v1 | 0));
});
$p.ak = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.Y = (function(elem) {
  return this.aM(elem);
});
$p.ah = (function(elems) {
  return this.eB(elems);
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  aT: 1,
  as: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  Y: 1,
  Z: 1,
  au: 1,
  at: 1,
  k: 1,
  p: 1,
  N: 1,
  M: 1,
  aW: 1,
  q: 1,
  r: 1,
  a: 1,
  ai: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.aA = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.aA = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.al = (function(size) {
});
$p.a7 = (function() {
  return "IndexedSeq";
});
$p.b = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.V = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.aE = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.am = (function(n) {
  return $f_sc_IndexedSeqOps__take__I__O(this, n);
});
$p.i = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.T = (function(len) {
  var x = (this.aA.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bf = (function(pred) {
  return $f_sc_StrictOptimizedIterableOps__filterImpl__F1__Z__O(this, pred, false);
});
$p.g = (function(index) {
  return this.aA[index];
});
$p.d = (function() {
  return (this.aA.length | 0);
});
$p.j = (function() {
  return (this.aA.length | 0);
});
$p.dl = (function(n, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  if (((n < 0) || ((count > 0) && (((n + count) | 0) > (this.aA.length | 0))))) {
    throw $ct_jl_IndexOutOfBoundsException__(new $c_jl_IndexOutOfBoundsException());
  }
  this.aA.splice(n, count);
});
$p.aj = (function() {
  return "WrappedArray";
});
$p.ad = (function() {
  return this;
});
$p.Y = (function(elem) {
  this.aA.push(elem);
  return this;
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.aA[index];
});
$p.ak = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  ep: 1,
  as: 1,
  B: 1,
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
  D: 1,
  u: 1,
  C: 1,
  F: 1,
  E: 1,
  Y: 1,
  Z: 1,
  au: 1,
  at: 1,
  r: 1,
  q: 1,
  M: 1,
  k: 1,
  p: 1,
  N: 1,
  aW: 1,
  a4: 1,
  a: 1
}));
var $t_Lcalagem_TipoParticula$__Hidrogenio = null;
var $t_Lcalagem_TipoParticula$__Aluminio = null;
var $t_Lcalagem_TipoParticula$__Calcario = null;
var $t_Lcalagem_TipoParticula$__Carbonato = null;
var $t_Lcalagem_TipoParticula$__Calcio = null;
var $t_Lcalagem_TipoParticula$__DioxidoCarbono = null;
var $t_Lcalagem_TipoParticula$__Agua = null;
var $t_Lcalagem_TipoParticula$__HidroxidoAluminio = null;
$s_Lcalagem_Main__main__AT__V(new ($d_T.r().C)([]));
}).call(this);
//# sourceMappingURL=main.js.map
