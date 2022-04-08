import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoePrints,
  faTrafficLight
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
  library.add(faTrafficLight, faShoePrints);
}
