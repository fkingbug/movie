import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface Imenu {
	title: string
	items: IMenuItem[]
}
