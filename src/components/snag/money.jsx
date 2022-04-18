import React from 'react'; //imr
import coin from "@images/coin.png";
import gengarcoin from "@images/gengarcoin.png";
import snagemblem from "@images/snagemblem.png";
import activitygem from "@images/activitygem.png";

const Money = (props) => {
    return (
        <div className='itemtablist'>
           <h3 className='font-quantico'>Your Money</h3>
  <div className="coincontent">
 <img src={coin} alt="coin img"/> <strong>
     {props.money.snagcoin?
     props.money.snagcoin:0} Snag coins</strong>
 <p className="captionBase">Used for generic buying.</p>
 </div>

 <div className="coincontent">
 <img src={gengarcoin} alt="coin img"/> <strong>
     {props.money.gengarcoin?
     props.money.gengarcoin:0} Gengar coins</strong>
 <p className="captionBase">Used for the casino.</p>
 </div>

 <div className="coincontent">
 <img src={snagemblem} alt="coin img"/> <strong>
     {props.money.snagemblem?
     props.money.snagemblem:0} Snag Emblem Pieces</strong>
 <p className="captionBase">Used for special alchemy.<br/>3 pieces makes 1 Emblem.</p>
 </div>

 <div className="coincontent">
 <img src={activitygem} alt="coin img"/> <strong>
     {props.money.activitypoints?
     props.money.activitypoints:0} Activity Gems</strong>
 <p className="captionBase">Used for special shops.</p>
 </div>
      </div>
    )
}

export default Money;