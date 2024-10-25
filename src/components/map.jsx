import globalmap from "../assets/Globalmap.png";
import netflix from "../assets/netflix.png";
import reddit from "../assets/reddit.png";
import amazon from "../assets/amazon.png";
import discord from "../assets/discord.png";
import spotify from "../assets/spotify.png";

export default function Map() {
  return (
    <>
      <div className="map-section">
        <h2>
          Huge Global Network <br></br> of Fast VPN
        </h2>
        <p>
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </p>
        <img src={globalmap} alt="" className="global-map"/>
        <div className="map-company-logos">
          <img src={netflix} alt="" />
          <img src={reddit} alt="" />
          <img src={amazon} alt="" />
          <img src={discord} alt="" />
          <img src={spotify} alt="" />
        </div>
      </div>
    </>
  );
}
