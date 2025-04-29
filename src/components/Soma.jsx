import Card from './Card'
import React from 'react'

export default function Interval(props) {

    // const min = props.min
    // const max = props.max

    const { min, max } = props

    return (
        <Card title='Soma dos Números' Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ max + min }</strong>
                </span>
            </div>
        </Card>
    )
}