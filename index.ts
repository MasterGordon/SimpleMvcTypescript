import { HelloWorldController } from "./controller/HelloWorldController";

Bun.serve({
  port: 3000,
  fetch: (req) => {
    const controller = new HelloWorldController();
    return controller.handle(req);
  },
});
