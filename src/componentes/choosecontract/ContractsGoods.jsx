import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../../style/chosecontracts.css'

const ContrractsGoods = (props) => {


    // console.log('contrato selecionado', props.location.goods)

    if (props.location.goods === 'si') {
        return (
            <div>
                <Header />
                <div className="m-5">
                    <div className="m-5 col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 className=" col-sm-6">Contrato de Compraventa e Instalación</h4>
                                    <img src="https://img.icons8.com/ios/100/000000/sell-property--v1.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-around">
                        <Link className="col-sm-3 btn btn-outline-primary " to="/reviewcontracts">Anterior</Link>
                        <Link className="col-sm-3  btn btn-primary " to="/">Crear Contrato</Link>
                    </div>
                </div>
            </div >
        )
    }
    if (props.location.goods === 'no') {
        return (
            <div>
                <Header />
                <div className="m-5">
                    <div className="m-5 col-sm-10">
                        <div>
                            <h5 className="m-3">El contrato que debes utilizar es:</h5>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <div className="borde fondo col-sm-5">
                                <div className="row mt-5 mb-4 ml-5">
                                    <h4 className=" col-sm-6">Contrato de Compraventa</h4>
                                    <img src="https://img.icons8.com/ios/100/000000/home-automation.png" className=" col-sm-6 card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="m-5 d-flex justify-content-around">
                        <Link className="col-sm-3 btn btn-outline-primary " to="/reviewcontracts">Anterior</Link>
                        <Link className="col-sm-3  btn btn-primary " to="/">Crear Contrato</Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default ContrractsGoods;