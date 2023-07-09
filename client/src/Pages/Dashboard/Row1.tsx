import DashboardBox from '@/StyledComponents/DashboardBox'
import { useGetKpisQuery } from '@/state/api'


const Row1 = () => {
	const { data } = useGetKpisQuery()

	return (
		<>
			<DashboardBox gridArea='a' >a</DashboardBox>
			<DashboardBox gridArea='b'>b</DashboardBox>
			<DashboardBox gridArea='c' >c</DashboardBox>
		</>
	)
}

export default Row1