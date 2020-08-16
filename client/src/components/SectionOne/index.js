import React from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
  );

}
export default SectionOne;