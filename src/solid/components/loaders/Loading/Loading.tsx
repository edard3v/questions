import type { JSX } from "solid-js";
import css from "./Loading.module.css";
import { cls } from "@utils/cls";

export default function Loading(props: Props) {
  return <div {...props} class={cls([css.loading, props.class])}></div>;
}

type Props = JSX.HTMLAttributes<HTMLDivElement>;
