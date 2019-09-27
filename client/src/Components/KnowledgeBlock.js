import React, { Component } from 'react';



class KnowledgeBlock extends Component {
    render() {
        return (
            <center><img src={this.props.src} width="50px" height="50px"/>
                <h4>{this.props.header}</h4>
                <p>
                   {this.props.text}
				</p>
            </center>
        )
    }
}

export default KnowledgeBlock;


