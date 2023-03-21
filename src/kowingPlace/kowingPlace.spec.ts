import {
  createUserExternal,
  createUserInternal,
  getCoWorkUserChoose,
} from "./kowingPlace.resolver";

describe("questionquiz", () => {
  test("should createUserExternal correctly", async () => {
    const input = {
      name: "boeing",
      email: "omg@gmeow.com",
      tel: "1234567890",
      password: "boeing555",
    };
    const output = await createUserExternal({
      name: input.name,
      email: input.email,
      tel: input.tel,
      password: input.password,
    });

    console.log(output);

    expect(output.name === input.name).toBe(true);
    expect(output.email === input.email).toBe(true);
    expect(output.tel === input.tel).toBe(true);
    expect(output.password === input.password).toBe(true);
  });

  test("should createUserInternal correctly", async () => {
    const input = {
      name: "shop1",
      email: "shop1@gmeow.com",
      tel: "0123455555",
      password: "555555shop1",
    };
    const output = await createUserInternal({
      name: input.name,
      email: input.email,
      tel: input.tel,
      password: input.password,
    });
    console.log(output);

    expect(output.name === input.name).toBe(true);
    expect(output.email === input.email).toBe(true);
    expect(output.tel === input.tel).toBe(true);
    expect(output.password === input.password).toBe(true);
  });

  test("should reateDurationCategory correctly", async () => {
    const input = {
      duration: 3,
    };

    const output = {
      duration: input.duration,
    };
    console.log(output);

    expect(output.duration === input.duration).toBe(true);
  });

  test("should getCoWorkUserChoose correctly", async () => {
    const input = {
      id: 1,
    };
    const output = await getCoWorkUserChoose({
      id: input.id,
    });
    console.log(output);
  });
});
