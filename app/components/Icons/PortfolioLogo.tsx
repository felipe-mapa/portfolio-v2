import type { SvgIconProps } from "./types";

const PortfolioLogo = (props: SvgIconProps) => {
    const { color = "#3182ce", size = 267 } = props;

    const width = size;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height="auto"
            viewBox="0 0 267 125"
        >
            <g
                id="Group_189"
                data-name="Group 189"
                transform="translate(-4145 338)"
            >
                <path
                    id="Path_40"
                    data-name="Path 40"
                    d="M0,0H275V125H0Z"
                    transform="translate(4145 -338)"
                    fill="rgba(255,255,255,0)"
                />
                <text
                    id="FP"
                    transform="translate(4199 -238)"
                    fill={color}
                    fontSize="100"
                    fontFamily="Monaco"
                >
                    <tspan x="0" y="0">
                        FP
                    </tspan>
                </text>
                <text
                    id="_"
                    data-name="/"
                    transform="translate(4300 -238)"
                    fill={color}
                    fontSize="100"
                    fontFamily="Monaco"
                >
                    <tspan x="0" y="0">
                        /
                    </tspan>
                </text>
                <g
                    id="Scroll_Group_5"
                    data-name="Scroll Group 5"
                    transform="translate(4360 -350)"
                >
                    <text
                        id="_2"
                        data-name="&gt;"
                        transform="translate(0 100)"
                        fill={color}
                        fontSize="100"
                        fontFamily="Monaco"
                    >
                        <tspan x="0" y="0">
                            &gt;
                        </tspan>
                    </text>
                </g>
                <g
                    id="Scroll_Group_6"
                    data-name="Scroll Group 6"
                    transform="translate(4145 -350)"
                >
                    <text
                        id="_3"
                        data-name="&lt;"
                        transform="translate(0 100)"
                        fill={color}
                        fontSize="100"
                        fontFamily="Monaco"
                    >
                        <tspan x="0" y="0">
                            &lt;
                        </tspan>
                    </text>
                </g>
            </g>
        </svg>
    );
};

export { PortfolioLogo };
