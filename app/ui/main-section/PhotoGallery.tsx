import { FC } from "react"
import Image from "next/image"
import { defaultActiveImage, imageThumbnailSrcs } from "@/app/constants"

interface GalleryModalProps {
    setIsGalleryModalOpen: (isOpen: boolean) => void,
    activeImage: number,
    setActiveImage: (idx: number) => void
}

export const PhotoGallery: FC<GalleryModalProps> = ({ setIsGalleryModalOpen, activeImage, setActiveImage }) => {
    const openGalleryModal = () => {
        setIsGalleryModalOpen(true)
    }

    return (
        <section>
            <button onClick={openGalleryModal} className="cursor-pointer">
                <Image className="rounded-lg" src={`/image-product-${activeImage}.jpg`} width={1000} height={1000} alt={`sneakers-${defaultActiveImage}`} />
            </button>
            <div className="mt-6 flex items-center gap-4">
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
