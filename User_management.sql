-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 31 mai 2024 à 11:41
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `user_management`
--
CREATE DATABASE IF NOT EXISTS `user_management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `user_management`;

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `subject`, `message`, `created_at`) VALUES
(1, 'test', 'test@gmail.com', 'TEST', 'testesttestestestestestet', '2024-05-31 00:42:23');

-- --------------------------------------------------------

--
-- Structure de la table `games`
--

CREATE TABLE `games` (
  `GameId` int(11) NOT NULL,
  `GameName` varchar(255) NOT NULL,
  `GameCountry` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `GameImage` varchar(255) DEFAULT NULL,
  `Players` int(11) DEFAULT NULL,
  `Age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `games`
--

INSERT INTO `games` (`GameId`, `GameName`, `GameCountry`, `Description`, `GameImage`, `Players`, `Age`) VALUES
(1, 'Monopoly', 'Amérique', 'Le Monopoly est un jeu de société américain édité par Hasbro. Le but du jeu est de ruiner ses adversaires par des opérations immobilières. Les joueurs lancent des dés pour se déplacer sur le plateau, acheter des propriétés et percevoir des loyers.', 'https://www.espritjeu.com/upload/image/monopoly-p-image-90143-grande.jpg', 2, 0),
(2, 'Jeu de Go', 'Asie', 'Le jeu de go est né en Chine il y a plusieurs millénaires. C\'est un jeu de stratégie combinatoire abstrait qui se joue à deux joueurs, dont le but est de contrôler le plus grand territoire sur le plateau.', 'https://img-31.ccm2.net/6swPhqJGyMWKXN4YzI-NCGvxhH4=/910x/smart/12c6e6c85582494fa4d97caffebc94c8/ccmcms-hugo/24592082.jpg', 2, 0),
(3, 'Mah-jong', 'Asie', 'Le mah-jong est un jeu de société d\'origine chinoise, qui se joue avec des tuiles et implique stratégie, calcul et un peu de chance. Le jeu traditionnel se joue à quatre joueurs.', 'https://static.fnac-static.com/multimedia/Images/FR/MDM/a0/d9/42/4381088/1520-1/tsp20240420095100/Jeu-de-societe-France-Cartes-Smir-Mah-Jong-Luxe.jpg', 4, 0),
(4, 'Bao', 'Afrique', 'Le bao est un jeu de société traditionnel de l\'Afrique de l\'Est, dont le Kenya, la Tanzanie, les Comores, le Malawi, le Burundi et une partie de la République démocratique du Congo, tout en étant surtout populaire au Kenya et en Tanzanie.', 'https://as2.ftcdn.net/v2/jpg/04/18/60/09/1000_F_418600962_6wdRACshgCgnEaKqUVTxEoICJ6KGdnZZ.jpg', 2, NULL),
(5, 'Fanarona', 'Afrique', 'Le fanorona est un jeu de société combinatoire abstrait de l\'île de Madagascar. Il existe trois catégories de fanorona : le fanoron-telo, le fanoron-dimy et le fanoron-tsivy. Les Malgaches en jouent partout, dans le cadre familial comme à l\'extérieur, dans les villes et les campagnes.', 'https://www.jeux-terre-bois.com/media/com_hikashop/upload/entre_terre_bois_fanorona.png', 2, NULL),
(6, 'Felli', 'Afrique', 'Le Felli est un jeu datant de l\'antiquité originaire du Maroc. Chaque joueur déplace un pion soit en le glissant d\'une intersection à une autre qui soit libre ou en sautant par dessus un pion adverse. Les pions sont promus Dames s\'ils parviennent sur la première ligne adverse. Le but du jeu est de capturer en premier tous les pions adverses.', 'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/sdae9dad9408c692a/image/iec9d917c3ae1569e/version/1562778415/image.jpg', 2, 5),
(7, 'Senet', 'Afrique', 'Le senet est le jeu le plus connu de l\'Égypte antique. C\'est le jeu de table le plus pratiqué par les anciens Égyptiens du Nouvel Empire et des époques qui suivirent, mais il existe depuis l\'époque prédynastique.', 'https://m.media-amazon.com/images/I/81PJ3eVDjXL.jpg', 2, NULL),
(8, 'Shogi', 'Asie', 'Le shōgi est un jeu de société combinatoire abstrait traditionnel japonais, se rapprochant du jeu d\'échecs, et opposant deux joueurs. Ce jeu est célébré le 17 novembre au Japon, où il est extrêmement populaire.', 'https://2.bp.blogspot.com/-nKIUzLefl6c/UJntYuOheEI/AAAAAAAAcy8/umV9bG6wcMI/s1600/3331890418_f30023a3bc_b.jpg', 2, 0),
(9, 'Xiangqi', 'Asie', 'Le xiangqi, littéralement « échiquier des éléphants » aussi appelé « échecs chinois », est un jeu de société combinatoire abstrait qui se joue sur un tableau rectangulaire de 9 lignes de large sur 10 lignes de long. Le jeu est également connu au Japon sous le nom de kawanakajima shōgi.', 'https://qph.cf2.quoracdn.net/main-qimg-82d570c989729331cac8c875d4f94286-lq', 2, NULL),
(10, 'Pachisi', 'Asie', 'Le pachisi est un jeu de société originaire de l\'Inde, on dit généralement que c\'est le jeu national traditionnel indien. Il se joue sur un tablier en forme de croix aux quatre branches égales. Les joueurs déplacent leurs pièces autour du circuit selon le résultat du jet de 6 cauris. Le nombre de fentes visibles indique la plupart du temps le nombre de cases dont on peut avancer un pion.', 'https://m.media-amazon.com/images/I/71PR9Sz0VJL._AC_UF1000,1000_QL80_.jpg', 2, 0),
(11, 'Lau Kata Kati', 'Asie', 'Le Lau kata kati est un jeu de société traditionnel originaire du Bengale, une région située au nord-est de l\'Inde et au Bangladesh. Ce jeu est populaire parmi les enfants et les adultes et est souvent joué lors de rassemblements sociaux ou familiaux.', 'https://www.whatdowedoallday.com/wp-content/uploads/2021/02/lau-kata-kati-3.jpg', 2, 0),
(12, 'Bagh-Chal', 'Asie', 'Le Bagh-Chal est un jeu de société traditionnel népalais, également connu sous le nom de \"jeu du tigre et des chèvres\". C\'est un jeu de stratégie qui se joue sur un plateau particulier et met en scène une lutte entre deux camps : les tigres et les chèvres.', 'https://tabletopping.games/wp-content/uploads/2022/07/bagh-chal-1.jpg?w=900', 2, 0),
(13, 'Ashta Chamma', 'Asie', 'Le Ashta Chamma est un jeu de société traditionnel originaire de l\'Inde, particulièrement populaire dans les États du sud tels que l\'Andhra Pradesh et le Telangana. Il est similaire à d\'autres jeux de parcours comme le Ludo et le Pachisi, et il se joue sur un plateau spécifique avec des pions et des coquilles de cowrie pour déterminer les mouvements.', 'https://ancientliving.in/cdn/shop/products/Ashta-Chamma-Native-Game-Normal-2.jpg?v=1679656082', 2, 0),
(14, 'Échecs', 'Asie', 'Les échecs sont un jeu de société stratégique qui se joue sur un plateau appelé échiquier. C\'est l\'un des jeux les plus populaires et les plus anciens au monde, ayant une histoire riche et complexe.', 'https://lh4.googleusercontent.com/proxy/uOaQwjtvi-JbHJL5kBzCKIi1mAOjArHelCKYDT_B8cjdoT9SQKJqNDDmZusWPgeEx62CgItvUy3kxVDVG-W7pVfydk5eszWU1UDa_ERmPuXcvGDQXnCbWmaBEQBq0Jcz9R_BfFKeP_7jU8OxDOcG0XjolRpc8qNTKo8a9TVUpMBPQ2tO4eEn4iK12jfHRrl8MhzrsS7CvpG1Cw', 2, 0),
(15, 'Backgammon', 'Asie', 'Le backgammon est un jeu de société traditionnel, l\'un des plus anciens encore joués aujourd\'hui. Il combine des éléments de stratégie et de hasard, utilisant un plateau de jeu, des pions, des dés et des règles spécifiques.', 'https://www.variantes.com/33283-thickbox_default/backgammon-manopoulos-olive-luxe-38cm.jpg', 2, 0),
(16, 'Hnefatafl', 'Europe', 'Le Hnefatafl est un ancien jeu de stratégie viking joué sur un plateau avec des pièces de deux couleurs différentes. L\'un des joueurs contrôle une pièce centrale, le roi, et ses défenseurs, tandis que l\'autre joueur contrôle les attaquants. Le but du jeu est de faire s\'échapper le roi vers le bord du plateau.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwZrV_7t4q0QiGGzgetF12FM0GyAKs7pn7A&s', 2, 0),
(17, 'Alquerque', 'Europe', 'L\'Alquerque est un jeu de société espagnol traditionnel qui est l\'ancêtre du jeu de dames. Il se joue sur un plateau avec un réseau de cases et implique des mouvements stratégiques pour capturer les pièces de l\'adversaire.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3mnUQsX61nE8bgCEietNXblFRLWv_fp2qQ&s', 2, 0),
(18, 'Renard et oies', 'Europe', 'Le Renard et les oies est un jeu de stratégie asymétrique traditionnel européen. Un joueur contrôle un renard, et l\'autre joueur contrôle plusieurs oies. Le but du renard est de capturer les oies, tandis que les oies doivent encercler le renard pour l\'immobiliser.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReNZFJL_R-CHdGeJd5HnocIw7FqugbsZELA&s', 2, 0),
(19, 'Daldos', 'Europe', 'Le Daldos est un ancien jeu de course et de stratégie scandinave joué sur un plateau long et étroit avec des dés et des pions. Le but est de faire traverser tous ses pions sur le plateau avant l\'adversaire.', 'https://i.etsystatic.com/19118235/r/il/5e3fe7/3914386979/il_fullxfull.3914386979_bx1z.jpg', 2, 0),
(20, 'Cluedo', 'Europe', 'Le Cluedo est un jeu de société britannique où les joueurs doivent découvrir le meurtrier, l\'arme du crime et le lieu du meurtre parmi plusieurs possibilités. Les joueurs utilisent la déduction logique pour éliminer les suspects et trouver la solution.', 'https://fr.shopping.rakuten.com/photo/936907516.jpg', 2, 0),
(21, 'Crokinole', 'Amérique', 'Le Crokinole est un jeu de société canadien de dextérité et de stratégie, où les joueurs doivent faire glisser des disques en bois sur un plateau pour les placer dans des zones de score tout en essayant de déloger les disques de leurs adversaires.', 'https://m.media-amazon.com/images/I/71Q6dmLZ7ML.jpg', 2, 0),
(22, 'Mu Torere', 'Océanie', 'Le Mu Torere est un jeu de société traditionnel maori de la Nouvelle-Zélande qui se joue sur un plateau en forme d\'étoile. Chaque joueur déplace ses pions le long des lignes, essayant de bloquer les mouvements de l\'adversaire.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWz0kbOc4E9maVU4nksg20Sak8A31EYv-LQ&s', 2, 0),
(23, 'Loteria', 'Amérique', 'Le Loteria est un jeu de société mexicain similaire au bingo, où les joueurs essaient de remplir des cartes avec des images sélectionnées au hasard. Il est souvent joué lors de fêtes et de rassemblements sociaux.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLZj2-xTWqCx7cXA5t51kArU6WMaimgiNvw&s', 2, 0),
(24, 'Sapo', 'Amérique', 'Le Sapo est un jeu de société péruvien traditionnel qui implique de lancer des pièces de monnaie sur un plateau avec des trous, en visant à les faire atterrir dans des cases marquées pour marquer des points.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pTk9eqmSgWBQD8MkXo4GgN0_SyLozfeFqg&s', 1, 0),
(25, 'Tejo', 'Amérique', 'Le Tejo est un jeu de société colombien traditionnel qui implique de lancer des disques métalliques sur une surface en argile, en visant à toucher une cible pour marquer des points. Il est souvent accompagné de musique, de boissons et de festivités.', 'https://sportsmatik.com/uploads/matik-sports-corner/matik-know-how/tejo_1564640336.jpg', 2, 0),
(26, 'Puluc', 'Amérique', 'Le Puluc est un ancien jeu de société maya joué en Amérique centrale. Il se joue sur un plateau de jeu spécifique avec des pions et des dés, et implique de capturer les pions de l\'adversaire pour gagner.', 'https://i.etsystatic.com/19118235/r/il/267f76/4965961656/il_fullxfull.4965961656_jhxu.jpg', 2, 0),
(27, 'Sarakarta', 'Asie', 'Le Sarakarta est un jeu de société traditionnel du sud de l\'Inde. Il se joue sur un plateau avec des pions et des dés, et implique de déplacer stratégiquement ses pions pour atteindre la maison finale.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnAVZujcuTQPOq540fM8fH6QKEyqY8Yzz-g&s', 2, 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `permission` enum('visiteur','inscrit','admin') DEFAULT 'visiteur',
  `date_of_birth` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `permission`, `date_of_birth`, `created_at`) VALUES
(5, 'Ryan', 'ryan@gmail.com', '$2y$10$XdhIkdSRqBX/2./YR/1mC.B0m05cqxVuu2sUMNiWShEGjeasSoMgu', 'admin', '2003-09-27', '2024-05-30 00:18:59'),
(6, 'test', 'test@gmail.com', '$2y$10$r3WEBrbNF.YcRSdiBrhJTOA7rjNx3YSbBdnP4Y/I1uC9O0356OWFW', '', '2000-01-01', '2024-05-30 23:05:59');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`GameId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `games`
--
ALTER TABLE `games`
  MODIFY `GameId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
