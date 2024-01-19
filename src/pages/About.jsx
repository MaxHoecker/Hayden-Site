function About() {

  return (
    <div className="h-screen bg-backgroundColor lg:grid grid-cols-5 items-center">
      <div />
      <div className="flex items-center justify-center col-span-3">
        <div className="lg:grid grid-cols-2 content-center">
          <div className="p-10 my-auto flex justify-end">
              <img className="rounded-3xl" src='./boat.png' />
          </div>
          <div className="p-10 my-auto flex justify-start text-xl">
            Since I was a child, I’ve always been driven by an innate desire to build, the methods in which I created never seemed to matter as much as the act of creating itself. One day, my father brought me into the workshop. With a dulled hand saw, I cut through a cheap block of wood. That was all I needed to catch an unforgettable wave of accomplishment. It wasn’t too long before I was nailing planks together to make swords, and as I grew, so did my aspirations. I set my eyes on larger and more complex projects, like a chair adorned with castle-like legs, axe themed chair arms, and an infinity cube placed above the headrest. I branched out from wood and started metal working from making a blacksmith forge, to a beautiful ring for my mother to celebrate 30 years of wonderful marriage with my father. In college I milled and lathed a new bench vise, and I’ve got a lifetime of projects ahead of me.
          </div>
        </div>
      </div>
      <div />
    </div>

  )
}

export default About
