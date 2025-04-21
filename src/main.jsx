import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import { PostsPage } from './pages/posts/index.jsx'
import { Root } from './components/Root/index.jsx'
import { DetailPostPage } from './pages/posts/detail/index.jsx'
import { EditPostPage } from './pages/posts/edit/index.jsx'
import { AddPostPage } from './pages/posts/add/index.jsx'
import { RegistrationPage } from './pages/registration/index.jsx'
import { AuthPage } from './pages/auth/index.jsx'
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
        element: <PostsPage />,
      },
      {
        path: 'posts/:id',
        element: <DetailPostPage />
      },
      {
        path: 'posts/:id/edit',
        element: <EditPostPage />
      },
      {
        path: 'posts/add',
        element: <AddPostPage />
      },
      {
        path: 'registration',
        element: <RegistrationPage />
      },
      {
        path: 'auth',
        element: <AuthPage />
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
