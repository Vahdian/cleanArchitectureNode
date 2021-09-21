import { Controller } from './Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { RouteNotExist } from '../routes/domain/RouteNotExist';
import { DeleteRouteCommand } from '../routes/application/delete-one/DeleteRouteCommand';
import { CommandBus } from '../shared/domain/CommandBus';

export class RouteDeleteController implements Controller {
  constructor(private commandBus: CommandBus) {}
  async run(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;

    const deleteRouteCommand = new DeleteRouteCommand({
      id
    });
    try {
      await this.commandBus.dispatch(deleteRouteCommand);
      res.status(httpStatus.NO_CONTENT).send();
    } catch (e) {
      if (e instanceof RouteNotExist) {
        res.status(httpStatus.NOT_FOUND).send();
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}
