import Layouts from '@/components/layout'
import ScrollTop from '@/components/top'
import Hero from '@/components/hero'
import About from '@/components/about'
import { StarsCanvas } from '@/components/canvas'
import Experiences from '@/components/experiences'
import Plans from '@/components/plans'
import { Footer, SignUp } from '@/components'
 



export default function Home() {
 return (
              <Layouts showNavbar={true}>

              <div className='relative z-0 bg-primary'>
                  {/* all the webapp components here */}
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero/>
                </div>
                                
                  <About/>
                  <Experiences/>
                  <Plans/>


                  <div className='relative z-0'>
                  <SignUp/>
                  <StarsCanvas />
                  </div>
                  
                  <Footer/>
                
                  
                  
                </div>



                  <ScrollTop/>


                  </Layouts>
   
  )
}
