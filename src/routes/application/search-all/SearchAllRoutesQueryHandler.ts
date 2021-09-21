import { Query } from '../../../shared/domain/Query';
import { QueryHandler } from '../../../shared/domain/QueryHandler';
import { RoutesFinder } from './RoutesFinder';
import { SearchAllRoutesQuery } from './SearchAllRoutesQuery';
import { SearchAllRoutesResponse } from './SearchAllRoutesResponse';

export class SearchAllRoutesQueryHandler
  implements QueryHandler<SearchAllRoutesQuery, SearchAllRoutesResponse>
{
  constructor(private routesFinder: RoutesFinder) {}

  subscribedTo(): Query {
    return SearchAllRoutesQuery;
  }

  async handle(_query: SearchAllRoutesQuery): Promise<SearchAllRoutesResponse> {
    return this.routesFinder.run();
  }
}
