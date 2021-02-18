import { Link, Text } from "@chakra-ui/react";

export const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" color="white" {...rest}>
        {children}
      </Text>
    </Link>
  );
};
