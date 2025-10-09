import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="text-center">
              {/* Animated 404 */}
              <div className="mb-5">
                <h1 className="display-1 fw-bold">404</h1>
              </div>

              {/* Content */}
              <h2 className="h1 fw-bold mb-3">Page Not Found</h2>
              <p className="lead text-muted mb-5">
                The page you're looking for doesn't exist or has been moved.
              </p>

              {/* Buttons */}
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={() => navigate("/")}>
                  Go Home
                </button>
                <button
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={() => navigate(-1)}>
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
