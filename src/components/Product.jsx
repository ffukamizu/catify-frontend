import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { id, name, photo } = props;



    return (
        <ProductContainer>
            <Link to={`/products/${id}`}>
                <PhotoContainer>
                    <img
                        src={photo}
                        alt={id}></img>
                </PhotoContainer>
                <NameContainer>{name}</NameContainer>
            </Link>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    height: 600px;
    width: 400px;
    padding: 20px;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NameContainer = styled.div`
    background-color: black;
`;

const PhotoContainer = styled.div`
    height: 600px;
    background-color: blue;
`;