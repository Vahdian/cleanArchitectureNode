import { Command } from '../../../shared/domain/command';
import { DeleteRouteRequest } from './DeleteRouteRequest';

export class DeleteRouteCommand implements Command {
  readonly id: string;
  constructor({ id }: DeleteRouteRequest) {
    this.id = id;
  }
}
