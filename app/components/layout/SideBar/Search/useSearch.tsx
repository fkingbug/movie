import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebonce } from '@/hooks/useDebonce'

import { MovieService } from '@/services/movie.service'

const useSearch = () => {
	const [searchTerm, setsearchTerm] = useState('')
	const deboncedSearch = useDebonce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search movie list', deboncedSearch],
		() => MovieService.getAll(deboncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!deboncedSearch,
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setsearchTerm(e.target.value)
	}
	return { isSuccess, handleSearch, data }
}

export default useSearch
