// Importation des modules nécessaires de React et des fichiers CSS et d'images
import React, { useRef, useState } from 'react'
import './Morpion.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

// Initialisation du tableau représentant l'état du jeu
let data = ["", "", "", "", "", "", "", "", ""];

// Déclaration du composant Morpion
const Morpion = () => {

    // Déclaration des états pour le compteur de coups et le verrouillage du jeu
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    // Utilisation des références pour manipuler directement les éléments DOM
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    // Tableau des références des cases du jeu
    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    // Fonction appelée lors d'un clic sur une case
    const toggle = (e, num) => {
        // Si le jeu est verrouillé, on ne fait rien
        if (lock) {
            return;
        }

        // Détermination du joueur actuel
        const currentPlayer = count % 2 === 0 ? "x" : "o";
        const icon = currentPlayer === "x" ? cross_icon : circle_icon;

        // Mise à jour de la case cliquée avec l'icône du joueur actuel
        e.target.innerHTML = `<img src='${icon}'>`;
        data[num] = currentPlayer;

        // Incrémentation du compteur de coups
        setCount(count++);

        // Vérification des conditions de victoire
        checkWin();
    };

    const checkWin = () => {
        // Définir toutes les combinaisons gagnantes possibles.
        const winningCombinations = [
            [0, 1, 2], // Première rangée
            [3, 4, 5], // Deuxième rangée
            [6, 7, 8], // Troisième rangée
            [0, 3, 6], // Première colonne
            [1, 4, 7], // Deuxième colonne
            [2, 5, 8], // Troisième colonne
            [0, 4, 8], // Diagonale de gauche à droite
            [2, 4, 6]  // Diagonale de droite à gauche
        ];
    
        // Parcourir chaque combinaison gagnante.
        for (const [a, b, c] of winningCombinations) {
            // Vérifier si les trois cases de la combinaison sont identiques et non vides.
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                // Appeler la fonction 'won' avec le symbole du gagnant.
                return won(data[a]);
            }
        }
    };

    // Fonction appelée lorsqu'un joueur gagne
    const won = (winner) => {
        // Verrouillage du jeu
        setLock(true);
        // Mise à jour du message de victoire
        const winnerIcon = winner === "x" ? cross_icon : circle_icon;
        titleRef.current.innerHTML = `Félicitations : <img src=${winnerIcon}> a gagné !`;
    };

    // Fonction pour réinitialiser le jeu
    const reset = () => {
        // Déverrouillage du jeu
        setLock(false);
        // Réinitialisation des données du jeu
        data = ["", "", "", "", "", "", "", "", ""];
        // Réinitialisation du titre
        titleRef.current.innerHTML = 'Morpion en <span>REACT</span>';
        // Réinitialisation de chaque case
        box_array.forEach((box) => {
            box.current.innerHTML = "";
        });
    };

    // Rendu du composant Morpion
    return (
        <div className='container'>
            {/* Titre du jeu */}
            <h1 className="title" ref={titleRef}>
                Morpion en <span>REACT</span>
            </h1>
            {/* Plateau de jeu */}
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e) => {toggle(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e) => {toggle(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e) => {toggle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e) => {toggle(e,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(e) => {toggle(e,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(e) => {toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e) => {toggle(e,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(e) => {toggle(e,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(e) => {toggle(e,8)}}></div>
                </div>
            </div>
            {/* Bouton de réinitialisation */}
            <button className="reset" onClick={() => {reset()}}>
                Recommencer
            </button>
        </div>
    )
}

// Exportation du composant Morpion
export default Morpion
