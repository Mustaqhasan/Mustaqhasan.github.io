
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import GitCalender from "./Components/GitCalender";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <GitCalender/>
    <Stats/>
    <Contact/>
    {/* <Projects/> */}
    </>
    // <Box>
      
    //   <Box p={4} display={{ md: "flex" }}>
    //     <Box flexShrink={0}>
    //       <Image
    //         borderRadius="lg"
    //         width={{ md: 40 }}
    //         src="https://bit.ly/2jYM25F"
    //         alt="Woman paying for a purchase"
    //       />
    //     </Box>
    //     <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    //       <Text
    //         fontWeight="bold"
    //         textTransform="uppercase"
    //         fontSize="sm"
    //         letterSpacing="wide"
    //         color="teal.600"
    //       >
    //         Marketing
    //       </Text>
    //       <Link
    //         mt={1}
    //         display="block"
    //         fontSize="lg"
    //         lineHeight="normal"
    //         fontWeight="semibold"
    //         href="#"
    //       >
    //         Finding customers for your new business
    //       </Link>
    //       <Text mt={2} color="gray.500">
    //         Getting a new business off the ground is a lot of hard work. Here
    //         are five ideas you can use to find your first customers.
    //       </Text>
    //     </Box>
    //   </Box>
    // </Box>

  );
}

export default App;
