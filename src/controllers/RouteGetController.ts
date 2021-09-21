import { Controller } from './Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { SearchRouteQuery } from '../routes/application/search-one/SearchRouteQuery';
import { SearchRouteResponse } from '../routes/application/search-one/SearchRouteResponse';
import { RouteNotExist } from '../routes/domain/RouteNotExist';
import { QueryBus } from '../shared/domain/QueryBus';

export class RouteGetController implements Controller {
  constructor(private queryBus: QueryBus) {}
  async run(req: Request, res: Response): Promise<void> {
    try {
      const query = new SearchRouteQuery(req.params.id);
      const findOne = await this.queryBus.ask<SearchRouteResponse>(query);

      res.status(httpStatus.OK).send(findOne);
    } catch (e) {
      if (e instanceof RouteNotExist) {
        res.status(httpStatus.NOT_FOUND).send();
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}
