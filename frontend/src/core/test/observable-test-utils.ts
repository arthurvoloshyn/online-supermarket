import { first, Observable } from "rxjs";

export const getFirstValue = <T>(observable$: Observable<T>): T => {
  let value: T | undefined = undefined;
  observable$
    .pipe(first())
    .subscribe((v) => {
      value = v;
    })
    .unsubscribe();
  // expecting subscribe callback to be called synchronously and set the value
  // otherwise the unit test will fail
  return value as unknown as T;
};
