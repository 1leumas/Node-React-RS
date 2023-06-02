import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'



export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <a href="/">Return</a>
                    </header>

                    <Input placeholder="Title" />
                    <Textarea placeholder="Comments" />

                    <Section title="Useful Links">
                        <NoteItem value="https://github.com"/>
                        <NoteItem value="" isNew placeholder="New Link"/>
                    </Section>
                </Form>
            </main>
        </Container>
    );
}