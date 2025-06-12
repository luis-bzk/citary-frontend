import { Province } from '@/schemas';
import { ProvinceFormValues } from '@/validators/province';
import { ProvinceCreateApi, ProvinceApi } from '@/api/entities';

export class ProvinceMapper {
  static mapApiToDomain(data: ProvinceApi): Province {
    return {
      id: data.id,
      name: data.name,
      code: data.code,
      prefix: data.prefix,
      createdDate: new Date(data.created_date),
      recordStatus: data.record_status,
      idCountry: data.id_country,
    };
  }

  static mapFormToApi(data: ProvinceFormValues): ProvinceCreateApi {
    return {
      name: data.name,
      code: data.code,
      prefix: data.prefix,
      id_country: data.idCountry,
    };
  }

  static mapApiToDomainList(data: ProvinceApi[]): Province[] {
    return data.map((province) => this.mapApiToDomain(province));
  }
}
