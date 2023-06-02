import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>LeumasNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="All" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>

            <Search>
                <Input placeholder = "Search by Title" icon={FiSearch}/>
            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus/>
                    Create Note
            </NewNote>
        </Container>

    );
}