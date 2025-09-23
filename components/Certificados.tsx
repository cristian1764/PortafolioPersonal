import { dataCertifiquey, dataPortfolio } from "@/public/data";
import Title from "./shared/title";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Certifiquey =()=>{
    return(
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="certificado">
            <Title title="Certificados" subtitle="💻🎓Habilidades obtenidas📖"/>

            <div className="grid md:grid-cols-3 gap-4 mt-3">
                {dataCertifiquey.map((data)=>(
                    <div key={data.id}>
                        <h3 className="text-xl mb-4">
                            {data.title}
                        </h3>
                        <AspectRatio ratio={16 / 9}>
                        <Image src="/1.jpg" width={700}
                                height={700} alt="Image" className="rounded-md object-cover"/>
                         </AspectRatio>
                         <div className="mt-5 flex gap-5 text-center">
                            <Link className={buttonVariants()} href={data.urlDemo} target="_blank">
                            ver certificado
                            </Link>
                         </div>
                    </div>
                ))}

                    

            </div>
      
           
        </div>
    );
}
export default Certifiquey;