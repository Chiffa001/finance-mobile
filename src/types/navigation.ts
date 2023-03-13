import {Routes} from '~/routes';

export type NavigationProps = {
  navigation: {
    navigate: (routeName: Routes) => void;
  };
};
