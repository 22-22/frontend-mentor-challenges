import Image from "next/image";
import { alata, josefin_sans } from "../fonts";

export default function LeaderSection() {
    return (
        <section className="px-10 md:px-44 py-20 md:flex md:items-end md:justify-center">
            <Image
                src="/desktop/image-interactive.jpg"
                width={900}
                height={500}
                className="hidden md:block"
                alt="interactive"
            />
            <Image
                src="/mobile/image-interactive.jpg"
                width={650}
                height={440}
                className="block md:hidden"
                alt="mobile"
            />
            <div className="md:w-3/5 md:pl-20 pt-10 md:pt-20 md:-ml-36 bg-white text-center md:text-left max-w-screen-sm">
                <h2 className={`mb-6 ${josefin_sans.className} text-4xl md:text-5xl uppercase`}>the leader in interactive vr</h2>
                <p className={`${alata.className} text-gray-500 leading-relaxed`}>Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies around the
                    globe. Our award-winning creations has transformed
                    businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </section>
    )
}
