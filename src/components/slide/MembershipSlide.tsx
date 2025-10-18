import styled from "styled-components";

interface MembershipSlideProps {
    title: string;
    description: string;
    imageUrl: string;
}

const StyledSlide = styled.a`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 450px;

    @media (min-width: 1024px) {
        height: 485px;
    }
`;

const BackgroundPhoto = styled.div<{ imageUrl: string }>`
    width: 100%;
    height: 100%;
    background: url(${props => props.imageUrl}) no-repeat center/cover;
`;

const InfoBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(17, 17, 17, 0.8);
`;

const Title = styled.b`
    color: var(--white-color);
`;

const Description = styled.p`
    margin-top: 10px;
    color: var(--white-color);
`;

const MembershipSlide = ({
    title,
    description,
    imageUrl,
}: MembershipSlideProps) => {
    return (
        <StyledSlide href="#" className="membership_slide">
            <BackgroundPhoto className="bg_photo" imageUrl={imageUrl} />
            <InfoBox>
                <Title className="card_title">{title}</Title>
                <Description className="paragraph">{description}</Description>
            </InfoBox>
        </StyledSlide>
    );
};

export default MembershipSlide;
