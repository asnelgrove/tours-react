import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AllTours from "./pages/AllTours";
import Cart from "./pages/Cart";
import ViewTour from "./pages/ViewTour";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

const data = [
  {id: 1,
  title: "London One Day Highlights Tour",
  price: 99,
  image: "https://source.unsplash.com/iP8ElEhqHeY",
  imgdesc: "A red double-decker bus drives by Big Ben",
  description: "Pressed for time? See all the top sights of London on this full-day bus tour, including Westminster Abbey, Buckingham Palace, Big Ben, Picadilly Circus, St. Paul's Cathedral and the Tower of London. Enjoy live commentary as you explore this vibrant and historic city - a place that offers all that life can afford!",
  location: "Europe",
  length: 1  
  },
  {id: 2,
  title: "Two Day Paris Highlights Tour",
  price: 179,
  image: "https://source.unsplash.com/QAwciFlS1g4",
  imgdesc: "The Eiffel Tower rises above streets and parks against a blue sky",
  description:  "Pressed for time? See all the top sights of Paris on this two-day bus tour including: Notre Dame Cathedral, the Eiffel Tower, the Louvre, Montmartre and the Arc de Triomphe on day one, then the Catacombs and the Palace of Versailles on day two. Enjoy live commentary as you explore one of Europe's largest and most historic cities.",
  location:"Europe",
  length: 2
  },
  {id: 3,
  title: "Naples, Pompeii, and the Amalfi Coast",
  price: 799,
  image: "https://source.unsplash.com/N8noGei1-1I",
  imgdesc: "The city and bay of Naples stretch out along the coast, with Mount Vesuvius looming in the background.",
  description: "Over three days you'll explore colorful and historic Naples, with its alleys, churches, museums, and castles, then journey back in time to ancient Pompeii, silent beneath the shadow of Vesuvius, and lastly you'll wind your way along the Costa Amalfitana taking in the incredible sea views and the captivating coastal towns of Positano and Amalfi.",
  location:"Europe",
  length: 3},
  {id: 4,
  title: "Best of Egypt",
  price: 4999,
  image: "https://source.unsplash.com/GNdp2Q4VZjw",
  imgdesc: "Four monumental statues of a pharoah decorate the facade of an ancient temple.",
  description: "Travel through five thousand years of history on this unforgettable tour that starts in bustling Cairo, home to the Grand Egyptian Museum and the Pyramids of Giza, before embarking on a Nile cruise to Luxor - the world's biggest open-air museum! Walk through magnificent ancient temples, then head to the Valley of the Kings and step into the royal tombs of the pharoahs. Complete your epic journey with a visit to Abu Simbel, ancient Egypt's most monumental temple and an astonishing feat of engineering.",
  location:"Africa",
  length: 7},
  {id: 5,
  title: "South African Safari",
  price: 2499,
  image: "https://source.unsplash.com/kfxEUCTUeyg",
  imgdesc: "A giraffe strides across the savannah in early morning light.",
  description: "Be inspired by nature on this classic safari tour through South Africa's Kruger National Park. From your hotel in Johannesburg, you'll be transferred to Kruger by bus. There, you'll spend three nights in a beautiful tourist lodge. Each morning you'll have the chance to go on a game drive with an experienced park ranger. There is also an evening drive each day to give you more chances to spot wildlife. Between game drives you'll have plenty of time to relax in comfort and style at the five-star lodge. On the final day, you will be transferred back to Johannesburg.",
  location:"Africa",
  length: 4},
  {id: 6,
  title: "Best of Japan",
  price: 5999,
  image: "https://source.unsplash.com/N4DbvTUDikw",
  imgdesc:  "A multi-tiered Japanese temple faces Mount Fuji across a plain.",
  description: "Experience all that Japan has to offer in this week-long tour. You'll stay in three cities: Tokyo, Kyoto, and Osaka. Visit temples, palaces, and the iconic Mount Fuji. You'll have unforgettable cultural experiences like the ancient tea ceremony, and take in a traditional Japanese play. Try all the sake and sushi you want in the bustling nightlife of this country's most vibrant cities.",
  location:"Asia",
  length: 7},
  {id: 7,
  title: "Highlights of South America",
  price: 9999,
  image: "https://source.unsplash.com/7F65HDP0-E0",
  imgdesc:  "A view of Sugar Loaf Mountain and the bay of Rio de Janeiro.",
  description: "This whirlwind tour of South America's most exciting cities will leave your head spinning! Sip caipirinhas and party on the beach in Rio de Janeiro, admire the funky street art of Sao Paolo, be amazed at the sheer might of Iguazu Falls, then finish in sultry Buenos Aires, Argentina's capital of tango, Malbec, and steak (with chimichurri, of course!)",
  location:"Americas",
  length: 10},
  {id: 8,
  title: "Best of Bali, Indonesia",
  price: 599,
  image: "https://source.unsplash.com/-RIHgVIKjYI",
  imgdesc: "Female peformers in colorful costumes dance to the music of a traditional gamelan orchestra.",
  description: "Welcome to Bali, the Island of the Gods! Let us take you to the sacred and breathtaking corners of this mysterious island: its temples, rice paddies, beaches and mountains. Let the songs, dances, and perfume of incense cleanse your soul and awaken your mind. Whether you're looking for a party crowd or inner peace, this tour will deliver unforgettable travel moments!",
  location:"Asia",
  length: 5},
  {id: 9,
  title: "New York City and Washington, D.C.",
  price: 999,
  image: "https://source.unsplash.com/x26qnmX0aXo",
  imgdesc: "A close-up view of the face of the Statue of Liberty.",
  description: "Start spreading the news! You're leaving for the Big Apple! From the top of the Empire State Building to Liberty Island, you'll take in all that America's #1 city has to offer. Enjoy a Broadway show, a visit to the Met, and a carriage ride through Central Park. Then climb aboard our air-conditioned tour bus for a day-long excursion to Washington, D.C. to see America's greatest Presidents, living and dead. This tour will leave you saying 'I love NY!'",
  location:"Americas",
  length: 3},
  {id: 10,
  title: "India's Golden Triangle",
  price: 1599,
  image: "https://source.unsplash.com/eU4pipU_8HA",
  imgdesc: "The gleaming facade of the Taj Mahal with its arches and domes is seen through an ancient stone gateway.",
  description: "See the best of central India on this tour of three magnificent cities: Delhi, Agra, and Jaipur. See the sacred sites, palaces, and fortresses of the Mughal Empire, including the Taj Mahal, one of the Eight New Wonders of the World. Step back in time at Fatehpur Sikri, a sprawling medieval fortress. Indulge in a world-class culinary experience and savour the spices and aromas of northern Indian cooking. Or go punting on the Yamuna river, follow a guided heritage walk, or get up close with elephants! This tour is guaranteed to leave a lasting impression!",
  location:"Asia",
  length: 7},
  {id: 11,
  title: "Down Under Adventure",
  price: 6299,
  image: "https://source.unsplash.com/1GFUOji-yck",
  imgdesc: "Uluru appears bright orange red against a blue sky and surrounded by desert scrub.",
  description: "Say G'Day to Australia! Begin your tour by soaking up the sun on Sydney's Bondi Beach, or climb the Sydney Harbour Bridge if you're brave! Go on an excursion to beautiful Jervis Bay and the serene Blue Mountains, shrouded in the haze of eucalyptus. Later, you'll fly to Alice Springs in the Red Centre of this vast country, where you'll be immersed in Aboriginal culture with a traditional performance of song and dance. No visit to the outback would be complete without seeing Uluru - majestic and mysterious. All along your journey you'll encounter Australia's unique wildlife: koalas, kangaroos, wallabies and more!",
  location:"Australia-Pacific",
  length: 9},
  {id: 12,
  title: "Everglades Day Tour from Miami",
  price: 129,
  image: "https://source.unsplash.com/EU0tmPAYXXg",
  imgdesc: "An alligator lurks through vegetation.",
  description: "Departing from Miami, this full-day tour will take you to the heart of Florida's Everglades National Park. Start with a guided hike lead by a park ranger, then board a fanboat to head out on the open water. Keep your eyes peeled for storks, snakes, and of course, alligators!",
  location:"Americas",
  length: 1} 
];

function App() {

const [cartItems, setCartItems] = useState([]);

const onAdd = (tour) => {
  const exist = cartItems.find((item) => item.id === tour.id);
  if (exist) {
    setCartItems(cartItems.map((item) => item.id === tour.id ? {...exist, qty: exist.qty + 1} : item))
  } else {
    setCartItems([...cartItems, {...tour, qty: 1}]);
    alert("This tour has been added to your Cart.")
  }
};

const onRemove = (tour) => {
  const exist = cartItems.find((item) => item.id === tour.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((item) => item.id !== tour.id))
  } else {
    setCartItems(cartItems.map((item) => item.id === tour.id ? {...exist, qty: exist.qty - 1} : item))
  }
}

const onCancel = () => {
  setCartItems([])
}

  return (
    <>
    <Nav cartItems={cartItems}/>
    <Routes>
      <Route path="/tours-react"  element={<Landing />}/>
      <Route path="/all-tours"  element={<AllTours data={data}/>}/>
      <Route path="/tour/:id" element={<ViewTour data={data} onAdd={onAdd}/>}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onCancel={onCancel}/> }/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
