import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { id, name, photo } = props;

    console.log(props);

    return (
        <ProductContainer>
            <Link to={`/products/${id}`}>
                <PhotoContainer>
                    <img
                        src={photo}
                        alt={id}
                    />
                </PhotoContainer>
                <NameContainer>{name}</NameContainer>
            </Link>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    height: 350px;
    width: 300px;
    padding: 20px;
    background-color: #f3f3f3;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }

    a {
        width: 100%;
        text-decoration: none;
        color: inherit;
    }
`;

const NameContainer = styled.div`
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
`;

const PhotoContainer = styled.div`
    height: 300px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    overflow: hidden;

    img {
        max-height: 100%;
        max-width: 100%;
    }
`;
