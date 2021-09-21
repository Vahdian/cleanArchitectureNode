import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { ProgrammingRouteDescription } from './ProgrammingRouteDescription';
import { ProgrammingRouteId } from './ProgrammingRouteId';
import { ProgrammingRouteName } from './ProgrammingRouteName';
import { ProgrammingRouteSiteId } from './ProgrammingRouteSiteId';
import { Profiles } from './Profiles';

export class ProgrammingRoute extends AggregateRoot {
  readonly id: ProgrammingRouteId;
  readonly site_id: ProgrammingRouteSiteId;
  readonly name: ProgrammingRouteName;
  readonly description: ProgrammingRouteDescription;
  readonly profiles: Profiles[];

  constructor(
    id: ProgrammingRouteId,
    site_id: ProgrammingRouteSiteId,
    name: ProgrammingRouteName,
    description: ProgrammingRouteDescription,
    profiles: Profiles[]
  ) {
    super();
    this.id = id;
    this.site_id = site_id;
    this.name = name;
    this.description = description;
    this.profiles = profiles;
  }

  static create(
    id: ProgrammingRouteId,
    site_id: ProgrammingRouteSiteId,
    name: ProgrammingRouteName,
    description: ProgrammingRouteDescription,
    profiles: Profiles[]
  ): ProgrammingRoute {
    const programmingRoute = new ProgrammingRoute(
      id,
      site_id,
      name,
      description,
      profiles
    );

    return programmingRoute;
  }

  static fromPrimitives(data: {
    id: string;
    site_id: number;
    name: string;
    description: string;
    profiles: [];
  }): ProgrammingRoute {
    return new ProgrammingRoute(
      new ProgrammingRouteId(data.id),
      new ProgrammingRouteSiteId(data.site_id),
      new ProgrammingRouteName(data.name),
      new ProgrammingRouteDescription(data.description),
      data.profiles.map((profile) => new Profiles(profile))
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      site_id: this.site_id.value,
      name: this.name.value,
      description: this.description.value,
      profiles: this.profiles.values
    };
  }
}
