import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import MembershipSlide from "../slide/MembershipSlide";
import styled from "styled-components";
import "./MembershipSlider.scss";

interface MembershipSliderProps {
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

const memberShipData = [
    {
        id: 1,
        title: "맴버 리워드",
        description: "운동과 쇼핑을 위한 특별한 혜택",
        imageUrl: "img/membership_section_photo_1.png",
    },
    {
        id: 2,
        title: "스포츠 & 웰니스 앱",
        description: "언제 어디서든 운동하기",
        imageUrl: "img/membership_section_photo_2.png",
    },
    {
        id: 3,
        title: "SNKRS",
        description: "최고의 스니커즈 커뮤니티",
        imageUrl: "img/membership_section_photo_3.png",
    },
    {
        id: 4,
        title: "대학생 멤버 혜택",
        description: "대학생 할인 프로그램",
        imageUrl: "img/membership_section_photo_4.png",
    },
];

const StyledSwiper = styled(Swiper)`
    margin-top: 40px;
    padding-bottom: 45px;
    overflow: visible;

    @media (min-width: 768px) {
        margin-top: 50px;
    }

    @media (min-width: 1440px) {
        padding-bottom: 0;
    }
`;

const MembershipSlider = ({ ...rest }: MembershipSliderProps) => {
    return (
        <StyledSwiper
            className="membership_slider"
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView="auto"
            loop={true}
            pagination={{ clickable: true }}
            centeredSlides={false}
            breakpoints={{
                768: {
                    spaceBetween: 20,
                },
            }}
            {...rest}
        >
            {memberShipData.map(card => (
                <SwiperSlide key={card.id}>
                    <MembershipSlide
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

export default MembershipSlider;
