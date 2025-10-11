import TitleBox from "../../components/TitleBox";
import "./_Home.scss";

const Home = () => {
    return (
        <main>
            <section className="intro_section">
                <div className="container">
                    <h2 className="sr_only">visual</h2>
                    <img
                        src="/nike/img/intro_section_shoes.png"
                        alt="nike shoes"
                        className="shoes_img"
                    />
                    <span className="nike">NIKE</span>
                    <div className="just_do_it_box">
                        <img
                            src="/nike/img/logo.png"
                            alt="나이키 로고"
                            className="logo"
                        />
                        <div>
                            <p className="just_do_it">JUST DO IT.</p>
                            <p className="a_legacy_of_action">
                                A Legacy Of Action.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="iconic_section">
                <div className="container">
                    {/* <div className="title_box">
                        <h2 className="title">Always Iconic</h2>
                        <p className="paragraph">
                            모든 영감의 시작. 스타일의 '근본'이 되는 아이코닉
                            컬렉션.
                            <br className="hide_on_mobile" />
                            새로운 트렌드는 결국 클래식에서 온다. 오리지널을
                            신으세요.
                        </p>
                        <span className="line"></span>
                        <a href="#">
                            MORE
                            <img src="#" alt="arrow" />
                        </a>
                    </div> */}
                    <TitleBox
                        title="Always Iconic"
                        subtitle1="모든 영감의 시작. 스타일의 '근본'이 되는 아이코닉 컬렉션."
                        subtitle2="새로운 트렌드는 결국 클래식에서 온다. 오리지널을 신으세요."
                        color="white"
                    />
                    <div className="slider">
                        <div className="slider_wrapper">
                            <div className="slide">
                                <div className="bg_nike_logo"></div>
                                <div className="bg_shoes"></div>
                                <div className="info_box">
                                    <b>코르테즈</b>
                                    <p>트랙을 넘어 스트리트로, 영원한 클래식</p>
                                    <a href="#">
                                        SHOP NOW
                                        <img src="#" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="brand_section">
                <div className="container">
                    <h2 className="sr_only">brand</h2>
                    <div className="img_text_box">
                        <div className="bg_red_shoes"></div>
                        <div className="text_box">
                            <h3>Just Do It. 의 탄생</h3>
                            <p className="paragraph">
                                단 세 단어였습니다.
                                <br className="hide_on_mobile" />
                                'Just Do It.' 그저 해라.
                                <br className="hide_on_mobile" />
                                1988년, 나이키는 이 슬로건으로 세상에 도전장을
                                내밀었습니다.
                            </p>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="img_text_box">
                        <div className="text_box">
                            <h3>Innovation in Motion</h3>
                            <p className="paragraph">
                                나이키는 신발을 디자인하지 않습니다.
                                <br className="hide_on_mobile" />
                                움직임을 설계합니다.
                                <br className="hide_on_mobile" />
                                우리는 당신의 발걸음 하나하나에 과학을
                                담아냅니다.
                            </p>
                            <span className="line"></span>
                        </div>
                        <div className="img_box">
                            <div className="bg_yellow_shoes"></div>
                            <div className="bg_gray_shoes"></div>
                        </div>
                    </div>
                    <div className="img_text_box">
                        <div className="bg_red_gold_shoes"></div>
                        <div className="text_box">
                            <h3>Beyond the Game</h3>
                            <p className="paragraph">
                                나이키는 당신의 움직임을 응원하는 것을 넘어,
                                <br className="hide_on_mobile" />
                                당신이 속한 커뮤니티와 사회에 긍정적인 메시지를
                                던집니다. <br className="hide_on_mobile" />
                                당신이 나이키를 선택하는 것은 더 나은 세상을
                                만드는 데 동참하는 것입니다.
                            </p>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="img_text_box">
                        <div className="text_box">
                            <h3>Moment of Greatness</h3>
                            <p className="paragraph">
                                우리는 승리의 순간을 함께 기념하고, 실패의
                                아픔을 함께 나누며
                                <br className="hide_on_mobile" />
                                다음 도전을 준비합니다. 당신이 땀을 흘리는 모든
                                순간, 당신이 <br className="hide_on_mobile" />
                                꿈을 꾸는 모든 순간, 나이키는 언제나 당신과
                                함께합니다.
                            </p>
                            <span className="line"></span>
                        </div>
                        <div className="bg_blue_shoes"></div>
                    </div>
                </div>
            </section>
            <section className="knight_section">
                <div className="container">
                    <div className="bg_knight_photo"></div>
                    <div className="text_box">
                        <h2>
                            <span>Phil</span>Knight
                        </h2>
                        <p className="paragraph">
                            나이키는 단순한 신발 회사가 아닙니다. 그것은 한 명의
                            사업가와 한 명의 코치가 함께 꿈꾼 이상의 결과입니다.
                            당신이 나이키 신발을 신는 것은 그들의 꿈과 집념을
                            함께 나누는 것입니다.
                        </p>
                        <a href="#">
                            READ MORE
                            <img src="" alt="arrow" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="legend_section">
                <div className="container">
                    <h2>전설을 신다</h2>
                    <p className="paragraph">
                        나이키 러닝 DNA 에 혁신이 더해진 새로운 러닝 컬렉션
                        <br className="hide_on_mobile" />
                        개인의 한계를 넘어, 모든 레이스를 승리로 이끌 강력한
                        추진력.
                        <br className="hide_on_mobile" />매 발걸음에 최적화된
                        쿠셔닝과 가벼움으로 새로운 기록에 도전하세요.
                    </p>
                    <a href="#">
                        READ MORE
                        <img src="" alt="arrow" />
                    </a>
                </div>
            </section>
            <section className="history_section">
                <div className="container">
                    <h2 className="sr_only">history</h2>
                    <div className="bg_red_shoes"></div>
                    <div className="history_box">
                        <span>01</span>
                        <div>
                            <b>1964-1971</b>
                            <p className="paragraph">
                                육상 코치 빌 바우어만과 필 나이트가 BRS(Blue
                                Ribbon Sports)를 설립하며 시작. 주방의 와플에서
                                영감을 얻은 '와플 솔' 개발로 혁신을 일으키고,
                                '스우시' 로고와 함께 나이키로 공식 출범.
                            </p>
                        </div>
                    </div>
                    <div className="history_box">
                        <span>02</span>
                        <div>
                            <b>1972-1984</b>
                            <p className="paragraph">
                                나이키의 정신을 담은 슬로건 "Just Do It." 공개.
                                러닝화에 '나이키 에어' 쿠셔닝 시스템을 도입하며
                                기술을 선도. 마이클 조던과의 파트너십으로 에어
                                조던 시대 시작.
                            </p>
                        </div>
                    </div>
                    <div className="history_box">
                        <span>03</span>
                        <div>
                            <b>1985-2000</b>
                            <p className="paragraph">
                                에어를 시각적으로 보여주는 '에어 맥스 1' 출시로
                                디자인과 기술의 경계를 허뭄. 농구, 러닝을 넘어
                                축구 등 다양한 스포츠 분야로 사업을 확장하며
                                글로벌 브랜드로 자리매김.
                            </p>
                        </div>
                    </div>
                    <div className="history_box">
                        <span>04</span>
                        <div>
                            <b>2001-현재</b>
                            <p className="paragraph">
                                나이키플러스(Nike+) 등 디지털 기술을 접목하여
                                사용자 경험 혁신. '무브 투 제로'와 같은 친환경
                                캠페인을 통해 지속 가능성을 추구. 스포츠를
                                넘어선 글로벌 문화 아이콘으로 영향력 확대.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="membership_section">
                <div className="container">
                    <div className="title_box">
                        <h2 className="title">Nike Membership</h2>
                        <p className="paragraph">
                            가장 먼저, 가장 특별하게. 오직 나이키 멤버만을 위한
                            모든 것.
                            <br className="hide_on_mobile" />
                            당신의 잠재력을 깨우는 최고의 혜택과 맞춤형 경험을
                            만나보세요.
                        </p>
                        <span className="line"></span>
                        <a href="#">
                            MORE
                            <img src="#" alt="arrow" />
                        </a>
                    </div>
                    <div className="slider">
                        <div className="slider_wrapper">
                            <div className="slide">
                                <div className="bg_photo"></div>
                                <div className="info_box">
                                    <b>맴버 리워드</b>
                                    <p>운동과 쇼핑을 위한 특별한 혜택</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trending_section">
                <div className="container">
                    <div className="title_box">
                        <h2 className="title">Trending Now</h2>
                        <p className="paragraph">
                            지금 가장 주목해야 할 스타일. 트렌드는 나이키에서
                            시작됩니다.
                            <br className="hide_on_mobile" />
                            오늘의 문화를 정의하는 스니커즈와 컬렉션을 가장
                            빠르게 확인하세요.
                        </p>
                        <span className="line"></span>
                        <a href="#">
                            READ MORE
                            <img src="" alt="arrow" />
                        </a>
                        <a href="#">
                            MORE
                            <img src="" alt="arrow" />
                        </a>
                    </div>
                    <div className="slider">
                        <div className="slider_wrapper">
                            <div className="slide">
                                <div className="bg_photo"></div>
                                <div className="info_box">
                                    <b>나이키와 시작하는 가을</b>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
