import { generate } from "../lib";

jest.useFakeTimers();

it("matches snapshots with config file", async () => {
  const generated = await generate();
  expect(generated).toMatchSnapshot();
});

it("matches snapshots without config file", async () => {
  const generated = await generate("test/shapes/solidProfile.shex", {
    "test/generated/withoutConfig.ts": ["typescript"],
  });
  expect(generated).toMatchSnapshot();
});
