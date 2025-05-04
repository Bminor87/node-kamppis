import { Profile } from "./Profile.js"

export interface Photo {
  id?: string
  profile: Profile // or profileId?
  url: string
  isProfilePhoto: boolean
  createdAt: Date
  updatedAt?: Date
  deletedAt: Date | null
}

export const photos: Photo[] = [] // in-memory array
