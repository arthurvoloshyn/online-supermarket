# Some rules about the system which aren't linted

- All views must have stories
- All stories must use mocked props (no network calls etc)
- View models from presenters must be unit tested at least with snapshots
- Wireframes must not do any layout or styling, only composition and connecting view models to views
- Views must not do any business or formatting logic, only layout, styling and 1-1 rendering of data from view models, ideally they should not have any conditional operators (so there will be no need to unit test them)
- Presenters are doing formatting and preparing the data to be displayed
- Business logic must be placed to use cases
- The choice of storage must be abstracted by repository
- Views cannot import wireframes, only wireframes import views (so all views still could be put to the storybook without any business logic initialization)
- Views may have "holes" for wireframes - they may receive wireframe (or "connected view") from props or as children (which are props anyways). In storybook they should receive view with mocked view model
- Export / import between features happens through their root index file
