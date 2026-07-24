import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const courses = [
  {
    to: '/young-learners-students',
    title: 'Young Learners/Students',
    img: '/assets/Young-Learners-Students.png',
  },
  {
    to: '/working-professionals',
    title: 'Working Professionals',
    img: '/assets/Working-Professionals-1.jpg',
  },
  {
    to: '/corporate-training',
    title: 'Corporate Training',
    img: '/assets/Corporate-Training-2.jpg',
  },
  {
    to: '/online-classes',
    title: 'Online Classes',
    img: '/assets/On-Line-Skype-Courses.png',
  },
  {
    to: 'https://namastemandarin.ongraphy.com/',
    title: 'Online Courses',
    img: '/assets/online-courses-2.jpg',
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero title="Courses" banner="/assets/banner-courses.jpg" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((c) => {
              const cls =
                'group relative block rounded-2xl overflow-hidden shadow-sm border border-gray-100';
              const inner = (
                <>
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                    <h3 className="text-white font-body text-lg font-semibold">{c.title}</h3>
                    <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </>
              );
              return c.to.startsWith('http') ? (
                <a key={c.to} href={c.to} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={c.to} to={c.to} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
