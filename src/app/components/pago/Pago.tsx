"use client"
import React from 'react'
import Select from 'react-select'
const options = [
  { value: 'PagoQR', label: 'PagoQR' },
  { value: 'tarjeta', label: 'Tarjeta de debito o credito' },
  { value: 'cheque', label: 'Cheque' },
  { value: 'efectivo', label: 'Efectivo' }
]
const Pago = ()=>{
  return (
    <div>
        <h1>Confirmacion y Pago</h1>
        <hr/>
        <p>
          Para confirmar la reserva necesitas completar la informacion de paga pendiente
        </p>
        <h1>Saldo a pagar</h1>
        <div className='w-64'>
        <div className="input-group mb-3">
           <div className="input-group-prepend">
           <span className="input-group-text">$</span>
          </div>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
        </div>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Pagar total
          </label>
        </div>

        <h1>Metodo de pago</h1>
        <Select options={options} placeholder="Seleccione un metodo de pago" />
        <div className="form-check mt-5">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Confirmar sin pago
          </label>
        </div>
        <div className='mt-5'>
            <button className='btn btn-outline-dark'>Cancelar</button>
            <button className='btn btn-outline-primary disabled ml-1'>Guardar</button>
        </div>
    </div>
  )
}
export default Pago;