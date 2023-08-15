import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useAuth from '../services/Auth';
import { getPortifolio } from '../services/apiConfig';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function PortfolioPage() {
    const [products, setProducts] = useState([]);
    const auth = useAuth();
    console.log(auth);

    useEffect(() => {
        function success(data) {
            setProducts(data);

            if (!data) setProducts([]);
        }

        getPortifolio(auth.id, success);
    }, [auth]);

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
`;
