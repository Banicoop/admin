import { Navigate } from "react-router-dom";


function ProtectedRoute({ user, children }: {children: React.ReactNode, user: boolean}) {
    if (!user) {
      return <Navigate to="/auth/login" replace />;
    } 
    return(
      <div>
        {children}
      </div>
    )
    
  }

  export default ProtectedRoute;
