"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promiseImp() {
    return new Promise(function (resolved) {
        setTimeout(function () {
            resolved({
                responseData: "Hi!!"
            });
        }, 2000);
    });
}
promiseImp().then(function (data) {
    console.log(data);
    test2();
});
function test2() {
    console.log("Test2");
}
exports.default = promiseImp;
