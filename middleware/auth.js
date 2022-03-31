
export default function ({ route, store, redirect, app, i18n }) {

  // check cookie


  const user = app.$cookies.get('user');

  //store.dispatch('routerToPage', data)
  //set lang

  if (app.$cookies.get('lang')) i18n.setLocale(app.$cookies.get('lang'))

  if (app.$cookies.get('iA') === 1 || app.$cookies.get('iA') === 0) {
    store.state.auth.user = user;
    store.state.auth.checkAuth = true;
  }



  const checkUser = store.state.auth.checkAuth;
  //---------------



  // Visitor Access
  if (!checkUser && [
    '/', '/ar',
    '/login', '/ar/login',
    '/register', '/ar/register',
    '/forgot-password', '/ar/forgot-password',
    '/privcy-policy', '/ar/privcy-policy',
    '/about', '/ar/about',
    '/terms-condition', '/ar/terms-condition',
  ].includes(route.path)) {
    return false
  }

  //  Invalid Access For Visitor

  if (!checkUser) {
    if (i18n.locale === 'en')
      return redirect('/login')
    else
      return redirect('/ar/login')
  }



  //  Access For User not activated
  if (user.current_step > 0 && user.current_step <= 7 && app.$cookies.get('iA') === 0 && [
    '/register', '/ar/register',
    '/about', '/ar/about',
    '/terms-condition', '/ar/terms-condition',
    '/privcy-policy', '/ar/privcy-policy',
    '/', '/ar',

  ].includes(route.path)) {
    return false
  }

  //  Invalid Access For User not activated

  if (user.current_step > 0 && user.current_step <= 7 && app.$cookies.get('iA') === 0) {
    if (user.current_step === 7) {
      if (i18n.locale === 'en')
        return redirect('/')
      else
        return redirect('/ar')

      return false
    }
    if (i18n.locale === 'en')
    return redirect('/register')
  else
    return redirect('/ar/register')
   }


  //  Invalid Access For User
  if (checkUser && [
    '/login', '/en/login',
    '/register', '/ar/register',
    '/forgot-password', '/ar/forgot-password',

  ].includes(route.path)) {
    if (i18n.locale === 'en')
      return redirect('/')
    else
      return redirect('/ar')

  }

  // functions 



}