import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/clientFunctions";

interface _Params {
  src: string;
  alt?: string | any;
  width?: number;
  height?: number;
  cssClass?: any;
  style?: any;
  id?: string | any;
  mouseMove?: any;
  mouseOut?: any;
  click?: any;
  quality?: number | any;
  priority?: boolean;
  sizes?: string;
  preloader?: boolean;
}

export default function ImageLoader({
  src,
  alt,
  width,
  height,
  quality,
  cssClass,
  style,
  id,
  mouseMove,
  mouseOut,
  click,
  priority,
  preloader,
}: _Params) {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_URL}/${src}`}
      alt={alt || src || ""}
      width={width || 100}
      height={height || 100}
      className={cssClass || null}
      style={style || null}
      placeholder={
        preloader === false || (width && width < 40) ? "empty" : "blur"
      }
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(width || 100, height || 100)
      )}`}
      id={id || null}
      onMouseMove={mouseMove || null}
      onMouseOut={mouseOut || null}
      onClick={click || null}
      quality={quality || null}
      priority={priority || undefined}
    />
  );
}

export function ImageLoaderResponsive({
  src,
  alt,
  cssClass,
  style,
  sizes,
}: _Params) {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_URL}/${src}`}
      alt={alt || src || ""}
      className={cssClass || null}
      style={style || null}
      fill={true}
      sizes={sizes || "50vw"}
      placeholder="blur"
      blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN84sJQDwAE5QGpWVK05QAAAABJRU5ErkJggg=="
    />
  );
}


