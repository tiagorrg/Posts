import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import { Posts } from './pages/posts/index.jsx'
import { Root } from './components/Root/index.jsx'
import { DetailPost } from './pages/posts/detail/index.jsx'
import { EditPost } from './pages/posts/edit/index.jsx'
import { AddPost } from './pages/posts/add/index.jsx'
import { Registration } from './pages/registration/index.jsx'
import { Auth } from './pages/auth/index.jsx'
import { store } from './redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'posts/:id',
        element: <DetailPost />
      },
      {
        path: 'posts/:id/edit',
        element: <EditPost />
      },
      {
        path: 'posts/add',
        element: <AddPost />
      },
      {
        path: 'registration',
        element: <Registration />
      },
      {
        path: 'auth',
        element: <Auth />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
