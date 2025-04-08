import { FC } from "react"
import Image from "next/image"
import { defaultActiveImage, imageThumbnailSrcs } from "@/app/constants"
import { CloseIcon } from "../icons/CloseIcon";
import { PreviousIcon } from "../icons/PreviousIcon";
import { NextIcon } from "../icons/NextIcon";

interface GalleryModalProps {
    setIsGalleryModalOpen: (isOpen: boolean) => void;
    activeImage: number,
    setActiveImage: (idx: number) => void
}

export const PhotoGalleryModal: FC<GalleryModalProps> = ({ setIsGalleryModalOpen, activeImage, setActiveImage }) => {
    const closeGalleryModal = () => {
        setIsGalleryModalOpen(false)
    }

    const openPrevious = () => {
        const previousImage = activeImage > 1 ? activeImage - 1 : imageThumbnailSrcs.length
        setActiveImage(previousImage)
    }

    const openNext = () => {
        const nextImage = activeImage === imageThumbnailSrcs.length ? 1 : activeImage + 1
        setActiveImage(nextImage)
    }

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-black/50"
            onClick={closeGalleryModal} >
            <div className="relative" onClick={(evt) => evt.stopPropagation()}>
                <button className="absolute -top-10 right-10 text-white cursor-pointer hover:text-amber-600" onClick={closeGalleryModal}>
                    <CloseIcon />
                </button>
                <div className="flex items-center">
                    <button className="p-3 rounded-full bg-white cursor-pointer hover:text-amber-600" onClick={openPrevious}>
                        <PreviousIcon />
                    </button>
                    <Image className="rounded-lg" src={`/image-product-${activeImage}.jpg`} width={500} height={500} alt={`sneakers-${defaultActiveImage}`} />
                    <button className="p-3 rounded-full bg-white cursor-pointer hover:text-amber-600" onClick={openNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <div className="mt-6 flex items-center gap-4"
                onClick={(evt) => evt.stopPropagation()}>
                {imageThumbnailSrcs.map((src, idx) => {
                    idx = idx + 1;
                    return <button className={`rounded-lg cursor-pointer ${idx === activeImage && "border-amber-600 border-2"}`} key={idx} onClick={() => setActiveImage(idx)}>
                        <Image className={`rounded-lg ${idx === activeImage && "opacity-50"}`} src={src} width={100} height={100} alt={`sneakers-${idx}`} />
                    </button>
                })}
            </div>
        </div>
    )
}
