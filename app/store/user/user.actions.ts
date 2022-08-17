import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helper'
import { toastr } from 'react-redux-toastr'

import { toastError } from '@/utils/toastrError'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { AuthService } from '@/services/auth/auth.service'

/* register */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Register', 'Completed succsessfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* login */

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed succsessfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* logout */
export const logout = createAsyncThunk('auth/logiut', async () => {
	await AuthService.logout()
})
/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(errorCatch) === 'jwt expired') {
				toastr.error(
					'Logiut',
					'Your authorization is finished , plz sign again'
				)
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
