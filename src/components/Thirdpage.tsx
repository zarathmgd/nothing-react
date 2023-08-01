import ArtisanalBrand from "../assets/artisanal-perfume-bg.jpg";

export default function Thirdpage() {
  return (
    <div className="thirdpage">
      <h1 id="about">ABOUT US</h1>
      <div className="container">
        <img src={ArtisanalBrand} alt="Artisanal perfume background" />
        <div className="content">
          <h2>
            <span>NOTHING</span>,
          </h2>
          <p>
            It's 8 years of experience in the field of perfumery. Created in 2015 by a young traveler wishing to rediscover the flavors
            of his adventure, the brand was born to offer the world the experience of an immersive journey anywhere. Living in the
            middle of oriental markets, diving to the bottom of the ocean or ending up picking in the woods through its perfumes, this
            is <span>NOTHING</span>'s bet. Join the journey and let yourself be carried away by the scents of the world !
          </p>
        </div>
      </div>
    </div>
  );
}
