import React from 'react'
import {IconContainer, InputContainer, InputText} from './styles'

const Input = ({ lefticon, name, ...rest}) =>{
    return (
        <InputContainer>
        { lefticon ? (<IconContainer>{lefticon}</IconContainer>) : null}
        <InputText {...rest}/>
        </InputContainer>
    )
}

export { Input };
