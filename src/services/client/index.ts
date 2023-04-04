import type {
  User,
  LoginUserInput,
  RegisterUserInput,
  UpdateUserInput,
  SocialLoginInputType,
  SendOtpCodeInputType,
  ForgotPasswordUserInput,
  ResetPasswordUserInput,
  VerifyForgotPasswordUserInput,
  ChangePasswordUserInput,
  PasswordChangeResponse,
  AuthResponse,
  OTPResponse,
  VerifyOtpInputType,
  OtpLoginInputType,
  OTPVerifyResponse,
  // CreateContactUsInput,
} from '../../types/user';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';

class Client {
  users = {
    me: () => HttpClient.get<User>(API_ENDPOINTS.USERS_ME),
    update: (user: UpdateUserInput) => HttpClient.put<User>(`${API_ENDPOINTS.USERS}/${user.id}`, user),
    login: (input: LoginUserInput) => HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
    socialLogin: (input: SocialLoginInputType) => HttpClient.post<AuthResponse>(API_ENDPOINTS.SOCIAL_LOGIN, input),
    sendOtpCode: (input: SendOtpCodeInputType) => HttpClient.post<OTPResponse>(API_ENDPOINTS.SEND_OTP_CODE, input),
    verifyOtpCode: (input: VerifyOtpInputType) =>
      HttpClient.post<OTPVerifyResponse>(API_ENDPOINTS.VERIFY_OTP_CODE, input),
    OtpLogin: (input: OtpLoginInputType) => HttpClient.post<AuthResponse>(API_ENDPOINTS.OTP_LOGIN, input),
    register: (input: RegisterUserInput) => HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
    forgotPassword: (input: ForgotPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(API_ENDPOINTS.USERS_FORGOT_PASSWORD, input),
    verifyForgotPasswordToken: (input: VerifyForgotPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN, input),
    resetPassword: (input: ResetPasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(API_ENDPOINTS.USERS_RESET_PASSWORD, input),
    changePassword: (input: ChangePasswordUserInput) =>
      HttpClient.post<PasswordChangeResponse>(API_ENDPOINTS.USERS_CHANGE_PASSWORD, input),
    logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    // deleteAddress: ({ id }: { id: string }) => HttpClient.delete<boolean>(`${API_ENDPOINTS.USERS_ADDRESS}/${id}`),
    // subscribe: (input: { email: string }) => HttpClient.post<any>(API_ENDPOINTS.USERS_SUBSCRIBE_TO_NEWSLETTER, input),
    // contactUs: (input: CreateContactUsInput) => HttpClient.post<any>(API_ENDPOINTS.USERS_CONTACT_US, input),
  };
}

export default new Client();
