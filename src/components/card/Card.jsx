import { useContext } from 'react';
import './Card.css'
import { AppContext } from '../../context';
function Card ({icon, title}){

    const {theme} = useContext(AppContext)

    return(
        <div className={`card ${theme}`}>
            <p className="icon">
             {icon}
            </p>
            <h2>{title}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempore error ad tenetur aut velit et optio placeat soluta, earum pariatur officia, harum odit eaque veniam illum, voluptate obcaecati recusandae?
                Laudantium nemo rerum eveniet possimus? Repellat voluptatibus ea nemo, vel blanditiis ullam, est dignissimos nostrum nobis nulla sequi mollitia eos temporibus perferendis ducimus earum quia excepturi id consequatur, voluptate obcaecati recusandae?  Laudantium nemo rerum eveniet possimus?    
            </p>
        </div>
    )
}

export default Card