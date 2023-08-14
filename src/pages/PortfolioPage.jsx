import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function PortfolioPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`https -------------listing-/${id}--------------`)
            .then((answer) => {
                setProducts(answer.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <PageBody>
            <Header />
            <ContentContainer>
                {products.map((item) => {
                    <Product
                        key={item.id}
                        name={item.name}
                        photo={item.photo}
                        description={item.description}
                        tutor={item.tutor}
                    />;
                })}
            </ContentContainer>
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

const ContentContainer = styled.div`
    height: 100%;
    width: 50%;
    margin-top: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: red;
`;