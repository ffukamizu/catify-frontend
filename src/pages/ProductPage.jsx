import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductPage() {
    const { id } = useParams();

    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tutor, setTutor] = useState('');

    useEffect(() => {
        axios
            .get(`https------------/${id}/`)
            .then((answer) => {
                setPhoto(answer.data.photo);
                setName(answer.data.name);
                setDescription(answer.data.description);
                setTutor(answer.data.tutor);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <PageBody>
            <Header />
            <ProductContainer>
                <PhotoContainer>
                    <img
                        src={photo}
                        alt={id}></img>
                </PhotoContainer>
                <NameContainer>{name}</NameContainer>
                <DescriptionContainer>{description}</DescriptionContainer>
                <TutorContainer>
                    <p>{tutor.name}</p>
                    <p>{tutor.phone}</p>
                </TutorContainer>
            </ProductContainer>
            <Footer />
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

const ProductContainer = styled.div`
    height: 600px;
    width: 400px;
    padding: 20px;
    background-color: red;
`;

const NameContainer = styled.div`
    background-color: black;
`;

const PhotoContainer = styled.div`
    background-color: blue;
`;

const DescriptionContainer = styled.div`
    background-color: green;
`;

const TutorContainer = styled.div`
    background-color: yellowgreen;
`;
