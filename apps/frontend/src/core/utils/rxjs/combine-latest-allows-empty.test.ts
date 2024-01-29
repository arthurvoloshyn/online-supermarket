import { getFirstValue } from "@app/core/test/observable-test-utils";
import { of } from "rxjs";
import { combineLatestAllowsEmpty } from "./combine-latest-allows-empty";

describe("combineLatestAllowsEmpty", () => {
  it("emits an empty array when no sources are provided", () => {
    expect(getFirstValue(combineLatestAllowsEmpty([]))).toEqual([]);
  });

  it("emits an array as combineLatest when there are observables", () => {
    expect(getFirstValue(combineLatestAllowsEmpty([of(1), of(2)]))).toEqual([
      1, 2,
    ]);
  });
});
