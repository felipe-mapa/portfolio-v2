import { Button } from "@chakra-ui/react";
import type { ButtonProps, ComponentWithAs } from "@chakra-ui/react";

const PrimaryButton: ComponentWithAs<"button", ButtonProps> = (props) => {
    return (
        <Button
            boxShadow="md"
            color="button.foreground"
            backgroundColor="button.background"
            _hover={{
                color: "button.foreground",
                backgroundColor: "button.background",
                translate: "2px -2px",
                transition: "translate 0.25s",
            }}
            {...props}
        />
    );
};

export { PrimaryButton };
