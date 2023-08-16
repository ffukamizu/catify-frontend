import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postProducts } from '../services/apiConfig';
import useAuth from '../services/Auth';

import Header from '../components/Header';

export default function InsertPage() {
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { id, token } = useAuth();
    const navigate = useNavigate();

    function insertProduct(e) {
        e.preventDefault();

        const product = {
            photo: photo,
            name: name,
            description: description,
            user_id: id,
        };

        function success() {
            navigate('/marketplace');
        }

        function failure() {
            setPhoto('');
            setName('');
            setDescription('');
        }

        console.log(product);

        postProducts(product, success, failure, token);
    }

    return (
        <PageBody>
            <Header />
            <ContentContainer onSubmit={insertProduct}>
                <Field
                    type="text"
                    placeholder="photo"
                    required
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}></Field>
                <Field
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}></Field>
                <Field
                    type="text"
                    placeholder="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}></Field>
                <Submit type="submit">Submit</Submit>
                <Return
                    type="reset"
                    as={Link}
                    to="/marketplace">
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
