'use client';

import Logo from "@/common/uikit/logo";
import Banner from "@/components/banner";
import styled from 'styled-components';

const LayoutContainer = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
`

const ChildContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: auto;
    padding: 50px 50px 20px;
`

const LogoContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: auto;
`;

const SurveyLayout = ({
    children
    }: Readonly<{
        children: React.ReactNode;
    }>) => {
        return (
            <LayoutContainer>
                <ChildContainer>
                    {children}
                    <LogoContainer>
                        <div>Powered By</div>
                    <Logo />
                </LogoContainer>
                </ChildContainer>

                <Banner/>
            </LayoutContainer>
        );
}

export default SurveyLayout;