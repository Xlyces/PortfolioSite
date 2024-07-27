import React, { useRef } from "react";
import { useHorizontalScroll } from "../../../hooks/useHorizontalScroll";

function SkillBlockContainer({ items }) {
    const scrollRef = useRef(null);
    useHorizontalScroll(scrollRef);

    return (
        <>
            <div
                class="itemsContainer"
                dir="ltr"
                style={{
                    display: "flex",
                    width: "100%",
                    height: "70vh",
                    overflowX: "scroll",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    scrollSnapType: "x proximity;",
                    paddingRight: "2rem",
                    paddingLeft: "1rem",
                    marginBottom: "15rem",
                }}
                ref={scrollRef}
            >
                {items}
            </div>
        </>
    );
}

export default SkillBlockContainer;
