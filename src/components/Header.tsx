export default function Header() {
    return (
        <section className="bg-[#222831] h-18.75 flex items-center justify-between px-24 py-12 max-md:justify-center">
            <h1 className=" font-['Oswald'] font-bold text-2xl text-white leading-[100%] max-md:text-3xl">SaulDesign</h1>

            <ul className="font-['Poppins'] font-normal text-white text-[18px] leading-[100%] flex gap-12 items-center max-md:hidden ">
                <a href="#about">About me</a>
                <a href="#works">My works</a>
                <a href="#forms">Forms</a>
                <a href="#footer">Contacts</a>
            </ul>
        </section>
    );
}