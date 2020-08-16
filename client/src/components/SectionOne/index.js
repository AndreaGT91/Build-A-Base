import React from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

import OrangeCircle from '../../images/orangeprogressncircle.png';
import WhiteProgress from '../../images/whiteprogress.png';
import WhiteLock from '../../images/whitelock.png';

const Sticky2Styled1 = styled.div`
  overflow: hidden;
  
  .sticky, SectionOne {
    height: 100vh;
    // background: linear-gradient(180deg, #e4f5fc 0%,#bfe8f9 26%,#9fd8ef 59%,#0068f2 100%);
    // background-color: #e4f5fc;
    background: white;
  }
    width: 100%;
    & .animation, .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
      & Image {
        opacity: 0;
        position: relative;
        width: 30%;
        height: 30%;
        
      }
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100%;
      h1 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 25%;
        margin: 0;
       
      }  
       
        
      
    }
    .heading2 {
      position: absolute;
      height: 100%;
      width: 100%;
      h2 {
        font-size: 20px;
        position: absolute;
        bottom: 10%;
        left: 33%;
        margin: 0;
        text-align:center;
       
      }
      Image{
        animation: 'Image-spin infinite 20s linear'
      }
      @keyframes Image-spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
        } 
      
    }
  }
`;

const SectionOne = () => {
  return (
    <Sticky2Styled1>
      <Controller>
        <Scene
          triggerHook="onLeave"
          triggerElement={null}
          duration={3000}
          pin
        >
          {(progress) => (
            <div className="sticky">
              <div className='dbSetup'>
                <Timeline totalProgress={progress} paused>

                  <Tween
                    from={{ opacity: 0, x: '110%', top: '30%', scale: .2, stagger: 1 }}
                    to={{ opacity: 1, x: '0', top: '20%', duration: 1.5, scale: .8, }}
                  >
                    <div className="animation">

                      <MDBContainer>
                        <MDBRow>
                          <MDBCol md="4">
                            <div style={{ position: 'relative' }} >
                              <h2>Increase Daily Productivity</h2>
                              <p>Simple design <br></br> easy file intergration</p>
                              <Image src={OrangeCircle}  ></Image>
                            </div>
                            <div style={{ position: 'absolute' }}>

                              <Image src={WhiteLock} style={{ position: 'relative' }}></Image>
                            </div>
                          </MDBCol>
                          <MDBCol md="4">
                            <h2>Keep track of perfomance</h2>
                            <p>Real time <br></br> data updates</p>
                            <Image src={OrangeCircle} style={{ position: 'relative' }} ></Image>
                            <Image src={WhiteProgress} style={{ position: 'absolute' }}></Image>
                          </MDBCol>
                          <MDBCol md="4">
                            <h2>Safe secure data management</h2>
                            <p>Self managing <br></br> no more IT burdens</p>
                            <Image src={OrangeCircle} style={{ position: 'relative' }} ></Image>
                            <Image src={WhiteLock} style={{ position: 'absolute' }}></Image>
                          </MDBCol>
                        </MDBRow>
                      </MDBContainer>

                    </div>
                  </Tween>

                </Timeline>
              </div>
            </div>
          )}

        </Scene>
      </Controller>
    </Sticky2Styled1>

// {/* <Controller>
//       <Scene
//         triggerHook="onLeave"
//         duration={3000}
//         pin
//       >
//         {(progress) => (
//           <div className="sticky">
//             <Timeline totalProgress={progress} paused>
//               <Tween
//                 from={{ opacity: 1, x: '55%', top: '30%', scale: 1.5, }}
//                 to={{ opacity: 0, x: '110%', top: '30%', duration: .5 }}
//               >
//                 <div className="animation">
//                   <Image style={{
//                     width: "300px",
//                     height: "300px",
//                     // background: { Logo }
//                   }} src={Upload5}></Image>
//                 </div>
//               </Tween>
//               <Tween
//                 from={{ opacity: 0, x: '10%', top: '60%', }}
//                 to={{ opacity: 1, x: '55%', top: '30%', scale: 1.5, duration: 1 }}
//               >
//                 <div className="animation">
//                   {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.267 29.267">
//                     <path d="M25.925 13.574c.405.173.928.295 1.571.366.295.025.579.036.86.036.326 0 .632-.018.911-.054-.351.329-.803.614-1.349.857-.552.244-1.262.365-2.138.365a9.544 9.544 0 0 1-2.23 4.028c-1.082 1.188-2.37 2.169-3.862 2.943s-3.131 1.312-4.926 1.617c-1.01.182-2.019.272-3.033.272-.765 0-1.533-.055-2.297-.164a15.456 15.456 0 0 1-5.118-1.617C2.669 21.378 1.232 20.169 0 18.599a7.4 7.4 0 0 0 2.433 1.435 8.417 8.417 0 0 0 5.828-.037 7.352 7.352 0 0 0 2.594-1.672 2.821 2.821 0 0 1-.441.036c-.279 0-.534-.049-.764-.146-.367-.146-.62-.345-.757-.594-.142-.249-.142-.524 0-.823.137-.298.493-.562 1.067-.792a5.375 5.375 0 0 1-.566.034c-.283 0-.544-.024-.783-.07a3.205 3.205 0 0 1-1.052-.375 3.369 3.369 0 0 1-.743-.577 3.723 3.723 0 0 1-.494-.66 2.57 2.57 0 0 1 .823-.499c.305-.116.706-.188 1.205-.211-1.118-.243-1.917-.606-2.391-1.078-.475-.475-.777-1.022-.895-1.643.33-.051.657-.108.994-.174.333-.069.6-.076.796-.029-.953-.475-1.614-1.029-1.994-1.662-.327-.559-.492-1.085-.492-1.572 0-.061.006-.127.019-.201a72.606 72.606 0 0 1 4.337 1.644c1.177.501 2.221.988 3.134 1.465.353.142.704.361 1.06.655l1.151.989a21.586 21.586 0 0 1 1.854-3.766c.359-.583.762-1.121 1.213-1.608a6.278 6.278 0 0 1 1.534-1.205c-.023.278-.167.555-.436.822.33-.278.685-.503 1.067-.677.387-.17.792-.283 1.216-.345-.049.28-.248.51-.604.685a8.51 8.51 0 0 1-.93.41c.096-.023.29-.087.574-.189.287-.104.592-.2.915-.283.326-.086.615-.144.879-.164.26-.025.417.021.464.145.072.146.03.271-.127.374a2.52 2.52 0 0 1-.577.267 7.996 7.996 0 0 1-.673.182c-.227.05-.375.086-.447.108l-.677.237a5.371 5.371 0 0 1 2.045.237 5.707 5.707 0 0 1 1.81.953 7.213 7.213 0 0 1 1.441 1.497 6.09 6.09 0 0 1 .914 1.844l.074.293c.021.097.048.205.072.326.244.076.535.12.879.139.34.017.677 0 1.014-.055.332-.054.637-.123.909-.209.276-.085.494-.165.651-.237-.194.476-.569.874-1.124 1.196-.557.32-1.249.505-2.074.555z"/>
//                   </svg>                 */}
// {/* <Image style={{
//                     width: "300px",
//                     height: "300px", */}

// {/* // background: { Logo } */ }
// {/* }} src={Upload5}></Image> */ }

// {/* </div>
//               </Tween>  */}

// {/* <Timeline
//                 target={
//                   <div className="heading">
//                     <h1>Database Management & File Uploads</h1>
//                   </div>
//                 }
//               >
//                 <Tween
//                   from={{ opacity: 0, duration: 1.3, delay: 1 }}
//                   to={{ opacity: 1, duration: 1.5, delay: 1, scale:1.1,y:'-17%' }}
//                 />
//                 <Tween
//                   to={{ x: '110%' }}
//                 />
//               </Timeline> */}
// {/* <Timeline
//                 target={
//                   <div className="heading2">
//                     <h2>Easily store and retrieve data from anywhere<br></br>Online and Offline.</h2>
//                   </div>
//                 }
//               >
//                 <Tween
//                   from={{ opacity: 0,duration: 1.5, delay: 1 }}
//                   to={{opacity: 1, duration: 1.5, delay: 1, scale:1.1,y:'-17%'  }}
//                 />
//                 <Tween
//                   to={{ x: '-110%' }}
//                 /> */}
// {/* </Timeline> */ }
// {/* </Timeline>
//           </div>
//         )}
//       </Scene>
//     </Controller> */}

  )
};

export default SectionOne;