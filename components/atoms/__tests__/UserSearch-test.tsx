import UserSearch from "@/components/atoms/UserSearch";
import { fireEvent, render } from "@testing-library/react-native";

describe("UserSearch Test", () => {
  test("UserSearch component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<UserSearch />);

    const userSearch = getByTestId("userSearch");
    expect(userSearch.props.style).toEqual({
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      padding: 8,
      marginTop: 8,
    });
    expect(userSearch.props.selectionColor).toEqual("#ccc");
    expect(userSearch.props.autoCapitalize).toEqual("none");
    expect(userSearch.props.autoCorrect).toEqual(false);
  });

  test("UserSearch component renders correctly while passing wrong props", () => {
    render(<UserSearch searchText={null} searchFn={null} />);
  });

  test("UserSearch component renders correctly while passing with proper values", () => {
    const mockFn = jest.fn();
    const { queryAllByTestId } = render(
      <UserSearch searchText={"one"} searchFn={mockFn} />
    );

    const pressBtn = queryAllByTestId("userSearch");
    fireEvent(pressBtn[0], "onChangeText");
    expect(mockFn).toHaveBeenCalled();
  });
});
