import { Controller } from "../controller";
import { renderTemplate } from "../renderer";
import template from "../view/index.html" with { type: "text" };

interface Model {
  name: string;
  age: number;
}

export class HelloWorldController extends Controller {
  handle(req: Request): Response {
    const name = new URL(req.url).searchParams.get("name") || "World";
    const model: Model = { name, age: 42 };

    return new Response(renderTemplate(template, model as any), {
      headers: {
        "content-type": "text/html",
      },
    });
  }
}
