import { Navigate } from "react-router-dom";


function ProtectedRoute({ user, children }: {children: React.ReactNode, user: string | null}) {
  if (!user) {
    return <Navigate to="/auth/welcome" />;
  } 
  return(
    <div>
      {children}
    </div>
  )
    
}

export default ProtectedRoute;
