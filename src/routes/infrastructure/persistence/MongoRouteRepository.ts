import { Nullable } from '../../../shared/domain/Nullable';
import { MongoRepository } from '../../../shared/infrastructure/persistence/mongo/MongoRepository';
import { Route } from '../../domain/Route';
import { RouteId } from '../../domain/RouteId';
import { RouteRepository } from '../../domain/RouteRepository';

export class MongoRouteRepository
  extends MongoRepository<Route>
  implements RouteRepository
{
  public async searchAll(): Promise<Route[]> {
    const collection = await this.collection();
    const documents = await collection.find({}).toArray();

    return documents.map((document: any) =>
      Route.fromPrimitives({ ...document, id: document._id })
    );
  }

  public save(route: Route): Promise<void> {
    return this.persist(route.id.value, route);
  }

  public async search(id: RouteId): Promise<Nullable<Route>> {
    const collection = await this.collection();
    const document: any = await collection.findOne({ _id: id.value });

    return document
      ? Route.fromPrimitives({ ...document, id: id.value })
      : null;
  }

  public async delete(id: RouteId): Promise<void> {
    const collection = await this.collection();
    await collection.deleteOne({ _id: id.value });
  }

  protected moduleName(): string {
    return 'waste_routes';
  }
}
