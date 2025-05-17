import './navbar.css'


const Navbar = () => {
    return ( 
        <>
        <div className='root'>
        <div className="nav">
          <ul><li><a>Home</a></li></ul>
          <ul><li><a>Products</a></li></ul>
          <ul><li><a>cart</a></li></ul>
          <ul><li><a href="#">checkout</a></li></ul>
          <ul><li><a href="#">AllProducts</a></li></ul>
          <input id='searchBar' placeholder="search"type='text'/>
          <h1><a href="#">Login</a></h1>
          <h1><a href="#">sing in</a></h1>
      
            </div>
            </div>
        </>
     );
}
 
export default Navbar;