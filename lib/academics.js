import { getPhotos, addPhoto, removePhoto } from "@/lib/photoCollections";

const COLLECTION = "academics";

export function getAcademicsPhotos() {
  return getPhotos(COLLECTION);
}

export function addAcademicsPhoto(file, caption) {
  return addPhoto(COLLECTION, file, caption);
}

export function removeAcademicsPhoto(id) {
  return removePhoto(COLLECTION, id);
}
