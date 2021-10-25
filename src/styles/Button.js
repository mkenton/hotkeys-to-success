import styled from "styled-components";

const themeColors = ["F2F5F7", "#C9DAEA", "#03F7EB", "#00B295", "#0D6456", "0D6456", "#191516", "#621C2E", "#AB2346" ] 

const COLORS = {
  primary: {
    "--main": themeColors[3],
    "--accent": themeColors[6],
  },
  secondary: {
    "--main": themeColors[2],
    "--accent": themeColors[6],
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
  border: 3px solid ${themeColors[4]};
  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: ${themeColors[1]};
  color: var(--accent);
  border: 3px solid ${themeColors[6]};

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;
