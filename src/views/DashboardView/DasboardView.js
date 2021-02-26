import styled from "styled-components";
import {Helmet} from "react-helmet";
import Chart from "react-apexcharts";
import {Container} from "../../styles/GlobalStyle";
import Heading from "../../components/Heading/Heading";
import InfoCard from "../../components/InfoCard/InfoCard";

const InnerContainer = styled(Container)``

const StyledSection = styled.section``

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    & > * {
      flex: 1;
    }
  }
`

const DashboardView = () => {

    const state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Dashboard | Supporteo</title>
            </Helmet>
            <InnerContainer>
                <StyledSection>
                    <Heading title="Dashboard"/>
                    <CardWrapper>
                        <InfoCard/>
                        <InfoCard/>
                    </CardWrapper>
                    <CardWrapper>
                        <InfoCard/>
                        <InfoCard/>
                    </CardWrapper>
                    <ChartWrapper>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                        />
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                        />
                    </ChartWrapper>
                </StyledSection>
            </InnerContainer>
        </>
    )
}

export default DashboardView
