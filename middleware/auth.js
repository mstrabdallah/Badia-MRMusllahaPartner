import { v5 as uuidv5 } from "uuid";

export default function ({ route, store, redirect, app, i18n }) {

  // check cookie

  //console.log(authId)
 
   const user = app.$cookies.get('user');

  // console.log('-----navigator-----',uuidv5(navigator.userAgent, "65f9af5d-f23f-4065-ac85-da725569fdcd"))
  // console.log('-----navigator-----',app.$uuid.v5(navigator.userAgent, "65f9af5d-f23f-4065-ac85-da725569fdcd"))


  if (app.$cookies.get('token')) {
    store.state.auth.token = app.$cookies.get('token');


  }
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