import React, {Component} from 'react';
import styled from 'styled-components'

const CustomSeparator = styled.div`
    background-color: black;
    height: 100px;
    display: flex;
    justify-content: center;
`
const StyleP = styled.p`
    color: white;
    margin-left: 10px;
    margin-top: 40px;
`

class FooterArea extends Component {
    render(){
        return(
            <CustomSeparator>
                <StyleP>{this.props.text}</StyleP>
            </CustomSeparator>
        )
    }
}

export default FooterArea;