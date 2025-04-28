"use client"

import { useState } from "react"
import { defaultActiveImage, imageThumbnailSrcs } from "@/app/constants"
import Item from "./Item"
import PhotoGallery from "./PhotoGallery"
import PhotoGalleryModal from "./PhotoGalleryModal"

const Main = () => {
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

    const closeGalleryModal = () => {
        setIsGalleryModalOpen(false)
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
            <PhotoGalleryModal
                isOpen={isGalleryModalOpen}
                onClose={closeGalleryModal}
                activeImage={activeImage}
                setActiveImage={setActiveImage}
                openPrevious={openPrevious}
                openNext={openNext}
            />
        </main>
    )
}

export default Main