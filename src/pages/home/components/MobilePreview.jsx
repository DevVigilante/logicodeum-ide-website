import React, { useState } from "react";

export default function MobilePreview() {
    const screenshots = [
        "assets/screenshots/Screenshot_2026-05-08-21-15-09-248_com.logicodeum.ide.jpg",
        "assets/screenshots/Screenshot_2026-05-08-21-14-38-396_com.logicodeum.ide.jpg",
        "assets/screenshots/Screenshot_2026-05-08-21-14-31-650_com.logicodeum.ide.jpg",
        "assets/screenshots/Screenshot_2026-05-08-21-14-50-893_com.logicodeum.ide.jpg",
        "assets/screenshots/Screenshot_2026-05-08-21-14-54-360_com.logicodeum.ide.jpg"
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % screenshots.length);
    };

    const prevSlide = () => {
        setCurrent(prev => (prev === 0 ? screenshots.length - 1 : prev - 1));
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }}
        >
            {/* Phone */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    background: "#000",
                    borderRadius: "20px",
                    border: "8px solid #222",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
                }}
            >
                {/* Status Bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 16px",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "600",
                        zIndex: 20,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)"
                    }}
                ></div>

                {/* Notch */}
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%) translateY(50%)",
                        width: "12px",
                        height: "12px",
                        background: "#000",
                        borderRadius: "20px",
                        zIndex: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div
                        style={{
                            width: "10px",
                            height: "10px",
                            background: "#222",
                            borderRadius: "50%",
                            border: "2px solid #333"
                        }}
                    />
                </div>

                {/* Screenshot */}
                <img
                    src={screenshots[current]}
                    alt="assets/screenshots/Sceenshot"
                    style={{
                        width: "100%",
                        transition: "0.4s"
                    }}
                />

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        background: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        fontSize: "20px",
                        cursor: "pointer",
                        zIndex: 10
                    }}
                >
                    ❮
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        background: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        fontSize: "20px",
                        cursor: "pointer",
                        zIndex: 10,
                        WebkitTapHighlightColor: "transparent"
                    }}
                >
                    ❯
                </button>

                {/* Dots */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "32px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "8px",
                        zIndex: 10
                    }}
                >
                    {screenshots.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            style={{
                                width: current === index ? "24px" : "10px",
                                height: "10px",
                                borderRadius: "20px",
                                background:
                                    current === index
                                        ? "#000"
                                        : "rgba(0,0,0,0.4)",
                                transition: "0.3s",
                                cursor: "pointer"
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
