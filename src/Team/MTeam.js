import React from 'react'
import './style.css'
import styled from 'styled-components'
import Linkdn from '../Nav/icon/Linkdn'
import {AiFillTwitterCircle} from "react-icons/ai";
// import Twitter from '../Nav/icon/Twitter'
const Section = styled.div`
color: pirple;
@media screen and (min-width:768px) {
    section{
        padding: 1em 7em;
    }
}
@media screen and (min-width:992px) {
    section{
        padding: 1em;
    }
}
`

const MTeam = () => {
  return (
    <Section>
        <div className='row'>
            <h1 className='coco text-7xl' >Our Team</h1>
        </div>
        <div className='row'>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                        <div className='team first' ></div>
                    </div>
                    <h3>ELENE</h3>
                    <p>Team establisher <span className='block text-black' >( Head of Human Resources )</span> </p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/elene-oghadze-bb90641a2/' target="_blank" >
                        <Linkdn />
                        </a>
                        <a href="https://twitter.com/Eleniko08019686" target="_blank">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team second' ></div>
                    </div>
                    <h3>ZURA</h3>
                    <p>Sculptor of NFTs<span className='block text-black' >( Head of Art )</span> </p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/zurab-supatashvili-5b0a25188/' target="_blank" >
                        <Linkdn />
                        </a>
                        <a href="https://twitter.com/helldemos" target="_blank">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team third' ></div>
                    </div>
                    <h3>PADRE</h3>
                    <p>Chronicler of Horsinft_Arounf<span className='block text-black' >( Head of Community )</span> </p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/saba-khimshiashvili-44637817a/'  target="_blank" >
                        <Linkdn />
                        </a>
                        <a href="https://twitter.com/padr_es_peaks/"  target="_blank">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team fourth' ></div>
                    </div>
                    <h3>LUKA</h3>
                    <p>Narrator among social media platforms<span className='block text-black' >( Head of Marketing )</span> </p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/luka-darchia-61225b199/' target="_blank" >
                        <Linkdn />
                        </a>
                        <a href="/" target="_blank">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team five' ></div>
                    </div>
                    <h3>LAZO</h3>
                    <p>Grand Master of Coding<span className='block text-black' >( Head of Development )</span> </p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/lazare-lomsadze-b43102228/' target="_blank" >
                        <Linkdn />
                        </a>
                        <a href="https://twitter.com/Blockchain_001" target="_blank" >
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team sixth' ></div>
                    </div>
                    <h3>Horse`Around</h3>
                    <p>Owner of the Unicorn<span className='block text-black' >( Head Of Market )</span> </p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='/'  >
                        <Linkdn />
                        </a>
                        <a href="/">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default MTeam