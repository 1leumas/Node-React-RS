import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';



export function SignUp() {
    return (

        <Container>
            <Background />
            
            <Form>
                <h1>Leumas Notes</h1>
                <p>App to save and manage your Links and Notes</p>

                <h2>Create an Account</h2>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />

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

                <Button title="Sign Up" />

                <Link to="/">
                    Back to Login
                </Link>

            </Form>
        </Container>
    );
}