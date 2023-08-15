import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/apiConfig';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductPage() {
    const { id } = useParams();
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        function success(answer) {
            setPhoto(answer.photo);
            setName(answer.name);
            setDescription(answer.description);
            setEmail(answer.email);
            setPhone(answer.phone);
        }

        getProductById(id, success);
    }, [id]);

    return (
        <PageBody>
            <Header />
            <ProductContainer>
                <PhotoContainer>
                    <img
                        src={photo}
                        alt={id}
                    />
                </PhotoContainer>
                <DetailsContainer>
                    <NameContainer>{name}</NameContainer>
                    <DescriptionContainer>{description}</DescriptionContainer>
                    <TutorContainer>
                        <p>For business inquiries:</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </TutorContainer>
                </DetailsContainer>
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
    background-color: #f0f0f0;
`;

const ProductContainer = styled.div`
    height: 600px;
    width: 400px;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const PhotoContainer = styled.div`
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 2;
`;

const NameContainer = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const DescriptionContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const TutorContainer = styled.div`
    p {
        margin: 0;
    }
`;
