import {Country} from '../model/CountryDto';

export interface ReportRepository {
  getCountryList(): Promise<Country[]>;

  //getReport(from: string, to: string): Promise<Country[]>;
}
