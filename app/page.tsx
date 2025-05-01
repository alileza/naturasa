"use client"

import Image from "next/image"

export default function Home() {
  return (
    <main className="max-w-[2000px] mx-auto bg-[#faf7f0] min-h-screen font-helvetica">
      <style jsx>{`
        .testimonial-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .testimonial-container::before,
        .testimonial-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        
        .testimonial-container::before {
          left: 0;
          background: linear-gradient(to right, #faf7f0 0%, rgba(250, 247, 240, 0) 100%);
        }
        
        .testimonial-container::after {
          right: 0;
          background: linear-gradient(to left, #faf7f0 0%, rgba(250, 247, 240, 0) 100%);
        }
        
        .testimonial-track {
          display: flex;
          gap: 20px;
          animation: scroll 120s linear infinite;
          width: fit-content;
        }
         
        .testimonial-track:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(calc(0% - 140px));
          }
          100% {
            transform: translateX(calc(-280px * 8 - 160px)); /* Width of all 8 cards + gaps */
          }
        }
        
        .testimonial-card {
          flex: 0 0 auto;
          width: 320px;
          border: 1px solid #1e3a23;
          padding: 24px;
          border-radius: 0.75rem;
          background-color: white;
          transition: transform 0.3s ease;
        }
        
        .testimonial-card:hover {
          box-shadow: 0 4px 12px rgba(30, 58, 32, 0.15);
        }
        
        @media (max-width: 640px) {
          .testimonial-card {
            width: 300px;
            padding: 20px;
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(calc(0% - 120px));
            }
            100% {
              transform: translateX(calc(-300px * 8 - 140px));
            }
          }
        }
      `}</style>
      <div className="p-6 xs:p-8 sm:p-10 md:p-12">
        {/* Header */}
        <header>
          <h1 style={{fontFamily: "Helvetica Compressed", letterSpacing: "0px"}} className="text-4xl xs:text-5xl sm:text-6xl">NATURASA</h1>
        </header>
      
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr,650px] gap-6 sm:gap-8 mb-12 sm:mb-16 -mt-[52px]">
          <div className="flex flex-col justify-center">
            <Image
              src="/cook-well-do-better.png"
              alt="Cook well and do better"
              width={800}
              height={500}
              className="mb-6 sm:mb-8 w-full max-w-[800px] mt-[120px]"
              style={{ position: "relative", left: "-5px" }}
            />
            <p style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="text-[#1e3a23] text-2xl xs:text-3xl sm:text-4xl mb-4">
              <span className="not-italic">Chef</span>-<u className="not-italic">quality</u> <span className="text-[#e07a5f] font-bold italic">vanilla</span><span className="not-italic">, sourced</span> <u className="not-italic">fairly</u> <br className="hidden xs:block"/> <span className="not-italic">from the lush forests of Bali, Indonesia.</span>
            </p>
            <div className="flex items-center gap-6 sm:gap-8 mt-32 md:mt-56">
              <div className="flex items-center gap-3">
                <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center">
                  <Image
                    src="/organic-icon1.png"
                    alt="Organic icon"
                    width={32}
                    height={32}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <span style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="text-[#1e3a23] text-2xl sm:text-4xl not-italic">Organic</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center">
                  <Image
                    src="/wildlife-icon.png"
                    alt="Wildlife icon"
                    width={32}
                    height={32}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <span style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="text-[#1e3a23] text-2xl sm:text-4xl not-italic">Wildlife</span>
              </div>
            </div>
          </div>
          <div className="bg-[#e07a5f] rounded-2xl pt-36 pb-[24px] px-36 flex flex-col items-center w-full">
            <div className="bg-[#f5f2eb] w-[384px] overflow-hidden rounded-[1.25rem] mb-24 -mt-[100px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u5682985318_httpss.mj.runIhIWo6VxbiE_show_only_2_organic_vani_c99a1c81-9464-4d76-ab31-bd5a7d4470af_1%202-m4vlh0lvUzPkv4l2WFbdeTHjYYxK1p.png"
                alt="Vanilla beans with flower"
                width={384}
                height={384}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-white text-2xl xs:text-3xl sm:text-4xl font-bold mb-1">VANILLA BEANS</h3>
            <p style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="text-white text-xl xs:text-2xl sm:text-3xl mb-2 font-normal not-italic">€ 4,99</p>
            <button style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="bg-[#1e3a23] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-lg sm:text-xl hover:bg-[#152a19] transition-colors not-italic font-bold mt-12">
              Shop Now
            </button>
            <div className="flex gap-4 mt-[100px] sm:mt-[100px] items-center">
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-[#f5f2eb]"></div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#f5f2eb]"></div>
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-[#f5f2eb] opacity-50"></div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 sm:mb-20 overflow-hidden">
          <div className="testimonial-container">
            <div className="testimonial-track">
              {/* First set of testimonials */}
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">"Very high-quality vanilla beans with an intense flavor."</p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">"Very high-quality vanilla beans with an intense flavor."</p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">"Very high-quality vanilla beans with an intense flavor."</p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">"Very high-quality vanilla beans with an intense flavor."</p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">
                  "These vanilla beans are a game-changer! I love that they're organic and sustainably sourced."
                </p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">
                  "The flavor is bold and aromatic! I feel good knowing I'm supporting a company that cares about the
                  planet."
                </p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">
                  "I love supporting a company that prioritizes organic and wildlife-friendly practices."
                </p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              
              {/* Duplicated testimonials for seamless loop */}
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">"Very high-quality vanilla beans with an intense flavor."</p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">
                  "These vanilla beans are a game-changer! I love that they're organic and sustainably sourced."
                </p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">
                  "The flavor is bold and aromatic! I feel good knowing I'm supporting a company that cares about the
                  planet."
                </p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
              <div className="testimonial-card">
                <p className="text-[#1e3a23] mb-4">
                  "I love supporting a company that prioritizes organic and wildlife-friendly practices."
                </p>
                <p className="text-[#666] text-sm">sous chef, at Resto X</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline */}
        <h2 className="text-[#1e3a23] text-[5rem] xs:text-[5.9rem] sm:text-[6.8rem] font-bold mb-4 sm:mb-6">Fair trade, great taste.</h2>

        {/* Features Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="border border-[#1e3a23] rounded-xl p-6 sm:p-8 flex flex-col max-w-[83%]">
            <div className="mb-0 sm:mb-2 overflow-hidden rounded-xl w-[591px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d2db89dd-83e4-4715-bc2b-aae9af3c0478%201-JZGLkCDGKdmpDCOiRDiV27Czphe7Nq.png"
                alt="Green vanilla beans"
                width={591}
                height={591}
                className="h-auto"
              />
            </div>
            <h3 className="text-[#1e3a23] text-5xl xs:text-6xl sm:text-7xl font-bold mb-4 sm:mb-6">ORGANIC.</h3>
            <p style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="text-[#1e3a23] text-lg sm:text-2xl not-italic">
              Every step of our vanilla cultivation adheres to stringent organic standards. From seed to harvest, our
              beans are nurtured without synthetic pesticides or harmful chemicals, guaranteeing pure, natural flavors
              that are as kind to the earth as they are to your senses.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="border border-[#1e3a23] rounded-xl p-4 sm:p-6 flex flex-col md:flex-row gap-8 sm:gap-12 w-[115%] -ml-[15%]">
              <div className="md:w-[56%] relative mt-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u5682985318_httpss.mj.runFBLih0UFRQk_httpss.mj.runVE_L7j6hZqE_dc425112-3082-4090-a98e-5d923930aef9_2%201-87doDEGVLBg7AFjfYJEaDK9ELzMGCM.png"
                  alt="Farmer with vanilla beans"
                  width={1000}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0">
                  <h3 className="text-white text-5xl xs:text-6xl sm:text-7xl font-bold absolute top-[80px] left-0">
                    COM<br />MUNITY.
                  </h3>
                </div>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <p style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="text-[#1e3a23] text-lg sm:text-2xl not-italic">
                  Our farms are collectives that have been working for decades at the heart of Bali. We source directly
                  and make sure, that the nature remains untouched.
                </p>
              </div>
            </div>

            <div className="border border-[#1e3a23] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row gap-20 w-[115%] -ml-[15%]">
              <div className="md:w-1/2 flex items-center justify-center">
                <p style={{fontFamily: 'Helvetica Neue, Arial, sans-serif', fontStyle: 'normal'}} className="text-[#1e3a23] text-lg sm:text-2xl not-italic">
                  We prioritize the protection of local wildlife habitats, ensuring our vanilla farms harmoniously
                  coexist with indigenous flora and fauna. By fostering sustainable farming techniques, we uphold our
                  responsibility to biodiversity conservation.
                </p>
              </div>
              <div className="md:w-[50%] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giulia-squillace-t_Cnje2Lq_Q-unsplash%201-UQZJBdDXkkvLnmcwOaGve50JVd3p9M.png"
                  alt="Tropical forest"
                  width={700}
                  height={525}
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-5xl xs:text-6xl sm:text-7xl font-bold">WILDLIFE.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-right mt-12">
          <p className="text-[#1e3a23] text-base sm:text-lg">Impressum</p>
        </footer>
      </div>
    </main>
  )
}

