import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/route.tsx'
import { ThemeProvider } from './components/layout/theme-provider.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
    <RouterProvider router={routes} />
    </Provider>
    </ThemeProvider>
  </StrictMode>,
)
