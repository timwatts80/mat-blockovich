'use client';

import Image from "next/image";
import { useActionState, useEffect, useRef } from 'react';
import { submitContactForm } from './actions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Home() {
  const [state, formAction] = useActionState(submitContactForm, { success: false, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);
  return (
    <div className="bg-white relative w-full">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <nav className="max-w-[1537px] mx-auto px-[160.5px] h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#7a9b76] rounded-[10px] w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-base">MB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0f172b] text-base">Mat Blockovich</span>
              <span className="text-[#45556c] text-xs">Home Inspector</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#hero" className="text-[#314158] text-base hover:text-[#7a9b76] transition-colors">Home</a>
            <a href="#services" className="text-[#314158] text-base hover:text-[#7a9b76] transition-colors">Services</a>
            <a href="#about" className="text-[#314158] text-base hover:text-[#7a9b76] transition-colors">About</a>
            <a href="#contact" className="bg-[#7a9b76] text-white px-6 py-2 rounded-[10px] text-base hover:bg-[#6a8b66] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-[600px] mt-16">
        <Image
          src="/mat-hero-image.png"
          alt="Mat Blockovich - Professional Home Inspector"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(232,240,230,0.75)] w-1/2">
          <div className="max-w-[576px] mx-auto pt-[164px] px-6">
            <h1 className="font-bold text-[48px] leading-[48px] tracking-[0.35px] text-[#5a4a3a] mb-4">
              Professional Home Inspections You Can Trust
            </h1>
            <p className="text-lg leading-7 tracking-[-0.44px] text-[#314158] mb-6">
              Hi, I'm Mat Blockovich, your local residential home inspector. I provide thorough, detailed inspections to help you make informed decisions about one of the biggest investments of your life.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#7a9b76] text-white px-8 py-3 rounded-[10px] text-base">
                Schedule an Inspection
              </button>
              <button className="border-2 border-[#7a9b76] text-[#7a9b76] px-6 py-3 rounded-[10px] text-base">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24 px-[160.5px]">
        <div className="max-w-[1216px] mx-auto">
          <h2 className="text-[20px] font-medium leading-[30px] tracking-[-0.45px] text-[#5a4a3a] text-center mb-3">
            What I Inspect
          </h2>
          <p className="text-base leading-6 tracking-[-0.31px] text-[#45556c] text-center max-w-[672px] mx-auto mb-12">
            Every inspection is thorough, unbiased, and designed to give you peace of mind about your home purchase or sale.
          </p>
          
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-6">
              <div className="bg-[#e8f0e6] rounded-[10px] w-12 h-12 flex items-center justify-center mb-4">
                <HomeOutlinedIcon sx={{ fontSize: 24, color: '#7a9b76' }} />
              </div>
              <h3 className="text-base leading-6 tracking-[-0.31px] text-[#0f172b] mb-2">
                Comprehensive Inspection
              </h3>
              <p className="text-sm leading-5 tracking-[-0.15px] text-[#45556c]">
                Complete evaluation of your home's major systems including structure, roof, foundation, plumbing, electrical, and HVAC.
              </p>
            </div>
            
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-6">
              <div className="bg-[#e8f0e6] rounded-[10px] w-12 h-12 flex items-center justify-center mb-4">
                <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 24, color: '#7a9b76' }} />
              </div>
              <h3 className="text-base leading-6 tracking-[-0.31px] text-[#0f172b] mb-2">
                Detailed Reporting
              </h3>
              <p className="text-sm leading-5 tracking-[-0.15px] text-[#45556c]">
                Same-day digital reports with photos, descriptions, and recommendations for every finding.
              </p>
            </div>
            
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-6">
              <div className="bg-[#e8f0e6] rounded-[10px] w-12 h-12 flex items-center justify-center mb-4">
                <DescriptionOutlinedIcon sx={{ fontSize: 24, color: '#7a9b76' }} />
              </div>
              <h3 className="text-base leading-6 tracking-[-0.31px] text-[#0f172b] mb-2">
                Pre-Purchase Inspections
              </h3>
              <p className="text-sm leading-5 tracking-[-0.15px] text-[#45556c]">
                Know exactly what you're buying before you commit. Identify potential issues and negotiate with confidence.
              </p>
            </div>
            
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-6">
              <div className="bg-[#e8f0e6] rounded-[10px] w-12 h-12 flex items-center justify-center mb-4">
                <ShieldOutlinedIcon sx={{ fontSize: 24, color: '#7a9b76' }} />
              </div>
              <h3 className="text-base leading-6 tracking-[-0.31px] text-[#0f172b] mb-2">
                Pre-Listing Inspections
              </h3>
              <p className="text-sm leading-5 tracking-[-0.15px] text-[#45556c]">
                Selling your home? Get ahead of buyer concerns and list with confidence knowing your home's condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#0f172b] py-24 px-[160.5px]">
        <div className="max-w-[1216px] mx-auto grid grid-cols-2 gap-16">
          <div className="relative h-[400px] rounded-[14px] overflow-hidden shadow-xl">
            <Image
              src="/mat-inspecting-kitchen.png"
              alt="Mat Blockovich at work"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-base leading-6 tracking-[-0.31px] text-white mb-6">
              Why Choose Mat Blockovich?
            </h2>
            <p className="text-base leading-6 tracking-[-0.31px] text-[#cad5e2] mb-8">
              Buying or selling a home should feel exciting, not stressful. I provide detailed, honest inspections that cut through uncertainty and give you the confidence to move forward decisively.
            </p>
            
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#7a9b76' }} />
                <span className="text-base leading-6 tracking-[-0.31px] text-[#cad5e2]">
                  Certified and licensed home inspector
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#7a9b76' }} />
                <span className="text-base leading-6 tracking-[-0.31px] text-[#cad5e2]">
                  Same-day detailed inspection reports
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#7a9b76' }} />
                <span className="text-base leading-6 tracking-[-0.31px] text-[#cad5e2]">
                  Unbiased, thorough evaluations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#7a9b76' }} />
                <span className="text-base leading-6 tracking-[-0.31px] text-[#cad5e2]">
                  Latest inspection tools and technology
                </span>
              </div>
            </div>
            
            <div className="bg-[#1d293d] border-l-4 border-[#7a9b76] rounded p-6 shadow-lg">
              <p className="text-base leading-6 tracking-[-0.31px] text-[#cad5e2] italic mb-4">
                "My mission is simple: to give you a clear picture of your home's condition so you can make the best decision for your family."
              </p>
              <p className="text-base leading-6 tracking-[-0.31px] text-white">
                — Mat Blockovich
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 px-[160.5px]">
        <div className="max-w-[1216px] mx-auto">
          <h2 className="text-[20px] font-medium leading-[30px] tracking-[-0.45px] text-[#5a4a3a] text-center mb-3">
            Construction permitting and inspections consultation
          </h2>
          <p className="text-base leading-6 tracking-[-0.31px] text-[#45556c] text-center max-w-[672px] mx-auto mb-12">
            Navigating permits, inspections, or construction approvals? Provide a few details below and I'll connect with you within 24 hours to clarify requirements and next steps.
          </p>
          
          <div className="grid grid-cols-3 gap-12">
            <form ref={formRef} action={formAction} className="col-span-2 flex flex-col gap-6">
              {state.message && (
                <div className={`p-4 rounded-[10px] ${state.success ? 'bg-[#e8f0e6] text-[#314158]' : 'bg-red-50 text-red-800'}`}>
                  {state.message}
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-base leading-6 tracking-[-0.31px] text-[#314158] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    required
                    className="w-full border border-[#cad5e2] rounded-[10px] px-4 py-3 text-base text-[#314158] placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-6 tracking-[-0.31px] text-[#314158] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full border border-[#cad5e2] rounded-[10px] px-4 py-3 text-base text-[#314158] placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-base leading-6 tracking-[-0.31px] text-[#314158] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full border border-[#cad5e2] rounded-[10px] px-4 py-3 text-base text-[#314158] placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-6 tracking-[-0.31px] text-[#314158] mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Main St, City, State"
                    className="w-full border border-[#cad5e2] rounded-[10px] px-4 py-3 text-base text-[#314158] placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-base leading-6 tracking-[-0.31px] text-[#314158] mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your inspection needs, preferred dates, or any specific concerns..."
                  className="w-full border border-[#cad5e2] rounded-[10px] px-4 py-3 text-base text-[#314158] h-[122px] placeholder:text-gray-500"
                />
              </div>
              
              <button type="submit" className="bg-[#7a9b76] text-white px-6 py-4 rounded-[10px] text-base hover:bg-[#6a8b66] transition-colors">
                Request Consultation
              </button>
            </form>
            
            <div className="flex flex-col gap-6">
              <div className="bg-[#f1f5f9] rounded-[14px] p-6">
                <h3 className="text-base leading-6 tracking-[-0.31px] text-[#0f172b] mb-4">
                  Contact Information
                </h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <PhoneOutlinedIcon sx={{ fontSize: 20, color: '#7a9b76', marginTop: '4px' }} />
                    <div>
                      <p className="text-sm leading-5 tracking-[-0.15px] text-[#45556c]">Phone</p>
                      <a href="tel:8018287100" className="text-base leading-6 tracking-[-0.31px] text-[#0f172b]">
                        (801) 828-7100
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <EmailOutlinedIcon sx={{ fontSize: 20, color: '#7a9b76', marginTop: '4px' }} />
                    <div>
                      <p className="text-sm leading-5 tracking-[-0.15px] text-[#45556c]">Email</p>
                      <a href="mailto:blockovich1@gmail.com" className="text-base leading-6 tracking-[-0.31px] text-[#0f172b]">
                        blockovich1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <LocationOnOutlinedIcon sx={{ fontSize: 20, color: '#7a9b76', marginTop: '4px' }} />
                    <div>
                      <p className="text-sm leading-5 tracking-[-0.15px] text-[#45556c]">Service Area</p>
                      <p className="text-base leading-6 tracking-[-0.31px] text-[#0f172b]">
                        Greater Wasatch Front and Surrounding Areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#e8f0e6] rounded-[14px] p-6">
                <h3 className="text-base leading-6 tracking-[-0.31px] text-[#0f172b] mb-2">
                  Quick Response
                </h3>
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#314158]">
                  I typically respond to all inquiries within 24 hours. For urgent requests, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a4a3a] py-12 px-[160.5px]">
        <div className="max-w-[1216px] mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium leading-[27px] tracking-[-0.44px] text-[#f1f5f9] mb-4">
                Mat Blockovich
              </h3>
              <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                Professional residential home inspector dedicated to providing thorough, unbiased inspections for homebuyers and sellers.
              </p>
            </div>
            
            <div>
              <h4 className="text-base leading-6 tracking-[-0.31px] text-[#f1f5f9] mb-4">
                Services
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                  Residential Home Inspections
                </p>
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                  Pre-Purchase & Pre-Listing Inspections
                </p>
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                  Construction Permitting & Inspection Consultation
                </p>
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                  New Construction & Remodel Inspection Support
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-base leading-6 tracking-[-0.31px] text-[#f1f5f9] mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                  Phone: (801) 828-7100
                </p>
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                  Email: blockovich1@gmail.com
                </p>
                <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2]">
                  Serving The Greater Wasatch Front and Surrounding Areas
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#6b5a4a] pt-8">
            <p className="text-sm leading-5 tracking-[-0.15px] text-[#cad5e2] text-center">
              © 2026 Mat Blockovich Home Inspections. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
