function NotFound404() {
    return ( 
            <div className="row justify-content-center">
                <div className="col-md-12 col-sm-12">
                    <div class="d-flex align-items-center justify-content-center vh-100">
                        <div class="text-center">
                            <h1 class="display-1 fw-bold">404</h1>
                            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                            <p class="lead">
                                The page you’re looking for doesn’t exist.
                            </p>
                            <a href="index.html" class="btn btn-primary">Go Home</a>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default NotFound404;