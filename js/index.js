"use strict"



// cuando click en menu --> abrir desplegable
// cuando click en cruz --> cerrar desplegable

const Menu = document.querySelector( `.Header-menu` )
const MenuDesplegable = document.querySelector( `.Header-desplegable` )
const Span = document.querySelector( `.Header-span` )

console.log ( Menu )
console.log ( MenuDesplegable )
console.log ( Span )

Menu.addEventListener( `click` , ()=>{
    MenuDesplegable.classList.add( `isVisible` )
})

Span.addEventListener( `click` , ()=>{
    MenuDesplegable.classList.remove( `isVisible` )
})