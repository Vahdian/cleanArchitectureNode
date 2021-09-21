import { Nullable } from '../../../shared/domain/Nullable';
import { MongoRepository } from '../../../shared/infrastructure/persistence/mongo/MongoRepository';
import { ProgrammingRoute } from '../../domain/ProgrammingRoute';
import { ProgrammingRouteId } from '../../domain/ProgrammingRouteId';
import { ProgrammingRouteRepository } from '../../domain/ProgrammingRouteRepository';

export class MongoRouteRepository
  extends MongoRepository<ProgrammingRoute>
  implements ProgrammingRouteRepository
{
  public async searchAll(): Promise<ProgrammingRoute[]> {
    const collection = await this.collection();
    const documents = await collection.find({}).toArray();
    return documents.map((document: any) =>
      ProgrammingRoute.fromPrimitives({ ...document, id: document._id })
    );
  }

  public save(route: ProgrammingRoute): Promise<void> {
    return this.persist(route.id.value, route);
  }

  public async search(
    id: ProgrammingRouteId
  ): Promise<Nullable<ProgrammingRoute>> {
    const collection = await this.collection();
    const document: any = await collection.findOne({ _id: id.value });

    return document
      ? ProgrammingRoute.fromPrimitives({ ...document, id: id.value })
      : null;
  }

  public async delete(id: ProgrammingRouteId): Promise<void> {
    const collection = await this.collection();
    await collection.deleteOne({ _id: id.value });
  }

  protected moduleName(): string {
    return 'waste_route_programmings';
  }
}
