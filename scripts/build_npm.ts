import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

if (!Deno.args[0]) throw new Error("No version specified");

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  packageManager: "pnpm",
  compilerOptions: {
    lib: ["DOM", "ESNext"],
  },
  typeCheck: "both",
  package: {
    name: "radioco-api",
    author: {
      name: "James Cook",
      email: "james@jaminit.co.uk",
    },
    version: Deno.args[0],

    description: "An API wrapper for radio.co",
    repository: {
      type: "git",
      url: "https://github.com/jamesatjaminit/radioco-api.git",
    },
    keywords: [
      "radio",
      "radioco",
    ],
    license: "ISC",
    engines: {
      node: ">=18",
    },
    sideEffects: false,
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
