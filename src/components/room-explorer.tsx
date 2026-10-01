"use client";
import Image from "next/image";import Link from "next/link";import {useState} from "react";
const rooms=[
 {n:"01",name:"TV Units",href:"/services/tv-units",image:"/projects/tv-units/illuminated-media-wall-03.jpeg",line:"Storage, display and light resolved as one wall."},
 {n:"02",name:"Kitchens",href:"/services/kitchens",image:"/inspiration/warm-kitchen-reference.jpg",line:"Practical cabinetry planned around everyday movement.",ref:true},
 {n:"03",name:"BIC Cupboards",href:"/services/bic-cupboards",image:"/inspiration/illuminated-wardrobe-reference.jpg",line:"Fitted storage that disappears into the architecture.",ref:true},
 {n:"04",name:"Ceilings",href:"/services/ceilings",image:"/projects/ceilings/recessed-lighting-01.jpeg",line:"Recesses, bulkheads and light that change the room."},
 {n:"05",name:"Custom Furniture",href:"/furniture",image:"/projects/furniture/upholstered-bed-01.jpeg",line:"Made-to-order pieces with a personal finish."},
];
export function RoomExplorer(){const[active,setActive]=useState(0);const r=rooms[active];return <section className="room-explorer"><div className="room-stage"><Image key={r.image} src={r.image} alt={r.ref?`${r.name} visual reference`:`Interior Works Co. ${r.name.toLowerCase()}`} fill sizes="55vw"/><div className="room-stage-shade"/><div className="room-caption"><small>{r.ref?"Visual reference · Pinterest":"Interior Works Co. · Supplied work"}</small><p>{r.line}</p></div><div className="room-number">{r.n}</div></div><div className="room-menu"><small>What we create</small><h2>One room.<br/><em>Every detail.</em></h2><div className="room-links">{rooms.map((x,i)=><Link key={x.name} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} className={active===i?"active":""} href={x.href}><span>{x.n}</span>{x.name}<b>↗</b></Link>)}</div></div></section>}
