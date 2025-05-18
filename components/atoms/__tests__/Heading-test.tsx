import Heading from "@/components/atoms/Heading";
import { render } from "@testing-library/react-native";

describe("Heading Test", () => {
  test("Header component renders correctly while not passing any of the props", () => {
    const { getByTestId } = render(<Heading />);

    const heading = getByTestId("heading");
    expect(heading.props.style).toEqual({
      fontSize: 24,
      color: "#202322",
      fontWeight: 500,
    });
  });

  test("Header component renders correctly while passing null props", () => {
    const { getByTestId } = render(<Heading text={null} />);

    const heading = getByTestId("heading");
    expect(heading.props.style).toEqual({
      fontSize: 24,
      color: "#202322",
      fontWeight: 500,
    });
  });

  test("Header component renders correctly while passing string", () => {
    const { getByTestId } = render(<Heading text={"This"} />);

    const heading = getByTestId("heading");
    expect(heading.props.style).toEqual({
      fontSize: 24,
      color: "#202322",
      fontWeight: 500,
    });
    expect(heading.props.children).toBe("This");
    expect(heading.props.style).toEqual({
      fontSize: 24,
      color: "#202322",
      fontWeight: 500,
    });
  });
});
