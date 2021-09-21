import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateRouteCommand } from '../routes/application/create/CreateRouteCommand';
import { RouteAlreadyExists } from '../routes/domain/RouteAlreadyExists';
import { CommandBus } from '../shared/domain/CommandBus';
import { Controller } from './Controller';

export class RoutePutController implements Controller {
  constructor(private commandBus: CommandBus) {}

  async run(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const site_id: number = req.body.site_id;
    const name: string = req.body.name;
    const download_type: number[] = req.body.download_type;
    const waste_type: number[] = req.body.waste_type;
    const description: string = req.body.description;
    const programming: string = req.body.programming;
    const restrictions: Record<string, any> = req.body.restrictions;
    const assets: number[] = req.body.assets;
    const path: string = req.body.path;

    const createRouteCommand = new CreateRouteCommand({
      id,
      site_id,
      name,
      download_type,
      waste_type,
      description,
      programming,
      restrictions,
      assets,
      path
    });

    try {
      await this.commandBus.dispatch(createRouteCommand);
    } catch (error) {
      if (error instanceof RouteAlreadyExists) {
        res.status(httpStatus.BAD_REQUEST).send(error.message);
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
      }
    }

    res.status(httpStatus.CREATED).send();
  }
}
