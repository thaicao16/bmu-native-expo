import {AuthRepository} from '../repository/AuthRepository';

export interface CheckUserLoggedInUseCase {
  verifyAuthenticate(userName: string, password: string): Promise<boolean>;
}

export class CheckUserLoggedInUseCaseImpl implements CheckUserLoggedInUseCase {
  private repo: AuthRepository;
  constructor(_repo: AuthRepository) {
    this.repo = _repo;
  }

  verifyAuthenticate(): Promise<boolean> {
    return this.repo.isUserLoggedIn();
  }
}
