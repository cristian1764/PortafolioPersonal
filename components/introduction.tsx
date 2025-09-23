import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">
                    Hola mi nombre es
                </h3>
                <h1 className=" text-4xl font-bold mb-3">
                    Cristian Valdes 👨‍💻
                </h1>
                <h2 className=" text-2xl text-gray-400">Frontend Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2"/> Contacta conmigo
                        </Link>

                          <Link className={buttonVariants({variant:'secondary'})} href="/cv_yo.pdf" target="_blank">

                            <Paperclip className="mr-2"/> Descargar CV
                        </Link>
                    </div>

                </div>
                <br />
                    <Image 
                        src="/yo.jpg" 
                        alt="Profile pic" 
                        width={300} 
                        height={300} 
                        quality={100} 
                        priority
                        className="mx-auto rounded-full shadow-lg object-cover"
                    />

            </div>
        </Container>
    );
}

export default Introduction;

