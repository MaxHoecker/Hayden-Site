
import { Link } from 'react-router-dom'

function Work() {
  return (
    <div className="min-h-screen md:p-40 p-10 bg-backgroundColor md:grid 2xl:grid-cols-4 md:grid-cols-2 gap-10 items-center text-xl" >
      <img className="rounded-3xl" src='./work/chair-sketch.png' />
      <div className="p-5">
        <div className="mb-5 text-2xl">
          Dungeon Master Chair
        </div>
        <div>
          This is for the table top role pay game Dungeons and Dragons. The Dungeon Master sits on their throne setting the mood with the color changing back rest. The danger looms with the swords stabbed into the side of the chair. The endless possibilities in the infinity icosahedron.
        </div>
      </div>
      <img className="rounded-3xl" src='./work/ring-sketch.png' />
      <div className="p-5">
        <div className="mb-5 text-2xl">
          Adjustable Double Burner Forge
        </div>
        <div>
          After making a deal to clean out a shop in exchange for help welding and materials, my adjustable double burner forge was plasma cut and welded together.
        </div>
      </div>
      <img className="rounded-3xl" src='./work/vise-sketch.png' />
      <div className="p-5">
        <div className="mb-5 text-2xl">
          See Glass Ring
        </div>
        <div>
          My dad never liked how he proposed to my mom so I offered to make a new ring. I designed the ring in SolidWorks and 3D-printed it using a casting resin. With the help of a jeweler friend, we cast the ring in silver and used sea glass for the stones.
        </div>
      </div>
      <img className="rounded-3xl" src='./work/forge-sketch.png' />
      <div className="p-5">
        <div className="mb-5 text-2xl">
          V-Grove Bench Vise
        </div>
        <div>
         This was a 2-year journey to make as we took a class to learn SolidWorks and model a pre-designed steam engine. Next semester we milled and lathed the parts we modeled. Next, we designed our own vise using the knowledge we had. Finally, to put our design to the test we made. A sort of put your money where your mouth is class.
        </div>
      </div>
    </div>
  )
}

export default Work