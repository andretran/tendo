import Image from 'next/image';
import styled from 'styled-components';
import SurveyBanner from '@/assets/surveyBanner.jpg';

const StyledBannerContainer = styled.aside`
    height: 100%;
    width: 1300px;
    position: relative;
`;

const Banner = () =>  
    <StyledBannerContainer>
        <Image src={SurveyBanner} alt="" layout="fill"/>
    </StyledBannerContainer>
export default Banner;