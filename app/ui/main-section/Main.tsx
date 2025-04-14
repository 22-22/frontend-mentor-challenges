"use client"

import { useState } from "react"
import { Item } from "./Item"
import { PhotoGallery } from "./PhotoGallery"
import { PhotoGalleryModal } from "./PhotoGalleryModal"
import { defaultActiveImage, imageThumbnailSrcs } from "@/app/constants"

export const Main = () => {
    const [activeImage, setActiveImage] = useState(defaultActiveImage)
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)

    const openPrevious = () => {
        const previousImage = activeImage > 1 ? activeImage - 1 : imageThumbnailSrcs.length
        setActiveImage(previousImage)
    }

    const openNext = () => {
        const nextImage = activeImage === imageThumbnailSrcs.length ? 1 : activeImage + 1
        setActiveImage(nextImage)
    }

    return (
        <main className="flex flex-col md:flex-row items-center md:px-52 pt-2 pb-20 md:py-14">
            <PhotoGallery
                setIsGalleryModalOpen={setIsGalleryModalOpen}
                activeImage={activeImage}
                setActiveImage={setActiveImage}
                openPrevious={openPrevious}
                openNext={openNext}
            />
            <Item />
            {isGalleryModalOpen &&
                <PhotoGalleryModal
                    setIsGalleryModalOpen={setIsGalleryModalOpen}
                    activeImage={activeImage}
                    setActiveImage={setActiveImage}
                    openPrevious={openPrevious}
                    openNext={openNext}
                />}
        </main>
    )
}
