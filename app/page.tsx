"use client"

import Image from "next/image"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto bg-[#faf7f0] min-h-screen font-helvetica">
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
          width: 280px;
          border: 1px solid #1e3a23;
          padding: 16px;
          border-radius: 0.5rem;
          background-color: white;
          transition: transform 0.3s ease;
        }
        
        .testimonial-card:hover {
          box-shadow: 0 4px 12px rgba(30, 58, 32, 0.15);
        }
      `}</style>
      <div className="p-6 md:p-8">
        {/* Header */}
        <header className="mb-6">
          <h1 style={{fontFamily: "Helvetica Compressed", letterSpacing: "0px"}} className="text-4xl">NATURASA</h1>
        </header>
      
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col justify-center">
            <Image
              src="/cook-well-do-better.png"
              alt="Cook well and do better"
              width={500}
              height={300}
              className="mb-6"
              style={{ position: "relative", left: "-5px" }}
            />
              <p className="text-[#1e3a23] text-2xl mb-2">
              Chef <u>quality</u> <span className="text-[#e07a5f] font-bold italic">vanilla</span> sourced <u>fairly</u> <br/> from <u>organic</u> farms in
              Indonesia.
            </p>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-[#1e3a23] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#1e3a23]"></div>
                </div>
                <span className="text-[#1e3a23]">Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M4,12 Q12,4 20,12 Q12,20 4,12" stroke="#1e3a23" strokeWidth="1.5" fill="none" />
                    <circle cx="12" cy="12" r="2" fill="#1e3a23" />
                  </svg>
                </div>
                <span className="text-[#1e3a23]">Wildlife</span>
              </div>
            </div>
          </div>
          <div className="bg-[#e07a5f] rounded-lg p-6 flex flex-col items-center rounded-lg">
            <div className="bg-[#f5f2eb] w-full max-w-xs mx-auto mb-4 overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u5682985318_httpss.mj.runIhIWo6VxbiE_show_only_2_organic_vani_c99a1c81-9464-4d76-ab31-bd5a7d4470af_1%202-m4vlh0lvUzPkv4l2WFbdeTHjYYxK1p.png"
                alt="Vanilla beans with flower"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">VANILLA BEANS</h3>
            <p className="text-white text-xl mb-4">€ 4,99</p>
            <button className="bg-[#1e3a23] text-white px-6 py-2 rounded hover:bg-[#152a19] transition-colors">
              Shop Now
            </button>
            <div className="flex gap-2 mt-6">
              <div className="w-3 h-3 rounded-full bg-[#f5f2eb]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f0e68c]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f5f2eb] opacity-50"></div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 overflow-hidden">
          <h3 className="text-[#1e3a23] text-2xl font-bold mb-4">What chefs are saying</h3>
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
        <h2 className="text-[#1e3a23] text-5xl font-bold mb-8">Fair trade, great taste.</h2>

        {/* Features Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="border border-[#1e3a23] rounded-lg p-6 flex flex-col">
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d2db89dd-83e4-4715-bc2b-aae9af3c0478%201-JZGLkCDGKdmpDCOiRDiV27Czphe7Nq.png"
                alt="Green vanilla beans"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-[#1e3a23] text-4xl font-bold mb-4">ORGANIC.</h3>
            <p className="text-[#1e3a23]">
              Every step of our vanilla cultivation adheres to stringent organic standards. From seed to harvest, our
              beans are nurtured without synthetic pesticides or harmful chemicals, guaranteeing pure, natural flavors
              that are as kind to the earth as they are to your senses.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-[#1e3a23] rounded-lg p-6 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/2 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u5682985318_httpss.mj.runFBLih0UFRQk_httpss.mj.runVE_L7j6hZqE_dc425112-3082-4090-a98e-5d923930aef9_2%201-87doDEGVLBg7AFjfYJEaDK9ELzMGCM.png"
                  alt="Farmer with vanilla beans"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold text-center leading-tight">
                    COM
                    <br />
                    MUNITY.
                  </h3>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-[#1e3a23]">
                  Our farms are collectives that have been working for decades at the heart of Bali. We source directly
                  and make sure, that the nature remains untouched.
                </p>
              </div>
            </div>

            <div className="border border-[#1e3a23] rounded-lg p-6 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/2">
                <p className="text-[#1e3a23]">
                  We prioritize the protection of local wildlife habitats, ensuring our vanilla farms harmoniously
                  coexist with indigenous flora and fauna. By fostering sustainable farming techniques, we uphold our
                  responsibility to biodiversity conservation.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giulia-squillace-t_Cnje2Lq_Q-unsplash%201-UQZJBdDXkkvLnmcwOaGve50JVd3p9M.png"
                  alt="Tropical forest"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">WILDLIFE</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-right mt-8">
          <p className="text-[#1e3a23] text-sm">Impressum</p>
        </footer>
      </div>
    </main>
  )
}

