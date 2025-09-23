import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Link from "next/link";

const Footer =()=>{
    return(
        <footer className="max-w3xl mx-auto">
            <div className="md:flex md:justify-between">
               <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0 flex items-center gap-3 justify-center">
                        <img 
                        className="rounded-full" 
                        src="image.ico" 
                        alt="icon" 
                        width={50} 
                        height={50} 
                        /> 
                        Cristian Valdes
                    </h4>
                </div>

                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">Sobre mi</Link>
                    <Link href="#services">Que ofresco </Link>
                    <Link href="#portfolio">Portafolio</Link>
                    <Link href="#contact">Contactarme</Link>
                </div>
            </div>
            <Separator/>
            <div className="text-center">
                &copy; 2025 | Cristian Portafoli </div>
        </footer>
    );
}
export default Footer;