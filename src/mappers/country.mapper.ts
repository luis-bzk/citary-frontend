import { Country } from '@/schemas';
import { CountryFormValues } from '@/validators/country';
import { CountryApi, CountryCreateApi } from '@/api/entities';

export class CountryMapper {
  static mapApiToDomain(data: CountryApi): Country {
    return {
      id: data.id,
      name: data.name,
      code: data.code,
      prefix: data.prefix,
      createdDate: new Date(data.created_date),
      recordStatus: data.record_status,
    };
  }

  static mapFormToApi(data: CountryFormValues): CountryCreateApi {
    return {
      name: data.name,
      code: data.code,
      prefix: data.prefix,
    };
  }

  static mapApiToDomainList(data: CountryApi[]): Country[] {
    return data.map((country) => this.mapApiToDomain(country));
  }
}
