// ==UserScript==
// @name         XDA Sidebar hider
// @namespace    https://github.com/Alistair1231/
// @version      0.0.1
// @description  Hides the sidebar with jquery
// @author       Alistair1231
// @match        https://forum.xda-developers.com/*
// @grant        none
// @license GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright 2018, Alistair1231 (https://github.com/Alistair1231/)
// @run-at document-idle
// ==/UserScript==

// ==OpenUserJS==
// @author Alistair1231
// ==/OpenUserJS==

setTimeout(function(){
	var scr = document.createElement('script');
	scr.type="text/javascript";
	scr.src="https://gistcdn.githack.com/Alistair1231/61d55e03deaad64e5096bda0639167f8/raw/a10225938c3069ace6ba36d9d7d514637ccc9ba2/xdaNoSidebar.js";
	document.getElementsByTagName('head')[0].appendChild(scr);
	//document.body.appendChild(scr);
}, 200);
