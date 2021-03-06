//PlayerCards
import React from 'react'

class PlayerCards extends React.Component{
    constructor(props){
        super(props);     
    }

    render() {
        return(
            <div className="container">
                <div className="card" onClick={this.props.onClick}>    
                    <div className="card-body">    
                        <div className="row">
                            <div className="col">
                                <h6 className="card-text text-body">#{this.props.jerseyNumber} </h6>
                            </div>                            
                            <div className="col">
                                <h6 className="card-text text-body">{this.props.playerName}</h6>
                            </div>
                            <div className="col">
                                <p className="card-text text-body cust-card-text-right">{this.props.primPos}</p>
                            </div>
                            <div className="col">
                                <p className="card-text text-body cust-card-text-right">Throws: {this.props.throws}</p>
                            </div>
                            <div className="col">
                                <p className="card-text text-body cust-card-text-right">Bats: {this.props.bats}</p>
                            </div>
                            <div className="col">
                                <p className="card-text text-body cust-card-text-right">Height: {this.props.height_feet}' {this.props.height_inches}"</p>
                            </div>                                                            
                        </div>
                        </div>
                    </div>
                </div> 
        );
    }
}

export default PlayerCards