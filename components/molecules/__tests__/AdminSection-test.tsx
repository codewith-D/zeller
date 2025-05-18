import Border from "@/components/atoms/Border";
import Heading from "@/components/atoms/Heading";
import UserList from "@/components/atoms/UserList";
import AdminSection from "@/components/molecules/AdminSection";
import useGetSearchedData from "@/Hooks/GetSearchedData";
import { fireEvent, render } from "@testing-library/react-native";

//mocking UserType atom
const userListMock = ({
  onRefreshFunction,
}: {
  onRefreshFunction: Function;
}) => {
  return (
    <div>
      <button testID="pressBtn" onClick={() => onRefreshFunction()}></button>
    </div>
  );
};
jest.mock("@/components/atoms/UserList", () => jest.fn(userListMock));
jest.mock("@/components/atoms/Heading");
jest.mock("@/components/atoms/Border");
jest.mock("@/components/atoms/UserSearch");
jest.mock("@/Hooks/GetSearchedData");

const mockedUseGetSearchedData = useGetSearchedData as jest.Mock;

describe("AdminSection Test", () => {
  const mockRefetch = jest.fn();
  beforeEach(() => {
    mockedUseGetSearchedData.mockReturnValue({
      customers: [{ id: "1", name: "Test User", role: "Admin" }],
      loading: false,
      refetch: mockRefetch,
    });
  });
  test("AdminSection component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<AdminSection />);

    //testing all the styles
    const adminSection = getByTestId("adminSection");
    expect(adminSection.props.style).toEqual({
      marginTop: 24,
    });

    expect(adminSection.props.children[0].props.style).toEqual({
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    });
  });

  test("AdminSection component renders correctly while passing wrong props", () => {
    render(<AdminSection selectedUser={null} />);
  });

  test("AdminSection component renders correctly while passing with proper values", () => {
    const { getByTestId } = render(<AdminSection selectedUser={"Admin"} />);

    expect(Border).toHaveBeenCalled();
    expect(UserList).toHaveBeenCalled();
    expect(Heading).toHaveBeenCalled();

    //clicking search icon
    const searchIcon = getByTestId("searchIcon");
    fireEvent.press(searchIcon);

    //calling onrefresh function
    const pressBtn = getByTestId("pressBtn");
    fireEvent(pressBtn, 'click');
  });
});
