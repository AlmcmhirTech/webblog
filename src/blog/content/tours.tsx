import { useState } from 'react';
import { RenderMap } from '../maps';

export function RenderIndustryImmersion(){
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex relative w-screen h-[857px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="min-w-full h-[850px] flex overflow-y-hidden">
          <img className="w-[800px] object-cover" src="/webblog/src/assets/welcomepic2.jpg" alt="" />
          <div className="flex w-full bg-[#E5D2B8]">
            <div className="mt-45 m-7">
                <h2 className="font-bold text-[#373737] text-6xl">
                    <span className="text-white text-3xl">Welcome to </span><br />
                    My Summer Educational Tour
                    <p className='text-lg m-1'>BS Computer Science Batch 2026's Industry Immersion</p>
                </h2>
            </div>
          </div>
        </div>

        <div className="min-w-full flex">
            <div className=''>
                 <RenderMap lat= { 14.584878385847984} lng= {121.06651393275955} />
                <div className="flex justify-center bg-white h-full">
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/foundeverquezon.jpg" alt="" />
                            <span className='m-auto font-bold'>Alman Manzano</span>
                            <span className='mt-4'>A speaker</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#E5D2B8]">
                <div className='flex'>
                    <h1 className="font-['Roboto'] font-bold text-[#373737] ml-2 p-4">The Foundever Fever</h1>
                </div>
                <img className='h-[50%] ml-7' src="/webblog/src/assets/foundever.jpg" alt="" />
                <div className="max-w-[1000px]">
                    <p className="font-['Roboto'] indent-8 leading-relaxed text-justify text-[#373737] text-xl m-6">
                        During our educational tour at Foundever, we attended an insightful presentation that highlighted the company’s role as a global leader in customer experience (CX) and business process outsourcing (BPO). The session delved into how Foundever partners with brands to streamline operations, enhance customer support, and drive efficiency through tailored outsourcing solutions. Speakers shared real-world case studies, demonstrating the impact of their services across industries like healthcare, retail, and technology. We also explored their workplace culture, learning about employee training programs and the technology-driven tools they use to deliver seamless client solutions.</p>
                </div>
            </div>
        </div>

        <div className="min-w-full flex">
            <div className=''>
                 <RenderMap lat= {14.550176941791001} lng= {121.04679469836402}/>
                <h2 className="m-4 font-['Roboto'] font-bold text-4xl">Speakers</h2>
                <div className="flex justify-center">
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/yvesgonzalesgoogly.jpg" alt="" />
                            <span className='m-auto font-bold'>Yves Gonzalez</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#E5D2B8]">
                <div className='flex'>
                    <h1 className="font-['Roboto'] font-bold text-[#373737] ml-2 p-4">The Googly Googs</h1>
                </div>
                <img className='h-[50%] ml-7' src="/webblog/src/assets/googleph.jpg" alt="" />
                <div className="max-w-[1000px]">
                    <p className="font-['Roboto'] indent-8 leading-relaxed text-justify text-[#373737] text-xl m-6">As a BSCS student from WMSU, walking into Google Philippines' vibrant BGC office felt like stepping into the future—where AI, digital inclusion, and ethical tech aren’t just concepts, but realities shaping our world. Atty. Yves Gonzalez didn’t just explain Google’s innovations like Be Internet Awesome; he showed us how our coding skills could one day impact millions. Seeing the creative workspaces and hearing firsthand about tech’s real-world challenges left me (and my classmates) buzzing with ideas, ready to build solutions that matter.</p>
                </div>
            </div>
        </div>

        <div className="min-w-full flex">
           <div className=''>
                 <RenderMap lat= {14.545236670423412} lng= {121.05320342349424} />
                 <h2 className="m-4 font-['Roboto'] font-bold text-4xl">Speakers</h2>
                <div className="flex justify-center">
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/beabonjibod.png" alt="" />
                            <span className='m-auto font-bold'>Beatrice Bonjibod</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#E5D2B8]">
                <div className='flex'>
                    <h1 className="font-['Roboto'] font-bold text-[#373737] ml-2 p-4">The Telephone is Ringing</h1>
                </div>
                <img className='h-[50%] ml-7' src="/webblog/src/assets/teleperformance.jpg" alt="" />
                <div className="max-w-[1000px]">
                    <p className="font-['Roboto'] indent-8 leading-relaxed text-justify text-[#373737] text-xl m-6">Stepping into Teleperformance Philippines’ high-energy BGC office, we BSCS students from WMSU immediately felt the pulse of the global BPO industry – where AI meets human connection. Ms. Beatrice Grace Bonjibod didn’t just describe their tech-driven solutions; she showed us how our coding skills could thrive in an inclusive workplace (with 53% women leaders!). From testing automation tools in their Innovation Hub to practicing mock interviews, we left not just with free merch, but with a new vision: that our technical skills combined with empathy could redefine customer experiences worldwide.</p>
                </div>
            </div>
        </div>

        <div className="min-w-full flex">
           <div className=''>
                 <RenderMap lat= {14.586193614617022} lng= {121.05815195418374} />
                 <h2 className="m-4 font-['Roboto'] font-bold text-4xl">Speakers</h2>
                <div className="flex justify-center">
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/jazzyprettykollab.jpg" alt="" />
                            <span className='m-auto font-bold'>Jazmine Claire Calma</span>
                        </div>
                    </div>
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/miguelsiribankollab.jpg" alt="" />
                            <span className='m-auto font-bold'>Miguel Siriban</span>
                        </div>
                    </div>
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/ralphvincentkollab.jpg" alt="" />
                            <span className='m-auto font-bold'>Ralph Vincent Regalado</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#E5D2B8]">
                <div className='flex'>
                    <h1 className="font-['Roboto'] font-bold text-[#373737] ml-2 p-4">The Collaboration</h1>
                </div>
                <img className='h-[50%] ml-7' src="/webblog/src/assets/kolab.jpg" alt="" />
                <div className="max-w-[1000px]">
                    <p className="font-['Roboto'] indent-8 leading-relaxed text-justify text-[#373737] text-xl m-6">Walking into Kollab’s innovation hub in Mandaluyong, we WMSU BSCS students realized textbooks only teach half the story – here, AI meets real-world impact. Chief Scientist Ralph Vincent Regalado showed us how collaborative tech solves actual problems, while Jazmine Calma made us rethink workplace culture as seriously as code quality. When Senior AI Engineer Toni-Jan Keith Monserrat demonstrated AI transforming agriculture and healthcare, our classroom algorithms suddenly felt powerful. Miguel Siriban’s portfolio workshop gave us immediate tools to showcase our skills, and the candid career stories during Q&A left us energized – we weren’t just visiting a tech company, we were glimpsing our future selves in this industry.</p>
                </div>
            </div>
        </div>

         <div className="min-w-full flex">
            <div className=''>
                 <RenderMap lat= {14.587552330602858} lng= {121.05996857323409} />
                <h2 className="m-4 font-['Roboto'] font-bold text-4xl">Speakers</h2>
                <div className="flex justify-center">
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/sabinaahmadadb.jpg" alt="" />
                            <span className='m-auto font-bold'>Sabina Ahmad</span>
                        </div>
                    </div>
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/mattfarleyadb.jpg" alt="" />
                            <span className='m-auto font-bold'>Matt Farley</span>
                        </div>
                    </div>
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/stephkchadb.jpg" alt="" />
                            <span className='m-auto font-bold'>Stephanie King-chung Hung</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#E5D2B8]">
                <div className='flex'>
                    <h1 className="font-['Roboto'] font-bold text-[#373737] ml-2 p-4">The Fancy Charity</h1>
                </div>
                <img className='h-[50%] ml-7' src="/webblog/src/assets/adb.jpg" alt="" />
                <div className="max-w-[1000px]">
                    <p className="font-['Roboto'] indent-8 leading-relaxed text-justify text-[#373737] text-xl m-6">Stepping into ADB’s headquarters, we WMSU computer science students discovered how code meets global impact – where algorithms help fight poverty and APIs connect economies. During fireside chats with ADB’s IT directors, we learned how cloud infrastructure powers regional development, while presenting our "RePay" micro-lending app showed us our classroom projects could actually empower underserved communities. Between touring innovation hubs and learning about ADB’s Future IT Leaders program, we left not just with new LinkedIn connections, but with a transformed perspective: that our programming skills could one day help build bridges – both digital and developmental – across Asia.</p>
                </div>
            </div>
        </div>

        <div className="min-w-full flex">
            <div className=''>
                <RenderMap lat= {14.608104862812494} lng= {121.07868800245744} />
                <h2 className="m-4 font-['Roboto'] font-bold text-4xl">Speakers</h2>
                <div className="flex justify-center">
                    <div className='m-8'>
                        <div className='w-[150px] flex flex-col'>
                            <img className="w-full" src="/webblog/src/assets/microsourcingspeaker1.jpg" alt="" />
                            <span className='m-auto font-bold'>Haidee C. Enriquez</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full bg-[#E5D2B8]">
                <div className='flex'>
                    <h1 className="font-['Roboto'] font-bold text-[#373737] ml-2 p-4">The Sourcerer</h1>
                </div>
                <img className='h-[50%] ml-7' src="/webblog/src/assets/microsourcing.jpg" alt="" />
                <div className="max-w-[1000px]">
                    <p className="font-['Roboto'] indent-8 leading-relaxed text-justify text-[#373737] text-xl m-6">Your code could build global businesses from Eastwood to Australia," MicroSourcing CEO Heidee Enriquez told us WMSU computer science students as we toured their buzzing Quezon City headquarters. Between scanning their employee-friendly workspaces (complete with nap pods!) and learning LinkedIn hacks from their recruiters, we discovered how our programming skills could power international startups without ever leaving PH. That moment when their team showed how Filipino developers manage entire SaaS platforms for foreign clients? That's when we realized our classroom projects were actually training us to become tomorrow's digital workforce - with the world as our office.</p>
                </div>
            </div>
        </div>
      </div>

        <div className="absolute flex justify-between top-[93%] -translate-x-1/2 left-1/2 ">
            {currentSlide === 0
            ? <button className="bg-[#373737]"><span className="m-1 text-white">Welcome</span></button>
            : <button className="bg-transparent opacity-50" onClick={()=> setCurrentSlide(0)}><span className="m-1 text-[#373737]">Welcome</span></button>
            }
            {currentSlide === 1 || currentSlide === 2
            ? <button className="bg-[#373737]"><span className="m-1 text-white">Day One</span></button>
            : <button className="bg-transparent opacity-50" onClick={()=> setCurrentSlide(1)}><span className="m-1 text-[#373737]">Day One</span></button>
            }
            {currentSlide === 3 || currentSlide === 4
            ? <button className="bg-[#373737]"><span className="m-1 text-white">Day Two</span></button>
            : <button className="bg-transparent opacity-50" onClick={()=> setCurrentSlide(3)}><span className="m-1 text-[#373737]">Day Two</span></button>
            }
            {currentSlide === 5 || currentSlide === 6
            ? <button className="bg-[#373737]"><span className="m-1 text-white">Day Three</span></button>
            : <button className="bg-transparent opacity-50" onClick={()=> setCurrentSlide(6)}><span className="m-1 text-[#373737]">Day Three</span></button>
            }
        </div>

        {currentSlide > 0
        ?   <button
                onClick={() => setCurrentSlide(currentSlide - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#373737] p-2 rounded-full shadow-lg"
                >
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
            </button>
        : null
        }
    
    {currentSlide === 6
    ? null
    :<button
        onClick={() => setCurrentSlide(currentSlide + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#373737] p-2 rounded-full shadow-lg"
      >
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke='currentColor' className="size-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

      </button>
    }
    </div>
  );
};
