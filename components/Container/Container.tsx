import cn from "clsx";
import React from "react";
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types/Polymorphic";
import styles from "../Container/Container.module.scss";

const defaultElement = "div";

type ContainerProps<
  ContainerType extends React.ElementType = typeof defaultElement
> = PolymorphicComponentPropWithRef<
  ContainerType,
  {
    as?: ContainerType;
    children: React.ReactNode;
    className?: string;
  }
>;

type ContainerComponent = <
  ContainerType extends React.ElementType = typeof defaultElement
>(
  props: ContainerProps<ContainerType>
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
const Container: ContainerComponent = React.forwardRef(
  <ContainerType extends React.ElementType = typeof defaultElement>(
    {
      as: givenAs,
      children,
      className,
      ...props
    }: ContainerProps<ContainerType>,
    ref: PolymorphicRef<ContainerType>
  ) => {
    const Component = givenAs || defaultElement;

    return (
      <Component
        className={cn(styles.container, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export default Container;
