import { Query } from '../../../shared/domain/Query';
import { QueryHandler } from '../../../shared/domain/QueryHandler';
import { RouteId } from '../../domain/RouteId';
import { RouteFinder } from './RouteFinder';
import { SearchRouteQuery } from './SearchRouteQuery';
import { SearchRouteResponse } from './SearchRouteResponse';

export class SearchRouteQueryHandler
  implements QueryHandler<SearchRouteQuery, SearchRouteResponse>
{
  constructor(private routeFinder: RouteFinder) {}

  subscribedTo(): Query {
    return SearchRouteQuery;
  }

  async handle(query: SearchRouteQuery): Promise<SearchRouteResponse> {
    return this.routeFinder.run(new RouteId(query.id));
  }
}
