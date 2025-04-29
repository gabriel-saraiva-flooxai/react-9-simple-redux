import Card from './Card'
import './Interval.css'
import React from 'react'

export default function Interval(props) {
    return (
        <Card title='Intervalo de Números' Red>
            <div className='Interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} readOnly />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={10} readOnly />
                </span>
            </div>
        </Card>
    )
}