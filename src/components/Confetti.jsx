import React, { useEffect, useState } from 'react';
import './Confetti.css';

const Confetti = ({ active = true }) => {
    const [confettiPieces, setConfettiPieces] = useState([]);

    useEffect(() => {
        if (!active) {
            setConfettiPieces([]);
            return;
        }

        const colors = ['#ffd700', '#002b5b', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#fff'];
        const pieces = [];

        for (let i = 0; i < 50; i++) {
            pieces.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 3 + Math.random() * 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: 8 + Math.random() * 8,
                rotation: Math.random() * 360
            });
        }

        setConfettiPieces(pieces);
    }, [active]);

    if (!active || confettiPieces.length === 0) return null;

    return (
        <div className="confetti-container" aria-hidden="true">
            {confettiPieces.map((piece) => (
                <div
                    key={piece.id}
                    className="confetti-piece"
                    style={{
                        left: `${piece.left}%`,
                        animationDelay: `${piece.delay}s`,
                        animationDuration: `${piece.duration}s`,
                        backgroundColor: piece.color,
                        width: `${piece.size}px`,
                        height: `${piece.size}px`,
                        transform: `rotate(${piece.rotation}deg)`
                    }}
                />
            ))}
        </div>
    );
};

export default Confetti;
