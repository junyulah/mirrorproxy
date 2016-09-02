'use strict';

const SECRET_KEY = '__cache__mirror__';

let cacheProp = (obj, key, value, {
    secretKey = SECRET_KEY, hide
} = {}) => {
    obj[secretKey] = obj[secretKey] || {};
    obj[secretKey][key] = {
        value, hide
    };
};

let getProp = (obj, key, {
    secretKey = SECRET_KEY
} = {}) => {
    obj[secretKey] = obj[secretKey] || {};
    return obj[secretKey][key];
};

let fromCache = (obj, key, {
    secretKey = SECRET_KEY
} = {}) => {
    obj[secretKey] = obj[secretKey] || {};
    let v = obj[secretKey][key];
    if (!v) return false;
    if (v.hide) return false;
    return v;
};

let removeCache = (obj, key, {
    secretKey = SECRET_KEY
} = {}) => {
    obj[secretKey] = obj[secretKey] || {};
    obj[secretKey][key] = undefined;
};

module.exports = {
    cacheProp,
    fromCache,
    removeCache,
    getProp
};
