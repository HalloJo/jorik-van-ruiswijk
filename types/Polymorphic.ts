import React from "react";

export type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = Record<string, never>
> = Props & Omit<React.ComponentPropsWithoutRef<C>, keyof Props>;

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, never>
> = PolymorphicComponentProp<C, Props> & {
  ref?: React.ComponentPropsWithRef<C>["ref"];
};

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];
