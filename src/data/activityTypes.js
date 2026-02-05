import gsaforma from '../assets/images/photo-activities/gsaforma.jpg';
import gsaservi from '../assets/images/photo-activities/gsaservi.JPG';
import gsajeu from '../assets/images/photo-activities/gsajeu.jpg';
import gsacamp from '../assets/images/photo-activities/gsacamp.jpg';

export const activityTypes = [
    {
        id: 1,
        title: "Randonnées et Campements",
        shortDescription: "Exploration de la nature, bivouac",
        description: "Vivre en pleine nature, découvrir de nouveaux horizons et apprendre l'autonomie à travers des expéditions inoubliables.",
        image: gsacamp,
        icon: "fas fa-tree",
        color: "#28a745",
        method: "Nous privilégions l'apprentissage par l'expérience. Chaque randonnée est préparée par les jeunes eux-mêmes (itinéraire, repas, matériel) sous la supervision des chefs. Le campement est l'occasion d'apprendre à monter une tente, construire des installations (tables, vaisseliers) avec du bois et de la ficelle (froissartage) et à cuisiner sur feu de bois.",
        why: "La nature est le cadre idéal pour le développement du caractère. Loin du confort moderne, le jeune apprend à se débrouiller, à apprécier les choses simples et à respecter l'environnement. C'est aussi un moment privilégié pour la cohésion de groupe.",
        program: [
            "Marche d'orientation avec boussole et carte",
            "Installation du bivouac",
            "Veillée autour du feu",
            "Concours de cuisine trappeur"
        ]
    },
    {
        id: 2,
        title: "Ateliers, Réunion Formation",
        shortDescription: "Bricolage, orientation, premier secours",
        description: "Des moments dédiés à l'acquisition de compétences techniques et pratiques utiles pour la vie scoute et quotidienne.",
        image: gsaforma,
        icon: "fas fa-tools",
        color: "#007bff",
        method: "La transmission se fait souvent des plus grands vers le plus jeunes, favorisant la responsabilité. Les ateliers sont interactifs et pratiques : on apprend en faisant. Nous utilisons des mises en situation réelles pour valider les acquis.",
        why: "Être scout, c'est être prêt ('Toujours Prêt'). Acquérir des compétences variées (secourisme, nœuds, orientation) donne de la confiance en soi et permet de se rendre utile aux autres en toute situation.",
        program: [
            "Secourisme : les gestes qui sauvent",
            "Topographie : lire une carte IGN",
            "Froissartage : techniques de construction",
            "Chant et expression"
        ]
    },
    {
        id: 3,
        title: "Service à la communauté",
        shortDescription: "Action sociale, aide, bénévolat",
        description: "Le scoutisme est un mouvement tourné vers les autres. Nous organisons régulièrement des actions pour aider notre communauté.",
        image: gsaservi,
        icon: "fas fa-hands-helping",
        color: "#dc3545",
        method: "Nous identifions des besoins locaux ou collaborons avec d'autres associations. Les jeunes participent activement à l'action, ce qui leur permet de se sentir utiles et intégrés dans la société.",
        why: "Le service est au cœur de la promesse scoute. Il apprend l'humilité, la solidarité et le sens du devoir. C'est une éducation à la citoyenneté active.",
        program: [
            "Nettoyage de parcs ou forêts",
            "Collecte de vivres pour les plus démunis",
            "Animation en maison de retraite",
            "Aide à l'organisation d'événements locaux"
        ]
    },
    {
        id: 4,
        title: "Jeux, Expressions, Découvertes",
        shortDescription: "Activités ludiques, exploration, chants",
        description: "Le jeu est le premier travail de l'enfant. C'est par le jeu que nous apprenons les règles, le respect et le dépassement de soi.",
        image: gsajeu,
        icon: "fas fa-gamepad",
        color: "#ffc107",
        method: "Nos grands jeux sont scénarisés (imaginaire) pour immerger les jeunes dans une aventure. Ils mêlent sport, réflexion et stratégie. L'expression (théâtre, chant) permet à chacun de trouver sa place et de vaincre sa timidité.",
        why: "Le jeu permet de se dépenser, mais aussi d'apprendre à gagner et à perdre, à respecter les règles et ses adversaires. L'imaginaire développe la créativité.",
        program: [
            "Grand jeu de piste",
            "Olympiades scoutes",
            "Soirée Casino ou Cluedo géant",
            "Concours de chants et sketchs"
        ]
    }
];
