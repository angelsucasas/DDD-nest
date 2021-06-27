import { BaseInterfaceRepository } from 'src/Shared/Base/Repository/interface.repository';
import { Author } from '../Author.entity';

export interface AuthorRepositoryInterface
  extends BaseInterfaceRepository <Author> {}
