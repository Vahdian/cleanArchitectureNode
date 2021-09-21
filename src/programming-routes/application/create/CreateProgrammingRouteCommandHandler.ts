import { CreateRouteCommand } from '../../../routes/application/create/CreateRouteCommand';
import { Command } from '../../../shared/domain/command';
import { CommandHandler } from '../../../shared/domain/CommandHandler';
import { Profiles } from '../../domain/Profiles';
import { ProgrammingRouteDescription } from '../../domain/ProgrammingRouteDescription';
import { ProgrammingRouteId } from '../../domain/ProgrammingRouteId';
import { ProgrammingRouteName } from '../../domain/ProgrammingRouteName';
import { ProgrammingRouteSiteId } from '../../domain/ProgrammingRouteSiteId';
import { CreateProgrammingRouteCommand } from './CreateProgrammingRouteCommand';
import { ProgrammingRouteCreator } from './ProgrammingRouteCreator';

export class CreateProgrammingRouteCommandHandler
  implements CommandHandler<CreateProgrammingRouteCommand>
{
  constructor(private routeCreator: ProgrammingRouteCreator) {}

  subscribedTo(): Command {
    return CreateProgrammingRouteCommand;
  }

  async handle(command: CreateProgrammingRouteCommand): Promise<void> {
    const programmingRouteId = new ProgrammingRouteId(command.id);
    const programmingRouteSiteId = new ProgrammingRouteSiteId(command.site_id);
    const programmingRouteName = new ProgrammingRouteName(command.name);
    const programmingRouteDescription = command.description
      ? new ProgrammingRouteDescription(command.description)
      : undefined;
    const programmingRouteProfiles = new Profiles(command.profiles);
    await this.routeCreator.run({
      programmingRouteId,
      programmingRouteSiteId,
      programmingRouteName,
      programmingRouteProfiles,
      programmingRouteDescription
    });
  }
}
