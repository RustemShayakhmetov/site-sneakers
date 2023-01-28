import React from 'react';

const Drawer = ({items = [], onClose}) => {
   return (
      <div className="overlay">
         <div>
            <div className="drawer">
               <h2 className="d-flex justify-between mb-30">
                  Корзина
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Close" onClick={onClose}/>
               </h2>
               <div className="items">
                  {
                     items.map((item) => (
                        <div className="cartItem d-flex align-center mb-20">
                           <div
                              style={{ backgroundImage: `url(${item.imageUrl})` }}
                              className="cardItemImg"/>
                           <div className="mr-20">
                              <p className="mb-5">{item.title}</p>
                              <b>{item.price}</b>
                           </div>
                           <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>
                     ))
                  }
               </div>
               <div className="cartTotalBlock">
                  <ul>
                     <li>
                        <span>Итого</span>
                        <div></div>
                        <b>21 498 руб.</b>
                     </li>
                     <li>
                        <span>Налог 5%</span>
                        <div></div>
                        <b>1024 руб.</b>
                     </li>
                  </ul>
                  <button className="green-btn">Оформить заказ <img src="img/arrow.svg" alt="Arrow"/></button>
               </div>
            </div>
         </div>
      </div>

   );
};

export default Drawer;