import React from 'react'
import "./Footer.scss"
import Instagram from "../../assets/image/instagram.png"
import Facebook from "../../assets/image/facebook.png"
import Telegram from "../../assets/image/telegram.png"
import Whatsapp from "../../assets/image/whatsapp.png"

function Footer() {
  return (
    <footer className='Footer_G'>
      <div className='Footer-1'>
        <div className='footer_C F_11'>
          <h3>Новостройки</h3>
          <p>Новостройки Kut stroy</p>
          <p>Новостройки Royal</p>
          <p>Новостройки Enesai</p>
          <p>Другие стройкомпании</p>
        </div>

        <div className='footer_C F_22'>
          <h3>Застройщики</h3>
          <p>Застройщики Бишкека</p>
          <p>Застройщики Оша</p>
          <p>Застройщики г.Манас</p>
          <p>Все застройщики</p>
        </div>

        <div className='footer_C F_33'>
          <h3>По сроку сдачи</h3>
          <p>Сданные</p>
          <p>2025 год</p>
          <p>2026 год</p>
          <p>2027 год</p>
        </div>

        <div className='footer_C F_44'>
          <h3>Квартиры</h3>
          <p>1-комнатные</p>
          <p>2-комнатные</p>
          <p>3-комнатные</p>
          <p>4 и более комнат</p>
        </div>

      </div>

      <hr className='HR_1' />

      <div className='Footer_2'>
        <div className='footer_C F_11'>
          <h3>По общим вопросам</h3>
          <p>info@IMARET.KG</p>
        </div>
        <div className='footer_C F_22'>
          <h3>По вопросам размещения рекламы</h3>
          <p>+996 999 040 144</p>
        </div>
        <div className='footer_CE F_33'>
          <h3>О проекте
            Рекламодателям
            Контакты</h3>
        </div>
        
        <div className='footer_CEN'>
          <div>
            <img src={Instagram} alt="" />
          </div>
           <div>
            <img src={Facebook} alt="" />
          </div>
           <div>
            <img src={Telegram} alt="" />
          </div>
           <div>
            <img src={Whatsapp} alt="" />
          </div>
        </div>
      </div>

      <div className='Footer-3'>
        <div className='footer_C F_11'>
          <p>© 2025 elitka.kg</p>

        </div>

        <div className='footer_C F_22'>
          <h4>Политика обработки персональных данных</h4>
        </div>

        <div className='footer_C F_33'>
          <h4>Пользовательское соглашение</h4>
        </div>

        <div className='footer_C F_44'>
          <h4>Карта сайта</h4>
        </div>

      </div>

      <div className='Footer-4'>
        <div className='footer_C'>
          <p>Все сведения размещённые на сайте носят исключительно информационный характер, не являясь публичной офертой.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer