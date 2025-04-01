import OurCreationsImageDesktop from "./OurCreationsImageDesktop"
import OurCreationsImageMobile from "./OurCreationsImageMobile"
import SeeAllButton from "./SeeAllButton"
import { IMAGE_NAMES } from "../../constants"
import { josefin_sans } from "../../fonts"

export default function OurCreationsSection() {
    return (
        <section className="flex flex-col items-center md:block px-10 md:px-44 pt-4 pb-20">
            <div className="flex justify-between items-center md:py-6">
                <h2 className={`${josefin_sans.className} text-3xl md:text-5xl uppercase text-center`}>our creations</h2>
                <SeeAllButton mobileDisplay="hidden" desktopDisplay="block" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 my-8">
                {IMAGE_NAMES.map((name, idx) => <OurCreationsImageDesktop key={name} name={name} idx={idx} />)}
                {IMAGE_NAMES.map((name, idx) => <OurCreationsImageMobile key={name} name={name} idx={idx} />)}
            </div>
            <SeeAllButton mobileDisplay="block" desktopDisplay="hidden" />
        </section>
    )
}
