import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

import { siteName, titleMerge } from '@/config/seo.config'

import { onlyText } from '../string/clearText'

import { ISeo } from './meta.interface'

const Meta: FC<ISeo> = ({ title, descripion, image, children }) => {
	const { asPath } = useRouter() //текущий роут
	const currentUrl = `${process.env.APP_URL}${asPath}` //url текущей страницы

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{descripion ? (
					<>
						<meta
							itemProp="descripion"
							name="descripion"
							content={onlyText(descripion, 152)}
						/>
						<link ref="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={image || logoImage} />
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:descripion"
							content={onlyText(descripion, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex , nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
//SEO оптимизация
