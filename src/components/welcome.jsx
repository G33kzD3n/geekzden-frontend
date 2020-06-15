import React from "react";
import { Fade } from "react-reveal";

const welcome = () => {
  return (
    <div className="welcome-area" id="welcome">
      {/* <!-- ***** Header Text Start ***** --> */}
      <Fade duration={3000}>
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  A place where <em>G33kz</em> Meet
                </h1>
                <p>
                  Lava <a href="# ">HTML landing page</a> template is provided
                  by <a href="# ">TemplateMo</a>. You can modify and use it for
                  your commercial websites for free of charge. This template is
                  last updated on 29 Oct 2019.
                </p>
                <a href="#about" className="main-button-slider">
                  KNOW US BETTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/* <!-- ***** Header Text End ***** --> */}
    </div>
    // <!-- ***** Welcome Area End ***** -->
  );
};
// class Welcome extends Component {
//   // state = {};

//   render() {
//     return (
//       <div className="welcome-area" id="welcome">
//         {/* <!-- ***** Header Text Start ***** --> */}
//         <Fade duration={3000}>
//           <div className="header-text">
//             <div className="container">
//               <div className="row">
//                 <div
//                   className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
//                   // data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
//                 >
//                   <h1>
//                     A place where <em>G33kz</em> Meet
//                   </h1>
//                   <p>
//                     Lava <a href="# ">HTML landing page</a> template is provided
//                     by <a href="# ">TemplateMo</a>. You can modify and use it
//                     for your commercial websites for free of charge. This
//                     template is last updated on 29 Oct 2019.
//                   </p>
//                   <a href="#about" className="main-button-slider">
//                     KNOW US BETTER
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Fade>
//         {/* <!-- ***** Header Text End ***** --> */}
//       </div>
//       // <!-- ***** Welcome Area End ***** -->
//     );
//   }
// }

export default welcome;
