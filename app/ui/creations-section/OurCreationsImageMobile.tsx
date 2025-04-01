import Image from "next/image"
import { CAPTIONS } from "@/app/constants"
import { josefin_sans } from "../../fonts"
import { OurCreationsImageProps } from "@/types"

export default function OurCreationsImageMobile({ name, idx }: OurCreationsImageProps) {
    return (
        <figure className="block md:hidden relative inset-shadow-black-mobile">
            <Image
                className="w-full h-full relative -z-10"
                src={`/mobile/${name}.jpg`}
                width={654}
                height={240}
                alt={name}
            />
            <figcaption className={`w-4/5 absolute bottom-0 p-4 ${josefin_sans.className} text-3xl uppercase text-white`}>{CAPTIONS[idx]}</figcaption>
        </figure>
    )
}
