import React from 'react'
import {ErrorText, IconContainer, InputContainer, InputText} from './styles'
import { Controller } from 'react-hook-form'

const Input = ({ lefticon, name, control, errorMessage, ...rest}) =>{
    return (
        <>
        <InputContainer>
        { lefticon ? (<IconContainer>{lefticon}</IconContainer>) : null}
            <Controller 
            name= {name}
            control={control}
            rules={{ required: true}}
            render={({ field }) =>  <InputText {...field}{...rest}/>}
            />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}

export { Input };
