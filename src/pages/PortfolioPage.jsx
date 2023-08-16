import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useAuth from '../services/Auth.jsx';
import { getPortifolio } from '../services/apiConfig.js';

import Header from '../components/Header';
import Product from '../components/Product';

export default function PortfolioPage() {
    const [products, setProducts] = useState([]);
    const { id } = useAuth();

    useEffect(() => {
        function success(data) {
            setProducts(data);

            if (!data) setProducts([]);
        }

        getPortifolio(id, success);
    }, [id]);

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
`;
