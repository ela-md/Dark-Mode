import './Cards.css'
import Card from './Card'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

function Cards () {

    const cards = [
        {
            id: 1,
            title: 'react js',
            icon: <FaReact />,
        },

        {
            id: 2,
            title: 'node js',
            icon: <FaNodeJs />
        },

        {
            id: 3,
            title: 'tailwind css',
            icon: <RiTailwindCssFill />
        },

        {
            id: 4,
            title: 'bootstrap',
            icon: <FaBootstrap />
        },
    ]

    return(
    
       <div className="cards">
     {cards.map((item) => (
        <Card key={item.id} {...item} />
     ))}
       </div>

    )
}

export default Cards