
export default function ({ route, store, redirect, app, i18n }) {

  // check cookie

  //console.log(authId)
 
   const user = app.$cookies.get('user');

  if (app.$cookies.get('token')) {
    store.state.auth.token = app.$cookies.get('token');


  }
  if (app.$cookies.get('iA') === 1) {
    store.state.auth.user      = user;
    store.state.auth.is_online = user.is_online;
    store.state.auth.checkAuth = true;
  }

  return false;
  const checkUser = store.state.auth.checkAuth;
  //---------------


  // Visitor Access
  if (!checkUser && ['/login', '/', '/ar', '/ar/login'].includes(route.path)) {
    return false
  }

  //  Invalid Access For Visitor

  if (!checkUser) {
    if (i18n.locale === 'ar')
      return redirect('/login')
    else
      return redirect('/en/login')
  }

  //  Invalid Access For User
  if (checkUser && ['/login', '/ar/login'].includes(route.path)) {
    if (i18n.locale === 'ar')
      return redirect('/')
    else
      return redirect('/en')

  }




}