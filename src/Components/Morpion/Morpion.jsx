import React from 'react'
import './Morpion.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

const Morpion = () => {
  return (
    <div className='container'>
        <h1 className="title">
            Morpion en <span>REACT</span>
        </h1>
        <div className="board">
        <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
        <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
        <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
        </div>
    </div>
        <button className="reset">
            Recommencer
        </button>
    </div>
  )
}

export default Morpion