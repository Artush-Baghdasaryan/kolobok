export interface UserRegistrationDto {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserLoginDto extends Omit<UserRegistrationDto, 'email' | 'confirmPassword'> {
}

export interface UserBackendDto extends Omit<UserRegistrationDto, "password"> {
  id: number;
  avatar: string;
}

export interface UserEntityDto extends UserBackendDto {
}
