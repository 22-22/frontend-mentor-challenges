import Image from "next/image"
import { CAPTIONS } from "@/app/constants"
import { josefin_sans } from "../../fonts"
import { OurCreationsImageProps } from "@/types"

export default function OurCreationsImage({ name, idx }: OurCreationsImageProps) {
    return (
        <figure className="hidden md:block relative inset-shadow-black-desktop">
            <Image
                className="w-full h-full relative -z-10"
                src={`/desktop/${name}.jpg`}
                width={256}
                height={450}
                alt={name}
            />
            <figcaption className={`absolute bottom-0 p-8 ${josefin_sans.className} uppercase text-3xl text-white`}>{CAPTIONS[idx]}</figcaption>
        </figure>
    )
}
