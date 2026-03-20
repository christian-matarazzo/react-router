import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>
            <div className="container-fluid bg-light shadow-sm">
                <div className="container">
                    <div className="row ">
                    <div className="h1 ">Welcome to Reacta.</div>
                        <div className="col">
                            <p className="h3">Your new look at just one click away.</p>
                            <Link to="/shop" className="btn btn-dark btn-lg px-4 me-2 my-3">Buy now</Link>
                        </div>
                        <div className="col">
                           <img src="/lady-commerce.png" className="w-50 mx-auto" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}