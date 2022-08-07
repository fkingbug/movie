import { FC } from 'react'

import MovieContainer from './MovieContainer/MovieContainer'
import Search from './Search/SearchList/Search'
import styles from './SideBar.module.scss'

const SideBar: FC = () => {
	return (
		<div className={styles.sideBar}>
			<Search />
			<MovieContainer />
		</div>
	)
}

export default SideBar
