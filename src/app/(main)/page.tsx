import Hero from '@/components/home/Hero';
import Blogs from '@/components/home/Blogs';
import MyJourny from '@/components/home/MyJourny';
import Project from '@/components/home/Project';
import Qualification from '@/components/home/Qualification';
import Services from '@/components/home/Services';
import Skills from '@/components/home/Skills';
const Page = () => {
  return (
    <div>
      <Hero/>
      <Skills/>
      <MyJourny/>
      <Services/>
      <Project/>
      <Qualification/>
      <Blogs/>
    </div>
  )
}

export default Page;
