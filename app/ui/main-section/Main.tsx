"use client"

import { useState } from "react"
import { Item } from "./Item"
import { PhotoGallery } from "./PhotoGallery"
import { PhotoGalleryModal } from "./PhotoGalleryModal"
import { defaultActiveImage } from "@/app/constants"

export const Main = () => {
    const [activeImage, setActiveImage] = useState(defaultActiveImage)
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)

    return (
        <main className="flex items-center px-52 py-14">
            <PhotoGallery
                setIsGalleryModalOpen={setIsGalleryModalOpen}
                activeImage={activeImage}
                setActiveImage={setActiveImage}
            />
            <Item />
            {isGalleryModalOpen &&
                <PhotoGalleryModal
                    setIsGalleryModalOpen={setIsGalleryModalOpen}
                    activeImage={activeImage}
                    setActiveImage={setActiveImage}
                />}
        </main>
    )
}
