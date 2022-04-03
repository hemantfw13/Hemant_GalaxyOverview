import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GalaxyBook from "./Component/GalaxyBook/GalaxyBook";
import { Navbar } from "./Component/Navbar/Navbar";
import { ImageLoaded } from "./Component/Image-loaded/ImageLoaded";
import { ScrollToTop } from "./Component/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageLoaded
        image={
          "https://images.samsung.com/is/image/samsung/assets/in/Banner2_1440x640.jpg?imwidth=1366"
        }
        title={`Galaxy Book2 Pro | Book2 Pro 360*`}
        description={"The new way way to PC "}
        top={"100px"}
        color={"black"}
        margin={"5%"}
      />
      <ImageLoaded
        image={
          "https://images.samsung.com/is/image/samsung/assets/in/Banner1_1440x640.jpg?$1440_640_JPG$"
        }
        title={"Galaxy Book2 Pro 360"}
        description={"360 degrees of thin and stylish 2-in-1 creativity"}
        top={"1000px"}
        color={"black"}
        margin={"55%"}
      />
      <GalaxyBook />
      <ImageLoaded
        image={
          "https://images.samsung.com/is/image/samsung/assets/in/PCD_KV_Venus2_PC_1440x640.jpg?$1440_640_JPG$"
        }
        title={"Galaxy Book2 Pro**"}
        description={"Light. Powerful.Made to move in style"}
        top={"2600px"}
        color={"black"}
        margin={"50%"}
      />
      <GalaxyBook />
      <ScrollToTop />
    </div>
  );
}

export default App;
