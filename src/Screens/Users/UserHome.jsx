import React, { useEffect } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grocery from '../../Assets/Images/grocery.png'
import SearchIcon from '@mui/icons-material/Search';
import ShopGrocery from '../../Assets/Images/shop_grocery.jpeg'
import vegetable from '../../Assets/Images/vegetable.png'
import meat from '../../Assets/Images/meat.jpeg'
import AddIcon from '@mui/icons-material/Add';
import { UserFooter } from '../../Components/index'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/firebase';
function UserHome() {
  let data = [{
    img: { meat },
    Name: 'meat',
    price: 'RS.800-per Kg'

  },
  {
    img: { meat },
    Name: 'meat',
    price: 'RS.800-per Kg'

  }]
  const add = () => {
    alert('add')
  }
  const getData = async() => {
    const q = query(collection(db, "Products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }
  useEffect(() => {
    getData()
  })
  return (
    <>
      <div className="user_home_page_main_section">
        <div className="user_interface_navbar">
          <div className="users_heading">
            <h1>SAYLANI WELFARE</h1>
            <p>DISCOUNT STORE</p>
          </div>
          <div className="cart_icon">
            <AddShoppingCartIcon />
          </div>
        </div>

        <div className="discount_store_grocery_image_div">
          <img className='discount_store_grocery_image' src={Grocery} alt="" />
        </div>
        <div className="search_input_div">
          <SearchIcon />     <input type="text" className="search" placeholder='Seacrh by Product NAme' />
        </div>
        <div className="shop_categery">
          <div className="shop_category_heading">
            Shop By Categery
          </div>
          <div className="section_of_category">
            <div className="categery_box">
              <img src={ShopGrocery} alt="" />
            </div>
            <div className="categery_box">
              <img src={vegetable} alt="" />
            </div>
            <div className="categery_box">
              <img src={ShopGrocery} alt="" />
            </div>
            <div className="categery_box">
              <img src={ShopGrocery} alt="" />
            </div>
          </div>


          {
            data.map((v, i) => {
              return (
                <>
                  <div className="categery_description">
                    <div className="cateries">
                      <div className="cateries_image"><img src={meat} alt="" /></div>
                      <div className="Description">
                        <h1>{v.Name}</h1>
                        <p>This is product description </p>
                        <p> This is abc product description</p>


                      </div>
                      <div className="categries_button">
                        <p>{v.price}</p>
                        <buttono onClick={add} ><AddIcon /></buttono>
                      </div>
                    </div>

                  </div>
                </>
              )
            })
          }





          {/* <div className="categery_description">
            <div className="cateries">
              <div className="cateries_image"><img src={meat} alt="" /></div>
              <div className="Description">
                <h1>Meat</h1>
                <p>This is product description </p>
                   <p> This is abc product description</p>


              </div>
              <div className="categries_button">
              <p>RS.800-per Kg</p>
                <button ><AddIcon/></button>
              </div>
            </div>

          </div> */}

        </div>
        <UserFooter />
      </div>
    </>
  )
}

export default UserHome
