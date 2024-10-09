import {Column, Container, CriarText, EsqueciText, Row, SubTitle, Title, TitleLogin, Wrapper } from './styles'
import { Input } from '../../components/Input';
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';

const schema = yup
.object({
    email: yup.string().email('email nao e valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
}).required()

const Login = () => {

    const navigate = useNavigate();
    const {
            control,
            handleSubmit,
            formState: { errors},
        } = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',
        });

        const onSubmit = async formData => {
            try {
                const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
                if(data.length === 1){
                    navigate('/feed')
                } else {
                    alert('Email ou senha invalido')
                }
            } catch {
                alert('Houver um erro, tente novamente')
                
            }
        };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" lefticon={<MdEmail/>}/>
                    <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" lefticon={<MdLock/>} />
                    <Button title="Entrar" variant="secondary" type="submit"/>
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