const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['settingsRouter'] = require('../middleware/settingsRouter.js')
middleware['settingsRouter'] = middleware['settingsRouter'].default || middleware['settingsRouter']

export default middleware
