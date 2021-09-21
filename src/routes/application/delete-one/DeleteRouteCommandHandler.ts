import { RouteId } from '../../domain/RouteId';
import { RouteDeletion } from './RouteDeletion';
import { DeleteRouteCommand } from './DeleteRouteCommand';
import { CommandHandler } from '../../../shared/domain/CommandHandler';
import { Command } from '../../../shared/domain/command';

export class DeleteRouteCommandHandler
  implements CommandHandler<DeleteRouteCommand>
{
  constructor(private routeDeletion: RouteDeletion) {}

  subscribedTo(): Command {
    return DeleteRouteCommand;
  }

  async handle(query: DeleteRouteCommand): Promise<void> {
    return this.routeDeletion.run(new RouteId(query.id));
  }
}
