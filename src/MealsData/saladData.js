import Image from "../assets/Image.png";
import Star from "../assets/star.png";
import Vegan from '../assets/Vegan.svg';
//import AsianSalad from '../assets/food/salad-placeholder.png';
import WinterSalad from '../assets/food/recents/salad/winter-salad.png'



const salad = [
  {
    id: 1,
    meal: "Asian Pear & Walnut Salad",
    image: WinterSalad,
    vegan: Vegan,
    star: Star,
    info:
      "Mixed Greens, shredded carrots and pears, and crushed walnuts w/ a pear vinaigrette."
  },
  {
    id: 2,
    meal: "Winter Greens & Berries",
    image: WinterSalad,
    vegan: "",
    star: Star,
    info:
      "Mixed Greens, dried cranberries, golden raisins, crumbled blue cheese & balsamic vinaigrette."
  }
];

export default salad;
