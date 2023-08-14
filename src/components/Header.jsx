import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Section>
            <Container>
                <LogoContainer>
                    <Title>Catify</Title>
                    <SubTitle>The all-feline marketplace!</SubTitle>
                </LogoContainer>
                <MenuContainer>
                    <NavButton
                        as={Link}
                        to="/marketplace">
                        Marketplace
                    </NavButton>
                    <NavButton
                        as={Link}
                        to="/portfolio">
                        Portfolio
                    </NavButton>
                    <NavButton
                        as={Link}
                        to="/insert">
                        List a product
                    </NavButton>
                </MenuContainer>
            </Container>
        </Section>
    );
}

const Section = styled.header`
    height: 160px;
    width: 100%;
    background-color: #86cecb;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    z-index: 5;
`;

const Container = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
`;

const Title = styled.h1`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 25px;
    color: white;
    margin-top: 10px;
`;

const SubTitle = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: white;
    margin-left: 5px;
`;

const MenuContainer = styled.nav`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 10px;
`;

const NavButton = styled.button`
    height: 60px;
    width: 110px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #137a7f;
    box-sizing: border-box;
    background: #ffffff;
    border-color: #ffffff;
    border-style: solid;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px #0000003e;
    text-decoration: none;
`;
