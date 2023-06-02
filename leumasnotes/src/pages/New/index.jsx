import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';


export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <Link to="/">Return</Link>
                    </header>

                    <Input placeholder="Title" />
                    <Textarea placeholder="Comments" />

                    <Section title="Useful Links">
                        <NoteItem value="https://github.com"/>
                        <NoteItem isNew placeholder="New Link"/>
                    </Section>

                    <Section title="Markers">
                        <div className='tags'>
                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="New Tag"/>
                        </div>
                    </Section>

                    <Button title="Save"/>
                </Form>
            </main>
        </Container>
    );
}