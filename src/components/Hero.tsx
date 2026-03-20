export default  function Hero(){
    return (
        <section className="bg-[#222831] flex items-center justify-around gap-5 min-h-[850px] max-md:py-6 px-10 max-md:flex max-md:flex-col-reverse max-md:h-auto">
            <div className="flex flex-col gap-12 max-md:gap-6">
                <h1 className="font-['Poppins'] font-bold text-[96px] max-md:text-[48px] max-w-[586px] leading-24 max-md:leading-16 text-white">CREATIVE UI <span className="text-[#00ADB5]">DESIGNER</span> </h1>
                <div className="flex gap-6">
                    <button className="rounded-3xl font-bold bg-[#00ADB5] px-[32px] py-2.5 text-white whitespace-nowrap tarnsition-all duration-300 hover:scale-105 hover:brightness-110">Hire me</button>
                    <button className="flex rounded-3xl font-bold bg-[#333840] px-[32px] py-2.5 text-white gap-2.5 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:brightness-110">
                        Download

                        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                </div>

            </div>

            <img className="max-w-[500px] max-md:w-full max-md:max-w-[320px] max-md:mx-auto max-md:my-2" src="/images/hero-img.svg" alt="image"/>
        </section>
    )
}