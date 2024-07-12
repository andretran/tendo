import Image from 'next/image';
import styled from 'styled-components';
import SurveyBanner from '@/assets/surveyBanner.jpg';

const StyledBannerContainer = styled.aside`
    height: 100%;
    width: 50%;
    position: relative;
`;

const Banner = () =>  
    <StyledBannerContainer>
        <Image src={SurveyBanner} alt="" layout="fill" objectFit="cover"/>
    </StyledBannerContainer>
export default Banner;