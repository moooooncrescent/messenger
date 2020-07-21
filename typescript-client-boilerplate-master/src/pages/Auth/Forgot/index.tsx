import React from "react";

const Forgot = () => {
    return ( 
        <form className="form-signin text-center">
        <h1 className="h3 mb-3 font-weight-normal">reset moonchat?</h1>
            <label className="sr-only">Email address</label>
            <input type="email"  className="form-control" placeholder="Email address"></input>
            <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Reset password</button>
            <a href="/register" className="btn btn-link mt-2 mb-1 text-muted text-center" role="button" aria-pressed="true">Register</a>
            <a href="/" className="btn btn-link mt-2 mb-1 text-muted text-center" role="button" aria-pressed="true">Log In</a>
        </form>
    )
}
export default Forgot;