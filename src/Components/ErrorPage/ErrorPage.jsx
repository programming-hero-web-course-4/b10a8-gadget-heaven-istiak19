import { Helmet } from "react-helmet";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate('/')
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ErrorPage404 - GadgetHeaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="text-center text-3xl">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                {
                    error.status === 404 && <div>
                        <button onClick={handleGoBack} className="btn bg-[#9538E2] text-xl font-medium">Go Back</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;