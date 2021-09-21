import { Command } from '../../../shared/domain/command';
import { CreateRouteRequest } from './CreateRouteRequest';

export class CreateRouteCommand extends Command {
  id: string;
  site_id: number;
  name: string;
  download_type: number[];
  waste_type: number[];
  description?: string;
  programming?: string;
  restrictions?: Record<string, any>;
  assets?: number[];
  path?: string;

  constructor({
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
  }: CreateRouteRequest) {
    super();
    this.id = id;
    this.site_id = site_id;
    this.name = name;
    this.description = description;
    this.download_type = download_type;
    this.waste_type = waste_type;
    this.programming = programming;
    this.restrictions = restrictions;
    this.assets = assets;
    this.path = path;
  }
}
