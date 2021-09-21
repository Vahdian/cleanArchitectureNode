import { Controller } from './Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { SearchAllRoutesQuery } from '../routes/application/search-all/SearchAllRoutesQuery';
import { SearchAllRoutesResponse } from '../routes/application/search-all/SearchAllRoutesResponse';
import { QueryBus } from '../shared/domain/QueryBus';

type FilterType = { value: string; operator: string; field: string };
export class RoutesGetController implements Controller {
  constructor(private queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {
    try {
      const { query: queryParams } = req;
      const { filters, orderBy, order, limit, offset } = queryParams;
      const query = new SearchAllRoutesQuery(
        this.parseFilters(filters as Array<FilterType>),
        orderBy as string,
        order as string,
        limit ? Number(limit) : undefined,
        offset ? Number(offset) : undefined
      );
      const findAll = await this.queryBus.ask<SearchAllRoutesResponse>(query);

      res.status(httpStatus.OK).send(findAll);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }

  private parseFilters(params: Array<FilterType>): Array<Map<string, string>> {
    if (!params) {
      return new Array<Map<string, string>>();
    }

    return params.map((filter) => {
      const field = filter.field;
      const value = filter.value;
      const operator = filter.operator;

      return new Map([
        ['field', field],
        ['operator', operator],
        ['value', value]
      ]);
    });
  }
}
