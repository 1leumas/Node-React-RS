import { Container, Links } from './styles';

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"



export function Details() {

    return (
        <Container>
            <Header />

            <Section title="Util Links">
                <Links>
                    <li><a href="#">https://www.github.com/1leumas</a></li>
                    <li><a href="#">https://www.github.com/1leumas</a></li>
                </Links>
            </Section>

            <Section title="Markers">
                <Tag title = "express"></Tag>
                <Tag title = "nodejs"></Tag>

            </Section>


            <Button title="Go Back" />
        </Container>
    )
}