import type { JSX } from "solid-js";
import css from "./ErrorComp.module.css";
import { cls } from "@utils/cls";

export default function ErrorComp(props: Props) {
  return (
    <div {...props} class={cls([css.err, props.class])}>
      Error 😱
    </div>
  );
}

type Props = JSX.HTMLAttributes<HTMLDivElement>;
