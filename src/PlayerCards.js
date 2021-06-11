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
                            <div className="col-5">
                                <p className="card-text text-body">{this.props.playerName}</p>
                            </div>
                            <div className="col-3">
                                <p className="card-text text-body cust-card-text-right">{this.props.posDes.toLowerCase()} </p>
                            </div>
                            <div className="col-2">
                                <p className="card-text text-body cust-card-text-right">{this.props.primPos}</p>
                            </div>
                            <div className="col-2">
                                <p className="card-text text-body cust-card-text-right">#{this.props.jerseyNumber}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <p className="card-text text-body">{}</p>
                            </div>
                            <div className="col-2">
                                <p className="card-text text-body cust-card-text-right">{}</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        );
    }
}

export default PlayerCards