import {UserData} from '../model/UserData';
import {AuthRepository} from '../repository/AuthRepository';

export interface GetUserCase {
  getUserData(): Promise<UserData>;
}

export class GetUserCaseImpl implements GetUserCase {
  private repo: AuthRepository;
  constructor(_repo: AuthRepository) {
    this.repo = _repo;
  }

  async getUserData(): Promise<UserData> {
    return this.repo.getUserData();
  }
}
