import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

interface InputPlaceProps extends BaseComponentProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  label: string;
  type: string;
  error: boolean;
}
export const InputPlace = React.forwardRef<HTMLInputElement, InputPlaceProps>(
  (props, ref) => {
    const { startIcon, endIconOptional } = openItemsFromArray(
      {
        startIcon: undefined,
        endIconOptional: undefined,
      },
      props.children
    );
    const endIcon =
      endIconOptional == null ? undefined : (
        <InputAdornment position="end">{endIconOptional}</InputAdornment>
      );

    return (
      <TextField
        className={props.className}
        error={props.error}
        type={props.type}
        label={props.label}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon,
        }}
        inputRef={ref}
      />
    );
  }
);
// can get valiable which be Specified by key of the option object from array.
function openItemsFromArray<T>(
  option: { [key: string]: undefined },
  maybeArray: T[] | T
) {
  const isArray = Array.isArray(maybeArray);
  const keys = Object.keys(option);
  if (isArray) {
    const items = maybeArray as T[];
    if (keys.length !== items.length)
      throw new Error(
        "The function can only receive a array which equals the length both array, and keys of object."
      );
    const result: { [key: string]: T } = {};
    keys.map((e, i) => {
      result[e] = items[i];
    });
    return result;
  } else {
    const item = maybeArray as T;
    const result = { [keys[0]]: item };
    return result;
  }
}
