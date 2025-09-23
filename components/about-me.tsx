import { title } from "process";
import Title from "./shared/title";
import { dataAboutMe, dataSlider } from "@/public/data";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";


const AboutMe=()=>{
    return(
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mi" subtitle="Conoceme"/>
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/*carusel*/}
                    <Carousel  opts= {{
                            align: "start"
                        }}
                        orientation="vertical" className="w-full max-w-xs h-fit">
                       
                       <CarouselContent className="-mt-1 h-[250px]">
                            {dataSlider.map((data)=> (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt="Image" width={250} height={400} className="w-full h-auto rounded-lg"/>
                                    </div>
                                </CarouselItem>
                            ))}
                       </CarouselContent>
                       <CarouselPrevious/>
                       <CarouselNext/>
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data)=>
                        <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                            {data.icon}
                            <p className="my-2">{data.name}</p>
                            <p className="text-gray-400">{data.description} </p>
                        </div>
                        )}
                    </div>
                    <p className="my-8">Soy Cristian Valdés, recién egresado de la carrera de Ingeniería en Sistemas Computacionales, con formación en desarrollo de software 
                        y gran interés en crear soluciones tecnológicas que optimicen procesos y mejoren la experiencia de los usuarios. Me apasiona el desarrollo web tanto en 
                        el backend como en el frontend, trabajando con frameworks modernos como Laravel, Angular y Next.js, además de herramientas como phpMyAdmin, Swagger y 
                        Tailwind CSS.</p>

                        <Button>
                            <Phone size={20} className="mr-2"/> hablamos
                        </Button>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;