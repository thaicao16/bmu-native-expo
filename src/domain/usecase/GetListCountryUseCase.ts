import {Country} from '../model/CountryDto';
import {ReportRepository} from '../repository/ReportRepository';

export interface GetListCountryUseCase {
  getListCountry(): Promise<Country[]>;
}

export class GetListCountryUseCaseImpl implements GetListCountryUseCase {
  private repo: ReportRepository;
  constructor(_repo: ReportRepository) {
    this.repo = _repo;
  }

  async getListCountry(): Promise<Country[]> {
    const listCountry = await this.repo.getCountryList();
    return listCountry.map(country => {
      const flag = this.getFlagEmoji(country.name.toLowerCase());
      console.log('FLAG: ', flag);

      return {...country, flag: flag};
    });
  }

  private getFlagEmoji(name: string) {
    if (name.includes('japan')) return '🇯🇵';
    if (name.includes('new zealand')) return '🇳🇿';
    if (name.includes('singapore')) return '🇸🇬';
    if (name.includes('indonesia')) return '🇮🇩';
    if (name.includes('phillipines')) return '🇵🇭';
    if (name.includes('kuwait')) return '🇰🇼';
    if (name.includes('malaysia')) return '🇲🇾';
    return '';
  }
}
