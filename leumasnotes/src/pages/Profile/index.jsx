import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth'


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate(){
        const user ={
            name,
            email,
            password: newPassword,
            old_password: password
        }

        await updateProfile({user, avatarFile})
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="user image"
                        onChange={handleChangeAvatar} />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>


                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Current Password"
                    type="password"
                    icon={FiLock}
                    onChange = {e => setPassword(e.target.value)}
                />

                <Input
                    placeholder="New Password"
                    type="password"
                    icon={FiLock}
                    onChange = {e => setNewPassword(e.target.value)}
                />

                <Button 
                title="Save"
                onClick={handleUpdate} />
            </Form>

        </Container>
    );
}