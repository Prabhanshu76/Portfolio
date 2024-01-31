import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import "./index.css";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const currentPage = 0;

  useEffect(() => {
    setMenuOpened(false);
    console.log("Current page:", section); // Log the page number
  }, [section]);

  // Get the window width
  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  // Set the pages variable based on the window width
  const pages = windowWidth >= 768 ? 8.5 : 10;

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        {
          <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
            <color attach="background" args={["#c2cbcc"]} />
            <ScrollControls pages={pages} damping={0.3}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Suspense>
                  {started && (
                    <Experience section={section} menuOpened={menuOpened} />
                  )}
                </Suspense>
              </Scroll>
              <Scroll html>
                {started && <Interface setSection={setSection} />}
              </Scroll>
            </ScrollControls>
          </Canvas>
        }
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          showButton={section === 0 ? false : true}
        />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
