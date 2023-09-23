import { usersIcon, productsIcon, dashboardIcon, ordersIcon } from './icons';

// arrays for filters search
export const categoryArr = ['all', 'accessories', 'boots', 'gloves', 'helmets', 'jackets', 'leather-suits'];

// sort arr for sorting products
export const sortArr = ['price-up', 'price-down', 'name', 'discount'];

// admin dashboard menu items
export const asideMenuObj = [
   {
      title: 'dashboard',
      icon: dashboardIcon,
   },
   {
      title: 'products',
      icon: productsIcon,
   },
   {
      title: 'users',
      icon: usersIcon,
   },
   {
      title: 'orders',
      icon: ordersIcon,
   },
];
