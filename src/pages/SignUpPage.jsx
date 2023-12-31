import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../services/apiConfig';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    function userSignUp(e) {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
            cpf: cpf,
            phone: phone,
        };

        function signUpSuccess() {
            navigate('/');
        }

        function signUpFailure() {
            setEmail('');
            setPassword('');
            setCpf('');
            setPhone('');
        }

        postSignUp(user, signUpSuccess, signUpFailure);
    }

    return (
        <PageBody>
            <DiagonalBackdrop></DiagonalBackdrop>
            <ContentContainer onSubmit={userSignUp}>
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
                <Field
                    type="number"
                    placeholder="CPF"
                    required
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}></Field>
                <Field
                    type="number"
                    placeholder="telephone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}></Field>
                <Submit type="submit">Submit</Submit>
                <Return
                    type="reset"
                    as={Link}
                    to="/">
                    Return
                </Return>
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
    box-shadow: 0px 5px 10px #0000003e;
    ::placeholder {
        color: #999999;
    }
    :active {
        border-style: solid;
        border-color: white;
    }
`;

const Submit = styled.button`
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
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px #0000003e;
`;

const Return = styled.button`
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
    margin-top: 65px;
    text-decoration: none;
    box-shadow: 0px 5px 10px #0000003e;
`;

const DiagonalBackdrop = styled.div`
    background: linear-gradient(260deg, #33c2bb, #e12885);
    height: 100vh;
    width: 100vw;
    position: fixed;
    transform-origin: top left;
    transform: skewY(-15deg);
    z-index: -1;
`;
