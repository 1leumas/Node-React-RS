import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';


export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/1leumas.png"
                    alt="user photo"
                />

                <div>
                    <span>Welcome,</span>
                    <strong>Samuel Machado</strong>
                </div>

            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
}