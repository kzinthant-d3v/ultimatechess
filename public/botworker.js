(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process){(function (){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("js-chess-engine",[],e):"object"==typeof exports?exports["js-chess-engine"]=e():t["js-chess-engine"]=e()}(this,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e),i.d(e,"Game",(function(){return _})),i.d(e,"moves",(function(){return x})),i.d(e,"status",(function(){return I})),i.d(e,"getFen",(function(){return q})),i.d(e,"move",(function(){return $})),i.d(e,"aiMove",(function(){return J}));const n=["A","B","C","D","E","F","G","H"],s=["1","2","3","4","5","6","7","8"],o="black",r="white",c=[0,1,2,3],l={fullMove:1,halfMove:0,enPassant:null,isFinished:!1,checkMate:!1,check:!1,turn:r},a=Object.assign({pieces:{E1:"K",D1:"Q",A1:"R",H1:"R",C1:"B",F1:"B",B1:"N",G1:"N",A2:"P",B2:"P",C2:"P",D2:"P",E2:"P",F2:"P",G2:"P",H2:"P",E8:"k",D8:"q",A8:"r",H8:"r",C8:"b",F8:"b",B8:"n",G8:"n",A7:"p",B7:"p",C7:"p",D7:"p",E7:"p",F7:"p",G7:"p",H7:"p"},castling:{whiteShort:!0,blackShort:!0,whiteLong:!0,blackLong:!0}},l),u={UP:{A1:"A2",A2:"A3",A3:"A4",A4:"A5",A5:"A6",A6:"A7",A7:"A8",A8:null,B1:"B2",B2:"B3",B3:"B4",B4:"B5",B5:"B6",B6:"B7",B7:"B8",B8:null,C1:"C2",C2:"C3",C3:"C4",C4:"C5",C5:"C6",C6:"C7",C7:"C8",C8:null,D1:"D2",D2:"D3",D3:"D4",D4:"D5",D5:"D6",D6:"D7",D7:"D8",D8:null,E1:"E2",E2:"E3",E3:"E4",E4:"E5",E5:"E6",E6:"E7",E7:"E8",E8:null,F1:"F2",F2:"F3",F3:"F4",F4:"F5",F5:"F6",F6:"F7",F7:"F8",F8:null,G1:"G2",G2:"G3",G3:"G4",G4:"G5",G5:"G6",G6:"G7",G7:"G8",G8:null,H1:"H2",H2:"H3",H3:"H4",H4:"H5",H5:"H6",H6:"H7",H7:"H8",H8:null},DOWN:{A1:null,A2:"A1",A3:"A2",A4:"A3",A5:"A4",A6:"A5",A7:"A6",A8:"A7",B1:null,B2:"B1",B3:"B2",B4:"B3",B5:"B4",B6:"B5",B7:"B6",B8:"B7",C1:null,C2:"C1",C3:"C2",C4:"C3",C5:"C4",C6:"C5",C7:"C6",C8:"C7",D1:null,D2:"D1",D3:"D2",D4:"D3",D5:"D4",D6:"D5",D7:"D6",D8:"D7",E1:null,E2:"E1",E3:"E2",E4:"E3",E5:"E4",E6:"E5",E7:"E6",E8:"E7",F1:null,F2:"F1",F3:"F2",F4:"F3",F5:"F4",F6:"F5",F7:"F6",F8:"F7",G1:null,G2:"G1",G3:"G2",G4:"G3",G5:"G4",G6:"G5",G7:"G6",G8:"G7",H1:null,H2:"H1",H3:"H2",H4:"H3",H5:"H4",H6:"H5",H7:"H6",H8:"H7"},LEFT:{A1:null,A2:null,A3:null,A4:null,A5:null,A6:null,A7:null,A8:null,B1:"A1",B2:"A2",B3:"A3",B4:"A4",B5:"A5",B6:"A6",B7:"A7",B8:"A8",C1:"B1",C2:"B2",C3:"B3",C4:"B4",C5:"B5",C6:"B6",C7:"B7",C8:"B8",D1:"C1",D2:"C2",D3:"C3",D4:"C4",D5:"C5",D6:"C6",D7:"C7",D8:"C8",E1:"D1",E2:"D2",E3:"D3",E4:"D4",E5:"D5",E6:"D6",E7:"D7",E8:"D8",F1:"E1",F2:"E2",F3:"E3",F4:"E4",F5:"E5",F6:"E6",F7:"E7",F8:"E8",G1:"F1",G2:"F2",G3:"F3",G4:"F4",G5:"F5",G6:"F6",G7:"F7",G8:"F8",H1:"G1",H2:"G2",H3:"G3",H4:"G4",H5:"G5",H6:"G6",H7:"G7",H8:"G8"},RIGHT:{A1:"B1",A2:"B2",A3:"B3",A4:"B4",A5:"B5",A6:"B6",A7:"B7",A8:"B8",B1:"C1",B2:"C2",B3:"C3",B4:"C4",B5:"C5",B6:"C6",B7:"C7",B8:"C8",C1:"D1",C2:"D2",C3:"D3",C4:"D4",C5:"D5",C6:"D6",C7:"D7",C8:"D8",D1:"E1",D2:"E2",D3:"E3",D4:"E4",D5:"E5",D6:"E6",D7:"E7",D8:"E8",E1:"F1",E2:"F2",E3:"F3",E4:"F4",E5:"F5",E6:"F6",E7:"F7",E8:"F8",F1:"G1",F2:"G2",F3:"G3",F4:"G4",F5:"G5",F6:"G6",F7:"G7",F8:"G8",G1:"H1",G2:"H2",G3:"H3",G4:"H4",G5:"H5",G6:"H6",G7:"H7",G8:"H8",H1:null,H2:null,H3:null,H4:null,H5:null,H6:null,H7:null,H8:null},UP_LEFT:{A1:null,A2:null,A3:null,A4:null,A5:null,A6:null,A7:null,A8:null,B1:"A2",B2:"A3",B3:"A4",B4:"A5",B5:"A6",B6:"A7",B7:"A8",B8:null,C1:"B2",C2:"B3",C3:"B4",C4:"B5",C5:"B6",C6:"B7",C7:"B8",C8:null,D1:"C2",D2:"C3",D3:"C4",D4:"C5",D5:"C6",D6:"C7",D7:"C8",D8:null,E1:"D2",E2:"D3",E3:"D4",E4:"D5",E5:"D6",E6:"D7",E7:"D8",E8:null,F1:"E2",F2:"E3",F3:"E4",F4:"E5",F5:"E6",F6:"E7",F7:"E8",F8:null,G1:"F2",G2:"F3",G3:"F4",G4:"F5",G5:"F6",G6:"F7",G7:"F8",G8:null,H1:"G2",H2:"G3",H3:"G4",H4:"G5",H5:"G6",H6:"G7",H7:"G8",H8:null},DOWN_RIGHT:{A1:null,A2:"B1",A3:"B2",A4:"B3",A5:"B4",A6:"B5",A7:"B6",A8:"B7",B1:null,B2:"C1",B3:"C2",B4:"C3",B5:"C4",B6:"C5",B7:"C6",B8:"C7",C1:null,C2:"D1",C3:"D2",C4:"D3",C5:"D4",C6:"D5",C7:"D6",C8:"D7",D1:null,D2:"E1",D3:"E2",D4:"E3",D5:"E4",D6:"E5",D7:"E6",D8:"E7",E1:null,E2:"F1",E3:"F2",E4:"F3",E5:"F4",E6:"F5",E7:"F6",E8:"F7",F1:null,F2:"G1",F3:"G2",F4:"G3",F5:"G4",F6:"G5",F7:"G6",F8:"G7",G1:null,G2:"H1",G3:"H2",G4:"H3",G5:"H4",G6:"H5",G7:"H6",G8:"H7",H1:null,H2:null,H3:null,H4:null,H5:null,H6:null,H7:null,H8:null},UP_RIGHT:{A1:"B2",A2:"B3",A3:"B4",A4:"B5",A5:"B6",A6:"B7",A7:"B8",A8:null,B1:"C2",B2:"C3",B3:"C4",B4:"C5",B5:"C6",B6:"C7",B7:"C8",B8:null,C1:"D2",C2:"D3",C3:"D4",C4:"D5",C5:"D6",C6:"D7",C7:"D8",C8:null,D1:"E2",D2:"E3",D3:"E4",D4:"E5",D5:"E6",D6:"E7",D7:"E8",D8:null,E1:"F2",E2:"F3",E3:"F4",E4:"F5",E5:"F6",E6:"F7",E7:"F8",E8:null,F1:"G2",F2:"G3",F3:"G4",F4:"G5",F5:"G6",F6:"G7",F7:"G8",F8:null,G1:"H2",G2:"H3",G3:"H4",G4:"H5",G5:"H6",G6:"H7",G7:"H8",G8:null,H1:null,H2:null,H3:null,H4:null,H5:null,H6:null,H7:null,H8:null},DOWN_LEFT:{A1:null,A2:null,A3:null,A4:null,A5:null,A6:null,A7:null,A8:null,B1:null,B2:"A1",B3:"A2",B4:"A3",B5:"A4",B6:"A5",B7:"A6",B8:"A7",C1:null,C2:"B1",C3:"B2",C4:"B3",C5:"B4",C6:"B5",C7:"B6",C8:"B7",D1:null,D2:"C1",D3:"C2",D4:"C3",D5:"C4",D6:"C5",D7:"C6",D8:"C7",E1:null,E2:"D1",E3:"D2",E4:"D3",E5:"D4",E6:"D5",E7:"D6",E8:"D7",F1:null,F2:"E1",F3:"E2",F4:"E3",F5:"E4",F6:"E5",F7:"E6",F8:"E7",G1:null,G2:"F1",G3:"F2",G4:"F3",G5:"F4",G6:"F5",G7:"F6",G8:"F7",H1:null,H2:"G1",H3:"G2",H4:"G3",H5:"G4",H6:"G5",H7:"G6",H8:"G7"}},h=[[0,0,0,0,0,0,0,0],[5,5,5,5,5,5,5,5],[1,1,2,3,3,2,1,1],[.5,.5,1,2.5,2.5,1,.5,.5],[0,0,0,2,2,0,0,0],[.5,0,1,0,0,1,0,.5],[.5,0,0,-2,-2,0,0,.5],[0,0,0,0,0,0,0,0]],g=[[-4,-3,-2,-2,-2,-2,-3,-4],[-3,-2,0,0,0,0,-2,-3],[-2,0,1,1.5,1.5,1,0,-2],[-2,.5,1.5,2,2,1.5,.5,-2],[-2,0,1.5,2,2,1.5,0,-2],[-2,.5,1,1.5,1.5,1,.5,-2],[-3,-2,0,.5,.5,0,-2,-3],[-4,-3,-2,-2,-2,-2,-3,-4]],C=[[-2,-1,-1,-1,-1,-1,-1,-2],[-1,0,0,0,0,0,0,-1],[-1,0,.5,1,1,.5,0,-1],[-1,.5,.5,1,1,.5,.5,-1],[-1,0,1,1,1,1,0,-1],[-1,1,1,1,1,1,1,-1],[-1,.5,0,0,0,0,.5,-1],[-2,-1,-1,-1,-1,-1,-1,-2]],f=[[0,0,0,0,0,0,0,0],[.5,1,1,1,1,1,1,.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[0,0,0,.5,.5,0,0,0]],P=[[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-2,-3,-3,-4,-4,-3,-3,-2],[-1,-2,-2,-2,-2,-2,-2,-1],[2,2,0,0,0,0,2,2],[2,3,1,0,0,1,3,2]],p=[[-2,-1,-1,-.5,-.5,-1,-1,-2],[-1,0,0,0,0,0,0,-1],[-1,0,.5,.5,.5,.5,0,-1],[-.5,0,.5,.5,.5,.5,0,-.5],[0,0,.5,.5,.5,.5,0,-.5],[-1,.5,.5,.5,.5,.5,0,-1],[-1,0,.5,0,0,0,0,-1],[-2,-1,-1,-.5,-.5,-1,-1,-2]],E={P:h.slice().reverse(),p:h,N:g.slice().reverse(),n:g,B:C.slice().reverse(),b:C,R:f.slice().reverse(),r:f,K:P.slice().reverse(),k:P,Q:p.slice().reverse(),q:p};function B(t){return u.UP[t]}function F(t){return u.DOWN[t]}function D(t){return u.LEFT[t]}function G(t){return u.RIGHT[t]}function A(t){return u.UP_LEFT[t]}function H(t){return u.UP_RIGHT[t]}function b(t){return u.DOWN_LEFT[t]}function k(t){return u.DOWN_RIGHT[t]}function d(t){const e=A(t);return e?B(e):null}function v(t){const e=A(t);return e?D(e):null}function y(t){const e=H(t);return e?B(e):null}function w(t){const e=H(t);return e?G(e):null}function O(t){const e=b(t);return e?F(e):null}function M(t){const e=b(t);return e?D(e):null}function L(t){const e=k(t);return e?F(e):null}function m(t){const e=k(t);return e?G(e):null}function K(t,e){return e===r?u.UP[t]:u.DOWN[t]}function j(t,e){return e===r?u.UP_LEFT[t]:u.DOWN_RIGHT[t]}function S(t,e){return e===r?u.UP_RIGHT[t]:u.DOWN_LEFT[t]}function R(t,e){return e===r?u.DOWN_LEFT[t]:u.UP_RIGHT[t]}function N(t,e){return e===r?u.DOWN_RIGHT[t]:u.UP_LEFT[t]}function T(t){let e=0;switch(t){case"K":e=10;break;case"Q":e=9;break;case"R":e=5;break;case"B":case"N":e=3;break;case"P":e=1;break;case"k":e=10;break;case"q":e=9;break;case"r":e=5;break;case"b":case"n":e=3;break;case"p":e=1}return e}const W=-1e3,U=1e3;class Q{constructor(t=JSON.parse(JSON.stringify(a))){if("object"==typeof t)this.configuration=Object.assign({},l,t);else{if("string"!=typeof t)throw new Error(`Unknown configuration type ${typeof config}.`);this.configuration=Object.assign({},l,function(t=""){const e={pieces:{}},i=t.split(" "),c=i[0],l=i[1],a=i[2],u=i[3],h=i[4],g=i[5];let C=0,f=s.length-1;for(let t=0;t<c.length;t++)["K","Q","R","B","N","P","k","q","r","b","n","p"].includes(c[t])?(e.pieces[`${n[C]}${s[f]}`]=c[t],C++):["1","2","3","4","5","6","7","8"].includes(c[t])?C+=parseInt(c[t]):"/"===c[t]&&(f--,C=0);return e.turn="b"===l?o:r,e.castling={whiteLong:!1,whiteShort:!1,blackLong:!1,blackShort:!1},a.includes("K")&&(e.castling.whiteShort=!0),a.includes("k")&&(e.castling.blackShort=!0),a.includes("Q")&&(e.castling.whiteLong=!0),a.includes("q")&&(e.castling.blackLong=!0),u.match("^[a-hA-H]{1}[1-8]{1}$")&&(e.enPassant=u),e.halfMove=parseInt(h),e.fullMove=parseInt(g),e}(t))}this.configuration.castling||(this.configuration.castling={whiteShort:!0,blackShort:!0,whiteLong:!0,blackLong:!0})}getAttackingFields(t=this.getPlayingColor()){let e=[];for(const i in this.configuration.pieces){const n=this.getPiece(i);this.getPieceColor(n)===t&&(e=[...e,...this.getPieceMoves(n,i)])}return e}isAttackingKing(t=this.getPlayingColor()){let e=null;for(const i in this.configuration.pieces){const n=this.getPiece(i);if(this.isKing(n)&&this.getPieceColor(n)!==t){e=i;break}}const i=this.getPieceOnLocationColor(e);let n=!1,s=e,o=0;for(;B(s)&&!n;){s=B(s),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isRook(e)||this.isQueen(e)||this.isKing(e)&&1===o)&&(n=!0),e)break}for(s=e,o=0;F(s)&&!n;){s=F(s),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isRook(e)||this.isQueen(e)||this.isKing(e)&&1===o)&&(n=!0),e)break}for(s=e,o=0;D(s)&&!n;){s=D(s),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isRook(e)||this.isQueen(e)||this.isKing(e)&&1===o)&&(n=!0),e)break}for(s=e,o=0;G(s)&&!n;){s=G(s),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isRook(e)||this.isQueen(e)||this.isKing(e)&&1===o)&&(n=!0),e)break}for(s=e,o=0;S(s,i)&&!n;){s=S(s,i),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isBishop(e)||this.isQueen(e)||1===o&&(this.isKing(e)||this.isPawn(e)))&&(n=!0),e)break}for(s=e,o=0;j(s,i)&&!n;){s=j(s,i),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isBishop(e)||this.isQueen(e)||1===o&&(this.isKing(e)||this.isPawn(e)))&&(n=!0),e)break}for(s=e,o=0;N(s,i)&&!n;){s=N(s,i),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isBishop(e)||this.isQueen(e)||this.isKing(e)&&1===o)&&(n=!0),e)break}for(s=e,o=0;R(s,i)&&!n;){s=R(s,i),o++;const e=this.getPiece(s);if(e&&this.getPieceColor(e)===t&&(this.isBishop(e)||this.isQueen(e)||this.isKing(e)&&1===o)&&(n=!0),e)break}s=y(e);let r=this.getPiece(s);return r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),s=w(e),r=this.getPiece(s),r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),s=v(e),r=this.getPiece(s),r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),s=d(e),r=this.getPiece(s),r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),s=O(e),r=this.getPiece(s),r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),s=M(e),r=this.getPiece(s),r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),s=L(e),r=this.getPiece(s),r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),s=m(e),r=this.getPiece(s),r&&this.getPieceColor(r)===t&&this.isKnight(r)&&(n=!0),n}hasPlayingPlayerCheck(){return this.isAttackingKing(this.getNonPlayingColor())}hasNonPlayingPlayerCheck(){return this.isAttackingKing(this.getPlayingColor())}getLowestValuePieceAttackingLocation(t,e=this.getPlayingColor()){let i=null;for(const n in this.configuration.pieces){const s=this.getPiece(n);this.getPieceColor(s)===e&&this.getPieceMoves(s,n).map(e=>{e===t&&(null===i||T(s)<i)&&(i=T(s))})}return i}getMoves(t=this.getPlayingColor(),e=!0){const i={};for(const e in this.configuration.pieces){const n=this.getPiece(e);this.getPieceColor(n)===t&&Object.assign(i,{[e]:this.getPieceMoves(n,e)})}const n=this.getAttackingFields(this.getNonPlayingColor());if(this.isLeftCastlingPossible(n)&&(this.isPlayingWhite()&&i.E1.push("C1"),this.isPlayingBlack()&&i.E8.push("C8")),this.isRightCastlingPossible(n)&&(this.isPlayingWhite()&&i.E1.push("G1"),this.isPlayingBlack()&&i.E8.push("G8")),!e)return i;const s={};for(const t in i)i[t].map(e=>{const i={pieces:Object.assign({},this.configuration.pieces),castling:Object.assign({},this.configuration.castling)},n=new Q(i);n.move(t,e),(this.isPlayingWhite()&&!n.isAttackingKing(o)||this.isPlayingBlack()&&!n.isAttackingKing(r))&&(s[t]||(s[t]=[]),s[t].push(e))});return Object.keys(s).length||(this.configuration.isFinished=!0,this.hasPlayingPlayerCheck()&&(this.configuration.checkMate=!0)),s}isLeftCastlingPossible(t){if(this.isPlayingWhite()&&!this.configuration.castling.whiteLong)return!1;if(this.isPlayingBlack()&&!this.configuration.castling.blackLong)return!1;let e=null;if(this.isPlayingWhite()&&"K"===this.getPiece("E1")&&"R"===this.getPiece("A1")&&!t.includes("E1")?e="E1":this.isPlayingBlack()&&"k"===this.getPiece("E8")&&"r"===this.getPiece("A8")&&!t.includes("E8")&&(e="E8"),!e)return!1;let i=D(e);return!this.getPiece(i)&&!t.includes(i)&&(i=D(i),!this.getPiece(i)&&!t.includes(i)&&(i=D(i),!this.getPiece(i)))}isRightCastlingPossible(t){if(this.isPlayingWhite()&&!this.configuration.castling.whiteShort)return!1;if(this.isPlayingBlack()&&!this.configuration.castling.blackShort)return!1;let e=null;if(this.isPlayingWhite()&&"K"===this.getPiece("E1")&&"R"===this.getPiece("H1")&&!t.includes("E1")?e="E1":this.isPlayingBlack()&&"k"===this.getPiece("E8")&&"r"===this.getPiece("H8")&&!t.includes("E8")&&(e="E8"),!e)return!1;let i=G(e);return!this.getPiece(i)&&!t.includes(i)&&(i=G(i),!this.getPiece(i)&&!t.includes(i))}getPieceMoves(t,e){return this.isPawn(t)?this.getPawnMoves(t,e):this.isKnight(t)?this.getKnightMoves(t,e):this.isRook(t)?this.getRookMoves(t,e):this.isBishop(t)?this.getBishopMoves(t,e):this.isQueen(t)?this.getQueenMoves(t,e):this.isKing(t)?this.getKingMoves(t,e):[]}isPawn(t){return"P"===t.toUpperCase()}isKnight(t){return"N"===t.toUpperCase()}isRook(t){return"R"===t.toUpperCase()}isBishop(t){return"B"===t.toUpperCase()}isQueen(t){return"Q"===t.toUpperCase()}isKing(t){return"K"===t.toUpperCase()}getPawnMoves(t,e){const i=[],n=this.getPieceColor(t);let s=K(e,n);return s&&!this.getPiece(s)&&(i.push(s),s=K(s,n),function(t,e){if(t===r&&"2"===e[1])return!0;if(t===o&&"7"===e[1])return!0;return!1}(n,e)&&s&&!this.getPiece(s)&&i.push(s)),s=j(e,n),s&&(this.getPiece(s)&&this.getPieceOnLocationColor(s)!==n||s===this.configuration.enPassant)&&i.push(s),s=S(e,n),s&&(this.getPiece(s)&&this.getPieceOnLocationColor(s)!==n||s===this.configuration.enPassant)&&i.push(s),i}getKnightMoves(t,e){const i=[],n=this.getPieceColor(t);let s=y(e);return s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=w(e),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=d(e),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=v(e),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=M(e),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=O(e),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=m(e),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=L(e),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),i}getRookMoves(t,e){const i=[],n=this.getPieceColor(t);let s=e;for(;B(s);){s=B(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}for(s=e;F(s);){s=F(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}for(s=e;G(s);){s=G(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}for(s=e;D(s);){s=D(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}return i}getBishopMoves(t,e){const i=[],n=this.getPieceColor(t);let s=e;for(;A(s);){s=A(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}for(s=e;H(s);){s=H(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}for(s=e;b(s);){s=b(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}for(s=e;k(s);){s=k(s);const t=this.getPieceOnLocationColor(s);if(this.getPieceOnLocationColor(s)!==n&&i.push(s),t)break}return i}getQueenMoves(t,e){return[...this.getRookMoves(t,e),...this.getBishopMoves(t,e)]}getKingMoves(t,e){const i=[],n=this.getPieceColor(t);let s=e;return s=B(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=e,s=G(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=e,s=F(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=e,s=D(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=e,s=A(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=e,s=H(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=e,s=b(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),s=e,s=k(s),s&&this.getPieceOnLocationColor(s)!==n&&i.push(s),i}getPieceColor(t){return t.toUpperCase()===t?r:o}getPieceOnLocationColor(t){const e=this.getPiece(t);return e?e.toUpperCase()===e?r:o:null}getPiece(t){return this.configuration.pieces[t]}isEmpty(t){return!this.configuration.pieces[t]}getPlayingColor(){return this.configuration.turn}getNonPlayingColor(){return this.isPlayingWhite()?o:r}isPlayingWhite(){return this.configuration.turn===r}isPlayingBlack(){return this.configuration.turn===o}move(t,e){const i=this.getPiece(t),n=this.getPiece(e);if(!i)throw new Error("There is no piece at "+t);var s,c;if(Object.assign(this.configuration.pieces,{[e]:i}),delete this.configuration.pieces[t],this.isPlayingWhite()&&this.isPawn(i)&&"8"===e[1]&&Object.assign(this.configuration.pieces,{[e]:"Q"}),this.isPlayingBlack()&&this.isPawn(i)&&"1"===e[1]&&Object.assign(this.configuration.pieces,{[e]:"q"}),this.isPawn(i)&&e===this.configuration.enPassant&&delete this.configuration.pieces[(s=e,c=this.getPlayingColor(),c===r?u.DOWN[s]:u.UP[s])],this.isPawn(i)&&this.isPlayingWhite()&&"2"===t[1]&&"4"===e[1]?this.configuration.enPassant=t[0]+"3":this.isPawn(i)&&this.isPlayingBlack()&&"7"===t[1]&&"5"===e[1]?this.configuration.enPassant=t[0]+"6":this.configuration.enPassant=null,"E1"===t&&Object.assign(this.configuration.castling,{whiteLong:!1,whiteShort:!1}),"E8"===t&&Object.assign(this.configuration.castling,{blackLong:!1,blackShort:!1}),"A1"===t&&Object.assign(this.configuration.castling,{whiteLong:!1}),"H1"===t&&Object.assign(this.configuration.castling,{whiteShort:!1}),"A8"===t&&Object.assign(this.configuration.castling,{blackLong:!1}),"H8"===t&&Object.assign(this.configuration.castling,{blackShort:!1}),this.isKing(i)){if("E1"===t&&"C1"===e)return this.move("A1","D1");if("E8"===t&&"C8"===e)return this.move("A8","D8");if("E1"===t&&"G1"===e)return this.move("H1","F1");if("E8"===t&&"G8"===e)return this.move("H8","F8")}this.configuration.turn=this.isPlayingWhite()?o:r,this.isPlayingWhite()&&this.configuration.fullMove++,this.configuration.halfMove++,(n||this.isPawn(i))&&(this.configuration.halfMove=0)}exportJson(){return{moves:this.getMoves(),pieces:this.configuration.pieces,turn:this.configuration.turn,isFinished:this.configuration.isFinished,check:this.hasPlayingPlayerCheck(),checkMate:this.configuration.checkMate,castling:this.configuration.castling,enPassant:this.configuration.enPassant,halfMove:this.configuration.halfMove,fullMove:this.configuration.fullMove}}calculateAiMove(t){return this.calculateAiMoves(t)[0]}calculateAiMoves(t){if(t=parseInt(t),!c.includes(t))throw new Error(`Invalid level ${t}. You can choose ${c}`);const e=[],i=this.calculateScore(this.getPlayingColor()),n=this.getMoves();for(const s in n)n[s].map(n=>{const o=this.getTestBoard(),r=Boolean(o.getPiece(n));o.move(s,n),e.push({from:s,to:n,score:o.testMoveScores(this.getPlayingColor(),this.getAIMaxDepth(t,s,n),r?o.calculateScore(this.getPlayingColor()):i).score+o.calculateScoreByPiecesLocation(this.getPlayingColor())+Math.floor(10*Math.random())/10})});return e.sort((t,e)=>t.score<e.score?0:-1),e}getAIMaxDepth(t,e,i){let n=0;["K","k","Q","q"].map(t=>{n+=T(t)});let s={0:1,1:2,2:3,3:3}[t];return this.getIngamePiecesValue()<n&&(s+=1),t>=3&&this.configuration.pieces[i]&&(s+=1),s}getIngamePiecesValue(){let t=0;for(const e in this.configuration.pieces){t+=T(this.getPiece(e))}return t}getTestBoard(){const t={pieces:Object.assign({},this.configuration.pieces),castling:Object.assign({},this.configuration.castling),turn:this.configuration.turn,enPassant:this.configuration.enPassant};return new Q(t)}testMoveScores(t,e,i,n=1){let s={};if(this.hasPlayingPlayerCheck()?(i=null,s=this.getMoves(this.getPlayingColor())):n<e&&(s=this.getMoves(this.getPlayingColor(),!1)),n>=e||this.configuration.isFinished){if(null!==i)return{score:i,checkMate:!1};let e=this.calculateScore(t);return this.configuration.checkMate&&(e+=this.getPlayingColor()===t?n:-n),{score:e,checkMate:this.configuration.checkMate}}let o=this.getPlayingColor()===t?W:U,r=!1;for(const c in s)r||s[c].map(s=>{if(r)return;const l=this.getTestBoard(),a=Boolean(l.getPiece(s));if(l.move(c,s),l.hasNonPlayingPlayerCheck())return;const u=l.testMoveScores(t,e,a?l.calculateScore(t):i,n+1);u.checkMate&&(r=!0),o=this.getPlayingColor()===t?Math.max(o,u.score):Math.min(o,u.score)});return{score:o,checkMate:!1}}calculateScoreByPiecesLocation(t=this.getPlayingColor()){const e={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7};let i=0;for(const n in this.configuration.pieces){const s=this.getPiece(n);if(E[s]){const o=E[s][n[1]-1][e[n[0]]];i+=.5*(this.getPieceColor(s)===t?o:-o)}}return i}calculateScore(t=this.getPlayingColor()){let e=0;if(this.configuration.checkMate)return this.getPlayingColor()===t?W:U;for(const i in this.configuration.pieces){const n=this.getPiece(i);this.getPieceColor(n)===t?e+=10*T(n):e-=10*T(n)}return e}}class _{constructor(t){this.board=new Q(t)}move(t,e){t=t.toUpperCase(),e=e.toUpperCase();const i=this.board.getMoves();if(!i[t]||!i[t].includes(e))throw new Error(`Invalid move from ${t} to ${e} for ${this.board.getPlayingColor()}`);this.board.move(t,e)}moves(t=null){return(t?this.board.getMoves()[t.toUpperCase()]:this.board.getMoves())||[]}aiMove(t=2){const e=this.board.calculateAiMove(t);return this.move(e.from,e.to)}printToConsole(){!function(t){process.stdout.write("\n");let e=r;Object.assign([],s).reverse().map(i=>{process.stdout.write(""+i),n.map(n=>{switch(t.pieces[`${n}${i}`]){case"K":process.stdout.write("♚");break;case"Q":process.stdout.write("♛");break;case"R":process.stdout.write("♜");break;case"B":process.stdout.write("♝");break;case"N":process.stdout.write("♞");break;case"P":process.stdout.write("♟");break;case"k":process.stdout.write("♔");break;case"q":process.stdout.write("♕");break;case"r":process.stdout.write("♖");break;case"b":process.stdout.write("♗");break;case"n":process.stdout.write("♘");break;case"p":process.stdout.write("♙");break;default:process.stdout.write(e===r?"█":"░")}e=e===r?o:r}),e=e===r?o:r,process.stdout.write("\n")}),process.stdout.write(" "),n.map(t=>{process.stdout.write(""+t)}),process.stdout.write("\n")}(this.board.configuration)}exportJson(){return this.board.exportJson()}exportFEN(){return function(t){let e="";Object.assign([],s).reverse().map(i=>{let s=0;i<8&&(e+="/"),n.map(n=>{const o=t.pieces[`${n}${i}`];o?(s&&(e+=s.toString(),s=0),e+=o):s++}),e+=""+(s||"")}),e+=t.turn===r?" w ":" b ";const{whiteShort:i,whiteLong:o,blackLong:c,blackShort:l}=t.castling;return o||i||c||l?(i&&(e+="K"),o&&(e+="Q"),l&&(e+="k"),c&&(e+="q")):e+="-",e+=" "+(t.enPassant?t.enPassant.toLowerCase():"-"),e+=" "+t.halfMove,e+=" "+t.fullMove,e}(this.board.configuration)}}function x(t){if(!t)throw new Error("Configuration param required.");return new _(t).moves()}function I(t){if(!t)throw new Error("Configuration param required.");return new _(t).exportJson()}function q(t){if(!t)throw new Error("Configuration param required.");return new _(t).exportFEN()}function $(t,e,i){if(!t)throw new Error("Configuration param required.");const n=new _(t);return n.move(e,i),"object"==typeof t?n.exportJson():n.exportFEN()}function J(t,e=2){if(!t)throw new Error("Configuration param required.");const i=new _(t).board.calculateAiMove(e);return{[i.from]:i.to}}}])}));
}).call(this)}).call(this,require('_process'))
},{"_process":3}],2:[function(require,module,exports){
const jsChessEngine = require("js-chess-engine");
const { aiMove } = jsChessEngine;
/* eslint-disable no-restricted-globals */

onmessage = (e) => {
  let fen = e.data.fen;
  let level = e.data.leve;
  const aimove = aiMove(fen, level);

  postMessage({
    result: aimove,
  });
};

},{"js-chess-engine":1}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[2]);
