"use client";
import {useEffect} from "react";
export function RevealInit(){useEffect(()=>{const els=document.querySelectorAll(".reveal");const o=new IntersectionObserver(e=>e.forEach(x=>x.target.classList.toggle("in",x.isIntersecting)),{threshold:.12});els.forEach(el=>o.observe(el));return()=>o.disconnect()},[]);return null}
