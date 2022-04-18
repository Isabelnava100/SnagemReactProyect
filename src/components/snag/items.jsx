import React from 'react'; //imr
import question from "@images/temporary/question.png";
import item1 from "@images/temporary/Bag_Enigma_Berry_Sprite.png";
import item2 from "@images/temporary/Bag_Starf_Berry_Sprite.png";
import item3 from "@images/temporary/Bag_Balm_Mushroom_Sprite.png";
import item4 from "@images/temporary/Bag_Big_Nugget_Sprite.png";
import item5 from "@images/temporary/Bag_Blue_Shard_Sprite.png";
import item6 from "@images/temporary/Bag_Dragon_Scale_Sprite.png";
import item7 from "@images/temporary/Bag_Green_Shard_Sprite.png";
import item8 from "@images/temporary/Bag_Nugget_Sprite.png";
import item9 from "@images/temporary/Bag_Pearl_String_Sprite.png";
import item10 from "@images/temporary/Bag_Red_Shard_Sprite.png";
import item11 from "@images/temporary/Bag_Shiny_Pokeblock_Sprite.png";
import item12 from "@images/temporary/Bag_Yellow_Shard_Sprite.png";
import item13 from "@images/temporary/Bag_Charcoal_Sprite.png";
import item14 from "@images/temporary/Bag_Cleanse_Tag_Sprite.png";
import item15 from "@images/temporary/Bag_Dark_Gem_Sprite.png";
import item16 from "@images/temporary/Bag_Destiny_Stone_Sprite.png";
import item17 from "@images/temporary/Bag_Ghost_Gem_Sprite.png";
import item18 from "@images/temporary/Bag_Shed_Shell_Sprite.png";
import item19 from "@images/temporary/Bag_Zoom_Lens_Sprite.png";
import item20 from "@images/temporary/Bag_Rare_Candy_Sprite.png";
import item21 from "@images/temporary/Bag_Great_Ball_Sprite.png";
import item22 from "@images/temporary/Bag_Poke_Ball_Sprite.png";
import item23 from "@images/temporary/Bag_Ultra_Ball_Sprite.png";

const Itemsuser = (props) => {
    
    return (
  
<div className="itemtablist">
<h3 className='font-quantico'>Your Items</h3>
    <span className="itemcattab"><h4>Berries</h4>

    <div className="tooltip extra">
    <span className="centerthis"><img src={item1} className="itemsprite" />
     1 <span>Enigma Berry</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">If held by a Pokemon, it restores its HP if it is hit by any supereffective attack.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item2} className="itemsprite" />
     1 <span>Starf Berry</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Sharply raises a random stat when HP is low.</span></div></span>
<span className="itemcattab"><h4>General items</h4>
<div className="tooltip extra">
    <span className="centerthis"><img src={item3} className="itemsprite" />
     1 <span>Balm Mushroom</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A rare mushroom which gives off a nice fragrance. A maniac will buy it for a high price.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item4} className="itemsprite" />
     1 <span>Big Nugget</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A big nugget of pure gold that gives off a lustrous gleam. A maniac will buy it for a high price.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item5} className="itemsprite" />
     2 <span>Blue Shard</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A small blue shard. It appears to be from some sort of implement made long ago.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item6} className="itemsprite" />
     1 <span>Dragon Scale</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Evolves Seadra when traded holding the item.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item7} className="itemsprite" />
     2 <span>Green Shard</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A small green shard. It appears to be from some sort of implement made long ago.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item8} className="itemsprite" />
     1 <span>Nugget</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A nugget of pure gold that gives off a lustrous gleam. It can be sold at a high price to shops.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item9} className="itemsprite" />
     1 <span>Pearl String</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Very large pearls that sparkle in a pretty silver color. A maniac will buy them for a high price.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item10} className="itemsprite" />
     2 <span>Red Shard</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A small red shard. It appears to be from some sort of implement made long ago.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item11} className="itemsprite" />
     1 <span>Shiny Pokeblock</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A special Pokeblock which causes a Pokemon or Hybrid who eat it to become permanently shiny.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item12} className="itemsprite" />
     2 <span>Yellow Shard</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A small yellow shard. It appears to be from some sort of implement made long ago.</span></div></span>
<span className="itemcattab"><h4>Hold items</h4>
<div className="tooltip extra">
    <span className="centerthis"><img src={item13} className="itemsprite" />
     1 <span>Charcoal</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Increases the power of Fire-type moves.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item14} className="itemsprite" />
     1 <span>Cleanse Tag</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">An item to be held by a Pokemon. It helps keep wild Pokemon away if the holder is the first one in the party.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item15} className="itemsprite" />
     1 <span>Dark Gem</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Increases the power of a Dark-type move only once.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item16} className="itemsprite" />
     1 <span>Destiny Stone</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Absorbs half of the Evo Points a Pokemon holding it earns. Can later be used on another Pokemon to pass on those points to them.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item17} className="itemsprite" />
     2 <span>Ghost Gem</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Increases the power of a Ghost-type move only once.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item18} className="itemsprite" />
     1 <span>Shed Shell</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A tough, discarded carapace to be held by a Pokemon. It enables the holder to switch with a waiting Pokemon in battle.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item19} className="itemsprite" />
     1 <span>Zoom Lens</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">Raises a move's accuracy if the holder moves after its target.</span></div></span>
<span className="itemcattab"><h4>Medicine</h4>
<div className="tooltip extra">
    <span className="centerthis"><img src={item20} className="itemsprite" />
     1 <span>Rare Candy</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A candy that is packed with energy. It evolves any Pokemon requiring Evo Points, no matter how many needed.</span></div></span>
<span className="itemcattab"><h4>Pokeballs</h4>
<div className="tooltip extra">
    <span className="centerthis"><img src={item21} className="itemsprite" />
     3 <span>Great Ball</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A good, high-performance Ball that provides a higher Pokemon catch rate than a standard Poke Ball.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item22} className="itemsprite" />
     3 <span>Poke Ball</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">A device for catching wild Pokemon. It is thrown like a ball at the target. It is designed as a capsule system.</span></div><div className="tooltip extra">
    <span className="centerthis"><img src={item23} className="itemsprite" />
     3 <span>Ultra Ball</span>
    </span>
<img src={question} className="img" />
<span className="tooltiptext">An ultra-performance Ball that provides a higher Pokemon catch rate than a Great Ball.</span></div></span>
</div>
    )
}

export default Itemsuser;
