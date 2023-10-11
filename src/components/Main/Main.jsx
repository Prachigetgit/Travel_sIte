import React,{useEffect} from 'react'
import './main.css'
//i,port icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'


import newzimg from '../../assets/newzimg.jpg'
import balimg from '../../assets/balimg.jpg'
import parimg from '../../assets/parimg.jpg'
import perimg from '../../assets/perimg.jpg'
import meximg from '../../assets/meximg.jpg'
import turimg from '../../assets/turimg.jpg'
import tajimg from '../../assets/tajimg.jpg'
import ausimg from '../../assets/ausimg.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [

  {
    id:1,
    imgSrc: newzimg,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in  the world . This place is known for its luxurious stays and adventurous activities. '
  },

  {
    id:2,
    imgSrc: balimg,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$300',
    description: 'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.'
  },

  {
    id:3,
    imgSrc: perimg,
    destTitle: 'Cusco',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "bucket-list destination rich with archeological ruins, magnificent churches, and top-notch restaurants. Incan majesty and Andean baroque exist side-by-side in Cusco's stone streets, epitomized by the Qorikancha temple"

    
  },

  {
    id:4,
    imgSrc: parimg,
    destTitle: 'Eiffel tower',
    location: 'Paris, france',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. '
  },

  {
    id:5,
    imgSrc: turimg,
    destTitle: 'cappadocoa',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "Cappadocia is located in the middle of Turkey. The fairytale landscape is mainly famous for its “fairy chimneys.” These bizarre rock pillars were created because the rainwater washed away the soft stone at the bottom faster than the hard stone at the top."
    
  },

  {
    id:6,
    imgSrc: meximg,
    destTitle: 'Guadalajara, Jal.',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$400',
    description: 'The spirit of Guadalajara’s rich culture runs hot in the veins of its Mariachi, the musical icons who serenade the nation’s boulevards, public squares, and sidewalks with a brand and style of music that is both unique and legendary. Like the Charros (Mexican Cowboys), the Mariachi is a symbol of nationalism and culture in Mexico, tracing its origins to the Guadalajara region.'
  },

  {
    id:7,
    imgSrc: tajimg,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'Historical Monument',
    fees: '$500',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.'
  },

  {
    id:8,
    imgSrc: ausimg,
    destTitle: 'Mosman, NSW',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Mosman is an affluent harbourside suburb where well-heeled locals frequent the boutiques and bistros along Military Road. Chowder Bay is a popular kayaking spot, surrounded by 19th-century buildings and a few chic waterfront restaurants. '
  }


]


const Main = () => {

   // hook to add a scroll animation
   useEffect(() =>{
    Aos.init({duration:2000})
}, [])


  return (
    <section className='main container section'>
         <div className='secTitle'>
          <h3 data-aos="fade-right" className='title'>
            Most visited destinations
          </h3>
         </div>

         <div className='secContent grid'>
               {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) =>{
                   return(
                    <div key={id}  data-aos="fade-up" className='singleDestination'>
                       <div className='imageDiv'>
                       <img src={imgSrc} alt={destTitle} />
                       </div>

                       <div className='cardInfo'>
                       <h4 className='destTitle'>{destTitle}</h4>
                       <span className='continent flex'>
                        <HiOutlineLocationMarker className='icon' />
                        <span className='name'>{location}</span>
                       </span>

                       <div className='fees flex'>
                       <div className='grade'>
                        <span>{grade}<small>+1</small></span>
                       </div>
                       <div className='price'>
                       <h5>{fees}</h5>
                       </div>
                       </div>
                       <div className='desc'>
                          <p>{description}</p>
                       </div>

                       <button className='btn flex'>
                        DETAILS <BsClipboardCheck className='icon' />
                       </button>
                       </div>
                    </div>
                   )
                })
               }          
         </div>
    </section>
  )
}

export default Main