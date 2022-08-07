import { IMovie } from '@/shared/types/movie.types'

export interface IMoveList {
	title: string
	link: string
	movies: IMovie[]
}
