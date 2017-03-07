import HomeComponent from './features/home.component/home.component';
import FormComponent from './features/form.component';
export default {
  path: '/',
  childRoutes: [
    FormComponent
  ],
  indexRoute: {
    component: HomeComponent
  }
};