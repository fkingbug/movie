import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push } = useRouter()
	const redirect = String(query.redirect) || '/'

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}

//redirect - при авторизации запоминает путь и с помощью Push отправляет на ту же страницу с которой была сделана авторизация
//useEffect смотрит было ли изменение
