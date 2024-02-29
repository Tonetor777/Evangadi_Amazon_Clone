import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {

    const [{user, basket}, dispatch] = useContext(DataContext)

    const totalItem = basket?.reduce((amount, item) => {
        return item.amount + amount;
      }, 0);
    
  return (
    <>
    <section className={classes.fixed}>
    <div className={classes.header_container}>
        <div className={classes.logo_container}>
            <Link to="/">
            <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
            <div className={classes.delivery}>
            <span>
                <CiLocationOn />    
            </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
                </div>
            </div>
        </div>



        <div className={classes.search}>
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" placeholder="search products" />
            <IoSearch size={38} />
        </div>


        <div className={classes.order_container}>
            <a className={classes.language}>
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <select name="" id="">
                    <option value="">EN</option>
                </select>
            </a>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/orders">
                <div>
                <p>returns</p>
                <span>& Orders</span>
                </div>
            </Link>
            <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
            </Link>
        </div>
    </div>
    </section>
    <LowerHeader />
    </>
  );
}

export default Header;
