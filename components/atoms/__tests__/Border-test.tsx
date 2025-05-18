import Border from "@/components/atoms/Border";
import { render } from "@testing-library/react-native";

describe("Border Test", () => {
  test("border renders correctly", () => {
    const { getByTestId } = render(<Border />);

    const borderLine = getByTestId("border-line");
    expect(borderLine.props.style).toEqual({
      height: 1,
      borderColor: "#E4EAF0",
      borderWidth: 0.5,
      marginTop: 16,
    });
  });
});
