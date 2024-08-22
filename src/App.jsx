import cardData from "./data/cardData";
import Card from "./components/Card";

function App() {
  return (
    <div className=" m-auto">
      {cardData.map((project) => (
        <Card
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default App;
