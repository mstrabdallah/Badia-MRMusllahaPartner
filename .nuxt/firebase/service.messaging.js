

export default async function (session, firebase) {
  // Can only be initiated on client side
  if (!process.client) {
    return
  }

  await import(/* webpackChunkName: 'firebase-messaging' */'firebase/compat/messaging')

  if (firebase.messaging.isSupported()) {
    const messagingService = session.messaging()

    messagingService.getToken({vapidKey: "BIY1eVUiXdLL3mnaqdjmWLM3OLFCB-hIV784pNey6i0t4HSpTIuchVBRJll--IIU9MwpaF-885K_5xL-22V4vRI"})

    return messagingService
  }
}
