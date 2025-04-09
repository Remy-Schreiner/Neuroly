import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Target, BookOpen, Shield, Brain, CheckCircle, Settings, Users } from 'lucide-react';

const Approach = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Valeurs */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="section-title text-center">Nos valeurs chez Neuroly</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Humain avant tout",
          description:
            "Chez nous, la technologie ne remplace pas les gens, elle les aide. On parle à des humains, pas à des machines. Et ça change tout : on prend le temps d'écouter, de comprendre, d'accompagner. On veut que vous vous sentiez à l’aise, même si vous débutez.",
        },
        {
          icon: <Target className="h-8 w-8 text-primary" />,
          title: "Efficacité concrète",
          description:
            "Pas de solutions qui brillent juste en vitrine. Ce qui compte pour nous, c’est ce que ça change pour vous : gagner du temps, alléger la charge mentale, avancer plus vite et plus sereinement. Si ça ne vous aide pas vraiment, on ne vous le propose pas. Point final.",
        },
        {
          icon: <BookOpen className="h-8 w-8 text-primary" />,
          title: "Pédagogie accessible",
          description:
            "On ne vous balance pas des termes techniques comme des confettis. On explique tout simplement, avec des mots clairs, des exemples concrets, et autant de fois qu’il faut. Apprendre l’IA, ça peut être facile, et même agréable. On est là pour vous le prouver.",
        },
        {
          icon: <Shield className="h-8 w-8 text-primary" />,
          title: "Éthique & transparence",
          description:
            "On dit ce qu’on fait, et on fait ce qu’on dit. Pas de fausses promesses, pas d’outils douteux, pas de boîte noire incompréhensible. L’IA doit être utilisée avec bon sens, dans le respect des gens et de leurs données. Et ça, on ne transige pas dessus.",
        }
      ].map((value, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="mb-4">{value.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
          <p className="text-text/80">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Notre Histoire */}
      <section className="py-20 bg-secondary/10">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">La naissance de Neuroly 🚀</h2>
          </div>
          <div className="prose text-lg text-text/80 mx-auto">
            <p className="mb-6">
              J’ai bossé longtemps dans la tech. Des startups, des outils, des pitchs, des lignes de code à ne plus en voir le bout. Et puis un jour, j’ai vraiment plongé dans l’univers de l’intelligence artificielle.
            </p>

            <p className="mb-6">
              Là, j’ai vu tout ce que cette technologie pouvait faire : automatiser, anticiper, créer, simplifier… bref, un véritable super-pouvoir pour les entreprises. Mais il y avait un hic. Un gros.
            </p>

            <p className="mb-6">
              Autour de moi, des pros brillants, motivés, compétents, mais totalement perdus face à l’IA. Pas parce qu’ils n’étaient pas capables. Non. Parce qu’on leur présentait ça avec des mots compliqués, des concepts flous et trop de blabla. Comme si ce monde-là n’était pas pour eux.
            </p>

            <p className="mb-6">
              Alors j’ai eu envie de casser ce mur invisible. De rendre l’IA concrète, simple, compréhensible. De créer un espace où on te parle normalement, où tu peux poser toutes les questions (même celles que tu n’oses pas), et surtout… où tu repars avec des vraies solutions utiles.
            </p>

            <p className="mb-6">
              C’est comme ça que Neuroly est né. Un projet humain, pas une usine à automatisation. Une main tendue entre la tech et le terrain.
            </p>

            <p className="mb-6 font-semibold text-primary">
              Parce qu’au fond, l’IA ne remplace pas les humains. Elle les aide à aller plus loin, plus vite, avec moins de charge mentale.
            </p>

          </div>
        </div>
      </section>
      {/* Introduction */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Brain className="h-12 w-12 text-primary" />,
                title: "Audit personnalisé",
          description:
            "Avant de foncer tête baissée, on prend le temps de vous écouter, d’analyser comment vous travaillez aujourd’hui, et de détecter là où l’IA peut réellement faire la différence.",
                features: [
                  "Observation concrète de votre fonctionnement actuel",
                  "Repérage des tâches répétitives et chronophages",
                  "Chiffrage du temps ou des ressources économisables",
                  "Recommandations simples, claires et adaptées à vos enjeux"
                ],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
              },
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Intégration",
                description:
                  "Pas besoin de tout changer : on choisit les bons outils et on les intègre naturellement à vos habitudes. L’IA devient un réflexe, pas une usine à gaz.",
                features: [
                  "Choix d’outils utiles (pas juste à la mode)",
                  "Paramétrage sur-mesure selon vos usages",
                  "Connexion fluide avec vos logiciels existants",
                  "Tests, ajustements et mise en place sans stress"
                ],
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-primary" />,
                title: "Formation",
                description:
                  "On vous forme avec bienveillance, à votre rythme. Même si vous partez de zéro, vous comprendrez comment fonctionne l’IA et comment l’utiliser avec confiance.",
                features: [
                  "Ateliers pratiques, pas de slides soporifiques",
                  "Supports clairs et concrets (guides + vidéos)",
                  "Exemples adaptés à votre métier, pas génériques",
                  "Formation continue avec réponses à vos questions"
                ],
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Suivi",
                description:
                  "Une fois lancé, on ne vous lâche pas dans la nature. On suit vos progrès, on ajuste ce qu’il faut, et on reste à vos côtés pour faire évoluer votre IA au fil du temps.",
                features: [
                  "Points réguliers pour voir ce qui fonctionne (ou pas)",
                  "Améliorations continues selon vos retours",
                  "Support technique réactif quand vous en avez besoin",
                  "Proposition d’outils nouveaux ou de mises à jour pertinentes"
                ],
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                  to="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                  onClick={scrollToTop}
                >
                  <span>Contacter-nous</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
    <section className="py-20 bg-secondary/10">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-4">Notre engagement : vous mettre aux commandes</h2>
        <p className="text-lg text-text/80 mb-12">
          L’intelligence artificielle ne devrait jamais être une boîte noire réservée aux experts.
          Elle doit être un outil simple, clair, qui vous aide à avancer, à décider, à respirer un peu mieux.
          C’est pour ça qu’on a créé Neuroly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          {[
            {
              title: "🚫 Pas de jargon, jamais.",
              text: "On vous parle comme on parlerait à un ami. Parce qu’un outil que vous ne comprenez pas, c’est un outil que vous n’utiliserez jamais vraiment."
            },
            {
              title: "✅ Du concret, tout de suite.",
              text: "On ne vous promet pas des miracles. On vous montre ce qui est possible, ce qui est utile, et surtout : ce qui peut être mis en place dès maintenant."
            },
            {
              title: "🧭 De l’éthique, pour de vrai.",
              text: "Pas de manipulation cachée, pas de traitement flou des données. On fait de l’IA avec des valeurs. Et ça, on ne négocie pas."
            },
            {
              title: "🧑‍🤝‍🧑 Un accompagnement humain.",
              text: "Derrière l’écran, il y a une vraie équipe, qui écoute, qui répond, qui adapte. Vous n’êtes jamais laissé seul avec une IA froide et silencieuse."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-text/80">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-medium mb-8">
          Si vous cherchez une IA qui vous simplifie la vie (et pas l’inverse), vous êtes au bon endroit.
        </p>

        <Link to="/contact" className="btn-primary" onClick={scrollToTop}>
          Discutons de votre projet
        </Link>
      </div>
    </section>
    </div>
  );
};

export default Approach;