import React from 'react';
import './footer.css'

const footer = () => {
    return (
        <footer id="footer">
        <div class="footer-banner">
            <p>Зарегистрировались 51791 человек,
                <br/>
                из них 22904 получили сертификаты</p>
        </div>
        <div class="footer-bottom">
            <div class="copyright">
                <p class="copyright-p">© 1997–2021,
                <br/>
                <a href="#">Центр-инвест</a>
                </p>
            </div>
            <div class="langs-and-rules">
                <div class="langs">
                    <a href="#" className="lang-a">English</a>
                    <a href="#" className="lang-a">改为汉语</a>
                    <a href="#" className="lang-a">Deutsch</a>
                    <a href="#" className="lang-a">Portugese</a>
                    <a href="#" className="lang-a">French</a>
                </div>
                <p class="rules">Регистрируясь на сайте www.school.centrinvest.ru, вы даете согласие на обработку персональных данных в соответствии с <a href="#">правилами сайта</a>.</p>
            </div>
            <div class="contact">
                <p class="contact-p">8 (863) 2-000-000<a href="mailto:dobro@centrinvest.ru"><br/>
                    dobro@centrinvest.ru</a></p>
                
            </div>
        </div>
    </footer>
    );
};

export default footer;