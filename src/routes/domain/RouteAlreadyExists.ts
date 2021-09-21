export class RouteAlreadyExists extends Error {
  constructor(id: string) {
    super(`Route ${id} already exists`);
  }
}
