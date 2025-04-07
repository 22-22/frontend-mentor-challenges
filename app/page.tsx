"use client"

import { useState } from "react";
import { Header } from "./ui/header-section/Header";
import { Item } from "./ui/main-section/Item";
import { PhotoGallery } from "./ui/main-section/PhotoGallery";
import { PhotoGalleryModal } from "./ui/main-section/PhotoGalleryModal";

export default function Home() {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)

  return (
    <div className="relative">
      <Header />
      <main className="flex items-center px-52 py-14">
        <PhotoGallery setIsGalleryModalOpen={setIsGalleryModalOpen} />
        <Item />
      </main>
      {isGalleryModalOpen && <PhotoGalleryModal setIsGalleryModalOpen={setIsGalleryModalOpen} />}
    </div>
  );
}
