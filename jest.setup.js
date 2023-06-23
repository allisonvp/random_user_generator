import "@testing-library/jest-dom/extend-expect";

import { createMocks } from "react-idle-timer";
beforeAll(createMocks);

jest.mock("next/router", () => require("next-router-mock"));
Element.prototype.animate = jest.fn();
