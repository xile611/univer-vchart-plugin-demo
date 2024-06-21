import type { FUniver } from "@univerjs/facade";
import { setupVChartDemo } from "./api";

export function setupToolbar(univerAPI: FUniver) {
  const $toolbar = document.getElementById("toolbar")!;

  setupVChartDemo($toolbar, univerAPI);
}
