import UserList from "@/components/atoms/UserList";
import { render } from "@testing-library/react-native";

describe("UserList Test", () => {
  test("UserList component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<UserList />);

    //testing all the styles
    const userListFlatList = getByTestId("userListFlatList");
    expect(userListFlatList.props.style).toEqual({
      marginTop: 16,
    });
  });

  test("UserList component renders correctly while passing wrong props", () => {
    render(<UserList list={null} />);
    render(<UserList list={{}} />);
    render(<UserList list={[]} />);
    render(<UserList list={[{}]} />);
    render(<UserList list={[null]} />);
  });

  test("UserList component renders correctly while passing array with proper values", () => {
    const { getByTestId, getByText } = render(
      <UserList list={[{ name: "d", id: "1", role: "a" }]} />
    );

    const userListFlatList = getByTestId("userListFlatList");
    expect(userListFlatList.props.data).toEqual([
      { name: "d", id: "1", role: "a" },
    ]);

    expect(getByText("d")).toBeTruthy();
  });
});
