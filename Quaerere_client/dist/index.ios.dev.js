"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactRouterNative=require("react-router-native");var _this=void 0,_jsxFileName="/home/constantijn/lampstack-7.4.16-0/apache2/htdocs/Quaerere/Quaerere_client/index.ios.js";var Home=function Home(){return _react["default"].createElement(_reactNative.Text,{style:styles.header,__self:_this,__source:{fileName:_jsxFileName,lineNumber:10,columnNumber:20}},"hou de ntag21x kaart voor de telefoon");};var overview=function overview(){_react["default"].createElement(_reactNative.View,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:12,columnNumber:24}},_react["default"].createElement(_reactNative.Text,{style:styles.header,__self:_this,__source:{fileName:_jsxFileName,lineNumber:13,columnNumber:1}},"overview page"));};var App=function App(){return _react["default"].createElement(_reactRouterNative.NativeRouter,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:3}},_react["default"].createElement(_reactNative.View,{style:styles.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:5}},_react["default"].createElement(_reactNative.View,{style:styles.nav,__self:_this,__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:7}},_react["default"].createElement(_reactRouterNative.Link,{to:"/",underlayColor:"#f0f4f7",style:styles.navItem,__self:_this,__source:{fileName:_jsxFileName,lineNumber:20,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:11}},"Home")),_react["default"].createElement(_reactRouterNative.Link,{to:"/overview",underlayColor:"#f0f4f7",style:styles.navItem,__self:_this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:9}},_react["default"].createElement(_reactNative.Text,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:11}},"overview"))),_react["default"].createElement(_reactRouterNative.Route,{exact:true,path:"/",component:Home,__self:_this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:7}}),_react["default"].createElement(_reactRouterNative.Route,{path:"/overview",component:overview,__self:_this,__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:7}})));};var styles=_reactNative.StyleSheet.create({container:{marginTop:25,padding:10},header:{fontSize:20,textAlign:"center"},nav:{flexDirection:"row",justifyContent:"space-around"},navItem:{flex:1,alignItems:"center",padding:10},subNavItem:{padding:5},topic:{textAlign:"center",fontSize:15}});_reactNative.AppRegistry.registerComponent("main",function(){return App;});