import Card from './Card'
import React from 'react'

export default function Interval(props) {

    // const min = props.min
    // const max = props.max

    const { min, max } = props
    const x = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title='Sorteio de um Números' Purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ x }</strong>
                </span>
            </div>
        </Card>
    )
}