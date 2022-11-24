export interface UserDataDto {
  token: string;
  user: UserDto;
}
export interface UserDto {
  clients: string[];
  created_at: string;
  email: string;
  id: number;
  is_admin: boolean;
  login_attempts: number;
  name: string;
  otp: string;
  otp_attempts: number;
  permissions: string[];
  phone: string;
  roles: string[];
  status: number;
  storeGroups: any[];
  store_code?: any;
  stores: any[];
  updated_at: string;
  uuid: string;
}
