"use client"
import { useState } from "react"
//pass in onReply, a function of type void to the button, so onClick runs onReply
export default function ReplyButton({ onReply }: { onReply: () => void }) {
    return (
        <button
            onClick={onReply}
            style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.20)",
                color: "rgba(255,255,255,0.60)",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                fontSize: ".75rem",
                paddingBottom: "3px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            +
        </button>
    )
}