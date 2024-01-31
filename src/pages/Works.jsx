import { Link } from 'react-router-dom'
import ProjectCard from './../shared/ProjectCard.jsx'

function Work() {
  return (
    <div className="min-h-screen md:px-44 p-10 my-auto bg-backgroundColor md:grid 2xl:grid-cols-2 md:grid-cols-2 gap-10 items-center text-xl" >

      <ProjectCard
        img={<img className="rounded-3xl basis-1/2" src='./work/chair-sketch.png' />}
        projectName="Dungeon Master Chair"
        projectDescription="This is for the table top role playing game Dungeons and Dragons. The Dungeon Master sits on their throne setting the mood with the color changing back rest. The danger looms with the swords stabbed into the side of the chair. The endless possibilities in the infinity icosahedron."
      />

      <ProjectCard
        img={<img className="rounded-3xl" src='./work/vise-sketch.png' />}
        projectName="V-Grove Bench Vise"
        projectDescription="This was a 2-year journey to make as we took a class to learn SolidWorks and model a pre-designed steam engine. Next semester we milled and lathed the parts we modeled. Next, we designed our own vise using the knowledge we had. Finally, to put our design to the test we made the vise."
      />

      <ProjectCard
        img={<img className="rounded-3xl" src='./work/ring-sketch.png' />}
        projectName="Sea Glass Ring"
        projectDescription="My dad wanted to re-propose my mom, so I offered to make a new ring. I designed the ring in SolidWorks and 3D-printed it using a casting resin. With the help of a jeweler friend, we cast the ring in silver and used sea glass for the stones."
      />

      <ProjectCard
        img={<img className="rounded-3xl" src='./work/forge-sketch.png' />}
        projectName="Adjustable Double Burner Forge"
        projectDescription="After making a deal to clean out a shop in exchange for help welding and materials, my adjustable double burner forge was plasma cut and welded together."
      />
    </div>
  )
}

export default Work