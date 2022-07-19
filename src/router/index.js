import { createRouter, createWebHistory } from 'vue-router';

import ProductList from '../views/ProductList';
import ProductDetail from '../views/ProductDetail';
import ProductCreate from '../views/ProductCreate';
import ProductUpdate from '../views/ProductUpdate';
import SalesList from '../views/SalesList';
import ImageInsert from '../views/ImageInsert';
import store from '@/store';
import Swal from 'sweetalert2'

//네비게이션 가드
const requireAuth = () => (to, from, next) => {     
  if(store.state.user.iuser === undefined) { // store는 위에 import가 되어 있어서 가능하다.
    Swal.fire('로그인을 하세요.', '', 'warning');
    return;
  }
  next();
}

const routes = [  
  {
    path: '/',
    name: 'Home',    
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',    
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate,
    beforeEnter: requireAuth() // 로그인 되어있는지 확인하는 코드
  },
  {
    path: '/update',
    name: 'ProductUpdate',    
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',    
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',    
    component: ImageInsert,
    beforeEnter: requireAuth()
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
