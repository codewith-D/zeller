import User from "@/components/atoms/User";
import { render } from "@testing-library/react-native";

describe("User Test", () => {
  test("User component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<User />);

    //testing all the styles
    const userContainer = getByTestId("userContainer");
    expect(userContainer.props.style).toEqual({
      marginVertical: 8,
      flexDirection: "row",
    });

    const containerOne = getByTestId("containerOne");
    expect(containerOne.props.style).toEqual({
      paddingVertical: 12,
      paddingHorizontal: 18,
      backgroundColor: "#E8F2FB",
      borderRadius: 8,
    });

    expect(containerOne.props.children.props.style).toEqual({
      fontSize: 20,
      color: "#0872CD",
    });

    const containerTwo = getByTestId("containerTwo");
    expect(containerTwo.props.style).toEqual({
      marginLeft: 12,
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    });

    expect(containerTwo.props.children[0].props.style).toEqual({
      fontSize: 20,
      color: "#202322",
    });

    expect(containerTwo.props.children[1].props.style).toEqual({
      fontSize: 14,
      color: "#787775",
    });
  });

  test("User component renders correctly while passing null props", () => {
    render(<User name={null} role={null} id={null} />);
  });

  test("User component renders correctly while passing string", () => {
    const { getByTestId } = render(
      <User name={"John"} role={"Admin"} id={"1"} />
    );

    const heading = getByTestId("userContainer");
    expect(heading.props.children[0].props.children.props.children).toEqual(
      "J"
    );

    expect(heading.props.children[1].props.children[0].props.children).toEqual(
      "John"
    );

    expect(heading.props.children[1].props.children[1].props.children).toEqual(
      "Admin"
    );
  });
});
