import cn from "clsx";
import { ReactNode, ElementType, ReactElement, forwardRef } from "react";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types/Polymorphic";
import styles from "../Typography/Typography.module.scss";

const defaultElement = "p";

export type TypographyProps<
  MorphType extends ElementType = typeof defaultElement
> = PolymorphicComponentPropWithRef<
  MorphType,
  {
    as?: MorphType;
    children: ReactNode;
    className?: string;
    variant?:
      | "display"
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "body"
      | "caption"
      | "marquee";
    size?: "default" | "small" | "large";
  }
>;

type TypographyComponent = <T extends ElementType = typeof defaultElement>(
  props: TypographyProps<T>
) => ReactElement | null;

const defaultComponents: Record<TypographyProps["variant"], ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  caption: "h6",
  marquee: "p",
  body: defaultElement,
};

// eslint-disable-next-line react/display-name
const Typography: TypographyComponent = forwardRef(
  <Type extends ElementType = typeof defaultElement>(
    {
      as: givenAs,
      children,
      className: givenClassName,
      variant = "body",
      size = "default",
      ...props
    }: TypographyProps<Type>,
    ref: PolymorphicRef<Type>
  ) => {
    const className = cn(
      {
        [styles.display]: variant === "display",
        [styles.h1]: variant === "h1",
        [styles.h2]: variant === "h2",
        [styles.h3]: variant === "h3",
        [styles.h4]: variant === "h4",
        [styles.h5]: variant === "h5",
        [styles.body]: variant === "body",
        [styles.caption]: variant === "caption",
        [styles.marquee]: variant === "marquee",

        [styles.sizeSmall]: size === "small",
        [styles.sizeDefault]: size === "default",
        [styles.sizeLarge]: size === "large",
      },
      givenClassName
    );
    const Component = givenAs || defaultComponents[variant];

    return (
      <Component className={className} ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

export default Typography;
