import { FC } from 'react'

import SearchField from '@/ui/search-field/SearchField'

import useSearch from '../useSearch'

import styles from './Search.module.scss'
import SearchList from './SearchList'

const Search: FC = () => {
	const { data, handleSearch, isSuccess, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
