'use client';

import Logo from "@/common/uikit/logo";
import { Text } from "@/common/uikit/text";
import Banner from "@/components/banner";
import styled from 'styled-components';
import i18n from '@/common/utils/i18n';

const LayoutContainer = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    justify-content: space-between;
`

const ChildContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: auto;
    min-width: 700px;
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
                        <Text value={i18n.POWERED_BY} size={10}/>
                    <Logo />
                </LogoContainer>
                </ChildContainer>

                <Banner/>
            </LayoutContainer>
        );
}

export default SurveyLayout;