import { Container, Links, Content } from './styles';

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"



export function Details() {

    return (
        <Container>
            <Header />

            <main>
                <Content>

                    <ButtonText title="Delete Note" />

                    <h1>
                        Introduction to React
                    </h1>

                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Blanditiis assumenda natus
                        commodi nobis in cum et accusamus dolorem
                        veniam delectus quia doloribus fuga fugit,
                        omnis cumque, quidem ipsa totam earum?
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Blanditiis assumenda natus
                        commodi nobis in cum et accusamus dolorem
                        veniam delectus quia doloribus fuga fugit,
                        omnis cumque, quidem ipsa totam earum?
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Blanditiis assumenda natus
                        commodi nobis in cum et accusamus dolorem
                        veniam delectus quia doloribus fuga fugit,
                        omnis cumque, quidem ipsa totam earum?
                    </p>

                    <Section title="Util Links">
                        <Links>
                            <li><a href="#">https://www.github.com/1leumas</a></li>
                            <li><a href="#">https://www.github.com/1leumas</a></li>
                        </Links>
                    </Section>

                    <Section title="Markers">
                        <Tag title="express"></Tag>
                        <Tag title="nodejs"></Tag>

                    </Section>


                    <Button title="Go Back" />
                </Content>
            </main>
        </Container>
    )
}