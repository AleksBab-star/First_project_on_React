export default function Forms(){
    return (
        <section className="bg-[#222831] px-24 py-65 font-['Poppins'] font-md text-4.2">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">

                    <div className="font-['Poppins'] max-w-150  ">
                        <h2 className="font-bold text-[64px] text-white mb-8 :">Got a project in <span className="text-[#00ADB5]">mind?</span></h2>
                        <img src="/images/Forms.png" alt="Picture"
                        className="w-115 h-auto"/>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-white mb-2 ">Your name</label>
                                    <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 rounded-lg bg-[#2E333B] text-white border border-transparent focus:outline-none focus:border-[#00ADB5]"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white mb-2 ">Your email</label>
                                    <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 rounded-lg bg-[#2E333B] text-white border border-transparent focus:outline-none focus:border-[#00ADB5]"/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white mb-2 ">Your Message</label>
                                <textarea
                                    id="massege"
                                    placeholder="Message"
                                    rows={14}
                                    className="w-full px-4 py-3 rounded-lg bg-[#2E333B] text-white border border-transparent focus:outline-none focus:border-[#00ADB5] resize-none">
                                </textarea>
                            </div>

                            <button
                                type="submit"
                                className="rounded-3xl font-bold bg-[#00ADB5] px-8 py-2.5 text-white hover:bg-[#009aa3] transition-colors flex items-center gap-2">
                                Send Message

                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_25_10046)">
                                        <path d="M25 2L14 13" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M25 2L18 22L14 13L5 9L25 2Z" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_25_10046" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_10046"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_10046" result="shape"/>

                                        </filter>
                                    </defs>
                                </svg>

                            </button>




                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}