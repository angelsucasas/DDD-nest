import { BaseInterfaceRepository } from 'src/Shared/Base/Repository/interface.repository';
import { Book } from '../Book.entity';

export interface BookRepositoryInterface
  extends BaseInterfaceRepository <Book> {}
