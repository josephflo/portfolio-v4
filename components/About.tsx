import Image from 'next/image'

const About = () => {
  return (
    // <div id='about' className="bg-white shadow-lg rounded-lg p-6 w-4/5 mx-auto min-h-[90vh]">
    <div id='about' className="bg-white shadow-lg rounded-lg p-6 w-4/5 mx-auto">

      <h1
        className='text-2xl md:text-4xl flex justify-center mt-4'
      >ABOUT ME</h1>
      <div className='flex flex-col md:flex-row md:p-16 md:justify-between'>
        <Image
          src='/phone2.png'
          alt='perfil_png'
          width={200}
          height={400}
          className='w-1/4'
        />
        <div className='flex w-3/4 md:px-12'>
          <p
        className='font-medium text-gray-800'
        >My name is Joseph, Im a FullStack Web Developer. I'm Proactive, dedicated to my work. Im looking for a job where I can upgrade my habilities. I feel more confortable on Front side, but I like both sides.I have experiences working on React,Typescript, Javascript, Tailwind, etc. Also I've been workin on Nextjs like 1 year ago. My name is Joseph, Im a FullStack Web Developer. I'm Proactive, dedicated to my work. Im looking for a job where I can upgrade my habilities. I feel more confortable on Front side, but I like both sides.I have experiences working on React,Typescript, Javascript, Tailwind, etc. Also I've been workin on Nextjs like 1 year ago.I'm Proactive, dedicated to my work. Im looking for a job where I can upgrade my habilities. I feel more confortable on Front side, but I like both sides.I have experiences working on React,Typescript, Javascript, Tailwind, etc. Also I've been workin on Nextjs like 1 year ago.</p>
        </div>
        
      </div>
    </div>
  )
}

export default About