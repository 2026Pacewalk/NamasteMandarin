import ContentPage from '../components/ContentPage';

export default function OnlineClassesPage() {
  return (
    <ContentPage
      title="Online Classes"
      kicker="Learn Anywhere"
      heading="Online Classes"
      heroBanner="/assets/banner-online-classes.jpg"
      image="/assets/online-classes-video.jpg"
      imageUncropped
      paragraphs={[
        'Online classes provide you with the advantage of taking classes from the comfort of your home & at your convenient time, without worrying much about the travelling part.',
        'Our online classes are one-on-one sessions & group sessions conducted through Skype/Google Hangouts (not pre-recorded videos). All study materials are shared online which can be accessed anytime at your convenient time.',
        'One-on-one sessions also provide you with the flexibility of self-paced learning.',
      ]}
    >
      {/* Info card (no button) */}
      <div className="mt-12 rounded-3xl bg-red-rich star-bg p-8 lg:p-10 text-center">
        <h3 className="font-display text-2xl lg:text-3xl text-white font-semibold">
          Ready to start learning online?
        </h3>
        <p className="text-white/75 text-sm lg:text-base mt-2 max-w-xl mx-auto">
          Contact Us today!!
        </p>
      </div>
    </ContentPage>
  );
}
