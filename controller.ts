export abstract class Controller {
  abstract handle(req: Request): Response;
}
