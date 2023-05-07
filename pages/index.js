import Image from 'next/image';
import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyNavbar from '@/Components/MyNavbar';

import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <>
      <MyNavbar />
      
      <Image src={require('../public/images/moneyFly.gif')} alt='Camry Money Fly' style={{width: "100%"}}/>

      <Image className='figurin' src={require('../public/images/smallMan.png')} alt='Camry Crypto' width={150}/>

      <Container fluid id='hero'>
        <Row>
          <h1 data-aos="fade-down" className='bigTitle m-0 text-center text-xl-start'><span className='dollar'>$</span>CAMRY</h1>
        </Row>
        <Row>
          <Col className='col-12 col-lg-6 position-relative'>
            <Image data-aos="fade-right" className='bigCarImg' src={require('../public/images/camryCar1.png')} alt='Toyota Camry'/>
          </Col>
          <Col className='col-12 col-lg-6 d-flex flex-column align-items-end'>
            <p className='paragraphB'>
            Welcome to $CAMRY - the cryptocurrency that will always be by your side. With 7% tax and a commitment to community, $CAMRY is the smart choice for savvy investors. 
            Join the fun and let's ride the meme wave together!
            </p>
            <button className='BuyBtn mx-5'>
              <Image src={require('../public/icons/wallet.png')} width={20} alt='Camry walltet'/>
              Buy $Camry
            </button>
          </Col>
        </Row>
      </Container>
      
      <Container className='mt-5 mb-5' id='about'>
        <Row>
          <Col className='col-12 col-lg-7 p-0'>
            <div data-aos="fade-right" className='text-box'>
              <p className='paragraphW m-0 text-center'>
              Everyone loves Toyota, Elon loves a Toyota so he named Tesla with a ’T’. Why do you need a Lambo when you can get 10 Camry for that price. 
              With the way we get rugged in these meme projects, Toyota can be a luxury at this point. Stand against rugs and luxury cars and think like a smart CHAD. 
              Camry will be beside you in good times or bad. When nervous, can’t sleep at night, wife and kids leave you, don’t worry, Camry will be by your side. 
              Camry will not have a discord or Telegram at launch, but as soon as it has marketing funds, this CHAD is going to have everything ready. Cars come and go, 
              Camry stays forever!!!!
              </p>
            </div>
            <h1 className='text-center my-5 my-xl-0 bigSubtitle'>Pepe loves <span className='dollar'>$</span>CAMRY</h1>
          </Col>
          <Col className='col-12 col-lg'>
            <Image className='pepeImg' src={require('../public/images/pepeSmoke.webp')} alt='Pepe loves Camry'/>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col className='col-12 col-lg'>
            <Image data-aos="fade-right" className='tweetImg' src={require('../public/images/tweet.jpg')} alt='Elon Musk Camry'/>
          </Col>
          <Col className='col-12 col-lg-7'>
            <div className='text-box'>
                <p className='paragraphW m-0 text-center'>
                $CAMRY is not your average meme. It possesses the power to stay with the community. $CAMRY plans to use the liquidity it raises because let’s be honest, 
                when each and every project rugs, there isn’t much of your own to invest. This CHAD doesn’t believe in taxing fellow citizens, so there is 7% tax.
                </p>
              </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 position-relative' id='tokenomics'>
        <Image data-aos="fade-up" data-aos-duration="3000" className='position-absolute top-50 start-0' width={100} src={require('../public/images/rocket.png')} alt='Camry rocket'/> 
        <Row>
          <Col className='col-6 order-1 d-flex flex-column justify-content-center align-items-center'>
            <span data-aos="zoom-in" className='display-1'>100 B</span>
            <span className='display-6'>suply</span>
          </Col>
          <Col className='col-12 order-3 d-flex flex-column justify-content-center align-items-center mb-4'>
            <Image src={require('../public/images/manHoldingPig.png')} alt='Man holding Camry coin' width={200}/>
          </Col>
          <Col className='col-6 order-2 d-flex flex-column justify-content-center align-items-center'>
            <span data-aos="zoom-in" className='display-1'>7%</span>
            <span className='display-6'>tax</span>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5' id='swap'>
        <Row>
          <Col className='col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center' >
            <div className='adressCont w-100'>
              <div className='contractCont'>
                <span className='display-6 text-white mt-1'>Contract</span>
              </div>
              <span className='text-white text-wrap'>0x0b0aBD7862613b1eCAf6f334046624a447C8B861</span>
              <Image src={require('../public/images/sitOnCoins.png')} alt='Camry coin' width={100} className='position-absolute start-0 top-0 translate-middle'/>
            </div>
            
          </Col>
          <Col className='col-12 col-lg-4'>
            <div className='borderIMGTop mt-5 mt-xl-0'>
              <div className='borderIMGBot'>
                <Image className='camryCar' src={require('../public/images/CamryCar.webp')} alt='Camry Car'/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='mt-5 footer p-3' id='contact'>
        <Row>
          <Col className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='bigSubtitle'><span className='dollar'>$</span>CAMRY</h1>
            <a className='XsmallSubtitle' href='#'>camry@info.hotmail.com</a>
            <Image src={require('../public/icons/tweeter.png')} alt='Camry tweeter Icon' width={100}/>
          </Col>
        </Row>
      </Container>

      <h5 className='m-0 text-center'>CAMRY© 2023. ALL RIGHTS RESERVED.</h5>
    </>
  )
}
