
export default function ({route, store, redirect, app, i18n }) {

  // check cookie
 
  //console.log(this.req)
 //console.log(authId)
 
  if (app.$cookies.get('iA')===1) {

    store.state.auth.checkAuth = true;
    store.state.auth.token = app.$cookies.get('token');
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