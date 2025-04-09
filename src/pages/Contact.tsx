import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://tally.so' && event.data?.type === 'tally:form-submitted') {
        setShowCalendly(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-secondary/10">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-text mb-6">
            On passe à l'action ? 💥
          </h1>
          <p className="text-xl text-text/80">
            L'IA ne va pas révolutionner votre activité toute seule. Mais avec nous, vous saurez exactement comment l'apprivoiser pour en faire une alliée du quotidien.
          </p>
        </div>
      </section>

      {/* Pré-audit */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Réservez un appel - Diagnostic IA, gratuit & sans engagement</h2>
            <p className="text-text/80 text-lg mb-6">
              Ce questionnaire nous permet de mieux comprendre votre activité, vos habitudes, et vos besoins. <br />
              Ensuite, on prend rendez-vous ensemble pour en discuter de vive voix 📞
            </p>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              {!showCalendly ? (
                <iframe
                  ref={iframeRef}
                  src="https://tally.so/embed/w4GQ9A?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  style={{ width: '100%', height: '100%' }}
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Questionnaire de pré-audit"
                  className="min-h-[600px]"
                ></iframe>
              ) : (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-center mb-4">
                    Une fois le questionnaire envoyé, prenez rendez-vous :
                  </h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <iframe
                      src="https://calendly.com/remyschreiner83510/30min?hide_gdpr_banner=1"
                      style={{ width: '100%', height: '100%' }}
                      frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Calendly"
                className="min-h-[600px]"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>

     {/* FAQ – Page Contact */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Avant de nous écrire ✍️</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "📞",
                question: "C’est quoi exactement l’audit gratuit ?",
                answer:
                  "C’est une visio de 30 minutes, tranquille, où on parle de votre activité, vos galères du quotidien et vos idées. On repère ensemble ce que l’IA peut vraiment améliorer pour vous. C’est sans engagement, et surtout sans pression.",
              },
              {
                icon: "🧑‍🎓",
                question: "Et si je ne suis pas du tout ‘tech’ ?",
                answer:
                  "Tant mieux ! On a pensé notre méthode pour les gens normaux, pas pour les robots. On vous explique tout calmement, avec des mots clairs et des exemples concrets. Vous verrez, l’IA, ce n’est pas plus compliqué qu’un micro-ondes.",
              },
              {
                icon: "📆",
                question: "L’accompagnement, ça dure combien de temps ?",
                answer:
                  "Ça dépend de vous. Certains veulent juste un coup de pouce, d’autres un vrai copilote sur la durée. On s’adapte. On peut travailler ensemble 1 mois, 3 mois, ou vous suivre toute l’année si besoin.",
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
              >
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

export default Contact;
