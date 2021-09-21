import { ProgrammingRoute } from '../../domain/ProgrammingRoute';

export class SearchAllProgrammingRoutesResponse {
  readonly routes: Array<ProgrammingRoute>;

  constructor(routes: Array<ProgrammingRoute>) {
    this.routes = routes;
  }
}
