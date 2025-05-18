import NoUserFound from "@/components/atoms/NoUserFound";
import { render } from "@testing-library/react-native";

describe("NoUserFound Test", () => {
  test("NoUserFound renders correctly", () => {
    const { getByTestId } = render(<NoUserFound />);

    const noUserFound = getByTestId("noUserFound");
    expect(noUserFound.props.style).toEqual({
      textAlign: "center",
      fontSize: 16,
    });
  });
});
