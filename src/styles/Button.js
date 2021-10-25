import styled from "styled-components";

const themeColors = ["#C9DAEA", "#03F7EB", "#00B295", "#0D6456", "#191516", "#621C2E", "#AB2346" ] 

const COLORS = {
  primary: {
    "--main": themeColors[2],
    "--accent": themeColors[4],
  },
  secondary: {
    "--main": themeColors[1],
    "--accent": themeColors[4],
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 5px 10px;
  text-decoration: none;
  margin: 0 5px 0 5px;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;
