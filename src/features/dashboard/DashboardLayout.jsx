/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();

  if (isLoading1 || isLoading2) return <Spinner />;

  console.log(stays);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Todays activity </div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
