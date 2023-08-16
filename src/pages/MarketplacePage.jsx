import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/apiConfig';

import Header from '../components/Header';
import Product from '../components/Product';

export default function MarketplacePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        function success(data) {
            setProducts(data);
        }
        
        getProducts(success);
    }, []);
    
    return (
        <PageBody>
            <Header />
            <ContentContainer>
                {products.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        photo={item.photo}
                    />
                ))}
            </ContentContainer>
            <Separator></Separator>
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
    gap: 30px;
`;

const Separator = styled.div`
    height: 30px;
`;
