import not_found from "/public/images/not-found.png"

const NotFound = () => {
    return ( 
        <div className="text-center mt-5 pt-5">
            <img src={not_found} alt="not-found" />
            <h1 className="mt-2">Page Not Found</h1>
        </div>
     );
}
 
export default NotFound;