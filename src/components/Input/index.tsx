import React from 'react'
import {ErrorText, IconContainer, InputContainer, InputText} from './styles'
import { Controller } from 'react-hook-form'
import { IInput } from './types'

const Input = ({ lefticon, name, control, errorMessage, ...rest}: IInput) =>{
    return (
        <>
        <InputContainer>
        { lefticon ? (<IconContainer>{lefticon}</IconContainer>) : null}
            <Controller 
            name= {name}
            control={control}
            rules={{ required: true}}
            render={({ field: {value, onChange} }) =>  <InputText value={value} 
            onChange={onChange}{...rest}/>}
            />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        </>
    )
}


export { Input };
