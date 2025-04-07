"use client"

import { FC, useState } from "react"
import Image from "next/image"
import { defaultActiveImage, imageThumbnailSrcs } from "@/app/constants"

interface GalleryModalProps {
    setIsGalleryModalOpen: (isOpen: boolean) => void;
}

export const PhotoGalleryModal: FC<GalleryModalProps> = ({ setIsGalleryModalOpen }) => {
    const [activeImage, setActiveImage] = useState(defaultActiveImage)

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
        <section className="absolute inset-0 w-full h-full bg-black/50">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-end">
                    <button className="cursor-pointer" onClick={closeGalleryModal}>
                        <Image src="/icon-close.svg" width={20} height={20} alt="close" />
                    </button>
                    <div className="flex items-center">
                        <button className="p-3 rounded-full bg-white cursor-pointer" onClick={openPrevious}>
                            <Image src="/icon-previous.svg" width={10} height={10} alt="previous" />
                        </button>
                        <Image className="rounded-lg" src={`/image-product-${activeImage}.jpg`} width={400} height={400} alt={`sneakers-${defaultActiveImage}`} />
                        <button className="p-3 rounded-full bg-white cursor-pointer" onClick={openNext}>
                            <Image src="/icon-next.svg" width={10} height={10} alt="next" />
                        </button>
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                    {imageThumbnailSrcs.map((src, idx) => {
                        idx = idx + 1;
                        return <button className={`rounded-lg cursor-pointer ${idx === activeImage && "border-amber-600 border-2"}`} key={idx} onClick={() => setActiveImage(idx)}>
                            <Image className={`rounded-lg ${idx === activeImage && "opacity-50"}`} src={src} width={100} height={100} alt={`sneakers-${idx}`} />
                        </button>
                    })}
                </div>
            </div>
        </section>
    )
}
