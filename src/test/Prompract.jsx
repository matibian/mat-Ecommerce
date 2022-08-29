import React, { useState, useEffect } from 'react';

export default function Prompract() {
    const [obj, setobj] = useState(true);

    let array = new Promise((res, rej) => {
        setTimeout(() => {
            res([{id:"1", nombre:"matias", apellido:"bianchi"},{id:"2", nombre:"Maria Jose", apellido:"Luchino"}])
            rej("ERROR")
        }, 3000)
    })


    array.then((res) => {
        console.log(res)
    })
        
    return (
        <div>Prompract</div>
    )
}
