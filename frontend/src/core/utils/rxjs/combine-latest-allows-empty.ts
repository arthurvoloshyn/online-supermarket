import { combineLatest, Observable, ObservableInputTuple, of } from "rxjs";

export function combineLatestAllowsEmpty<A extends readonly unknown[]>(
  sources: readonly [...ObservableInputTuple<A>]
) {
  return (
    sources.length > 0 ? combineLatest(sources) : of([])
  ) as Observable<A>;
}
