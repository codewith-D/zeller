import Border from "@/components/atoms/Border";
import Heading from "@/components/atoms/Heading";
import UserTypes from "@/components/atoms/UserTypes";
import UserTypesSection from "@/components/molecules/UserTypesSection";
import { render } from "@testing-library/react-native";

jest.mock("@/components/atoms/UserTypes");
jest.mock("@/components/atoms/Heading");
jest.mock("@/components/atoms/Border");

describe("UserTypesSection Test", () => {
  test("userTypesSection component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<UserTypesSection />);

    //testing all the styles
    const userTypesSection = getByTestId("userTypesSection");
    expect(userTypesSection.props.style).toEqual({
      marginTop: 12,
    });
  });

  test("AdminSection component renders correctly while passing wrong props", () => {
    render(
      <UserTypesSection options={null} selectedUser={null} changeUser={null} />
    );
    render(<UserTypesSection options={{}} />);
    render(<UserTypesSection options={[]} />);
    render(<UserTypesSection options={[{}]} />);
    render(<UserTypesSection options={[null]} />);
  });

  test("AdminSection component renders correctly while passing array with proper values", () => {
    render(
      <UserTypesSection
        options={["one", "two"]}
        selectedUser="one"
        changeUser={jest.fn()}
      />
    );

    expect(Border).toHaveBeenCalled();
    expect(UserTypes).toHaveBeenCalled();
    expect(Heading).toHaveBeenCalled();
  });
});
