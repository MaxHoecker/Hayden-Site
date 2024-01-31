import { Link } from 'react-router-dom'

export default function(props){
    return (
       <Link className="md:grid 2xl:grid-cols-2" to='/chair'>
         {props.img}
         <div className="p-5 ml-10 basis-1/2">
           <div className="mb-5 text-2xl">
             {props.projectName}
           </div>
           <div>
             {props.projectDescription}
           </div>
         </div>
       </Link>
     )
}