import Mountain1 from "../Images/dawki1.jpg";
import Mountain2 from "../Images/dawki2.jpg";
import Mountain3 from "../Images/pahal1.jpg";
import Mountain4 from "../Images/pahal2.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Dawki,Meghalaya"
        text="Situated on the India- Bangladesh Border this is a small town in the lap of the Jaintia Hills. 
        Another place of immense natural beauty in Meghalaya, this is known mainly as a coal exporter to Bangladesh and also places of India. The main attraction here apart from the extreme natural beauty and peace is the Dawki Bridge. It is a suspension bridge over the Umngot River and also serves as a place from where all tourists can enjoy some spectacular panoramic views. The emerald colour of the Dawki river is the major attractions of the place and hence Dawki tourism has flourished in the past few years."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Pahalgam, Jammu & Kashmir"
        text="Pahalgam is famous for its scenic beauty and is the jewel of the picturesque Liddar valley in the high Himalayas.
         It provides an ideal setting for hiking, trekking, and fishing. It is also the starting point of the annual pilgrimage to the holy cave of Amarnath.The origin of Pahalgam is obscure. Mughal rulers ruled this region in the medieval period. It was later a part of the Kingdom of Kashmir, which local Hindu rulers ruled. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
