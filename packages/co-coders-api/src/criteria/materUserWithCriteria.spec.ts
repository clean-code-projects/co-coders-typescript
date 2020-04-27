import { matchUserWithCriteria } from ".";

test("no match", async () => {
  const actual = await matchUserWithCriteria(
    {
      store: {
        getUsers: async () => Promise.resolve([]),
      },
    },
    {
      online: true,
      codingLangauages: ["TypeScript"],
    }
  );

  expect(actual).toEqual([]);
});

test("has single match", async () => {
  const actual = await matchUserWithCriteria(
    {
      store: {
        getUsers: async () =>
          Promise.resolve([
            {
              id: "Stas",
              online: true,
              codingLanguages: ["TypeScript", "Go"],
            },
          ]),
      },
    },
    {
      online: true,
      codingLangauages: ["Go"],
    }
  );
  expect(actual).toEqual(["Stas"]);
});

test("has single match with more users in the store", async () => {
  const actual = await matchUserWithCriteria(
    {
      store: {
        getUsers: async () =>
          Promise.resolve([
            {
              id: "Stas",
              online: true,
              codingLanguages: ["TypeScript", "Go"],
            },
            {
              id: "Homa",
              online: true,
              codingLanguages: ["TypeScript", "Go", "Dart"],
            },
          ]),
      },
    },
    {
      online: true,
      codingLangauages: ["Dart"],
    }
  );
  expect(actual).toEqual(["Homa"]);
});
