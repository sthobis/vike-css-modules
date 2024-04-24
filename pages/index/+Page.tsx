export { Page };

import BreakFastRefresh, {
  getBreakFastRefreshText,
} from "../../components/BreakFastRefresh";
import { Counter } from "./Counter";
import C from "./welcome.module.css";

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      <span className={C.title}>This page is:</span>
      <BreakFastRefresh />
      <div>and another {getBreakFastRefreshText()}</div>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
