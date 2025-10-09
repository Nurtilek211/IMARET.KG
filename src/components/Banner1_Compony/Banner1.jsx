import React from 'react'
import "./Banner1.scss"
import B1_Kut from "../../assets/image/B1_Kut.png"
import B1_Cap from "../../assets/image/B1_Cap.png"
import B1_Stan from "../../assets/image/B1_Stan.png"
import B1_KgG from "../../assets/image/B1_Kgg.png"
import B1_Royal from "../../assets/image/B1_Royal.png"
import B1_Ene from "../../assets/image/B1_Ene.png"
import B1_Ava from "../../assets/image/B1_Ava.png"
import Bish from "../../assets/image/Bish.png"

function Banner1() {
  const companies = [
    { img: B1_Kut, link: "#" },
    { img: B1_Royal, link: "#" },
    { img: B1_Cap, link: "#" },
    { img: B1_Stan, link: "#" },
    { img: B1_KgG, link: "#" },
    { img: B1_Ene, link: "#" },
    { img: B1_Ava, link: "#" },
  ]

  return (
    <div className='Banner1_C'>
      <div className='TEXTB'>
        <h2 className="title">Наши строй компании</h2>
      </div>
      <div className='BA1_scroll_wrapper'>
        <img src={Bish} alt="" className='IMG_BISH' />
        <div className='BA1_auto_scroll'>
          {[...companies, ...companies].map((company, i) => (
            <a href={company.link} className='DIv1' key={i}>
              <img src={company.img} alt="company logo" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner1






// import React from 'react'
// import "./Banner1.scss"
// import B1_Kut from "../../assets/image/B1_Kut.png"
// import B1_Cap from "../../assets/image/B1_Cap.png"
// import B1_Stan from "../../assets/image/B1_Stan.png"
// import B1_KgG from "../../assets/image/B1_Kgg.png"
// import B1_Royal from "../../assets/image/B1_Royal.png"
// import B1_Ene from "../../assets/image/B1_Ene.png"

// function Banner1() {
//   const companies = [
//     { img: B1_Kut, link: "#" },
//     { img: B1_Royal, link: "#" },
//     { img: B1_Cap, link: "#" },
//     { img: B1_Stan, link: "#" },
//     { img: B1_KgG, link: "#" },
//     { img: B1_Ene, link: "#" },
//   ]

//   return (
//     <div className='Banner1_C'>
//       <div className='TEXTB'>
//         <h2 className="title">Наши строй компании</h2>
//       </div>
//       <div className='BA1_scroll_wrapper'>
//         <div className='BA1_auto_scroll'>
//           {[...companies, ...companies].map((company, i) => (
//             <a href={company.link} className='DIv1' key={i}>
//               <img src={company.img} alt="company logo" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner1






// import React from 'react'
// import "./Banner1.scss"
// import B1_Kut from "../../assets/image/B1_Kut.png"
// import B1_Cap from "../../assets/image/B1_Cap.png"
// import B1_Stan from "../../assets/image/B1_Stan.png"
// import B1_KgG from "../../assets/image/B1_Kgg.png"
// import B1_Royal from "../../assets/image/B1_Royal.png"
// import B1_Ene from "../../assets/image/B1_Ene.png"

// function Banner1() {
//   return (
//     <div className='Banner1_C'>
//         <div className='TEXTB'>
//             <h2 class="title">Наши строй компании</h2>
//         </div>
//         <div className='BA1_csroll'>
//             <div className='DIv1'>
//                 <img src={B1_Kut} alt="" />
//             </div>
//             <div className='DIv1'>
//                 <img src={B1_Royal} alt="" />
//             </div>
//             <div className='DIv1'>
//                 <img src={B1_Cap} alt="" />
//             </div>
//             <div className='DIv1'>
//                 <img src={B1_Stan} alt="" />
//             </div>
//             <div className='DIv1'>
//                 <img src={B1_KgG } alt="" />
//             </div>
//             <div className='DIv1'>
//                 <img src={B1_Ene } alt="" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Banner1
