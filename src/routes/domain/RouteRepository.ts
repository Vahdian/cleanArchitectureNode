import { Nullable } from '../../shared/domain/Nullable';
import { Route } from './Route';
import { RouteId } from './RouteId';

export interface RouteRepository {
  searchAll(): Promise<Array<Route>>;
  search(id: RouteId): Promise<Nullable<Route>>;
  save(route: Route): Promise<void>;
  delete(id: RouteId): Promise<void>;
}
