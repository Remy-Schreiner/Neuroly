import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      category: "Général",
      questions: [
        {
          question: "Est-ce que l'IA va me remplacer ?",
          answer: "Non, l'IA est un outil pour vous assister et améliorer votre productivité. Elle ne remplace pas l'expertise humaine mais vous permet de vous concentrer sur les tâches à plus forte valeur ajoutée."
        },
        {
          question: "Est-ce que c'est compliqué à utiliser ?",
          answer: "Non, notre approche est conçue pour être accessible à tous. Nous vous accompagnons pas à pas dans la prise en main des outils, avec des formations adaptées à votre niveau."
        },
        {
          question: "Combien de temps pour voir des résultats ?",
          answer: "Les premiers résultats sont généralement visibles dès les premières semaines d'utilisation, avec des gains de temps mesurables sur vos tâches quotidiennes."
        }
      ],
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800"
    },
    {
      category: "Services",
      questions: [
        {
          question: "Comment se déroule l'audit gratuit ?",
          answer: "L'audit est un échange de 30 minutes où nous analysons vos besoins et processus actuels pour identifier les opportunités d'amélioration grâce à l'IA."
        },
        {
          question: "Quels types d'outils IA proposez-vous ?",
          answer: "Nous sélectionnons les meilleurs outils selon vos besoins : assistants virtuels, outils de rédaction, d'analyse de données, de création de contenu, etc."
        },
        {
          question: "Proposez-vous des formations personnalisées ?",
          answer: "Oui, toutes nos formations sont adaptées à votre niveau et à vos besoins spécifiques. Nous créons des parcours sur-mesure."
        }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
    },
    {
      category: "Accompagnement",
      questions: [
        {
          question: "Quelle est la durée de l'accompagnement ?",
          answer: "La durée varie selon la formule choisie : de 1 mois pour la formule Starter à un accompagnement continu pour la formule Sur-mesure."
        },
        {
          question: "Comment se passe le suivi ?",
          answer: "Nous organisons des points réguliers pour suivre vos progrès, répondre à vos questions et ajuster les solutions selon vos retours."
        },
        {
          question: "Puis-je changer de formule en cours de route ?",
          answer: "Oui, vous pouvez évoluer vers une formule supérieure à tout moment selon vos besoins."
        }
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold text-text mb-6">
                Questions fréquentes
              </h1>
              <p className="text-xl text-text/80">
                Tout ce que vous devez savoir sur notre accompagnement IA.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800"
                alt="FAQ"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container">
          {faqs.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
                  <div className="space-y-8">
                    {category.questions.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="bg-white p-6 rounded-lg shadow-sm"
                      >
                        <h3 className="text-xl font-semibold mb-4">
                          {faq.question}
                        </h3>
                        <p className="text-text/80">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">
                Vous avez d'autres questions ?
              </h2>
              <p className="text-lg text-text/80 mb-8">
                N'hésitez pas à nous contacter, nous serons ravis d'y répondre.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Nous contacter
                </Link>
                <Link to="/approche" className="btn-secondary">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Contact"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;