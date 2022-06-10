// /stories/pages/home.stories.tsx

import Home from 'pages/index';

const componentMeta = {
  title: 'Pages/Home',
  component: Home,
};

export const HomePage = () => <Home />;

HomePage.parameters = {
  nextRouter: {
    route: '/',
  },
};

export default componentMeta;
