(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,c,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._alt=e.name,this._likes=e.likes,this._cardId=e._id,this._ownerId=e.owner._id,this._template=n,this._curretUserId=r,this._handleCardClick=o,this._handleDeleteCardClick=i,this._handleLikeCardClick=c,this._handleDislikeCardClick=a}var n,r;return n=t,(r=[{key:"_checkLikeCurrentUser",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._curretUserId&&e._view.querySelector(".button_type_heart-like").classList.add("button_type_heart-like-active")}))}},{key:"_createView",value:function(){this._view=this._template.querySelector(".element").cloneNode(!0),this._cardImage=this._view.querySelector(".element__photo"),this._likesCounter=this._view.querySelector(".element__counter"),this._removeButton=this._view.querySelector(".button_type_delete"),this._curretUserId===this._ownerId&&this._removeButton.classList.remove("button_type_delete-disactive")}},{key:"_likeButton",value:function(e){e.target.classList.toggle("button_type_heart-like-active")}},{key:"_setEventListeners",value:function(){var e=this;this._view.querySelector(".button_type_heart-like").addEventListener("click",(function(t){e._view.querySelector(".button_type_heart-like").classList.contains("button_type_heart-like-active")?(e._likeButton(t),e._handleDislikeCardClick(e._cardId,e._view)):(e._likeButton(t),e._handleLikeCardClick(e._cardId,e._view))})),this._removeButton.addEventListener("click",(function(){e._handleDeleteCardClick(e._cardId,e._view)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"render",value:function(){return this._createView(),this._view.querySelector(".element__name").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._alt+". Изображение загружается либо недоступно",this._likesCounter.textContent=this._likes.length,this._setEventListeners(),this._checkLikeCurrentUser(),this._view}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitBtnSelector=t.submitBtnSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._closeButtonSelector=t.closeButtonSelector,this._formElement=n}var t,r;return t=e,(r=[{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_toggleButtonState",value:function(){var e=this._formElement.checkValidity();this._buttonElement.classList.toggle(this._inactiveButtonClass,!e),this._buttonElement.disabled=!e}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitBtnSelector),this._formElement.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closePopupByEsc=this._closePopupByEsc.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupByEsc)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupByEsc)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup(),t.target.classList.contains("popup__close-button")&&e.closePopup()}))}},{key:"_closePopupByEsc",value:function(e){"Escape"===e.key&&this.closePopup()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._currentPopupName=t._popup.querySelector(".popup__content_type_name"),t._currentPopupLink=t._popup.querySelector(".popup__content_type_image"),t}return t=c,(n=[{key:"openPopup",value:function(e){this._currentPopupName.textContent=e.name,this._currentPopupLink.src=e.link,this._currentPopupLink.alt=e.name,u(f(c.prototype),"openPopup",this).call(this)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(i);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function c(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._handleFormSubmit=r,n._currentForm=n._popup.querySelector(".popup__input-form"),n._currentFormInputs=n._currentForm.querySelectorAll(".popup__input-text"),n._popupSaveButton=n._popup.querySelector(".popup__save-button"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._currentFormInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._currentForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.closePopup()})),y(k(c.prototype),"setEventListeners",this).call(this)}},{key:"closePopup",value:function(){this._currentForm.reset(),y(k(c.prototype),"closePopup",this).call(this)}},{key:"setSubmitCallback",value:function(e){this._handleFormSubmit=e}},{key:"renderLoading",value:function(e){this._popupSaveButton.textContent=e}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(i);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.infoSelector,r=t.descriptionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileInfo=document.querySelector(n),this._profileDescription=document.querySelector(r),this._avatarSelector=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{info:this._profileInfo.textContent,description:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._profileInfo.textContent=t,this._profileDescription.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._avatarSelector.src=t}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка даных: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("https://mesto.nomoreparties.co/v1/cohort-34/cards",{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getInitialUser",value:function(){var e=this;return fetch("https://nomoreparties.co/v1/cohort-34/users/me",{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getChangeAvatar",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-34/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"getChangeUserInfo",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-34/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"getNewCard",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-34/cards",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"getDeleteCard",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-34/cards/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getAddLike",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-34/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getRemoveLike",value:function(e){var t=this;return fetch("https://nomoreparties.co/v1/cohort-34/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-34",headers:{authorization:"8ea9cb00-852a-4345-ada2-88b25612cbe6","Content-Type":"application/json"}}),O=new C({infoSelector:".profile__info",descriptionSelector:".profile__description",avatarSelector:".profile__avatar"}),I=null;L.getInitialUser().then((function(e){O.setUserInfo({name:e.name,about:e.about}),O.setUserAvatar({avatar:e.avatar}),I=e._id})).catch((function(e){return console.log(e)}));var j=document.querySelector(".popup__input-form_type_edit"),q=j.querySelector(".popup__input-text_type_name"),B=j.querySelector(".popup__input-text_type_description"),R=document.querySelector(".template").content,x=".elements",T=function(e,t){V.openPopup({name:e,link:t})},U=function(e,t){F.setSubmitCallback((function(){F.renderLoading("Удаление..."),L.getDeleteCard(e).then((function(){t.remove(),F.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){return F.renderLoading("Да")}))})),F.openPopup()},A=function(e,t){L.getAddLike(e).then((function(e){t.querySelector(".element__counter").textContent=e.likes.length})).catch((function(e){return console.log(e)}))},D=function(e,t){L.getRemoveLike(e).then((function(e){t.querySelector(".element__counter").textContent=e.likes.length})).catch((function(e){return console.log(e)}))},F=new g(".popup_type_delete",{handleFormSubmit:function(){}});F.setEventListeners();var V=new h(".popup_type_image");V.setEventListeners();var N=new g(".popup_type_edit",{handleFormSubmit:function(e){var t=e.name,n=e.about;N.renderLoading("Сохранение..."),L.getChangeUserInfo({name:t,about:n}).then((function(e){O.setUserInfo({name:e.name,about:e.about})})).catch((function(e){return console.log(e)})).finally((function(){return N.renderLoading("Сохранить")}))}});N.setEventListeners();var J=new g(".popup_type_avatar",{handleFormSubmit:function(e){J.renderLoading("Сохранение..."),L.getChangeAvatar(e).then((function(e){O.setUserAvatar({avatar:e.avatar})})).catch((function(e){return console.log(e)})).finally((function(){return J.renderLoading("Сохранить")}))}});function H(e){return new t(e,R,I,T,U,A,D).render()}J.setEventListeners();var z=new g(".popup_type_add",{handleFormSubmit:function(e){z.renderLoading("Сохранение..."),L.getNewCard(e).then((function(e){var t=H({name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner});document.querySelector(x).prepend(t)})).catch((function(e){return console.log(e)})).finally((function(){return z.renderLoading("Сохранить")}))}});z.setEventListeners(),L.getInitialCards().then((function(e){var t=new S({items:e,renderer:function(e){t.addItem(H(e))}},x);t.addItems()})).catch((function(e){return console.log(e)}));var M,G={};M={formSelector:".popup__input-form",inputSelector:".popup__input-text",submitBtnSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input-text_type_error",errorClass:"popup__input-form-error_active",closeButtonSelector:".popup__close-button"},Array.from(document.querySelectorAll(M.formSelector)).forEach((function(e){var t=new r(M,e),n=e.getAttribute("name");G[n]=t,t.enableValidation()}));var K=document.querySelector(".button_type_edit"),Q=document.querySelector(".button_type_add"),W=document.querySelector(".profile__avatar");K.addEventListener("click",(function(){N.openPopup();var e=O.getUserInfo();q.value=e.info,B.value=e.description,G.formEdit.resetValidation()})),Q.addEventListener("click",(function(){G.formAdd.resetValidation(),z.openPopup()})),W.addEventListener("click",(function(){G.formAvatar.resetValidation(),J.openPopup()}))})();
//# sourceMappingURL=main.js.map