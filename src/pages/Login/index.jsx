import {Column, Container, CriarText, EsqueciText, Row, SubTitle, Title, TitleLogin, Wrapper } from './styles'
import { Input } from '../../components/Input';
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para voce aprender com experts, dominar as principais tecnologias
                    e entrar mais rapido nas empresas mais desejadas.
                    </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faca seu Cadastro</TitleLogin>
                <SubTitle>Faca seu login e make the change._</SubTitle>
                <form>
                    <Input placeholder="E-mail" lefticon={<MdEmail/>}/>
                    <Input placeholder="Senha" type="password" lefticon={<MdLock/>} />
                    <Button title="Entrar" variant="secondary" onCLick={handleClickSignIn} type="button"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
            </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login }