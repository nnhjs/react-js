Bundling

- process of following imported files and merging them into a single file: a "bundle".

Code Splitting

- "lazy-load"
- All bundler is support "lazy-load"

React.lazy

- "lazy-load-component"
- The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we're waiting for the lazy component to load

Avoiding fallbacks

- You can use the new startTransition API

Error boundaries

- If lazy component is failed -> show Error boundaries instead of crash your app

Route-based code splitting

- React.lazy + React Router

Name Exports

- React.lazy currently only support default exports.
- So if component is export const, you must change export default or reexport it as the default.

Tools:

1. webpack
2. Rollup
