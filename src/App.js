import "./App.css";
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
  return (
    <div className="App">
      <Home />
      <Navbar />
      <PictureCarousel
        link="flower"
        picturesArray={flowers}
        title="Fleurs séchées"
        subtitle="A partir de 15€"
        paragraph="L'atelier Bloom propose des bouquets de fleurs séchées confectionnés avec amour et passion dans son atelier. Des créations poétiques et raffinées, durables et responsables. Succomber à l’un de nos bouquets en fleurs séchées c’est profiter de jolies compositions sans les voir faner."
      />
      <PictureCarousel
        link="terrarium"
        picturesArray={terrariums}
        title="Terrarium"
        subtitle="A partir de 15€"
        paragraph="Créatif et décoratif, le terrarium réinvente le végétal ! Plongez votre intérieur dans un esprit 100% nature en adoptant la tendance du terrarium. Vous n'avez pas la main verte ? Bonne nouvelle : les plantes qui vivent dans ces bulles de verre nécessitent très peu d'entretien."
        alt
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
        subtitle="A partir de 15€"
        paragraph="Je crée chaque bijou végétal à la main dans mon atelier, en apportant tout le soin nécessaire à chaque pièce. La résine, transparente ou colorée, permet de préserver idéalement les fleurs et conserver leur fraîcheur naturelle."
        alt
      />
      <PictureCarousel
        link="pottery"
        picturesArray={potteries}
        title="Jardinière/Poterie"
        subtitle="A partir de 15€"
        paragraph="Pour un balcon, une terrasse ou un jardin fleuri, choisissez de belles jardinières. Poterie, céramique ou bac à fleurs, retrouvez nos articles pour vous aider à faire le bon choix. Vos fleurs et potager miniature vous diront merci !"
      />
      <Contact />
    </div>
  );
}

export default App;
