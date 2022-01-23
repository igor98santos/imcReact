/*Aqui eu estou usando o use state por conta da fuction*/
import React,{useState} from "react";
import './Imc.css'

const fpeso=(p,sp)=>{
    return(
        <div>
            <label>
                Peso
                <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}} />
            </label>
        </div>
    )
}
 const faltura=(a,sa)=>{
     return(
         <div>
             <label >
                 Altura
                 <input type="text"  value={a} onChange={(e)=>{sa(e.target.value)}}/>
             </label>
         </div>
     )
 } 
 const fcalcular=(p,a,sr)=>{
        const calc=()=>{
           sr(p/(a*a))
        }
        return(
            <div>
                <button onClick={calc}>
                    Calcular
                </button>
            </div>
        )
 }
 const fresultado=(r)=>{
     return(
        <div>
            <p>Resultado:{r.toFixed(2)}</p>
        </div>
     )
 }
export default  function Imc(){
    const [peso,setPeso]=useState(0)
    const [altura,setAltura]=useState(0)
    const [resultado,setResultado]=useState(0)
    return(
        <>
            {fpeso(peso,setPeso)}
            {faltura(altura,setAltura)}
            {fcalcular(peso,altura,setResultado)}
            {fresultado(resultado)}
        </>
    )
}
