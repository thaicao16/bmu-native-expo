export interface ListCountryDto {
  items: CountryDto[];
}

export interface CountryDto {
  name: string;
  uuid: string;
}
