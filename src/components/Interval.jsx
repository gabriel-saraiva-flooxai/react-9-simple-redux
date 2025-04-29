import Card from './Card'
import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'
import { altNumMin, altNumMax } from '../store/actions/numeros'

function Interval(props) {
    
    const { min, max } = props;

    return (
        <Card title='Intervalo de Números' Red>
            <div className='Interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={ min }
                        onChange={e => props.AlterarMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={ max }
                        onChange={e => props.AlterarMax(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        AlterarMin(novoNum) {
            // Action Creator -> Action
            const action = altNumMin(novoNum)
            dispatch(action)
        },
        AlterarMax(novoNum) {
            // Action Creator -> Action
            const action = altNumMax(novoNum)
            dispatch(action)
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Interval);