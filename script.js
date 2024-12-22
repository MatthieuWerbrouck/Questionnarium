

const questions = [
    {
        question: 'Qui a écrit "Les Misérables" ?',
        answers: [
            { text: 'Victor Hugo', correct: true },
            { text: 'Émile Zola', correct: false },
            { text: 'Gustave Flaubert', correct: false },
            { text: 'Honoré de Balzac', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du célèbre roman de George Orwell publié en 1949 ?',
        answers: [
            { text: '1984', correct: true },
            { text: 'Brave New World', correct: false },
            { text: 'Fahrenheit 451', correct: false },
            { text: 'Animal Farm', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "À la recherche du temps perdu" ?',
        answers: [
            { text: 'Marcel Proust', correct: true },
            { text: 'Albert Camus', correct: false },
            { text: 'Jean-Paul Sartre', correct: false },
            { text: 'André Gide', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de J.R.R. Tolkien qui a été adapté en une trilogie de films ?',
        answers: [
            { text: 'Le Seigneur des Anneaux', correct: true },
            { text: 'Le Hobbit', correct: false },
            { text: 'Silmarillion', correct: false },
            { text: 'Les Enfants de Húrin', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Crime et Châtiment" ?',
        answers: [
            { text: 'Fiodor Dostoïevski', correct: true },
            { text: 'Léon Tolstoï', correct: false },
            { text: 'Anton Tchekhov', correct: false },
            { text: 'Nicolas Gogol', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Mary Shelley qui est considéré comme l\'un des premiers romans de science-fiction ?',
        answers: [
            { text: 'Frankenstein', correct: true },
            { text: 'Dracula', correct: false },
            { text: 'Le Portrait de Dorian Gray', correct: false },
            { text: 'Le Fantôme de l\'Opéra', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Vieil Homme et la Mer" ?',
        answers: [
            { text: 'Ernest Hemingway', correct: true },
            { text: 'John Steinbeck', correct: false },
            { text: 'William Faulkner', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Gabriel García Márquez qui a remporté le prix Nobel de littérature ?',
        answers: [
            { text: 'Cent Ans de Solitude', correct: true },
            { text: 'L\'Amour aux temps du choléra', correct: false },
            { text: 'Chronique d\'une mort annoncée', correct: false },
            { text: 'Le Général dans son labyrinthe', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Orgueil et Préjugés" ?',
        answers: [
            { text: 'Jane Austen', correct: true },
            { text: 'Charlotte Brontë', correct: false },
            { text: 'Emily Brontë', correct: false },
            { text: 'Mary Shelley', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Mark Twain qui raconte les aventures d\'un jeune garçon sur le Mississippi ?',
        answers: [
            { text: 'Les Aventures de Tom Sawyer', correct: true },
            { text: 'Les Aventures de Huckleberry Finn', correct: false },
            { text: 'Le Prince et le Pauvre', correct: false },
            { text: 'Un Yankee à la cour du roi Arthur', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Comte de Monte-Cristo" ?',
        answers: [
            { text: 'Alexandre Dumas', correct: true },
            { text: 'Jules Verne', correct: false },
            { text: 'Victor Hugo', correct: false },
            { text: 'Honoré de Balzac', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Franz Kafka qui raconte la transformation d\'un homme en insecte ?',
        answers: [
            { text: 'La Métamorphose', correct: true },
            { text: 'Le Procès', correct: false },
            { text: 'Le Château', correct: false },
            { text: 'Amérique', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Fleurs du mal" ?',
        answers: [
            { text: 'Charles Baudelaire', correct: true },
            { text: 'Arthur Rimbaud', correct: false },
            { text: 'Paul Verlaine', correct: false },
            { text: 'Stéphane Mallarmé', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Miguel de Cervantes qui raconte les aventures d\'un chevalier errant ?',
        answers: [
            { text: 'Don Quichotte', correct: true },
            { text: 'Lazarillo de Tormes', correct: false },
            { text: 'La Célestine', correct: false },
            { text: 'Le Siècle d\'or', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Moby Dick" ?',
        answers: [
            { text: 'Herman Melville', correct: true },
            { text: 'Nathaniel Hawthorne', correct: false },
            { text: 'Edgar Allan Poe', correct: false },
            { text: 'Henry James', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de J.D. Salinger qui raconte l\'histoire de Holden Caulfield ?',
        answers: [
            { text: 'L\'Attrape-cœurs', correct: true },
            { text: 'Franny et Zooey', correct: false },
            { text: 'Nouvelles', correct: false },
            { text: 'D\'autres nouvelles', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Rouge et le Noir" ?',
        answers: [
            { text: 'Stendhal', correct: true },
            { text: 'Gustave Flaubert', correct: false },
            { text: 'Honoré de Balzac', correct: false },
            { text: 'Émile Zola', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de F. Scott Fitzgerald qui se déroule dans les années 1920 ?',
        answers: [
            { text: 'Gatsby le Magnifique', correct: true },
            { text: 'Tendre est la nuit', correct: false },
            { text: 'Les Heureux et les Damnés', correct: false },
            { text: 'Le Dernier Nabab', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Frères Karamazov" ?',
        answers: [
            { text: 'Fiodor Dostoïevski', correct: true },
            { text: 'Léon Tolstoï', correct: false },
            { text: 'Anton Tchekhov', correct: false },
            { text: 'Nicolas Gogol', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Harper Lee qui traite des questions de race et de justice dans le sud des États-Unis ?',
        answers: [
            { text: 'Ne tirez pas sur l\'oiseau moqueur', correct: true },
            { text: 'Des souris et des hommes', correct: false },
            { text: 'La Couleur pourpre', correct: false },
            { text: 'Le Bruit et la Fureur', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Trois Mousquetaires" ?',
        answers: [
            { text: 'Alexandre Dumas', correct: true },
            { text: 'Jules Verne', correct: false },
            { text: 'Victor Hugo', correct: false },
            { text: 'Honoré de Balzac', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Lewis Carroll qui raconte les aventures d\'une jeune fille dans un pays merveilleux ?',
        answers: [
            { text: 'Alice au pays des merveilles', correct: true },
            { text: 'Le Magicien d\'Oz', correct: false },
            { text: 'Peter Pan', correct: false },
            { text: 'Le Petit Prince', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Petit Prince" ?',
        answers: [
            { text: 'Antoine de Saint-Exupéry', correct: true },
            { text: 'Jean de La Fontaine', correct: false },
            { text: 'Marcel Pagnol', correct: false },
            { text: 'Jules Verne', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Bram Stoker qui raconte l\'histoire d\'un vampire ?',
        answers: [
            { text: 'Dracula', correct: true },
            { text: 'Frankenstein', correct: false },
            { text: 'Le Portrait de Dorian Gray', correct: false },
            { text: 'Le Fantôme de l\'Opéra', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Aventures de Sherlock Holmes" ?',
        answers: [
            { text: 'Arthur Conan Doyle', correct: true },
            { text: 'Agatha Christie', correct: false },
            { text: 'Edgar Allan Poe', correct: false },
            { text: 'Wilkie Collins', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Jules Verne qui raconte un voyage autour du monde en 80 jours ?',
        answers: [
            { text: 'Le Tour du monde en quatre-vingts jours', correct: true },
            { text: 'Vingt mille lieues sous les mers', correct: false },
            { text: 'De la Terre à la Lune', correct: false },
            { text: 'Les Enfants du capitaine Grant', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Raisins de la colère" ?',
        answers: [
            { text: 'John Steinbeck', correct: true },
            { text: 'Ernest Hemingway', correct: false },
            { text: 'William Faulkner', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Alexandre Dumas qui raconte l\'histoire d\'un homme injustement emprisonné ?',
        answers: [
            { text: 'Le Comte de Monte-Cristo', correct: true },
            { text: 'Les Trois Mousquetaires', correct: false },
            { text: 'La Reine Margot', correct: false },
            { text: 'Le Vicomte de Bragelonne', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Meilleur des mondes" ?',
        answers: [
            { text: 'Aldous Huxley', correct: true },
            { text: 'George Orwell', correct: false },
            { text: 'Ray Bradbury', correct: false },
            { text: 'Philip K. Dick', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Ray Bradbury qui se déroule dans un futur où les livres sont interdits ?',
        answers: [
            { text: 'Fahrenheit 451', correct: true },
            { text: '1984', correct: false },
            { text: 'Le Meilleur des mondes', correct: false },
            { text: 'Le Maître du Haut Château', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Nom de la rose" ?',
        answers: [
            { text: 'Umberto Eco', correct: true },
            { text: 'Gabriel García Márquez', correct: false },
            { text: 'Mario Vargas Llosa', correct: false },
            { text: 'Jorge Luis Borges', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de William Golding qui raconte l\'histoire de garçons échoués sur une île déserte ?',
        answers: [
            { text: 'Sa Majesté des mouches', correct: true },
            { text: 'L\'Île au trésor', correct: false },
            { text: 'Robinson Crusoé', correct: false },
            { text: 'Le Seigneur des Anneaux', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Parfum" ?',
        answers: [
            { text: 'Patrick Süskind', correct: true },
            { text: 'Günter Grass', correct: false },
            { text: 'Heinrich Böll', correct: false },
            { text: 'Thomas Mann', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Joseph Heller qui se déroule pendant la Seconde Guerre mondiale ?',
        answers: [
            { text: 'Catch-22', correct: true },
            { text: 'À l\'ouest rien de nouveau', correct: false },
            { text: 'Les Nus et les Morts', correct: false },
            { text: 'Pour qui sonne le glas', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Seigneur des Anneaux" ?',
        answers: [
            { text: 'J.R.R. Tolkien', correct: true },
            { text: 'C.S. Lewis', correct: false },
            { text: 'George R.R. Martin', correct: false },
            { text: 'Philip Pullman', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Margaret Atwood qui se déroule dans une société dystopique ?',
        answers: [
            { text: 'La Servante écarlate', correct: true },
            { text: '1984', correct: false },
            { text: 'Le Meilleur des mondes', correct: false },
            { text: 'Le Maître du Haut Château', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Hauts de Hurlevent" ?',
        answers: [
            { text: 'Emily Brontë', correct: true },
            { text: 'Charlotte Brontë', correct: false },
            { text: 'Anne Brontë', correct: false },
            { text: 'Jane Austen', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Leo Tolstoy qui raconte l\'histoire d\'une femme aristocratique et de son amant ?',
        answers: [
            { text: 'Anna Karénine', correct: true },
            { text: 'Guerre et Paix', correct: false },
            { text: 'Résurrection', correct: false },
            { text: 'La Sonate à Kreutzer', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "L\'Étranger" ?',
        answers: [
            { text: 'Albert Camus', correct: true },
            { text: 'Jean-Paul Sartre', correct: false },
            { text: 'André Gide', correct: false },
            { text: 'Marcel Proust', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de James Joyce qui se déroule en une seule journée à Dublin ?',
        answers: [
            { text: 'Ulysse', correct: true },
            { text: 'Portrait de l\'artiste en jeune homme', correct: false },
            { text: 'Les Gens de Dublin', correct: false },
            { text: 'Finnegans Wake', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Procès" ?',
        answers: [
            { text: 'Franz Kafka', correct: true },
            { text: 'Thomas Mann', correct: false },
            { text: 'Hermann Hesse', correct: false },
            { text: 'Robert Musil', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de George Orwell qui se déroule dans une ferme où les animaux se révoltent ?',
        answers: [
            { text: 'La Ferme des animaux', correct: true },
            { text: '1984', correct: false },
            { text: 'Le Meilleur des mondes', correct: false },
            { text: 'Le Maître du Haut Château', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Vieil Homme et la Mer" ?',
        answers: [
            { text: 'Ernest Hemingway', correct: true },
            { text: 'John Steinbeck', correct: false },
            { text: 'William Faulkner', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Gabriel García Márquez qui a remporté le prix Nobel de littérature ?',
        answers: [
            { text: 'Cent Ans de Solitude', correct: true },
            { text: 'L\'Amour aux temps du choléra', correct: false },
            { text: 'Chronique d\'une mort annoncée', correct: false },
            { text: 'Le Général dans son labyrinthe', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Misérables" ?',
        answers: [
            { text: 'Victor Hugo', correct: true },
            { text: 'Émile Zola', correct: false },
            { text: 'Gustave Flaubert', correct: false },
            { text: 'Honoré de Balzac', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du célèbre roman de George Orwell publié en 1949 ?',
        answers: [
            { text: '1984', correct: true },
            { text: 'Brave New World', correct: false },
            { text: 'Fahrenheit 451', correct: false },
            { text: 'Animal Farm', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "À la recherche du temps perdu" ?',
        answers: [
            { text: 'Marcel Proust', correct: true },
            { text: 'Albert Camus', correct: false },
            { text: 'Jean-Paul Sartre', correct: false },
            { text: 'André Gide', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de J.R.R. Tolkien qui a été adapté en une trilogie de films ?',
        answers: [
            { text: 'Le Seigneur des Anneaux', correct: true },
            { text: 'Le Hobbit', correct: false },
            { text: 'Silmarillion', correct: false },
            { text: 'Les Enfants de Húrin', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Crime et Châtiment" ?',
        answers: [
            { text: 'Fiodor Dostoïevski', correct: true },
            { text: 'Léon Tolstoï', correct: false },
            { text: 'Anton Tchekhov', correct: false },
            { text: 'Nicolas Gogol', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Mary Shelley qui est considéré comme l\'un des premiers romans de science-fiction ?',
        answers: [
            { text: 'Frankenstein', correct: true },
            { text: 'Dracula', correct: false },
            { text: 'Le Portrait de Dorian Gray', correct: false },
            { text: 'Le Fantôme de l\'Opéra', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Vieil Homme et la Mer" ?',
        answers: [
            { text: 'Ernest Hemingway', correct: true },
            { text: 'John Steinbeck', correct: false },
            { text: 'William Faulkner', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Gabriel García Márquez qui a remporté le prix Nobel de littérature ?',
        answers: [
            { text: 'Cent Ans de Solitude', correct: true },
            { text: 'L\'Amour aux temps du choléra', correct: false },
            { text: 'Chronique d\'une mort annoncée', correct: false },
            { text: 'Le Général dans son labyrinthe', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Orgueil et Préjugés" ?',
        answers: [
            { text: 'Jane Austen', correct: true },
            { text: 'Charlotte Brontë', correct: false },
            { text: 'Emily Brontë', correct: false },
            { text: 'Mary Shelley', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Mark Twain qui raconte les aventures d\'un jeune garçon sur le Mississippi ?',
        answers: [
            { text: 'Les Aventures de Tom Sawyer', correct: true },
            { text: 'Les Aventures de Huckleberry Finn', correct: false },
            { text: 'Le Prince et le Pauvre', correct: false },
            { text: 'Un Yankee à la cour du roi Arthur', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Comte de Monte-Cristo" ?',
        answers: [
            { text: 'Alexandre Dumas', correct: true },
            { text: 'Jules Verne', correct: false },
            { text: 'Victor Hugo', correct: false },
            { text: 'Honoré de Balzac', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Franz Kafka qui raconte la transformation d\'un homme en insecte ?',
        answers: [
            { text: 'La Métamorphose', correct: true },
            { text: 'Le Procès', correct: false },
            { text: 'Le Château', correct: false },
            { text: 'Amérique', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Fleurs du mal" ?',
        answers: [
            { text: 'Charles Baudelaire', correct: true },
            { text: 'Arthur Rimbaud', correct: false },
            { text: 'Paul Verlaine', correct: false },
            { text: 'Stéphane Mallarmé', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Miguel de Cervantes qui raconte les aventures d\'un chevalier errant ?',
        answers: [
            { text: 'Don Quichotte', correct: true },
            { text: 'Lazarillo de Tormes', correct: false },
            { text: 'La Célestine', correct: false },
            { text: 'Le Siècle d\'or', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Moby Dick" ?',
        answers: [
            { text: 'Herman Melville', correct: true },
            { text: 'Nathaniel Hawthorne', correct: false },
            { text: 'Edgar Allan Poe', correct: false },
            { text: 'Henry James', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de J.D. Salinger qui raconte l\'histoire de Holden Caulfield ?',
        answers: [
            { text: 'L\'Attrape-cœurs', correct: true },
            { text: 'Franny et Zooey', correct: false },
            { text: 'Nouvelles', correct: false },
            { text: 'D\'autres nouvelles', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Rouge et le Noir" ?',
        answers: [
            { text: 'Stendhal', correct: true },
            { text: 'Gustave Flaubert', correct: false },
            { text: 'Honoré de Balzac', correct: false },
            { text: 'Émile Zola', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de F. Scott Fitzgerald qui se déroule dans les années 1920 ?',
        answers: [
            { text: 'Gatsby le Magnifique', correct: true },
            { text: 'Tendre est la nuit', correct: false },
            { text: 'Les Heureux et les Damnés', correct: false },
            { text: 'Le Dernier Nabab', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Frères Karamazov" ?',
        answers: [
            { text: 'Fiodor Dostoïevski', correct: true },
            { text: 'Léon Tolstoï', correct: false },
            { text: 'Anton Tchekhov', correct: false },
            { text: 'Nicolas Gogol', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Harper Lee qui traite des questions de race et de justice dans le sud des États-Unis ?',
        answers: [
            { text: 'Ne tirez pas sur l\'oiseau moqueur', correct: true },
            { text: 'Des souris et des hommes', correct: false },
            { text: 'La Couleur pourpre', correct: false },
            { text: 'Le Bruit et la Fureur', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Trois Mousquetaires" ?',
        answers: [
            { text: 'Alexandre Dumas', correct: true },
            { text: 'Jules Verne', correct: false },
            { text: 'Victor Hugo', correct: false },
            { text: 'Honoré de Balzac', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Lewis Carroll qui raconte les aventures d\'une jeune fille dans un pays merveilleux ?',
        answers: [
            { text: 'Alice au pays des merveilles', correct: true },
            { text: 'Le Magicien d\'Oz', correct: false },
            { text: 'Peter Pan', correct: false },
            { text: 'Le Petit Prince', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Petit Prince" ?',
        answers: [
            { text: 'Antoine de Saint-Exupéry', correct: true },
            { text: 'Jean de La Fontaine', correct: false },
            { text: 'Marcel Pagnol', correct: false },
            { text: 'Jules Verne', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Bram Stoker qui raconte l\'histoire d\'un vampire ?',
        answers: [
            { text: 'Dracula', correct: true },
            { text: 'Frankenstein', correct: false },
            { text: 'Le Portrait de Dorian Gray', correct: false },
            { text: 'Le Fantôme de l\'Opéra', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Aventures de Sherlock Holmes" ?',
        answers: [
            { text: 'Arthur Conan Doyle', correct: true },
            { text: 'Agatha Christie', correct: false },
            { text: 'Edgar Allan Poe', correct: false },
            { text: 'Wilkie Collins', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Jules Verne qui raconte un voyage autour du monde en 80 jours ?',
        answers: [
            { text: 'Le Tour du monde en quatre-vingts jours', correct: true },
            { text: 'Vingt mille lieues sous les mers', correct: false },
            { text: 'De la Terre à la Lune', correct: false },
            { text: 'Les Enfants du capitaine Grant', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Raisins de la colère" ?',
        answers: [
            { text: 'John Steinbeck', correct: true },
            { text: 'Ernest Hemingway', correct: false },
            { text: 'William Faulkner', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Alexandre Dumas qui raconte l\'histoire d\'un homme injustement emprisonné ?',
        answers: [
            { text: 'Le Comte de Monte-Cristo', correct: true },
            { text: 'Les Trois Mousquetaires', correct: false },
            { text: 'La Reine Margot', correct: false },
            { text: 'Le Vicomte de Bragelonne', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Meilleur des mondes" ?',
        answers: [
            { text: 'Aldous Huxley', correct: true },
            { text: 'George Orwell', correct: false },
            { text: 'Ray Bradbury', correct: false },
            { text: 'Philip K. Dick', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Ray Bradbury qui se déroule dans un futur où les livres sont interdits ?',
        answers: [
            { text: 'Fahrenheit 451', correct: true },
            { text: '1984', correct: false },
            { text: 'Le Meilleur des mondes', correct: false },
            { text: 'Le Maître du Haut Château', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Nom de la rose" ?',
        answers: [
            { text: 'Umberto Eco', correct: true },
            { text: 'Gabriel García Márquez', correct: false },
            { text: 'Mario Vargas Llosa', correct: false },
            { text: 'Jorge Luis Borges', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de William Golding qui raconte l\'histoire de garçons échoués sur une île déserte ?',
        answers: [
            { text: 'Sa Majesté des mouches', correct: true },
            { text: 'L\'Île au trésor', correct: false },
            { text: 'Robinson Crusoé', correct: false },
            { text: 'Le Seigneur des Anneaux', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Parfum" ?',
        answers: [
            { text: 'Patrick Süskind', correct: true },
            { text: 'Günter Grass', correct: false },
            { text: 'Heinrich Böll', correct: false },
            { text: 'Thomas Mann', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Joseph Heller qui se déroule pendant la Seconde Guerre mondiale ?',
        answers: [
            { text: 'Catch-22', correct: true },
            { text: 'À l\'ouest rien de nouveau', correct: false },
            { text: 'Les Nus et les Morts', correct: false },
            { text: 'Pour qui sonne le glas', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Seigneur des Anneaux" ?',
        answers: [
            { text: 'J.R.R. Tolkien', correct: true },
            { text: 'C.S. Lewis', correct: false },
            { text: 'George R.R. Martin', correct: false },
            { text: 'Philip Pullman', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Margaret Atwood qui se déroule dans une société dystopique ?',
        answers: [
            { text: 'La Servante écarlate', correct: true },
            { text: '1984', correct: false },
            { text: 'Le Meilleur des mondes', correct: false },
            { text: 'Le Maître du Haut Château', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Les Hauts de Hurlevent" ?',
        answers: [
            { text: 'Emily Brontë', correct: true },
            { text: 'Charlotte Brontë', correct: false },
            { text: 'Anne Brontë', correct: false },
            { text: 'Jane Austen', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Leo Tolstoy qui raconte l\'histoire d\'une femme aristocratique et de son amant ?',
        answers: [
            { text: 'Anna Karénine', correct: true },
            { text: 'Guerre et Paix', correct: false },
            { text: 'Résurrection', correct: false },
            { text: 'La Sonate à Kreutzer', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "L\'Étranger" ?',
        answers: [
            { text: 'Albert Camus', correct: true },
            { text: 'Jean-Paul Sartre', correct: false },
            { text: 'André Gide', correct: false },
            { text: 'Marcel Proust', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de James Joyce qui se déroule en une seule journée à Dublin ?',
        answers: [
            { text: 'Ulysse', correct: true },
            { text: 'Portrait de l\'artiste en jeune homme', correct: false },
            { text: 'Les Gens de Dublin', correct: false },
            { text: 'Finnegans Wake', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Procès" ?',
        answers: [
            { text: 'Franz Kafka', correct: true },
            { text: 'Thomas Mann', correct: false },
            { text: 'Hermann Hesse', correct: false },
            { text: 'Robert Musil', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de George Orwell qui se déroule dans une ferme où les animaux se révoltent ?',
        answers: [
            { text: 'La Ferme des animaux', correct: true },
            { text: '1984', correct: false },
            { text: 'Le Meilleur des mondes', correct: false },
            { text: 'Le Maître du Haut Château', correct: false }
        ]
    },
    {
        question: 'Qui a écrit "Le Vieil Homme et la Mer" ?',
        answers: [
            { text: 'Ernest Hemingway', correct: true },
            { text: 'John Steinbeck', correct: false },
            { text: 'William Faulkner', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'Quel est le titre du roman de Gabriel García Márquez qui a remporté le prix Nobel de littérature ?',
        answers: [
            { text: 'Cent Ans de Solitude', correct: true },
            { text: 'L\'Amour aux temps du choléra', correct: false },
            { text: 'Chronique d\'une mort annoncée', correct: false },
            { text: 'Le Général dans son labyrinthe', correct: false }
        ]
    }
    // Ajoutez plus de questions ici
]
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(getRandomQuestion());
}

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    const shuffledAnswers = shuffleArray(question.answers);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}