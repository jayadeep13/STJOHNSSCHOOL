import { getPhotos, addPhoto, removePhoto } from "@/lib/photoCollections";

const COLLECTION = "gallery";

export function getGalleryPhotos() {
  return getPhotos(COLLECTION);
}

export function addGalleryPhoto(file, caption, category) {
  return addPhoto(COLLECTION, file, caption, category);
}

export function removeGalleryPhoto(id) {
  return removePhoto(COLLECTION, id);
}
