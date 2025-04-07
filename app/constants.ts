// PHOTO GALLERY
const numberOfImages = 4;
export const imageThumbnailSrcs = [...new Array(numberOfImages)].map((_, idx) => `/image-product-${idx + 1}-thumbnail.jpg`)
export const defaultActiveImage = 1;