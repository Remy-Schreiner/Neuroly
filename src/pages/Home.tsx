import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Settings, BookOpen, Users } from 'lucide-react';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container flex flex-col items-center text-center">
          <img 
            src="/logo_slogan_850x850.png" 
            alt="Logo Neuroly"
            className="mb-4"
          />
          <h1 className="text-5xl font-bold text-text mb-4">
            Exploitez le potentiel d'un assistant IA
          </h1>
          <p className="text-xl text-text/80 mb-6 max-w-2xl">
            Les tâches répétitives, l'analyse des données, la gestion des clients n'as jamais été aussi faciles.
          </p>
          <Link to="/contact" className="btn-primary" onClick={scrollToTop}>
            👉 Réserver un pré-audit gratuit
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title text-center">Neuroly vous accompagne ✨</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Audit personnalisé",
                description:
                  "On commence par comprendre vos besoins. L’IA ne sert à rien si elle ne répond pas à vos vrais enjeux.",
              },
              {
                icon: <Settings className="h-8 w-8 text-primary" />,
                title: "Intégration simple",
                description:
                  "On installe les bons outils, au bon endroit. Sans jargon, sans complications, juste ce qu’il faut.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: "Formation adaptée",
                description:
                  "On vous apprend l’essentiel, à votre rythme. Pas de blabla inutile, juste ce qui vous rend autonome.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Suivi sur-mesure",
                description:
                  "Vous avancez, on reste à vos côtés. Conseils, ajustements, réponses : vous n’êtes jamais seuls.",
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-text/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center">Pourquoi s'approprier un assistant IA ?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "☕",
                title: "Il bosse pendant que t’es au café",
                description:
                  "Un assistant IA, c’est comme un collègue robot qui adore les tâches relou : répondre aux mails, trouver une date de réunion, classer les docs… Pendant que toi tu sirotes ton café tranquille, lui il gère comme un chef.",
              },
              {
                icon: "🔍",
                title: "Il voit tout, il sait tout (ou presque)",
                description:
                  "L’IA, c’est le Sherlock Holmes des chiffres. Elle lit des montagnes de tableaux et te sort les infos utiles genre : 'Hey, t’as vu que les gens cliquent plus le jeudi ?'. Moins de migraines, plus d’idées malines.",
              },
              {
                icon: "😇",
                title: "Il parle à tout le monde sans jamais s’énerver",
                description:
                  "Un client écrit à 3h du mat’ ? Aucun souci ! L’IA répond poliment, donne les infos, envoie même un bisou du facteur 🐌. Elle ne dort jamais, ne râle jamais, et rend tout le monde content.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center bg-background p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-text/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demystify AI */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6 text-primary text-5xl space-x-4">
              <span>🧠</span>
              <span>⚙️</span>
              <span>🚀</span>
            </div>
            <h2 className="section-title">L'IA, ce n’est pas magique… mais presque.</h2>
            <p className="section-subtitle">
              On en entend parler partout, elle semble faire des miracles, mais entre nous : ça reste un outil. Un outil puissant, oui, mais seulement si on vous montre comment l’utiliser. Et c’est exactement ce qu’on fait.
            </p>

            <p className="mt-6 text-lg text-text/80">
              Que vous soyez allergique à la tech ou juste curieux, on vous accompagne pas à pas. Pas de jargon, pas de prise de tête. Juste des solutions concrètes, utiles et pensées pour **vous simplifier la vie**.
            </p>

            <div className="space-y-4 text-left mt-10 text-lg">
              {[
                "❌ Non, l’IA ne va pas piquer votre job. Elle est là pour vous aider, pas pour vous remplacer.",
                "⏰ Gagnez facilement 1 à 2 heures par jour en automatisant les petites tâches du quotidien.",
                "🧩 On vous montre comment ça marche, avec des exemples simples, pas des schémas compliqués.",
                "👨‍👩‍👧‍👦 Pas besoin d’être geek ou développeur : si vous savez envoyer un mail, vous pouvez utiliser l’IA.",
                "👐 Et surtout, vous n’êtes jamais seul : notre équipe reste là pour vous guider, répondre à vos questions et vous aider à progresser à votre rythme."
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/approche" className="btn-secondary" onClick={scrollToTop}>
                Découvrir notre accompagnement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;