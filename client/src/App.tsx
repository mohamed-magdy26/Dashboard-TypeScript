import { createTheme } from "@mui/material/styles"
import { themeSettings } from "@/theme.ts"
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"

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
            <Routes>
              <Route path="/" element={<Typography variant="h1" >Dashboard Page</Typography>} />
              <Route path="/predictions" element={<div>predictions Page</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App