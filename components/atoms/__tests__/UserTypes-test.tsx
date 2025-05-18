import UserTypes from "@/components/atoms/UserTypes";
import { fireEvent, render } from "@testing-library/react-native";

//mocking UserType atom
const userTypeMock = ({ clickFn }: {clickFn: Function}) => {
	return (
		<div>
			<button testID="pressBtn" onClick={()=> clickFn()}></button>
		</div>
	);
};
jest.mock("../UserType",()=> jest.fn(userTypeMock))


describe("UserTypes Test", () => {
  test("UserTypes component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<UserTypes />);

    //testing all the styles
    const userTypes = getByTestId("userTypes");
    expect(userTypes.props.style).toEqual({
        marginTop: 16
    });

  });

  test("UserTypes component renders correctly while passing wrong props", () => {
    render(<UserTypes options={null} selectedUser={null} changeUser={null} />);
    render(<UserTypes options={{}} />);
    render(<UserTypes options={[]} />);
    render(<UserTypes options={[null]} />);
  });

  test("UserTypes component renders correctly while passing with proper values", () => {
    const mockFn = jest.fn();
    const { queryAllByTestId } = render(<UserTypes options={["one","two"]} selectedUser={"one"} changeUser={mockFn} />);

    const pressBtn = queryAllByTestId("pressBtn");
    fireEvent(pressBtn[0], 'click')
    expect(mockFn).toHaveBeenCalled()
  });
});
