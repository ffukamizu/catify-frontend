import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PortfolioPage() {
    return (
        <PageBody>
            <Header />
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
