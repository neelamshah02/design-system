import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface IIconProps {
  name: IconDefinition | string;
  fontSize?: string;
  sdirIcon?: boolean;
  color?: string;
  padding?: string;
  backgroundColor?: string;
  className?: string;
}
interface IIconStyledProps {
  color?: string;
  fontSize?: string;
  padding?: string;
  backgroundColor?: string;
}
const Icon: React.FC<IIconProps> = ({
  name,
  fontSize = "inherit",
  sdirIcon = false,
  color = "inherit",
  padding = ".5em 0 .5em 0",
  backgroundColor = "inherit",
  className,
}) => {
  const iconStyleProps: IIconStyledProps = {
    color: color,
    fontSize: fontSize,
    padding: padding,
    backgroundColor: backgroundColor,
  };
  if (sdirIcon)
    return (
      <IconStyled {...iconStyleProps} className={className}>
        {" "}
        <span className={name as string}></span>{" "}
      </IconStyled>
    );
  else
    return (
      <IconStyled {...iconStyleProps} className={className}>
        {" "}
        <FontAwesomeIcon icon={name as IconDefinition} />{" "}
      </IconStyled>
    );
};
const IconStyled = styled.span<IIconStyledProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.fontSize};
  height: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  display: inherit;
  margin: auto;
`;
export default Icon;
