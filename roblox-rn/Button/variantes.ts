interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    };
    title: {
        color: string;
    };
    icon: {
        color: string;
    };
}

export interface ButtonVariant {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "white",
        },
        title: {
            color: "black",
        },
        icon: {
            color: "#FFF",
        },
    },
    disabled: {
        button: {
            backgroundColor: "#B8B8B8",
        },
        title: {
            color: "#FFF",
        },
        icon: {
            color: "#FFF",
        },
    },
};
const buttonOutline: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "white",
        },
        title: {
            color: "white",
        },
        icon: {
            color: "#550AB1",
        },
    },
    disabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#B8B8B8",
        },
        title: {
            color: "#B8B8B8",
        },
        icon: {
            color: "#B8B8B8",
        },
    },
};

export const buttonBlackFriday: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "#100C08",
        },
        title: { color: "white" },
        icon: { color: "#0000" },
    },
    disabled: {
        button: {
            backgroundColor: "#B8B8B8",
        },
        title: { color: "#FFF" },
        icon: { color: "#FFF" },
    },
};

export const buttonFriend: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: '#393b3d',
        },
        title: { color: 'white' },
        icon: { color: 'white' },
    },
    disabled: {
        button: {
            backgroundColor: "#B8B8B8",
        },
        title: { color: "#FFF" },
        icon: { color: "#FFF" },
    },
}

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutline,
    blackFriday: buttonBlackFriday,
    friend: buttonFriend,
};