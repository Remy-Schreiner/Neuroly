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
            Gagnez du temps, simplifiez vos process avec l'IA
          </h1>
          <p className="text-xl text-text/80 mb-6 max-w-2xl">
            Neuroly aide les PME à automatiser leurs tâches répétitives grâce à des outils d’IA simples, concrets et adaptés à vos besoins. Aucun jargon, juste des résultats.
          </p>
          <Link to="/contact" className="btn-primary" onClick={scrollToTop}>
            🚀 Réserver mon audit IA gratuit
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
        <h2 className="section-title text-center">Pourquoi intégrer l'IA dans votre quotidien ?</h2>

<div className="grid md:grid-cols-3 gap-8 mt-12">
  {[
    {
      icon: "⏱️",
      title: "Du temps gagné chaque jour",
      description:
        "Automatisez les tâches répétitives comme les relances, les réponses aux emails ou la mise à jour de fichiers. L’IA travaille pendant que vous gérez ce qui compte vraiment.",
    },
    {
      icon: "📊",
      title: "Des décisions plus rapides et plus justes",
      description:
        "Grâce à l’analyse instantanée des données, vous repérez les tendances, détectez ce qui fonctionne (ou pas) et agissez plus vite, sans prise de tête.",
    },
    {
      icon: "🤖",
      title: "Accessible, même sans être expert",
      description:
        "Pas besoin d’être développeur pour utiliser l’IA. On vous installe des outils simples, prêts à l’emploi, qui s’intègrent à vos habitudes (Notion, Google, emails…).",
    },
    {
      icon: "📈",
      title: "Plus de rentabilité, sans plus de charge",
      description:
        "L’IA vous aide à faire mieux avec les mêmes ressources. Chaque automatisation vous permet de produire plus de valeur, sans alourdir vos équipes.",
    },
    {
      icon: "💸",
      title: "Moins de coûts cachés",
      description:
        "Moins d’erreurs manuelles, moins de tâches sous-traitées, moins de temps perdu = plus d’économies au quotidien.",
    },
    {
      icon: "🎯",
      title: "Plus de clients convertis",
      description:
        "En automatisant vos suivis, vos relances ou vos réponses, vous ne laissez plus filer vos prospects. L’IA travaille même quand vous dormez.",
    },
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
      <h2 className="section-title">L'IA, ce n’est pas magique. Mais bien utilisée, c’est bluffant.</h2>
      <p className="section-subtitle">
        Oubliez les buzzwords. Chez Neuroly, on vous montre comment utiliser l'IA comme un outil simple et puissant pour vous faire gagner du temps et de la clarté, sans jamais remplacer l'humain.
      </p>

      <p className="mt-6 text-lg text-text/80">
        Pas besoin d’être expert ou technophile. Notre mission : rendre l’IA concrète, utile et facile à intégrer dans vos habitudes pro. Vous allez voir, c’est plus simple qu’il n’y paraît.
      </p>

      <div className="space-y-4 text-left mt-10 text-lg">
        {[
          "❌ L’IA ne remplace personne. Elle vous aide à mieux faire ce que vous faites déjà.",
          "⏱️ Automatisez vos tâches répétitives et libérez 1 à 2 heures par jour.",
          "🧠 On vous explique avec des exemples concrets, pas des diagrammes incompréhensibles.",
          "📧 Si vous savez envoyer un mail, vous pouvez utiliser l’IA. C’est aussi simple que ça.",
          "🤝 Et on reste à vos côtés à chaque étape. Vous n’êtes jamais seul face à la technologie."
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