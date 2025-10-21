import "./_Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo_policy_box">
                    <img
                        className="logo"
                        src="/nike/img/logo.png"
                        alt="나이키 로고"
                    />
                    <ul className="policy_box">
                        <li>
                            <a href="#">이용약관</a>
                        </li>
                        <li>
                            <a href="#">개인정보처리방침</a>
                        </li>
                        <li>
                            <a href="#">위치정보이용약관</a>
                        </li>
                        <li>
                            <a href="#">영상정보처리기기 운영 방침</a>
                        </li>
                    </ul>
                </div>
                <span className="line"></span>
                <address>
                    <ul>
                        <li>(유)나이키코리아 대표 구준원</li>
                        <li>서울 강남구 테헤란로 152 강남파이낸스센터 30층</li>
                        <li>통신판매업신고번호 2011-서울강남-03461</li>
                        <li>사업자등록번호 220-88-09068</li>
                        <li>
                            <a href="#">고객센터 전화 문의 080-022-0182</a>
                        </li>
                        <li>FAX 02-6744-5880</li>
                        <li>호스팅서비스사업자 (유)나이키코리아</li>
                    </ul>
                </address>
                <p className="copyright">
                    © 2025 Nike, Inc. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
