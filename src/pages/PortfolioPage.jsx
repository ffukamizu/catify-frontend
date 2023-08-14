import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUserContext } from '../components/useUseContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function PortfolioPage() {
    const [products, setProducts] = useState([]);
    const { userData } = useUserContext();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}/${userData.id}/list`)
            .then((promise) => {
                setProducts(promise.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userData.id]);

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
