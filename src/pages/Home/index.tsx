import {Container, TextContent, Title, TitleHightLight } from './styles'
import  banner from '../../assets/banner.png'
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    
    return(<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHightLight>
                    Implemente
                    <br />
                    </TitleHightLight>
                    o teu futuro global agora!
                    </Title>
                    <TextContent>
                        domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Comecar agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt="Imagem Principal"/>
            </div>
        </Container>
        </>
    )
}

export { Home }