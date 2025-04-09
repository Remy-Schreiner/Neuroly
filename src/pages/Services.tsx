import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Settings, BookOpen, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-white">
        <div className="container">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-text mb-6">
              Nos prestations pour passer à l'action
            </h1>
            <p className="text-xl text-text/80">
              Un accompagnement complet pour intégrer l'IA dans votre quotidien professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Brain className="h-12 w-12 text-primary" />,
                title: "Audit personnalisé",
                description: "Un diagnostic complet de vos besoins et du potentiel de l'IA dans votre activité",
                features: [
                  "Analyse de vos processus actuels",
                  "Identification des opportunités d'automatisation",
                  "Estimation des gains de temps potentiels",
                  "Recommandations personnalisées"
                ],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
              },
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Intégration",
                description: "Mise en place concrète des solutions IA adaptées à vos besoins",
                features: [
                  "Sélection des outils adaptés",
                  "Configuration sur-mesure",
                  "Intégration à vos processus existants",
                  "Tests et optimisations"
                ],
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-primary" />,
                title: "Formation",
                description: "Montée en compétence progressive et adaptée à votre niveau",
                features: [
                  "Formation aux outils sélectionnés",
                  "Création de guides personnalisés",
                  "Exercices pratiques",
                  "Support pédagogique continu"
                ],
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Suivi",
                description: "Accompagnement continu pour optimiser votre utilisation",
                features: [
                  "Points réguliers d'avancement",
                  "Ajustements selon vos retours",
                  "Support technique",
                  "Évolutions et mises à jour"
                ],
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text/80 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-text/80">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/formules"
                  className="btn-primary inline-flex items-center space-x-2"
                  onClick={scrollToTop}
                >
                  <span>Voir nos formules</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">Ce qui fait la différence</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Accompagnement humain",
                  description: "Un suivi personnalisé et bienveillant, sans jargon technique"
                },
                {
                  title: "Méthodologie éprouvée",
                  description: "Une approche progressive et testée qui a fait ses preuves"
                },
                {
                  title: "Partenaire de confiance",
                  description: "Un véritable allié dans votre transformation numérique"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-text/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-lg text-text/80 mb-8">
              Découvrez comment l'IA peut transformer votre quotidien professionnel.
            </p>
            <Link
              to="/formules"
              className="btn-primary"
              onClick={scrollToTop}
            >
              Voir nos formules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;