import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");
    const [markers, setMarkers] = useState([]);
    const [newMarker, setNewMarker] = useState("");

    function handleAddLink() {
        setLinks(prevLinks => [...prevLinks, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(index) {
        setLinks(prevLinks => prevLinks.filter((_, i) => i !== index));
    }

    function handleAddMarker() {
        setMarkers(prevMarkers => [...prevMarkers, newMarker]);
        setNewMarker("");
    }

    function handleRemoveMarker(index) {
        setMarkers(prevMarkers => prevMarkers.filter((_, i) => i !== index));
    }

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
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(index)}
                                />
                            ))
                        }
                        <NoteItem
                            isNew
                            placeholder="New Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Markers">
                        <div className='tags'>
                            {
                                markers.map((marker, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={marker}
                                        onClick={() => handleRemoveMarker(index)}
                                    />
                                ))
                            }
                            <NoteItem
                                isNew
                                placeholder="New Marker"
                                value={newMarker}
                                onChange={e => setNewMarker(e.target.value)}
                                onClick={handleAddMarker}
                            />
                        </div>
                    </Section>

                    <Button title="Save" />
                </Form>
            </main>
        </Container>
    );
}