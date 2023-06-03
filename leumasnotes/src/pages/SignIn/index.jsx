import { Container, Form, Background } from './styles'
import { FiMail, FiLock} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';


export function  SignIn() {

    const data = useAuth();
    console.log("context : ", data)
    return (
        <Container>
            <Form>
                <h1>Leumas Notes</h1>
                <p>App to save and manage your Links and Notes</p>

                <h2>Login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Password"
                    type="Password"
                    icon={FiLock}
                />

                <Button title="Login"/>

                <Link to="/register">
                    Create an Account
                </Link>

            </Form>

            <Background/>

        </Container>
    );
}