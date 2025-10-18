import React from 'react'
import "./Contact.scss"

function contact() {
    return (
        <div>
            <div className='COntact_TOP'>
                <h1 className='my-text'>Главный Офис</h1>
                <div className='Contact_bot'>
                    <div className='AHS'>
                        <div className='Bolt'>
                            <img src="https://i7.uihere.com/icons/19/142/432/position-208ad7a36ff028f88b4a84bc470051a4.png" alt="" />
                        </div>
                        <div className='Old'>
                            <h3>г. Бишкек</h3>
                            <h3>109-1 ул. Турусбекова, Maximum</h3>
                        </div>
                    </div>

                    <div className='AHS'>
                        <div className='Bolt'>
                            <img src="https://mbousosh36.ru/upload/images/ikonka-telefona-dliya-vizitki-01.png" alt="" />
                        </div>
                        <div className='Old'>
                            <h3>+996 999 040 144</h3>
                            <h3>+996 551 040 144</h3>
                        </div>
                    </div>

                    <div className='AHS'>
                        <div className='Bolt'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0_%28ei%29.svg/1200px-%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0_%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0_%28ei%29.svg.png" alt="" />
                        </div>
                        <div className='Olds'>
                            <h3>imaret@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", height: "400px" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11695.80993770871!2d74.57453934991048!3d42.873847038391716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LHRhiDQvNCw0LrRgdC40LzRg9C8!5e0!3m2!1sru!2skg!4v1760565381134!5m2!1sru!2skg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default contact
