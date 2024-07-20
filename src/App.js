
import './App.css';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';






const faqItems = [
  {
    id: 'accordion1',
    question: 'What is Hero Token?',
    answer: 'Hero Token is a cryptocurrency designed for those who want to innovate and lead in the financial world. Unlike typical cryptocurrencies, Hero Token aims to stand out by pushing boundaries with next-level technology and providing a secure, community-driven platform.'
  },
  {
    id: 'accordion2',
    question: 'How do I buy Hero Token?',
    answer: 'You can buy Hero Token through the HeroWallet app. Simply download the app, set up your account, and use the app to purchase Hero Tokens directly or transfer them from another wallet.'
  },
  {
    id: 'accordion3',
    question: 'Is Hero Token secure?',
    answer: 'Absolutely. We\'ve ramped up our security to ensure your investment is safe. With state-of-the-art technology, we keep your Hero Tokens secure, giving you peace of mind.'
  },
  {
    id: 'accordion4',
    question: 'Can I use Hero Token for everyday purchases?',
    answer: 'While Hero Token\'s primary focus is on being a valuable asset in the financial technology space, we\'re constantly expanding its usability. Keep an eye on updates for when Hero Token can be used for everyday purchases.'
  },
  {
    id: 'accordion5',
    question: 'What makes Hero Token different from other cryptocurrencies?',
    answer: 'Hero Token is not just about financial transactions; it\'s about being part of a movement. With a focus on innovation, security, and a supportive community, Hero Token offers a unique blend that\'s hard to find elsewhere.'
  },
  {
    id: 'accordion6',
    question: 'How can I store my Hero Tokens?',
    answer: 'You can store your Hero Tokens securely in the HeroWallet app. Ensure you keep your wallet credentials safe and private to prevent unauthorized access.'
  }
];


