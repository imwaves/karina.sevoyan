(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=document.documentElement;document.addEventListener("scroll",i=>{const o=document.querySelector(".Name");o.style.top=Math.max(0,128-s.scrollTop)+"px",o.style.setProperty("--bg-opaq",s.scrollTop>window.innerHeight?.7:0)});window.addEventListener("hashchange",c);c();function c(){console.log(location.hash),location.hash&&setTimeout(()=>{document.querySelector(location.hash).scrollIntoView({behavior:"smooth"})},300)}
