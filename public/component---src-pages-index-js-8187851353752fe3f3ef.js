(window.webpackJsonp = window.webpackJsonp || []).push([[4], { 129: function (e, n, t) { 'use strict'; t.r(n); var a = t(6); var r = t.n(a); var o = t(0); var l = t.n(o); var c = (t(131), t(133)); var u = t(4); var p = t.n(u); var i = (function (e) { function n () { for (var n, t = arguments.length, a = new Array(t), r = 0; r < t; r++)a[r] = arguments[r]; return (n = e.call.apply(e, [this].concat(a)) || this)._handleChange = function (e) { var t = n.props.onChange; t && t(e.target.value) }, n } return r()(n, e), n.prototype.render = function () { return l.a.createElement('div', { className: 'form-group' }, l.a.createElement('label', { htmlFor: 'firstName' }, 'First Name'), l.a.createElement('input', { id: 'firstName', onChange: this._handleChange, type: 'text', className: 'form-control' })) }, n }(o.Component)); i.propTypes = { onChange: p.a.func }; var s = (function (e) { function n () { for (var n, t = arguments.length, a = new Array(t), r = 0; r < t; r++)a[r] = arguments[r]; return (n = e.call.apply(e, [this].concat(a)) || this)._handleChange = function (e) { var t = n.props.onChange; t && t(e.target.value) }, n } return r()(n, e), n.prototype.render = function () { return l.a.createElement('div', { className: 'form-group' }, l.a.createElement('label', null, this.props.label), l.a.createElement('input', { onChange: this._handleChange, type: 'text', className: 'form-control' })) }, n }(o.Component)); s.propTypes = { onChange: p.a.func, label: p.a.string.isRequired }; var h = function (e) { var n = e.onChange; return l.a.createElement(s, { label: 'Last Name', onChange: n }) }; h.propTypes = { onChange: p.a.func }; var m = h; t.d(n, 'default', function () { return f }); var f = (function (e) { function n () { return e.apply(this, arguments) || this } return r()(n, e), n.prototype.render = function () { return l.a.createElement(c.a, null, l.a.createElement('form', null, l.a.createElement(i, { onChange: function (e) { return console.log(e) } }), l.a.createElement(m, { onChange: function (e) { return console.log(e) } }), l.a.createElement('input', { type: 'submit', value: 'Generate Barcode', className: 'btn btn-primary' }))) }, n }(o.Component)) } }])
// # sourceMappingURL=component---src-pages-index-js-8187851353752fe3f3ef.js.map