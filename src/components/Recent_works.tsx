export default function Recent_works(){
    return (
        <section className="bg-[url('/images/Background_elements.png')] bg-[#222831] py-65 px-30 font-['Poppins'] font-bold text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className=" font-bold  text-[64px] mb-4">My recent <span className="text-[#00ADB5]">works</span></h2>

                <div className=" text-[20px] flex gap-4 mb-12  ">
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full">All</button>
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full">UI</button>
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full">UX</button>
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full">Web Designn</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-[#2D333B]/50 backdrop-blur-sm rounded-2xl px-10 py-13 border-spacing-1.5 border-[#00ADB5]">
                        <img
                            src="/images/Picture1.png"
                            alt="Proect-1"
                            className="w-auto h-40 object-cover rounded-xl"
                        />
                    </div>

                    <div className="bg-[#2D333B]/50 backdrop-blur-sm rounded-2xl pr-6 py-13 border-spacing-1.5 border-[#00ADB5]">
                        <img
                            src="/images/Picture2.png"
                            alt="Proect-2"
                            className="w-auto h-37 object-cover rounded-xl"
                        />
                    </div>

                    <div className="bg-[#2D333B]/50 backdrop-blur-sm rounded-2xl px-6 py-13 border-spacing-1.5 border-[#00ADB5]">
                        <img
                            src="/images/Picture3.png"
                            alt="Proect-3"
                            className="w-auto h-43 object-cover rounded-xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}