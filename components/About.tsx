import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className="bg-white shadow-lg rounded-lg p-6 w-4/5 mx-auto my-10 h-90vh flex items-center justify-center">
      <Image src="/computer.png" alt="computerpng" height={800} width={800} />
    </div>
  )
}

export default About