function App() {
  return (
    <div className="App">
      <header className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-16 py-4  text-white">
        <a className='text-2xl text-sky-400 font-bold'>Hero</a>
        <div className="grow flex items-center  xl:pr-[28px]">
          <ul className="hidden md:flex items-center gap-4  justify-evenly mx-auto border border-blue-400 rounded-full px-1 lg:px-0 font-jakarta backdrop-blur-md w-full max-w-[578px] text-sm h-[50px] lg:h-[57px]">
            {['AI Search', 'Wallet', 'Market', 'Merchant Services', 'Browser', 'Support'].map((item) => (
              <a href={`/${item.toLowerCase().replace(' ', '-')}`} key={item}>
                <li className="h-full flex font-bold flex-col items-center text-[14px] justify-center mx-2 cursor-pointer transition-colors duration-200 group overflow-hidden relative">
                  <p className="translate-y-[10px] group-hover:-translate-y-10 opacity-100 group-hover:opacity-0 transition-all duration-500 group-hover:rotate-x group-hover:scale-75 font-[400] text-white">
                    {item}
                  </p>
                  <p className="translate-y-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-[10px] transition-all duration-300 text-sky-200 scale-75 group-hover:scale-100 font-[500]">
                    {item}
                  </p>
                </li>
              </a>
            ))}

          </ul>
        </div>
        <div className="flex items-center gap-6 hidden md:block">
          <div className="hidden">
            <img className="w-[35px] h-[36px] rounded-full" src="https://hero.io/assets/user-icon.svg" alt="hero user image" />

          </div>
          <a href="https://wallet.hero.io/signin" target="_blank" rel="noopener noreferrer">
            <div className="text-sm font-bold flex w-full lg:max-w-fit h-[50px]">
              <button className="outline-none border-none bg-pinkPrimary text-white rounded-full w-full px-6 flex text-base shadow-xl hover:opacity-90">
                <span className="m-auto object-fill">Wallet</span>
              </button>
            </div>
          </a>
        </div>
        <div className="md:hidden cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </header>

      <div className="w-full h-fit min-h-[800px] relative flex flex-col items-center overflow-hidden z-20">
        <div className="bg-gradient-to-b from-slate-900 via-slate-900/20 to-transparent min-h-[300px] absolute inset-0" />
        <div className="absolute inset-0">

          <img src="https://hero.io/assets/images/ai-hero-city.png" alt="Hero Token Background City" className="w-full h-full hidden sm:block 2xl:hidden" />
          <img src="https://hero.io/assets/images/hero-token-big-size1.png" alt="Hero Token Background City" className="w-full h-full hidden 2xl:block object-cover" />
          <img src="https://hero.io/assets/images/ai-hero-city-sm.png" alt="Hero Token Background City" className="w-full h-full sm:hidden" />
        </div>
        <div className="absolute inset-0">
          <img src="https://hero.io/assets/images/ai-overlay.png" alt="Hero Token Background City" className="w-full h-full hidden sm:block 2xl:hidden" />
          <img src="https://hero.io/assets/images/ai-overlay-sm.png" alt="Hero Token Background City" className="w-full h-full sm:hidden" />
        </div>
        <div className="absolute inset-0 2xl:hidden">
          <img src="https://hero.io/assets/images/Frame1.png" alt="Hero Token Background City" className="w-auto h-auto mx-auto" />
        </div>
        <section className="flex flex-col gap-14 sm:gap-4 items-center pt-[9rem] xl:pt-[130px] 2xl:pt-[139px]">
          <div className="grow text-center w-full container 3xl:max-w-[1500px] mx-auto h-full px-4 lg:px-2 xl:px-[5vw] 2xl:px-0 z-20 text-white">
            <h1>
              <span className="text-[43px] md:text-[56px] font-bold">
                <span className="text-blue-500">Hero<span className="text-white">Ai</span></span> Token
              </span>
              <span className="max-w-[200px] md:max-w-fit mx-auto leading-7 text-[24px] md:text-[36px] font-bold mt-4 md:mt-5 block">
                Cryptocurrency for the <span className="text-blue-500">brave.</span>
              </span>
            </h1>
            <p className="max-w-[300px] md:max-w-[604px] mx-auto mt-4 md:mt-8 text-[13px] md:text-base">
              Step up with Hero Token; not just another cryptocurrency but a challenge to those eager to innovate in finance. Hero Token is for the brave, the trailblazers. It is your chance to back a future where boldness, innovation, and trailblazing are paramount. Let's make an impact. Are you in?
            </p>
            <div className="flex flex-col md:flex-row items-center max-w-[340px] md:max-w-[670px] lg:max-w-[774px] my-10 gap-[2rem] md:gap-4 mx-auto relative">
              <div id="textbox" className="relative grow w-full md:w-fit border border-sky-500/40 h-[48px] md:h-[60px] bg-black px-5 flex items-center rounded-full z-20">
                <input type="email" placeholder="Enter your email address for a private round" className="text-sm placeholder-gray-500 bg-transparent outline-none focus:ring-0 border-none h-full w-full text-center md:text-left" />
              </div>
              <button className="flex items-center justify-center gap-1 rounded-full border outline-none bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l font-bold px-3 text-sm md:text-base 2xl:text-[23px] h-[48px] md:h-[60px] min-w-[160px] md:min-w-[200px]">
                Register
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center relative -z-10">
            <div className="top-0 -translate-y-[57%] w-full h-[430px] rounded-full bg-gradient-radial from-blue-500/40 via-blue-500/30 to-70% to-transparent sm:hidden absolute" />
            <img src="https://hero.io/assets/images/hero-token-art.png" alt="Hero Token Bot" className="scale-125 md:scale-100 md:w-[60%] 2xl:w-[80%] h-auto -translate-x-[18px] sm:-translate-x-[28px] 2xl:-translate-x-[39px] -translate-y-[10%] md:translate-y-0" />
            <img src="https://hero.io/assets/images/hero-shield-shadow.png" alt="Hero Token Bot" className="h-auto absolute mx-auto -translate-y-[57%] md:translate-y-10 2xl:translate-y-0 hidden sm:block 2xl:hidden" />
            <img src="https://hero.io/assets/images/shield-sm.png" alt="Hero Token Bot" className="h-auto absolute mx-auto -translate-y-[70%] sm:hidden" />
          </div>
        </section>
      </div>

      <section className="w-full relative flex flex-col items-center pt-10  3xl:max-w-[1500px] mx-auto px-4 lg:px-2 xl:px-[5vw] 2xl:px-0 bg-[#070B13] ">
        <div className="hero-token-top-gradient container h-[300px] md:h-[460px] absolute top-0 -translate-y-[163px] md:-translate-y-[290px]  w-full" style={{ zIndex: 22 }} />

        <div className="max-w-[1600px] w-full h-full relative mx-auto flex-col">
          <div className="absolute translate-y-[40%] left-[14px] hidden 2xl:block" style={{ zIndex: 25 }}>
            <img src="https://hero.io/assets/images/lines-left.svg" alt="Light Lines" className="w-[70%] 2xl:w-fit" />
          </div>
          <div className="absolute translate-y-[35%] right-0 hidden 2xl:block" style={{ zIndex: 25 }}>
            <img src="https://hero.io/assets/images/lines-right.svg" alt="Light Lines" className="w-[70%] 2xl:w-fit" />
          </div>
        </div>

        <div className="container text-white 3xl:max-w-[1500px] mx-auto h-full px-4 lg:px-2 xl:px-[5vw] 2xl:px-0 relative" style={{ zIndex: 24 }}>
          <p className="-translate-y-[100px] sm:-translate-y-[50px] text-[37px] sm:text-[43px] md:text-[50px] font-bold text-center max-w-[400px] leading-10 md:leading-[47px] md:max-w-[754px] mx-auto">
            How <br className="block md:hidden" /> <span className="text-sky-400">Hero</span>Ai Token <br /> changes the <br className="md:hidden" /> game.
          </p>

          <div className="absolute inset-0 hidden md:block" style={{ zIndex: -2 }}>
            <img src="https://hero.io/assets/images/token-shadow-blur.svg" className="w-full h-full object-cover" />
          </div>
          <div className="token-items-shadow-gradient absolute inset-0 hidden md:block" style={{ zIndex: -1 }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-y-[50px] md:gap-x-[5px] max-w-[1100px] mx-auto xl:translate-x-[72px] -mt-[76px] md:mt-0">
            {[
              {
                imgSrc: 'https://hero.io/assets/images/Tech.svg',
                title: 'Next-Level Tech',
                description: `With Hero Token, you're not just investing in another crypto. You're getting into something that's pushing the boundaries. We're leveraging tech that's not just new but genuinely useful, ensuring you're part of the next wave in finance.`,
              },
              {
                imgSrc: 'https://hero.io/assets/images/Security.svg',
                title: `Security that doesn't sleep`,
                description: `The online world can be a bit like the Wild West. That's why we've beefed up our security to fortress levels. Your investment is locked down tight, giving you peace of mind to focus on the important stuff.`,
              },
              {
                imgSrc: 'https://hero.io/assets/images/community.svg',
                title: 'A community that got your back',
                description: `Jumping into Hero Token means you're joining a family. It's a place where everyone is on the same journey, ready to share their wins, losses, and everything in between. Got questions? Need advice? You'll find your answers here, with folks who genuinely care.`,
              },
              {
                imgSrc: 'https://hero.io/assets/images/Geared.svg',
                title: 'Geared for growth',
                description: `We're all about growth, not just in terms of portfolio size but in the impact we're making. Hero Token is a chance to be part of something that's growing in value, vision, and community. If you're looking to invest in a future where your money does more, you're in the right spot.`,
              },].map((item, index) => (
                <div className="flex flex-col items-center text-center md:text-left md:items-start" key={index}>
                  <img src={item.imgSrc} alt={item.title} className="w-[219px] h-[238px] md:-translate-x-[37px]" />
                  <div className="md:pl-20 -m-10 space-y-4">
                    <p className="text-[28px] text-sky-400 md:text-[20px] max-w-[250px] md:max-w-fit md:w-fit mx-auto md:mx-0 font-bold text-hero-blue-500">
                      {item.title}
                    </p>
                    <p className="max-w-[350px] md:max-w-[417px] text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="w-full relative flex flex-col justify-end overflow-hidden z-20 md:pb-5 -mt-[138px] md:mt-0">
          <div className="bg-gradient-to-t from-hero-slate-dark/0 to-hero-slate-dark via-hero-slate-dark h-[200px] 2xl:h-[120px] absolute top-0 w-full z-20" />

          <div className="inset-0 flex items-center justify-center -z-10">
            <img src="https://hero.io/assets/images/hero-fly-city.png" alt="Hero Fly City" className="w-full max-h-[1000px] hidden md:block 2xl:hidden object-cover" />
            <img src="https://hero.io/assets/images/hero-token-big-size2.png" alt="Hero Fly City" className="w-full h-full object-cover hidden 2xl:block min-h-[1200px] max-h-[2000]" />
            <img src="https://hero.io/assets/images/mobile-hero-flu-city-bg.png" alt="Hero Fly City" className="w-full max-h-[1000px] md:hidden object-cover" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center -z-10 2xl:hidden">
            <img src="https://hero.io/assets/images/hero-fly-bg.png" alt="Hero Fly City" className="w-full opacity-50 h-auto hidden md:block" />
            <img src="https://hero.io/assets/images/mobile-hero-fly-circle.png" alt="Hero Fly City" className="w-full h-auto md:hidden" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center -z-10 2xl:hidden">
            <img src="https://hero.io/assets/images/mobile-hero-fly-overlay.png" alt="Hero Fly City" className="w-full h-auto md:hidden" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img src="https://hero.io/assets/images/HeroTokenFlyMain.svg" alt="Hero Fly City" className="w-full scale-75 h-auto hidden md:block" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center -z-20 2xl:hidden">
            <img src="https://hero.io/assets/images/mobile-light-bg.png" alt="Hero Fly City" className="w-full h-auto md:hidden" />
          </div>

          <div className="absolute xl:-translate-y-20 2xl:-translate-x-20 inset-0 flex items-center justify-center z-0">
            <img src="https://hero.io/assets/images/hero-fly.png" alt="Hero Fly City" className="scale-75 2xl:scale-100 herotokenbot transition-all duration-200" />
          </div>

          <div className="absolute bottom-14 2xl:bottom-5 left-0 right-0">
            <div className="absolute right-0 top-0 bottom-0 w-[17%] bg-gradient-to-r from-hero-slate-dark/20 via-hero-slate-dark to-hero-slate-dark z-20 hidden 3xl:block" />
            <div className="absolute left-0 top-0 bottom-0 w-[17%] bg-gradient-to-l from-hero-slate-dark/20 via-hero-slate-dark to-hero-slate-dark z-20 hidden 3xl:block" />
          </div>

          <div className="bg-gradient-to-b from-hero-slate-dark/0 to-hero-slate-dark via-hero-slate-dark/40 h-[100px] sm:h-[300px] 2xl:h-[100px] absolute bottom-0 w-full" />
        </div>

        <div className="md:block absolute -bottom-[200px] lg:-bottom-[263px] 2xl:-bottom-[341px] 3xl:-bottom-[421px] left-0 -right-0  3xl:max-w-[2000px]  h-full px-4  items-center place-content-center pb-[35px] xl:py-20 gap-8 z-20">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {[
              {
                title: 'Why should you choose a HeroAiToken?',
                description: `So, you’re wondering why Hero Token out of all the options, right? Here’s the deal. Hero Token isn’t just another drop in the crypto ocean. We’re offering something that genuinely stands out, thanks to our focus on innovation, security, and community. It’s all about being part of a movement that values boldness and forward-thinking. If you’re all about backing projects that dare to be different, Hero Token is where you want to be.`,
                imgSrc: 'https://hero.io/assets/images/card-frame.svg',
                mobileImgSrc: 'https://hero.io/assets/images/mobile-box.svg',
              },
              {
                title: 'How to get started with your first HeroAiToken?',
                description: `Getting your hands on your first Hero Token is straightforward. First things first, you’ll need a HeroWallet. It’s our go-to for storing, sending, and receiving Hero Tokens securely. Just download the HeroWallet app, set up your account, and you’re good to go. From there, buying Hero Tokens is a breeze. You can purchase directly through the app or transfer from another wallet. We’ve made the process as simple as possible so you can get started without a hitch.`,
                imgSrc: 'https://hero.io/assets/images/card-frame.svg',
                mobileImgSrc: 'https://hero.io/assets/images/mobile-box.svg',
              },
              {
                title: 'Ready to make a bold move?',
                description: `Feeling pumped about Hero Token and ready to dive in? Awesome. Making that bold move starts with a simple step: getting your Hero Token. It’s a statement that you’re ready to back innovation and be part of a community that’s shaping the future of finance. Whether you’re new to crypto or looking to add something unique to your portfolio, Hero Token is ready for you. Let’s make some waves together. Are you in?`,
                imgSrc: 'https://hero.io/assets/images/card-frame.svg',
                mobileImgSrc: 'https://hero.io/assets/images/mobile-box.svg',
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="md:w-[490px] text-white h-[340px] md:h-[340px] flex flex-col relative overflow-hidden items-center justify-center sm:px-[100px] md:p-10 mx-auto md:mx-0">
                  <div className="absolute inset-0">
                    <img
                      src={item.imgSrc}
                      className="w-full aspect-[10/9] sm:aspect-[30/17] md:aspect-auto h-auto hidden md:block"
                      alt={item.title}
                    />
                    <img
                      src={item.mobileImgSrc}
                      className="w-full max-w-[340px] mx-auto md:hidden"
                      alt={item.title}
                    />
                  </div>
                  <div className="z-10 w-full space-y-4">
                    <div className="text-[18px] mx-auto md:mx-0 max-w-[300px] md:max-w-fit md:text-[23px] font-bold leading-7 text-center md:text-left">
                      <p>{item.title}</p>
                    </div>
                    <p className="text-[12px] sm:text-[13px] md:text-sm text-center md:text-left max-w-[280px] md:max-w-fit mx-auto md:mx-0">
                      {item.description} </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      
      
       <section className="pb-20 relative overflow-hidden">
     
        <section class="xl:min-h-[980px] w-full h-fit pb-40 flex flex-col">
          <div class="absolute inset-0 overflow-hidden">
            <img src="https://hero.io//assets/images/token-FAQ-bg.png" alt="Hero Token Background City" class="w-full h-full hidden sm:block 2xl:hidden object-fill min-h-[1200px]" />
          <img src="https://hero.io//assets/images/hero-token-big-size3.png" alt="Hero Token Background City" class="w-full h-full hidden 2xl:block object-cover min-h-[1300px] 3xl:min-h-[1000px]" />
          <img src="https://hero.io//assets/images/hero-token-mobile.png" alt="Hero Token Background City" class="w-full h-full sm:hidden" /></div>

          <div class="container 3xl:max-w-[1500px] mx-auto  px-4 lg:px-2 xl:px-[5vw] 2xl:px-0 z-30"><div class="flex items-center gap-3 pb-10 md:pb-20  lg:-translate-x-[8px]"><div class="grow h-[2px]  bg-gradient-to-l from-hero-blue-622/40 to-transparent"></div>
            <p class="text-[23px] md:text-[36px] font-bold  text-center leading-10 "><span class="text-hero-blue-478">Hero</span>Ai Token FAQ’s</p>
            <div class="grow h-[2px] bg-gradient-to-r from-hero-blue-622/40 to-transparent"></div></div>
            <div class="max-w-[741px] mx-auto space-y-2"><div class="bg-gray-300 text-white rounded-[30px] px-5 pb-0 group"><input id="accordion1" name="FAQ" type="radio" class="appearance-none hidden peer" />
              <label for="accordion1" class="flex items-center gap-3 relative peer-checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">What is Hero Token?</p>
                <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
              <div class=" h-0 transition-all duration-300 peer-checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >Hero Token is a cryptocurrency designed for those who want to innovate and lead in the financial world. Unlike typical cryptocurrencies, Hero Token aims to stand out by pushing boundaries with next-level technology and providing a secure, community-driven platform.</p></div>
              <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion2" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion2" class="flex items-center gap-3 relative peer-checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">How do I buy Hero Token?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >You can buy Hero Token through the HeroWallet app. Simply download the app, set up your account, and use the app to purchase Hero Tokens directly or transfer them from another wallet.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion3" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion3" class="flex items-center gap-3 relative peer-checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">Is Hero Token secure?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >Absolutely. We've ramped up our security to ensure your investment is safe. With state-of-the-art technology, we keep your Hero Tokens secure, giving you peace of mind.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion4" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion4" class="flex items-center gap-3 relative peer-/checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">Can I use Hero Token for everyday purchases?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-/checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >While Hero Token's primary focus is on being a valuable asset in the financial technology space, we're constantly expanding its usability. Keep an eye on updates for when Hero Token can be used for everyday purchases.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion5" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion5" class="flex items-center gap-3 relative peer-/checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">What makes Hero Token different from other cryptocurrencies?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-/checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >Hero Token is not just about financial transactions; it's about being part of a movement. With a focus on innovation, security, and a supportive community, Hero Token offers a unique blend that's hard to find elsewhere.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion6" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion6" class="flex items-center gap-3 relative peer-/checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">How can I store my Hero Tokens?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-/checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >The best way to store your Hero Tokens is in a HeroWallet, our dedicated digital wallet. It's designed specifically for Hero Tokens, ensuring maximum security and ease of use.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion7" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion7" class="flex items-center gap-3 relative peer-/checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">What is the HeroWallet?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-/checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >HeroWallet is a digital wallet app developed for storing, sending, and receiving Hero Tokens securely. It's your go-to for managing your Hero Tokens efficiently and safely.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion8" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion8" class="flex items-center gap-3 relative peer-/checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">Can I mine Hero Token?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-/checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >Hero Token is not designed for mining. Instead, it focuses on providing value through its innovative technology and community-driven approach. Stay tuned for other ways to get involved and earn Hero Tokens.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div><div class="bg-hr-gray-320/10 rounded-[30px] px-5 pb-0 group"><input id="accordion9" name="FAQ" type="radio" class="appearance-none hidden peer" />
                <label for="accordion9" class="flex items-center gap-3 relative peer-/checked:[&amp;>span]:rotate-180"><div><div class="w-[8px] h-[8px] rounded-full bg-hr-blue-100"></div></div>
                  <p class="grow pt-4 pb-5 sm:pt-5 sm:pb-6 sm:text-xl font-bold text-hr-blue-100 cursor-pointer">Is there a limit to how many Hero Tokens I can buy?</p>
                  <span class="transition-all duration-150"><div class="bg-hr-gray-320/40 w-[18px] h-[18px] sm:w-[23px] sm:h-[23px] rounded-full flex cursor-pointer transition-all duration-150"><svg c="" class="m-auto w-[11px] sm:h-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none"><path d="M0.752507 1.59279C0.752547 1.77922 0.82664 1.958 0.958489 2.08981L5.17652 6.30784C5.30835 6.43963 5.48713 6.51367 5.67354 6.51367C5.85995 6.51367 6.03873 6.43963 6.17057 6.30784L10.3886 2.08981C10.5167 1.95722 10.5875 1.77964 10.5859 1.59532C10.5843 1.41099 10.5104 1.23467 10.38 1.10433C10.2497 0.973984 10.0734 0.90005 9.88904 0.898448C9.70472 0.896847 9.52714 0.967705 9.39455 1.09576L5.67354 4.81677L1.95254 1.09576C1.85422 0.997476 1.72897 0.930546 1.59262 0.903433C1.45627 0.87632 1.31494 0.890241 1.1865 0.943437C1.05807 0.996633 0.948282 1.08672 0.871033 1.2023C0.793784 1.31788 0.752537 1.45377 0.752507 1.59279Z" fill="#F0F7FB"></path></svg></div></span></label>
                <div class=" h-0 transition-all duration-300 peer-/checked:h-fit overflow-hidden -mt-2"><p class="text-sm sm:text-[1rem] pb-5" >No, there's no set limit to how many Hero Tokens you can buy. However, we recommend keeping transactions within reasonable limits to ensure network stability and security.</p></div>
                <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div></div></div></div>

          <div class="bg-gradient-to-b to-transparent from-hero-slate-dark via-hero-slate-dark h-[300px]  absolute top-0 left-0 right-0  w-full "></div></section>
        <div class="absolute bottom-0 left-0 right-0 z-30"><footer class="w-full pt-10  h-fit"><div class="container 3xl:max-w-[1500px] mx-auto  px-4 lg:px-2 xl:px-[5vw] 2xl:px-0"><div class="flex flex-col gap-4 sm:flex-row items-center justify-center text-sm text-white pt-7 pb-5"><div class="flex sm:items-center gap-4"><a href="/about"><p class="pb-1 border-b border-transparent hover:border-white">About</p></a>
          <a href="/terms-conditions"><p class="pb-1 border-b border-transparent hover:border-white">Terms &amp; Conditions</p></a></div>
          <div class="flex sm:items-center gap-4"><a href="/policy"><p class="pb-1 border-b border-transparent hover:border-white">Privacy policy</p></a>
            <a href="/cookie-policy"><p class="pb-1 border-b border-transparent hover:border-white">Cookie Policy</p></a></div></div>
          <div><div class="flex justify-center space-x-6 mb-6"><a target="_blank" href="https://x.com/HeroAisearch" class="social-icon" title="Twitter:HeroAisearch"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" fill="#bababa"><path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path></svg></a>

            <a target="_blank" href="https://t.me/heros" class="social-icon" title="Telegram:heros"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" fill="#bababa"><path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path></svg></a>

            <a target="_blank" href="https://medium.com/@hero.io" class="social-icon " title="Medium:hero.io"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" class="medium-icon"><path fill="#030c16" d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path></svg></a>

            <a target="_blank" href="https://www.linkedin.com/company/heroaisearch/" class="social-icon" title="Linkedin:heroaisearch"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" fill="#bababa"><path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path></svg></a></div></div>
          <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <p class="text-[12px] sm:text-[13px] text-center py-6 text-hr-gray-320">Copyright © 2024 Hero.io - All rights reserved.</p></div></footer></div>
        <div class="bg-gradient-to-b from-transparent to-hero-slate-dark/80 h-[200px] z-20 absolute bottom-0  w-full "></div> </section >

      {/* <div className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">

          <h2 className="text-3xl font-bold mb-8 text-center">
            HeroAi Token FAQ's
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 'accordion1',
                question: 'What is Hero Token?',
                answer: 'Hero Token is a cryptocurrency designed for those who want to innovate and lead in the financial world. Unlike typical cryptocurrencies, Hero Token aims to stand out by pushing boundaries with next-level technology and providing a secure, community-driven platform.'
              },
              {
                id: 'accordion2',
                question: 'How do I buy Hero Token?',
                answer: 'You can buy Hero Token through the HeroWallet app. Simply download the app, set up your account, and use the app to purchase Hero Tokens directly or transfer them from another wallet.'
              },
              {
                id: 'accordion3',
                question: 'Is Hero Token secure?',
                answer: 'Absolutely. We\'ve ramped up our security to ensure your investment is safe. With state-of-the-art technology, we keep your Hero Tokens secure, giving you peace of mind.'
              },
              {
                id: 'accordion4',
                question: 'Can I use Hero Token for everyday purchases?',
                answer: 'While Hero Token\'s primary focus is on being a valuable asset in the financial technology space, we\'re constantly expanding its usability. Keep an eye on updates for when Hero Token can be used for everyday purchases.'
              },
              {
                id: 'accordion5',
                question: 'What makes Hero Token different from other cryptocurrencies?',
                answer: 'Hero Token is not just about financial transactions; it\'s about being part of a movement. With a focus on innovation, security, and a supportive community, Hero Token offers a unique blend that\'s hard to find elsewhere.'
              },
              {
                id: 'accordion6',
                question: 'How can I store my Hero Tokens?',
                answer: 'You can store your Hero Tokens securely in the HeroWallet app. Ensure you keep your wallet credentials safe and private to prevent unauthorized access.'
              },].map((item, index) => (
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                  <p>
                    {item.answer}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div> */}







    </div>
  );
}

export default App;
