
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'databuku', component: () => import('pages/home/DataBuku.vue') },
      { path: 'inputdatabuku', component: () => import('pages/home/InputDataBuku.vue') },
      { path: 'datatransaksi', component: () => import('pages/home/DataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
