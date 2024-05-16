import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { test } from "vitest";
import { Demo } from ".";

window.HTMLElement.prototype.hasPointerCapture = () => false;
const user = userEvent.setup();

test("it should select an option", async () => {
  render(<Demo />);
  await user.click(screen.getByRole("combobox"));
  await user.click(screen.getByRole("option", { name: "Option B" }));
});
