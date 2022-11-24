import {ClientData} from '../model/ClientData';
import {AuthRepository} from '../repository/AuthRepository';

export interface LogoutUseCase {
  logOut(): Promise<boolean>;
}

export class LogoutUseCaseImpl implements LogoutUseCase {
  private repo: AuthRepository;
  constructor(_repo: AuthRepository) {
    this.repo = _repo;
  }

  logOut(): Promise<boolean> {
    return this.repo.logOut();
  }
}
