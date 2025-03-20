import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export default function Cross(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  const [p, rest] = splitProps(props, ["class"]);

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      class={p.class}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m0 42.667c-94.1 0-170.666 76.565-170.666 170.666c0 94.102 76.565 170.667 170.666 170.667c94.102 0 170.667-76.565 170.667-170.667c0-94.101-76.565-170.666-170.667-170.666m48.918 91.584l30.165 30.165L286.166 256l48.917 48.918l-30.165 30.165L256 286.166l-48.917 48.917l-30.165-30.165L225.835 256l-48.917-48.917l30.165-30.165L256 225.835z"
      />
    </svg>
  );
}
