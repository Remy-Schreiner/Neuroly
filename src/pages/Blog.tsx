import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articles = [
    {
      title: "ChatGPT, c'est pas que pour coder : 5 idées concrètes pour les indépendants",
      excerpt: "Découvrez comment utiliser ChatGPT pour améliorer votre productivité au quotidien, même si vous n'êtes pas développeur.",
      image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=800",
      date: "2024-03-15",
      readTime: "5 min",
      category: "Productivité"
    },
    {
      title: "Comment l'IA peut vous faire gagner 2h par jour",
      excerpt: "Un guide pratique pour automatiser vos tâches répétitives et vous concentrer sur l'essentiel de votre métier.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800",
      date: "2024-03-10",
      readTime: "8 min",
      category: "Guide"
    },
    {
      title: "Les meilleurs outils IA pour les TPE/PME en 2024",
      excerpt: "Notre sélection d'outils IA accessibles et efficaces pour booster votre entreprise.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      date: "2024-03-05",
      readTime: "6 min",
      category: "Outils"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-white">
        <div className="container">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-text mb-6">
              L'IA, expliquée simplement
            </h1>
            <p className="text-xl text-text/80">
              Des articles concrets pour comprendre et utiliser l'IA, sans être développeur.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="grid md:grid-cols-2">
                  <div className="h-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm mb-4">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-4 text-text/60 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(article.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      <Link to="#" className="hover:text-primary" onClick={scrollToTop}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-text/80 mb-6">
                      {article.excerpt}
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center text-primary hover:opacity-80"
                      onClick={scrollToTop}
                    >
                      Lire la suite
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Restez informé des dernières actualités
            </h2>
            <p className="text-text/80 mb-8">
              Recevez nos meilleurs conseils et astuces pour utiliser l'IA efficacement.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:border-primary"
              />
              <button type="submit" className="btn-primary whitespace-nowrap" onClick={scrollToTop}>
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;