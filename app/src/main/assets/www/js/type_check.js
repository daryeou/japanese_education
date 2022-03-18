function getType(target) {
    let type=Object.prototype.toString.call(target).slice(8, -1);
    console.log("type=",target,type);
    return type;
}
function isString(target) {
    return getType(target) === "String";
}
function isNumber(target) {
    return getType(target) === 'Number';
}
function isBoolean(target) {
    return getType(target) === 'Boolean';
}
function isNull(target) {
    return getType(target) === 'Null';
}
function isUndefined(target) {
    return getType(target) === 'Undefined';
}
function isObject(target) {
    return getType(target) === 'Object';
}
function isArray(target) {
    return getType(target) === "Array";
}
function isDate(target) {
    return getType(target) === 'Date';
}
function isRegExp(target) {
    return getType(target) === 'RegExp';
}
function isFunction(target) {
    return getType(target) === 'Function';
}
function isElement(target) {
    return !!(target && target instanceof HTMLElement);
}
const isArrayLike = function (collection){
    const MAX_ARRAY_INDEX = Math.pow(2,53)-1;
    const length = collection == null ? undefined : collection.length;
    return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
}