import UserType from "@/components/atoms/UserType";
import { fireEvent, render } from "@testing-library/react-native";

//mocking vector icons
jest.mock("@expo/vector-icons", () => ({
  MaterialIcons: ({
    name,
    size,
    color,
  }: {
    name: string;
    size: number;
    color: string;
  }) => {
    return <div testID="mocked-icon">{name}{size}{color}</div>;
  },
}));

describe("UserType Test", () => {
  test("UserType component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<UserType />);

    //testing all the styles
    const userType = getByTestId("userType");
    expect(userType.props.style).toEqual({
      backgroundColor: "#FFFFFF",
      flexDirection: "row",
      padding: 16,
      borderRadius: 8,
      opacity: 1,
    });
    const userTypeText = getByTestId("userTypeText");
    expect(userTypeText.props.style).toEqual({
      fontSize: 20,
      color: "#202322",
      marginLeft: 16,
    });
  });

  test("UserType component renders correctly while passing wrong props", () => {
    render(<UserType userType={null} check={null} clickFn={null} />);
  });

  test("UserType component renders correctly while passing with proper values with check as true", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <UserType userType={"Admin"} check={true} clickFn={mockFn} />
    );

    //checking material icon
    const icon = getByTestId("mocked-icon");
    expect(icon.props.children).toEqual([ 'radio-button-checked', 24, '#0171CD' ]);

    //firing event
    const userType = getByTestId("userType");
    fireEvent.press(userType)
    expect(mockFn).toHaveBeenCalled()
  });

  test("UserType component renders correctly while passing with proper values with check as false", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <UserType userType={"Admin"} check={false} clickFn={mockFn} />
    );

    const icon = getByTestId("mocked-icon");
    expect(icon.props.children).toEqual([ 'radio-button-unchecked', 24, '#E3E9F1' ]);
  });
});
