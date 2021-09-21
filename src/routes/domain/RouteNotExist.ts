export class RouteNotExist extends Error {
  constructor() {
    super('The route does not exists');
  }
}
