import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../Images/ne.jpg";
import Trip2 from "../Images/kedarnath.jpg";
import Trip3 from "../Images/kerela.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in North East"
          text="Encompassing the best of dense forests, ancient monasteries, snow-capped mountains, pristine valleys, glistening lakes, and cascading waterfalls, every bit of North East India feels like magic. Taking you one step closer to heaven, every person who’s a traveler by heart, must go on a North East trip at least once in their lifetime to unravel the secrets of North East India!"
        />
        <TripData
          image={Trip2}
          heading="Trip in Uttarakhand"
          text="A mystical land of mountains and mythologies, exquisite landscapes and exhilarating adventure, and wellness and yoga, Uttarakhand has something to offer every traveller. Popularly known as Devbhoomi, or the land of gods, the state is framed by the Himalayas and divided into two main regions, Garhwal and Kumaon."
        />
        <TripData
          image={Trip3}
          heading="Trip in Kerela"
          text="For many travelers, Kerala is South India's most serenely beautiful state. This slender coastal strip is defined by its layered landscape: almost 373 miles (600km) of glorious Arabian Sea coast and beaches; a languid network of glistening backwaters; and the spice- and tea-covered hills of the Western Ghats, dotted with fiercely protected wildlife reserves and cool hill stations such as Munnar."
        />
      </div>
    </div>
  );
}

export default Trip;
