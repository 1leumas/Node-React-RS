import { Container, Links } from './styles';

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"


export function Details() {

    return (
        <Container>
            <Header/>

            <Section title="Util Links">
                <Links>
                    <li><a href="@">https://www.github.com/1leumas</a></li>
                    <li><a href="@">https://www.github.com/1leumas</a></li>
                </Links>

            </Section>


            <Button title="Go Back" />
        </Container>
    )
}