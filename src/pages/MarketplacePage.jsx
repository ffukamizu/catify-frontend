import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function MarketplacePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}/products`)
            .then((answer) => {
                setProducts(answer.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <PageBody>
            <Header />
            <ContentContainer>
                {products.map((item) => {
                    <Product
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        photo={item.photo}
                    />;
                })}
            </ContentContainer>
            <Footer />
        </PageBody>
    );
}

const PageBody = styled.div`
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
