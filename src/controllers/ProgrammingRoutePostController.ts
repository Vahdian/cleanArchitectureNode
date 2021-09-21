import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateProgrammingRouteCommand } from '../programming-routes/application/create/CreateProgrammingRouteCommand';
import { ProgrammingRouteAlreadyExists } from '../programming-routes/domain/ProgrammingRouteAlreadyExists';
import { CommandBus } from '../shared/domain/CommandBus';
import { Controller } from './Controller';

export class ProgrammingRoutePostController implements Controller {
  constructor(private commandBus: CommandBus) {}

  async run(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const site_id: number = req.body.site_id;
    const name: string = req.body.name;
    const description: string = req.body.description;
    const profiles: [] = req.body.profiles;

    const createProgrammingRouteCommand = new CreateProgrammingRouteCommand({
      id,
      site_id,
      name,
      description,
      profiles
    });

    try {
      await this.commandBus.dispatch(createProgrammingRouteCommand);
    } catch (error) {
      if (error instanceof ProgrammingRouteAlreadyExists) {
        res.status(httpStatus.BAD_REQUEST).send(error.message);
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
      }
    }

    res.status(httpStatus.CREATED).send();
  }
}
