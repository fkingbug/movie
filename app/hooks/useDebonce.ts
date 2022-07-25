import { useEffect, useState } from 'react'

export const useDebonce = <T>(value: T, delay: number): T => {
	const [deboncedValue, setDeboncedValue] = useState(value)
	useEffect(() => {
		const handler = setTimeout(() => {
			setDeboncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])
	return deboncedValue
}
