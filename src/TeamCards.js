//TeamCards

import React from 'react'

class TeamCards extends React.Component{
    constructor(props){
        super(props);     
    }
    render() {
        return(
            <div className="card mb-1" onClick={this.props.onClick}>    
                <div className="card-body">    
                    {/* <div className="row"> */}
                    <div className="card-title">{this.props.teamName}</div>
                        <div className="row">
                            <div className="col">
                                <ul className ="list-group list-group-flush">
                                    <li className="list-group-item">{this.props.venueName}</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className ="list-group list-group-flush">
                                    <li className="list-group-item">{this.props.league}</li>
                                </ul>
                            </div>
                        </div>
                        {/* // <li className="list-group-item"></li> */}
                        {/* <div className="col-2">
                            <p className="card-text text-body name">{this.props.name}</p>
                        </div>
                        <div className="col-2">
                            <p className="text-body cust-card-text-right">{this.props.teamName}</p> */}
                        {/* </div> */}
                        {/* </div> */}
                        {/* // <div className="row">                                
                        //     <div className = "col-2">
                        //         <p className="card-text text-body">{this.props.venueName}</p>
                        //     </div>
                        //     <div className = "col-2">
                        //         <p className="card-text text-body cust-card-text-right">{this.props.league}</p>
                        //     </div>
                        // </div> */}
            
                    </div>
                </div>   
        );
    }
}

export default TeamCards