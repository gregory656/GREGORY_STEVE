import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  history.replaceState({}, "", "/");
  window.scrollTo = vi.fn();
});

afterEach(() => cleanup());

describe("portfolio navigation and project explorer", () => {
  it("opens the mobile navigation and exposes its expanded state", () => {
    render(<App />);
    const menu = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(menu);
    expect(
      screen
        .getByRole("button", { name: "Close menu" })
        .getAttribute("aria-expanded"),
    ).toBe("true");
  });

  it("searches projects and filters them by documented category", async () => {
    render(<App />);
    fireEvent.click(
      screen.getByRole("button", { name: /Explore project index/ }),
    );
    const search = await screen.findByRole("textbox", {
      name: /Search projects or categories/,
    });
    fireEvent.change(search, { target: { value: "nexa" } });
    expect(screen.getAllByRole("button", { name: /NexaGen/ })).toHaveLength(2);
    expect(screen.queryByRole("button", { name: /Siviq/ })).toBeNull();

    fireEvent.change(search, { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: "Campus" }));
    expect(screen.getAllByRole("button", { name: /Siviq/ })).toHaveLength(2);
    expect(screen.queryByRole("button", { name: /NexaGen/ })).toBeNull();
  });

  it("shows the case study and is honest about project stack details", async () => {
    history.replaceState({}, "", "/projects/siviq");
    render(<App />);
    expect(
      await screen.findByRole("heading", { name: "Siviq" }),
    ).not.toBeNull();
    expect(
      screen.getByText(
        "Stack details aren’t part of this portfolio entry yet.",
      ),
    ).not.toBeNull();
  });

  it("explains when a CV skill is not mapped to a named project", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "React" }));
    await waitFor(() =>
      expect(
        screen.getByText(/No showcased project is tagged with React yet/),
      ).not.toBeNull(),
    );
  });

  it("filters the concept studies by their engineering focus", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Explore project index/ }));
    fireEvent.click(await screen.findByRole("button", { name: "AI / LLM" }));
    expect(screen.getAllByRole("button", { name: /Neural Atlas/ })).toHaveLength(2);
    expect(screen.queryByRole("button", { name: /Field Echo/ })).toBeNull();
  });

  it("provides a working résumé download link and command palette shortcut", async () => {
    render(<App />);
    const downloads = screen.getAllByRole("link", { name: /Download résumé/ });
    expect(downloads[0].getAttribute("href")).toBe(
      "/documents/stephen-gregory-otieno-cv.pdf",
    );
    expect(downloads[0].hasAttribute("download")).toBe(true);

    fireEvent.keyDown(window, { key: "k", ctrlKey: true });
    expect(
      await screen.findByRole("dialog", { name: "Quick navigation" }),
    ).not.toBeNull();
  });
});
