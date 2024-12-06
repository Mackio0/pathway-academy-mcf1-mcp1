import React from 'react'
import faqImg from "../../../assets/faq/heroSection.png";
import ContainerComponent from "../../../components/ContainerComponent.jsx";
import DynamicFAQSection from "../components/DynamicFAQSection.jsx";
import AskImage from '../../../assets/faq/ask.png'
import Input from "../../../components/Input.jsx";
import PrimaryBtn from "../components/PrimaryBtn.jsx";
import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "lucide-react";
import HeroSection from "../components/HeroSection.jsx";

const FaqPage = () => {
  return (
      <section>
         <HeroSection image={faqImg} title={'FAQs'}/>
          <ContainerComponent>
             <div className={'space-y-[40px] md:space-y-[80px] lg:space-y-[120px] mt-[40px] md:mt-[80px] lg:mt-[120px]'}>
                 <DynamicFAQSection/>

                 <div>
                     <h1 className={'text-[20px] font-semibold text-center mb-[20px]'}>Ask Anything</h1>
                     <div className={'space-y-[20px] lg:space-y-0 grid grid-cols-1 lg:grid-cols-12 gap-[50px] mx-auto'}>
                         <img className={'w-full h-[276px] md:h-[400px] lg:h-[550px] object-cover lg:col-span-5'} src={AskImage}/>

                         <div className={'lg:col-span-5'}>
                             <form className={'space-y-[20px]'}>
                                 <Input label={'Name'}/>
                                 <Input label={'Email'}/>
                                 <Input label={'Subject'}/>
                                 <Input label={'Phone'}/>
                                 <div>

                                     <label htmlFor={'message'}
                                            className={'text-headingPrimary text-sm'}>Message</label>
                                     <textarea id={'message'}
                                               className={'w-full h-[100px] mt-[10px] p-[10px] rounded-[6px] border border-stokeColor'}></textarea>
                                 </div>
                                 <PrimaryBtn className={'w-[154px] rounded-[6px] py-2'}>
                                     Submit
                                 </PrimaryBtn>
                             </form>
                             <div className={'flex items-center gap-[20px] my-[20px]'}>
                                 <h1 className={'text-center font-medium text-[20px] text-para1'}>Follow us on</h1>
                                 <ul className={'flex items-center space-x-2'}>
                                     <li className={'bg-para4 p-2 rounded-[6px]'}>
                                         <Facebook className={'text-amber-50'}/>
                                     </li>
                                     <li className={'bg-para4 p-2 rounded-[6px]'}>
                                         <Instagram className={'text-amber-50'}/>
                                     </li>
                                     <li className={'bg-para4 p-2 rounded-[6px]'}>
                                         <Twitter className={'text-amber-50'}/>
                                     </li>
                                     <li className={'bg-para4 p-2 rounded-[6px]'}>
                                         <Youtube className={'text-amber-50'}/>
                                     </li>
                                     <li className={'bg-para4 p-2 rounded-[6px]'}>
                                         <Linkedin className={'text-amber-50'}/>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
          </ContainerComponent>
      </section>
  )
}

export default FaqPage
