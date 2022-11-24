export interface ListCountry {
  items: Country[];
}

export interface Country {
  name: string;
  uuid: string;
  flag: string | '';
}
