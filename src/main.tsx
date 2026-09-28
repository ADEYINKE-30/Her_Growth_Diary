import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { AboutRoute, ArticleRoute, DiaryRoute, HomeRoute, ResourcesRoute } from './App'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Root element not found')
}

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: '/', element: <HomeRoute /> },
			{ path: '/about', element: <AboutRoute /> },
			{ path: '/diary', element: <DiaryRoute /> },
			{ path: '/diary/:articleId', element: <ArticleRoute /> },
			{ path: '/resources', element: <ResourcesRoute /> },
		],
	},
])

createRoot(rootElement).render(<RouterProvider router={router} />)
