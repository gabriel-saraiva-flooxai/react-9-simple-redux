import Card from './Card'
import React from 'react'
import { connect } from 'react-redux';

function Soma(props) {

    const { min, max } = props;

    return (
        <Card title='Soma dos Números' Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ max + min }</strong>
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

export default connect(mapStateToProps)(Soma);