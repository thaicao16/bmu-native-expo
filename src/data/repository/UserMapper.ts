import {UserData} from '../../domain/model/UserData';
import {UserDto} from '../dto/UserDto';

export const toUserData = (userDto: UserDto): UserData => {
  return {
    clients: userDto.clients,
    email: userDto.email,
    name: userDto.name,
    status: userDto.status,
    uuid: userDto.uuid,
  };
};
