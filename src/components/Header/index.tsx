import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

import { Link } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';


const Header = () => {

    const {user} = useAuth();
    return (
    <Wrapper>
        <Container>
            <Row>
                <Link to="/">
                <img src={logo} alt="Logo da DIO"/>
                </Link>
                {user.id ? (<>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ): null}
            </Row>
            <Row>
                {user.id ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                ): (
                    <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
    )
}

export { Header }
