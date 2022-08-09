import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/ui/form-elements/Field'

import { validEmail } from '@/shared/types/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	formState: { errors },
	register,
	isPasswordRequired,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Please enter a valid password',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
