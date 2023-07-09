import { createTheme } from "@mui/material/styles"
import { themeSettings } from "@/theme.ts"
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "@/Components/Navbar"
import Dashboard from "./Pages/Dashboard"
import Predictions from "./Pages/Predictions"


const NavItems = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Predictions",
    path: "/predictions",
  },
]


const theme = createTheme(themeSettings)
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={
            {
              height: '100%',
              width: '100%',
              padding: '1rem 2rem 4rem 2rem',
            }
          }>
            <Navbar navItems={NavItems} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App