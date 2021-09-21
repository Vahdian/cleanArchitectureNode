export class ProgrammingRouteAlreadyExists extends Error {
  constructor(id: string) {
    super(`Route ${id} already exists`);
  }
}
