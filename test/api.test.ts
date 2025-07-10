import { fetchData } from "../src/api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      }),
  })
) as jest.Mock;

describe("fetchData", () => {
  it("should return mocked todo data", async () => {
    const data = await fetchData();

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
  });
});
