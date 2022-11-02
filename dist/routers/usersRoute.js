"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    app.get('/users', (req, res) => res.status(200).json('success'));
}
exports.default = default_1;
