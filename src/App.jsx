import cardData from "./data/cardData";
import Card from "./components/Card";

function App() {
  return (
    <div className=" m-auto py-3">
      <h1 className=" text-center text-3xl mt-3">React Minor Projects</h1>
      {cardData.map((project) => (
        <Card
          title={project.title}
          description={project.description}
          link={project.link}
          tags={project.tags}
        />
      ))}
    </div>
  );
}

export default App;
