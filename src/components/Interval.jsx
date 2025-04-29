import Card from './Card'
import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'

function Interval(props) {
    
    const { min, max } = props;

    return (
        <Card title='Intervalo de Números' Red>
            <div className='Interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={ min } readOnly />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={ max } readOnly />
                </span>
            </div>
        </Card>
    )
}


function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

export default connect(mapStateToProps)(Interval);