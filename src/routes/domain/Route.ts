import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { ObjectID } from '../../shared/domain/value-object/ObjectID';
import { RouteDescription } from './RouteDescription';
import { RouteId } from './RouteId';
import { RouteName } from './RouteName';
import { RouteSiteId } from './RouteSiteId';

export class Route extends AggregateRoot {
  readonly id: RouteId;
  readonly site_id: RouteSiteId;
  readonly name: RouteName;
  readonly download_type: number[];
  readonly waste_type: number[];
  readonly description?: RouteDescription;
  readonly programming?: ObjectID; // TO-DO Reemplazar ObjectID por programming id value object
  readonly restrictions?: Record<string, any>;
  readonly assets?: number[];
  readonly path?: string;

  constructor(
    id: RouteId,
    site_id: RouteSiteId,
    name: RouteName,
    download_type: number[],
    waste_type: number[],
    description?: RouteDescription,
    programming?: ObjectID,
    restrictions?: Record<string, any>,
    assets?: number[],
    path?: string
  ) {
    super();
    this.id = id;
    this.site_id = site_id;
    this.name = name;
    this.download_type = download_type;
    this.waste_type = waste_type;
    this.description = description;
    this.programming = programming;
    this.restrictions = restrictions;
    this.assets = assets;
    this.path = path;
  }

  static create(
    id: RouteId,
    site_id: RouteSiteId,
    name: RouteName,
    download_type: number[],
    waste_type: number[],
    description?: RouteDescription,
    programming?: ObjectID,
    restrictions?: Record<string, any>,
    assets?: number[],
    path?: string
  ): Route {
    const route = new Route(
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
    );

    return route;
  }

  static fromPrimitives(data: {
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
  }): Route {
    return new Route(
      new RouteId(data.id),
      new RouteSiteId(data.site_id),
      new RouteName(data.name),
      data.download_type,
      data.waste_type,
      data.description ? new RouteDescription(data.description) : undefined,
      data.programming ? new ObjectID(data.programming) : undefined,
      data.restrictions,
      data.assets,
      data.path
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      site_id: this.site_id.value,
      name: this.name.value,
      description: this.description?.value,
      download_type: this.download_type,
      waste_type: this.waste_type,
      programming: this.programming?.value,
      restrictions: this.restrictions,
      assets: this.assets,
      path: this.path
    };
  }
}
