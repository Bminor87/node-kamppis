import { User } from "./User.js"
import { Photo } from "./Photo.js"

export interface Profile {
  id?: string
  user: User // or userId?
  bio: string
  photos: Photo[]
  status: "active" | "inactive"
  createdAt: Date
  updatedAt?: Date
  deletedAt: Date | null
}

export const profiles: Profile[] = [] // in-memory array
