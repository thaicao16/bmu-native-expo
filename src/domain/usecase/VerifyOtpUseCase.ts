import {UserData} from '../model/UserData';
import {AuthRepository} from '../repository/AuthRepository';

export interface VerifyOtpUseCase {
  verifyOtp(otp: string, uuid: string): Promise<UserData>;
}

export class VerifyOtpUseCaseImpl implements VerifyOtpUseCase {
  private repo: AuthRepository;
  constructor(_repo: AuthRepository) {
    this.repo = _repo;
  }
  async verifyOtp(otp: string, uuid: string): Promise<UserData> {
    return await this.repo.verifyOtp(otp, uuid);
  }
}
