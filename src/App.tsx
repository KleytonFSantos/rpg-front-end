import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./contexts/Auth"

function App() {

  return (
     
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>   
    
  )
}

export default App
