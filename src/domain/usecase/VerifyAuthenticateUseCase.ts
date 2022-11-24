import {ClientData} from '../model/ClientData';
import {AuthRepository} from '../repository/AuthRepository';

export interface VerifyAuthenticateUseCase {
  verifyAuthenticate(userName: string, password: string): Promise<ClientData>;
}

export class VerifyAuthenticateUseCaseImpl
  implements VerifyAuthenticateUseCase
{
  private repo: AuthRepository;
  constructor(_repo: AuthRepository) {
    this.repo = _repo;
  }

  verifyAuthenticate(userName: string, password: string): Promise<ClientData> {
    return this.repo.verifyAuth(userName, password);
  }
}
