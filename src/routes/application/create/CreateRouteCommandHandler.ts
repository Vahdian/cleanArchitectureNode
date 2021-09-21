import { Command } from '../../../shared/domain/command';
import { CommandHandler } from '../../../shared/domain/CommandHandler';
import { ObjectID } from '../../../shared/domain/value-object/ObjectID';
import { RouteDescription } from '../../domain/RouteDescription';
import { RouteId } from '../../domain/RouteId';
import { RouteName } from '../../domain/RouteName';
import { RouteSiteId } from '../../domain/RouteSiteId';
import { CreateRouteCommand } from './CreateRouteCommand';
import { RouteCreator } from './RouteCreator';

export class CreateRouteCommandHandler
  implements CommandHandler<CreateRouteCommand>
{
  constructor(private routeCreator: RouteCreator) {}

  subscribedTo(): Command {
    return CreateRouteCommand;
  }

  async handle(command: CreateRouteCommand): Promise<void> {
    const routeId = new RouteId(command.id);
    const routeSiteId = new RouteSiteId(command.site_id);
    const routeName = new RouteName(command.name);
    const routeDownloadType = command.download_type;
    const routeWasteType = command.waste_type;
    const routeDescription = command.description
      ? new RouteDescription(command.description)
      : undefined;
    const routeProgramming = command.programming
      ? new ObjectID(command.programming)
      : undefined;
    const routeRestrictions = command.restrictions;
    const routeAssets = command.assets;
    const routePath = command.path;
    await this.routeCreator.run({
      routeId,
      routeSiteId,
      routeName,
      routeDownloadType,
      routeWasteType,
      routeDescription,
      routeProgramming,
      routeRestrictions,
      routeAssets,
      routePath
    });
  }
}
