import css from "./LiteYoutube.module.css";
import { onCleanup, onMount } from "solid-js";
import "@justinribeiro/lite-youtube";
import { cls } from "@utils/cls";
import type { JSX } from "solid-js";
import type { LiteYTEmbed } from "@justinribeiro/lite-youtube";
import Play from "@solid/components/icons/Play";

export default function LiteYoutube(props: Props) {
  let lite: LiteYTEmbed | undefined;

  const handle_lite = () => {
    if (!lite) return;

    lite.style.opacity = "1";
  };

  onMount(() => lite?.addEventListener("liteYoutubeIframeLoaded", handle_lite));
  onCleanup(() => lite?.removeEventListener("liteYoutubeIframeLoaded", handle_lite));

  return (
    <div class={cls([css.lite, props.class])}>
      <Play class={css.shadow} />
      <lite-youtube
        ref={(el) => (lite = el)}
        color="red"
        attr:videoid={props.video_id}
      ></lite-youtube>
    </div>
  );
}

type Props = JSX.HTMLAttributes<HTMLDivElement> & {
  video_id: string;
};

type Lite = JSX.HTMLAttributes<LiteYTEmbed> & {
  // Solo los atributos HTML (attr:)
  "attr:videoid"?: string;
  "attr:playlistid"?: string;
  "attr:videotitle"?: string;
  "attr:videoplay"?: string;
  "attr:videostartat"?: string;
  "attr:autoload"?: boolean;
  "attr:autopause"?: boolean;
  "attr:nocookie"?: boolean;
  "attr:posterquality"?: string;
  "attr:posterloading"?: "lazy" | "eager" | "auto";
  "attr:params"?: string;
  "attr:disablenoscript"?: boolean;

  ref?: (el: LiteYTEmbed) => void;
};

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": Lite;
    }
  }
}
