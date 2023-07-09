import { Box, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import FlexBetween from "@/StyledComponents/FlexBetween"
import { Pix } from "@mui/icons-material";



type NavItems = {
	label: string,
	path: string,
}

type NavbarProps = {
	navItems: NavItems[]
}


const Navbar = ({ navItems }: NavbarProps) => {
	const [active, setActive] = useState<string>("dashboard")
	const { palette } = useTheme()

	return (
		<div>
			<FlexBetween mb='0.5rem' p='0.5rem 0rem' color={palette.grey[300]}>
				{/* Left Side */}
				<FlexBetween gap={1.5}>
					<Pix sx={{
						fontSize: '1.8rem',
					}} />
					<Typography variant="h1" fontSize='1rem'>
						Finanseer
					</Typography>
				</FlexBetween>

				{/* Right Side */}
				<FlexBetween gap={1.5}>

					{
						navItems.map((item, index) => (
							<Box key={index} onClick={() => setActive(item.label)} sx={{ "&:hover": { color: palette.primary[100] } }}>
								<Link to={item.path} style={{
									color: active === item.label ? palette.primary[100] : palette.grey[300],
									textDecoration: 'none',
								}}>
									{item.label}
								</Link>
							</Box>
						))
					}

					{/* <Box onClick={() => setActive('dashboard')} sx={{ "&:hover": { color: palette.primary[100] } }}>
						<Link to='/' style={{
							color: active === "dashboard" ? palette.primary[100] : palette.grey[300],
							textDecoration: 'none',
						}}>
							Dashboard
						</Link>
					</Box>
					<Box onClick={() => setActive('predictions')} sx={{ "&:hover": { color: palette.primary[100] } }}>
						<Link to='/predictions' style={{
							color: active === "predictions" ? palette.primary[100] : palette.grey[300],
							textDecoration: 'none',
						}}>
							predictions
						</Link>
					</Box> */}

				</FlexBetween>
			</FlexBetween>
		</div>
	)
}

export default Navbar