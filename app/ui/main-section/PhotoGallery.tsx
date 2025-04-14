import { FC } from "react"
import Image from "next/image"
import { defaultActiveImage, imageThumbnailSrcs } from "@/app/constants"
import { NextIcon } from "../colour-changing-icons/NextIcon"
import { PreviousIcon } from "../colour-changing-icons/PreviousIcon"

interface GalleryModalProps {
    setIsGalleryModalOpen: (isOpen: boolean) => void,
    activeImage: number,
    setActiveImage: (idx: number) => void,
    openPrevious: () => void,
    openNext: () => void,
}

export const PhotoGallery: FC<GalleryModalProps> = ({ setIsGalleryModalOpen, activeImage, setActiveImage, openPrevious, openNext }) => {
    const openGalleryModal = () => {
        setIsGalleryModalOpen(true)
    }

    return (
        <section>
            <div className="relative">
                <button className="md:hidden absolute top-5/12 left-5 p-3 rounded-full bg-white cursor-pointer hover:text-amber-600" onClick={openPrevious}>
                    <PreviousIcon />
                </button>
                <button onClick={openGalleryModal} className="hidden md:block md:cursor-pointer">
                    <Image className="md:rounded-lg" src={`/image-product-${activeImage}.jpg`} width={1000} height={1000} alt={`sneakers-${defaultActiveImage}`} />
                </button>
                <Image className="md:hidden" src={`/image-product-${activeImage}.jpg`} width={1000} height={1000} alt={`sneakers-${defaultActiveImage}`} />
                <button className="md:hidden absolute top-5/12 right-5 p-3 rounded-full bg-white cursor-pointer hover:text-amber-600" onClick={openNext}>
                    <NextIcon />
                </button>
            </div>
            <div className="hidden md:flex items-center gap-4 mt-6">
                {imageThumbnailSrcs.map((src, idx) => {
                    idx = idx + 1;
                    return <button className={`rounded-lg cursor-pointer ${idx === activeImage && "border-amber-600 border-2"}`}
                        key={src} onClick={() => setActiveImage(idx)}>
                        <Image className={`rounded-lg ${idx === activeImage && "opacity-50"}`} src={src} width={100} height={100} alt={`sneakers-${idx}`} />
                    </button>
                })}
            </div>
        </section>
    )
}
