import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function userSignIn(e) {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        axios
            .post('https:-----------------------signin---------------------------', user)
            .then(signInSuccess)
            .catch((promise) => {
                alert(`Error: ${promise.response.data.message}`);
                setEmail('');
                setPassword('');
            });
    }

    function signInSuccess() {
        navigate('/marketplace');
    }

    return (
        <PageBody>
            <DiagonalBackdrop></DiagonalBackdrop>
            <ContentContainer onSubmit={userSignIn}>
                <Field
                    type="text"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></Field>
                <Field
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></Field>
                <SignInButton>Sign In</SignInButton>
                <SignUpButton
                    as={Link}
                    to="/signup">
                    Sign Up
                </SignUpButton>
            </ContentContainer>
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const ContentContainer = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Field = styled.input`
    height: 45px;
    width: 300px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #999999;
    box-sizing: border-box;
    background: #eeeeee;
    border-color: #eeeeee;
    border-style: solid;
    border-radius: 50px;
    padding: 15px;
    margin-bottom: 10px;
    ::placeholder {
        color: #999999;
    }
    :active {
        border-style: solid;
        border-color: white;
    }
`;

const SignInButton = styled.button`
    height: 45px;
    width: 300px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
    box-sizing: border-box;
    background: #137a7f;
    border-color: #137a7f;
    border-style: solid;
    border-radius: 50px;
    padding: 15px;
    margin-bottom: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpButton = styled.button`
    height: 45px;
    width: 300px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
    box-sizing: border-box;
    background: #e12885;
    border-color: #e12885;
    border-style: solid;
    border-radius: 50px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }
`;

const DiagonalBackdrop = styled.div`
    background: linear-gradient(130deg, #33c2bb, #e12885);
    height: 100vh;
    width: 100vw;
    position: fixed;
    transform-origin: top left;
    transform: skewY(-15deg);
    z-index: -1;
`;
