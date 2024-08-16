import { DurableObject } from "cloudflare:workers";

type Env = {
  thing: DurableObjectNamespace<Thing>;
};

export class Thing extends DurableObject {
  async fetch(request: Request) {
    return new Response("Hello, world!");
  }
}

export default {
  fetch(request: Request, env: Env) {
    const id = env.thing.idFromName("some-thing");
    const stub = env.thing.get(id);
    const response = stub.fetch(request);
    return response;
  },
} satisfies ExportedHandler<Env>;
