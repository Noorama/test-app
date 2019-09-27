import React, {Component} from 'react';
import styled from 'styled-components'

const CustomSeparator = styled.div`
    background-color: #8490ff;
    height: 150px;
    display: flex;
    justify-content: center;
`
const G2 = styled.h2`
    color: white;
    margin-left: 10px;
    padding-top: 50px;
`

class Separator extends Component {
    render(){
        return(
            <CustomSeparator>
                <G2>{this.props.text}</G2>
            </CustomSeparator>
        )
    }
}

export default Separator;