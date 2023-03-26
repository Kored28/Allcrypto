import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
import { cryptoGekcoApi } from '../services/cryptoGekcoApi'

export default configureStore({
     reducer: {
          [cryptoApi.reducerPath]: cryptoApi.reducer,
          [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
          [cryptoGekcoApi.reducerPath]: cryptoGekcoApi.reducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( cryptoApi.middleware, cryptoNewsApi.middleware, cryptoGekcoApi.middleware),
})