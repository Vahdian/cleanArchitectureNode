import { Nullable } from '../../shared/domain/Nullable';
import { ProgrammingRoute } from './ProgrammingRoute';
import { ProgrammingRouteId } from './ProgrammingRouteId';

export interface ProgrammingRouteRepository {
  searchAll(): Promise<Array<ProgrammingRoute>>;
  search(id: ProgrammingRouteId): Promise<Nullable<ProgrammingRoute>>;
  save(route: ProgrammingRoute): Promise<void>;
  delete(id: ProgrammingRouteId): Promise<void>;
}
