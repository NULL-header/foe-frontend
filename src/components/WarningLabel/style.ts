import { makeStyles } from "src/theme";

export const useStyles = makeStyles()({
  root: { visibility: "initial", "&-hidden": { visibility: "hidden" } },
});
