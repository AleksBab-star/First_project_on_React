import {motion} from 'framer-motion'
export default function About_me(){
    return (
        
        <section 
        className="bg-[#222831] flex items-center justify-around gap-15 min-h-[850px] max-md:h-auto px-10 max-md:flex max-md:flex-col-reverse max-md:px-8 max-md:py-16">
            <motion.div className=""
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once:true, amount: 0.9}}>
                <h1 className="font-['Poppins'] font-bold text-white text-[64px] max-md:text-[48px]">About <span className="text-[#00ADB5]">me</span></h1>
                <p className="font-['Poppins'] font-light text-lg text-[#BBBCBF] leading-7 max-w-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Curabitur tempus urna at turpis condimentum lobortis.... <span className="font-bold "> Read more</span></p>
            </motion.div>
            <motion.img 
            initial={{ opacity:0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.6}}
            viewport={{once:true, amount:0.9}}
            src="/images/About_me_img.png" alt="About Me"
            className="max-w-[500px] max-md:w-full"/>
        </section>
    )
}