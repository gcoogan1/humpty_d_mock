import Star from '../assets/star.png';
import Vegan from '../assets/Vegan.svg';
//import Dumplings from '../assets/food/dumplings-placeholder.png';
//Dumplings
import AsianPork from '../assets/food/recents/dumplings/asian-pork-dumpling.png';
import BroccoliChedder from '../assets/food/recents/dumplings/broccoli-cheddar-dumpling.png';
import BuffaloChicken from '../assets/food/recents/dumplings/buffalo-chicken-dumpling.png';
import CheeseSteak from '../assets/food/recents/dumplings/cheesesteak-dumpling.png';
import HoneyChipotle from '../assets/food/recents/dumplings/honey-chipotle-chicken-dumpling.png';
import ItalianRoast from '../assets/food/recents/dumplings/italian-roast-dumpling.png';
import MedCauliflower from '../assets/food/recents/dumplings/mediterranean-cauliflower-dumpling.png';
import MixedBerry from '../assets/food/recents/dumplings/mixed-berry-cheesecake-dumpling.png';
import SpinachMozz from '../assets/food/recents/dumplings/spinach-mozzarella-ricotta-dumpling.png';
import OreoCheesecake from "../assets/food/recents/dumplings/oreo-dumpling.png";



//TODO:
//Need images


const dumplings = [
    { "id": 1, "meal":"Asian Pork", "image": AsianPork, "vegan" : "", "star": "", "info": "If you want traditional, this your stop..Pork shoulder, ginger, soy, scallions."},
    { "id": 2, "meal":"Broccoli & Cheddar", "image": BroccoliChedder, "vegan" : Vegan, "star": "","info": "Only two ingredients in this classic, if you enjoy this casserole dish you'll love the dumplings."},
    { "id": 3, "meal":"Buffalo Chicken", "image": BuffaloChicken, "vegan" : "", "star": "","info": "Like a boneless wing. Only better! mild heat."},
    { "id": 4, "meal":"Honey Chipotle Chicken", "image": HoneyChipotle, "vegan" : "", "star": "","info": "Chicken breast, smoked gouda, red onions, scallions, honey chipotle bbq sauce. Think sweet and smokey."},
    { "id": 5, "meal":"Cheesesteak", "image": CheeseSteak, "vegan" : "", "star": "", "info": "Chip steak, american cheese."},
    { "id": 6, "meal":"Mixed Berry Cheesecake", "image": MixedBerry, "vegan" : Vegan, "star": Star ,"info": "Raspberry, blueberry, blackberry in a cheesecake filling."},
    { "id": 7, "meal":"Spinach Mozzarella & Ricotta", "image": SpinachMozz, "vegan" : Vegan, "star": Star, "info": "Spinach Mozzarella & Ricotta."},
    { "id": 8, "meal":"Mediterranean Roasted Cauliflower", "image": MedCauliflower, "vegan" : Vegan, "star": Star, "info": "Roasted cauliflower & carrots, rose harissa, pomegranate, and cilantro."},
    { "id": 9, "meal":"Italian Roast Pork", "image": ItalianRoast, "vegan" : "", "star": Star, "info": "Pork loin, broccoli rabe, herb & garlic sauce w/ imported aged provolone."},
    { "id": 10, "meal":"Oreo Cheesecake", "image": OreoCheesecake, "vegan" : "", "star": Star, "info": "Oreo cheesecake filling, tossed in oreo crumbles."},

];

export default dumplings;


