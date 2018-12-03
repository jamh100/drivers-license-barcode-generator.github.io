(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,n,t){"use strict";t.r(n);var r=t(6),a=t.n(r),i=t(0),o=t.n(i),u=t(135),l=t(4),s=t.n(l),c=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this)._handleChange=function(e){var t=n.props.onChange;t&&t(e.target.value)},n}return a()(n,e),n.prototype.render=function(){return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,this.props.label),o.a.createElement("input",{onChange:this._handleChange,type:"text",className:"form-control"}))},n}(i.Component);c.propTypes={onChange:s.a.func,label:s.a.string.isRequired};var h=function(e){return o.a.createElement(c,e)},d=function(e){var n=e.onChange;return o.a.createElement(h,{label:"First Name",onChange:n})};d.propTypes={onChange:s.a.func};var p=d,m=function(e){var n=e.onChange;return o.a.createElement(h,{label:"Middle Name",onChange:n})};m.propTypes={onChange:s.a.func};var f=m,C=function(e){var n=e.onChange;return o.a.createElement(h,{label:"Last Name",onChange:n})};C.propTypes={onChange:s.a.func};var g=C,_=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this)._handleClick=function(e){var t=n.props.onChange;t&&t(e)},n}a()(n,e);var t=n.prototype;return t._renderEyeColorOptions=function(){var e=this;return this.props.options.map(function(n,t){var r="eye-color-"+n.slug;return n.label===e.props.selected&&(r+=" selected"),o.a.createElement("div",{onClick:e._handleClick.bind(null,n.label),className:r,key:t},n.label)})},t.render=function(){return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Eye Color"),this._renderEyeColorOptions())},n}(i.Component);_.propTypes={options:s.a.arrayOf(s.a.shape({label:s.a.string.isRequired,hex:s.a.string.isRequired})).isRequired,selected:s.a.string,onChange:s.a.func};var E=function(e){function n(){return e.apply(this,arguments)||this}a()(n,e);var t=n.prototype;return t._renderUnitOptions=function(){return o.a.createElement("select",{onChange:this._handleChange},this.props.unitOptions.map(function(e,n){return o.a.createElement("option",{key:n},e)}))},t.render=function(){return o.a.createElement("div",null,o.a.createElement("label",null,"Height"),o.a.createElement("input",{type:"text"}),this._renderUnitOptions())},n}(i.Component);E.propTypes={value:s.a.number,unit:s.a.string,unitOptions:s.a.arrayOf(s.a.string).isRequired};var y=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this)._handleChange=function(e){var t=n.props.onChange;t&&t(e.target.value)},n}return a()(n,e),n.prototype.render=function(){return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,this.props.label),o.a.createElement("input",{onChange:this._handleChange,type:"date",className:"form-control"}))},n}(i.Component);y.propTypes={onChange:s.a.func,label:s.a.string.isRequired},t.d(n,"default",function(){return v});var I=[{label:"Hazel",hex:"#776536",slug:"hazel"},{label:"Blue",hex:"#a1caf1",slug:"blue"},{label:"Brown",hex:"#603101",slug:"brown"}],b=["in","cm"],v=function(e){function n(n){var t;return(t=e.call(this,n)||this)._handleHeightValueChange=function(e){console.log(e)},t._handleHeightUnitChange=function(e){console.log(e)},t._handleEyeColorChange=function(e){t.setState({eyeColor:e})},t._handleFirstNameChange=function(e){t.setState({firstName:e})},t._handleDateOfBirthChange=function(e){t.setState({dateOfBirth:e})},t._handleAddressStreet1Change=function(e){t.setState({addressStreet1:e})},t._handleDocumentExpirationDateChange=function(e){t.setState({documentExpirationDate:e})},t._handleMiddleNameChange=function(e){t.setState({middleName:e})},t._handleLastNameChange=function(e){t.setState({lastName:e})},t._handleDocumentDiscriminatorChange=function(e){t.setState({documentDiscriminator:e})},t._handleJurisdictionVehicleClassChange=function(e){t.setState({jurisdictionSpecificVehicleClass:e})},t.state={},t}a()(n,e);var t=n.prototype;return t._renderHeightInput=function(){return o.a.createElement(E,{onUnitChange:this._handleHeightUnitChange,onValueChange:this._handleHeightValueChange,unit:this.state.heightUnit,unitOptions:b,value:this.state.heightValue})},t._renderEyeColorInput=function(){return o.a.createElement(_,{onChange:this._handleEyeColorChange,selected:this.state.eyeColor,options:I})},t._renderDebug=function(){return o.a.createElement("pre",null,JSON.stringify(this.state))},t._renderFirstNameInput=function(){return o.a.createElement(p,{onChange:this._handleFirstNameChange,value:this.state.firstName})},t._renderMiddleNameInput=function(){return o.a.createElement(f,{onChange:this._handleMiddleNameChange,value:this.state.middleName})},t._renderLastNameInput=function(){return o.a.createElement(g,{onChange:this._handleLastNameChange,value:this.state.lastName})},t._renderDocumentDiscriminatorInput=function(){return o.a.createElement(c,{label:"Document Discriminator",onChange:this._handleDocumentDiscriminatorChange})},t._renderJurisdictionSpecificVehicleClassInput=function(){return o.a.createElement(c,{label:"Jurisdiction Specific Vehicle Class",onChange:this._handleJurisdictionVehicleClassChange})},t._renderJurisdictionSpecificRestrictionCodesInput=function(){return null},t._renderJurisdictionSpecificEndorsementCodesInput=function(){return null},t._renderDocumentExpirationDateInput=function(){return o.a.createElement(y,{label:"Document Expiration Date",onChange:this._handleDocumentExpirationDateChange})},t._renderDateOfBirthInput=function(){return o.a.createElement(y,{label:"Date of Birth",onChange:this._handleDateOfBirthChange})},t._renderPhysicalDescriptionSexInput=function(){return null},t._renderAddressStreet1Input=function(){return o.a.createElement(c,{label:"Address",onChange:this._handleAddressStreet1Change})},t._renderAddressCityInput=function(){return null},t._renderAddressJurisdictionCodeInput=function(){return null},t._renderAddressPostalCodeInput=function(){return o.a.createElement(c,{label:"Postal Code"})},t._renderCountryIdentificationInput=function(){return null},t._renderAddressInputs=function(){return o.a.createElement(o.a.Fragment,null,this._renderAddressStreet1Input(),this._renderAddressCityInput(),this._renderAddressJurisdictionCodeInput(),this._renderAddressPostalCodeInput())},t._renderCustomerIDNumberInput=function(){return null},t._renderDocumentIssueDateInput=function(){return null},t.render=function(){return o.a.createElement(u.a,null,this._renderDebug(),o.a.createElement("form",null,this._renderJurisdictionSpecificVehicleClassInput(),this._renderJurisdictionSpecificRestrictionCodesInput(),this._renderDocumentExpirationDateInput(),this._renderFirstNameInput(),this._renderMiddleNameInput(),this._renderPhysicalDescriptionSexInput(),this._renderCountryIdentificationInput(),this._renderCustomerIDNumberInput(),this._renderAddressInputs(),this._renderLastNameInput(),this._renderEyeColorInput(),this._renderDateOfBirthInput(),this._renderDocumentDiscriminatorInput(),this._renderHeightInput(),o.a.createElement("input",{type:"submit",value:"Generate Barcode",className:"btn btn-primary"})))},n}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-eb5ec0af6a539ba110f4.js.map