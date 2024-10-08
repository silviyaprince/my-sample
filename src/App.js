import "./App.css";
import { Addcolor } from "./Addcolor";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Productlist } from "./Productlist";
import { Routes, Route, Link, useParams, useNavigate ,Navigate} from "react-router-dom";
import { Home } from "./Home";
import { Productdetails } from "./Productdetails";
import { Userlist } from "./Userlist";
import { Editproduct } from "./Editproduct";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { Notfoundpage } from "./Notfoundpage";
import { Addproduct } from "./Addproduct";
import { Examplecontext } from "./context/Examplecontext";
import { Tictactoe } from "./Tictactoe";
import { Basicform } from "./Basicform";

export const INITIAL_PRODUCT_LIST = [
  {
    name: "iphone 15 pro max",
    price: "1,45,000",
    poster: "https://m.media-amazon.com/images/I/81+GIkwqLIL._SX679_.jpg",
    category: "Electronics",
    rating: 7,
    description:
      "iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
      trailer:"https://www.youtube.com/embed/xqyUdNxWazA?si=EDls807C2noHLuLm"
  },
  {
    name: "Sony Digital Camera ZV-1 ",
    price: "49,990",
    poster: "https://m.media-amazon.com/images/I/71q04J8-9YL._SL1500_.jpg",
    category: "Electronics",
    rating: 7.5,
    description:
      "20.1 MP stacked back illuminated 1 Exmor RS CMOS sensor / DRAM, Large aperture 24-70mm 1 F1.8-2.8 ZEISS Vario-Sonnar T lens;Directional 3-capsule inbuilt-mic with wind screen",
      trailer:"https://www.youtube.com/embed/tkweChULkrI?si=Or9VVjANVJj0uqrx"
  },
  {
    name: "Invicta Stainless Steel Specialty Chronograph Black Dial Analog Watch  ",
    price: "12,800",
    poster: "https://m.media-amazon.com/images/I/71xeDqb5BQL._SL1500_.jpg",
    category: "Electronics",
    rating: 7.5,
    description:
      "This model is powered by an accurate Quartz movement, 5 bar water pressure resistance",
      trailer:"https://www.youtube.com/embed/DRA3KWqGnlA?si=vfBkdJVoJeszO6fM"
  },
  {
    name: "Titan Edge Analog Black Dial Men's Watch  ",
    price: "12,435",
    poster: "https://m.media-amazon.com/images/I/41yMYFf-prL._SX679_.jpg",
    category: "Electronics",
    rating: 7.5,
    description:
      "Dial Color: Black, Case Shape: RectangularBand Color: Black, Band Material: Leather",
      trailer:"https://www.youtube.com/embed/-UvK5aRpuak?si=bp3OjQRqSvnbIOOc"
  },
];

function App() {
  const [mode, setMode] = useState("light");
  const [productlist, setProductlist] = useState([]);
  
  
  
  
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={Theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/products")}>
              ProductList
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/color-game")}>
              AddColor
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/user")}>
              Userlist
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/*")}>
              Somewhere
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/products/addproduct")}>
              ADD PRODUCT
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/context")}>
               CONTEXT
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/tic-tac-toe")}>
               TIC TAC TOE
            </Button>
            <Button
              sx={{ color: "#e3f2fd" }}
              variant="text"
              onClick={() => navigate("/basic-form")}>
              BASIC FORM
            </Button>
            <Button
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              sx={{ marginLeft: "57%", color: "#e3f2fd" }}
              variant="text"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}>
              {mode === "light" ? "dark" : "light"}MODE
            </Button>
          </Toolbar>
        </AppBar>
        {/* <nav>
        <ul>
          <li>
            
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            
            <Link to="/products">ProductList</Link>
          </li>
        </ul>
        <ul>
          <li>
            
            <Link to="/color-game">AddColor</Link>
          </li>
        </ul>
        <ul>
          <li>
            
            <Link to="/user">Userlist</Link>
          </li>
        </ul>
      </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Productlist/>
            }
          />
          <Route path="/items" element={<Navigate replace to="/products"/>}/>
          <Route path="/user" element={<Userlist />} />
          <Route path="/color-game" element={<Addcolor />} />
          <Route
            path="/products/:productid"
            element={<Productdetails productlist={productlist} />}
          />
          <Route path="/products/edit/:productid" element={<Editproduct />} />
          <Route path="/products/addproduct" element={<Addproduct productlist={productlist} setProductlist={setProductlist}/>}/>
          <Route path="/context" element={<Examplecontext />} />
          <Route path="/tic-tac-toe" element={<Tictactoe />} />
          <Route path="/basic-form" element={<Basicform />} />
          <Route path="/404" element={<Notfoundpage />} />
          <Route path="*" element={<Navigate replace to="/404" />}/>
        </Routes>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}
export default App;



