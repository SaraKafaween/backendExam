import React, { Component } from 'react'

class Watch.model extends Component {
    render() {
        return (
           <p> title : {this.props.title</p>
           <p>description : {this.props.description}</p>
           <p>price : {this.props.toUSD} </p>
           <p>image : {this.props.image_url} </p>

        )
    }
}

export default Watch.model
