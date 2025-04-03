import { Header } from "./ui/header-section/Header";
import { Item } from "./ui/main-section/Item";
import { PhotoGallery } from "./ui/main-section/PhotoGallery";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex items-center px-52 py-14">
        <PhotoGallery />
        <Item />
      </main>
    </div>
  );
}
