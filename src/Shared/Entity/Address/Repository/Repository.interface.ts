import { BaseInterfaceRepository } from 'src/Shared/Base/Repository/interface.repository';
import { Address } from '../Address.entity';

export interface AddressRepositoryInterface
  extends BaseInterfaceRepository <Address> {}
