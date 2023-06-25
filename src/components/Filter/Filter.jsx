import { StyledDropdown, StyledFilterLabel } from "./Fitler.styled";

export const Filter = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <StyledFilterLabel>
      Filter
      <StyledDropdown onChange={handleChange}>
        <option value="showAll">Show All</option>

        <option value="follow">Follow</option>

        <option value="following">Following</option>
      </StyledDropdown>
    </StyledFilterLabel>
  );
};
