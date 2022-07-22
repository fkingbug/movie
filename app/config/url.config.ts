export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genre/${slug}`
export const getActorYrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminUrlHomeUrl = () => getAdminUrl('').slice(0, -1)
