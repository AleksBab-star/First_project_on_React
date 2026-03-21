import {motion} from 'framer-motion'
export default function Recent_works(){
    return (
        
        <section className="bg-[url('/images/Background_elements.png')] bg-[#222831] py-65 px-30 max-md:px-6 max-md:py-14 font-['Poppins'] font-bold text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className=" font-bold  text-[64px] mb-4 max-md:text-[40px] ">My recent <span className="text-[#00ADB5]">works</span></h2>

                <div className=" text-[20px] flex gap-4 max-md:gap-2 mb-12 max-md:text-[15px] max-md:flex-wrap">
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full max-md:py-2 max-md:px-6">All</button>
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full max-md:py-2 max-md:px-6">UI</button>
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full max-md:py-2 max-md:px-6">UX</button>
                    <button className="bg-[#2D333B] py-2.5 px-8 rounded-full max-md:py-2 max-md:px-6">Web Designn</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                    <motion.div 
                    initial={{ opacity: 0, x: 400 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once:true, amount: 0.9}}
                    className="bg-[#2D333B]/50 backdrop-blur-sm rounded-2xl p-6 border-spacing-1.5 border-[#00ADB5] flex items-center justify-center">
                        <img
                            src="/images/Picture1.png"
                            alt="Proect-1"
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, x: 400 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once:true, amount: 0.9}}
                    className="bg-[#2D333B]/50 backdrop-blur-sm rounded-2xl p-6 border-spacing-1.5 border-[#00ADB5] flex items-center justify-center">
                        <img
                            src="/images/Picture2.png"
                            alt="Proect-2"
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once:true, amount: 0.7}}
                    className="bg-[#2D333B]/50 backdrop-blur-sm rounded-2xl p-6 border-spacing-1.5 border-[#00ADB5] flex items-center justify-center">
                        <img
                            src="/images/Picture3.png"
                            alt="Proect-3"
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}