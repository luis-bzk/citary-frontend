import { ApiError } from '@/schemas';
import { AxiosError } from 'axios';

export function parseApiError(error: unknown): ApiError | null {
  if (error instanceof AxiosError && error.response?.data) {
    return error.response.data as ApiError;
  }
  return null;
}
