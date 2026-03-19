export default function Forms(){
    return (
        <section className="bg-[#222831] px-24 max-md:px-8 py-65 max-md:py-16 font-['Poppins'] font-md text-4.2">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="font-['Poppins'] max-w-150 max-md:max-w-full">
                        <h2 className="font-bold text-[64px] max-md:text-[40px] text-white mb-8">
                            Got a project in <span className="text-[#00ADB5]">mind?</span>
                        </h2>
                        <img src="/images/Forms.png" alt="Picture" className="w-full max-w-[460px] h-auto"/>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-white mb-2">Your name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-4 py-2 rounded-lg bg-[#2E333B] text-white border border-transparent focus:outline-none focus:border-[#00ADB5]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white mb-2">Your email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 rounded-lg bg-[#2E333B] text-white border border-transparent focus:outline-none focus:border-[#00ADB5]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Message"
                                    rows={14}
                                    className="w-full px-4 py-3 rounded-lg bg-[#2E333B] text-white border border-transparent focus:outline-none focus:border-[#00ADB5] resize-none"
                                />
                            </div>

                            <div className="max-md:flex max-md:justify-center">
                                <button
                                    type="submit"
                                    className="rounded-3xl font-bold bg-[#00ADB5] px-8 py-2.5 text-white flex items-center gap-2 whitespace-nowrap tarnsition-all duration-300 hover:scale-105 hover:brightness-110">
                                    Send Message
                                    <svg className="max-md:hidden" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
