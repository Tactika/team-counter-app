import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
      <div>
        <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
        <h1>Page Not Found</h1>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    );
  };
  
  export default NotFoundPage;
