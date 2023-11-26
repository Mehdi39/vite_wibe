import { useRef } from "react"
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from "./sections/Home";

function App() {
  const containerRef = useRef();

  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
            }
          }

          watch={
            [
              //
            ]
          }
        >
          <main data-scroll-container ref={containerRef}>
            <Home/>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default App
