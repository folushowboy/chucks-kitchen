import Discovery from "../components/discovery/Discovery"
import DishList from "../components/dish-list/DishList"
import MenuList from "../components/menu-list/MenuList"
import Search from "../components/serach/Search"
import Footer from "../layout/footer/footer"
import Header from "../layout/header/Header"

function Menu() {
  return (
    <div>
        <Header/>
        <Discovery/>
        <Search/>
        <MenuList/>
        <DishList/>
        <Footer/>
    </div>
  )
}

export default Menu