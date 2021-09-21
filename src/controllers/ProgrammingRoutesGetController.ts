import { Controller } from './Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { SearchAllProgrammingRoutesQuery } from '../programming-routes/application/search-all/SearchAllProgrammingRoutesQuery';
import { QueryBus } from '../shared/domain/QueryBus';
import { SearchAllProgrammingRoutesResponse } from '../programming-routes/application/search-all/SearchAllProgrammingRoutesResponse';

type FilterType = { value: string; operator: string; field: string };
export class ProgrammingRoutesGetController implements Controller {
  constructor(private queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {
    try {
      const { query: queryParams } = req;
      const { filters, orderBy, order, limit, offset } = queryParams;
      const query = new SearchAllProgrammingRoutesQuery(
        this.parseFilters(filters as Array<FilterType>),
        orderBy as string,
        order as string,
        limit ? Number(limit) : undefined,
        offset ? Number(offset) : undefined
      );
      const findAll =
        await this.queryBus.ask<SearchAllProgrammingRoutesResponse>(query);
      console.log('FindAll funciona');
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
