export const API_URL = process.env.NEXT_PUBLIC_API
export const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string
export const MUI_LICENSE_KEY = process.env.NEXT_PUBLIC_MUI_LICENSE_KEY as string
export const USE_MOCK_DATA = (process.env.NEXT_PUBLIC_USE_MOCK_DATA as string) === '1'
export const STORAGE_PREFIX = 'resync-auth-'