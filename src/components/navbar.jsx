export default ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
            Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </span>
        </div>
        </nav> 
    );
};
