import Image from '../assets/Image.png';
import Star from '../assets/star.png'
import Vegan from '../assets/Vegan.svg';
import Grey from '../assets/Grey.png';
import Broccoli from '../assets/food/Broccoli Dumps.PNG';
import Steak from '../assets/food/Steak Dumps.PNG';
import SMR from '../assets/food/SMR.jpeg';


//TODO:
//Need images


const dumplings = [
    { "id": 1, "meal":"Asian Pork", "image": Grey, "vegan" : "", "star": "", "info": "If you want traditional, this your stop..Pork shoulder, ginger, soy, scallions."},
    { "id": 2, "meal":"Broccoli & Cheddar", "image": Broccoli, "vegan" : Vegan, "star": "","info": "Only two ingredients in this classic, if you enjoy this casserole dish you'll love the dumplings."},
    { "id": 3, "meal":"Buffalo Chicken", "image": Grey, "vegan" : "", "star": "","info": "Like a boneless wing. Only better! mild heat."},
    { "id": 4, "meal":"Honey Chipotle Chicken", "image": Grey, "vegan" : "", "star": "","info": "Chicken breast, smoked gouda, red onions, scallions, honey chipotle bbq sauce. Think sweet and smokey."},
    { "id": 5, "meal":"Cheesteak", "image": Steak, "vegan" : "", "star": "", "info": "Chip steak, american cheese."},
    { "id": 6, "meal":"Vegan Burrito", "image": Grey, "vegan" : Vegan, "star": Star ,"info": "Rice, beans, corn, red bell pepper, cilantro & lime."},
    { "id": 7, "meal":"Spinach Mozzarella & Ricotta", "image": SMR, "vegan" : Vegan, "star": Star, "info": "Vegetarian."},
    { "id": 8, "meal":"Apple Pie", "image": Grey, "vegan" : "", "star": Star, "info": "Good old fashioned apple pie filling, exterior coated in cinnamon sugar."},

];

export default dumplings;


