import { ReactNode } from 'react'

export interface ISeo {
	title: string
	descripion: string
	image?: string
	children: ReactNode
}
