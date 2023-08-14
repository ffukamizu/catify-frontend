import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { id, name, photo, description } = props;

    return (
        <ProductContainer>
            <Link to={`/product/${id}`}>
                <PhotoContainer>
                    <img
                        src={photo}
                        alt={id}></img>
                </PhotoContainer>
                <NameContainer>{name}</NameContainer>
                <DescriptionContainer>{description}</DescriptionContainer>
            </Link>
        </ProductContainer>
    );
}

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