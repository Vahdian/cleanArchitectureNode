import { Query } from '../../../shared/domain/Query';
import { QueryHandler } from '../../../shared/domain/QueryHandler';
import { ProgrammingRoutesFinder } from './ProgrammingRoutesFinder';
import { SearchAllProgrammingRoutesQuery } from './SearchAllProgrammingRoutesQuery';
import { SearchAllProgrammingRoutesResponse } from './SearchAllProgrammingRoutesResponse';

export class SearchAllProgrammingRoutesQueryHandler
  implements
    QueryHandler<
      SearchAllProgrammingRoutesQuery,
      SearchAllProgrammingRoutesResponse
    >
{
  constructor(private routesFinder: ProgrammingRoutesFinder) {}

  subscribedTo(): Query {
    return SearchAllProgrammingRoutesQuery;
  }

  async handle(
    _query: SearchAllProgrammingRoutesQuery
  ): Promise<SearchAllProgrammingRoutesResponse> {
    return this.routesFinder.run();
  }
}
