import React from 'react'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/footer'
import Carts from '../components/cart/Carts'

function Cart() {
  return (
    <div>
        <Header/>
        <Carts/>
        <Footer/>
    </div>
  )
}

export default Cart