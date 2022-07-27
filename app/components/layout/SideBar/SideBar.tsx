import { FC } from 'react'

import Search from './Search/SearchList/Search'
import styles from './SideBar.module.scss'

const SideBar: FC = () => {
	return (
		<div className={styles.sideBar}>
			<Search />
		</div>
	)
}

export default SideBar
