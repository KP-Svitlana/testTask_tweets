import { StyledDropdown, StyledFilterLabel } from "./Fitler.styled";

export const Filter = () => {
  return (
    <StyledFilterLabel>
      Filter
      <StyledDropdown>
        <option value="showAll">Show All</option>

        <option value="follow">Follow</option>

        <option value="following">Following</option>
      </StyledDropdown>
    </StyledFilterLabel>
  );
};
