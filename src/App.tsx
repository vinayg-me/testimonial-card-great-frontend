import "./App.css";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <div className="container h-svh mx-auto flex justify-center align-middle flex-col items-center">
      <TestimonialCard
        avatarUrl="/src/assets/img/profile-thumbnail.png"
        title="Sarah Dole"
        subTitle="@sarahdole"
      >
        <p className="text-left">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </TestimonialCard>
    </div>
  );
}

export default App;
