import { BaseInterfaceRepository } from 'src/Shared/Base/Repository/interface.repository';
import { Genre } from '../Genre.entity';

export interface GenreRepositoryInterface
  extends BaseInterfaceRepository <Genre> {}
