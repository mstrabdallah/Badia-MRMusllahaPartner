
export default function ({ route, store, redirect, app, i18n }) {

  // check cookie

 
   const user = app.$cookies.get('user');

   //set lang
   
   if(app.$cookies.get('lang')) i18n.setLocale(app.$cookies.get('lang'))

  if (app.$cookies.get('iA') === 1) {
    store.state.auth.user      = user;
    store.state.auth.is_online = user.is_online;
    store.state.auth.checkAuth = true;
  }else if( app.$cookies.get('iA') > 0 &&  app.$cookies.get('iA') <=7){
    store.state.auth.checkAuthStep = true;
    store.state.auth.current_step = user.current_step;

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