import { Query } from '../../../shared/domain/Query';

export class SearchRouteQuery implements Query {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}
