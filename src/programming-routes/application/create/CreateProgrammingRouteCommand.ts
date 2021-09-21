import { Command } from '../../../shared/domain/command';
import { CreateProgrammingRouteRequest } from './CreateProgrammingRouteRequest';

export class CreateProgrammingRouteCommand extends Command {
  id: string;
  site_id: number;
  name: string;
  description?: string;
  profiles: [];

  constructor({
    id,
    site_id,
    name,
    description,
    profiles
  }: CreateProgrammingRouteRequest) {
    super();
    this.id = id;
    this.site_id = site_id;
    this.name = name;
    this.description = description;
    this.profiles = profiles;
  }
}
