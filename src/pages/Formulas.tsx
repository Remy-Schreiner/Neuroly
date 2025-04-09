import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Formulas = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formulas = [
    {
      name: "Formule Essentielle",
      description: "Une base solide pour comprendre où l’IA peut vraiment vous aider.",
      features: [
        "Audit complet de vos activités",
        "Identification des opportunités d'automatisation",
        "Recommandations concrètes et personnalisées",
        "1 mois d'accompagnement stratégique",
        "Suivi des premiers résultats",
        "Support par email inclus"
      ],
      highlight: false,
    },
    {
      name: "Formule Complète",
      description: "Un accompagnement de A à Z pour intégrer l’IA dans votre quotidien.",
      features: [
        "Audit détaillé et ciblé",
        "Choix et intégration de plusieurs outils IA adaptés",
        "Formations personnalisées (selon votre niveau et vos outils)",
        "Création de supports pratiques et cas concrets",
        "2 mois de suivi régulier (points d'étape + ajustements)",
        "Évolutions, recommandations, et optimisation continue"
      ],
      highlight: true,
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-text mb-6">Nos formules d'accompagnement</h1>
            <p className="text-xl text-text/80">
              Deux formats clairs, pensés pour s’adapter à votre niveau, vos besoins, et vos ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {formulas.map((formula, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-md transition-transform transform hover:scale-[1.02] duration-300 ${
                  formula.highlight
                    ? 'bg-primary text-white'
                    : 'bg-white'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{formula.name}</h3>
                <p className={`mb-6 text-lg ${formula.highlight ? 'text-white/80' : 'text-text/80'}`}>
                  {formula.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {formula.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className={`h-5 w-5 ${
                        formula.highlight ? 'text-white' : 'text-secondary'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-opacity ${
                    formula.highlight
                      ? 'bg-white text-primary hover:opacity-90'
                      : 'bg-primary text-white hover:opacity-90'
                  }`}
                  onClick={scrollToTop}
                >
                  Réserver un pré-audit
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-text/60 text-sm mt-12">
            💬 Toutes nos formules sont proposées <strong>sur devis</strong>, selon la taille de votre structure et vos objectifs. Parlons-en ensemble pour définir ce qui vous correspond.
          </p>
        </div>
      </section>


    {/* FAQ */}
    <section className="py-20 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">On vous voit venir 👀</h2>
          <p className="text-text/80 mt-4 text-lg">Voici les questions qu'on nous pose souvent (et nos réponses sans langue de bois).</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "🧭",
              question: "Comment savoir si l’IA peut vraiment m’aider ?",
              answer: "C’est justement pour ça qu’on commence toujours par un audit. On regarde ce que vous faites, comment vous le faites, et on voit si l’IA peut vous faire gagner du temps, de l’énergie ou juste un peu de paix mentale. Si ce n’est pas utile, on vous le dit. Promis."
            },
            {
              icon: "🔄",
              question: "Et si je me trompe de formule ?",
              answer: "Pas de panique. Vous pouvez toujours passer à une formule plus complète (ou plus légère). On avance avec vous, pas contre vous. Ce n’est pas une box mensuelle qui vous enferme pour 12 mois."
            },
            {
              icon: "⏱️",
              question: "Ça prend combien de temps pour démarrer ?",
              answer: "En général, on peut lancer les premières actions sous 1 à 2 semaines. Ça dépend un peu de vous aussi (disponibilité, outils en place…). Mais dès qu’on commence, vous voyez les choses bouger très vite."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
              <p className="text-text/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Formulas;
