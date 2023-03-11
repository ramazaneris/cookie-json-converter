"use strict";
exports.__esModule = true;
exports.scv = void 0;
function scv(req) {
    var mynewobj = {};
    req.headers.cookie.split(";").map(function (x, i) {
        mynewobj[i === 0
            ? x.split("=")[0].split("").join("")
            : x
                .split("=")[0]
                .split("")
                .splice(1, x.split("=")[0].length - 1)
                .join("")] = x.split("=")[1];
    });
    return mynewobj;
}
exports.scv = scv;
