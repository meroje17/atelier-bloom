import "./App.css";
import React, { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import PictureCarousel from "./components/carousel/PictureCarousel";
import flowers from "./assets/flowers/flowers";
import terrariums from "./assets/terrariums/terrariums";
import roses from "./assets/roses/roses";
import resines from "./assets/resines/resines";
import potteries from "./assets/potteries/potteries";

function App() {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 650);

  window.onresize = function (event) {
    if (event.currentTarget.innerWidth <= 650 && !isPhone) setIsPhone(true);
    if (event.currentTarget.innerWidth > 650 && isPhone) setIsPhone(false);
  };

  return (
    <div className="App">
      <Home />
      <Navbar />
      <PictureCarousel
        link="flower"
        picturesArray={flowers}
        title="Fleurs séchées"
        subtitle="A partir de 15€"
        paragraph="L’atelier Bloom propose des bouquets et des compositions de fleurs séchées confectionnés avec passion dans mon atelier. Des créations durables dans le temps et responsables. Profitez de jolies compositions sans les voir faner."
      />
      <PictureCarousel
        link="terrarium"
        picturesArray={terrariums}
        title="Terrarium"
        subtitle="A partir de 10€"
        paragraph="Créatif et décoratif, le terrarium réinvente le végétal ! Plongez votre intérieur dans un esprit 100% nature en adoptant la tendance du terrarium. Vous n'avez pas la main verte ? Bonne nouvelle : les plantes qui vivent dans ces bulles de verre nécessitent très peu d'entretien."
        alt={!isPhone}
      />
      <PictureCarousel
        link="rose"
        picturesArray={roses}
        title="Roses éternelles"
        subtitle="A partir de 15€"
        paragraph="Les roses sont 100% naturelles et n'ont rien à voir avec des fleurs artificielles. Elles ont simplement été stabilisées par un procédé qui permet de figer leur évolution, les roses conservent donc ce bel aspect naturel et ce toucher velouté durant des années. Roses rouges, roses, blanches, oranges ou variées, optez pour la couleur de votre choix et appréciez la qualité de ces superbes roses immortelles."
      />
      <PictureCarousel
        link="resine"
        picturesArray={resines}
        title="Résines"
        subtitle="A partir de 12€"
        paragraph="Je crée chaque résine végétal à la main dans mon atelier, en apportant tout le soins nécessaires à chaque pièce. La résine permet d’immortaliser les fleurs."
        alt={!isPhone}
      />
      <PictureCarousel
        link="pottery"
        picturesArray={potteries}
        title="Compositions cactées"
        subtitle="A partir de 6.50€"
        paragraph="Ces pièces uniques de compositions cactées apporteront une note végétale à vos intérieurs."
      />
      <Contact />
    </div>
  );
}

export default App;
